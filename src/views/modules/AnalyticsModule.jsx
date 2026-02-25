'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

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
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { obtenerAnalyticsDashboard } from '@/api/analytics'
import CustomAvatar from '@core/components/mui/Avatar'
import { formatUSD } from '@/utils/currency'

const formatNumber = value => new Intl.NumberFormat('es-DO').format(Number(value || 0))
const formatPercent = value => `${Number(value || 0).toFixed(1)}%`
const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, Number(value || 0)))
const formatDateInput = date => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const getPreviousMonthRange = () => {
  const now = new Date()
  const firstDayCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastDayPreviousMonth = new Date(firstDayCurrentMonth.getTime() - 24 * 60 * 60 * 1000)
  const firstDayPreviousMonth = new Date(lastDayPreviousMonth.getFullYear(), lastDayPreviousMonth.getMonth(), 1)

  return {
    fecha_desde: formatDateInput(firstDayPreviousMonth),
    fecha_hasta: formatDateInput(lastDayPreviousMonth)
  }
}

const getLastTwelveMonthsRange = () => {
  const end = new Date()
  const start = new Date(end)

  start.setMonth(start.getMonth() - 12)

  return {
    fecha_desde: formatDateInput(start),
    fecha_hasta: formatDateInput(end)
  }
}
const formatPeriodLabel = value => {
  if (!value) return ''

  const asDate = new Date(value)

  if (Number.isNaN(asDate.getTime())) return String(value)

  return asDate.toLocaleDateString('es-DO', { month: 'short', year: 'numeric' })
}

const MetricCard = ({ icon, color, title, value, subtitle, trend }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Stack direction='row' justifyContent='space-between' alignItems='start'>
        <Box>
          <Typography color='text.secondary'>{title}</Typography>
          <Typography variant='h4' sx={{ mt: 0.5 }}>
            {value}
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mt: 0.5 }}>
            {subtitle}
          </Typography>
        </Box>
        <CustomAvatar skin='light' color={color} size={48}>
          <i className={`${icon} text-xl`} />
        </CustomAvatar>
      </Stack>
      {trend ? (
        <Chip
          size='small'
          variant='tonal'
          color={trend.color}
          label={trend.label}
          sx={{ mt: 1.5, fontWeight: 700, fontSize: '0.875rem' }}
        />
      ) : null}
    </CardContent>
  </Card>
)

const MiniBars = ({ values, labels = [], color = 'var(--mui-palette-primary-main)', metricLabel = 'Valor', formatValue }) => {
  const safeValues = values.length ? values : [4, 7, 6, 8, 5, 9]
  const safeLabels = labels.length === safeValues.length ? labels : safeValues.map((_, index) => `Período ${index + 1}`)
  const maxValue = Math.max(...safeValues, 1)
  const valueFormatter = formatValue || formatNumber

  return (
    <Stack direction='row' spacing={0.75} alignItems='end' sx={{ height: 72 }}>
      {safeValues.map((value, index) => {
        const period = safeLabels[index]

        return (
          <Tooltip
            key={`${value}-${index}-${period}`}
            arrow
            placement='top'
            title={`${period} • ${metricLabel}: ${valueFormatter(value)}`}
          >
            <Box
              sx={{
                flex: 1,
                borderRadius: 1.2,
                backgroundColor: color,
                opacity: 0.28 + (Number(value || 0) / maxValue) * 0.72,
                height: `${Math.max(12, (Number(value || 0) / maxValue) * 100)}%`,
                cursor: 'pointer'
              }}
            />
          </Tooltip>
        )
      })}
    </Stack>
  )
}

const CircleProgress = ({ value, color = 'var(--mui-palette-success-main)', label }) => {
  const normalized = clamp(value)

  return (
    <Stack direction='row' spacing={2} alignItems='center'>
      <Box
        sx={{
          width: 92,
          height: 92,
          borderRadius: '50%',
          background: `conic-gradient(${color} ${normalized * 3.6}deg, var(--mui-palette-divider) 0deg)`,
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Box
          sx={{
            width: 68,
            height: 68,
            borderRadius: '50%',
            backgroundColor: 'background.paper',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          <Typography variant='h6'>{formatPercent(normalized)}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='h6'>{label}</Typography>
        <Typography color='text.secondary'>Índice visual del período</Typography>
      </Box>
    </Stack>
  )
}

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
  const moraPorcentaje = Number(kpis?.morosidad?.porcentaje_cuotas_vencidas || 0)
  const saludCartera = clamp(100 - moraPorcentaje)

  const cuotasResumen = useMemo(
    () => ({
      pagadas: Number(kpis?.cuotas?.pagadas || 0),
      pendientes: Number(kpis?.cuotas?.pendientes || 0),
      parciales: Number(kpis?.cuotas?.parciales || 0)
    }),
    [kpis]
  )

  const seriePrestamos = useMemo(() => {
    const values = series.map(item => Number(item.total || 0)).slice(-8)

    return values.length ? values : [3, 5, 4, 6, 8, 7, 9, 10]
  }, [series])

  const serieLabels = useMemo(() => {
    const labels = series.map(item => formatPeriodLabel(item.mes)).slice(-8)

    return labels.length ? labels : Array.from({ length: 8 }, (_, index) => `Período ${index + 1}`)
  }, [series])

  const serieMontos = useMemo(() => {
    const values = series.map(item => Number(item.monto || 0)).slice(-8)

    return values.length ? values : [1500, 2100, 2600, 2400, 3200, 3800, 4100, 4500]
  }, [series])

  const totalCuotas = cuotasResumen.pagadas + cuotasResumen.pendientes + cuotasResumen.parciales
  const cumplimientoCobros = totalCuotas ? (cuotasResumen.pagadas / totalCuotas) * 100 : 0

  const applyQuickFilter = type => {
    const range = type === 'last-month' ? getPreviousMonthRange() : getLastTwelveMonthsRange()

    setFiltros(range)
    fetchAnalytics(range)
  }

  return (
    <Stack spacing={2.5}>
      <Box>
        <Typography variant='h4'>Dashboard Ejecutivo</Typography>
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
              Actualizar dashboard
            </Button>
            <Button variant='tonal' color='info' onClick={() => applyQuickFilter('last-month')} disabled={loading}>
              Último mes
            </Button>
            <Button variant='tonal' color='secondary' onClick={() => applyQuickFilter('last-12-months')} disabled={loading}>
              Últimos 12 meses
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
          {loading ? <LinearProgress sx={{ mt: 2 }} /> : null}
        </CardContent>
      </Card>

      {error ? <Alert severity='error'>{error}</Alert> : null}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, xl: 3 }}>
          <MetricCard
            icon='tabler-currency-dollar'
            color='success'
            title='Monto total prestado'
            value={formatUSD(kpis.montoTotalPrestado)}
            subtitle='Resumen general'
            trend={{ color: 'success', label: `Aprobación ${formatPercent(tasaAprobacion)}` }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 3 }}>
          <MetricCard
            icon='tabler-file-dollar'
            color='primary'
            title='Ingresos por intereses'
            value={formatUSD(kpis.ingresosIntereses)}
            subtitle='Acumulado filtrado'
            trend={{ color: 'primary', label: `${formatNumber(kpis.totalPrestamos)} préstamos` }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 3 }}>
          <MetricCard
            icon='tabler-wallet'
            color='warning'
            title='Saldo pendiente'
            value={formatUSD(kpis.saldoPendienteTotal)}
            subtitle='Cartera por cobrar'
            trend={{ color: 'warning', label: `${formatNumber(cuotasResumen.pendientes)} cuotas pendientes` }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 3 }}>
          <MetricCard
            icon='tabler-alert-triangle'
            color='error'
            title='Mora del período'
            value={formatUSD(kpis?.morosidad?.monto_vencido)}
            subtitle='Monto vencido'
            trend={{ color: 'error', label: `${formatPercent(moraPorcentaje)} cuotas vencidas` }}
          />
        </Grid>

        <Grid size={{ xs: 12, xl: 8 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.5 }}>
                <Typography variant='h5'>CRM Dashboard</Typography>
                <Chip size='small' label='Embudo comercial' variant='tonal' color='info' />
              </Stack>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography color='text.secondary'>Volumen de préstamos por mes</Typography>
                  <MiniBars
                    values={seriePrestamos}
                    labels={serieLabels}
                    color='var(--mui-palette-info-main)'
                    metricLabel='Préstamos'
                    formatValue={formatNumber}
                  />
                  <Divider sx={{ my: 2 }} />
                  <Typography color='text.secondary'>Monto mensual estimado</Typography>
                  <MiniBars
                    values={serieMontos}
                    labels={serieLabels}
                    color='var(--mui-palette-success-main)'
                    metricLabel='Monto'
                    formatValue={formatUSD}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Stack spacing={2}>
                    <CircleProgress value={tasaAprobacion} color='var(--mui-palette-success-main)' label='Conversión CRM' />
                    <Box>
                      <Typography variant='h6'>Ticket promedio</Typography>
                      <Typography variant='h4'>{formatUSD(kpis.ticketPromedio)}</Typography>
                      <Typography color='text.secondary'>Plazo promedio: {formatNumber(kpis.plazoPromedioSemanas)} semanas</Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.5 }}>
                <Typography variant='h5'>Academy Dashboard</Typography>
                <Chip size='small' label='Rendimiento' variant='tonal' color='secondary' />
              </Stack>
              <Stack spacing={2}>
                <Box>
                  <Typography color='text.secondary'>Salud de cartera</Typography>
                  <LinearProgress variant='determinate' value={saludCartera} color='success' sx={{ mt: 1 }} />
                  <Typography variant='body2' sx={{ mt: 0.5 }}>
                    {formatPercent(saludCartera)} estabilidad general
                  </Typography>
                </Box>
                <Box>
                  <Typography color='text.secondary'>Cumplimiento de cobros</Typography>
                  <LinearProgress variant='determinate' value={cumplimientoCobros} color='info' sx={{ mt: 1 }} />
                  <Typography variant='body2' sx={{ mt: 0.5 }}>
                    {formatPercent(cumplimientoCobros)} cuotas pagadas
                  </Typography>
                </Box>
                <Box>
                  <Typography color='text.secondary'>Top clientes en seguimiento</Typography>
                  <Typography variant='h4'>{formatNumber(topClientes.length)}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 7 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.5 }}>
                <Typography variant='h5'>Ecommerce Dashboard</Typography>
                <Chip size='small' label='Revenue report' variant='tonal' color='success' />
              </Stack>
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Mes</TableCell>
                    <TableCell>Total préstamos</TableCell>
                    <TableCell>Monto prestado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {series.length ? (
                    series.map(item => (
                      <TableRow key={`${item.mes}-${item.total}`}>
                        <TableCell>{String(item.mes || '').slice(0, 10)}</TableCell>
                        <TableCell>{formatNumber(item.total)}</TableCell>
                        <TableCell>{formatUSD(item.monto)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3}>
                        <Typography color='text.secondary'>Sin datos para este período.</Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, xl: 5 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.5 }}>
                <Typography variant='h5'>Top clientes</Typography>
                <Chip size='small' label='Ecommerce list' variant='tonal' color='primary' />
              </Stack>
              <Stack spacing={1.5}>
                {topClientes.length ? (
                  topClientes.slice(0, 7).map(item => (
                    <Stack key={item.cliente_id} direction='row' justifyContent='space-between' alignItems='center'>
                      <Stack direction='row' spacing={1.2} alignItems='center'>
                        <CustomAvatar skin='light' color='primary' size={34}>
                          <i className='tabler-user text-lg' />
                        </CustomAvatar>
                        <Typography>{item.nombre_completo || 'Cliente'}</Typography>
                      </Stack>
                      <Typography fontWeight={700}>{formatUSD(item.monto_total)}</Typography>
                    </Stack>
                  ))
                ) : (
                  <Typography color='text.secondary'>No hay clientes para mostrar.</Typography>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1.5 }}>
                <Typography variant='h5'>Logistics Dashboard</Typography>
                <Chip size='small' label='Estado operativo' variant='tonal' color='warning' />
              </Stack>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography color='text.secondary'>Cuotas pagadas</Typography>
                      <Typography variant='h4'>{formatNumber(cuotasResumen.pagadas)}</Typography>
                      <LinearProgress
                        variant='determinate'
                        value={totalCuotas ? (cuotasResumen.pagadas / totalCuotas) * 100 : 0}
                        color='success'
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography color='text.secondary'>Cuotas pendientes</Typography>
                      <Typography variant='h4'>{formatNumber(cuotasResumen.pendientes)}</Typography>
                      <LinearProgress
                        variant='determinate'
                        value={totalCuotas ? (cuotasResumen.pendientes / totalCuotas) * 100 : 0}
                        color='warning'
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card variant='outlined'>
                    <CardContent>
                      <Typography color='text.secondary'>Cuotas parciales</Typography>
                      <Typography variant='h4'>{formatNumber(cuotasResumen.parciales)}</Typography>
                      <LinearProgress
                        variant='determinate'
                        value={totalCuotas ? (cuotasResumen.parciales / totalCuotas) * 100 : 0}
                        color='info'
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}
