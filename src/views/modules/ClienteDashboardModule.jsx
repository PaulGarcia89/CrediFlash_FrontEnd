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
import { formatUSD } from '@/utils/currency'

const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows

  return []
}

const formatCurrency = value => formatUSD(value)

const formatDate = value => {
  if (!value) return '-'
  const asDate = new Date(value)

  if (Number.isNaN(asDate.getTime())) return String(value).slice(0, 10)

  return asDate.toLocaleDateString('es-DO')
}

export default function ClienteDashboardModule({ clienteId }) {
  const router = useRouter()
  const [tab, setTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cliente, setCliente] = useState(null)
  const [prestamos, setPrestamos] = useState([])

  const loadData = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const [clienteResponse, prestamosResponse] = await Promise.all([
        obtenerCliente(clienteId),
        verHistorialPrestamosCliente(clienteId, { page: 1, limit: 100 })
      ])

      setCliente(clienteResponse?.data || clienteResponse || null)
      setPrestamos(extractRows(prestamosResponse))
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
    () => prestamos.filter(item => String(item?.status || '').toUpperCase() === 'ACTIVO'),
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
                    color={prestamoPrincipal?.status === 'ACTIVO' ? 'success' : 'warning'}
                    label={prestamoPrincipal?.status || 'Sin préstamo'}
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
                  <Typography>Pagado: {formatCurrency(prestamoPrincipal?.pagos_hechos)}</Typography>
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
                  <Typography variant='h6' color={item.status === 'ACTIVO' ? 'primary.main' : 'success.main'}>
                    {item.status === 'ACTIVO' ? formatCurrency(item.pendiente || item.pagos_pendientes) : 'Completado'}
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
              <Typography color='text.secondary'>
                La gestión de documentos por cliente se habilitará en una próxima iteración.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      ) : null}

      <Divider />
      <Typography color='text.secondary' textAlign='center'>
        Crediflash - Dashboard del cliente
      </Typography>
    </Stack>
  )
}
