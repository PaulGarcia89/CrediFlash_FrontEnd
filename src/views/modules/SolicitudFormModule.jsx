'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { listarClientes } from '@/api/clientes'
import { actualizarSolicitud, crearSolicitud, obtenerSolicitud } from '@/api/solicitudes'

const MODELO_OPTIONS = ['CLIENTE_NUEVO', 'CLIENTE_ANTIGUO']
const MODELO_APROBACION_OPTIONS = ['AUTOMATICO', 'MANUAL']
const MODALIDAD_OPTIONS = [
  { value: 'SEMANAL', label: 'WEEKLY (SEMANAL)' },
  { value: 'QUINCENAL', label: 'FORTNIGHTLY (QUINCENAL)' },
  { value: 'MENSUAL', label: 'MONTHLY (MENSUAL)' }
]
const DESTINO_OPTIONS = [
  { value: 'salud', label: 'SALUD (HEALTH)' },
  { value: 'inversion', label: 'INVERSION (INVESTMENT)' },
  { value: 'pago_deuda', label: 'PAGOS DE DEUDAS (DEBT PAYMENTS)' },
  { value: 'educacion', label: 'EDUCACION (EDUCATION)' },
  { value: 'otros', label: 'OTROS (OTHERS)' }
]
const MONTO_RANGOS = [
  { min: 100, max: 500, label: '100 - 500' },
  { min: 500, max: 1000, label: '500 - 1000' },
  { min: 1000, max: 1500, label: '1000 - 1500' },
  { min: 1500, max: 2000, label: '1500 - 2000' }
]
const STEP_LABELS = [
  'Cliente',
  'Condiciones del crédito',
  'Modelos',
  'Documento de identidad',
  'Estado de cuenta'
]
const STEP_DESCRIPTIONS = [
  'Selecciona el cliente activo al que pertenece esta solicitud.',
  'Define monto, modalidad, plazo, tasa y destino del crédito.',
  'Configura el modelo de calificación y aprobación.',
  'Carga un documento de identidad del cliente (ID, licencia o pasaporte).',
  'Carga los estados de cuenta del cliente en formato PDF.'
]

const initialForm = {
  cliente_id: '',
  monto_solicitado: '',
  modalidad: 'SEMANAL',
  plazo_semanas: '',
  tasa_variable_pct: '',
  modelo_calificacion: 'CLIENTE_NUEVO',
  modelo_aprobacion: 'AUTOMATICO',
  destino: ''
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
    total: Number(source?.total || 0)
  }
}

const extractSolicitudId = payload =>
  payload?.data?.id || payload?.id || payload?.data?.solicitud_id || payload?.solicitud_id || ''

const clienteOptionLabel = cliente => {
  const nombre = [cliente?.nombre, cliente?.apellido].filter(Boolean).join(' ')

  return `${nombre || 'Sin nombre'} — ${cliente?.telefono || 'Sin teléfono'} — ${cliente?.email || 'Sin email'}`
}

const calculateTasaVariable = (tasaPct, modalidad, plazoSemanas) => {
  const baseRate = Number(tasaPct || 0) / 100
  const normalizedModalidad = String(modalidad || 'SEMANAL').toUpperCase()
  const semanas = Number(plazoSemanas || 0)

  if (normalizedModalidad === 'QUINCENAL') {
    return baseRate * 2
  }

  if (normalizedModalidad === 'MENSUAL') {
    const meses = Math.max(Math.ceil(semanas / 4), 1)

    return baseRate / meses
  }

  return baseRate
}

export default function SolicitudFormModule({ solicitudId = null }) {
  const router = useRouter()

  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(Boolean(solicitudId))
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [clienteValue, setClienteValue] = useState(null)
  const [clienteSearch, setClienteSearch] = useState('')
  const [clientePage, setClientePage] = useState(1)
  const [clientesOptions, setClientesOptions] = useState([])
  const [clientesLoading, setClientesLoading] = useState(false)
  const [clientesPagination, setClientesPagination] = useState({ page: 1, pages: 1, total: 0 })

  const [activeStep, setActiveStep] = useState(0)
  const [stepAttempted, setStepAttempted] = useState({})
  const [documentoIdentidad, setDocumentoIdentidad] = useState(null)
  const [documentosEstadoCuenta, setDocumentosEstadoCuenta] = useState([])
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })

  const canLoadMoreClientes = useMemo(
    () => clientesPagination.page < clientesPagination.pages,
    [clientesPagination.page, clientesPagination.pages]
  )
  const flowSteps = useMemo(() => (solicitudId ? STEP_LABELS.slice(0, 3) : STEP_LABELS), [solicitudId])

  useEffect(() => {
    if (!solicitudId) return

    const fetchSolicitud = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await obtenerSolicitud(solicitudId)
        const solicitud = response?.data || response
        const cliente = solicitud?.cliente || null
        const tasaPct = Number(solicitud?.tasa_variable || 0) * 100

        setForm({
          cliente_id: solicitud?.cliente_id || '',
          monto_solicitado: solicitud?.monto_solicitado || '',
          modalidad: String(solicitud?.modalidad || 'SEMANAL').toUpperCase(),
          plazo_semanas: solicitud?.plazo_semanas || '',
          tasa_variable_pct: Number.isFinite(tasaPct) ? String(tasaPct) : '',
          modelo_calificacion: solicitud?.modelo_calificacion || 'CLIENTE_NUEVO',
          modelo_aprobacion: solicitud?.modelo_aprobacion || 'AUTOMATICO',
          destino: solicitud?.destino || ''
        })

        if (cliente?.id) {
          setClienteValue(cliente)
          setClientesOptions(previous => {
            const exists = previous.some(item => item.id === cliente.id)

            if (exists) return previous

            return [cliente, ...previous]
          })
        }
      } catch (err) {
        setError(err.message || 'No se pudo cargar la solicitud.')
      } finally {
        setLoading(false)
      }
    }

    fetchSolicitud()
  }, [solicitudId])

  const loadClientesActivos = useCallback(async (pageValue, searchValue, append = false) => {
    setClientesLoading(true)

    try {
      const response = await listarClientes({
        page: pageValue,
        limit: 100,
        search: searchValue,
        estado: 'ACTIVO'
      })

      const rows = extractRows(response)

      setClientesOptions(previous => {
        if (!append) return rows

        const map = new Map(previous.map(item => [item.id, item]))

        rows.forEach(item => map.set(item.id, item))

        return Array.from(map.values())
      })

      setClientesPagination(extractPagination(response))
    } catch {
      setSnackbar({ open: true, message: 'No se pudieron cargar clientes activos.' })
    } finally {
      setClientesLoading(false)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClientePage(1)
      loadClientesActivos(1, clienteSearch, false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [clienteSearch, loadClientesActivos])

  const handleLoadMoreClientes = async () => {
    const nextPage = clientePage + 1

    setClientePage(nextPage)
    await loadClientesActivos(nextPage, clienteSearch, true)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setForm(previous => ({ ...previous, [name]: value }))
  }

  const validatePdfFiles = ({ selected, min = 0, max = 3 }) => {
    if (selected.length < min || selected.length > max) {
      return `Debes cargar entre ${min} y ${max} documento(s) PDF.`
    }

    const invalidType = selected.find(file => {
      const mime = String(file?.type || '').toLowerCase()
      const name = String(file?.name || '').toLowerCase()

      return mime !== 'application/pdf' && !name.endsWith('.pdf')
    })

    if (invalidType) {
      return 'Solo se permiten documentos en formato PDF.'
    }

    const oversized = selected.find(file => file.size > 10 * 1024 * 1024)

    if (oversized) {
      return 'Cada documento debe pesar máximo 10MB.'
    }

    return ''
  }

  const handleDocumentoIdentidad = event => {
    const selected = Array.from(event.target.files || [])
    const validationError = validatePdfFiles({ selected, min: 1, max: 1 })

    if (validationError) {
      setSnackbar({ open: true, message: validationError })

      return
    }

    setDocumentoIdentidad(selected[0] || null)
  }

  const handleEstadoCuentaFiles = event => {
    const selected = Array.from(event.target.files || [])
    const validationError = validatePdfFiles({ selected, min: 1, max: 2 })

    if (validationError) {
      setSnackbar({ open: true, message: validationError })

      return
    }

    setDocumentosEstadoCuenta(selected)
  }

  const validateCurrentStep = () => {
    if (solicitudId && activeStep >= 3) return true

    if (activeStep === 0) return Boolean(form.cliente_id)

    if (activeStep === 1) {
      const monto = Number(form.monto_solicitado || 0)
      const plazo = Number(form.plazo_semanas || 0)
      const tasa = Number(form.tasa_variable_pct || 0)

      return Boolean(monto > 0 && plazo > 0 && tasa > 0 && form.modalidad && String(form.destino || '').trim())
    }

    if (activeStep === 2) {
      return Boolean(form.modelo_calificacion && form.modelo_aprobacion)
    }

    if (activeStep === 3) {
      return Boolean(documentoIdentidad)
    }

    if (activeStep === 4) {
      return documentosEstadoCuenta.length >= 1
    }

    return true
  }

  const isStepCompleted = stepIndex => {
    if (stepIndex === 0) return Boolean(form.cliente_id)

    if (stepIndex === 1) {
      const monto = Number(form.monto_solicitado || 0)
      const plazo = Number(form.plazo_semanas || 0)
      const tasa = Number(form.tasa_variable_pct || 0)

      return Boolean(monto > 0 && plazo > 0 && tasa > 0 && form.modalidad && String(form.destino || '').trim())
    }

    if (stepIndex === 2) {
      return Boolean(form.modelo_calificacion && form.modelo_aprobacion)
    }

    if (stepIndex === 3) return Boolean(documentoIdentidad)
    if (stepIndex === 4) return documentosEstadoCuenta.length >= 1

    return false
  }

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setError('')
      setActiveStep(previous => Math.min(previous + 1, flowSteps.length - 1))

      return
    }

    setStepAttempted(previous => ({ ...previous, [activeStep]: true }))

    const stepMessages = [
      'Debes seleccionar un cliente para continuar.',
      'Completa monto, modalidad, plazo, tasa y destino para continuar.',
      'Debes completar modelo de calificación y modelo de aprobación.',
      'Debes cargar un documento de identidad (licencia o pasaporte) en PDF.',
      'Debes cargar 1 o 2 estados de cuenta en PDF.'
    ]

    setError(stepMessages[activeStep] || 'Completa los campos requeridos para continuar.')
  }

  const handleBackStep = () => {
    setError('')
    setActiveStep(previous => Math.max(previous - 1, 0))
  }

  const handleSubmit = async () => {
    if (activeStep < flowSteps.length - 1) return

    setStepAttempted(previous => ({ ...previous, [activeStep]: true }))

    setSaving(true)
    setError('')

    try {
      if (!form.cliente_id) {
        throw new Error('Debes seleccionar un cliente activo.')
      }

      if (!form.modalidad) {
        throw new Error('Debes seleccionar una modalidad de préstamo.')
      }

      if (!solicitudId) {
        if (!documentoIdentidad) {
          throw new Error('Debes cargar el documento de identidad (licencia o pasaporte) en PDF.')
        }

        if (documentosEstadoCuenta.length < 1) {
          throw new Error('Debes cargar 1 o 2 estados de cuenta en PDF.')
        }
      }

      const tasaVariablePct = Number(form.tasa_variable_pct || 0)

      if (!Number.isFinite(tasaVariablePct) || tasaVariablePct < 1 || tasaVariablePct > 100) {
        throw new Error('La tasa variable (%) debe estar entre 1 y 100.')
      }

      const tasaVariableBase = tasaVariablePct / 100
      const tasaVariable = solicitudId
        ? tasaVariableBase
        : calculateTasaVariable(form.tasa_variable_pct, form.modalidad, form.plazo_semanas)

      if (!Number.isFinite(tasaVariable) || tasaVariable <= 0) {
        throw new Error('No se pudo calcular una tasa válida para la modalidad seleccionada.')
      }

      if (solicitudId) {
        await actualizarSolicitud(solicitudId, {
          cliente_id: form.cliente_id,
          monto_solicitado: Number(form.monto_solicitado || 0),
          modalidad: form.modalidad,
          plazo_semanas: Number(form.plazo_semanas || 0),
          tasa_variable: tasaVariable,
          modelo_calificacion: form.modelo_calificacion,
          modelo_aprobacion: form.modelo_aprobacion,
          destino: form.destino
        })
      } else {
        let created

        const payload = new FormData()

        payload.append('cliente_id', form.cliente_id)
        payload.append('monto_solicitado', String(Number(form.monto_solicitado || 0)))
        payload.append('modalidad', form.modalidad)
        payload.append('plazo_semanas', String(Number(form.plazo_semanas || 0)))
        payload.append('tasa_variable', String(tasaVariable))
        payload.append('modelo_calificacion', form.modelo_calificacion)
        payload.append('modelo_aprobacion', form.modelo_aprobacion)
        payload.append('destino', form.destino)
        payload.append('tipo_documento_identidad', 'ID')
        payload.append('tipo_documentos_estado_cuenta', 'ESTADO_CUENTA')

        ;[documentoIdentidad, ...documentosEstadoCuenta].forEach(file => {
          if (file) payload.append('documentos', file)
        })

        created = await crearSolicitud(payload)

        const createdSolicitudId = extractSolicitudId(created)
        const params = new URLSearchParams()

        if (createdSolicitudId) params.set('focusSolicitudId', String(createdSolicitudId))
        if (form.cliente_id) params.set('focusClienteId', String(form.cliente_id))

        router.replace(`/solicitudes?${params.toString()}`)

        return
      }

      router.replace('/solicitudes')
    } catch (err) {
      setError(err.message || 'No se pudo guardar la solicitud.')
    } finally {
      setSaving(false)
    }
  }

  const isStepFieldMissing = field => {
    const attempted = Boolean(stepAttempted[activeStep])
    if (!attempted) return false

    if (activeStep === 0) return field === 'cliente_id' && !String(form.cliente_id || '').trim()

    if (activeStep === 1) {
      if (field === 'monto_solicitado') return !(Number(form.monto_solicitado || 0) > 0)
      if (field === 'plazo_semanas') return !(Number(form.plazo_semanas || 0) > 0)
      if (field === 'tasa_variable_pct') return !(Number(form.tasa_variable_pct || 0) > 0)
      if (field === 'destino') return !String(form.destino || '').trim()
      if (field === 'modalidad') return !String(form.modalidad || '').trim()
    }

    if (activeStep === 2) {
      if (field === 'modelo_calificacion') return !String(form.modelo_calificacion || '').trim()
      if (field === 'modelo_aprobacion') return !String(form.modelo_aprobacion || '').trim()
    }

    if (activeStep === 3) return field === 'documento_identidad' && !documentoIdentidad
    if (activeStep === 4) return field === 'estado_cuenta' && documentosEstadoCuenta.length < 1

    return false
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#d9e6d7',
          borderRadius: 2,
          p: { xs: 1.5, md: 3 }
        }}
      >
        <Stack spacing={3}>
          <Card
            sx={{
              borderTop: theme => `10px solid ${theme.palette.primary.main}`,
              borderRadius: 3
            }}
          >
          <CardContent>
            <Stack spacing={1}>
              <Typography variant='h3' sx={{ fontWeight: 800 }}>
                CUSTOMER PRE-QUALIFICATION
              </Typography>
              <Typography variant='h3' sx={{ fontWeight: 800 }}>
                PRECALIFICACION DE CLIENTES
              </Typography>
              <Typography color='text.secondary'>
                Complete este formulario para evaluar su solicitud de préstamo. Toda la información será tratada de manera
                confidencial y usada únicamente para evaluación crediticia.
              </Typography>
              <Typography color='error.main' sx={{ fontWeight: 700 }}>
                * Indica que la pregunta es obligatoria
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ xs: 'start', md: 'center' }}
          spacing={2}
        >
          <Box>
            <Typography variant='h4' sx={{ mb: 0.5 }}>
              {solicitudId ? 'Editar solicitud' : 'Agregar una nueva solicitud'}
            </Typography>
            <Typography color='text.secondary'>
              {solicitudId
                ? 'Actualiza los datos de la solicitud pendiente.'
                : 'Registra una solicitud para el flujo de evaluación y aprobación.'}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1.5} flexWrap='wrap'>
            <Button variant='tonal' color='secondary' onClick={() => router.push('/solicitudes')} disabled={saving}>
              Descartar
            </Button>
            <Button
              variant='tonal'
              color='primary'
              type='button'
              disabled={saving || loading}
              onClick={() => window.localStorage.setItem('solicitud_draft', JSON.stringify(form))}
            >
              Guardar borrador
            </Button>
            {activeStep === flowSteps.length - 1 ? (
              <Button variant='contained' type='button' onClick={handleSubmit} disabled={saving || loading}>
                {saving ? 'Guardando...' : solicitudId ? 'Actualizar solicitud' : 'Publicar solicitud'}
              </Button>
            ) : (
              <Button variant='contained' type='button' disabled={saving || loading} onClick={handleNextStep}>
                Siguiente
              </Button>
            )}
          </Stack>
        </Stack>

        {error ? <Alert severity='error'>{error}</Alert> : null}
        {loading ? <Alert severity='info'>Cargando solicitud...</Alert> : null}

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={3}>
              <Card sx={{ borderRadius: 3 }}>
                <CardHeader title='Información de la solicitud' />
                <Divider />
                <CardContent>
                  <Stack spacing={2.5}>
                    <Stack spacing={1}>
                      <Typography variant='h6'>
                        Sección {activeStep + 1} de {flowSteps.length}: {flowSteps[activeStep]}
                      </Typography>
                      <Typography color='text.secondary'>{STEP_DESCRIPTIONS[activeStep]}</Typography>
                      <LinearProgress
                        variant='determinate'
                        value={((activeStep + 1) / flowSteps.length) * 100}
                        sx={{ borderRadius: 999, height: 8 }}
                      />
                    </Stack>

                    <Stack
                      direction={{ xs: 'column', md: 'row' }}
                      justifyContent='space-between'
                      alignItems={{ xs: 'flex-start', md: 'center' }}
                      spacing={1.5}
                    >
                      <Typography variant='h6'>
                        Paso {activeStep + 1} de {flowSteps.length}
                      </Typography>
                      <Stack direction='row' spacing={1} flexWrap='wrap'>
                        {flowSteps.map((label, index) => {
                          const completed = isStepCompleted(index)
                          const isActive = index === activeStep

                          return (
                            <Box
                              key={`resume-step-${label}`}
                              sx={{
                                px: 1.25,
                                py: 0.5,
                                borderRadius: 1,
                                border: theme => `1px solid ${theme.palette.divider}`,
                                bgcolor: isActive ? 'primary.lighter' : 'background.paper',
                                color: completed ? 'success.main' : 'text.secondary',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.75
                              }}
                            >
                              <i className={completed ? 'tabler-circle-check text-base' : 'tabler-circle text-base'} />
                              <Typography variant='caption' sx={{ fontWeight: 600 }}>
                                {label}
                              </Typography>
                            </Box>
                          )
                        })}
                      </Stack>
                    </Stack>

                    <Stepper activeStep={activeStep} alternativeLabel>
                      {flowSteps.map(label => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    {activeStep === 0 ? (
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                          <Typography variant='h5' sx={{ fontWeight: 700, mb: 0.5 }}>
                            FULL NAME * / NOMBRE COMPLETO
                          </Typography>
                          <Typography color='text.secondary' sx={{ mb: 1.5 }}>
                            Selecciona el cliente activo en el listado.
                          </Typography>
                          <Autocomplete
                            options={clientesOptions}
                            value={clienteValue}
                            loading={clientesLoading}
                            disabled={Boolean(solicitudId)}
                            onChange={(_, value) => {
                              setClienteValue(value)
                              setForm(previous => ({ ...previous, cliente_id: value?.id || '' }))
                            }}
                            onInputChange={(_, value) => {
                              setClienteSearch(value)
                            }}
                            getOptionLabel={option => clienteOptionLabel(option)}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            renderInput={params => (
                              <TextField
                                {...params}
                                label='Cliente activo'
                                placeholder='Buscar por teléfono o email'
                                required
                                error={isStepFieldMissing('cliente_id')}
                                helperText={
                                  isStepFieldMissing('cliente_id')
                                    ? 'Campo obligatorio'
                                    : 'Ejemplo: Juan Pérez — 8090000000 — cliente@correo.com'
                                }
                              />
                            )}
                          />
                          {canLoadMoreClientes ? (
                            <Box mt={1}>
                              <Button
                                variant='text'
                                size='small'
                                onClick={handleLoadMoreClientes}
                                disabled={clientesLoading}
                              >
                                Cargar más clientes
                              </Button>
                            </Box>
                          ) : null}
                        </Grid>
                      </Grid>
                    ) : null}

                    {activeStep === 1 ? (
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                          <FormControl
                            fullWidth
                            required
                            error={isStepFieldMissing('destino')}
                            sx={{
                              p: 2,
                              border: theme => `1px solid ${theme.palette.divider}`,
                              borderRadius: 2
                            }}
                          >
                            <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1.05rem', fontWeight: 700 }}>
                              DESTINATION OF THE REQUEST * / DESTINO DE LA SOLICITUD
                            </FormLabel>
                            <RadioGroup name='destino' value={form.destino} onChange={handleChange}>
                              {DESTINO_OPTIONS.map(option => (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}
                                />
                              ))}
                            </RadioGroup>
                            <Typography variant='caption' color={isStepFieldMissing('destino') ? 'error.main' : 'text.secondary'}>
                              {isStepFieldMissing('destino')
                                ? 'Campo obligatorio'
                                : 'Selecciona una opción de destino de crédito.'}
                            </Typography>
                          </FormControl>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <FormControl
                            fullWidth
                            required
                            error={isStepFieldMissing('modalidad')}
                            sx={{
                              p: 2,
                              border: theme => `1px solid ${theme.palette.divider}`,
                              borderRadius: 2
                            }}
                          >
                            <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1.05rem', fontWeight: 700 }}>
                              TYPE OF PAYMENT * / TIPO DE PAGO
                            </FormLabel>
                            <RadioGroup name='modalidad' value={form.modalidad} onChange={handleChange}>
                              {MODALIDAD_OPTIONS.map(option => (
                                <FormControlLabel
                                  key={option.value}
                                  value={option.value}
                                  control={<Radio />}
                                  label={option.label}
                                />
                              ))}
                            </RadioGroup>
                            <Typography variant='caption' color={isStepFieldMissing('modalidad') ? 'error.main' : 'text.secondary'}>
                              {isStepFieldMissing('modalidad')
                                ? 'Campo obligatorio'
                                : 'Semanal, quincenal o mensual.'}
                            </Typography>
                          </FormControl>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            label='APPLICATION AMOUNT * / MONTO DE SU SOLICITUD'
                            name='monto_solicitado'
                            type='number'
                            value={form.monto_solicitado}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={isStepFieldMissing('monto_solicitado')}
                            helperText={
                              isStepFieldMissing('monto_solicitado') ? 'Campo obligatorio' : 'Ejemplo: 2000'
                            }
                          />
                          <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap' mt={1}>
                            {MONTO_RANGOS.map(rango => (
                              <Button
                                key={rango.label}
                                size='small'
                                variant='tonal'
                                onClick={() =>
                                  setForm(previous => ({
                                    ...previous,
                                    monto_solicitado: String(rango.max)
                                  }))
                                }
                              >
                                {rango.label}
                              </Button>
                            ))}
                          </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            label='TERM IN WEEKS * / PLAZO (SEMANAS)'
                            name='plazo_semanas'
                            type='number'
                            value={form.plazo_semanas}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={isStepFieldMissing('plazo_semanas')}
                            helperText={
                              isStepFieldMissing('plazo_semanas') ? 'Campo obligatorio' : 'Ejemplo: 8'
                            }
                          />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            label='VARIABLE RATE (%) * / TASA VARIABLE (%)'
                            name='tasa_variable_pct'
                            type='number'
                            value={form.tasa_variable_pct}
                            onChange={handleChange}
                            inputProps={{ min: 1, max: 100 }}
                            fullWidth
                            required
                            error={isStepFieldMissing('tasa_variable_pct')}
                            helperText={
                              isStepFieldMissing('tasa_variable_pct') ? 'Campo obligatorio' : 'Ejemplo: 23'
                            }
                          />
                        </Grid>
                      </Grid>
                    ) : null}

                    {activeStep === 2 ? (
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            select
                            label='Modelo de calificación *'
                            name='modelo_calificacion'
                            value={form.modelo_calificacion}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={isStepFieldMissing('modelo_calificacion')}
                            helperText={
                              isStepFieldMissing('modelo_calificacion')
                                ? 'Campo obligatorio'
                                : 'Ejemplo: CLIENTE_NUEVO'
                            }
                          >
                            {MODELO_OPTIONS.map(model => (
                              <MenuItem key={model} value={model}>
                                {model}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <TextField
                            select
                            label='Modelo de aprobación *'
                            name='modelo_aprobacion'
                            value={form.modelo_aprobacion}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={isStepFieldMissing('modelo_aprobacion')}
                            helperText={
                              isStepFieldMissing('modelo_aprobacion')
                                ? 'Campo obligatorio'
                                : 'Ejemplo: AUTOMATICO'
                            }
                          >
                            {MODELO_APROBACION_OPTIONS.map(model => (
                              <MenuItem key={model} value={model}>
                                {model}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      </Grid>
                    ) : null}

                    {activeStep === 3 && !solicitudId ? (
                      <Stack
                        spacing={1.5}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: theme => `1px solid ${theme.palette.divider}`,
                          bgcolor: 'background.default'
                        }}
                      >
                        <Typography variant='h5' sx={{ fontWeight: 700 }}>
                          IMPORTANT (FILE) * / ARCHIVOS (IMPORTANTE)
                        </Typography>
                        <Typography color={isStepFieldMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
                          UPLOAD IDENTIFICATION (ID) / SUBIR IDENTIFICACION (ID)
                        </Typography>
                        <Button variant='outlined' component='label'>
                          Cargar documento ID (obligatorio)
                          <input hidden type='file' accept='application/pdf,.pdf' onChange={handleDocumentoIdentidad} />
                        </Button>
                        <Typography
                          variant='caption'
                          color={isStepFieldMissing('documento_identidad') ? 'error.main' : 'text.secondary'}
                        >
                          {documentoIdentidad ? `Archivo seleccionado: ${documentoIdentidad.name}` : 'Aún no has cargado el documento ID.'}
                        </Typography>
                      </Stack>
                    ) : null}

                    {activeStep === 4 && !solicitudId ? (
                      <Stack
                        spacing={1.5}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: theme => `1px solid ${theme.palette.divider}`,
                          bgcolor: 'background.default'
                        }}
                      >
                        <Typography variant='h5' sx={{ fontWeight: 700 }}>
                          HOW MANY BANK STATEMENTS * / ESTADOS DE CUENTAS BANCARIOS
                        </Typography>
                        <Typography color='text.secondary'>
                          LAST 2 MONTHS / ULTIMOS 2 MESES
                        </Typography>
                        <Typography color={isStepFieldMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                          Sube hasta 2 archivos compatibles. Tamaño máximo por archivo: 10MB.
                        </Typography>
                        <Button variant='outlined' component='label'>
                          Cargar estados de cuenta (1 o 2)
                          <input hidden type='file' accept='application/pdf,.pdf' multiple onChange={handleEstadoCuentaFiles} />
                        </Button>
                        <Typography variant='caption' color={isStepFieldMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                          {documentosEstadoCuenta.length
                            ? `${documentosEstadoCuenta.length} archivo(s) seleccionado(s)`
                            : 'No hay estados de cuenta cargados'}
                        </Typography>
                      </Stack>
                    ) : null}
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3}>
              <Card>
                <CardHeader title='Acciones' />
                <Divider />
                <CardContent>
                  <Stack spacing={1.5}>
                    <Button variant='outlined' onClick={handleBackStep} disabled={saving || loading || activeStep === 0} fullWidth>
                      Anterior
                    </Button>
                    {activeStep === flowSteps.length - 1 ? (
                      <Button variant='contained' type='button' onClick={handleSubmit} disabled={saving || loading} fullWidth>
                        {saving ? 'Guardando...' : solicitudId ? 'Actualizar solicitud' : 'Publicar solicitud'}
                      </Button>
                    ) : (
                      <Button variant='contained' type='button' onClick={handleNextStep} disabled={saving || loading} fullWidth>
                        Siguiente
                      </Button>
                    )}
                    <Button variant='outlined' onClick={() => router.push('/solicitudes')} disabled={saving} fullWidth>
                      Cancelar
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
        </Stack>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ open: false, message: '' })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity='warning' variant='filled'>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  )
}
