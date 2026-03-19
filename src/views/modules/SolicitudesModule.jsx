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
  ejecutarModeloAntiguo,
  ejecutarModeloNuevo,
  ejecutarRatingClienteAntiguo,
  ejecutarRatingNuevoCliente,
  ejecutarScoringSemanalNuevoCliente,
  listarSolicitudes,
  rechazarSolicitud
} from '@/api/solicitudes'
import { aprobarSolicitudComoPrestamo } from '@/api/prestamos'
import usePermissions from '@/hooks/usePermissions'
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
  tiempoSemanas: 'Tiempo (semanas)',
  objetivoPrestamo: 'Objetivo préstamo',
  esReferido: 'Es referido',
  tieneGarantia: 'Tiene garantía',
  otrasDeudasMensuales: 'Otras deudas mensuales',
  antiguedadLaboralMeses: 'Antigüedad laboral (meses)',
  documentosCompletos: 'Documentos completos',
  statusLegal: 'Status legal',
  casaPropiaAlquiler: 'Casa propia o alquiler',
  montoAuto: 'Monto del auto',
  pagoAuto: 'Pago auto mensual',
  gastosMensualesEstimados: 'Estimado gastos mensuales',
  deudasActualesPagosMinimos: 'Deudas actuales pagos mínimos',
  valorGarantia: 'Valor de garantía',
  pd: 'PD',
  score: 'Score',
  rating: 'Rating',
  paymentCapacityRatio: 'Índice de cobertura cuota',
  cuotaSemanal: 'Cuota semanal',
  montoAprobado: 'Monto aprobado',
  capacidadPagoMensual: 'Capacidad de pago mensual',
  capacidadPagoSemanal: 'Capacidad de pago semanal',
  coberturaCuotaPct: 'Cobertura cuota (%)',
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
  'warnings',
  'capacidadpagomensual'
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

const getRequestErrorMessage = err => {
  const base = err?.message || 'No se pudo completar la operación.'
  const payloadErrores = err?.payload?.errores

  if (!Array.isArray(payloadErrores) || payloadErrores.length === 0) return base

  const detail = payloadErrores
    .map(item => item?.msg || item?.message || '')
    .filter(Boolean)
    .join(' | ')

  return detail ? `${base}: ${detail}` : base
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
const parseDescuentoReferido = payload => {
  const raw =
    payload?.descuento_referido_aplicado ??
    payload?.descuentoReferidoAplicado ??
    payload?.descuento_referido ??
    payload?.monto_descuento_referido ??
    0
  const parsed = Number(raw)

  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

const MODEL_NUMERIC_FIELDS = [
  'edad',
  'tiempoSemanas',
  'montoSolicitado',
  'ingresosMensuales',
  'otrasDeudasMensuales',
  'antiguedadLaboralMeses',
  'montoAuto',
  'pagoAuto',
  'gastosMensualesEstimados',
  'deudasActualesPagosMinimos',
  'valorGarantia'
]

const parseNonNegativeNumber = (value, label) => {
  if (value === '' || value === null || value === undefined) return 0
  const parsed = Number(value)

  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new Error(`${label} debe ser un número mayor o igual a 0.`)
  }

  return parsed
}

const extractResultadoModelo = payload => {
  const source = payload?.data || payload || {}

  if (!isPlainObject(source)) return {}

  const decisionState = String(source?.decision?.estado || source?.decision?.status || '').toUpperCase()
  const aprobado = decisionState === 'APROBADO' || decisionState === 'APPROVED'
  const hasWeeklyStructure =
    isPlainObject(source?.riesgo) ||
    isPlainObject(source?.capacidadPago) ||
    isPlainObject(source?.oferta) ||
    isPlainObject(source?.decision)

  if (!hasWeeklyStructure) return source

  return {
    ...source,
    resumen: {
      ...(isPlainObject(source?.resumen) ? source.resumen : {}),
      decision: source?.decision?.estado || source?.decision?.status || source?.resumen?.decision || '',
      aprobado,
      pd: source?.riesgo?.pd,
      score: source?.riesgo?.score,
      rating: source?.riesgo?.rating,
      capacidadPagoSemanal: source?.capacidadPago?.capacidadPagoSemanal,
      cuotaSemanal: source?.capacidadPago?.cuotaSemanal,
      paymentCapacityRatio: source?.capacidadPago?.paymentCapacityRatio,
      montoAprobado: source?.oferta?.montoAprobado
    }
  }
}

const initialModeloForm = {
  edad: '',
  sexo: 'M',
  tiempoSemanas: '',
  objetivoPrestamo: 'inversion',
  esReferido: false,
  tieneGarantia: false,
  montoSolicitado: '0',
  ingresosMensuales: '',
  otrasDeudasMensuales: '',
  antiguedadLaboralMeses: '',
  documentosCompletos: true,
  statusLegal: 'FORMAL',
  casaPropiaAlquiler: 'ALQUILER',
  montoAuto: '',
  pagoAuto: '',
  gastosMensualesEstimados: '',
  deudasActualesPagosMinimos: '',
  valorGarantia: ''
}

export default function SolicitudesModule() {
  const { can, canAny } = usePermissions()
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
  const [modeloDialogError, setModeloDialogError] = useState('')
  const [modeloDialogInfo, setModeloDialogInfo] = useState('')
  const [resultadoModelo, setResultadoModelo] = useState(null)
  const [aprobacionDialogOpen, setAprobacionDialogOpen] = useState(false)
  const [solicitudAprobacion, setSolicitudAprobacion] = useState(null)
  const [contratoAprobacionFile, setContratoAprobacionFile] = useState(null)
  const [aprobacionDialogError, setAprobacionDialogError] = useState('')
  const canViewSolicitudes = can('solicitudes.view')
  const canCreateSolicitud = can('solicitudes.create')
  const canApproveSolicitud = can('solicitudes.approve')
  const canRejectSolicitud = can('solicitudes.reject')
  const canRunRatings = can('ratings.run')
  const canEditSolicitud = canAny(['solicitudes.edit', 'solicitudes.create'])

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

  const runAprobacion = async (row, contratoFile = null) => {
    setProcessingId(row.id)
    setError('')
    setSuccess('')
    setAprobacionDialogError('')

    try {
      const numSemanas = Number(row?.plazo_semanas || row?.num_semanas || 0) || undefined
      let approvalRequestBody

      if (contratoFile) {
        approvalRequestBody = new FormData()
        if (numSemanas) approvalRequestBody.append('num_semanas', String(numSemanas))
        approvalRequestBody.append('contrato_credito', contratoFile)
        approvalRequestBody.append('documentos', contratoFile)
      } else {
        approvalRequestBody = { num_semanas: numSemanas }
      }

      const response = await aprobarSolicitudComoPrestamo(row.id, approvalRequestBody)
      const responsePayload = response?.data || response || {}
      const nombreCliente = getClienteNombre(row) || responsePayload?.prestamo?.nombre_completo || 'cliente seleccionado'
      const cuotasGeneradasRaw = responsePayload?.cuotas_generadas
      const cuotasGeneradas = Array.isArray(cuotasGeneradasRaw)
        ? cuotasGeneradasRaw.length
        : Number(cuotasGeneradasRaw || responsePayload?.cuotas || 0)
      const descuentoReferidoAplicado = parseDescuentoReferido(responsePayload)
      const suffix = [
        `Préstamo de ${nombreCliente} creado.`,
        Number.isFinite(cuotasGeneradas) && cuotasGeneradas > 0 ? `${cuotasGeneradas} cuota(s) generada(s).` : ''
      ]
        .filter(Boolean)
        .join(' ')

      const descuentoMsg =
        descuentoReferidoAplicado > 0
          ? ` Descuento por referido aplicado: ${formatUSD(descuentoReferidoAplicado)} en la última cuota.`
          : ''

      setSuccess(`Préstamo aprobado correctamente.${suffix ? ` ${suffix}` : ''}${descuentoMsg}`)
      await loadSolicitudes()
      setAprobacionDialogOpen(false)
      setSolicitudAprobacion(null)
      setContratoAprobacionFile(null)
    } catch (err) {
      const message = err.message || 'No se pudo aprobar la solicitud.'

      if (aprobacionDialogOpen) {
        setAprobacionDialogError(message)
      } else {
        setError(message)
      }
    } finally {
      setProcessingId('')
    }
  }

  const openAprobacionDialog = row => {
    setAprobacionDialogError('')
    setSolicitudAprobacion(row)
    setContratoAprobacionFile(null)
    setAprobacionDialogOpen(true)
  }

  const closeAprobacionDialog = () => {
    if (processingId === solicitudAprobacion?.id) return

    setAprobacionDialogOpen(false)
    setAprobacionDialogError('')
    setSolicitudAprobacion(null)
    setContratoAprobacionFile(null)
  }

  const handleContratoAprobacionFile = event => {
    const selected = Array.from(event.target.files || [])
    const file = selected[0] || null

    if (!file) {
      setContratoAprobacionFile(null)

      return
    }

    const mime = String(file?.type || '').toLowerCase()
    const name = String(file?.name || '').toLowerCase()

    if (mime !== 'application/pdf' && !name.endsWith('.pdf')) {
      setAprobacionDialogError('El contrato debe ser un documento PDF.')
      setContratoAprobacionFile(null)

      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setAprobacionDialogError('El contrato debe pesar máximo 10MB.')
      setContratoAprobacionFile(null)

      return
    }

    setAprobacionDialogError('')
    setContratoAprobacionFile(file)
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
    setModeloDialogError('')
    setModeloDialogInfo('')
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

    setModeloDialogError('')
    setModeloDialogInfo('')
    setModeloDialogOpen(false)
    setSelectedSolicitud(null)
  }

  const handleModeloForm = (field, value) => {
    setRatingForm(previous => ({ ...previous, [field]: value }))
  }

  const ejecutarModelo = async () => {
    if (!selectedSolicitud) return

    setRatingLoading(true)
    setModeloDialogError('')
    setModeloDialogInfo('')

    const start = Date.now()

    try {
      if (modeloTipo === 'CLIENTE_NUEVO') {
        await ejecutarModeloNuevo(selectedSolicitud.id)

        const numericValues = MODEL_NUMERIC_FIELDS.reduce((acc, key) => {
          acc[key] = parseNonNegativeNumber(ratingForm[key], getLabel(key))

          return acc
        }, {})

        const payload = {
          edad: numericValues.edad,
          sexo: ratingForm.sexo,
          tiempoSemanas: numericValues.tiempoSemanas,
          objetivoPrestamo: ratingForm.objetivoPrestamo,
          esReferido: Boolean(ratingForm.esReferido),
          tieneGarantia: Boolean(ratingForm.tieneGarantia),
          montoGarantia: ratingForm.tieneGarantia ? numericValues.valorGarantia : 0,
          montoSolicitado: numericValues.montoSolicitado,
          ingresosMensuales: numericValues.ingresosMensuales,
          egresosMensuales: 0,
          otrasDeudasMensuales: numericValues.otrasDeudasMensuales,
          antiguedadLaboralMeses: numericValues.antiguedadLaboralMeses,
          documentosCompletos: Boolean(ratingForm.documentosCompletos),
          statusLegal: ratingForm.statusLegal,
          tiempoTrabajo: numericValues.antiguedadLaboralMeses,
          casaPropiaAlquiler: ratingForm.casaPropiaAlquiler,
          montoAuto: numericValues.montoAuto,
          pagoAuto: numericValues.pagoAuto,
          pagoAutoMensual: numericValues.pagoAuto,
          gastosMensualesEstimados: numericValues.gastosMensualesEstimados,
          deudasActualesPagosMinimos: numericValues.deudasActualesPagosMinimos,
          deudasActualesPagosMinimosMensuales: numericValues.deudasActualesPagosMinimos,
          valorGarantia: numericValues.valorGarantia,
          status_legal: ratingForm.statusLegal,
          tiempo_trabajo: numericValues.antiguedadLaboralMeses,
          casa_propia_alquiler: ratingForm.casaPropiaAlquiler,
          monto_auto: numericValues.montoAuto,
          pago_auto: numericValues.pagoAuto,
          estimados_gastos_mensuales: numericValues.gastosMensualesEstimados,
          deudas_actuales_pagos_minimos: numericValues.deudasActualesPagosMinimos,
          valor_garantia: numericValues.valorGarantia
        }

        let response

        try {
          response = await ejecutarScoringSemanalNuevoCliente(payload)
        } catch (weeklyErr) {
          if (Number(weeklyErr?.status) === 404 || Number(weeklyErr?.status) === 400) {
            response = await ejecutarRatingNuevoCliente(payload)
            setModeloDialogInfo('Se ejecutó el modelo clásico como respaldo mientras se habilita el scoring semanal.')
          } else {
            throw weeklyErr
          }
        }

        setResultadoModelo(extractResultadoModelo(response))
      } else {
        await ejecutarModeloAntiguo(selectedSolicitud.id)

        const clienteNombre = getClienteNombre(selectedSolicitud)

        if (!clienteNombre) {
          throw new Error('No se encontró nombre y apellido del cliente para modelo antiguo.')
        }

        const response = await ejecutarRatingClienteAntiguo(clienteNombre)

        setResultadoModelo(extractResultadoModelo(response))
      }

      const elapsed = Date.now() - start

      if (elapsed < 2000) {
        await new Promise(resolve => {
          setTimeout(resolve, 2000 - elapsed)
        })
      }

      setModeloDialogInfo('Modelo ejecutado con éxito.')
      await loadSolicitudes()
      setTimeout(() => {
        setModeloDialogOpen(false)
        setModeloDialogInfo('')
      }, 1200)
    } catch (err) {
      setModeloDialogError(getRequestErrorMessage(err))
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
          item?.monto_solicitado,
          item?.modalidad
        ]
          .map(normalizeText)
          .join(' ')

        return searchable.includes(normalizedQuery)
      })
    }

    if (focusActive) {
      if (focusSolicitudId) {
        output = output.filter(item => String(item?.id || '') === String(focusSolicitudId))
      } else if (focusClienteId) {
        output = output.filter(item => String(item?.cliente_id || '') === String(focusClienteId))
      }
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
  const decisionEstado = String(
    resumen?.decision || resultadoModelo?.decision?.estado || resultadoModelo?.decision?.status || ''
  ).toUpperCase()
  const riesgoColor =
    resumen?.colorRiesgo ||
    (decisionEstado === 'APROBADO' || decisionEstado === 'APPROVED'
      ? 'success.main'
      : decisionEstado === 'REVISIÓN' || decisionEstado === 'REVISION' || decisionEstado === 'REVIEW'
        ? 'warning.main'
        : decisionEstado === 'RECHAZADO' || decisionEstado === 'REJECTED'
          ? 'error.main'
          : 'primary.main')

  const orderedSections = resultadoModelo
    ? Object.entries(resultadoModelo).filter(
        ([key, value]) => !shouldHideKey(key) && !shouldExcludeResultField(key, value)
      )
    : []

  const handleExportCsv = () => {
    const headers = ['Cliente', 'Monto', 'Modalidad', 'PlazoSemanas', 'TasaVariablePct', 'Estado']

    const lines = tableRows.map(item => [
      getClienteNombre(item) || '',
      item?.monto_solicitado || '',
      item?.modalidad || '',
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

  if (!canViewSolicitudes) {
    return <Alert severity='warning'>No tienes permisos para ver el listado de solicitudes.</Alert>
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
                {canCreateSolicitud ? (
                  <Button variant='contained' component={Link} href='/solicitudes/nueva'>
                    + Ingresar solicitud
                  </Button>
                ) : null}
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
                    <TableCell>Modalidad</TableCell>
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
                      <TableRow
                        key={row.id}
                        hover
                        onDoubleClick={() => {
                          const clienteId = row?.cliente_id || row?.cliente?.id || ''

                          if (!clienteId) return

                          router.push(`/clientes/${clienteId}/detalle`)
                        }}
                        sx={{ cursor: row?.cliente_id || row?.cliente?.id ? 'pointer' : 'default' }}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox size='small' />
                        </TableCell>
                        <TableCell>{cliente || '-'}</TableCell>
                        <TableCell>{formatUSD(row.monto_solicitado)}</TableCell>
                        <TableCell>{row.modalidad || '-'}</TableCell>
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
                            {canEditSolicitud ? (
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
                            ) : null}
                            {canRunRatings ? (
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
                            ) : null}
                            {canApproveSolicitud ? (
                              <Tooltip title='Aprobar'>
                                <span>
                                  <IconButton
                                    size='small'
                                    color='success'
                                    disabled={!isPendiente || isBusy}
                                    onClick={() => openAprobacionDialog(row)}
                                  >
                                    <i className='tabler-check text-3xl' />
                                  </IconButton>
                                </span>
                              </Tooltip>
                            ) : null}
                            {canRejectSolicitud ? (
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
                            ) : null}
                            {!canEditSolicitud && !canRunRatings && !canApproveSolicitud && !canRejectSolicitud ? (
                              <Typography variant='body2' color='text.secondary'>
                                Sin acciones
                              </Typography>
                            ) : null}
                          </Stack>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  {tableRows.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} align='center'>
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
            {modeloDialogError ? <Alert severity='error'>{modeloDialogError}</Alert> : null}
            {modeloDialogInfo ? <Alert severity='success'>{modeloDialogInfo}</Alert> : null}
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
                  label='Antigüedad laboral (meses)'
                  type='number'
                  value={ratingForm.antiguedadLaboralMeses}
                  onChange={event => handleModeloForm('antiguedadLaboralMeses', event.target.value)}
                />
                <TextField
                  select
                  label='¿Documentos completos?'
                  value={ratingForm.documentosCompletos ? 'SI' : 'NO'}
                  onChange={event => handleModeloForm('documentosCompletos', event.target.value === 'SI')}
                >
                  <MenuItem value='SI'>Sí</MenuItem>
                  <MenuItem value='NO'>No</MenuItem>
                </TextField>
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
                  label='Valor de garantía'
                  type='number'
                  value={ratingForm.valorGarantia}
                  onChange={event => handleModeloForm('valorGarantia', event.target.value)}
                  disabled={!ratingForm.tieneGarantia}
                />
                <TextField
                  select
                  label='Status legal'
                  value={ratingForm.statusLegal}
                  onChange={event => handleModeloForm('statusLegal', event.target.value)}
                >
                  <MenuItem value='FORMAL'>FORMAL</MenuItem>
                  <MenuItem value='EN_REGLA'>EN_REGLA</MenuItem>
                  <MenuItem value='RESIDENTE'>RESIDENTE</MenuItem>
                  <MenuItem value='TEMPORAL'>TEMPORAL</MenuItem>
                  <MenuItem value='IRREGULAR'>IRREGULAR</MenuItem>
                </TextField>
                <TextField
                  select
                  label='Casa propia o alquiler'
                  value={ratingForm.casaPropiaAlquiler}
                  onChange={event => handleModeloForm('casaPropiaAlquiler', event.target.value)}
                >
                  <MenuItem value='PROPIA'>PROPIA</MenuItem>
                  <MenuItem value='ALQUILER'>ALQUILER</MenuItem>
                </TextField>
                <TextField
                  label='Monto del auto'
                  type='number'
                  value={ratingForm.montoAuto}
                  onChange={event => handleModeloForm('montoAuto', event.target.value)}
                />
                <TextField
                  label='Pago auto mensual'
                  type='number'
                  value={ratingForm.pagoAuto}
                  onChange={event => handleModeloForm('pagoAuto', event.target.value)}
                />
                <TextField
                  label='Estimado de gastos mensuales'
                  type='number'
                  value={ratingForm.gastosMensualesEstimados}
                  onChange={event => handleModeloForm('gastosMensualesEstimados', event.target.value)}
                />
                <TextField
                  label='Deudas actuales pagos mínimos'
                  type='number'
                  value={ratingForm.deudasActualesPagosMinimos}
                  onChange={event => handleModeloForm('deudasActualesPagosMinimos', event.target.value)}
                />
                <TextField
                  label='Otras deudas mensuales'
                  type='number'
                  value={ratingForm.otrasDeudasMensuales}
                  onChange={event => handleModeloForm('otrasDeudasMensuales', event.target.value)}
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

      <Dialog open={aprobacionDialogOpen} onClose={closeAprobacionDialog} fullWidth maxWidth='sm'>
        <DialogTitle>Aprobar solicitud</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {aprobacionDialogError ? <Alert severity='error'>{aprobacionDialogError}</Alert> : null}
            <Typography color='text.secondary'>
              Carga el contrato de aceptación del crédito firmado por ambas partes (PDF) y confirma para aprobar.
            </Typography>
            <Button variant='outlined' component='label' disabled={processingId === solicitudAprobacion?.id}>
              Cargar contrato (PDF)
              <input hidden type='file' accept='application/pdf,.pdf' onChange={handleContratoAprobacionFile} />
            </Button>
            <Typography variant='caption' color='text.secondary'>
              {contratoAprobacionFile ? `Archivo seleccionado: ${contratoAprobacionFile.name}` : 'Aún no has cargado el contrato.'}
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant='text' onClick={closeAprobacionDialog} disabled={processingId === solicitudAprobacion?.id}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='success'
            onClick={() => runAprobacion(solicitudAprobacion, contratoAprobacionFile)}
            disabled={!solicitudAprobacion || !contratoAprobacionFile || processingId === solicitudAprobacion?.id}
          >
            {processingId === solicitudAprobacion?.id ? 'Aprobando...' : 'Aprobar solicitud'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={Boolean(resultadoModelo)} onClose={() => setResultadoModelo(null)} fullWidth maxWidth='lg'>
        <DialogTitle>Resultado del modelo</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {resumen?.decision ? (
              <Alert
                severity={
                  decisionEstado === 'APROBADO' || decisionEstado === 'APPROVED'
                    ? 'success'
                    : decisionEstado === 'RECHAZADO' || decisionEstado === 'REJECTED'
                      ? 'error'
                      : 'warning'
                }
              >
                {resumen.decision}
              </Alert>
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
