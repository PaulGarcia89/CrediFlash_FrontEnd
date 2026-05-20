'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import {
  cargarPagosBancariosArchivo,
  generarReporte,
  listarPagosBancarios,
  obtenerDetalleLotePagos
} from '@/api/reportes'
import usePermissions from '@/hooks/usePermissions'
import { formatUSD } from '@/utils/currency'
import { formatDateMMDDYYYY } from '@/utils/date'

const ALLOWED_FILE_EXTENSIONS = ['.xlsx', '.xls', '.csv']
const ESTADOS_OPTIONS = ['', 'VALIDO', 'INVALIDO', 'DUPLICADO', 'PROCESADO']
const REPORT_OPTIONS = [
  { value: 'pipeline-comercial', label: 'Pipeline comercial' },
  { value: 'cartera-activa', label: 'Cartera activa' },
  { value: 'ganancias-esperadas-cobradas', label: 'Ganancias esperadas vs cobradas' },
  { value: 'saldo-pendiente-cliente', label: 'Saldo pendiente por cliente' },
  { value: 'moras-historial-pagos', label: 'Pagos en mora en historial' },
  { value: 'ano-contra-ano', label: 'Reporte año contra año' },
  { value: 'metas', label: 'Reporte de metas' },
  { value: 'top-moras-diarias', label: 'Top moras diarias' },
  { value: 'productividad-analistas', label: 'Productividad de analistas' },
  { value: 'notificaciones-envios', label: 'Notificaciones enviadas' },
  { value: 'referidos-impacto', label: 'Impacto de referidos' }
]
const REPORT_ESTADO_OPTIONS = ['TODOS', 'EN_PROCESO', 'EN_MARCHA', 'PAGADO', 'MOROSO', 'RECHAZADO', 'APROBADO']
const REPORT_MODALIDAD_OPTIONS = ['TODAS', 'SEMANAL', 'QUINCENAL', 'MENSUAL']

const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows

  return []
}

const extractPagination = payload => {
  const pagination = payload?.pagination || payload?.data?.pagination || {}

  return {
    page: Number(pagination?.page || 1),
    pages: Number(pagination?.pages || 1),
    total: Number(pagination?.total || 0),
    limit: Number(pagination?.limit || 20)
  }
}

const getEstadoColor = estado => {
  const normalized = String(estado || '')
    .trim()
    .toUpperCase()

  if (normalized === 'VALIDO') return 'success'
  if (normalized === 'PROCESADO') return 'info'
  if (normalized === 'DUPLICADO') return 'warning'
  if (normalized === 'INVALIDO') return 'error'

  return 'default'
}

const toMMDDYYYY = inputValue => {
  return formatDateMMDDYYYY(inputValue)
}

export default function ReportesModule({ initialSubMenu = 'resumen', hideTabs = false, pageTitle = 'Reportes' }) {
  const searchParams = useSearchParams()
  const { analista, can } = usePermissions()
  const [subMenu, setSubMenu] = useState(initialSubMenu)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [rows, setRows] = useState([])
  const [reportFilters, setReportFilters] = useState({
    tipo: REPORT_OPTIONS[0].value,
    fecha_inicio: '',
    fecha_fin: '',
    top: '10',
    search: '',
    estado: 'TODOS',
    modalidad: 'TODAS'
  })
  const [reportResult, setReportResult] = useState({
    generated: false,
    title: '',
    columns: [],
    rows: [],
    resumen: null,
    note: '',
    pagination: null
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [filters, setFilters] = useState({
    search: '',
    estado: '',
    fecha_desde: '',
    fecha_hasta: '',
    lote_id: ''
  })
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0, limit: 20 })
  const [loteDialog, setLoteDialog] = useState({
    open: false,
    loading: false,
    loteId: '',
    rows: [],
    resumen: null,
    error: ''
  })
  const inputRef = useRef(null)
  const isAdminProfile = String(analista?.rol || analista?.role || '')
    .toUpperCase()
    .includes('ADMIN')
  const canViewReportes = can('reportes.view') || isAdminProfile
  const canManageReportes = can('reportes.manage') || isAdminProfile

  useEffect(() => {
    if (hideTabs) return

    const tab = String(searchParams.get('tab') || '')

    if (tab === 'carga-pagos' || tab === 'carga-pagos-bancarios') {
      setSubMenu('carga-pagos-bancarios')

      return
    }

    if (tab === 'resumen') {
      setSubMenu('resumen')
    }
  }, [searchParams, hideTabs])

  const loadPagosBancarios = useCallback(async () => {
    if (!canViewReportes) return
    setLoading(true)
    setError('')

    try {
      const response = await listarPagosBancarios({
        page,
        limit: pagination.limit,
        search: filters.search,
        estado: filters.estado,
        fecha_desde: filters.fecha_desde,
        fecha_hasta: filters.fecha_hasta,
        lote_id: filters.lote_id
      })

      setRows(extractRows(response))
      setPagination(previous => {
        const next = extractPagination(response)

        return {
          ...previous,
          ...next
        }
      })
    } catch (err) {
      setRows([])
      setError(err.message || 'No se pudieron cargar pagos bancarios.')
    } finally {
      setLoading(false)
    }
  }, [
    canViewReportes,
    filters.estado,
    filters.fecha_desde,
    filters.fecha_hasta,
    filters.lote_id,
    filters.search,
    page,
    pagination.limit
  ])

  useEffect(() => {
    loadPagosBancarios()
  }, [loadPagosBancarios])

  const onPickFile = () => {
    setError('')
    setSuccess('')
    if (inputRef.current) inputRef.current.click()
  }

  const onFileChange = event => {
    const file = event.target.files?.[0]

    if (!file) return

    const lowerName = String(file.name || '').toLowerCase()
    const isAllowed = ALLOWED_FILE_EXTENSIONS.some(ext => lowerName.endsWith(ext))

    if (!isAllowed) {
      setSelectedFile(null)
      setError('Formato inválido. Solo se permiten archivos .xlsx, .xls o .csv.')
      if (event.target) event.target.value = ''

      return
    }

    setSelectedFile(file)
    setError('')
  }

  const submitFile = async () => {
    if (!canManageReportes) {
      setError('No tienes permisos para realizar esta acción.')

      return
    }

    if (!selectedFile) {
      setError('Selecciona un archivo antes de cargar.')
      setSuccess('')

      return
    }

    setUploading(true)
    setError('')
    setSuccess('')

    try {
      const response = await cargarPagosBancariosArchivo(selectedFile)
      const message = response?.message || 'Archivo procesado correctamente.'
      const loteId = response?.data?.lote_id || ''

      setSuccess(message)
      setSelectedFile(null)
      if (inputRef.current) inputRef.current.value = ''
      if (loteId) {
        setFilters(previous => ({ ...previous, lote_id: loteId }))
        setPage(1)
        setLoteDialog({
          open: true,
          loading: true,
          loteId,
          rows: [],
          resumen: null,
          error: ''
        })
      }
      await loadPagosBancarios()
      if (loteId) {
        try {
          const loteResponse = await obtenerDetalleLotePagos(loteId)
          const loteRows = extractRows(loteResponse)
          const loteResumen = loteResponse?.resumen || loteResponse?.data?.resumen || null

          setLoteDialog({
            open: true,
            loading: false,
            loteId,
            rows: loteRows,
            resumen: loteResumen,
            error: ''
          })
        } catch (loteErr) {
          setLoteDialog(previous => ({
            ...previous,
            loading: false,
            error: loteErr.message || 'No se pudo cargar el detalle del lote.'
          }))
        }
      }
    } catch (err) {
      setError(err.message || 'No se pudo cargar el archivo.')
    } finally {
      setUploading(false)
    }
  }

  const openLoteDetail = async loteId => {
    if (!loteId) return
    setLoteDialog({
      open: true,
      loading: true,
      loteId: String(loteId),
      rows: [],
      resumen: null,
      error: ''
    })

    try {
      const response = await obtenerDetalleLotePagos(loteId)
      const loteRows = extractRows(response)
      const loteResumen = response?.resumen || response?.data?.resumen || null

      setLoteDialog({
        open: true,
        loading: false,
        loteId: String(loteId),
        rows: loteRows,
        resumen: loteResumen,
        error: ''
      })
    } catch (err) {
      setLoteDialog(previous => ({
        ...previous,
        loading: false,
        error: err.message || 'No se pudo cargar el detalle del lote.'
      }))
    }
  }

  const summary = useMemo(() => {
    const totals = {
      total: rows.length,
      validas: 0,
      invalidas: 0,
      duplicadas: 0,
      procesadas: 0
    }

    rows.forEach(row => {
      const estado = String(row?.estado || '').toUpperCase()

      if (estado === 'VALIDO') totals.validas += 1
      if (estado === 'INVALIDO') totals.invalidas += 1
      if (estado === 'DUPLICADO') totals.duplicadas += 1
      if (estado === 'PROCESADO') totals.procesadas += 1
    })

    return totals
  }, [rows])

  const generateReport = async () => {
    setError('')
    setSuccess('')

    if (!reportFilters.tipo) {
      setError('Selecciona un tipo de reporte.')

      return
    }

    if (!reportFilters.fecha_inicio || !reportFilters.fecha_fin) {
      setError('Selecciona fecha de inicio y fecha de fin para generar el reporte.')

      return
    }

    const selectedLabel = REPORT_OPTIONS.find(item => item.value === reportFilters.tipo)?.label || 'Reporte'

    setLoading(true)

    try {
      const response = await generarReporte({
        tipo: reportFilters.tipo,
        fecha_inicio: toMMDDYYYY(reportFilters.fecha_inicio),
        fecha_fin: toMMDDYYYY(reportFilters.fecha_fin),
        top: Number(reportFilters.top || 10),
        search: reportFilters.search,
        estado: reportFilters.estado === 'TODOS' ? '' : reportFilters.estado,
        modalidad: reportFilters.modalidad === 'TODAS' ? '' : reportFilters.modalidad
      })

      const source = response?.data || response || {}
      const reportRows = Array.isArray(source?.rows) ? source.rows : []
      const fallbackColumns = reportRows.length
        ? Object.keys(reportRows[0]).map(key => ({
            id: key,
            label: String(key)
              .replace(/_/g, ' ')
              .replace(/\b\w/g, char => char.toUpperCase())
          }))
        : []

      setReportResult({
        generated: true,
        title: selectedLabel,
        columns: Array.isArray(source?.columns) ? source.columns : fallbackColumns,
        rows: reportRows,
        resumen: source?.resumen || null,
        pagination: source?.pagination || null,
        note: String(source?.note || source?.mensaje || '')
      })
      setSuccess(response?.message || 'Reporte generado correctamente.')
    } catch (err) {
      setError(err.message || 'No se pudo generar el reporte.')
    } finally {
      setLoading(false)
    }
  }

  if (!canViewReportes) {
    return <Alert severity='warning'>No tienes permisos para visualizar Reportes.</Alert>
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>{pageTitle}</Typography>
      <Card>
        <CardContent>
          {!hideTabs ? (
            <>
              <Tabs
                value={subMenu}
                onChange={(_, value) => setSubMenu(value)}
                variant='scrollable'
                scrollButtons='auto'
              >
                <Tab value='resumen' label='Resumen' />
                <Tab value='carga-pagos-bancarios' label='Carga de pagos bancarios' />
              </Tabs>
              <Divider sx={{ mt: 1.5 }} />
            </>
          ) : null}

          {subMenu === 'resumen' ? (
            <Stack spacing={2} sx={{ pt: 2 }}>
              <Accordion>
                <AccordionSummary expandIcon={<i className='tabler-chevron-down' />}>
                  <Typography variant='h6'>Generador de reportes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={1.5}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                      <TextField
                        select
                        label='Tipo de reporte'
                        size='small'
                        value={reportFilters.tipo}
                        onChange={event => setReportFilters(previous => ({ ...previous, tipo: event.target.value }))}
                        sx={{ minWidth: { xs: '100%', md: 360 } }}
                      >
                        {REPORT_OPTIONS.map(item => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        size='small'
                        type='date'
                        label='Fecha inicio'
                        value={reportFilters.fecha_inicio}
                        onChange={event =>
                          setReportFilters(previous => ({ ...previous, fecha_inicio: event.target.value }))
                        }
                        InputLabelProps={{ shrink: true }}
                      />
                      <TextField
                        size='small'
                        type='date'
                        label='Fecha fin'
                        value={reportFilters.fecha_fin}
                        onChange={event =>
                          setReportFilters(previous => ({ ...previous, fecha_fin: event.target.value }))
                        }
                        InputLabelProps={{ shrink: true }}
                      />
                      <TextField
                        size='small'
                        type='number'
                        label='Top'
                        value={reportFilters.top}
                        onChange={event => setReportFilters(previous => ({ ...previous, top: event.target.value }))}
                        inputProps={{ min: 1, max: 100 }}
                        sx={{ maxWidth: { xs: '100%', md: 110 } }}
                      />
                    </Stack>

                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                      <TextField
                        size='small'
                        label='Buscar'
                        value={reportFilters.search}
                        onChange={event => setReportFilters(previous => ({ ...previous, search: event.target.value }))}
                        sx={{ minWidth: { xs: '100%', md: 260 } }}
                      />
                      <TextField
                        select
                        size='small'
                        label='Estado'
                        value={reportFilters.estado}
                        onChange={event => setReportFilters(previous => ({ ...previous, estado: event.target.value }))}
                        sx={{ minWidth: { xs: '100%', md: 220 } }}
                      >
                        {REPORT_ESTADO_OPTIONS.map(option => (
                          <MenuItem key={option} value={option}>
                            {option === 'TODOS' ? 'Todos' : option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        select
                        size='small'
                        label='Modalidad'
                        value={reportFilters.modalidad}
                        onChange={event =>
                          setReportFilters(previous => ({ ...previous, modalidad: event.target.value }))
                        }
                        sx={{ minWidth: { xs: '100%', md: 220 } }}
                      >
                        {REPORT_MODALIDAD_OPTIONS.map(option => (
                          <MenuItem key={option} value={option}>
                            {option === 'TODAS' ? 'Todas' : option}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Button variant='contained' onClick={generateReport}>
                        Generar reporte
                      </Button>
                    </Stack>

                    {reportResult.generated ? (
                      <Card variant='outlined'>
                        <CardContent>
                          <Stack spacing={1.5}>
                            <Typography variant='h6'>{reportResult.title}</Typography>
                            <Typography color='text.secondary'>
                              Rango: {formatDateMMDDYYYY(reportFilters.fecha_inicio)} -{' '}
                              {formatDateMMDDYYYY(reportFilters.fecha_fin)}
                            </Typography>
                            {reportResult.note ? <Alert severity='info'>{reportResult.note}</Alert> : null}
                            {reportResult.resumen && typeof reportResult.resumen === 'object' ? (
                              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} useFlexGap flexWrap='wrap'>
                                {Object.entries(reportResult.resumen).map(([key, rawValue]) => {
                                  const keyLabel = String(key)
                                    .replace(/_/g, ' ')
                                    .replace(/\b\w/g, char => char.toUpperCase())
                                  const valueNumber = Number(rawValue)
                                  const isMoney =
                                    key.includes('monto') ||
                                    key.includes('saldo') ||
                                    key.includes('ganancia') ||
                                    key.includes('cobrad')
                                  const displayValue =
                                    isMoney && Number.isFinite(valueNumber)
                                      ? formatUSD(valueNumber)
                                      : String(rawValue ?? '-')

                                  return <Chip key={key} variant='tonal' label={`${keyLabel}: ${displayValue}`} />
                                })}
                              </Stack>
                            ) : null}
                            {reportFilters.tipo === 'top-moras-diarias' ? (
                              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
                                <Chip
                                  variant='tonal'
                                  color='warning'
                                  label={`Clientes en mora hoy: ${Number(reportResult?.resumen?.total_clientes_en_mora || 0)}`}
                                />
                                <Chip
                                  variant='tonal'
                                  color='warning'
                                  label={`Cuotas en mora hoy: ${Number(reportResult?.resumen?.total_cuotas_en_mora || 0)}`}
                                />
                                <Chip
                                  variant='tonal'
                                  color='error'
                                  label={`Monto total en mora hoy: ${formatUSD(Number(reportResult?.resumen?.monto_total_en_mora || 0))}`}
                                />
                              </Stack>
                            ) : null}

                            {reportResult.columns.length ? (
                              <TableContainer>
                                <Table size='small'>
                                  <TableHead>
                                    <TableRow>
                                      {reportResult.columns.map(column => (
                                        <TableCell key={column.id}>{column.label}</TableCell>
                                      ))}
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {reportResult.rows.map((row, index) => (
                                      <TableRow key={`${index}-${row?.id || row?.nombre || 'item'}`}>
                                        {reportResult.columns.map(column => {
                                          const value = row?.[column.id]

                                          if (
                                            column.id.includes('monto') ||
                                            column.id === 'saldo' ||
                                            column.id === 'monto_mora_hoy' ||
                                            column.id === 'monto_total_en_mora'
                                          ) {
                                            return (
                                              <TableCell key={column.id}>{formatUSD(Number(value || 0))}</TableCell>
                                            )
                                          }

                                          if (column.id.includes('fecha')) {
                                            return <TableCell key={column.id}>{formatDateMMDDYYYY(value)}</TableCell>
                                          }

                                          return <TableCell key={column.id}>{value ?? '-'}</TableCell>
                                        })}
                                      </TableRow>
                                    ))}
                                    {!reportResult.rows.length ? (
                                      <TableRow>
                                        <TableCell colSpan={reportResult.columns.length} align='center'>
                                          {reportFilters.tipo === 'top-moras-diarias'
                                            ? 'No hay clientes en mora hoy.'
                                            : 'Sin datos para este reporte en el rango seleccionado.'}
                                        </TableCell>
                                      </TableRow>
                                    ) : null}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            ) : null}
                            {reportResult.pagination ? (
                              <Typography variant='body2' color='text.secondary'>
                                Página: {reportResult.pagination?.page || 1} de {reportResult.pagination?.pages || 1} |
                                Total: {reportResult.pagination?.total || reportResult.rows.length || 0}
                              </Typography>
                            ) : null}
                          </Stack>
                        </CardContent>
                      </Card>
                    ) : null}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Stack>
          ) : null}

          {subMenu === 'carga-pagos-bancarios' ? (
            <Stack spacing={1.5} sx={{ pt: 2 }}>
              <Typography variant='h6'>Carga de pagos bancarios</Typography>
              <Typography color='text.secondary'>
                Carga un archivo y consulta los registros guardados por lote.
              </Typography>
              <Typography color='text.secondary'>Resumen de cargas recientes de pagos bancarios.</Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                <Chip color='default' variant='tonal' label={`Filas visibles: ${summary.total}`} />
                <Chip color='success' variant='tonal' label={`Válidas: ${summary.validas}`} />
                <Chip color='error' variant='tonal' label={`Inválidas: ${summary.invalidas}`} />
                <Chip color='warning' variant='tonal' label={`Duplicadas: ${summary.duplicadas}`} />
                <Chip color='info' variant='tonal' label={`Procesadas: ${summary.procesadas}`} />
              </Stack>

              {error ? <Alert severity='error'>{error}</Alert> : null}
              {success ? <Alert severity='success'>{success}</Alert> : null}

              {canManageReportes ? (
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={1.5}
                  alignItems={{ xs: 'stretch', md: 'center' }}
                >
                  <Button variant='contained' onClick={onPickFile} disabled={uploading}>
                    Seleccionar archivo
                  </Button>
                  <Button variant='tonal' color='primary' onClick={submitFile} disabled={uploading || !selectedFile}>
                    {uploading ? 'Cargando...' : 'Cargar archivo'}
                  </Button>
                  <Typography color='text.secondary' variant='body2'>
                    {selectedFile?.name || 'No hay archivo seleccionado'}
                  </Typography>
                </Stack>
              ) : (
                <Alert severity='info'>No tienes permisos de carga. Puedes visualizar, pero no cargar archivos.</Alert>
              )}

              <input
                ref={inputRef}
                type='file'
                accept='.xlsx,.xls,.csv'
                hidden
                onChange={onFileChange}
                aria-label='Cargar archivo Excel de pagos'
              />

              {uploading || loading ? <LinearProgress /> : null}

              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                <TextField
                  label='Buscar por nombre'
                  size='small'
                  value={filters.search}
                  onChange={event => setFilters(previous => ({ ...previous, search: event.target.value }))}
                  sx={{ minWidth: { xs: '100%', md: 260 } }}
                />
                <TextField
                  select
                  size='small'
                  label='Estado'
                  value={filters.estado}
                  onChange={event => setFilters(previous => ({ ...previous, estado: event.target.value }))}
                  sx={{ minWidth: { xs: '100%', md: 180 } }}
                >
                  <MenuItem value=''>Todos</MenuItem>
                  {ESTADOS_OPTIONS.filter(Boolean).map(option => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  size='small'
                  type='date'
                  label='Fecha desde'
                  value={filters.fecha_desde}
                  onChange={event => setFilters(previous => ({ ...previous, fecha_desde: event.target.value }))}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  size='small'
                  type='date'
                  label='Fecha hasta'
                  value={filters.fecha_hasta}
                  onChange={event => setFilters(previous => ({ ...previous, fecha_hasta: event.target.value }))}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  size='small'
                  label='Lote ID'
                  value={filters.lote_id}
                  onChange={event => setFilters(previous => ({ ...previous, lote_id: event.target.value }))}
                  sx={{ minWidth: { xs: '100%', md: 220 } }}
                />
                <Button
                  variant='contained'
                  onClick={() => {
                    setPage(1)
                    loadPagosBancarios()
                  }}
                >
                  Filtrar
                </Button>
                <Button
                  variant='tonal'
                  color='secondary'
                  onClick={() => {
                    setFilters({
                      search: '',
                      estado: '',
                      fecha_desde: '',
                      fecha_hasta: '',
                      lote_id: ''
                    })
                    setPage(1)
                  }}
                >
                  Limpiar filtros
                </Button>
              </Stack>

              <TableContainer sx={{ border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre completo</TableCell>
                      <TableCell align='right'>Monto</TableCell>
                      <TableCell>Fecha pago</TableCell>
                      <TableCell>Estado</TableCell>
                      <TableCell>Observación</TableCell>
                      <TableCell>Archivo origen</TableCell>
                      <TableCell>Fila</TableCell>
                      <TableCell>Lote</TableCell>
                      <TableCell>Fecha carga</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id} hover>
                        <TableCell>{row.nombre_completo || '-'}</TableCell>
                        <TableCell align='right'>{formatUSD(Number(row.monto || 0))}</TableCell>
                        <TableCell>{formatDateMMDDYYYY(row.fecha_pago)}</TableCell>
                        <TableCell>
                          <Chip
                            size='small'
                            variant='tonal'
                            color={getEstadoColor(row.estado)}
                            label={row.estado || '-'}
                          />
                        </TableCell>
                        <TableCell>{row.observacion || '-'}</TableCell>
                        <TableCell>{row.archivo_nombre || '-'}</TableCell>
                        <TableCell>{row.fila_origen ?? '-'}</TableCell>
                        <TableCell>
                          {row.lote_id ? (
                            <Button size='small' variant='text' onClick={() => openLoteDetail(row.lote_id)}>
                              {String(row.lote_id).slice(0, 8)}...
                            </Button>
                          ) : (
                            '-'
                          )}
                        </TableCell>
                        <TableCell>{formatDateMMDDYYYY(row.creado_en)}</TableCell>
                      </TableRow>
                    ))}
                    {!rows.length ? (
                      <TableRow>
                        <TableCell colSpan={9} align='center'>
                          Sin registros para mostrar.
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography color='text.secondary'>Total: {pagination.total}</Typography>
                <Pagination
                  size='small'
                  color='primary'
                  page={pagination.page}
                  count={Math.max(pagination.pages, 1)}
                  onChange={(_, value) => setPage(value)}
                />
              </Box>
            </Stack>
          ) : null}
        </CardContent>
      </Card>

      <Dialog
        open={loteDialog.open}
        onClose={() => setLoteDialog(previous => ({ ...previous, open: false }))}
        fullWidth
        maxWidth='lg'
      >
        <DialogTitle>Detalle de lote: {loteDialog.loteId || '-'}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1.5}>
            {loteDialog.loading ? <LinearProgress /> : null}
            {loteDialog.error ? <Alert severity='error'>{loteDialog.error}</Alert> : null}

            {loteDialog.resumen ? (
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
                <Chip variant='tonal' label={`Total: ${loteDialog.resumen.total ?? 0}`} />
                <Chip variant='tonal' color='success' label={`Válidas: ${loteDialog.resumen.validas ?? 0}`} />
                <Chip variant='tonal' color='error' label={`Inválidas: ${loteDialog.resumen.invalidas ?? 0}`} />
                <Chip variant='tonal' color='warning' label={`Duplicadas: ${loteDialog.resumen.duplicadas ?? 0}`} />
                <Chip variant='tonal' color='info' label={`Procesadas: ${loteDialog.resumen.procesadas ?? 0}`} />
              </Stack>
            ) : null}

            <TableContainer sx={{ border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 1 }}>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre completo</TableCell>
                    <TableCell align='right'>Monto</TableCell>
                    <TableCell>Fecha pago</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Observación</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loteDialog.rows.map(item => (
                    <TableRow key={item.id} hover>
                      <TableCell>{item.nombre_completo || '-'}</TableCell>
                      <TableCell align='right'>{formatUSD(Number(item.monto || 0))}</TableCell>
                      <TableCell>{formatDateMMDDYYYY(item.fecha_pago)}</TableCell>
                      <TableCell>
                        <Chip
                          size='small'
                          variant='tonal'
                          color={getEstadoColor(item.estado)}
                          label={item.estado || '-'}
                        />
                      </TableCell>
                      <TableCell>{item.observacion || '-'}</TableCell>
                    </TableRow>
                  ))}
                  {!loteDialog.rows.length && !loteDialog.loading ? (
                    <TableRow>
                      <TableCell colSpan={5} align='center'>
                        Sin filas en este lote.
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoteDialog(previous => ({ ...previous, open: false }))}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}
