'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { verHistorialPrestamosCliente } from '@/api/clientes'
import { enviarNotificacionCuotaEmail, generarCuotasSemanales, listarPrestamos, registrarPagoSemanal } from '@/api/cuotas'
import usePermissions from '@/hooks/usePermissions'
import { obtenerDocumentoUrl } from '@/api/solicitudes'
import { getToken } from '@/lib/auth/session'
import { formatUSD } from '@/utils/currency'
import { formatDateMMDDYYYY } from '@/utils/date'

const formatCurrency = value => formatUSD(value)
const formatNaturalNumber = value => new Intl.NumberFormat('es-DO', { maximumFractionDigits: 0 }).format(Number(value || 0))

const normalizeText = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
const parseDescuentoReferidoAplicado = row => {
  const raw =
    row?.descuento_referido_aplicado ??
    row?.descuentoReferidoAplicado ??
    row?.descuento_referido ??
    row?.monto_descuento_referido ??
    row?.prestamo?.descuento_referido_aplicado ??
    0
  const parsed = Number(raw)

  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}
const hasDescuentoReferidoObservacion = row => {
  const observationCandidates = [
    row?.observaciones,
    row?.ultima_cuota_observacion,
    row?.observacion_ultima_cuota,
    row?.observacion,
    row?.ultima_cuota?.observaciones,
    row?.ultima_cuota?.observacion,
    row?.ultimaCuota?.observaciones,
    row?.ultimaCuota?.observacion
  ]
  const normalized = observationCandidates.map(normalizeText).join(' ')

  return normalized.includes('descuento referido aplicado') || normalized.includes('descuento referido')
}

const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows

  return []
}

const extractPagination = payload => {
  const source = payload?.pagination || payload?.data?.pagination

  return {
    page: Number(source?.page || 1),
    pages: Number(source?.pages || 1),
    total: Number(source?.total || extractRows(payload).length)
  }
}

const getCuotasRestantes = row => {
  if (Number.isFinite(Number(row.num_semanas)) && Number.isFinite(Number(row.pagos_hechos))) {
    return Math.max(Number(row.num_semanas) - Number(row.pagos_hechos), 0)
  }

  if (
    Number.isFinite(Number(row.pagos_pendientes)) &&
    Number.isFinite(Number(row.pagos_semanales)) &&
    Number(row.pagos_semanales) > 0
  ) {
    return Math.ceil(Number(row.pagos_pendientes) / Number(row.pagos_semanales))
  }

  return 0
}

const countByStatus = (rows, status) => rows.filter(item => String(item?.status || '').toUpperCase() === status).length

const getOperationalStatus = row => {
  const rawStatus = String(row?.status || '').toUpperCase()
  const totalSemanas = Number(row?.num_semanas || 0)
  const pagosHechos = Number(row?.pagos_hechos || 0)
  const cuotasRestantes = getCuotasRestantes(row)

  if (rawStatus === 'CANCELADO' || rawStatus === 'PAGADO' || cuotasRestantes <= 0) return 'PAGADO'
  if (rawStatus === 'MOROSO') return 'MOROSO'
  if (totalSemanas > 0 && pagosHechos > 0 && pagosHechos < totalSemanas) return 'EN_MARCHA'
  if (rawStatus === 'ACTIVO' || totalSemanas > 0) return 'EN_PROCESO'

  return rawStatus || 'PENDIENTE'
}

const getStatusColor = status => {
  const normalized = String(status || '').toUpperCase()

  if (normalized === 'ACTIVO') return 'success'
  if (normalized === 'EN_MARCHA') return 'success'
  if (normalized === 'EN_PROCESO') return 'warning'
  if (normalized === 'MOROSO') return 'error'
  if (normalized === 'PAGADO' || normalized === 'CANCELADO') return 'info'
  if (normalized.includes('LE QUEDAN')) return 'primary'

  return 'warning'
}

const parseDecimalInput = value => Number(String(value ?? '').replace(',', '.'))
const roundToCents = value => Number((Number(value || 0) + Number.EPSILON).toFixed(2))
const getEscenarioPago = (montoPago, cuotaObjetivo) => {
  const monto = roundToCents(montoPago)
  const cuota = roundToCents(cuotaObjetivo)
  const diferencia = roundToCents(Math.abs(monto - cuota))

  if (diferencia <= 0.009) {
    return { tipo: 'COMPLETO', diferencia: 0 }
  }

  if (monto < cuota) {
    return { tipo: 'PARCIAL', diferencia }
  }

  return { tipo: 'ADELANTADO', diferencia }
}
const normalizeBackendOrigin = () => {
  const raw = String(process.env.NEXT_PUBLIC_API_URL || '').trim().replace(/\/$/, '')

  if (!raw) return ''
  if (raw.endsWith('/api')) return raw.slice(0, -4)

  return raw
}
const forceHttpsIfNeeded = inputUrl => {
  const raw = String(inputUrl || '').trim()

  if (!raw) return ''

  try {
    const parsed = new URL(raw)
    const currentProtocol = typeof window !== 'undefined' ? window.location.protocol : ''

    if (currentProtocol === 'https:' && parsed.protocol === 'http:') {
      parsed.protocol = 'https:'
    }

    return parsed.toString()
  } catch {
    return raw
  }
}
const buildCandidateUrls = value => {
  const raw = String(value || '').trim()

  if (!raw) return []
  if (/^https?:\/\//i.test(raw)) return [forceHttpsIfNeeded(raw)]

  const backendOrigin = forceHttpsIfNeeded(normalizeBackendOrigin())

  if (!backendOrigin) return [raw]

  if (raw.startsWith('/uploads/')) {
    return [forceHttpsIfNeeded(`${backendOrigin}/api${raw}`), forceHttpsIfNeeded(`${backendOrigin}${raw}`)]
  }

  if (raw.startsWith('uploads/')) {
    return [forceHttpsIfNeeded(`${backendOrigin}/api/${raw}`), forceHttpsIfNeeded(`${backendOrigin}/${raw}`)]
  }

  if (raw.startsWith('/')) return [forceHttpsIfNeeded(`${backendOrigin}${raw}`)]

  return [forceHttpsIfNeeded(`${backendOrigin}/${raw}`)]
}
const getContractOpenUrl = row => {
  const raw =
    row?.contrato_credito_url ||
    row?.contrato_url ||
    row?.url_contrato ||
    row?.contrato?.url_descarga ||
    row?.contrato?.download_url ||
    row?.contrato?.url ||
    ''
  const urls = buildCandidateUrls(raw)

  return urls[0] || ''
}
const getContractDocumentId = row =>
  String(
    row?.contrato_credito_id ||
      row?.contrato_id ||
      row?.documento_id ||
      row?.contrato?.id ||
      row?.contrato?.documento_id ||
      ''
  ).trim()

export default function CuotasModule() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { can, canAny, analista } = usePermissions()
  const [prestamos, setPrestamos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [searchCliente, setSearchCliente] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [status, setStatus] = useState('TODOS')
  const [modalidadFiltro, setModalidadFiltro] = useState('')
  const [orden, setOrden] = useState('reciente')
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 })

  const [pagoDialogOpen, setPagoDialogOpen] = useState(false)
  const [selectedPrestamo, setSelectedPrestamo] = useState(null)
  const [montoPago, setMontoPago] = useState('')
  const [montoPenalizacion, setMontoPenalizacion] = useState('0')
  const [pagoDialogError, setPagoDialogError] = useState('')
  const [pagoDialogInfo, setPagoDialogInfo] = useState('')
  const [processing, setProcessing] = useState(false)
  const [notifyingPrestamoId, setNotifyingPrestamoId] = useState('')
  const [detalleDialogError, setDetalleDialogError] = useState('')
  const [detalleOpen, setDetalleOpen] = useState(false)
  const [historialOpen, setHistorialOpen] = useState(false)
  const [historialLoading, setHistorialLoading] = useState(false)
  const [historialError, setHistorialError] = useState('')
  const [historialCliente, setHistorialCliente] = useState({ id: '', nombre: '' })
  const [historialRows, setHistorialRows] = useState([])
  const [historialPage, setHistorialPage] = useState(1)
  const [historialPagination, setHistorialPagination] = useState({ page: 1, pages: 1, total: 0 })
  const canViewCuotas = canAny(['cuotas.view', 'prestamos.view'])
  const canRegistrarPago = can('prestamos.pay')
  const canManageCuotas = can('cuotas.manage')
  const canViewPrestamos = can('prestamos.view')
  const canViewDocumentos = can('documentos.view')
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')
  const canSendNotifications = isAdminProfile || can('notifications.send')

  const montoEsperadoPago = useMemo(() => {
    const cuotaSemanal = parseDecimalInput(selectedPrestamo?.pagos_semanales || 0)
    const penalizacion = parseDecimalInput(montoPenalizacion || 0)

    return (Number.isFinite(cuotaSemanal) ? cuotaSemanal : 0) + (Number.isFinite(penalizacion) ? penalizacion : 0)
  }, [selectedPrestamo, montoPenalizacion])
  const escenarioPago = useMemo(() => {
    const parsedMonto = parseDecimalInput(montoPago || 0)

    if (!Number.isFinite(parsedMonto) || parsedMonto <= 0) {
      return null
    }

    return getEscenarioPago(parsedMonto, montoEsperadoPago)
  }, [montoEsperadoPago, montoPago])

  const loadPrestamos = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const queryStatus = status === 'TODOS' ? undefined : status
      const response = await listarPrestamos({ page, limit, status: queryStatus })
      let rows = extractRows(response)

      if (searchCliente.trim()) {
        const normalizedQuery = normalizeText(searchCliente)

        rows = rows.filter(row => {
          const label = normalizeText(row.nombre_completo)

          return label.includes(normalizedQuery)
        })
      }

      setPrestamos(rows)
      setPagination(extractPagination(response))
    } catch (err) {
      setError(err.message || 'No se pudo cargar préstamos.')
    } finally {
      setLoading(false)
    }
  }, [limit, page, searchCliente, status])

  useEffect(() => {
    loadPrestamos()
  }, [loadPrestamos])

  useEffect(() => {
    setPage(1)
  }, [limit, searchCliente, status])

  const openPagoDialog = row => {
    setPagoDialogError('')
    setPagoDialogInfo('')
    setSelectedPrestamo(row)
    setMontoPago(String(row.pagos_semanales || ''))
    setMontoPenalizacion('0')
    setPagoDialogOpen(true)
  }

  const renderAccionesPrestamo = row => (
    <Stack direction='row' spacing={0.5} flexWrap='wrap'>
      {canRegistrarPago ? (
        <Tooltip title='Registrar pago'>
          <IconButton size='small' color='error' onClick={() => openPagoDialog(row)}>
            <i className='tabler-cash text-3xl' />
          </IconButton>
        </Tooltip>
      ) : null}
      {canViewPrestamos ? (
        <Tooltip title='Historial'>
          <IconButton size='small' color='secondary' onClick={() => openHistorial(row)}>
            <i className='tabler-history text-3xl' />
          </IconButton>
        </Tooltip>
      ) : null}
      {canViewPrestamos ? (
        <Tooltip title='Ver detalle'>
          <IconButton size='small' onClick={() => openDetalleDialog(row)}>
            <i className='tabler-eye text-3xl' />
          </IconButton>
        </Tooltip>
      ) : null}
      {canSendNotifications ? (
        <Tooltip title='Enviar notificación por correo'>
          <span>
            <IconButton
              size='small'
              color='info'
              onClick={() => enviarNotificacionEmail(row)}
              disabled={notifyingPrestamoId === String(row.id)}
            >
              {notifyingPrestamoId === String(row.id) ? (
                <CircularProgress size={18} color='inherit' />
              ) : (
                <i className='tabler-mail text-3xl' />
              )}
            </IconButton>
          </span>
        </Tooltip>
      ) : null}
      {canSendNotifications ? (
        <Tooltip title='WhatsApp (próximamente)'>
          <IconButton size='small' color='success' onClick={() => {}}>
            <i className='tabler-brand-whatsapp-filled text-3xl' />
          </IconButton>
        </Tooltip>
      ) : null}
      {!canRegistrarPago && !canViewPrestamos && !canSendNotifications ? (
        <Typography variant='body2' color='text.secondary'>
          Sin acciones
        </Typography>
      ) : null}
    </Stack>
  )

  const openDetalleDialog = row => {
    setSelectedPrestamo(row)
    setDetalleDialogError('')
    setDetalleOpen(true)
  }

  const closePagoDialog = () => {
    setPagoDialogOpen(false)
    setSelectedPrestamo(null)
    setMontoPago('')
    setMontoPenalizacion('0')
    setPagoDialogError('')
    setPagoDialogInfo('')
  }

  const confirmarPago = async () => {
    if (!selectedPrestamo) return

    const parsedMonto = parseDecimalInput(montoPago || '')
    const parsedPenalizacion = parseDecimalInput(montoPenalizacion || '0')

    if (!Number.isFinite(parsedMonto) || parsedMonto <= 0) {
      setPagoDialogError('El monto de pago debe ser mayor que 0.')

      return
    }

    if (!Number.isFinite(parsedPenalizacion) || parsedPenalizacion < 0) {
      setPagoDialogError('El monto de penalización debe ser mayor o igual a 0.')

      return
    }

    setProcessing(true)
    setPagoDialogError('')
    setPagoDialogInfo('')

    try {
      await registrarPagoSemanal(selectedPrestamo.id, parsedMonto, parsedPenalizacion)
      const nextStatus = getOperationalStatus({
        ...selectedPrestamo,
        pagos_hechos: Number(selectedPrestamo?.pagos_hechos || 0) + 1
      })

      const escenario = getEscenarioPago(parsedMonto, montoEsperadoPago)
      const ajusteSiguienteCuota =
        escenario.tipo === 'PARCIAL'
          ? `Faltante ${formatCurrency(escenario.diferencia)}: se suma a la próxima cuota.`
          : escenario.tipo === 'ADELANTADO'
            ? `Excedente ${formatCurrency(escenario.diferencia)}: se descuenta de la próxima cuota.`
            : 'Pago completo de cuota.'

      setPagoDialogInfo(
        `Pago semanal registrado para ${selectedPrestamo.nombre_completo || 'el cliente seleccionado'}. ${ajusteSiguienteCuota} Estado: ${nextStatus}.`
      )
      await loadPrestamos()
      setTimeout(() => {
        closePagoDialog()
      }, 1200)
    } catch (err) {
      const message = err.message || 'No se pudo registrar la cuota.'

      const shouldGenerateCuotas =
        message.toLowerCase().includes('no existe cuota pendiente') ||
        message.toLowerCase().includes('cuota') ||
        message.toLowerCase().includes('generar')

      if (shouldGenerateCuotas) {
        try {
          await generarCuotasSemanales(selectedPrestamo.id, {
            fecha_inicio: String(selectedPrestamo?.fecha_inicio || '').slice(0, 10) || undefined,
            num_semanas: Number(selectedPrestamo?.num_semanas || 0),
            monto_solicitado: Number(selectedPrestamo?.monto_solicitado || 0),
            interes: Number(selectedPrestamo?.interes || 0)
          })

          await registrarPagoSemanal(selectedPrestamo.id, parsedMonto, parsedPenalizacion)
          setPagoDialogInfo(
            `Cuotas generadas y pago registrado para ${selectedPrestamo.nombre_completo || 'el cliente seleccionado'}.`
          )
          await loadPrestamos()
          setTimeout(() => {
            closePagoDialog()
          }, 1200)

          return
        } catch (retryError) {
          setPagoDialogError(retryError.message || 'No se pudo generar cuotas ni registrar pago.')

          return
        }
      }

      setPagoDialogError(message)
    } finally {
      setProcessing(false)
    }
  }

  const handleOpenContratoPdf = async row => {
    setDetalleDialogError('')
    let url = getContractOpenUrl(row)

    try {
      if (!url) {
        const documentId = getContractDocumentId(row)

        if (documentId) {
          const response = await obtenerDocumentoUrl(documentId)
          const resolvedUrl = response?.data?.url || response?.url || response?.data?.url_descarga || ''

          if (resolvedUrl) {
            const candidates = buildCandidateUrls(resolvedUrl)

            url = candidates[0] || resolvedUrl
          }
        }
      }

      if (!url) {
        setDetalleDialogError('No se encontró URL del contrato para este préstamo.')

        return
      }

      const token = getToken()
      const headers = token ? { Authorization: `Bearer ${token}` } : {}
      const response = await fetch(url, {
        method: 'GET',
        headers,
        cache: 'no-store'
      })

      if (!response.ok) {
        const opened = window.open(url, '_blank', 'noopener,noreferrer')

        if (!opened) {
          setDetalleDialogError('No se pudo abrir el contrato PDF.')
        }

        return
      }

      const blob = await response.blob()
      const objectUrl = window.URL.createObjectURL(blob)

      window.open(objectUrl, '_blank', 'noopener,noreferrer')
      window.setTimeout(() => window.URL.revokeObjectURL(objectUrl), 5000)
    } catch {
      const opened = window.open(url, '_blank', 'noopener,noreferrer')

      if (!opened) {
        setDetalleDialogError('No se pudo abrir el contrato PDF.')
      }
    }
  }

  const enviarNotificacionEmail = async row => {
    if (!canSendNotifications) {
      setError('No tienes permisos para enviar notificaciones.')

      return
    }

    setError('')
    setSuccess('')
    setNotifyingPrestamoId(String(row.id))

    try {
      await enviarNotificacionCuotaEmail(row.id)
      setSuccess(`Notificación enviada por correo a ${row.nombre_completo || 'cliente'}.`)
    } catch (err) {
      setError(err.message || 'No se pudo enviar la notificación por correo.')
    } finally {
      setNotifyingPrestamoId('')
    }
  }

  const rows = useMemo(() => prestamos || [], [prestamos])

  const tableRows = useMemo(() => {
    let output = [...rows]

    if (modalidadFiltro) {
      output = output.filter(item => String(item?.modalidad || '').toUpperCase() === modalidadFiltro)
    }

    if (orden === 'monto_desc') {
      output.sort((a, b) => Number(b?.total_pagar || 0) - Number(a?.total_pagar || 0))
    }

    if (orden === 'monto_asc') {
      output.sort((a, b) => Number(a?.total_pagar || 0) - Number(b?.total_pagar || 0))
    }

    return output
  }, [modalidadFiltro, orden, rows])

  const metrics = useMemo(() => {
    return {
      total: pagination.total,
      activos: rows.filter(item => ['EN_PROCESO', 'EN_MARCHA'].includes(getOperationalStatus(item))).length,
      morosos: countByStatus(rows, 'MOROSO'),
      cuotasPendientes: rows.reduce((total, item) => total + getCuotasRestantes(item), 0)
    }
  }, [rows, pagination.total])

  const loadHistorial = useCallback(async (clienteId, pageValue = 1) => {
    if (!clienteId) return

    setHistorialLoading(true)
    setHistorialError('')

    try {
      const response = await verHistorialPrestamosCliente(clienteId, { page: pageValue, limit: 10 })

      setHistorialRows(extractRows(response))
      setHistorialPagination(extractPagination(response))
    } catch (err) {
      setHistorialError(err.message || 'No se pudo cargar el historial de préstamos.')
      setHistorialRows([])
      setHistorialPagination({ page: 1, pages: 1, total: 0 })
    } finally {
      setHistorialLoading(false)
    }
  }, [])

  const openHistorial = async row => {
    const clienteId = row.cliente_id || row.cliente?.id || ''
    const clienteNombre = row.nombre_completo || [row.cliente?.nombre, row.cliente?.apellido].filter(Boolean).join(' ')

    if (!clienteId) {
      setError('No se encontró el cliente asociado a este préstamo para consultar historial.')

      return
    }

    setHistorialCliente({ id: clienteId, nombre: clienteNombre || 'Cliente' })
    setHistorialPage(1)
    setHistorialOpen(true)
    await loadHistorial(clienteId, 1)
  }

  const handleExportCsv = () => {
    const headers = ['Cliente', 'MontoTotal', 'PagoSemanal', 'Semanas', 'Pendiente', 'Estado']

    const csvRows = tableRows.map(item => [
      item?.nombre_completo || '',
      item?.total_pagar || '',
      item?.pagos_semanales || '',
      item?.num_semanas || '',
      item?.pendiente || '',
      item?.status || ''
    ])

    const csv = [
      headers.join(','),
      ...csvRows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')

    anchor.href = url
    anchor.download = 'cuotas.csv'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  if (!canViewCuotas) {
    return <Alert severity='warning'>No tienes permisos para ver el registro de cuotas.</Alert>
  }

  return (
    <>
      <Card>
        <CardContent>
          <Grid container>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack direction='row' justifyContent='space-between' alignItems='center' px={2.5} py={1.5}>
                <Box>
                  <Typography variant='h3' fontWeight={700}>
                    {metrics.total}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Préstamos
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 3,
                    bgcolor: 'action.hover'
                  }}
                >
                  <i className='tabler-cash-banknote text-2xl' />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                px={2.5}
                py={1.5}
                sx={{ borderTop: { xs: 1, md: 0 }, borderLeft: { md: 1 }, borderColor: 'divider' }}
              >
                <Box>
                  <Typography variant='h3' fontWeight={700}>
                    {metrics.activos}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Activos
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 3,
                    bgcolor: 'success.lighter'
                  }}
                >
                  <i className='tabler-circle-check text-2xl' />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                px={2.5}
                py={1.5}
                sx={{ borderTop: { xs: 1, md: 0 }, borderLeft: { md: 1 }, borderColor: 'divider' }}
              >
                <Box>
                  <Typography variant='h3' fontWeight={700}>
                    {metrics.morosos}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Morosos
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 3,
                    bgcolor: 'error.lighter'
                  }}
                >
                  <i className='tabler-alert-triangle text-2xl' />
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                px={2.5}
                py={1.5}
                sx={{ borderTop: { xs: 1, md: 0 }, borderLeft: { md: 1 }, borderColor: 'divider' }}
              >
                <Box>
                  <Typography variant='h3' fontWeight={700}>
                    {metrics.cuotasPendientes}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Cuotas pendientes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: 3,
                    bgcolor: 'warning.lighter'
                  }}
                >
                  <i className='tabler-clock-hour-4 text-2xl' />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Stack spacing={3}>
            <Box>
              <Typography variant='h4'>Registro de cuotas</Typography>
              <Typography color='text.secondary'>Préstamos activos para registrar pago semanal.</Typography>
            </Box>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              justifyContent='space-between'
              alignItems={{ md: 'center' }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <TextField
                  select
                  size='small'
                  label='Mostrar'
                  value={String(limit)}
                  onChange={event => setLimit(Number(event.target.value))}
                  sx={{ minWidth: 100 }}
                >
                  <MenuItem value='10'>10</MenuItem>
                  <MenuItem value='20'>20</MenuItem>
                  <MenuItem value='50'>50</MenuItem>
                </TextField>
                <Button variant='tonal' color='secondary' onClick={handleExportCsv}>
                  Exportar
                </Button>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <TextField
                  size='small'
                  label='Buscar cliente'
                  placeholder='Buscar por nombre y apellido'
                  value={searchCliente}
                  onChange={event => setSearchCliente(event.target.value)}
                  sx={{ minWidth: { xs: '100%', md: 300 } }}
                />
                <TextField
                  select
                  size='small'
                  label='Estado'
                  value={status}
                  onChange={event => setStatus(event.target.value)}
                  sx={{ minWidth: { xs: '100%', sm: 170 } }}
                >
                  <MenuItem value='TODOS'>TODOS</MenuItem>
                  <MenuItem value='ACTIVO'>ACTIVO</MenuItem>
                  <MenuItem value='MOROSO'>MOROSO</MenuItem>
                  <MenuItem value='CANCELADO'>CANCELADO</MenuItem>
                </TextField>
              </Stack>
            </Stack>
            <Divider />

            {error ? <Alert severity='error'>{error}</Alert> : null}
            {success ? <Alert severity='success'>{success}</Alert> : null}

            {loading ? (
              <Stack alignItems='center' py={8}>
                <CircularProgress size={28} />
              </Stack>
            ) : !isMobile ? (
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox'>
                      <Checkbox size='small' />
                    </TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell>Monto total</TableCell>
                    <TableCell>Pago semanal</TableCell>
                    <TableCell>Semanas</TableCell>
                    <TableCell>Cuotas restantes</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map(row => (
                    <TableRow
                      key={row.id}
                      hover
                      onDoubleClick={() => {
                        if (!canViewPrestamos) return

                        openDetalleDialog(row)
                      }}
                      sx={{ cursor: canViewPrestamos ? 'pointer' : 'default' }}
                    >
                      <TableCell padding='checkbox'>
                        <Checkbox size='small' />
                      </TableCell>
                      <TableCell>{row.nombre_completo || '-'}</TableCell>
                      <TableCell>{formatCurrency(row.total_pagar)}</TableCell>
                      <TableCell>{formatCurrency(row.pagos_semanales)}</TableCell>
                      <TableCell>{row.num_semanas ?? '-'}</TableCell>
                      <TableCell>{getCuotasRestantes(row)}</TableCell>
                      <TableCell>
                        <Stack direction='row' spacing={0.75} flexWrap='wrap' alignItems='center'>
                          <Chip
                            size='small'
                            variant='tonal'
                            label={getOperationalStatus(row)}
                            color={getStatusColor(getOperationalStatus(row))}
                          />
                          {hasDescuentoReferidoObservacion(row) ? (
                            <Chip size='small' variant='tonal' color='success' label='Descuento referido' />
                          ) : null}
                        </Stack>
                      </TableCell>
                      <TableCell>{renderAccionesPrestamo(row)}</TableCell>
                    </TableRow>
                  ))}
                  {tableRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} align='center'>
                        Sin resultados
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
            ) : (
              <Stack spacing={1.25}>
                {tableRows.length === 0 ? <Alert severity='info'>Sin resultados</Alert> : null}
                {tableRows.map(row => (
                  <Card
                    key={row.id}
                    variant='outlined'
                    onDoubleClick={() => {
                      if (!canViewPrestamos) return
                      openDetalleDialog(row)
                    }}
                    sx={{ borderRadius: 2 }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Stack spacing={1}>
                        <Stack direction='row' justifyContent='space-between' alignItems='center'>
                          <Typography fontWeight={700}>{row.nombre_completo || '-'}</Typography>
                          <Chip
                            size='small'
                            variant='tonal'
                            label={getOperationalStatus(row)}
                            color={getStatusColor(getOperationalStatus(row))}
                          />
                        </Stack>
                        <Typography variant='body2' color='text.secondary'>
                          Monto total: {formatCurrency(row.total_pagar)}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Pago semanal: {formatCurrency(row.pagos_semanales)}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Semanas: {row.num_semanas ?? '-'} • Cuotas restantes: {getCuotasRestantes(row)}
                        </Typography>
                        {hasDescuentoReferidoObservacion(row) ? (
                          <Chip size='small' variant='tonal' color='success' label='Descuento referido' sx={{ width: 'fit-content' }} />
                        ) : null}
                        <Divider sx={{ my: 0.5 }} />
                        {renderAccionesPrestamo(row)}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            )}

            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Typography color='text.secondary'>Total: {pagination.total}</Typography>
              <Pagination
                page={pagination.page}
                count={Math.max(pagination.pages, 1)}
                onChange={(_, value) => setPage(value)}
                size='small'
                color='primary'
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Dialog open={pagoDialogOpen} onClose={closePagoDialog} fullWidth maxWidth='sm'>
        <DialogTitle>Confirmar pago semanal</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {pagoDialogError ? <Alert severity='error'>{pagoDialogError}</Alert> : null}
            {pagoDialogInfo ? <Alert severity='success'>{pagoDialogInfo}</Alert> : null}
            <Typography>
              Cliente: <strong>{selectedPrestamo?.nombre_completo || '-'}</strong>
            </Typography>
            <Typography>
              Monto total: <strong>{formatCurrency(selectedPrestamo?.total_pagar)}</strong>
            </Typography>
            <Typography>
              Número de semanas: <strong>{selectedPrestamo?.num_semanas ?? '-'}</strong>
            </Typography>
            <Typography>
              Cuotas restantes: <strong>{selectedPrestamo ? getCuotasRestantes(selectedPrestamo) : 0}</strong>
            </Typography>
            <TextField
              label='Monto pago'
              type='number'
              value={montoPago}
              onChange={event => setMontoPago(event.target.value)}
              inputProps={{ min: 0, step: '0.01' }}
              size='small'
              helperText={`Cuota base: ${formatCurrency(montoEsperadoPago)}. Puedes pagar un monto mayor, menor o igual.`}
              required
            />
            {escenarioPago ? (
              <Alert severity={escenarioPago.tipo === 'COMPLETO' ? 'success' : 'info'}>
                {escenarioPago.tipo === 'COMPLETO'
                  ? 'Pago completo: se registra la cuota actual.'
                  : escenarioPago.tipo === 'PARCIAL'
                    ? `Pago parcial: faltan ${formatCurrency(escenarioPago.diferencia)} y se sumarán a la próxima cuota.`
                    : `Pago mayor: excedente ${formatCurrency(escenarioPago.diferencia)} y se descontará de la próxima cuota.`}
              </Alert>
            ) : null}
            <TextField
              label='Monto de penalización'
              type='number'
              value={montoPenalizacion}
              onChange={event => setMontoPenalizacion(event.target.value)}
              inputProps={{ min: 0, step: '0.01' }}
              size='small'
              helperText='Usa 0 si no aplica castigo por mora.'
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={closePagoDialog} disabled={processing}>
            Cancelar
          </Button>
          <Button variant='contained' color='success' onClick={confirmarPago} disabled={processing}>
            {processing ? 'Procesando...' : 'Confirmar'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={detalleOpen}
        onClose={() => {
          setDetalleOpen(false)
          setDetalleDialogError('')
        }}
        fullWidth
        maxWidth='md'
      >
        <DialogTitle>Detalle del préstamo</DialogTitle>
        <DialogContent>
          <Stack spacing={1.2} mt={1}>
            {detalleDialogError ? <Alert severity='error'>{detalleDialogError}</Alert> : null}
            <Typography>
              Cliente: <strong>{selectedPrestamo?.nombre_completo || '-'}</strong>
            </Typography>
            <Typography>
              Monto solicitado: <strong>{formatCurrency(selectedPrestamo?.monto_solicitado)}</strong>
            </Typography>
            <Typography>
              Total pagar: <strong>{formatCurrency(selectedPrestamo?.total_pagar)}</strong>
            </Typography>
            <Typography>
              Interés: <strong>{selectedPrestamo?.interes ?? '-'}</strong>
            </Typography>
            <Typography>
              Modalidad: <strong>{selectedPrestamo?.modalidad || '-'}</strong>
            </Typography>
            <Typography>
              Semanas: <strong>{selectedPrestamo?.num_semanas ?? '-'}</strong>
            </Typography>
            <Typography>
              Pagos hechos: <strong>{formatNaturalNumber(selectedPrestamo?.pagos_hechos)}</strong>
            </Typography>
            <Typography>
              Pagos pendientes: <strong>{formatNaturalNumber(selectedPrestamo?.pagos_pendientes)}</strong>
            </Typography>
            <Typography>
              Fecha inicio: <strong>{formatDateMMDDYYYY(selectedPrestamo?.fecha_inicio)}</strong>
            </Typography>
            <Typography>
              Fecha vencimiento: <strong>{formatDateMMDDYYYY(selectedPrestamo?.fecha_vencimiento)}</strong>
            </Typography>
            <Typography>
              Estado: <strong>{selectedPrestamo?.status || '-'}</strong>
            </Typography>
            {parseDescuentoReferidoAplicado(selectedPrestamo) > 0 ? (
              <Chip
                size='small'
                variant='tonal'
                color='success'
                label={`Descuento por referido aplicado: ${formatCurrency(parseDescuentoReferidoAplicado(selectedPrestamo))}`}
              />
            ) : null}
            <Typography>
              Contrato PDF:{' '}
              <strong>{getContractOpenUrl(selectedPrestamo) ? 'Disponible para visualización' : 'No disponible'}</strong>
            </Typography>
            <Button
              variant='tonal'
              color='info'
              onClick={() => handleOpenContratoPdf(selectedPrestamo)}
              disabled={!canViewDocumentos || !getContractOpenUrl(selectedPrestamo)}
              sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
            >
              Visualizar contrato PDF
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => setDetalleOpen(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={historialOpen} onClose={() => setHistorialOpen(false)} fullWidth maxWidth='lg'>
        <DialogTitle>Historial de préstamos</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <Typography variant='subtitle1'>{historialCliente.nombre || 'Cliente'}</Typography>
            {historialError ? <Alert severity='error'>{historialError}</Alert> : null}

            {historialLoading ? (
              <Stack alignItems='center' py={6}>
                <CircularProgress size={24} />
              </Stack>
            ) : (
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Monto</TableCell>
                    <TableCell>Interés</TableCell>
                    <TableCell>Modalidad</TableCell>
                    <TableCell>Semanas</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Pendiente</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Acciones</TableCell>
                    <TableCell>Inicio</TableCell>
                    <TableCell>Vencimiento</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {historialRows.map(row => (
                    <TableRow
                      key={row.id}
                      hover
                      onDoubleClick={() => {
                        if (!canViewPrestamos) return

                        openDetalleDialog(row)
                      }}
                      sx={{ cursor: canViewPrestamos ? 'pointer' : 'default' }}
                    >
                      <TableCell>{formatCurrency(row.monto_solicitado)}</TableCell>
                      <TableCell>{row.interes ?? '-'}</TableCell>
                      <TableCell>{row.modalidad || '-'}</TableCell>
                      <TableCell>{row.num_semanas ?? '-'}</TableCell>
                      <TableCell>{formatCurrency(row.total_pagar)}</TableCell>
                      <TableCell>{formatCurrency(row.pendiente)}</TableCell>
                      <TableCell>{row.status || '-'}</TableCell>
                      <TableCell>
                        <Stack direction='row' spacing={0.5}>
                          {canViewPrestamos ? (
                            <Tooltip title='Ver detalle'>
                              <IconButton size='small' onClick={() => openDetalleDialog(row)}>
                                <i className='tabler-eye text-3xl' />
                              </IconButton>
                            </Tooltip>
                          ) : null}
                        </Stack>
                      </TableCell>
                      <TableCell>{formatDateMMDDYYYY(row.fecha_inicio)}</TableCell>
                      <TableCell>{formatDateMMDDYYYY(row.fecha_vencimiento)}</TableCell>
                    </TableRow>
                  ))}
                  {historialRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={10} align='center'>
                        Sin registros de historial
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
            )}

            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Typography color='text.secondary'>Total: {historialPagination.total}</Typography>
              <Pagination
                page={historialPage}
                count={Math.max(historialPagination.pages, 1)}
                onChange={(_, value) => {
                  setHistorialPage(value)
                  loadHistorial(historialCliente.id, value)
                }}
                size='small'
                color='primary'
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => setHistorialOpen(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
