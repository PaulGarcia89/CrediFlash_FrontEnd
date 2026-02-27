'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

import { obtenerCliente, obtenerDocumentosCliente, verHistorialPrestamosCliente } from '@/api/clientes'
import { eliminarDocumento } from '@/api/solicitudes'
import { getToken } from '@/lib/auth/session'
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

const deduplicarDocumentos = documentos => {
  const seen = new Set()

  return (Array.isArray(documentos) ? documentos : []).filter(item => {
    const key = String(item?.id || item?.url_descarga || item?.download_url || item?.url || '').trim()
    if (!key || seen.has(key)) return false
    seen.add(key)

    return true
  })
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
  if (/^https?:\/\//i.test(raw)) {
    try {
      const absolute = new URL(raw)

      if (absolute.pathname.startsWith('/uploads/')) {
        const apiUrl = new URL(raw)

        apiUrl.pathname = `/api${absolute.pathname}`

        return [forceHttpsIfNeeded(apiUrl.toString()), forceHttpsIfNeeded(raw)]
      }
    } catch {
      // If URL parsing fails, fallback to raw value
    }

    return [forceHttpsIfNeeded(raw)]
  }

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

export default function ClienteDashboardModule({ clienteId }) {
  const router = useRouter()
  const [tab, setTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cliente, setCliente] = useState(null)
  const [prestamos, setPrestamos] = useState([])
  const [documentos, setDocumentos] = useState([])
  const [documentActionLoading, setDocumentActionLoading] = useState('')
  const [documentActionError, setDocumentActionError] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewUrl, setPreviewUrl] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })
  const lastPreviewTriggerRef = useRef(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const [clienteResponse, prestamosResponse, documentosResponse] = await Promise.allSettled([
        obtenerCliente(clienteId),
        verHistorialPrestamosCliente(clienteId, { page: 1, limit: 100 }),
        obtenerDocumentosCliente(clienteId)
      ])

      if (clienteResponse.status === 'fulfilled') {
        setCliente(clienteResponse.value?.data || clienteResponse.value || null)
      }

      if (prestamosResponse.status === 'fulfilled') {
        setPrestamos(extractRows(prestamosResponse.value))
      } else {
        setPrestamos([])
      }

      if (documentosResponse.status === 'fulfilled') {
        setDocumentos(deduplicarDocumentos(extractRows(documentosResponse.value)))
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

    const totalCuotas = Math.max(Number(prestamoPrincipal?.num_semanas || 0), 0)
    const cuotasPagadas = Math.max(Number(prestamoPrincipal?.pagos_hechos || 0), 0)
    const baseDate = prestamoPrincipal?.fecha_inicio ? new Date(prestamoPrincipal.fecha_inicio) : new Date()
    const amount = Number(prestamoPrincipal?.pagos_semanales || 0)

    if (!totalCuotas) return []

    return Array.from({ length: totalCuotas }).map((_, index) => {
      const date = new Date(baseDate)

      date.setDate(date.getDate() + index * 7)

      return {
        id: `${prestamoPrincipal?.id || 'prestamo'}-${index}`,
        label: `Cuota #${index + 1}`,
        fecha: formatDate(date),
        monto: amount,
        estado: index < cuotasPagadas ? 'Pagada' : 'Pendiente'
      }
    })
  }, [prestamoPrincipal])

  const getDocumentOpenUrl = item => {
    const raw = item?.url_ver || item?.url_descarga || item?.download_url || item?.url || ''
    const urls = buildCandidateUrls(raw)

    return urls[0] || ''
  }

  const getDocumentDownloadUrl = item => {
    const raw = item?.url_descarga || item?.download_url || item?.url_ver || item?.url || ''
    const urls = buildCandidateUrls(raw)

    return urls[0] || ''
  }

  const fetchDocumentBlobWithAuth = async item => {
    const url = getDocumentDownloadUrl(item)

    if (!url) {
      throw new Error('No se encontró una URL válida para el documento.')
    }

    const token = getToken()
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    let response

    try {
      response = await fetch(url, {
        method: 'GET',
        headers,
        cache: 'no-store'
      })
    } catch {
      const networkError = new Error('No se pudo descargar por CORS/red (Failed to fetch).')

      networkError.code = 'FETCH_FAILED'
      networkError.fallbackUrl = url
      throw networkError
    }

    if (!response.ok) {
      const backendPayload = await response.json().catch(() => ({}))
      const backendMessage = backendPayload?.message || backendPayload?.error || `HTTP ${response.status}`

      throw new Error(backendMessage)
    }

    const blob = await response.blob()

    return {
      blob,
      objectUrl: window.URL.createObjectURL(blob)
    }
  }

  const handleOpenDocument = async (item, triggerElement = null) => {
    setDocumentActionError('')
    const activeElement = triggerElement || document.activeElement

    if (activeElement && typeof activeElement.blur === 'function') {
      lastPreviewTriggerRef.current = activeElement
      activeElement.blur()
    }

    try {
      const { objectUrl } = await fetchDocumentBlobWithAuth(item)

      setPreviewUrl(previous => {
        if (previous?.startsWith('blob:')) window.URL.revokeObjectURL(previous)

        return objectUrl
      })
      setPreviewTitle(item?.nombre || 'Documento PDF')
      setPreviewOpen(true)
    } catch (err) {
      if (err?.code === 'FETCH_FAILED') {
        const fallbackUrl = err?.fallbackUrl || getDocumentOpenUrl(item)

        if (fallbackUrl) {
          setPreviewUrl(fallbackUrl)
          setPreviewTitle(item?.nombre || 'Documento PDF')
          setPreviewOpen(true)
          setSnackbar({
            open: true,
            message: 'Vista previa abierta con modo alterno por restricción CORS.',
            severity: 'warning'
          })

          return
        }
      }

      setDocumentActionError(err.message || 'No se encontró una URL válida para visualizar este documento.')
      setSnackbar({
        open: true,
        message: err.message || 'No se encontró una URL válida para visualizar el documento.',
        severity: 'error'
      })
    }
  }

  const handleDownloadDocument = async item => {
    setDocumentActionError('')

    try {
      const { objectUrl } = await fetchDocumentBlobWithAuth(item)
      const link = document.createElement('a')

      link.href = objectUrl
      link.download = item?.nombre || 'documento.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.setTimeout(() => window.URL.revokeObjectURL(objectUrl), 0)
    } catch (err) {
      if (err?.code === 'FETCH_FAILED') {
        setDocumentActionError('No se pudo descargar el archivo por CORS/red. Intenta visualizarlo o solicita ajuste CORS al backend.')
        setSnackbar({
          open: true,
          message: 'Descarga bloqueada por CORS/red. Requiere ajuste backend.',
          severity: 'error'
        })

        return
      }

      setDocumentActionError(err.message || 'No se encontró una URL válida para descargar este documento.')
      setSnackbar({
        open: true,
        message: err.message || 'No se encontró una URL válida para descargar el documento.',
        severity: 'error'
      })
    }
  }

  const handleDeleteDocument = async item => {
    setDocumentActionError('')

    if (!item?.id) {
      setDocumentActionError('No se puede eliminar este documento porque el backend no envía su ID.')
      setSnackbar({ open: true, message: 'No se puede eliminar: falta ID del documento.', severity: 'error' })

      return
    }

    const confirmDelete = window.confirm(`¿Eliminar documento "${item.nombre}"?`)

    if (!confirmDelete) return

    setError('')
    setDocumentActionLoading(String(item.id))

    try {
      await eliminarDocumento(item.id)
      const refreshed = await obtenerDocumentosCliente(clienteId)

      setDocumentos(deduplicarDocumentos(extractRows(refreshed)))
      setSnackbar({ open: true, message: 'Documento eliminado correctamente.', severity: 'success' })
    } catch (err) {
      setDocumentActionError(err.message || 'No se pudo eliminar el documento.')
      setSnackbar({ open: true, message: err.message || 'No se pudo eliminar el documento.', severity: 'error' })
    } finally {
      setDocumentActionLoading('')
    }
  }

  const handleClosePreview = () => {
    setPreviewOpen(false)

    if (previewUrl?.startsWith('blob:')) {
      window.URL.revokeObjectURL(previewUrl)
    }

    setPreviewUrl('')

    const trigger = lastPreviewTriggerRef.current

    if (trigger && typeof trigger.focus === 'function') {
      window.setTimeout(() => {
        trigger.focus()
      }, 0)
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
                Cuotas del crédito activo
              </Typography>
              {!proximosPagos.length ? <Typography color='text.secondary'>No hay cuotas disponibles.</Typography> : null}
              {proximosPagos.map(item => (
                <Stack key={item.id} direction='row' justifyContent='space-between' sx={{ py: 1.5 }}>
                  <Box>
                    <Typography>{item.label}</Typography>
                    <Typography color='text.secondary'>
                      Vence: {item.fecha} • Estado: {item.estado}
                    </Typography>
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
              {documentActionError ? (
                <Alert severity='error' sx={{ mb: 2 }}>
                  {documentActionError}
                </Alert>
              ) : null}
              {!documentos.length ? <Typography color='text.secondary'>No hay documentos PDF cargados.</Typography> : null}
              {documentos.map((item, index) => (
                <Stack
                  key={`${item.id || item.url}-${index}`}
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{ py: 1.25 }}
                >
                  <Box>
                    <Typography>{item.nombre || `Documento ${index + 1}`}</Typography>
                    <Typography color='text.secondary' variant='body2'>
                      Archivo PDF {item?.size_bytes ? `• ${(Number(item.size_bytes) / (1024 * 1024)).toFixed(2)} MB` : ''}
                    </Typography>
                  </Box>
                  <Stack direction='row' spacing={1}>
                    <Button size='small' variant='tonal' color='primary' onClick={event => handleOpenDocument(item, event.currentTarget)}>
                      Visualizar
                    </Button>
                    <Button size='small' variant='tonal' color='info' onClick={() => handleDownloadDocument(item)}>
                      Descargar
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

      <Dialog open={previewOpen} onClose={handleClosePreview} fullWidth maxWidth='lg'>
        <DialogTitle>{previewTitle || 'Vista previa del documento'}</DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          {previewUrl ? (
            <Box sx={{ width: '100%', height: '75vh' }}>
              <iframe title='Vista previa PDF' src={previewUrl} width='100%' height='100%' style={{ border: 0 }} />
            </Box>
          ) : (
            <Box sx={{ p: 3 }}>
              <Typography color='text.secondary'>No se encontró una URL válida para mostrar el documento.</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant='tonal'
            color='primary'
            onClick={() => {
              if (previewUrl) window.open(previewUrl, '_blank', 'noopener,noreferrer')
            }}
            disabled={!previewUrl}
          >
            Abrir en nueva pestaña
          </Button>
          <Button variant='outlined' onClick={handleClosePreview} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3500}
        onClose={() => setSnackbar(previous => ({ ...previous, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar(previous => ({ ...previous, open: false }))}
          severity={snackbar.severity}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Divider />
      <Typography color='text.secondary' textAlign='center'>
        CreditFlash - Dashboard del cliente
      </Typography>
    </Stack>
  )
}
