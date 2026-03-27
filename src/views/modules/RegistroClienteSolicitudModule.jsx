'use client'

import { useEffect, useMemo, useState } from 'react'

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
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import {
  crearCliente,
  crearClientePublico,
  enviarCodigoVerificacionEmailCliente,
  enviarCodigoVerificacionEmailClientePublico,
  listarClientes,
  listarClientesReferiblesPublico,
  verificarCodigoEmailCliente
  verificarCodigoEmailClientePublico
} from '@/api/clientes'
import { crearSolicitud, crearSolicitudPublica } from '@/api/solicitudes'

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

const initialForm = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  direccion: '',
  es_referido: false,
  referido_por: '',
  referido_externo: '',
  monto_referido: '0',
  nombre_contacto: '',
  apellido_contacto: '',
  telefono_contacto: '',
  email_contacto: '',
  direccion_contacto: '',
  observaciones: '',
  monto_solicitado: '',
  modalidad: 'SEMANAL',
  plazo_semanas: '',
  tasa_variable_pct: '',
  modelo_calificacion: 'CLIENTE_NUEVO',
  modelo_aprobacion: 'AUTOMATICO',
  destino: 'inversion'
}

const isValidEmailFormat = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())
const parseBoolean = value => value === true || value === 1 || String(value || '').toLowerCase() === 'true'
const normalizeText = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const getClienteId = cliente =>
  String(cliente?.id || cliente?.cliente_id || cliente?.uuid || cliente?._id || cliente?.clienteId || '')
const getClienteLabel = cliente => [cliente?.nombre, cliente?.apellido].filter(Boolean).join(' ').trim()
const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows

  return []
}

const calculateTasaVariable = (tasaPct, modalidad, plazoSemanas) => {
  const baseRate = Number(tasaPct || 0) / 100
  const normalizedModalidad = String(modalidad || 'SEMANAL').toUpperCase()
  const semanas = Number(plazoSemanas || 0)

  if (normalizedModalidad === 'QUINCENAL') return baseRate * 2

  if (normalizedModalidad === 'MENSUAL') {
    const meses = Math.max(Math.ceil(semanas / 4), 1)

    return baseRate / meses
  }

  return baseRate
}

const extractClienteIdFromPayload = payload =>
  payload?.data?.id || payload?.id || payload?.data?.cliente_id || payload?.cliente_id || ''
const extractSolicitudIdFromPayload = payload =>
  payload?.data?.id || payload?.id || payload?.data?.solicitud_id || payload?.solicitud_id || ''

export default function RegistroClienteSolicitudModule({ publicMode = false }) {
  const router = useRouter()

  const [form, setForm] = useState(initialForm)
  const [clientesActivos, setClientesActivos] = useState([])
  const [loadingReferidos, setLoadingReferidos] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })

  const [documentoIdentidad, setDocumentoIdentidad] = useState(null)
  const [documentosEstadoCuenta, setDocumentosEstadoCuenta] = useState([])

  const [emailVerificationCode, setEmailVerificationCode] = useState('')
  const [emailVerificationSent, setEmailVerificationSent] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [verifiedEmail, setVerifiedEmail] = useState('')
  const [emailVerificationLoading, setEmailVerificationLoading] = useState(false)
  const [emailCodeValidationLoading, setEmailCodeValidationLoading] = useState(false)
  const [emailVerificationMessage, setEmailVerificationMessage] = useState('')

  useEffect(() => {
    const loadClientesActivos = async () => {
      setLoadingReferidos(true)

      try {
        const response = publicMode
          ? await listarClientesReferiblesPublico({ page: 1, limit: 500, search: '' })
          : await listarClientes({ page: 1, limit: 500, search: '', estado: 'ACTIVO' })

        setClientesActivos(extractRows(response))
      } catch {
        setClientesActivos([])
      } finally {
        setLoadingReferidos(false)
      }
    }

    loadClientesActivos()
  }, [publicMode])

  const referidoSelected = useMemo(() => {
    const selected = String(form.referido_por || '')

    return (
      clientesActivos.find(item => getClienteId(item) === selected || normalizeText(getClienteLabel(item)) === normalizeText(selected)) ||
      null
    )
  }, [clientesActivos, form.referido_por])

  const handleChange = event => {
    const { name, value } = event.target

    if (name === 'es_referido') {
      const isReferido = value === 'SI'

      setForm(previous => ({
        ...previous,
        es_referido: isReferido,
        referido_por: isReferido ? previous.referido_por : '',
        referido_externo: isReferido ? previous.referido_externo : '',
        monto_referido: isReferido ? previous.monto_referido : '0'
      }))

      return
    }

    setForm(previous => ({ ...previous, [name]: value }))
  }

  const isRequiredMissing = field => {
    if (!submitAttempted) return false

    if (field === 'nombre') return !String(form.nombre || '').trim()
    if (field === 'apellido') return !String(form.apellido || '').trim()
    if (field === 'email') return !String(form.email || '').trim()
    if (field === 'referido_por') {
      if (!Boolean(form.es_referido)) return false

      return !String(form.referido_por || '').trim() && !String(form.referido_externo || '').trim()
    }
    if (field === 'monto_solicitado') return !(Number(form.monto_solicitado || 0) > 0)
    if (field === 'modalidad') return !String(form.modalidad || '').trim()
    if (field === 'plazo_semanas') return !(Number(form.plazo_semanas || 0) > 0)
    if (field === 'tasa_variable_pct') return !(Number(form.tasa_variable_pct || 0) > 0)
    if (field === 'destino') return !String(form.destino || '').trim()
    if (field === 'modelo_calificacion') return !String(form.modelo_calificacion || '').trim()
    if (field === 'modelo_aprobacion') return !String(form.modelo_aprobacion || '').trim()
    if (field === 'documento_identidad') return !documentoIdentidad
    if (field === 'estado_cuenta') return documentosEstadoCuenta.length < 1

    return false
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

    if (invalidType) return 'Solo se permiten documentos en formato PDF.'

    const oversized = selected.find(file => file.size > 10 * 1024 * 1024)

    if (oversized) return 'Cada documento debe pesar máximo 10MB.'

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

  const handleSendVerificationCode = async () => {
    const email = String(form.email || '').trim().toLowerCase()

    setError('')
    setEmailVerificationMessage('')

    if (!email) {
      setError('Ingresa un correo para enviar código de verificación.')

      return
    }

    if (!isValidEmailFormat(email)) {
      setError('Ingresa un correo con formato válido.')

      return
    }

    setEmailVerificationLoading(true)

    try {
      if (publicMode) {
        await enviarCodigoVerificacionEmailClientePublico(email)
      } else {
        await enviarCodigoVerificacionEmailCliente(email)
      }
      setEmailVerificationSent(true)
      setEmailVerificationMessage('Código de verificación enviado al correo.')
    } catch (err) {
      setError(err.message || 'No se pudo enviar el código de verificación.')
    } finally {
      setEmailVerificationLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    const email = String(form.email || '').trim().toLowerCase()
    const codigo = String(emailVerificationCode || '').trim()

    setError('')
    setEmailVerificationMessage('')

    if (!email || !isValidEmailFormat(email)) {
      setError('Debes ingresar un correo válido antes de verificar.')

      return
    }

    if (!codigo) {
      setError('Ingresa el código de verificación recibido por correo.')

      return
    }

    setEmailCodeValidationLoading(true)

    try {
      if (publicMode) {
        await verificarCodigoEmailClientePublico(email, codigo)
      } else {
        await verificarCodigoEmailCliente(email, codigo)
      }
      setEmailVerified(true)
      setVerifiedEmail(email)
      setEmailVerificationMessage('Correo verificado correctamente.')
    } catch (err) {
      setEmailVerified(false)
      setVerifiedEmail('')
      setError(err.message || 'No se pudo verificar el código.')
    } finally {
      setEmailCodeValidationLoading(false)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setSubmitAttempted(true)
    setSaving(true)
    setError('')

    try {
      const email = String(form.email || '').trim().toLowerCase()

      if (!String(form.nombre || '').trim()) throw new Error('Debes completar el nombre.')
      if (!String(form.apellido || '').trim()) throw new Error('Debes completar el apellido.')
      if (!email) throw new Error('Debes ingresar un correo para registrar y verificar el cliente.')
      if (!isValidEmailFormat(email)) throw new Error('Ingresa un correo con formato válido.')
      if (!emailVerified || verifiedEmail !== email) throw new Error('Debes verificar el correo con código antes de publicar.')

      const montoReferido = Number(String(form.monto_referido || '0').replace(',', '.'))

      if (!Number.isFinite(montoReferido) || montoReferido < 0) {
        throw new Error('El monto referido debe ser un valor mayor o igual a 0.')
      }

      if (!(Number(form.monto_solicitado || 0) > 0)) throw new Error('Debes ingresar un monto solicitado mayor a 0.')
      if (!(Number(form.plazo_semanas || 0) > 0)) throw new Error('Debes ingresar un plazo válido en semanas.')
      if (!(Number(form.tasa_variable_pct || 0) > 0)) throw new Error('Debes ingresar una tasa variable válida.')
      if (!String(form.modalidad || '').trim()) throw new Error('Debes seleccionar la modalidad de préstamo.')
      if (!String(form.destino || '').trim()) throw new Error('Debes seleccionar el destino de la solicitud.')
      if (!documentoIdentidad) throw new Error('Debes cargar el documento de identidad (PDF).')
      if (documentosEstadoCuenta.length < 1) throw new Error('Debes cargar al menos 1 estado de cuenta (PDF).')

      const referidoPorNombre = referidoSelected ? getClienteLabel(referidoSelected) : ''
      const referidoExterno = String(form.referido_externo || '').trim()

      if (form.es_referido && !referidoPorNombre && !referidoExterno) {
        throw new Error('Debes seleccionar un cliente activo o indicar un referido externo.')
      }

      const clientePayload = {
        nombre: form.nombre,
        apellido: form.apellido,
        telefono: form.telefono,
        email,
        direccion: form.direccion,
        es_referido: Boolean(form.es_referido),
        referido_por: form.es_referido ? referidoPorNombre || referidoExterno : '',
        monto_referido: form.es_referido ? Number(montoReferido.toFixed(2)) : 0,
        nombre_contacto: form.nombre_contacto,
        apellido_contacto: form.apellido_contacto,
        telefono_contacto: form.telefono_contacto,
        email_contacto: form.email_contacto,
        direccion_contacto: form.direccion_contacto,
        observaciones: form.observaciones
      }

      const clienteCreated = publicMode ? await crearClientePublico(clientePayload) : await crearCliente(clientePayload)
      const clienteId = extractClienteIdFromPayload(clienteCreated)

      if (!clienteId) {
        throw new Error('El backend no devolvió el ID del cliente creado.')
      }

      const tasaVariable = calculateTasaVariable(form.tasa_variable_pct, form.modalidad, form.plazo_semanas)

      if (!Number.isFinite(tasaVariable) || tasaVariable <= 0) {
        throw new Error('No se pudo calcular una tasa válida para la modalidad seleccionada.')
      }

      const solicitudPayload = new FormData()

      solicitudPayload.append('cliente_id', String(clienteId))
      solicitudPayload.append('monto_solicitado', String(Number(form.monto_solicitado || 0)))
      solicitudPayload.append('modalidad', form.modalidad)
      solicitudPayload.append('plazo_semanas', String(Number(form.plazo_semanas || 0)))
      solicitudPayload.append('tasa_variable', String(tasaVariable))
      solicitudPayload.append('modelo_calificacion', form.modelo_calificacion)
      solicitudPayload.append('modelo_aprobacion', form.modelo_aprobacion)
      solicitudPayload.append('destino', form.destino)
      solicitudPayload.append('tipo_documento_identidad', 'ID')
      solicitudPayload.append('tipo_documentos_estado_cuenta', 'ESTADO_CUENTA')

      ;[documentoIdentidad, ...documentosEstadoCuenta].forEach(file => {
        if (file) solicitudPayload.append('documentos', file)
      })

      const solicitudCreated = publicMode ? await crearSolicitudPublica(solicitudPayload) : await crearSolicitud(solicitudPayload)
      const solicitudId = extractSolicitudIdFromPayload(solicitudCreated)
      if (publicMode) {
        setForm(initialForm)
        setDocumentoIdentidad(null)
        setDocumentosEstadoCuenta([])
        setSubmitAttempted(false)
        setEmailVerificationCode('')
        setEmailVerificationSent(false)
        setEmailVerified(false)
        setVerifiedEmail('')
        setEmailVerificationMessage('')
        setSnackbar({ open: true, message: 'Solicitud enviada correctamente. Nuestro equipo la revisará.' })

        return
      }

      const params = new URLSearchParams()

      if (solicitudId) params.set('focusSolicitudId', String(solicitudId))
      params.set('focusClienteId', String(clienteId))
      params.set('created', '1')

      router.replace(`/solicitudes?${params.toString()}`)
    } catch (err) {
      setError(err.message || 'No se pudo guardar el registro integral.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
      <Card sx={{ borderTop: theme => `10px solid ${theme.palette.primary.main}`, borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant='h3' sx={{ fontWeight: 800 }}>
              CUSTOMER PRE-QUALIFICATION
            </Typography>
            <Typography variant='h3' sx={{ fontWeight: 800 }}>
              PRECALIFICACION DE CLIENTES
            </Typography>
            <Typography color='text.secondary'>
              {publicMode
                ? 'Formulario público para registrar cliente y crear solicitud de crédito en un solo flujo.'
                : 'Formulario unificado para registrar cliente y crear solicitud de crédito en un solo flujo.'}
            </Typography>
            <Typography color='error.main' sx={{ fontWeight: 700 }}>
              * Indica que la pregunta es obligatoria
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {error ? <Alert severity='error'>{error}</Alert> : null}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>
            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Información del cliente nuevo' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Nombre *'
                      name='nombre'
                      value={form.nombre}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('nombre')}
                      helperText={isRequiredMissing('nombre') ? 'Campo obligatorio' : 'Ejemplo: Juan'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Apellido *'
                      name='apellido'
                      value={form.apellido}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('apellido')}
                      helperText={isRequiredMissing('apellido') ? 'Campo obligatorio' : 'Ejemplo: Pérez'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label='Teléfono' name='telefono' value={form.telefono} onChange={handleChange} fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Email *'
                      name='email'
                      type='email'
                      value={form.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('email')}
                      helperText={isRequiredMissing('email') ? 'Campo obligatorio' : 'Ejemplo: cliente@correo.com'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5} alignItems={{ md: 'center' }}>
                      <Button
                        type='button'
                        variant='tonal'
                        color='info'
                        onClick={handleSendVerificationCode}
                        disabled={emailVerificationLoading || emailCodeValidationLoading || !form.email}
                      >
                        {emailVerificationLoading ? 'Enviando código...' : 'Enviar código de verificación'}
                      </Button>
                      <TextField
                        size='small'
                        label='Código de verificación'
                        value={emailVerificationCode}
                        onChange={event => setEmailVerificationCode(event.target.value)}
                        placeholder='Ingresa el código'
                        sx={{ minWidth: { xs: '100%', md: 240 } }}
                      />
                      <Button
                        type='button'
                        variant='contained'
                        color='success'
                        onClick={handleVerifyCode}
                        disabled={!emailVerificationSent || emailCodeValidationLoading || !emailVerificationCode}
                      >
                        {emailCodeValidationLoading ? 'Verificando...' : 'Verificar correo'}
                      </Button>
                      {emailVerified ? <Alert severity='success'>Correo verificado</Alert> : null}
                    </Stack>
                    {emailVerificationMessage ? (
                      <Typography variant='caption' color='text.secondary' sx={{ mt: 1, display: 'block' }}>
                        {emailVerificationMessage}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label='Dirección' name='direccion' value={form.direccion} onChange={handleChange} fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField select label='¿Es referido?' name='es_referido' value={form.es_referido ? 'SI' : 'NO'} onChange={handleChange} fullWidth>
                      <MenuItem value='NO'>No</MenuItem>
                      <MenuItem value='SI'>Sí</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Autocomplete
                      options={clientesActivos}
                      value={referidoSelected}
                      onChange={(_, value) =>
                        setForm(previous => ({
                          ...previous,
                          referido_por: value ? getClienteId(value) || getClienteLabel(value) : '',
                          referido_externo: value ? '' : previous.referido_externo
                        }))
                      }
                      getOptionLabel={option => getClienteLabel(option) || 'Cliente'}
                      isOptionEqualToValue={(option, value) => getClienteId(option) === getClienteId(value)}
                      disabled={!form.es_referido || loadingReferidos}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label='Referido por'
                          placeholder='Seleccionar cliente activo'
                          required={Boolean(form.es_referido)}
                          error={isRequiredMissing('referido_por')}
                          helperText={
                            isRequiredMissing('referido_por')
                              ? 'Campo obligatorio'
                              : form.es_referido
                                  ? loadingReferidos
                                    ? 'Cargando clientes activos...'
                                    : clientesActivos.length
                                      ? 'Selecciona un cliente activo (o usa referido externo)'
                                      : 'No hay clientes activos disponibles'
                                : ''
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                      label='Referido externo (si no está en base)'
                      name='referido_externo'
                      value={form.referido_externo}
                      onChange={handleChange}
                      fullWidth
                      disabled={!form.es_referido}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                      label={
                        <Stack direction='row' spacing={0.75} alignItems='center'>
                          <span>Monto referido (USD)</span>
                          <Tooltip title='Este monto se descontará de la última cuota cuando el cliente tenga descuento disponible.'>
                            <i className='tabler-info-circle text-base' />
                          </Tooltip>
                        </Stack>
                      }
                      name='monto_referido'
                      type='number'
                      value={form.monto_referido}
                      onChange={handleChange}
                      inputProps={{ min: 0, step: '0.01' }}
                      fullWidth
                      disabled={!form.es_referido}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Información de contacto alterno o emergente' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label='Nombre contacto' name='nombre_contacto' value={form.nombre_contacto} onChange={handleChange} fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label='Apellido contacto' name='apellido_contacto' value={form.apellido_contacto} onChange={handleChange} fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label='Teléfono contacto' name='telefono_contacto' value={form.telefono_contacto} onChange={handleChange} fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Email contacto'
                      name='email_contacto'
                      type='email'
                      value={form.email_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label='Dirección contacto' name='direccion_contacto' value={form.direccion_contacto} onChange={handleChange} fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label='Observaciones'
                      name='observaciones'
                      value={form.observaciones}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      minRows={3}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Información crediticia' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('destino')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1.05rem', fontWeight: 700 }}>
                        DESTINATION OF THE REQUEST * / DESTINO DE LA SOLICITUD
                      </FormLabel>
                      <RadioGroup name='destino' value={form.destino} onChange={handleChange}>
                        {DESTINO_OPTIONS.map(option => (
                          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('modalidad')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1.05rem', fontWeight: 700 }}>
                        TYPE OF PAYMENT * / TIPO DE PAGO
                      </FormLabel>
                      <RadioGroup name='modalidad' value={form.modalidad} onChange={handleChange}>
                        {MODALIDAD_OPTIONS.map(option => (
                          <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Monto solicitado *'
                      name='monto_solicitado'
                      type='number'
                      value={form.monto_solicitado}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('monto_solicitado')}
                      helperText={isRequiredMissing('monto_solicitado') ? 'Campo obligatorio' : 'Ejemplo: 2000'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Plazo (semanas) *'
                      name='plazo_semanas'
                      type='number'
                      value={form.plazo_semanas}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('plazo_semanas')}
                      helperText={isRequiredMissing('plazo_semanas') ? 'Campo obligatorio' : 'Ejemplo: 8'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Tasa variable (%) *'
                      name='tasa_variable_pct'
                      type='number'
                      value={form.tasa_variable_pct}
                      onChange={handleChange}
                      inputProps={{ min: 1, max: 100 }}
                      fullWidth
                      required
                      error={isRequiredMissing('tasa_variable_pct')}
                      helperText={isRequiredMissing('tasa_variable_pct') ? 'Campo obligatorio' : 'Ejemplo: 23'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      select
                      label='Modelo de calificación *'
                      name='modelo_calificacion'
                      value={form.modelo_calificacion}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('modelo_calificacion')}
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
                      error={isRequiredMissing('modelo_aprobacion')}
                    >
                      {MODELO_APROBACION_OPTIONS.map(model => (
                        <MenuItem key={model} value={model}>
                          {model}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Carga de documentos que respaldan la solicitud' />
              <Divider />
              <CardContent>
                <Stack spacing={2}>
                  <Stack
                    spacing={1}
                    sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}`, bgcolor: 'background.default' }}
                  >
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                      IMPORTANT (FILE) * / ARCHIVOS (IMPORTANTE)
                    </Typography>
                    <Typography color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
                      UPLOAD IDENTIFICATION (ID) / SUBIR IDENTIFICACION (ID)
                    </Typography>
                    <Button variant='outlined' component='label'>
                      Cargar documento ID (obligatorio)
                      <input hidden type='file' accept='application/pdf,.pdf' onChange={handleDocumentoIdentidad} />
                    </Button>
                    <Typography variant='caption' color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
                      {documentoIdentidad ? `Archivo seleccionado: ${documentoIdentidad.name}` : 'Aún no has cargado el documento ID.'}
                    </Typography>
                  </Stack>

                  <Stack
                    spacing={1}
                    sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}`, bgcolor: 'background.default' }}
                  >
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                      HOW MANY BANK STATEMENTS * / ESTADOS DE CUENTAS BANCARIOS
                    </Typography>
                    <Typography color='text.secondary'>LAST 2 MONTHS / ULTIMOS 2 MESES</Typography>
                    <Typography color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                      Sube hasta 2 archivos compatibles. Tamaño máximo por archivo: 10MB.
                    </Typography>
                    <Button variant='outlined' component='label'>
                      Cargar estados de cuenta (1 o 2)
                      <input hidden type='file' accept='application/pdf,.pdf' multiple onChange={handleEstadoCuentaFiles} />
                    </Button>
                    <Typography variant='caption' color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                      {documentosEstadoCuenta.length
                        ? `${documentosEstadoCuenta.length} archivo(s) seleccionado(s)`
                        : 'No hay estados de cuenta cargados'}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardHeader title='Acciones' />
            <Divider />
            <CardContent>
              <Stack spacing={1.5}>
                <Button variant='contained' type='submit' disabled={saving} fullWidth>
                  {saving ? 'Guardando...' : publicMode ? 'Enviar solicitud' : 'Publicar cliente y solicitud'}
                </Button>
                {publicMode ? null : (
                  <Button variant='outlined' onClick={() => router.push('/clientes')} disabled={saving} fullWidth>
                    Cancelar
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

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
    </Stack>
  )
}
