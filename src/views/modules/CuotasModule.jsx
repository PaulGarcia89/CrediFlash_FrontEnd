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
import {
  actualizarModoRecordatorioWhatsapp,
  enviarNotificacionCuotaEmail,
  enviarNotificacionCuotaWhatsapp,
  listarPrestamos,
  obtenerModoRecordatorioWhatsapp,
  registrarPagoSemanal
} from '@/api/cuotas'
import usePermissions from '@/hooks/usePermissions'
import { obtenerDocumentoUrl } from '@/api/solicitudes'
import { getToken } from '@/lib/auth/session'
import { formatMoney, round2, toMoneyNumber } from '@/utils/currency'
import { formatDateMMDDYYYY } from '@/utils/date'
import {
  extractLoanSchedule,
  getLoanContractDocumentId,
  getLoanContractRawUrl,
  getLoanEndDateValue,
  getLoanInstallmentValue,
  getLoanInstallmentsCount,
  getLoanInterestPercentage,
  getLoanOriginalAmount,
  getLoanPeriodicityLabel,
  getLoanRemainingBalance,
  getLoanTotalToPay,
  hasActiveLoanContract,
  isLoanActive,
  isLoanSettled
} from '@/utils/loanFinance'

const formatCurrency = value => formatMoney(value)
const formatNaturalNumber = value =>
  new Intl.NumberFormat('es-DO', { maximumFractionDigits: 0 }).format(Number(value || 0))

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

const getRawPagosPendientes = row => toMoneyNumber(row?.pagos_pendientes ?? row?.cuotas_restantes)
const getDisplayTotalPagar = row => getLoanTotalToPay(row)
const getDisplayPagosSemanales = row => getLoanInstallmentValue(row)

const getConfiguredWeeks = row => toMoneyNumber(getLoanInstallmentsCount(row))

const looksLikePendingCount = row => {
  const raw = getRawPagosPendientes(row)
  const configuredWeeks = getConfiguredWeeks(row)

  if (!Number.isFinite(raw) || raw < 0) return false
  if (!Number.isInteger(raw)) return false
  if (configuredWeeks > 0) return raw <= configuredWeeks

  return raw <= 60
}

const getCuotasRestantes = row => {
  if (!row) return 0

  const cuotasRestantes = toMoneyNumber(row?.cuotas_restantes)

  if (Number.isFinite(cuotasRestantes) && cuotasRestantes >= 0) {
    return Math.round(cuotasRestantes)
  }

  const pagosPendientes = getRawPagosPendientes(row)
  const pagoSemanal = toMoneyNumber(row?.pagos_semanales)

  if (looksLikePendingCount(row)) {
    return Math.round(pagosPendientes)
  }

  if (Number.isFinite(pagosPendientes) && Number.isFinite(pagoSemanal) && pagoSemanal > 0) {
    return Math.ceil(pagosPendientes / pagoSemanal)
  }

  if (Number.isFinite(Number(row?.num_semanas)) && Number.isFinite(Number(row?.pagos_hechos))) {
    return Math.max(Number(row?.num_semanas) - Number(row?.pagos_hechos), 0)
  }

  return 0
}

const getSaldoPendienteInfo = row => {
  const pendienteOficial = toMoneyNumber(getLoanRemainingBalance(row))

  if (Number.isFinite(pendienteOficial) && pendienteOficial >= 0) {
    return { value: pendienteOficial, estimated: false }
  }

  const pagosPendientes = getRawPagosPendientes(row)
  const pagoSemanal = toMoneyNumber(row?.pagos_semanales)

  if (Number.isFinite(pagosPendientes) && pagosPendientes >= 0 && !looksLikePendingCount(row)) {
    return { value: round2(pagosPendientes), estimated: false }
  }

  if (Number.isFinite(pagosPendientes) && Number.isFinite(pagoSemanal) && pagoSemanal > 0) {
    return { value: round2(pagosPendientes * pagoSemanal), estimated: true }
  }

  return { value: 0, estimated: true }
}

const getSaldoPendiente = row => getSaldoPendienteInfo(row).value

const getInteresDisplay = row => {
  const value = getLoanInterestPercentage(row)

  if (value === null || value === undefined || value === '') return '-'

  return String(value)
}

const desktopHeadCellSx = {
  py: 1.6,
  px: 1.5,
  fontSize: '0.95rem',
  fontWeight: 700,
  color: 'text.secondary',
  whiteSpace: 'nowrap'
}

const desktopBodyCellSx = {
  py: 1.75,
  px: 1.5,
  fontSize: '1rem',
  verticalAlign: 'middle',
  borderBottomColor: 'divider'
}

const desktopNumericCellSx = {
  ...desktopBodyCellSx,
  whiteSpace: 'nowrap'
}

const desktopClientCellSx = {
  ...desktopBodyCellSx,
  minWidth: 190,
  maxWidth: 220,
  fontWeight: 500,
  lineHeight: 1.35,
  wordBreak: 'break-word'
}

const desktopActionsCellSx = {
  ...desktopBodyCellSx,
  minWidth: 170
}

const getOperationalStatus = row => {
  const normalized = String(row?.status_normalizado || '').trim()

  if (normalized) return normalized.toUpperCase()

  const legacy = String(row?.status || row?.estado || '').trim()

  return legacy ? legacy.toUpperCase() : 'PENDIENTE'
}

const getStatusColor = status => {
  const normalized = String(status || '').toUpperCase()

  if (normalized === 'ACTIVO' || normalized === 'EN_MARCHA') return 'success'
  if (normalized === 'MOROSO') return 'warning'
  if (normalized === 'PAGADO' || normalized === 'NO_DEBE_NADA') return 'default'

  return 'info'
}

const matchesStatusFilter = (row, filterValue) => {
  const normalizedFilter = String(filterValue || 'TODOS').toUpperCase()

  if (normalizedFilter === 'TODOS') return true

  const operationalStatus = getOperationalStatus(row)

  if (normalizedFilter === 'ACTIVO') {
    return ['ACTIVO', 'EN_MARCHA', 'EN_PROCESO'].includes(operationalStatus)
  }

  if (normalizedFilter === 'MOROSO') {
    return operationalStatus === 'MOROSO'
  }

  if (normalizedFilter === 'PAGADOS') {
    return ['PAGADO', 'NO_DEBE_NADA', 'CANCELADO'].includes(operationalStatus)
  }

  return operationalStatus === normalizedFilter
}

const isPrestamoActivoOperativo = row => {
  if (row?.es_activo_operativo === true) return true

  return isLoanActive(row) && !isLoanSettled(row)
}
const canRegisterPaymentForRow = row => {
  return isPrestamoActivoOperativo(row)
}

const getFriendlyPagoError = error => {
  const raw = String(error?.message || '').trim()
  const normalized = raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  if (!raw) return 'No se pudo registrar el pago semanal.'
  if (normalized.includes('force=true') || normalized.includes('regener')) {
    return 'Este préstamo ya tiene cronograma activo y no se puede regenerar desde este formulario.'
  }

  if (normalized.includes('ya esta pagado') || normalized.includes('no hay cuotas pendientes')) {
    return 'Este préstamo no tiene cuotas pendientes.'
  }

  if (normalized.includes('monto') && normalized.includes('penal')) {
    return 'El monto ingresado no coincide con las reglas de pago configuradas.'
  }

  if (normalized.includes('cuotas generadas')) {
    return 'Este préstamo ya tiene cuotas generadas. Usa el historial para revisar su estado actual.'
  }

  return raw
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
  const raw = String(process.env.NEXT_PUBLIC_API_URL || '')
    .trim()
    .replace(/\/$/, '')

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
  const urls = buildCandidateUrls(getLoanContractRawUrl(row))

  return urls[0] || ''
}
const getContractDocumentId = row => getLoanContractDocumentId(row)

export default function CuotasModule() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const useCardLayout = useMediaQuery('(max-width:1400px)')
  const { can, canAny, analista } = usePermissions()
  const debugCuotas = String(process.env.NEXT_PUBLIC_DEBUG_CUOTAS || '').toLowerCase() === 'true'
  const [prestamos, setPrestamos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [searchCliente, setSearchCliente] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
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
  const [montoFee, setMontoFee] = useState('0')
  const [motivoFee, setMotivoFee] = useState('')
  const [pagoDialogError, setPagoDialogError] = useState('')
  const [pagoDialogInfo, setPagoDialogInfo] = useState('')
  const [processing, setProcessing] = useState(false)
  const [notifyingPrestamoId, setNotifyingPrestamoId] = useState('')
  const [emailConfirmOpen, setEmailConfirmOpen] = useState(false)
  const [selectedEmailPrestamo, setSelectedEmailPrestamo] = useState(null)
  const [whatsappDialogOpen, setWhatsappDialogOpen] = useState(false)
  const [selectedWhatsappPrestamo, setSelectedWhatsappPrestamo] = useState(null)
  const [whatsappModo, setWhatsappModo] = useState('AUTO')
  const [whatsappDialogError, setWhatsappDialogError] = useState('')
  const [whatsappDialogInfo, setWhatsappDialogInfo] = useState('')
  const [whatsappDialogLoading, setWhatsappDialogLoading] = useState(false)
  const [whatsappManualSending, setWhatsappManualSending] = useState(false)
  const [detalleDialogError, setDetalleDialogError] = useState('')
  const [detalleOpen, setDetalleOpen] = useState(false)
  const [detalleLoading, setDetalleLoading] = useState(false)
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
  const isAdminProfile = String(analista?.rol || analista?.role || '')
    .toUpperCase()
    .includes('ADMIN')
  const canSendNotifications = isAdminProfile || can('notifications.send')
  const canManageWhatsappNotifications =
    isAdminProfile || can('notifications.whatsapp.manage') || can('notifications.send')

  const montoEsperadoPago = useMemo(() => {
    const cuotaSemanal = parseDecimalInput(getDisplayPagosSemanales(selectedPrestamo) || 0)
    const penalizacion = parseDecimalInput(montoPenalizacion || 0)
    const fee = parseDecimalInput(montoFee || 0)

    return (
      (Number.isFinite(cuotaSemanal) ? cuotaSemanal : 0) +
      (Number.isFinite(penalizacion) ? penalizacion : 0) +
      (Number.isFinite(fee) ? fee : 0)
    )
  }, [selectedPrestamo, montoFee, montoPenalizacion])
  const escenarioPago = useMemo(() => {
    const parsedMonto = parseDecimalInput(montoPago || 0)

    if (!Number.isFinite(parsedMonto) || parsedMonto <= 0) {
      return null
    }

    return getEscenarioPago(parsedMonto, montoEsperadoPago)
  }, [montoEsperadoPago, montoPago])

  const normalizeSearchInput = value =>
    String(value ?? '')
      .replace(/\s+/g, ' ')
      .trim()

  const loadPrestamos = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const normalizedSearch = normalizeSearchInput(debouncedSearch)
      const requestParams = {
        page,
        limit,
        status: status === 'PAGADOS' ? 'PAGADO' : status,
        search: normalizedSearch
      }

      if (debugCuotas) {
        console.log('[CUOTAS] request', requestParams)
      }

      const response = await listarPrestamos(requestParams)
      const responseRows = extractRows(response)

      if (debugCuotas) {
        const responsePagination = extractPagination(response)
        console.log('[CUOTAS] response', {
          total: responsePagination.total,
          dataLength: responseRows.length
        })
      }

      setPrestamos(responseRows)
      setPagination(extractPagination(response))
    } catch (err) {
      setError(err.message || 'No se pudo cargar préstamos.')
    } finally {
      setLoading(false)
    }
  }, [debouncedSearch, limit, page, status])

  useEffect(() => {
    loadPrestamos()
  }, [loadPrestamos])

  useEffect(() => {
    setPage(1)
  }, [limit, debouncedSearch, status])

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchCliente)
    }, 300)

    return () => clearTimeout(handler)
  }, [searchCliente])

  const openPagoDialog = row => {
    if (!canRegisterPaymentForRow(row)) return

    setPagoDialogError('')
    setPagoDialogInfo('')
    setSelectedPrestamo(row)
    setMontoPago(String(getDisplayPagosSemanales(row) || ''))
    setMontoPenalizacion('0')
    setMontoFee('0')
    setMotivoFee('')
    setPagoDialogOpen(true)
  }

  const parseWhatsappModo = payload => {
    const raw = String(payload?.data?.modo || payload?.modo || '').toUpperCase()

    return ['AUTO', 'MANUAL', 'PAUSADO'].includes(raw) ? raw : 'AUTO'
  }

  const closeWhatsappDialog = () => {
    setWhatsappDialogOpen(false)
    setSelectedWhatsappPrestamo(null)
    setWhatsappModo('AUTO')
    setWhatsappDialogError('')
    setWhatsappDialogInfo('')
    setWhatsappDialogLoading(false)
    setWhatsappManualSending(false)
  }

  const openWhatsappDialog = async row => {
    if (!canManageWhatsappNotifications) {
      setError('No tienes permisos para gestionar recordatorios por WhatsApp.')

      return
    }

    setWhatsappDialogOpen(true)
    setSelectedWhatsappPrestamo(row)
    setWhatsappModo('AUTO')
    setWhatsappDialogError('')
    setWhatsappDialogInfo('')
    setWhatsappDialogLoading(true)

    try {
      const response = await obtenerModoRecordatorioWhatsapp(row.id)

      setWhatsappModo(parseWhatsappModo(response))
    } catch (err) {
      const statusCode = Number(err?.status || 0)

      if (statusCode === 404 || statusCode === 405 || statusCode === 501) {
        setWhatsappDialogInfo('El backend no devolvió configuración previa. Se usará modo AUTO por defecto.')
        setWhatsappModo('AUTO')
      } else {
        setWhatsappDialogError(err.message || 'No se pudo cargar la configuración de WhatsApp.')
      }
    } finally {
      setWhatsappDialogLoading(false)
    }
  }

  const guardarModoWhatsapp = async () => {
    if (!selectedWhatsappPrestamo) return
    setWhatsappDialogError('')
    setWhatsappDialogInfo('')
    setWhatsappDialogLoading(true)

    try {
      await actualizarModoRecordatorioWhatsapp(selectedWhatsappPrestamo.id, whatsappModo)
      setWhatsappDialogInfo('Modo de recordatorio por WhatsApp actualizado correctamente.')
    } catch (err) {
      setWhatsappDialogError(err.message || 'No se pudo actualizar el modo de recordatorio por WhatsApp.')
    } finally {
      setWhatsappDialogLoading(false)
    }
  }

  const enviarWhatsappManual = async () => {
    if (!selectedWhatsappPrestamo) return
    setWhatsappDialogError('')
    setWhatsappDialogInfo('')
    setWhatsappManualSending(true)

    try {
      await enviarNotificacionCuotaWhatsapp(selectedWhatsappPrestamo.id)
      setWhatsappDialogInfo(
        `Notificación de WhatsApp enviada a ${selectedWhatsappPrestamo.nombre_completo || 'cliente'}.`
      )
    } catch (err) {
      setWhatsappDialogError(err.message || 'No se pudo enviar la notificación por WhatsApp.')
    } finally {
      setWhatsappManualSending(false)
    }
  }

  const renderAccionesPrestamo = row => (
    <Stack
      direction='row'
      spacing={0.35}
      flexWrap={isMobile ? 'wrap' : 'nowrap'}
      alignItems='center'
      justifyContent={isMobile ? 'flex-start' : 'center'}
      sx={{ minWidth: isMobile ? 'auto' : 156 }}
    >
      {canRegistrarPago ? (
        <Tooltip title={canRegisterPaymentForRow(row) ? 'Registrar pago' : 'Sin cuotas pendientes'}>
          <span>
            <IconButton
              size='small'
              color='error'
              onClick={() => openPagoDialog(row)}
              disabled={!canRegisterPaymentForRow(row)}
              sx={{ width: 34, height: 34 }}
            >
              <i className='tabler-cash text-[1.45rem]' />
            </IconButton>
          </span>
        </Tooltip>
      ) : null}
      {canViewPrestamos ? (
        <Tooltip title='Historial'>
          <IconButton size='small' color='secondary' onClick={() => openHistorial(row)} sx={{ width: 34, height: 34 }}>
            <i className='tabler-history text-[1.45rem]' />
          </IconButton>
        </Tooltip>
      ) : null}
      {canViewPrestamos ? (
        <Tooltip title='Ver detalle'>
          <IconButton size='small' onClick={() => openDetalleDialog(row)} sx={{ width: 34, height: 34 }}>
            <i className='tabler-eye text-[1.45rem]' />
          </IconButton>
        </Tooltip>
      ) : null}
      {canSendNotifications ? (
        <Tooltip title='Enviar notificación por correo'>
          <span>
            <IconButton
              size='small'
              color='info'
              onClick={() => openEmailConfirmDialog(row)}
              disabled={notifyingPrestamoId === String(row.id)}
              sx={{ width: 34, height: 34 }}
            >
              {notifyingPrestamoId === String(row.id) ? (
                <CircularProgress size={18} color='inherit' />
              ) : (
                <i className='tabler-mail text-[1.45rem]' />
              )}
            </IconButton>
          </span>
        </Tooltip>
      ) : null}
      {canManageWhatsappNotifications ? (
        <Tooltip title='Configurar recordatorio por WhatsApp'>
          <IconButton
            size='small'
            color='success'
            onClick={() => openWhatsappDialog(row)}
            sx={{ width: 34, height: 34 }}
          >
            <i className='tabler-brand-whatsapp-filled text-[1.45rem]' />
          </IconButton>
        </Tooltip>
      ) : null}
      {!canRegistrarPago && !canViewPrestamos && !canSendNotifications && !canManageWhatsappNotifications ? (
        <Typography variant='body2' color='text.secondary'>
          Sin acciones
        </Typography>
      ) : null}
    </Stack>
  )

  const openDetalleDialog = async row => {
    setSelectedPrestamo(row)
    setDetalleDialogError('')
    setDetalleOpen(true)
    setDetalleLoading(true)

    try {
      const clienteId = row?.cliente_id || row?.cliente?.id || ''

      if (!clienteId) return

      const response = await verHistorialPrestamosCliente(clienteId, { page: 1, limit: 200 })
      const matchingPrestamo = extractRows(response).find(item => String(item?.id || '') === String(row?.id || ''))

      if (matchingPrestamo) {
        setSelectedPrestamo(previous => ({
          ...(previous || {}),
          ...matchingPrestamo
        }))
      }
    } catch {
      // Keep the lightweight row data if the richer lookup fails.
    } finally {
      setDetalleLoading(false)
    }
  }

  const closePagoDialog = () => {
    setPagoDialogOpen(false)
    setSelectedPrestamo(null)
    setMontoPago('')
    setMontoPenalizacion('0')
    setMontoFee('0')
    setMotivoFee('')
    setPagoDialogError('')
    setPagoDialogInfo('')
  }

  const confirmarPago = async () => {
    if (!selectedPrestamo) return

    const parsedMonto = parseDecimalInput(montoPago || '')
    const parsedPenalizacion = parseDecimalInput(montoPenalizacion || '0')
    const parsedFee = parseDecimalInput(montoFee || '0')

    if (!Number.isFinite(parsedMonto) || parsedMonto <= 0) {
      setPagoDialogError('El monto de pago debe ser mayor que 0.')

      return
    }

    if (!Number.isFinite(parsedPenalizacion) || parsedPenalizacion < 0) {
      setPagoDialogError('El monto de penalización debe ser mayor o igual a 0.')

      return
    }
    if (!Number.isFinite(parsedFee) || parsedFee < 0) {
      setPagoDialogError('El monto de cargo extra debe ser mayor o igual a 0.')

      return
    }

    setProcessing(true)
    setPagoDialogError('')
    setPagoDialogInfo('')

    try {
      await registrarPagoSemanal(selectedPrestamo.id, parsedMonto, parsedPenalizacion, parsedFee, motivoFee.trim())

      const escenario = getEscenarioPago(parsedMonto, montoEsperadoPago)
      const ajusteSiguienteCuota =
        escenario.tipo === 'PARCIAL'
          ? `Faltante ${formatCurrency(escenario.diferencia)}: se suma a la próxima cuota.`
          : escenario.tipo === 'ADELANTADO'
            ? `Excedente ${formatCurrency(escenario.diferencia)}: se descuenta de la próxima cuota.`
            : 'Pago completo de cuota.'

      setPagoDialogInfo(
        `Pago semanal registrado para ${selectedPrestamo.nombre_completo || 'el cliente seleccionado'}. ${ajusteSiguienteCuota}`
      )
      await loadPrestamos()
      if (historialOpen && historialCliente?.id) {
        const selectedClienteId = selectedPrestamo?.cliente_id || selectedPrestamo?.cliente?.id || ''

        if (selectedClienteId && selectedClienteId === historialCliente.id) {
          await loadHistorial(historialCliente.id, historialPage)
        }
      }
      setTimeout(() => {
        closePagoDialog()
      }, 1200)
    } catch (err) {
      setPagoDialogError(getFriendlyPagoError(err))
    } finally {
      setProcessing(false)
    }
  }

  const handleOpenContratoPdf = async row => {
    setDetalleDialogError('')
    if (row?.contrato_disponible === false) {
      setDetalleDialogError('El contrato no está disponible en almacenamiento.')

      return
    }
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
        const backendPayload = await response.json().catch(() => ({}))
        const backendMessage = backendPayload?.message || backendPayload?.error || ''

        setDetalleDialogError(backendMessage || 'No se pudo abrir el contrato PDF.')

        return
      }

      const blob = await response.blob()
      const objectUrl = window.URL.createObjectURL(blob)

      window.open(objectUrl, '_blank', 'noopener,noreferrer')
      window.setTimeout(() => window.URL.revokeObjectURL(objectUrl), 5000)
    } catch (err) {
      setDetalleDialogError(err?.message || 'No se pudo abrir el contrato PDF.')
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

  const openEmailConfirmDialog = row => {
    setSelectedEmailPrestamo(row || null)
    setEmailConfirmOpen(true)
  }

  const closeEmailConfirmDialog = () => {
    if (notifyingPrestamoId) return

    setEmailConfirmOpen(false)
    setSelectedEmailPrestamo(null)
  }

  const confirmEmailNotification = async () => {
    if (!selectedEmailPrestamo) return

    await enviarNotificacionEmail(selectedEmailPrestamo)
    setEmailConfirmOpen(false)
    setSelectedEmailPrestamo(null)
  }

  const rows = useMemo(() => prestamos || [], [prestamos])

  const tableRows = useMemo(() => {
    const output = rows.filter(item => matchesStatusFilter(item, status))

    if (orden === 'monto_desc') {
      output.sort((a, b) => Number(getDisplayTotalPagar(b) || 0) - Number(getDisplayTotalPagar(a) || 0))

      return output
    }

    if (orden === 'monto_asc') {
      output.sort((a, b) => Number(getDisplayTotalPagar(a) || 0) - Number(getDisplayTotalPagar(b) || 0))

      return output
    }

    output.sort((a, b) => {
      const aActivo = isPrestamoActivoOperativo(a)
      const bActivo = isPrestamoActivoOperativo(b)

      if (aActivo !== bActivo) return aActivo ? -1 : 1

      const aStatus = getOperationalStatus(a)
      const bStatus = getOperationalStatus(b)
      const statusRank = value => {
        if (value === 'ACTIVO' || value === 'EN_MARCHA' || value === 'EN_PROCESO') return 0
        if (value === 'MOROSO') return 1
        if (value === 'PAGADO' || value === 'NO_DEBE_NADA' || value === 'CANCELADO') return 2

        return 3
      }

      const diff = statusRank(aStatus) - statusRank(bStatus)

      if (diff !== 0) return diff

      const aFecha = new Date(a?.fecha_inicio || 0).getTime()
      const bFecha = new Date(b?.fecha_inicio || 0).getTime()

      return bFecha - aFecha
    })

    return output
  }, [orden, rows, status])

  const debugInfo = useMemo(() => {
    if (!debugCuotas) return null

    const normalizedSearch = normalizeSearchInput(debouncedSearch)

    return {
      request: {
        page,
        limit,
        search: normalizedSearch,
        status
      },
      total: pagination.total,
      rendered: tableRows.length
    }
  }, [debouncedSearch, debugCuotas, limit, page, pagination.total, status, tableRows.length])

  const metrics = useMemo(() => {
    return {
      total: pagination.total,
      activos: rows.filter(item => ['EN_PROCESO', 'EN_MARCHA'].includes(getOperationalStatus(item))).length,
      morosos: rows.filter(item => getOperationalStatus(item) === 'MOROSO').length,
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
    const headers = [
      'id_prestamo',
      'cliente',
      'fecha_inicio',
      'pago_semanal',
      'cuotas_restantes',
      'saldo_pendiente',
      'estado'
    ]

    const csvRows = tableRows.map(item => {
      const saldoOficial = item?.saldo_pendiente ?? item?.pendiente ?? item?.monto_pendiente
      const saldoValue = Number.isFinite(toMoneyNumber(saldoOficial)) ? round2(saldoOficial) : ''

      return [
        item?.id || '',
        item?.nombre_completo || '',
        formatDateMMDDYYYY(item?.fecha_inicio),
        Number.isFinite(toMoneyNumber(item?.pagos_semanales)) ? round2(item?.pagos_semanales) : '',
        item?.cuotas_restantes ?? item?.pagos_pendientes ?? '',
        saldoValue,
        String(item?.status_normalizado || item?.status || '')
      ]
    })

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
                  <MenuItem value='PAGADOS'>PAGADOS</MenuItem>
                </TextField>
              </Stack>
            </Stack>
            {debugCuotas && debugInfo ? (
              <Stack spacing={0.5}>
                <Typography variant='body2' color='text.secondary'>
                  Query enviada: {JSON.stringify(debugInfo.request)}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Total recibido: {debugInfo.total} | Filas renderizadas: {debugInfo.rendered}
                </Typography>
              </Stack>
            ) : null}
            <Divider />

            {error ? <Alert severity='error'>{error}</Alert> : null}
            {success ? <Alert severity='success'>{success}</Alert> : null}

            {loading ? (
              <Stack alignItems='center' py={8}>
                <CircularProgress size={28} />
              </Stack>
            ) : !useCardLayout ? (
              <Table
                size='small'
                sx={{
                  tableLayout: 'fixed',
                  '& .MuiTableCell-root': {
                    borderBottomColor: 'rgba(115, 103, 240, 0.08)'
                  },
                  '& .MuiTableRow-hover:hover': {
                    backgroundColor: 'rgba(115, 103, 240, 0.03)'
                  }
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox' sx={{ ...desktopHeadCellSx, width: 40 }}>
                      <Checkbox size='small' />
                    </TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '16%' }}>Cliente</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '10%' }}>Monto total</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '10%' }}>Valor cuota</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '8%' }}>Tasa de interés</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '7%' }}>Núm. cuotas</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '8%' }}>Pagos hechos</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '10%' }}>Fecha inicio</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '12%' }}>Saldo pendiente</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '8%' }}>Cuotas restantes</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: '10%' }}>Estado</TableCell>
                    <TableCell sx={{ ...desktopHeadCellSx, width: 176, textAlign: 'center' }}>Acciones</TableCell>
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
                      <TableCell padding='checkbox' sx={desktopBodyCellSx}>
                        <Checkbox size='small' />
                      </TableCell>
                      <TableCell sx={desktopClientCellSx}>{row.nombre_completo || '-'}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>{formatCurrency(getDisplayTotalPagar(row))}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>{formatCurrency(getDisplayPagosSemanales(row))}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>{getInteresDisplay(row)}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>{getLoanInstallmentsCount(row) || '-'}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>{formatNaturalNumber(row.pagos_hechos)}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>{formatDateMMDDYYYY(row.fecha_inicio)}</TableCell>
                      <TableCell sx={desktopNumericCellSx}>
                        {(() => {
                          const saldoInfo = getSaldoPendienteInfo(row)

                          return (
                            <Stack direction='row' spacing={0.75} alignItems='center'>
                              <span>{formatCurrency(saldoInfo.value)}</span>
                              {saldoInfo.estimated ? (
                                <Chip size='small' variant='outlined' color='warning' label='Estimado' />
                              ) : null}
                            </Stack>
                          )
                        })()}
                      </TableCell>
                      <TableCell sx={desktopNumericCellSx}>{formatNaturalNumber(getCuotasRestantes(row))}</TableCell>
                      <TableCell sx={desktopBodyCellSx}>
                        <Stack
                          direction='row'
                          spacing={0.75}
                          flexWrap='wrap'
                          alignItems='center'
                          sx={{ minHeight: 34 }}
                        >
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
                      <TableCell sx={desktopActionsCellSx}>{renderAccionesPrestamo(row)}</TableCell>
                    </TableRow>
                  ))}
                  {tableRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={12} align='center'>
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
                          Monto total: {formatCurrency(getDisplayTotalPagar(row))}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Pago semanal: {formatCurrency(getDisplayPagosSemanales(row))}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Tasa de interés: {getInteresDisplay(row)}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {(() => {
                            const saldoInfo = getSaldoPendienteInfo(row)

                            return (
                              <>
                                Saldo pendiente: {formatCurrency(saldoInfo.value)}{' '}
                                {saldoInfo.estimated ? (
                                  <Chip size='small' variant='outlined' color='warning' label='Estimado' />
                                ) : null}
                              </>
                            )
                          })()}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Cuotas: {getLoanInstallmentsCount(row) || '-'} • Pagos hechos:{' '}
                          {formatNaturalNumber(row.pagos_hechos)} • Cuotas restantes:{' '}
                          {formatNaturalNumber(getCuotasRestantes(row))}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Fecha inicio: {formatDateMMDDYYYY(row.fecha_inicio)}
                        </Typography>
                        {hasDescuentoReferidoObservacion(row) ? (
                          <Chip
                            size='small'
                            variant='tonal'
                            color='success'
                            label='Descuento referido'
                            sx={{ width: 'fit-content' }}
                          />
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
              Monto total: <strong>{formatCurrency(getDisplayTotalPagar(selectedPrestamo))}</strong>
            </Typography>
            <Typography>
              Número de cuotas: <strong>{getLoanInstallmentsCount(selectedPrestamo) || '-'}</strong>
            </Typography>
            <Typography>
              Periodicidad: <strong>{getLoanPeriodicityLabel(selectedPrestamo?.modalidad)}</strong>
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
              helperText={`Monto esperado: ${formatCurrency(montoEsperadoPago)} (cuota + penalización + cargo extra). Puedes pagar un monto mayor, menor o igual.`}
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
            <TextField
              label='Monto de cargo extra (fee)'
              type='number'
              value={montoFee}
              onChange={event => setMontoFee(event.target.value)}
              inputProps={{ min: 0, step: '0.01' }}
              size='small'
              helperText='Usa 0 si no aplica cargo adicional.'
            />
            <TextField
              label='Motivo del cargo extra (opcional)'
              value={motivoFee}
              onChange={event => setMotivoFee(event.target.value)}
              size='small'
              placeholder='Ejemplo: gasto administrativo'
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

      <Dialog open={whatsappDialogOpen} onClose={closeWhatsappDialog} fullWidth maxWidth='xs'>
        <DialogTitle>Recordatorios por WhatsApp</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {whatsappDialogError ? <Alert severity='error'>{whatsappDialogError}</Alert> : null}
            {whatsappDialogInfo ? <Alert severity='info'>{whatsappDialogInfo}</Alert> : null}
            <Typography>
              Cliente: <strong>{selectedWhatsappPrestamo?.nombre_completo || '-'}</strong>
            </Typography>
            <TextField
              select
              size='small'
              label='Modo de recordatorio'
              value={whatsappModo}
              onChange={event => setWhatsappModo(event.target.value)}
              disabled={whatsappDialogLoading}
            >
              <MenuItem value='AUTO'>Automático</MenuItem>
              <MenuItem value='MANUAL'>Manual</MenuItem>
              <MenuItem value='PAUSADO'>Pausado</MenuItem>
            </TextField>
            {whatsappModo === 'MANUAL' ? (
              <Button
                variant='tonal'
                color='success'
                onClick={enviarWhatsappManual}
                disabled={whatsappManualSending || whatsappDialogLoading}
              >
                {whatsappManualSending ? 'Enviando...' : 'Enviar ahora por WhatsApp'}
              </Button>
            ) : null}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant='text'
            onClick={closeWhatsappDialog}
            disabled={whatsappDialogLoading || whatsappManualSending}
          >
            Cerrar
          </Button>
          <Button
            variant='contained'
            onClick={guardarModoWhatsapp}
            disabled={whatsappDialogLoading || whatsappManualSending}
          >
            {whatsappDialogLoading ? 'Guardando...' : 'Guardar modo'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={emailConfirmOpen} onClose={closeEmailConfirmDialog} fullWidth maxWidth='xs'>
        <DialogTitle>Confirmar envío de correo</DialogTitle>
        <DialogContent>
          <Stack spacing={1.5} mt={1}>
            <Typography>
              ¿Deseas enviar la notificación por correo a{' '}
              <strong>{selectedEmailPrestamo?.nombre_completo || 'este cliente'}</strong>?
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Esta acción enviará el recordatorio de cuota del préstamo seleccionado.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={closeEmailConfirmDialog} disabled={Boolean(notifyingPrestamoId)}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='info'
            onClick={confirmEmailNotification}
            disabled={Boolean(notifyingPrestamoId)}
          >
            {notifyingPrestamoId ? 'Enviando...' : 'Confirmar envío'}
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
            {detalleLoading ? (
              <Stack direction='row' spacing={1} alignItems='center'>
                <CircularProgress size={18} />
                <Typography variant='body2' color='text.secondary'>
                  Cargando detalle actualizado del préstamo...
                </Typography>
              </Stack>
            ) : null}
            {detalleDialogError ? <Alert severity='error'>{detalleDialogError}</Alert> : null}
            <Typography>
              Cliente: <strong>{selectedPrestamo?.nombre_completo || '-'}</strong>
            </Typography>
            <Typography>
              Monto original: <strong>{formatCurrency(getLoanOriginalAmount(selectedPrestamo))}</strong>
            </Typography>
            <Typography>
              Total pagar: <strong>{formatCurrency(getDisplayTotalPagar(selectedPrestamo))}</strong>
            </Typography>
            <Typography>
              Interés (%): <strong>{getInteresDisplay(selectedPrestamo)}</strong>
            </Typography>
            <Typography>
              Interés total: <strong>{formatCurrency(toMoneyNumber(selectedPrestamo?.interes_total ?? 0))}</strong>
            </Typography>
            <Typography>
              Modalidad: <strong>{selectedPrestamo?.modalidad || '-'}</strong>
            </Typography>
            <Typography>
              Número de cuotas: <strong>{getLoanInstallmentsCount(selectedPrestamo) || '-'}</strong>
            </Typography>
            <Typography>
              Valor cuota: <strong>{formatCurrency(getDisplayPagosSemanales(selectedPrestamo))}</strong>
            </Typography>
            <Typography>
              {(() => {
                const saldoInfo = getSaldoPendienteInfo(selectedPrestamo)

                return (
                  <>
                    Saldo pendiente: <strong>{formatCurrency(saldoInfo.value)}</strong>{' '}
                    {saldoInfo.estimated ? (
                      <Chip size='small' variant='outlined' color='warning' label='Estimado' />
                    ) : null}
                  </>
                )
              })()}
            </Typography>
            <Typography>
              Pagos hechos: <strong>{formatNaturalNumber(selectedPrestamo?.pagos_hechos)}</strong>
            </Typography>
            <Typography>
              Cuotas restantes: <strong>{formatNaturalNumber(getCuotasRestantes(selectedPrestamo))}</strong>
            </Typography>
            <Typography>
              Fecha inicio: <strong>{formatDateMMDDYYYY(selectedPrestamo?.fecha_inicio)}</strong>
            </Typography>
            <Typography>
              Fecha vencimiento final: <strong>{formatDateMMDDYYYY(getLoanEndDateValue(selectedPrestamo))}</strong>
            </Typography>
            <Typography>
              Estado: <strong>{selectedPrestamo ? getOperationalStatus(selectedPrestamo) : '-'}</strong>
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
              <strong>
                {hasActiveLoanContract(selectedPrestamo) &&
                (getContractOpenUrl(selectedPrestamo) || getContractDocumentId(selectedPrestamo))
                  ? 'Disponible para visualización'
                  : 'No disponible'}
              </strong>
            </Typography>
            <Button
              variant='tonal'
              color='info'
              onClick={() => handleOpenContratoPdf(selectedPrestamo)}
              disabled={
                !canViewDocumentos ||
                selectedPrestamo?.contrato_disponible === false ||
                (!getContractOpenUrl(selectedPrestamo) && !getContractDocumentId(selectedPrestamo))
              }
              sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
            >
              Visualizar contrato PDF
            </Button>
            {extractLoanSchedule(selectedPrestamo).length ? (
              <Stack spacing={1} sx={{ pt: 1 }}>
                <Typography variant='h6'>Cronograma canónico</Typography>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Cuota</TableCell>
                      <TableCell>Vencimiento</TableCell>
                      <TableCell>Capital</TableCell>
                      <TableCell>Interés</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Saldo restante</TableCell>
                      <TableCell>Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {extractLoanSchedule(selectedPrestamo).map(cuota => (
                      <TableRow key={cuota.id}>
                        <TableCell>{cuota.numero}</TableCell>
                        <TableCell>{formatDateMMDDYYYY(cuota.fecha_vencimiento)}</TableCell>
                        <TableCell>{formatCurrency(cuota.capital_programado)}</TableCell>
                        <TableCell>{formatCurrency(cuota.interes_programado)}</TableCell>
                        <TableCell>{formatCurrency(cuota.total_programado)}</TableCell>
                        <TableCell>{formatCurrency(cuota.saldo_restante)}</TableCell>
                        <TableCell>{cuota.estado}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Stack>
            ) : null}
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
                    <TableCell>Monto original</TableCell>
                    <TableCell>Interés %</TableCell>
                    <TableCell>Interés total</TableCell>
                    <TableCell>Modalidad</TableCell>
                    <TableCell>Núm. cuotas</TableCell>
                    <TableCell>Valor cuota</TableCell>
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
                      <TableCell>{formatCurrency(getLoanOriginalAmount(row))}</TableCell>
                      <TableCell>{getInteresDisplay(row)}</TableCell>
                      <TableCell>{formatCurrency(toMoneyNumber(row?.interes_total ?? 0))}</TableCell>
                      <TableCell>{row.modalidad || '-'}</TableCell>
                      <TableCell>{getLoanInstallmentsCount(row) || '-'}</TableCell>
                      <TableCell>{formatCurrency(getDisplayPagosSemanales(row))}</TableCell>
                      <TableCell>{formatCurrency(getDisplayTotalPagar(row))}</TableCell>
                      <TableCell>{formatCurrency(getLoanRemainingBalance(row))}</TableCell>
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
                      <TableCell>{formatDateMMDDYYYY(getLoanEndDateValue(row))}</TableCell>
                    </TableRow>
                  ))}
                  {historialRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={12} align='center'>
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
