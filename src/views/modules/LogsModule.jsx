'use client'

import { useEffect, useMemo, useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import usePermissions from '@/hooks/usePermissions'
import { clearAuditLogs, getAuditLogs } from '@/lib/audit/logs'

const formatDate = value => {
  if (!value) return '-'
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return '-'

  return date.toLocaleDateString('en-US')
}

const formatTime = value => {
  if (!value) return '-'
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return '-'

  return date.toLocaleTimeString('en-US', {
    hour12: false
  })
}

const normalizeText = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

export default function LogsModule() {
  const { analista } = usePermissions()
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')
  const [rows, setRows] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const limit = 15

  useEffect(() => {
    const sync = () => {
      setRows(getAuditLogs())
    }

    sync()
    window.addEventListener('storage', sync)
    window.addEventListener('cf:audit-log-added', sync)

    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener('cf:audit-log-added', sync)
    }
  }, [])

  const filteredRows = useMemo(() => {
    const query = normalizeText(search)
    let output = [...rows]

    output.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    if (!query) return output

    return output.filter(item => {
      const searchable = [
        item?.analista_nombre,
        item?.analista_email,
        item?.action,
        item?.module,
        item?.detail,
        item?.source,
        item?.path,
        item?.method
      ]
        .map(normalizeText)
        .join(' ')

      return searchable.includes(query)
    })
  }, [rows, search])

  const totalPages = Math.max(Math.ceil(filteredRows.length / limit), 1)
  const safePage = Math.min(page, totalPages)
  const pagedRows = useMemo(() => {
    const start = (safePage - 1) * limit

    return filteredRows.slice(start, start + limit)
  }, [filteredRows, safePage])

  if (!isAdminProfile) {
    return <Alert severity='warning'>Solo el perfil administrador puede acceder a Logs.</Alert>
  }

  return (
    <Stack spacing={2.5}>
      <Typography variant='h4'>Logs</Typography>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' spacing={1.5}>
              <TextField
                size='small'
                label='Buscar log'
                placeholder='Analista, acción, módulo...'
                value={search}
                onChange={event => {
                  setSearch(event.target.value)
                  setPage(1)
                }}
                sx={{ minWidth: { xs: '100%', md: 360 } }}
              />
              <Button
                variant='tonal'
                color='error'
                onClick={() => {
                  if (!window.confirm('¿Seguro que deseas limpiar todos los logs de esta sesión de navegador?')) return
                  clearAuditLogs()
                }}
              >
                Limpiar logs
              </Button>
            </Stack>

            <Divider />

            <Table size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Hora</TableCell>
                  <TableCell>Analista</TableCell>
                  <TableCell>Módulo</TableCell>
                  <TableCell>Acción</TableCell>
                  <TableCell>Detalle</TableCell>
                  <TableCell>Origen</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pagedRows.map(item => (
                  <TableRow key={item.id} hover>
                    <TableCell>{formatDate(item.timestamp)}</TableCell>
                    <TableCell>{formatTime(item.timestamp)}</TableCell>
                    <TableCell>
                      <Stack>
                        <Typography>{item.analista_nombre || 'Analista'}</Typography>
                        {item.analista_email ? (
                          <Typography variant='caption' color='text.secondary'>
                            {item.analista_email}
                          </Typography>
                        ) : null}
                      </Stack>
                    </TableCell>
                    <TableCell>{item.module || '-'}</TableCell>
                    <TableCell>{item.action || '-'}</TableCell>
                    <TableCell>
                      <Typography variant='body2' color='text.secondary'>
                        {item.detail || item.path || '-'}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip size='small' variant='tonal' color='info' label={item.source || 'UI'} />
                    </TableCell>
                  </TableRow>
                ))}
                {!pagedRows.length ? (
                  <TableRow>
                    <TableCell colSpan={7} align='center'>
                      No hay registros de logs.
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>

            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography color='text.secondary'>Total: {filteredRows.length}</Typography>
              <Pagination page={safePage} count={totalPages} onChange={(_, value) => setPage(value)} size='small' />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}
