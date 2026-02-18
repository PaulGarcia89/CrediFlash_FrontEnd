'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
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

import {
  aprobarSolicitud,
  ejecutarModeloAntiguo,
  ejecutarModeloNuevo,
  ejecutarRatingClienteAntiguo,
  ejecutarRatingNuevoCliente,
  listarSolicitudes,
  rechazarSolicitud
} from '@/api/solicitudes'
import { formatUSD } from '@/utils/currency'

const LABEL_MAP = {
  scoreFinal: 'Puntaje',
  calificacion: 'Calificación',
  riesgoTotal: 'Riesgo total',
  colorRiesgo: 'Color de riesgo',
  aprobado: 'Aprobado',
  decision: 'Decisión',
  plazoAnalisis: 'Plazo análisis',
  datosCliente: 'Datos del cliente',
  calculosDetallados: 'Cálculos detallados',
  analisisPlazo: 'Análisis de plazo',
  ratiosFinancieros: 'Ratios financieros',
  ofertaCrediticia: 'Oferta crediticia',
  recomendaciones: 'Recomendaciones',
  simulacionesAlternativas: 'Simulaciones alternativas',
  factoresClave: 'Factores clave',
  estadisticas: 'Estadísticas',
  montoSolicitado: 'Monto solicitado',
  ingresosMensuales: 'Ingresos mensuales',
  montoGarantia: 'Monto garantía',
  tiempoSemanas: 'Tiempo (semanas)',
  objetivoPrestamo: 'Objetivo préstamo',
  esReferido: 'Es referido',
  tieneGarantia: 'Tiene garantía',
  maxPuntos: 'Puntos máximos'
}

const HIDDEN_KEYS = ['_id', 'created_at', 'updated_at', 'creado_en', 'timestamp']

const EXCLUDED_RESULT_FIELDS = new Set([
  'colorriesgo',
  'softrules',
  'detallebloques3',
  'detallebloques4',
  'decisionpolicy',
  'auditoria',
  'inputsfaltantes',
  'warnings'
])

const EXCLUDED_RESULT_VALUES = new Set(['#10b981'])

const isPlainObject = value => value !== null && typeof value === 'object' && !Array.isArray(value)

const normalizeText = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const normalizeField = value =>
  String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')

const getLabel = key => {
  if (LABEL_MAP[key]) return LABEL_MAP[key]

  return String(key)
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, text => text.toUpperCase())
}

const shouldHideKey = key => {
  const lowered = String(key).toLowerCase()

  if (lowered === 'id' || lowered.endsWith('_id') || lowered.includes('uuid')) return true

  return HIDDEN_KEYS.some(item => lowered.includes(item))
}

const shouldExcludeResultField = (key, value) => {
  const normalizedKey = normalizeField(key)
  const normalizedLabel = normalizeField(getLabel(key))

  const normalizedValue = String(value || '')
    .trim()
    .toLowerCase()

  if (EXCLUDED_RESULT_FIELDS.has(normalizedKey) || EXCLUDED_RESULT_FIELDS.has(normalizedLabel)) {
    return true
  }

  return EXCLUDED_RESULT_VALUES.has(normalizedValue)
}

const shouldExcludeDetalleBloquesEntry = (sectionTitle, keyOrIndex) => {
  if (normalizeField(sectionTitle) !== 'detallebloques') return false

  const normalizedEntry = normalizeField(String(keyOrIndex))

  return normalizedEntry === '3' || normalizedEntry === '4'
}

const formatValue = value => {
  if (typeof value === 'boolean') return value ? 'Sí' : 'No'
  if (value === null || value === undefined || value === '') return '-'

  if (typeof value === 'number') {
    return new Intl.NumberFormat('es-DO').format(value)
  }

  return String(value)
}

const renderPrimitiveCard = (title, value, color = 'primary.main') => (
  <Grid item xs={12} md={6} lg={4} key={`${title}-${String(value)}`}>
    <Card variant='outlined' sx={{ borderTop: `4px solid ${color}` }}>
      <CardContent>
        <Typography variant='caption' color='text.secondary'>
          {title}
        </Typography>
        <Typography variant='h6' color='text.primary'>
          {formatValue(value)}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
)

const renderObjectAsCards = (title, objectValue, color = 'primary.main') => {
  const entries = Object.entries(objectValue || {}).filter(
    ([key, value]) =>
      !shouldHideKey(key) && !shouldExcludeResultField(key, value) && !shouldExcludeDetalleBloquesEntry(title, key)
  )

  return (
    <Stack spacing={1.5} key={title}>
      <Typography variant='h6'>{title}</Typography>
      <Grid container spacing={1.5}>
        {entries.map(([key, value]) => {
          if (isPlainObject(value) || Array.isArray(value)) {
            return (
              <Grid item xs={12} key={`${title}-${key}`}>
                {renderSection(getLabel(key), value, color)}
              </Grid>
            )
          }

          return renderPrimitiveCard(getLabel(key), value, color)
        })}
      </Grid>
    </Stack>
  )
}

const renderArrayAsCards = (title, arrayValue, color = 'primary.main') => {
  return (
    <Stack spacing={1.5} key={title}>
      <Typography variant='h6'>{title}</Typography>
      <Grid container spacing={1.5}>
        {arrayValue.map((item, index) => {
          if (shouldExcludeDetalleBloquesEntry(title, index + 1)) return null

          const cardTitle = `${title} ${index + 1}`

          if (isPlainObject(item)) {
            const entries = Object.entries(item).filter(
              ([key, value]) => !shouldHideKey(key) && !shouldExcludeResultField(key, value)
            )

            return (
              <Grid item xs={12} md={6} key={`${title}-${index}`}>
                <Card variant='outlined' sx={{ borderTop: `4px solid ${color}` }}>
                  <CardContent>
                    <Typography variant='subtitle2' mb={1}>
                      {cardTitle}
                    </Typography>
                    <Stack spacing={0.8}>
                      {entries.map(([key, value]) => (
                        <Box key={`${cardTitle}-${key}`}>
                          <Typography variant='caption' color='text.secondary'>
                            {getLabel(key)}
                          </Typography>
                          <Typography variant='body2'>{formatValue(value)}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          }

          return renderPrimitiveCard(cardTitle, item, color)
        })}
      </Grid>
    </Stack>
  )
}

const renderSection = (title, sectionValue, color = 'primary.main') => {
  if (Array.isArray(sectionValue)) {
    return renderArrayAsCards(title, sectionValue, color)
  }

  if (isPlainObject(sectionValue)) {
    return renderObjectAsCards(title, sectionValue, color)
  }

  return (
    <Grid container spacing={1.5} key={`${title}-single`}>
      {renderPrimitiveCard(title, sectionValue, color)}
    </Grid>
  )
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

const getEstadoColor = estado => {
  if (estado === 'APROBADO') return 'success'
  if (estado === 'RECHAZADO') return 'error'

  return 'warning'
}

const countEstado = (rows, estado) => rows.filter(item => String(item?.estado || '').toUpperCase() === estado).length

const getClienteNombre = row => {
  if (row?.cliente) {
    return `${row.cliente?.nombre || ''} ${row.cliente?.apellido || ''}`.trim()
  }

  return row?.cliente_nombre || row?.nombre_cliente || ''
}

const initialModeloForm = {
  edad: '',
  sexo: 'M',
  tiempoSemanas: '',
  objetivoPrestamo: 'inversion',
  esReferido: false,
  tieneGarantia: false,
  montoGarantia: '',
  montoSolicitado: '0',
  ingresosMensuales: ''
}

export default function SolicitudesModule() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const focusSolicitudId = searchParams.get('focusSolicitudId') || ''
  const focusClienteId = searchParams.get('focusClienteId') || ''
  const focusActive = Boolean(focusSolicitudId || focusClienteId)

  const [solicitudes, setSolicitudes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('')
  const [modeloFiltro, setModeloFiltro] = useState('')
  const [orden, setOrden] = useState('pendientes')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 })
  const [processingId, setProcessingId] = useState('')

  const [modeloDialogOpen, setModeloDialogOpen] = useState(false)
  const [selectedSolicitud, setSelectedSolicitud] = useState(null)
  const [modeloTipo, setModeloTipo] = useState('CLIENTE_NUEVO')
  const [ratingForm, setRatingForm] = useState(initialModeloForm)
  const [ratingLoading, setRatingLoading] = useState(false)
  const [resultadoModelo, setResultadoModelo] = useState(null)

  const loadSolicitudes = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const response = await listarSolicitudes({ page, limit, estado, search })
      const rows = extractRows(response)

      rows.sort((a, b) => {
        if (a.estado === 'PENDIENTE' && b.estado !== 'PENDIENTE') return -1
        if (a.estado !== 'PENDIENTE' && b.estado === 'PENDIENTE') return 1

        return 0
      })

      setSolicitudes(rows)
      setPagination(extractPagination(response))
    } catch (err) {
      setError(err.message || 'No se pudo cargar solicitudes.')
    } finally {
      setLoading(false)
    }
  }, [estado, limit, page, search])

  useEffect(() => {
    loadSolicitudes()
  }, [loadSolicitudes])

  useEffect(() => {
    setPage(1)
  }, [estado, limit, search])

  const runAprobacion = async row => {
    setProcessingId(row.id)
    setError('')
    setSuccess('')

    try {
      const interes = Number(row.tasa_variable || 0)

      await aprobarSolicitud(row.id, {
        interes: Number.isFinite(interes) ? Math.round(interes) : 0,
        num_semanas: Number(row.plazo_semanas || 0)
      })

      setSuccess('Solicitud aprobada.')
      await loadSolicitudes()
    } catch (err) {
      setError(err.message || 'No se pudo aprobar la solicitud.')
    } finally {
      setProcessingId('')
    }
  }

  const runRechazo = async row => {
    setProcessingId(row.id)
    setError('')
    setSuccess('')

    try {
      await rechazarSolicitud(row.id)
      setSuccess('Solicitud rechazada.')
      await loadSolicitudes()
    } catch (err) {
      setError(err.message || 'No se pudo rechazar la solicitud.')
    } finally {
      setProcessingId('')
    }
  }

  const openModeloDialog = row => {
    setSelectedSolicitud(row)
    setModeloTipo(row?.modelo_calificacion || 'CLIENTE_NUEVO')
    setRatingForm({
      ...initialModeloForm,
      tiempoSemanas: String(row?.plazo_semanas || ''),
      montoSolicitado: '0'
    })
    setModeloDialogOpen(true)
  }

  const closeModeloDialog = () => {
    if (ratingLoading) return

    setModeloDialogOpen(false)
    setSelectedSolicitud(null)
  }

  const handleModeloForm = (field, value) => {
    setRatingForm(previous => ({ ...previous, [field]: value }))
  }

  const ejecutarModelo = async () => {
    if (!selectedSolicitud) return

    setRatingLoading(true)
    setError('')
    setSuccess('')

    const start = Date.now()

    try {
      if (modeloTipo === 'CLIENTE_NUEVO') {
        await ejecutarModeloNuevo(selectedSolicitud.id)

        const payload = {
          edad: Number(ratingForm.edad || 0),
          sexo: ratingForm.sexo,
          tiempoSemanas: Number(ratingForm.tiempoSemanas || 0),
          objetivoPrestamo: ratingForm.objetivoPrestamo,
          esReferido: Boolean(ratingForm.esReferido),
          tieneGarantia: Boolean(ratingForm.tieneGarantia),
          montoGarantia: Number(ratingForm.montoGarantia || 0),
          montoSolicitado: Number(ratingForm.montoSolicitado || 0),
          ingresosMensuales: Number(ratingForm.ingresosMensuales || 0)
        }

        const response = await ejecutarRatingNuevoCliente(payload)

        setResultadoModelo(response)
      } else {
        await ejecutarModeloAntiguo(selectedSolicitud.id)

        const clienteNombre = getClienteNombre(selectedSolicitud)

        if (!clienteNombre) {
          throw new Error('No se encontró nombre y apellido del cliente para modelo antiguo.')
        }

        const response = await ejecutarRatingClienteAntiguo(clienteNombre)

        setResultadoModelo(response)
      }

      const elapsed = Date.now() - start

      if (elapsed < 2000) {
        await new Promise(resolve => {
          setTimeout(resolve, 2000 - elapsed)
        })
      }

      setSuccess('Modelo ejecutado con éxito.')
      await loadSolicitudes()
      setModeloDialogOpen(false)
    } catch (err) {
      setError(err.message || 'No se pudo ejecutar el modelo.')
    } finally {
      setRatingLoading(false)
    }
  }

  const rows = useMemo(() => solicitudes || [], [solicitudes])

  const tableRows = useMemo(() => {
    let output = [...rows]
    const normalizedQuery = normalizeText(search)

    if (modeloFiltro) {
      output = output.filter(item => String(item?.modelo_calificacion || '').toUpperCase() === modeloFiltro)
    }

    if (orden === 'monto_desc') {
      output.sort((a, b) => Number(b?.monto_solicitado || 0) - Number(a?.monto_solicitado || 0))
    }

    if (orden === 'monto_asc') {
      output.sort((a, b) => Number(a?.monto_solicitado || 0) - Number(b?.monto_solicitado || 0))
    }

    if (orden === 'pendientes') {
      output.sort((a, b) => {
        if (a.estado === 'PENDIENTE' && b.estado !== 'PENDIENTE') return -1
        if (a.estado !== 'PENDIENTE' && b.estado === 'PENDIENTE') return 1

        return 0
      })
    }

    if (normalizedQuery) {
      output = output.filter(item => {
        const nombreCliente = getClienteNombre(item)
        const emailCliente = item?.cliente?.email || item?.cliente_email || ''

        const searchable = [
          nombreCliente,
          emailCliente,
          item?.estado,
          item?.modelo_calificacion,
          item?.monto_solicitado
        ]
          .map(normalizeText)
          .join(' ')

        return searchable.includes(normalizedQuery)
      })
    }

    if (focusActive) {
      output = output.filter(item => {
        const matchSolicitud = focusSolicitudId ? String(item?.id || '') === String(focusSolicitudId) : false
        const matchCliente = focusClienteId ? String(item?.cliente_id || '') === String(focusClienteId) : false

        return matchSolicitud || matchCliente
      })
    }

    return output
  }, [modeloFiltro, orden, rows, search, focusActive, focusClienteId, focusSolicitudId])

  const metrics = useMemo(() => {
    return {
      total: pagination.total,
      pendientes: countEstado(rows, 'PENDIENTE'),
      aprobadas: countEstado(rows, 'APROBADO'),
      rechazadas: countEstado(rows, 'RECHAZADO')
    }
  }, [rows, pagination.total])

  const resumen = resultadoModelo?.resumen || {}
  const riesgoColor = resumen?.colorRiesgo || 'primary.main'

  const orderedSections = resultadoModelo
    ? Object.entries(resultadoModelo).filter(
        ([key, value]) => !shouldHideKey(key) && !shouldExcludeResultField(key, value)
      )
    : []

  const handleExportCsv = () => {
    const headers = ['Cliente', 'Monto', 'PlazoSemanas', 'TasaVariablePct', 'Estado']

    const lines = tableRows.map(item => [
      getClienteNombre(item) || '',
      item?.monto_solicitado || '',
      item?.plazo_semanas || '',
      item?.tasa_variable || '',
      item?.estado || ''
    ])

    const csv = [
      headers.join(','),
      ...lines.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')

    anchor.href = url
    anchor.download = 'solicitudes.csv'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Stack spacing={2}>
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
                    Solicitudes
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
                  <i className='tabler-file-description text-2xl' />
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
                    {metrics.pendientes}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Pendientes
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
                  <i className='tabler-hourglass text-2xl' />
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
                    {metrics.aprobadas}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Aprobadas
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
                    {metrics.rechazadas}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Rechazadas
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
                  <i className='tabler-circle-x text-2xl' />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack spacing={3}>
            <Box>
              <Typography variant='h4'>Solicitudes</Typography>
              <Typography color='text.secondary'>Listado y cambio de estado de solicitudes.</Typography>
            </Box>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              justifyContent='space-between'
              alignItems={{ md: 'center' }}
            >
              <Stack direction='row' spacing={1.5}>
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
                <Button variant='contained' component={Link} href='/solicitudes/nueva'>
                  + Ingresar solicitud
                </Button>
              </Stack>
              <Stack direction='row' spacing={1.5}>
                <TextField
                  label='Buscar solicitud'
                  placeholder='Nombre o email'
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  size='small'
                  sx={{ minWidth: { xs: '100%', md: 300 } }}
                />
                <TextField
                  select
                  label='Estado'
                  value={estado}
                  onChange={event => setEstado(event.target.value)}
                  size='small'
                  sx={{ minWidth: 170 }}
                >
                  <MenuItem value=''>Todas</MenuItem>
                  <MenuItem value='PENDIENTE'>PENDIENTE</MenuItem>
                  <MenuItem value='APROBADO'>APROBADO</MenuItem>
                  <MenuItem value='RECHAZADO'>RECHAZADO</MenuItem>
                </TextField>
              </Stack>
            </Stack>
            <Divider />

            {error ? <Alert severity='error'>{error}</Alert> : null}
            {success ? <Alert severity='success'>{success}</Alert> : null}
            {focusActive ? (
              <Alert severity='info'>
                Mostrando solo la solicitud del cliente recién ingresado.
                <Button
                  size='small'
                  variant='text'
                  color='inherit'
                  onClick={() => router.replace('/solicitudes')}
                  sx={{ ml: 1 }}
                >
                  Ver todas
                </Button>
              </Alert>
            ) : null}

            {loading ? (
              <Stack alignItems='center' py={8}>
                <CircularProgress size={28} />
              </Stack>
            ) : (
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell padding='checkbox'>
                      <Checkbox size='small' />
                    </TableCell>
                    <TableCell>Cliente</TableCell>
                    <TableCell>Monto</TableCell>
                    <TableCell>Plazo (semanas)</TableCell>
                    <TableCell>Tasa variable (%)</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map(row => {
                    const isBusy = processingId === row.id
                    const isPendiente = row.estado === 'PENDIENTE'
                    const cliente = getClienteNombre(row)

                    return (
                      <TableRow key={row.id} hover>
                        <TableCell padding='checkbox'>
                          <Checkbox size='small' />
                        </TableCell>
                        <TableCell>{cliente || '-'}</TableCell>
                        <TableCell>{formatUSD(row.monto_solicitado)}</TableCell>
                        <TableCell>{row.plazo_semanas ?? '-'}</TableCell>
                        <TableCell>{row.tasa_variable ?? '-'}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.estado || '-'}
                            color={getEstadoColor(row.estado)}
                            size='small'
                            variant='tonal'
                          />
                        </TableCell>
                        <TableCell>
                          <Stack direction='row' spacing={0.25} flexWrap='wrap'>
                            <Tooltip title='Editar'>
                              <span>
                                <IconButton
                                  size='small'
                                  disabled={!isPendiente || isBusy}
                                  onClick={() => router.push(`/solicitudes/${row.id}/editar`)}
                                >
                                  <i className='tabler-edit text-3xl' />
                                </IconButton>
                              </span>
                            </Tooltip>
                            <Tooltip title='Ejecutar modelo'>
                              <span>
                                <IconButton
                                  size='small'
                                  color='warning'
                                  disabled={!isPendiente || isBusy}
                                  onClick={() => openModeloDialog(row)}
                                >
                                  <i className='tabler-player-play text-3xl' />
                                </IconButton>
                              </span>
                            </Tooltip>
                            <Tooltip title='Aprobar'>
                              <span>
                                <IconButton
                                  size='small'
                                  color='success'
                                  disabled={!isPendiente || isBusy}
                                  onClick={() => runAprobacion(row)}
                                >
                                  <i className='tabler-check text-3xl' />
                                </IconButton>
                              </span>
                            </Tooltip>
                            <Tooltip title='Rechazar'>
                              <span>
                                <IconButton
                                  size='small'
                                  color='error'
                                  disabled={!isPendiente || isBusy}
                                  onClick={() => runRechazo(row)}
                                >
                                  <i className='tabler-x text-3xl' />
                                </IconButton>
                              </span>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  {tableRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align='center'>
                        Sin resultados
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
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

      <Dialog open={modeloDialogOpen} onClose={closeModeloDialog} fullWidth maxWidth='md'>
        <DialogTitle>Ejecutar modelo de aprobación</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              select
              label='Modelo'
              value={modeloTipo}
              onChange={event => setModeloTipo(event.target.value)}
              disabled={ratingLoading}
            >
              <MenuItem value='CLIENTE_NUEVO'>Modelo Cliente Nuevo</MenuItem>
              <MenuItem value='CLIENTE_ANTIGUO'>Modelo Cliente Antiguo</MenuItem>
            </TextField>

            {modeloTipo === 'CLIENTE_NUEVO' ? (
              <Stack spacing={2}>
                <TextField
                  label='Edad'
                  type='number'
                  value={ratingForm.edad}
                  onChange={event => handleModeloForm('edad', event.target.value)}
                  required
                />
                <TextField
                  select
                  label='Sexo'
                  value={ratingForm.sexo}
                  onChange={event => handleModeloForm('sexo', event.target.value)}
                >
                  <MenuItem value='M'>Masculino</MenuItem>
                  <MenuItem value='F'>Femenino</MenuItem>
                </TextField>
                <TextField
                  label='Plazo en semanas'
                  type='number'
                  value={ratingForm.tiempoSemanas}
                  onChange={event => handleModeloForm('tiempoSemanas', event.target.value)}
                />
                <TextField
                  label='Objetivo del préstamo'
                  value={ratingForm.objetivoPrestamo}
                  onChange={event => handleModeloForm('objetivoPrestamo', event.target.value)}
                />
                <TextField
                  label='Monto solicitado'
                  type='number'
                  value={ratingForm.montoSolicitado}
                  onChange={event => handleModeloForm('montoSolicitado', event.target.value)}
                />
                <TextField
                  label='Ingresos mensuales'
                  type='number'
                  value={ratingForm.ingresosMensuales}
                  onChange={event => handleModeloForm('ingresosMensuales', event.target.value)}
                />
                <TextField
                  select
                  label='¿Es referido?'
                  value={ratingForm.esReferido ? 'SI' : 'NO'}
                  onChange={event => handleModeloForm('esReferido', event.target.value === 'SI')}
                >
                  <MenuItem value='SI'>Sí</MenuItem>
                  <MenuItem value='NO'>No</MenuItem>
                </TextField>
                <TextField
                  select
                  label='¿Tiene garantía?'
                  value={ratingForm.tieneGarantia ? 'SI' : 'NO'}
                  onChange={event => handleModeloForm('tieneGarantia', event.target.value === 'SI')}
                >
                  <MenuItem value='SI'>Sí</MenuItem>
                  <MenuItem value='NO'>No</MenuItem>
                </TextField>
                <TextField
                  label='Monto garantía'
                  type='number'
                  value={ratingForm.montoGarantia}
                  onChange={event => handleModeloForm('montoGarantia', event.target.value)}
                  disabled={!ratingForm.tieneGarantia}
                />
              </Stack>
            ) : (
              <Alert severity='info'>
                Se ejecutará modelo de cliente antiguo usando nombre y apellido del cliente de la solicitud.
              </Alert>
            )}

            {ratingLoading ? (
              <Stack direction='row' spacing={1.5} alignItems='center'>
                <CircularProgress size={20} />
                <Typography>Procesando modelo...</Typography>
              </Stack>
            ) : null}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={closeModeloDialog} disabled={ratingLoading}>
            Cancelar
          </Button>
          <Button variant='contained' onClick={ejecutarModelo} disabled={ratingLoading}>
            Ejecutar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={Boolean(resultadoModelo)} onClose={() => setResultadoModelo(null)} fullWidth maxWidth='lg'>
        <DialogTitle>Resultado del modelo</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {resumen?.decision ? (
              <Alert severity={resumen?.aprobado ? 'success' : 'warning'}>{resumen.decision}</Alert>
            ) : null}

            <Grid container spacing={1.5}>
              {Object.entries(resumen)
                .filter(([key, value]) => !shouldHideKey(key) && !shouldExcludeResultField(key, value))
                .map(([key, value]) => renderPrimitiveCard(getLabel(key), value, riesgoColor))}
            </Grid>

            <Divider />

            {orderedSections
              .filter(([key]) => key !== 'resumen')
              .map(([key, value]) => (
                <Box key={`section-${key}`}>{renderSection(getLabel(key), value, riesgoColor)}</Box>
              ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => setResultadoModelo(null)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}
