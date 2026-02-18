'use client'

import { useCallback, useEffect, useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { obtenerAnalyticsDashboard } from '@/api/analytics'
import CustomAvatar from '@core/components/mui/Avatar'
import { formatUSD } from '@/utils/currency'

const formatNumber = value => new Intl.NumberFormat('es-DO').format(Number(value || 0))

const formatPercent = value => `${Number(value || 0).toFixed(1)}%`

const StatItem = ({ icon, color, label, value }) => (
  <Stack direction='row' spacing={1.5} alignItems='center'>
    <CustomAvatar skin='light' color={color} size={46}>
      <i className={`${icon} text-xl`} />
    </CustomAvatar>
    <Box>
      <Typography variant='h6' lineHeight={1.2}>
        {value}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {label}
      </Typography>
    </Box>
  </Stack>
)

export default function AnalyticsModule() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [analytics, setAnalytics] = useState(null)
  const [filtros, setFiltros] = useState({ fecha_desde: '', fecha_hasta: '' })

  const fetchAnalytics = useCallback(
    async customFiltros => {
      setLoading(true)
      setError('')

      try {
        const response = await obtenerAnalyticsDashboard(customFiltros || filtros)

        setAnalytics(response)
      } catch (err) {
        setError(err.message || 'No se pudo cargar analytics.')
      } finally {
        setLoading(false)
      }
    },
    [filtros]
  )

  useEffect(() => {
    fetchAnalytics({})
  }, [fetchAnalytics])

  const kpis = analytics?.kpis || {}
  const topClientes = analytics?.topClientes || []
  const series = analytics?.series?.prestamosPorMes || []

  const tasaAprobacion = Number(kpis?.tasaAprobacion?.porcentaje || 0)
  const porcentajeMora = Number(kpis?.morosidad?.porcentaje_cuotas_vencidas || 0)

  const cuotasResumen = {
    pagadas: kpis?.cuotas?.pagadas || 0,
    pendientes: kpis?.cuotas?.pendientes || 0,
    parciales: kpis?.cuotas?.parciales || 0
  }

  const transactionItems = [
    {
      label: 'Cuotas pagadas',
      detail: 'Cobros',
      amount: `+${formatNumber(cuotasResumen.pagadas)}`,
      color: 'success',
      icon: 'tabler-check'
    },
    {
      label: 'Cuotas pendientes',
      detail: 'Por cobrar',
      amount: formatNumber(cuotasResumen.pendientes),
      color: 'warning',
      icon: 'tabler-clock'
    },
    {
      label: 'Cuotas parciales',
      detail: 'Pagos incompletos',
      amount: formatNumber(cuotasResumen.parciales),
      color: 'info',
      icon: 'tabler-adjustments'
    },
    {
      label: 'Monto vencido',
      detail: 'Cartera en mora',
      amount: formatUSD(kpis?.morosidad?.monto_vencido),
      color: 'error',
      icon: 'tabler-alert-triangle'
    }
  ]

  return (
    <Stack spacing={2.5}>
      <Box>
        <Typography variant='h4'>Analytics Dashboard</Typography>
        <Typography color='text.secondary'>Vista ecommerce aplicada a métricas de préstamos y cobranza.</Typography>
      </Box>

      <Card>
        <CardContent>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ md: 'end' }}>
            <TextField
              type='date'
              label='Desde'
              value={filtros.fecha_desde}
              onChange={event => setFiltros(previous => ({ ...previous, fecha_desde: event.target.value }))}
              size='small'
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type='date'
              label='Hasta'
              value={filtros.fecha_hasta}
              onChange={event => setFiltros(previous => ({ ...previous, fecha_hasta: event.target.value }))}
              size='small'
              InputLabelProps={{ shrink: true }}
            />
            <Button variant='contained' onClick={() => fetchAnalytics()} disabled={loading}>
              Filtrar
            </Button>
            <Button
              variant='text'
              onClick={() => {
                const cleared = { fecha_desde: '', fecha_hasta: '' }

                setFiltros(cleared)
                fetchAnalytics(cleared)
              }}
              disabled={loading}
            >
              Limpiar
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {error ? <Alert severity='error'>{error}</Alert> : null}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, xl: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
              <Box>
                <Typography variant='h5'>Resumen del período</Typography>
                <Typography color='text.secondary' sx={{ mb: 1.5 }}>
                  Monto total prestado
                </Typography>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1.5 }}>
                  {formatUSD(kpis.montoTotalPrestado)}
                </Typography>
                <Button variant='contained' size='small' onClick={() => fetchAnalytics()} disabled={loading}>
                  Actualizar métricas
                </Button>
              </Box>
              <CustomAvatar skin='light' color='primary' size={70}>
                <i className='tabler-chart-bar text-3xl' />
              </CustomAvatar>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 8 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction='row' justifyContent='space-between' alignItems='center' mb={2}>
                <Typography variant='h5'>Statistics</Typography>
                <Typography variant='body2' color='text.secondary'>
                  Actualizado en tiempo real
                </Typography>
              </Stack>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <StatItem
                    icon='tabler-file-description'
                    color='primary'
                    label='Préstamos'
                    value={formatNumber(kpis.totalPrestamos)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <StatItem
                    icon='tabler-users'
                    color='info'
                    label='Top clientes'
                    value={formatNumber(topClientes.length)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <StatItem
                    icon='tabler-currency-dollar'
                    color='success'
                    label='Intereses'
                    value={formatUSD(kpis.ingresosIntereses)}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <StatItem
                    icon='tabler-wallet'
                    color='warning'
                    label='Saldo pendiente'
                    value={formatUSD(kpis.saldoPendienteTotal)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5'>Profit</Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }}>
                Ticket promedio
              </Typography>
              <Typography variant='h4'>{formatUSD(kpis.ticketPromedio)}</Typography>
              <Chip
                label={`${tasaAprobacion >= 0 ? '+' : ''}${formatPercent(tasaAprobacion)} aprobación`}
                color={tasaAprobacion >= 50 ? 'success' : 'warning'}
                sx={{ mt: 1.5 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5'>Expenses</Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }}>
                Cartera en mora
              </Typography>
              <Typography variant='h4'>{formatUSD(kpis?.morosidad?.monto_vencido)}</Typography>
              <Chip label={`${formatPercent(porcentajeMora)} de cuotas vencidas`} color='error' sx={{ mt: 1.5 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5'>Generated Leads</Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }}>
                Plazo promedio
              </Typography>
              <Typography variant='h4'>{formatNumber(kpis.plazoPromedioSemanas)} semanas</Typography>
              <Chip label={`${formatNumber(cuotasResumen.parciales)} cuotas parciales`} color='info' sx={{ mt: 1.5 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 8 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography variant='h5' sx={{ mb: 1 }}>
                    Revenue Report
                  </Typography>
                  <Table size='small'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Mes</TableCell>
                        <TableCell>Total préstamos</TableCell>
                        <TableCell>Monto</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {series.length ? (
                        series.map(item => (
                          <TableRow key={item.mes}>
                            <TableCell>{String(item.mes || '').slice(0, 10)}</TableCell>
                            <TableCell>{formatNumber(item.total)}</TableCell>
                            <TableCell>{formatUSD(item.monto)}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3}>
                            <Typography color='text.secondary'>Sin registros para el rango seleccionado.</Typography>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack spacing={1.5}>
                    <Typography variant='h5'>Budget</Typography>
                    <Typography color='text.secondary'>Meta de cobranza del período</Typography>
                    <Typography variant='h4'>{formatUSD(kpis.saldoPendienteTotal)}</Typography>
                    <LinearProgress variant='determinate' value={Math.min(100, Math.max(0, tasaAprobacion))} />
                    <Typography variant='body2' color='text.secondary'>
                      Avance por tasa de aprobación: {formatPercent(tasaAprobacion)}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5'>Earning Reports</Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }}>
                Resumen semanal
              </Typography>
              <Stack spacing={2}>
                <StatItem
                  icon='tabler-currency-dollar'
                  color='success'
                  label='Ingreso total'
                  value={formatUSD(kpis.montoTotalPrestado)}
                />
                <Divider />
                <StatItem
                  icon='tabler-file-dollar'
                  color='primary'
                  label='Intereses'
                  value={formatUSD(kpis.ingresosIntereses)}
                />
                <Divider />
                <StatItem
                  icon='tabler-report-money'
                  color='warning'
                  label='Saldo pendiente'
                  value={formatUSD(kpis.saldoPendienteTotal)}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6, xl: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5'>Top clientes</Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }}>
                Mayor monto prestado
              </Typography>
              <Stack spacing={1.5}>
                {topClientes.length ? (
                  topClientes.slice(0, 6).map(item => (
                    <Stack key={item.cliente_id} direction='row' justifyContent='space-between' alignItems='center'>
                      <Stack direction='row' spacing={1.5} alignItems='center'>
                        <CustomAvatar skin='light' color='primary' size={36}>
                          <i className='tabler-user text-lg' />
                        </CustomAvatar>
                        <Typography>{item.nombre_completo || 'Cliente sin nombre'}</Typography>
                      </Stack>
                      <Typography fontWeight={600}>{formatUSD(item.monto_total)}</Typography>
                    </Stack>
                  ))
                ) : (
                  <Typography color='text.secondary'>No hay clientes para mostrar.</Typography>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5'>Transactions</Typography>
              <Typography color='text.secondary' sx={{ mb: 2 }}>
                Operaciones del período
              </Typography>
              <Stack spacing={1.5}>
                {transactionItems.map(item => (
                  <Stack key={item.label} direction='row' justifyContent='space-between' alignItems='center'>
                    <Stack direction='row' spacing={1.5} alignItems='center'>
                      <CustomAvatar skin='light' color={item.color} size={36}>
                        <i className={`${item.icon} text-lg`} />
                      </CustomAvatar>
                      <Box>
                        <Typography>{item.label}</Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {item.detail}
                        </Typography>
                      </Box>
                    </Stack>
                    <Typography fontWeight={600}>{item.amount}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}
