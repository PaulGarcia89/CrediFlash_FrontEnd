'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Alert from '@mui/material/Alert'
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

import { cargarPagosBancariosArchivo, listarPagosBancarios, obtenerDetalleLotePagos } from '@/api/reportes'
import usePermissions from '@/hooks/usePermissions'
import { formatUSD } from '@/utils/currency'
import { formatDateMMDDYYYY } from '@/utils/date'

const ALLOWED_FILE_EXTENSIONS = ['.xlsx', '.xls', '.csv']
const ESTADOS_OPTIONS = ['', 'VALIDO', 'INVALIDO', 'DUPLICADO', 'PROCESADO']

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

export default function ReportesModule() {
  const { analista, can } = usePermissions()
  const [subMenu, setSubMenu] = useState('resumen')
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [rows, setRows] = useState([])
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
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')
  const canViewReportes = can('reportes.view') || isAdminProfile
  const canManageReportes = can('reportes.manage') || isAdminProfile

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
  }, [canViewReportes, filters.estado, filters.fecha_desde, filters.fecha_hasta, filters.lote_id, filters.search, page, pagination.limit])

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

  if (!canViewReportes) {
    return <Alert severity='warning'>No tienes permisos para visualizar Reportes.</Alert>
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Reportes</Typography>
      <Card>
        <CardContent>
          <Tabs value={subMenu} onChange={(_, value) => setSubMenu(value)} variant='scrollable' scrollButtons='auto'>
            <Tab value='resumen' label='Resumen' />
            <Tab value='carga-pagos-bancarios' label='Carga de pagos bancarios' />
          </Tabs>
          <Divider sx={{ mt: 1.5 }} />

          {subMenu === 'resumen' ? (
            <Stack spacing={2} sx={{ pt: 2 }}>
              <Typography color='text.secondary'>Resumen de cargas recientes de pagos bancarios.</Typography>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                <Chip color='default' variant='tonal' label={`Filas visibles: ${summary.total}`} />
                <Chip color='success' variant='tonal' label={`Válidas: ${summary.validas}`} />
                <Chip color='error' variant='tonal' label={`Inválidas: ${summary.invalidas}`} />
                <Chip color='warning' variant='tonal' label={`Duplicadas: ${summary.duplicadas}`} />
                <Chip color='info' variant='tonal' label={`Procesadas: ${summary.procesadas}`} />
              </Stack>
            </Stack>
          ) : null}

          {subMenu === 'carga-pagos-bancarios' ? (
            <Stack spacing={1.5} sx={{ pt: 2 }}>
              <Typography variant='h6'>Carga de pagos bancarios</Typography>
              <Typography color='text.secondary'>
                Carga un archivo y consulta los registros guardados por lote.
              </Typography>

              {error ? <Alert severity='error'>{error}</Alert> : null}
              {success ? <Alert severity='success'>{success}</Alert> : null}

              {canManageReportes ? (
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ xs: 'stretch', md: 'center' }}>
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
                          <Chip size='small' variant='tonal' color={getEstadoColor(row.estado)} label={row.estado || '-'} />
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

      <Dialog open={loteDialog.open} onClose={() => setLoteDialog(previous => ({ ...previous, open: false }))} fullWidth maxWidth='lg'>
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
                        <Chip size='small' variant='tonal' color={getEstadoColor(item.estado)} label={item.estado || '-'} />
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
