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
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
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
  verificarCodigoEmailCliente,
  verificarCodigoEmailClientePublico
} from '@/api/clientes'
import { crearSolicitud, crearSolicitudPublica } from '@/api/solicitudes'

const MODELO_OPTIONS = ['CLIENTE_NUEVO', 'CLIENTE_ANTIGUO']
const MODELO_APROBACION_OPTIONS = ['AUTOMATICO', 'MANUAL']
const MODALIDAD_OPTIONS = [
  { value: 'SEMANAL', label: 'WEEKLY (SEMANAL) 4/8/12' },
  { value: 'QUINCENAL', label: 'FORTNIGHTLY (QUINCENAL) 2/4/6' },
  { value: 'MENSUAL', label: 'MONTHLY (MENSUAL) 1/2/3' }
]
const SEXO_OPTIONS = [
  { value: 'M', label: 'Masculino (Male)' },
  { value: 'F', label: 'Femenino (Female)' },
  { value: 'O', label: 'Otro (Other)' }
]
const STATUS_LEGAL_OPTIONS = [
  { value: 'RESIDENTE', label: 'RESIDENTE AMERICANO (AMERICAN RESIDENT)' },
  { value: 'CIUDADANO', label: 'CIUDADANO AMERICANO (AMERICAN CITIZEN)' },
  { value: 'TEMPORAL', label: 'TEMPORAL (TEMPORARY)' },
  { value: 'IRREGULAR', label: 'IRREGULAR (IRREGULAR)' },
  { value: 'OTRO', label: 'OTRO (OTHER)' }
]
const ANTIGUEDAD_LABORAL_OPTIONS = [
  { value: '12', label: '6 - 12 MESES (MONTHS)' },
  { value: '24', label: '12 - 24 MESES (MONTHS)' },
  { value: '60', label: '24 - 60 MESES (MONTHS)' },
  { value: '61', label: 'MAS DE 60 MESES (MONTHS)' }
]
const MONTO_RANGO_OPTIONS = [
  { value: '100-500', label: '100 - 500' },
  { value: '500-1000', label: '500 - 1000' },
  { value: '1000-1500', label: '1000 - 1500' },
  { value: '1500-2000', label: '1500 - 2000' },
  { value: '2000+', label: '2000+' }
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
  fecha_nacimiento: '',
  sexo: '',
  status_legal: '',
  empleo_actual: '',
  antiguedad_laboral_meses: '',
  ingresos_mensuales: '',
  pago_casa_renta_mensual: '',
  pago_carro_seguro_mensual: '',
  otros_gastos_mensuales: '',
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
  monto_solicitud_rango: '',
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
  const [documentosComprobantesIngreso, setDocumentosComprobantesIngreso] = useState([])

  const [emailVerificationCode, setEmailVerificationCode] = useState('')
  const [emailVerificationSent, setEmailVerificationSent] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [verifiedEmail, setVerifiedEmail] = useState('')
  const [emailVerificationLoading, setEmailVerificationLoading] = useState(false)
  const [emailCodeValidationLoading, setEmailCodeValidationLoading] = useState(false)
  const [emailVerificationMessage, setEmailVerificationMessage] = useState('')
  const [acceptedPublicTerms, setAcceptedPublicTerms] = useState(false)

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

  const handleSingleCheckbox = (name, value) => event => {
    setForm(previous => ({
      ...previous,
      [name]: event.target.checked ? value : ''
    }))
  }

  const renderFileChips = (files = [], onRemove) => {
    if (!files.length) return null

    return (
      <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
        {files.map((file, index) => (
          <Chip
            key={`${file?.name || 'archivo'}-${index}`}
            label={file?.name || `Archivo ${index + 1}`}
            onDelete={onRemove ? () => onRemove(index) : undefined}
            variant='outlined'
            color='info'
            size='small'
            sx={{ maxWidth: '100%' }}
          />
        ))}
      </Stack>
    )
  }

  const isRequiredMissing = field => {
    if (!submitAttempted) return false

    if (field === 'nombre') return !String(form.nombre || '').trim()
    if (field === 'apellido') return !String(form.apellido || '').trim()
    if (field === 'email') return !String(form.email || '').trim()
    if (field === 'fecha_nacimiento') return !String(form.fecha_nacimiento || '').trim()
    if (field === 'sexo') return !String(form.sexo || '').trim()
    if (field === 'status_legal') return !String(form.status_legal || '').trim()
    if (field === 'empleo_actual') return !String(form.empleo_actual || '').trim()
    if (field === 'antiguedad_laboral_meses') return !(Number(form.antiguedad_laboral_meses || 0) > 0)
    if (field === 'ingresos_mensuales') return !(Number(form.ingresos_mensuales || 0) > 0)
    if (field === 'pago_casa_renta_mensual') return !(Number(form.pago_casa_renta_mensual || 0) >= 0)
    if (field === 'pago_carro_seguro_mensual') return !(Number(form.pago_carro_seguro_mensual || 0) >= 0)
    if (field === 'otros_gastos_mensuales') return !(Number(form.otros_gastos_mensuales || 0) >= 0)
    if (field === 'referido_por') {
      if (!Boolean(form.es_referido)) return false

      return !String(form.referido_por || '').trim() && !String(form.referido_externo || '').trim()
    }
    if (field === 'monto_solicitado') return !(Number(form.monto_solicitado || 0) > 0)
    if (field === 'monto_solicitud_rango') return !String(form.monto_solicitud_rango || '').trim()
    if (field === 'modalidad') return !String(form.modalidad || '').trim()
    if (field === 'plazo_semanas') return publicMode ? false : !(Number(form.plazo_semanas || 0) > 0)
    if (field === 'tasa_variable_pct') return publicMode ? false : !(Number(form.tasa_variable_pct || 0) > 0)
    if (field === 'destino') return !String(form.destino || '').trim()
    if (field === 'modelo_calificacion') return publicMode ? false : !String(form.modelo_calificacion || '').trim()
    if (field === 'modelo_aprobacion') return publicMode ? false : !String(form.modelo_aprobacion || '').trim()
    if (field === 'documento_identidad') return !documentoIdentidad
    if (field === 'estado_cuenta') return documentosEstadoCuenta.length < 2
    if (field === 'comprobantes_ingreso') {
      const required = form.modalidad === 'SEMANAL' ? 4 : 2

      return documentosComprobantesIngreso.length < required
    }

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

  const handleRemoveDocumentoIdentidad = () => {
    setDocumentoIdentidad(null)
  }

  const handleEstadoCuentaFiles = event => {
    const selected = Array.from(event.target.files || [])
    const validationError = validatePdfFiles({ selected, min: 2, max: 10 })

    if (validationError) {
      setSnackbar({ open: true, message: validationError })

      return
    }

    setDocumentosEstadoCuenta(selected)
  }

  const handleRemoveEstadoCuenta = indexToRemove => {
    setDocumentosEstadoCuenta(previous => previous.filter((_, index) => index !== indexToRemove))
  }

  const handleComprobantesIngresoFiles = event => {
    const selected = Array.from(event.target.files || [])
    const required = form.modalidad === 'SEMANAL' ? 4 : 2
    const validationError = validatePdfFiles({ selected, min: required, max: 10 })

    if (validationError) {
      setSnackbar({ open: true, message: validationError })

      return
    }

    setDocumentosComprobantesIngreso(selected)
  }

  const handleRemoveComprobanteIngreso = indexToRemove => {
    setDocumentosComprobantesIngreso(previous => previous.filter((_, index) => index !== indexToRemove))
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
      if (!String(form.fecha_nacimiento || '').trim()) throw new Error('Debes completar la fecha de nacimiento.')
      if (!String(form.sexo || '').trim()) throw new Error('Debes seleccionar el sexo.')
      if (!String(form.status_legal || '').trim()) throw new Error('Debes seleccionar el estatus legal.')
      if (!String(form.empleo_actual || '').trim()) throw new Error('Debes indicar si tiene empleo actual.')
      if (!(Number(form.antiguedad_laboral_meses || 0) > 0)) throw new Error('Debes indicar la antigüedad laboral en meses.')
      if (!(Number(form.ingresos_mensuales || 0) > 0)) throw new Error('Debes indicar los ingresos mensuales.')
      if (!(Number(form.pago_casa_renta_mensual || 0) >= 0)) throw new Error('Debes indicar el pago de casa o renta.')
      if (!(Number(form.pago_carro_seguro_mensual || 0) >= 0)) throw new Error('Debes indicar el pago de carro o seguro.')
      if (!(Number(form.otros_gastos_mensuales || 0) >= 0)) throw new Error('Debes indicar otros gastos mensuales.')

      const montoReferido = Number(String(form.monto_referido || '0').replace(',', '.'))

      if (!Number.isFinite(montoReferido) || montoReferido < 0) {
        throw new Error('El monto referido debe ser un valor mayor o igual a 0.')
      }

      if (!(Number(form.monto_solicitado || 0) > 0)) throw new Error('Debes ingresar un monto solicitado mayor a 0.')
      if (!publicMode && !(Number(form.plazo_semanas || 0) > 0)) throw new Error('Debes ingresar un plazo válido en semanas.')
      if (!publicMode && !(Number(form.tasa_variable_pct || 0) > 0)) throw new Error('Debes ingresar una tasa variable válida.')
      if (!String(form.modalidad || '').trim()) throw new Error('Debes seleccionar la modalidad de préstamo.')
      if (!String(form.destino || '').trim()) throw new Error('Debes seleccionar el destino de la solicitud.')
      if (!documentoIdentidad) throw new Error('Debes cargar el documento de identidad (PDF).')
      if (documentosEstadoCuenta.length < 2) throw new Error('Debes cargar al menos 2 estados de cuenta (PDF).')
      const comprobantesRequeridos = form.modalidad === 'SEMANAL' ? 4 : 2
      if (documentosComprobantesIngreso.length < comprobantesRequeridos) {
        throw new Error(
          `Debes cargar ${comprobantesRequeridos} comprobante(s) de ingreso (PDF) según la modalidad seleccionada.`
        )
      }
      if (publicMode && !acceptedPublicTerms) {
        throw new Error('Debes aceptar el aviso legal para enviar la solicitud.')
      }

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
        fecha_nacimiento: form.fecha_nacimiento,
        sexo: form.sexo,
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

      const tasaVariable = publicMode ? 0 : calculateTasaVariable(form.tasa_variable_pct, form.modalidad, form.plazo_semanas)

      if (!publicMode && (!Number.isFinite(tasaVariable) || tasaVariable <= 0)) {
        throw new Error('No se pudo calcular una tasa válida para la modalidad seleccionada.')
      }

      const solicitudPayload = new FormData()

      solicitudPayload.append('cliente_id', String(clienteId))
      solicitudPayload.append('monto_solicitado', String(Number(form.monto_solicitado || 0)))
      solicitudPayload.append('modalidad', form.modalidad)
      solicitudPayload.append('plazo_semanas', String(publicMode ? 0 : Number(form.plazo_semanas || 0)))
      solicitudPayload.append('tasa_variable', String(publicMode ? 0 : tasaVariable))
      solicitudPayload.append('modelo_calificacion', publicMode ? 'EDITAR' : form.modelo_calificacion)
      solicitudPayload.append('modelo_aprobacion', publicMode ? 'EDITAR' : form.modelo_aprobacion)
      solicitudPayload.append('destino', form.destino)
      solicitudPayload.append('status_legal', form.status_legal)
      solicitudPayload.append('empleo_actual', form.empleo_actual)
      solicitudPayload.append('antiguedad_laboral_meses', String(Number(form.antiguedad_laboral_meses || 0)))
      solicitudPayload.append('ingresos_mensuales', String(Number(form.ingresos_mensuales || 0)))
      solicitudPayload.append('pago_casa_renta_mensual', String(Number(form.pago_casa_renta_mensual || 0)))
      solicitudPayload.append('pago_carro_seguro_mensual', String(Number(form.pago_carro_seguro_mensual || 0)))
      solicitudPayload.append('otros_gastos_mensuales', String(Number(form.otros_gastos_mensuales || 0)))
      solicitudPayload.append('monto_solicitud_rango', form.monto_solicitud_rango)
      solicitudPayload.append('tipo_documento_identidad', 'ID')
      solicitudPayload.append('tipo_documentos_estado_cuenta', 'ESTADO_CUENTA')
      solicitudPayload.append('tipo_documentos_comprobantes', 'COMPROBANTES_INGRESO')

      ;[documentoIdentidad, ...documentosEstadoCuenta, ...documentosComprobantesIngreso].forEach(file => {
        if (file) solicitudPayload.append('documentos', file)
      })

      const solicitudCreated = publicMode ? await crearSolicitudPublica(solicitudPayload) : await crearSolicitud(solicitudPayload)
      const solicitudId = extractSolicitudIdFromPayload(solicitudCreated)
      if (publicMode) {
        setForm(initialForm)
        setDocumentoIdentidad(null)
        setDocumentosEstadoCuenta([])
        setDocumentosComprobantesIngreso([])
        setSubmitAttempted(false)
        setEmailVerificationCode('')
        setEmailVerificationSent(false)
        setEmailVerified(false)
        setVerifiedEmail('')
        setEmailVerificationMessage('')
        setAcceptedPublicTerms(false)
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
    <Stack spacing={3} component='form' onSubmit={handleSubmit} sx={{ p: { xs: 2, md: 3 } }}>
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
              <CardHeader title='Datos personales / Personal data' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Nombre completo * / Full name'
                      name='nombre'
                      value={form.nombre}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('nombre')}
                      helperText={isRequiredMissing('nombre') ? 'Campo obligatorio' : 'Tu respuesta'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Apellido * / Last name'
                      name='apellido'
                      value={form.apellido}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('apellido')}
                      helperText={isRequiredMissing('apellido') ? 'Campo obligatorio' : 'Tu respuesta'}
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
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Fecha de nacimiento *'
                      name='fecha_nacimiento'
                      type='date'
                      value={form.fecha_nacimiento}
                      onChange={handleChange}
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                      error={isRequiredMissing('fecha_nacimiento')}
                      helperText={isRequiredMissing('fecha_nacimiento') ? 'Campo obligatorio' : 'mm/dd/yyyy'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('sexo')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1rem', fontWeight: 700 }}>
                        SEX * / SEXO
                      </FormLabel>
                      <FormGroup>
                        {SEXO_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<Checkbox checked={form.sexo === option.value} onChange={handleSingleCheckbox('sexo', option.value)} />}
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField label='Dirección' name='direccion' value={form.direccion} onChange={handleChange} fullWidth />
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
              <CardHeader title='Perfil legal y laboral / Legal & work profile' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('status_legal')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1rem', fontWeight: 700 }}>
                        CURRENT LEGAL STATUS * / ESTATUS LEGAL ACTUAL
                      </FormLabel>
                      <FormGroup>
                        {STATUS_LEGAL_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={
                              <Checkbox
                                checked={form.status_legal === option.value}
                                onChange={handleSingleCheckbox('status_legal', option.value)}
                              />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('empleo_actual')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1rem', fontWeight: 700 }}>
                        YOU ARE CURRENTLY EMPLOYED * / ¿TIENES EMPLEO ACTUALMENTE?
                      </FormLabel>
                      <FormGroup>
                        {['SI', 'NO', 'OTRO'].map(option => (
                          <FormControlLabel
                            key={option}
                            control={<Checkbox checked={form.empleo_actual === option} onChange={handleSingleCheckbox('empleo_actual', option)} />}
                            label={option === 'SI' ? 'SI (YES)' : option === 'NO' ? 'NO' : 'OTRO (OTHER)'}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('antiguedad_laboral_meses')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1rem', fontWeight: 700 }}>
                        ANTIQUITY AT WORK * / ANTIGUEDAD EN EL TRABAJO
                      </FormLabel>
                      <FormGroup>
                        {ANTIGUEDAD_LABORAL_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={
                              <Checkbox
                                checked={form.antiguedad_laboral_meses === option.value}
                                onChange={handleSingleCheckbox('antiguedad_laboral_meses', option.value)}
                              />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Finanzas / Financial profile' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Ingresos mensuales *'
                      name='ingresos_mensuales'
                      type='number'
                      value={form.ingresos_mensuales}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('ingresos_mensuales')}
                      helperText={isRequiredMissing('ingresos_mensuales') ? 'Campo obligatorio' : 'Ejemplo: 2500'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Pago casa o renta mensual *'
                      name='pago_casa_renta_mensual'
                      type='number'
                      value={form.pago_casa_renta_mensual}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('pago_casa_renta_mensual')}
                      helperText={isRequiredMissing('pago_casa_renta_mensual') ? 'Campo obligatorio' : 'Ejemplo: 500'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Pago carro/seguro mensual *'
                      name='pago_carro_seguro_mensual'
                      type='number'
                      value={form.pago_carro_seguro_mensual}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('pago_carro_seguro_mensual')}
                      helperText={isRequiredMissing('pago_carro_seguro_mensual') ? 'Campo obligatorio' : 'Ejemplo: 300'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Otros gastos mensuales *'
                      name='otros_gastos_mensuales'
                      type='number'
                      value={form.otros_gastos_mensuales}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('otros_gastos_mensuales')}
                      helperText={isRequiredMissing('otros_gastos_mensuales') ? 'Campo obligatorio' : 'Ejemplo: 200'}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Información crediticia / Credit details' />
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
                      <FormGroup>
                        {DESTINO_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={
                              <Checkbox checked={form.destino === option.value} onChange={handleSingleCheckbox('destino', option.value)} />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
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
                        FORM OF PAYMENT * / FORMA DE PAGOS
                      </FormLabel>
                      <FormGroup>
                        {MODALIDAD_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={
                              <Checkbox checked={form.modalidad === option.value} onChange={handleSingleCheckbox('modalidad', option.value)} />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('monto_solicitud_rango')}
                      sx={{ p: 2, border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
                    >
                      <FormLabel sx={{ color: 'text.primary', mb: 1.5, fontSize: '1rem', fontWeight: 700 }}>
                        APPLICATION AMOUNT * / MONTO DE SU SOLICITUD
                      </FormLabel>
                      <FormGroup>
                        {MONTO_RANGO_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={
                              <Checkbox
                                checked={form.monto_solicitud_rango === option.value}
                                onChange={handleSingleCheckbox('monto_solicitud_rango', option.value)}
                              />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>
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
                  {publicMode ? null : (
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
                  )}
                  {publicMode ? null : (
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
                  )}
                  {publicMode ? null : (
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
                  )}
                  {publicMode ? null : (
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
                  )}
                </Grid>
              </CardContent>
            </Card>

            {publicMode ? null : (
              <Card sx={{ borderRadius: 3 }}>
                <CardHeader title='Referido / Referral' />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextField
                        select
                        label='¿Es referido?'
                        name='es_referido'
                        value={form.es_referido ? 'SI' : 'NO'}
                        onChange={handleChange}
                        fullWidth
                      >
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
            )}

            <Card sx={{ borderRadius: 3 }}>
              <CardHeader title='Archivos / Files' />
              <Divider />
              <CardContent>
                <Stack spacing={2}>
                  <Stack
                    spacing={1}
                    sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}` }}
                  >
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                      IMPORTANT (FILE) * / ARCHIVOS (IMPORTANTE)
                    </Typography>
                    <Typography color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
                      UPLOAD IDENTIFICATION (ID) / SUBIR IDENTIFICACION (ID)
                    </Typography>
                    <Button variant='outlined' component='label'>
                      Añadir archivo
                      <input hidden type='file' accept='application/pdf,.pdf' onChange={handleDocumentoIdentidad} />
                    </Button>
                    {documentoIdentidad ? renderFileChips([documentoIdentidad], handleRemoveDocumentoIdentidad) : null}
                    <Typography variant='caption' color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
                      {documentoIdentidad ? '1 archivo cargado.' : 'Sube 1 archivo compatible. Tamaño máximo: 10 MB.'}
                    </Typography>
                  </Stack>

                  <Stack
                    spacing={1}
                    sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}` }}
                  >
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                      HOW MANY BANK STATEMENTS * / ESTADOS DE CUENTAS BANCARIOS
                    </Typography>
                    <Typography color='text.secondary'>LAST 2 MONTHS / ULTIMOS 2 MESES</Typography>
                    <Typography color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                      Sube mínimo 2 archivos compatibles (máximo 10). Tamaño máximo por archivo: 10MB.
                    </Typography>
                    <Button variant='outlined' component='label'>
                      Añadir archivo
                      <input hidden type='file' accept='application/pdf,.pdf' multiple onChange={handleEstadoCuentaFiles} />
                    </Button>
                    {renderFileChips(documentosEstadoCuenta, handleRemoveEstadoCuenta)}
                    <Typography variant='caption' color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                      {documentosEstadoCuenta.length
                        ? `${documentosEstadoCuenta.length} archivo(s) cargado(s)`
                        : 'No hay estados de cuenta cargados'}
                    </Typography>
                  </Stack>

                  <Stack
                    spacing={1}
                    sx={{ p: 2, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}` }}
                  >
                    <Typography variant='h6' sx={{ fontWeight: 700 }}>
                      PROOF OF INCOME * / COMPROBANTES DE INGRESOS
                    </Typography>
                    <Typography color='text.secondary'>
                      {form.modalidad === 'SEMANAL'
                        ? '4 SI ES PAGO SEMANAL / 4 IF IT IS WEEKLY PAYMENT'
                        : '2 SI ES PAGO QUINCENAL O MENSUAL / 2 IF FORTNIGHTLY OR MONTHLY'}
                    </Typography>
                    <Typography color={isRequiredMissing('comprobantes_ingreso') ? 'error.main' : 'text.secondary'}>
                      Sube los comprobantes requeridos según la modalidad. Tamaño máximo por archivo: 10MB.
                    </Typography>
                    <Button variant='outlined' component='label'>
                      Añadir archivo
                      <input hidden type='file' accept='application/pdf,.pdf' multiple onChange={handleComprobantesIngresoFiles} />
                    </Button>
                    {renderFileChips(documentosComprobantesIngreso, handleRemoveComprobanteIngreso)}
                    <Typography variant='caption' color={isRequiredMissing('comprobantes_ingreso') ? 'error.main' : 'text.secondary'}>
                      {documentosComprobantesIngreso.length
                        ? `${documentosComprobantesIngreso.length} archivo(s) cargado(s)`
                        : 'No hay comprobantes cargados'}
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
                {publicMode ? (
                  <FormControlLabel
                    control={<Checkbox checked={acceptedPublicTerms} onChange={event => setAcceptedPublicTerms(event.target.checked)} />}
                    label='Acepto el aviso legal y el tratamiento de mis datos.'
                  />
                ) : null}
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
