'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
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

import { inactivarCliente, listarClientes } from '@/api/clientes'

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

const extractTotal = payload =>
  Number(payload?.pagination?.total || payload?.data?.pagination?.total || extractRows(payload).length)

const countEstado = (rows, estado) => rows.filter(item => String(item?.estado || '').toUpperCase() === estado).length

const getEstadoColor = estado => {
  if (estado === 'ACTIVO') return 'success'
  if (estado === 'INACTIVO') return 'warning'

  return 'error'
}

export default function ClientesModule() {
  const router = useRouter()

  const [clientes, setClientes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [search, setSearch] = useState('')
  const [estado, setEstado] = useState('')
  const [tipoContacto, setTipoContacto] = useState('')
  const [orden, setOrden] = useState('reciente')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 })
  const [globalMetrics, setGlobalMetrics] = useState({ total: null, activos: null, inactivos: null, suspendidos: null })
  const [updatingId, setUpdatingId] = useState('')

  const loadGlobalMetrics = useCallback(async () => {
    try {
      const [allResponse, activosResponse, inactivosResponse, suspendidosResponse] = await Promise.all([
        listarClientes({ page: 1, limit: 1, search: '', estado: '' }),
        listarClientes({ page: 1, limit: 1, search: '', estado: 'ACTIVO' }),
        listarClientes({ page: 1, limit: 1, search: '', estado: 'INACTIVO' }),
        listarClientes({ page: 1, limit: 1, search: '', estado: 'SUSPENDIDO' })
      ])

      setGlobalMetrics({
        total: extractTotal(allResponse),
        activos: extractTotal(activosResponse),
        inactivos: extractTotal(inactivosResponse),
        suspendidos: extractTotal(suspendidosResponse)
      })
    } catch (_err) {
      // Keep page-based fallback metrics if summary calls fail.
    }
  }, [])

  const loadClientes = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const response = await listarClientes({ page, limit, search, estado })

      setClientes(extractRows(response))
      setPagination(extractPagination(response))
    } catch (err) {
      setError(err.message || 'No se pudo cargar clientes.')
    } finally {
      setLoading(false)
    }
  }, [page, limit, search, estado])

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadClientes()
    }, 250)

    return () => clearTimeout(timeout)
  }, [loadClientes])

  useEffect(() => {
    loadGlobalMetrics()
  }, [loadGlobalMetrics])

  useEffect(() => {
    setPage(1)
  }, [search, estado, limit])

  const rows = useMemo(() => clientes || [], [clientes])

  const tableRows = useMemo(() => {
    let output = [...rows]

    if (tipoContacto === 'CON_CONTACTO') {
      output = output.filter(item => item?.nombre_contacto || item?.telefono_contacto || item?.email_contacto)
    }

    if (tipoContacto === 'SIN_CONTACTO') {
      output = output.filter(item => !item?.nombre_contacto && !item?.telefono_contacto && !item?.email_contacto)
    }

    if (orden === 'nombre_asc') {
      output.sort((a, b) => String(a?.nombre || '').localeCompare(String(b?.nombre || ''), 'es'))
    }

    if (orden === 'nombre_desc') {
      output.sort((a, b) => String(b?.nombre || '').localeCompare(String(a?.nombre || ''), 'es'))
    }

    return output
  }, [orden, rows, tipoContacto])

  const metrics = useMemo(() => {
    const fallbackActivos = countEstado(rows, 'ACTIVO')
    const fallbackInactivos = countEstado(rows, 'INACTIVO')
    const fallbackSuspendidos = countEstado(rows, 'SUSPENDIDO')

    return {
      total: globalMetrics.total ?? pagination.total,
      activos: globalMetrics.activos ?? fallbackActivos,
      inactivos: globalMetrics.inactivos ?? fallbackInactivos,
      suspendidos: globalMetrics.suspendidos ?? fallbackSuspendidos
    }
  }, [globalMetrics, rows, pagination.total])

  const handleInactivar = async clienteId => {
    const confirmed = window.confirm('¿Deseas marcar este cliente como INACTIVO?')

    if (!confirmed) return

    setUpdatingId(clienteId)
    setError('')
    setSuccess('')

    try {
      await inactivarCliente(clienteId)
      setSuccess('Cliente marcado como INACTIVO.')
      await loadClientes()
      await loadGlobalMetrics()
    } catch (err) {
      setError(err.message || 'No se pudo inactivar el cliente.')
    } finally {
      setUpdatingId('')
    }
  }

  const handleExportCsv = () => {
    const headers = ['Nombre', 'Apellido', 'Email', 'Telefono', 'Estado']

    const lines = tableRows.map(item =>
      [item?.nombre || '', item?.apellido || '', item?.email || '', item?.telefono || '', item?.estado || '']
        .map(value => `"${String(value).replaceAll('"', '""')}"`)
        .join(',')
    )

    const csv = [headers.join(','), ...lines].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')

    anchor.href = url
    anchor.download = 'clientes.csv'
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
                    Clientes
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
                  <i className='tabler-users text-2xl' />
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
                  <i className='tabler-user-check text-2xl' />
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
                    {metrics.inactivos}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Inactivos
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
                  <i className='tabler-user-off text-2xl' />
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
                    {metrics.suspendidos}
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    Suspendidos
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
                  <i className='tabler-user-x text-2xl' />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack spacing={2}>
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
                  label='Show'
                  value={String(limit)}
                  onChange={event => setLimit(Number(event.target.value))}
                  sx={{ minWidth: 100 }}
                >
                  <MenuItem value='10'>10</MenuItem>
                  <MenuItem value='20'>20</MenuItem>
                  <MenuItem value='50'>50</MenuItem>
                </TextField>

                <Button variant='tonal' color='secondary' onClick={handleExportCsv}>
                  Export
                </Button>
                <Button variant='contained' component={Link} href='/clientes/nuevo'>
                  + Nuevo cliente
                </Button>
              </Stack>

              <Stack direction='row' spacing={1.5}>
                <TextField
                  label='Search Cliente'
                  placeholder='Nombre, teléfono o email'
                  size='small'
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  sx={{ minWidth: { xs: '100%', md: 300 } }}
                />
                <TextField
                  select
                  size='small'
                  label='Estado'
                  value={estado}
                  onChange={event => setEstado(event.target.value)}
                  sx={{ minWidth: 170 }}
                >
                  <MenuItem value=''>Todos</MenuItem>
                  <MenuItem value='ACTIVO'>ACTIVO</MenuItem>
                  <MenuItem value='INACTIVO'>INACTIVO</MenuItem>
                  <MenuItem value='SUSPENDIDO'>SUSPENDIDO</MenuItem>
                </TextField>
              </Stack>
            </Stack>
            <Divider />

            {error ? <Alert severity='error'>{error}</Alert> : null}
            {success ? <Alert severity='success'>{success}</Alert> : null}

            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell padding='checkbox'>
                    <Checkbox size='small' />
                  </TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>CLIENT</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Teléfono</TableCell>
                  <TableCell>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} align='center'>
                      Cargando...
                    </TableCell>
                  </TableRow>
                ) : null}

                {!loading
                  ? tableRows.map(row => (
                      <TableRow
                        key={row.id}
                        hover
                        onDoubleClick={() => router.push(`/clientes/${row.id}/detalle`)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox size='small' />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={row.estado || '-'}
                            size='small'
                            color={getEstadoColor(row.estado)}
                            variant='tonal'
                          />
                        </TableCell>
                        <TableCell>{[row.nombre, row.apellido].filter(Boolean).join(' ') || '-'}</TableCell>
                        <TableCell>{row.email || '-'}</TableCell>
                        <TableCell>{row.telefono || '-'}</TableCell>
                        <TableCell>
                          <Stack direction='row' spacing={0.25} flexWrap='wrap'>
                            <Tooltip title='Ver detalle'>
                              <IconButton size='small' onClick={() => router.push(`/clientes/${row.id}/detalle`)}>
                                <i className='tabler-eye text-3xl' />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title='Editar'>
                              <IconButton size='small' onClick={() => router.push(`/clientes/${row.id}/editar`)}>
                                <i className='tabler-edit text-3xl' />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title='Inactivar'>
                              <span>
                                <IconButton
                                  size='small'
                                  color='warning'
                                  disabled={row.estado === 'INACTIVO' || updatingId === row.id}
                                  onClick={() => handleInactivar(row.id)}
                                >
                                  <i className='tabler-user-off text-3xl' />
                                </IconButton>
                              </span>
                            </Tooltip>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))
                  : null}

                {!loading && tableRows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align='center'>
                      Sin resultados
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>

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
    </Stack>
  )
}
