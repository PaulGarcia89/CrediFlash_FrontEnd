'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import { obtenerCliente, verHistorialPrestamosCliente } from '@/api/clientes'
import { eliminarDocumento, listarSolicitudesPorCliente, obtenerSolicitud } from '@/api/solicitudes'
import { formatUSD } from '@/utils/currency'

const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows
  if (Array.isArray(payload?.solicitudes)) return payload.solicitudes
  if (Array.isArray(payload?.data?.solicitudes)) return payload.data.solicitudes

  return []
}

const formatCurrency = value => formatUSD(value)
const formatNaturalNumber = value => new Intl.NumberFormat('es-DO', { maximumFractionDigits: 0 }).format(Number(value || 0))
const normalizeStatus = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim()
const isActiveStatus = value => {
  const normalized = normalizeStatus(value)

  return ['ACTIVO', 'ACTIVA', 'ACTIVE', 'VIGENTE', 'EN CURSO', 'EN_CURSO', 'PENDIENTE'].includes(normalized)
}

const formatDate = value => {
  if (!value) return '-'
  const asDate = new Date(value)

  if (Number.isNaN(asDate.getTime())) return String(value).slice(0, 10)

  return asDate.toLocaleDateString('es-DO')
}

const normalizeBackendOrigin = () => {
  const raw = String(process.env.NEXT_PUBLIC_API_URL || '').trim().replace(/\/$/, '')

  if (!raw) return ''
  if (raw.endsWith('/api')) return raw.slice(0, -4)

  return raw
}

const buildCandidateUrls = value => {
  const raw = String(value || '').trim()

  if (!raw) return []
  if (/^https?:\/\//i.test(raw)) {
    try {
      const absolute = new URL(raw)

      if (absolute.pathname.startsWith('/uploads/')) {
        const apiUrl = new URL(raw)

        apiUrl.pathname = `/api${absolute.pathname}`

        return [apiUrl.toString(), raw]
      }
    } catch {
      // If URL parsing fails, fallback to raw value
    }

    return [raw]
  }

  const backendOrigin = normalizeBackendOrigin()

  if (!backendOrigin) return [raw]

  if (raw.startsWith('/uploads/')) {
    return [`${backendOrigin}/api${raw}`, `${backendOrigin}${raw}`]
  }

  if (raw.startsWith('uploads/')) {
    return [`${backendOrigin}/api/${raw}`, `${backendOrigin}/${raw}`]
  }

  if (raw.startsWith('/')) return [`${backendOrigin}${raw}`]

  return [`${backendOrigin}/${raw}`]
}

const extractDocumentRows = solicitudes => {
  const keysToCheck = [
    'documentos',
    'archivos',
    'adjuntos',
    'documentos_urls',
    'documentosUrls',
    'documentos_subidos',
    'documentosSubidos',
    'file_urls',
    'files',
    'pdfs'
  ]
  const rows = []

  const addItem = (source, fallbackName) => {
    if (!source) return

    if (Array.isArray(source)) {
      source.forEach((item, index) => addItem(item, `${fallbackName} ${index + 1}`))

      return
    }

    if (typeof source === 'string') {
      const urls = buildCandidateUrls(source)
      const url = urls[0] || ''

      if (!url) return

      rows.push({
        nombre: source.split('/').pop() || fallbackName,
        url,
        urls
      })

      return
    }

    if (typeof source === 'object') {
      const maybeUrl = source.url || source.path || source.ruta || source.link || source.href

      if (maybeUrl) {
        const urls = buildCandidateUrls(maybeUrl)
        const url = urls[0] || ''

        rows.push({
          id: source.id || source.documento_id || source.documentId || '',
          solicitud_id: source.solicitud_id || source.solicitudId || '',
          nombre: source.nombre || source.name || source.filename || source.originalname || fallbackName,
          url,
          urls
        })
      }
    }
  }

  solicitudes.forEach((solicitud, index) => {
    keysToCheck.forEach(key => addItem(solicitud?.[key], `Documento ${index + 1}`))
  })

  // Fallback: busca URLs PDF en cualquier propiedad anidada
  const scanForPdfUrls = value => {
    if (!value) return

    if (Array.isArray(value)) {
      value.forEach(scanForPdfUrls)

      return
    }

    if (typeof value === 'string') {
      if (value.toLowerCase().includes('.pdf')) {
        const urls = buildCandidateUrls(value)
        const url = urls[0] || ''

        if (url) {
          rows.push({
            nombre: value.split('/').pop() || 'Documento PDF',
            url,
            urls
          })
        }
      }

      return
    }

    if (typeof value === 'object') {
      Object.values(value).forEach(scanForPdfUrls)
    }
  }

  solicitudes.forEach(scanForPdfUrls)

  const seen = new Set()

  return rows.filter(item => {
    const ref = `${item.nombre}-${item.url}`

    if (seen.has(ref)) return false
    seen.add(ref)

    return true
  })
}

export default function ClienteDashboardModule({ clienteId }) {
  const router = useRouter()
  const [tab, setTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cliente, setCliente] = useState(null)
  const [prestamos, setPrestamos] = useState([])
  const [documentos, setDocumentos] = useState([])
  const [documentActionLoading, setDocumentActionLoading] = useState('')

  const loadData = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const [clienteResponse, prestamosResponse, solicitudesResponse] = await Promise.allSettled([
        obtenerCliente(clienteId),
        verHistorialPrestamosCliente(clienteId, { page: 1, limit: 100 }),
        listarSolicitudesPorCliente(clienteId)
      ])

      if (clienteResponse.status === 'fulfilled') {
        setCliente(clienteResponse.value?.data || clienteResponse.value || null)
      }

      if (prestamosResponse.status === 'fulfilled') {
        setPrestamos(extractRows(prestamosResponse.value))
      } else {
        setPrestamos([])
      }

      if (solicitudesResponse.status === 'fulfilled') {
        const solicitudes = extractRows(solicitudesResponse.value)
        const detailRequests = solicitudes
          .map(item => item?.id)
          .filter(Boolean)
          .map(id => obtenerSolicitud(id))

        const detailResponses = await Promise.allSettled(detailRequests)
        const detalles = detailResponses
          .filter(item => item.status === 'fulfilled')
          .map(item => item.value?.data || item.value)
          .filter(Boolean)

        setDocumentos(extractDocumentRows([...solicitudes, ...detalles]))
      } else {
        setDocumentos([])
      }
    } catch (err) {
      setError(err.message || 'No se pudo cargar el dashboard del cliente.')
    } finally {
      setLoading(false)
    }
  }, [clienteId])

  useEffect(() => {
    loadData()
  }, [loadData])

  const nombreCliente = useMemo(
    () => [cliente?.nombre, cliente?.apellido].filter(Boolean).join(' ') || 'Cliente',
    [cliente]
  )

  const prestamosActivos = useMemo(
    () => prestamos.filter(item => isActiveStatus(item?.status || item?.estado)),
    [prestamos]
  )

  const prestamoPrincipal = useMemo(() => prestamosActivos[0] || prestamos[0] || null, [prestamos, prestamosActivos])

  const saldoPendiente = useMemo(
    () => prestamos.reduce((sum, item) => sum + Number(item?.pendiente || item?.pagos_pendientes || 0), 0),
    [prestamos]
  )

  const progresoPrincipal = useMemo(() => {
    if (!prestamoPrincipal) return 0
    const total = Number(prestamoPrincipal?.total_pagar || 0)
    const pagado = Number(prestamoPrincipal?.pagos_hechos || 0)
    const semanas = Number(prestamoPrincipal?.num_semanas || 0)

    if (total > 0) {
      const pendiente = Number(prestamoPrincipal?.pendiente || prestamoPrincipal?.pagos_pendientes || 0)

      return Math.min(100, Math.max(0, ((total - pendiente) / total) * 100))
    }

    if (semanas > 0) return Math.min(100, Math.max(0, (pagado / semanas) * 100))

    return 0
  }, [prestamoPrincipal])

  const proximosPagos = useMemo(() => {
    if (!prestamoPrincipal) return []

    const baseDate = prestamoPrincipal?.fecha_vencimiento ? new Date(prestamoPrincipal.fecha_vencimiento) : new Date()
    const amount = Number(prestamoPrincipal?.pagos_semanales || 0)

    return Array.from({ length: 3 }).map((_, index) => {
      const date = new Date(baseDate)

      date.setDate(date.getDate() + index * 7)

      return {
        id: `${prestamoPrincipal?.id || 'prestamo'}-${index}`,
        label: `Pago semanal #${index + 1}`,
        fecha: formatDate(date),
        monto: amount
      }
    })
  }, [prestamoPrincipal])

  const handleOpenDocument = async item => {
    const candidates = Array.isArray(item?.urls) && item.urls.length ? item.urls : [item?.url].filter(Boolean)

    if (!candidates.length) {
      setError('No se encontró una URL válida para este documento.')

      return
    }

    window.open(candidates[0], '_blank', 'noopener,noreferrer')
  }

  const handleDeleteDocument = async item => {
    if (!item?.id) {
      setError('No se puede eliminar este documento porque el backend no envía su ID.')

      return
    }

    const confirmDelete = window.confirm(`¿Eliminar documento "${item.nombre}"?`)

    if (!confirmDelete) return

    setError('')
    setDocumentActionLoading(String(item.id))

    try {
      await eliminarDocumento(item.id)
      setDocumentos(previous => previous.filter(doc => String(doc.id) !== String(item.id)))
    } catch (err) {
      setError(err.message || 'No se pudo eliminar el documento.')
    } finally {
      setDocumentActionLoading('')
    }
  }

  return (
    <Stack spacing={3}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'start', md: 'center' }}
        spacing={2}
      >
        <Box>
          <Typography variant='h4' sx={{ mb: 0.5 }}>
            Dashboard del cliente
          </Typography>
          <Typography color='text.secondary'>
            {nombreCliente} {cliente?.email ? `• ${cliente.email}` : ''}
          </Typography>
        </Box>
        <Button variant='tonal' color='secondary' onClick={() => router.push('/clientes')}>
          Volver a clientes
        </Button>
      </Stack>

      {error ? <Alert severity='error'>{error}</Alert> : null}
      {loading ? <Alert severity='info'>Cargando información del cliente...</Alert> : null}

      <Card>
        <CardContent>
          <Tabs value={tab} onChange={(_, value) => setTab(value)} variant='scrollable' scrollButtons='auto'>
            <Tab value='dashboard' label='Dashboard' />
            <Tab value='loans' label='Préstamos' />
            <Tab value='payments' label='Pagos' />
            <Tab value='documents' label='Documentos' />
          </Tabs>
        </CardContent>
      </Card>

      {tab === 'dashboard' ? (
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography color='text.secondary'>Saldo actual</Typography>
                  <Typography variant='h3'>{formatCurrency(saldoPendiente)}</Typography>
                  <Typography color='text.secondary'>Pendiente total del cliente</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography color='text.secondary'>Préstamo activo</Typography>
                  <Typography variant='h3'>{formatCurrency(prestamoPrincipal?.total_pagar)}</Typography>
                  <Typography color='text.secondary'>Total a pagar del préstamo principal</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography color='text.secondary'>Próximo pago</Typography>
                  <Typography variant='h3'>{formatCurrency(prestamoPrincipal?.pagos_semanales)}</Typography>
                  <Typography color='text.secondary'>Pago semanal estimado</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Card>
            <CardContent>
              <Stack spacing={1.5}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography variant='h5'>Resumen de préstamo</Typography>
                  <Chip
                    size='small'
                    color={isActiveStatus(prestamoPrincipal?.status || prestamoPrincipal?.estado) ? 'success' : 'warning'}
                    label={prestamoPrincipal?.status || prestamoPrincipal?.estado || 'Sin préstamo'}
                    variant='tonal'
                  />
                </Stack>
                <Typography>Préstamo principal</Typography>
                <Typography color='text.secondary'>
                  Desembolsado: {formatDate(prestamoPrincipal?.fecha_inicio)} • Vence:{' '}
                  {formatDate(prestamoPrincipal?.fecha_vencimiento)}
                </Typography>
                <Box sx={{ width: '100%', height: 10, bgcolor: 'action.hover', borderRadius: 999, overflow: 'hidden' }}>
                  <Box sx={{ width: `${progresoPrincipal}%`, height: '100%', bgcolor: 'success.main' }} />
                </Box>
                <Stack direction='row' justifyContent='space-between'>
                  <Typography>Pagos hechos: {formatNaturalNumber(prestamoPrincipal?.pagos_hechos)}</Typography>
                  <Typography>Total: {formatCurrency(prestamoPrincipal?.total_pagar)}</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      ) : null}

      {tab === 'loans' ? (
        <Stack spacing={3}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 1.5 }}>
                Préstamos activos
              </Typography>
              {prestamosActivos.length === 0 ? (
                <Typography color='text.secondary'>No hay préstamos activos.</Typography>
              ) : null}
              {prestamosActivos.map(item => (
                <Stack key={`active-${item.id}`} direction='row' justifyContent='space-between' sx={{ py: 1.5 }}>
                  <Box>
                    <Typography>Préstamo activo</Typography>
                    <Typography color='text.secondary'>
                      Solicitado: {formatDate(item.fecha_inicio)} • Tasa: {item.interes ?? '-'}%
                    </Typography>
                  </Box>
                  <Typography variant='h5'>{formatCurrency(item.total_pagar)}</Typography>
                </Stack>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 1.5 }}>
                Historial de préstamos
              </Typography>
              {prestamos.length === 0 ? (
                <Typography color='text.secondary'>Sin historial de préstamos.</Typography>
              ) : null}
              {prestamos.map(item => (
                <Stack key={`history-${item.id}`} direction='row' justifyContent='space-between' sx={{ py: 1.5 }}>
                  <Box>
                    <Typography>Préstamo registrado</Typography>
                    <Typography color='text.secondary'>
                      Estado: {item.status || '-'} • Inicio: {formatDate(item.fecha_inicio)}
                    </Typography>
                  </Box>
                  <Typography variant='h6' color={isActiveStatus(item.status || item?.estado) ? 'primary.main' : 'success.main'}>
                    {isActiveStatus(item.status || item?.estado)
                      ? formatCurrency(item.pendiente || item.pagos_pendientes)
                      : 'Completado'}
                  </Typography>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Stack>
      ) : null}

      {tab === 'payments' ? (
        <Stack spacing={3}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 1.5 }}>
                Próximos pagos
              </Typography>
              {proximosPagos.map(item => (
                <Stack key={item.id} direction='row' justifyContent='space-between' sx={{ py: 1.5 }}>
                  <Box>
                    <Typography>{item.label}</Typography>
                    <Typography color='text.secondary'>Vence: {item.fecha}</Typography>
                  </Box>
                  <Typography variant='h6'>{formatCurrency(item.monto)}</Typography>
                </Stack>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 1.5 }}>
                Historial de pagos
              </Typography>
              {prestamos.slice(0, 5).map(item => (
                <Stack key={`pay-${item.id}`} direction='row' justifyContent='space-between' sx={{ py: 1.5 }}>
                  <Box>
                    <Typography>Pago semanal de préstamo</Typography>
                    <Typography color='text.secondary'>{formatDate(item.fecha_inicio)} • Registro interno</Typography>
                  </Box>
                  <Typography color='success.main'>-{formatCurrency(item.pagos_semanales)}</Typography>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Stack>
      ) : null}

      {tab === 'documents' ? (
        <Stack spacing={3}>
          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 1.5 }}>
                Contratos activos
              </Typography>
              {prestamosActivos.length === 0 ? (
                <Typography color='text.secondary'>Sin contratos activos.</Typography>
              ) : null}
              {prestamosActivos.map(item => (
                <Stack key={`doc-active-${item.id}`} direction='row' justifyContent='space-between' sx={{ py: 1.5 }}>
                  <Box>
                    <Typography>Contrato de préstamo</Typography>
                    <Typography color='text.secondary'>Firmado: {formatDate(item.fecha_inicio)} • PDF</Typography>
                  </Box>
                  <i className='tabler-download text-2xl' />
                </Stack>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant='h5' sx={{ mb: 1.5 }}>
                Documentos subidos
              </Typography>
              {!documentos.length ? <Typography color='text.secondary'>No hay documentos PDF cargados.</Typography> : null}
              {documentos.map((item, index) => (
                <Stack key={`${item.url}-${index}`} direction='row' justifyContent='space-between' alignItems='center' sx={{ py: 1.25 }}>
                  <Box>
                    <Typography>{item.nombre || `Documento ${index + 1}`}</Typography>
                    <Typography color='text.secondary' variant='body2'>
                      Archivo PDF
                    </Typography>
                  </Box>
                  <Stack direction='row' spacing={1}>
                    <Button size='small' variant='tonal' color='primary' onClick={() => handleOpenDocument(item)}>
                      Ver / Descargar
                    </Button>
                    <Button
                      size='small'
                      variant='tonal'
                      color='error'
                      onClick={() => handleDeleteDocument(item)}
                      disabled={Boolean(item?.id) && documentActionLoading === String(item.id)}
                    >
                      Eliminar
                    </Button>
                  </Stack>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Stack>
      ) : null}

      <Divider />
      <Typography color='text.secondary' textAlign='center'>
        CreditFlash - Dashboard del cliente
      </Typography>
    </Stack>
  )
}
