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
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import MuiTextField from '@mui/material/TextField'
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

  const publicDefaults = useMemo(
    () =>
      publicMode
        ? {
            plazo_semanas: '1',
            tasa_variable_pct: '1',
            modelo_calificacion: 'EDITAR',
            modelo_aprobacion: 'EDITAR'
          }
        : {},
    [publicMode]
  )

  const defaultForm = useMemo(() => ({ ...initialForm, ...publicDefaults }), [publicDefaults])

  const [form, setForm] = useState(defaultForm)
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
      clientesActivos.find(
        item => getClienteId(item) === selected || normalizeText(getClienteLabel(item)) === normalizeText(selected)
      ) || null
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

  const handleSingleValue = name => event => {
    setForm(previous => ({
      ...previous,
      [name]: event.target.value
    }))
  }

  const googleTextFieldSx = {
    width: '100%',
    maxWidth: 560,
    '& .MuiInput-root': {
      mt: 0.05,
      fontFamily: '"Roboto", Arial, sans-serif',
      fontSize: 15,
      color: '#202124',
      alignItems: 'flex-end'
    },
    '& .MuiInputBase-input': {
      px: 0,
      py: 0.35,
      '&::placeholder': {
        color: '#80868b',
        opacity: 1
      }
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#dadce0'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#202124'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#137333'
    },
    '& .MuiFormHelperText-root': {
      ml: 0,
      mt: 0.25,
      color: '#5f6368'
    },
    '& .MuiSelect-icon': {
      color: '#5f6368'
    }
  }

  const TextField = ({ label, placeholder, helperText, sx, InputLabelProps, variant, ...props }) => {
    if (publicMode && label) {
      return (
        <Stack spacing={0.75} sx={{ width: '100%' }}>
          <Typography
            sx={{
              fontFamily: '"Roboto", Arial, sans-serif',
              fontSize: 13.5,
              fontWeight: 400,
              color: '#202124',
              lineHeight: 1.35
            }}
          >
            {label}
          </Typography>
          <MuiTextField
            {...props}
            label={undefined}
            placeholder={placeholder || 'Tu respuesta'}
            helperText={helperText}
            variant='standard'
            InputLabelProps={{ shrink: true, ...InputLabelProps }}
            sx={[googleTextFieldSx, sx]}
          />
        </Stack>
      )
    }

    return (
      <MuiTextField
        {...props}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        variant={variant || 'outlined'}
        InputLabelProps={InputLabelProps}
        sx={sx}
      />
    )
  }

  const GoogleRadio = props => (
    <Radio
      disableRipple
      icon={
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '2px solid #5f6368',
            bgcolor: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      }
      checkedIcon={
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            border: '2px solid #2f8f2a',
            bgcolor: '#2f8f2a',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#fff' }} />
        </Box>
      }
      sx={{
        p: 0.5,
        mr: 0.5,
        color: 'transparent',
        '&:hover': { bgcolor: 'rgba(61, 143, 45, 0.04)' }
      }}
      {...props}
    />
  )

  const GoogleCheckbox = props => (
    <Checkbox
      disableRipple
      icon={
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: 1,
            border: '2px solid #5f6368',
            bgcolor: 'transparent',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      }
      checkedIcon={
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: 1,
            border: '2px solid #2f8f2a',
            bgcolor: '#2f8f2a',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: 9,
              height: 5,
              borderLeft: '2px solid #fff',
              borderBottom: '2px solid #fff',
              transform: 'rotate(-45deg)',
              mt: -0.25
            }}
          />
        </Box>
      }
      sx={{
        p: 0.5,
        mr: 0.5,
        color: 'transparent',
        '&:hover': { bgcolor: 'rgba(61, 143, 45, 0.04)' }
      }}
      {...props}
    />
  )

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
    if (field === 'estado_cuenta') return documentosEstadoCuenta.length < 1
    if (field === 'comprobantes_ingreso') {
      return documentosComprobantesIngreso.length < 1
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
    const validationError = validatePdfFiles({ selected, min: 1, max: 4 })

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
    const validationError = validatePdfFiles({ selected, min: 1, max: 4 })

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
    const email = String(form.email || '')
      .trim()
      .toLowerCase()

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
    const email = String(form.email || '')
      .trim()
      .toLowerCase()
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
      const email = String(form.email || '')
        .trim()
        .toLowerCase()

      if (!String(form.nombre || '').trim()) throw new Error('Debes completar el nombre.')
      if (!String(form.apellido || '').trim()) throw new Error('Debes completar el apellido.')
      if (!email) throw new Error('Debes ingresar un correo para registrar y verificar el cliente.')
      if (!isValidEmailFormat(email)) throw new Error('Ingresa un correo con formato válido.')
      if (!emailVerified || verifiedEmail !== email)
        throw new Error('Debes verificar el correo con código antes de publicar.')
      if (!String(form.fecha_nacimiento || '').trim()) throw new Error('Debes completar la fecha de nacimiento.')
      if (!String(form.sexo || '').trim()) throw new Error('Debes seleccionar el sexo.')
      if (!String(form.status_legal || '').trim()) throw new Error('Debes seleccionar el estatus legal.')
      if (!String(form.empleo_actual || '').trim()) throw new Error('Debes indicar si tiene empleo actual.')
      if (!(Number(form.antiguedad_laboral_meses || 0) > 0))
        throw new Error('Debes indicar la antigüedad laboral en meses.')
      if (!(Number(form.ingresos_mensuales || 0) > 0)) throw new Error('Debes indicar los ingresos mensuales.')
      if (!(Number(form.pago_casa_renta_mensual || 0) >= 0)) throw new Error('Debes indicar el pago de casa o renta.')
      if (!(Number(form.pago_carro_seguro_mensual || 0) >= 0))
        throw new Error('Debes indicar el pago de carro o seguro.')
      if (!(Number(form.otros_gastos_mensuales || 0) >= 0)) throw new Error('Debes indicar otros gastos mensuales.')

      const montoReferido = Number(String(form.monto_referido || '0').replace(',', '.'))

      if (!Number.isFinite(montoReferido) || montoReferido < 0) {
        throw new Error('El monto referido debe ser un valor mayor o igual a 0.')
      }

      if (!(Number(form.monto_solicitado || 0) > 0)) throw new Error('Debes ingresar un monto solicitado mayor a 0.')
      if (!publicMode && !(Number(form.plazo_semanas || 0) > 0))
        throw new Error('Debes ingresar un plazo válido en semanas.')
      if (!publicMode && !(Number(form.tasa_variable_pct || 0) > 0))
        throw new Error('Debes ingresar una tasa variable válida.')
      if (!String(form.modalidad || '').trim()) throw new Error('Debes seleccionar la modalidad de préstamo.')
      if (!String(form.destino || '').trim()) throw new Error('Debes seleccionar el destino de la solicitud.')
      if (!documentoIdentidad) throw new Error('Debes cargar el documento de identidad (PDF).')
      if (documentosEstadoCuenta.length < 1) throw new Error('Debes cargar al menos 1 estado de cuenta (PDF).')
      if (documentosComprobantesIngreso.length < 1) {
        throw new Error('Debes cargar entre 1 y 4 comprobantes de ingreso (PDF).')
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

      const tasaVariable = publicMode
        ? Number(form.tasa_variable_pct || 1)
        : calculateTasaVariable(form.tasa_variable_pct, form.modalidad, form.plazo_semanas)

      if (!publicMode && (!Number.isFinite(tasaVariable) || tasaVariable <= 0)) {
        throw new Error('No se pudo calcular una tasa válida para la modalidad seleccionada.')
      }

      const solicitudPayload = new FormData()

      solicitudPayload.append('cliente_id', String(clienteId))
      solicitudPayload.append('monto_solicitado', String(Number(form.monto_solicitado || 0)))
      solicitudPayload.append('modalidad', form.modalidad)
      solicitudPayload.append('plazo_semanas', String(publicMode ? 1 : Number(form.plazo_semanas || 0)))
      solicitudPayload.append('tasa_variable', String(publicMode ? Number(form.tasa_variable_pct || 1) : tasaVariable))
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

      const solicitudCreated = publicMode
        ? await crearSolicitudPublica(solicitudPayload)
        : await crearSolicitud(solicitudPayload)
      const solicitudId = extractSolicitudIdFromPayload(solicitudCreated)
      if (publicMode) {
        setForm(defaultForm)
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

  const rootFormSx = publicMode
    ? {
        p: 0,
        gap: 1
      }
    : {
        p: { xs: 2, md: 3 }
      }

  const introCardSx = publicMode
    ? {
        borderRadius: 0,
        overflow: 'hidden',
        bgcolor: '#ffffff',
        boxShadow: 'none',
        borderTop: '10px solid #34a853'
      }
    : {
        borderTop: theme => `10px solid ${theme.palette.primary.main}`,
        borderRadius: 3
      }

  const sectionCardSx = publicMode
    ? {
        borderRadius: 0,
        overflow: 'hidden',
        bgcolor: '#ffffff',
        boxShadow: 'none',
        '& .MuiCardHeader-root': {
          px: { xs: 2, md: 2.75 },
          py: { xs: 1.75, md: 2 },
          backgroundColor: '#ffffff'
        },
        '& .MuiCardHeader-title': {
          fontSize: '1rem',
          fontWeight: 700,
          color: '#202124'
        },
        '& .MuiCardHeader-subheader': {
          color: '#5f6368',
          fontSize: '0.875rem'
        },
        '& .MuiCardContent-root': {
          px: { xs: 2, md: 2.75 },
          py: { xs: 1.5, md: 2 }
        },
        '& .MuiDivider-root': {
          borderColor: '#dadce0'
        }
      }
    : { borderRadius: 3 }

  const questionBoxSx = publicMode
    ? {
        p: 0,
        border: 'none',
        borderRadius: 0,
        bgcolor: 'transparent'
      }
    : {
        p: 2,
        border: theme => `1px solid ${theme.palette.divider}`,
        borderRadius: 2
      }

  const actionCardSx = publicMode
    ? {
        borderRadius: 0,
        overflow: 'hidden',
        bgcolor: '#ffffff',
        boxShadow: 'none',
        '& .MuiCardHeader-root': {
          px: { xs: 2, md: 2.75 },
          py: { xs: 1.75, md: 2 },
          backgroundColor: '#ffffff'
        },
        '& .MuiCardHeader-title': {
          fontSize: '1rem',
          fontWeight: 700,
          color: '#202124'
        },
        '& .MuiCardContent-root': {
          px: { xs: 2, md: 2.75 },
          py: { xs: 1.5, md: 2 }
        }
      }
    : {
        borderRadius: 3,
        position: 'sticky',
        top: 24,
        alignSelf: 'flex-start'
      }

  const fieldHalfSize = publicMode ? { xs: 12 } : { xs: 12, md: 6 }
  const fieldThirdSize = publicMode ? { xs: 12 } : { xs: 12, md: 4 }
  const googlePrimaryButtonSx = publicMode
    ? {
        textTransform: 'none',
        bgcolor: '#137333',
        boxShadow: 'none',
        '&:hover': { bgcolor: '#0f5f2d', boxShadow: 'none' }
      }
    : undefined
  const googleOutlinedButtonSx = publicMode
    ? {
        textTransform: 'none',
        borderColor: '#dadce0',
        color: '#202124',
        '&:hover': { borderColor: '#137333', bgcolor: 'rgba(19, 115, 51, 0.04)' }
      }
    : undefined
  const publicQuestionCardSx = publicMode
    ? {
        borderRadius: 3,
        bgcolor: '#fff',
        boxShadow: 'none',
        overflow: 'hidden'
      }
    : undefined
  const publicQuestionInnerSx = publicMode
    ? {
        px: { xs: 1.5, md: 1.75 },
        py: { xs: 1.35, md: 1.5 },
        minHeight: 128
      }
    : undefined
  const publicQuestionTitleSx = publicMode
    ? {
        fontSize: 12.25,
        fontWeight: 600,
        lineHeight: 1.04,
        letterSpacing: '-0.02em',
        color: '#202124',
        textTransform: 'uppercase'
      }
    : undefined
  const publicQuestionSubtitleSx = publicMode
    ? {
        fontSize: 12.25,
        fontWeight: 600,
        lineHeight: 1.04,
        letterSpacing: '-0.02em',
        color: '#202124',
        textTransform: 'uppercase'
      }
    : undefined

  const PublicQuestionCard = ({ title, subtitle, required = false, children }) => (
    <Card sx={publicQuestionCardSx}>
      <CardContent sx={publicQuestionInnerSx}>
        <Stack spacing={2.5}>
          <Box>
            <Stack direction='row' spacing={0.65} alignItems='flex-start' flexWrap='wrap'>
              <Typography sx={publicQuestionTitleSx}>{title}</Typography>
              {required ? (
                <Typography sx={{ color: '#d93025', fontSize: 10, lineHeight: 1, mt: 0.12, ml: 0.75 }}>*</Typography>
              ) : null}
            </Stack>
            <Typography sx={publicQuestionSubtitleSx}>{subtitle}</Typography>
          </Box>
          {children}
        </Stack>
      </CardContent>
    </Card>
  )

  if (publicMode) {
    return (
      <Stack spacing={1.25} component='form' onSubmit={handleSubmit} sx={rootFormSx}>
        <Card sx={introCardSx}>
          <CardContent>
            <Stack spacing={0.75}>
              <Typography
                variant='overline'
                sx={{
                  letterSpacing: '0.12em',
                  color: '#137333',
                  fontWeight: 700,
                  fontSize: '0.68rem'
                }}
              >
                Public intake form
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.06,
                  letterSpacing: '-0.02em',
                  color: '#202124',
                  fontSize: '2.05rem'
                }}
              >
                CUSTOMER PRE-QUALIFICATION
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.06,
                  letterSpacing: '-0.02em',
                  color: '#202124',
                  fontSize: '2.05rem'
                }}
              >
                PRECALIFICACION DE CLIENTES
              </Typography>
              <Typography color='text.secondary' sx={{ fontSize: 14.5, lineHeight: 1.45 }}>
                Formulario público para registrar cliente y crear solicitud de crédito en un solo flujo.
              </Typography>
              <Typography sx={{ color: '#d93025', fontWeight: 700, fontSize: 12.5 }}>
                * Indica que la pregunta es obligatoria
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        {error ? <Alert severity='error'>{error}</Alert> : null}

        <PublicQuestionCard title='FULL NAME' subtitle='NOMBRE COMPLETO' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('nombre')}
            helperText={isRequiredMissing('nombre') ? 'Campo obligatorio' : 'Tu respuesta'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='LAST NAME' subtitle='APELLIDO' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='apellido'
            value={form.apellido}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('apellido')}
            helperText={isRequiredMissing('apellido') ? 'Campo obligatorio' : 'Tu respuesta'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='TELEPHONE NUMBER' subtitle='NUMERO DE TELEFONO'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='telefono'
            value={form.telefono}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='EMAIL' subtitle='CORREO ELECTRONICO' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='email'
            type='email'
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('email')}
            helperText={isRequiredMissing('email') ? 'Campo obligatorio' : 'Ejemplo: cliente@correo.com'}
            sx={googleTextFieldSx}
          />
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={1.25}
            alignItems={{ md: 'center' }}
            sx={{ mt: 2.5, flexWrap: 'wrap' }}
          >
            <Button
              type='button'
              variant='tonal'
              color='info'
              onClick={handleSendVerificationCode}
              disabled={emailVerificationLoading || emailCodeValidationLoading || !form.email}
            >
              {emailVerificationLoading ? 'Enviando código...' : 'Enviar código de verificación'}
            </Button>
            <MuiTextField
              variant='standard'
              label={undefined}
              size='small'
              value={emailVerificationCode}
              onChange={event => setEmailVerificationCode(event.target.value)}
              placeholder='Ingresa el código'
              sx={{ ...googleTextFieldSx, minWidth: { xs: '100%', md: 240 } }}
            />
            <Button
              type='button'
              variant='contained'
              color='success'
              onClick={handleVerifyCode}
              disabled={!emailVerificationSent || emailCodeValidationLoading || !emailVerificationCode}
              sx={{ textTransform: 'none' }}
            >
              {emailCodeValidationLoading ? 'Verificando...' : 'Verificar correo'}
            </Button>
            {emailVerified ? <Alert severity='success'>Correo verificado</Alert> : null}
          </Stack>
          {emailVerificationMessage ? (
            <Typography variant='caption' color='text.secondary' sx={{ mt: 0.75, display: 'block' }}>
              {emailVerificationMessage}
            </Typography>
          ) : null}
        </PublicQuestionCard>

        <PublicQuestionCard title='DATE OF BIRTH' subtitle='FECHA DE NACIMIENTO' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='fecha_nacimiento'
            type='date'
            value={form.fecha_nacimiento}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: true }}
            error={isRequiredMissing('fecha_nacimiento')}
            helperText={isRequiredMissing('fecha_nacimiento') ? 'Campo obligatorio' : 'mm/dd/yyyy'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='SEX' subtitle='SEXO' required>
          <FormControl fullWidth required error={isRequiredMissing('sexo')}>
            <RadioGroup value={form.sexo} onChange={handleSingleValue('sexo')}>
              {SEXO_OPTIONS.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<GoogleRadio value={option.value} />}
                  label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='ADDRESS' subtitle='DIRECCION'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='direccion'
            value={form.direccion}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='ALTERNATE CONTACT NAME' subtitle='NOMBRE CONTACTO'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='nombre_contacto'
            value={form.nombre_contacto}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='ALTERNATE CONTACT LAST NAME' subtitle='APELLIDO CONTACTO'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='apellido_contacto'
            value={form.apellido_contacto}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='ALTERNATE CONTACT TELEPHONE' subtitle='TELEFONO CONTACTO'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='telefono_contacto'
            value={form.telefono_contacto}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='ALTERNATE CONTACT EMAIL' subtitle='EMAIL CONTACTO'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='email_contacto'
            type='email'
            value={form.email_contacto}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='ALTERNATE CONTACT ADDRESS' subtitle='DIRECCION CONTACTO'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='direccion_contacto'
            value={form.direccion_contacto}
            onChange={handleChange}
            fullWidth
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='OBSERVATIONS' subtitle='OBSERVACIONES'>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='observaciones'
            value={form.observaciones}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={3}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='CURRENT LEGAL STATUS' subtitle='ESTATUS LEGAL ACTUAL' required>
          <FormControl fullWidth required error={isRequiredMissing('status_legal')}>
            <RadioGroup value={form.status_legal} onChange={handleSingleValue('status_legal')}>
              {STATUS_LEGAL_OPTIONS.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<GoogleRadio value={option.value} />}
                  label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='YOU ARE CURRENTLY EMPLOYED' subtitle='TIENES EMPLEO ACTUALMENTE?' required>
          <FormControl fullWidth required error={isRequiredMissing('empleo_actual')}>
            <RadioGroup value={form.empleo_actual} onChange={handleSingleValue('empleo_actual')}>
              {['SI', 'NO', 'OTRO'].map(option => (
                <FormControlLabel
                  key={option}
                  control={<GoogleRadio value={option} />}
                  label={
                    <Typography sx={{ color: '#202124', fontSize: 14.5 }}>
                      {option === 'SI' ? 'SI (YES)' : option === 'NO' ? 'NO' : 'OTRO (OTHER)'}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='ANTIQUITY AT WORK' subtitle='ANTIGUEDAD EN EL TRABAJO' required>
          <FormControl fullWidth required error={isRequiredMissing('antiguedad_laboral_meses')}>
            <RadioGroup value={form.antiguedad_laboral_meses} onChange={handleSingleValue('antiguedad_laboral_meses')}>
              {ANTIGUEDAD_LABORAL_OPTIONS.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<GoogleRadio value={option.value} />}
                  label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='MONTHLY INCOME' subtitle='INGRESOS MENSUALES' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='ingresos_mensuales'
            type='number'
            value={form.ingresos_mensuales}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('ingresos_mensuales')}
            helperText={isRequiredMissing('ingresos_mensuales') ? 'Campo obligatorio' : 'Ejemplo: 2500'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='HOUSE PAYMENT OR RENT' subtitle='PAGO DE CASA PROPIO O RENTA' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='pago_casa_renta_mensual'
            type='number'
            value={form.pago_casa_renta_mensual}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('pago_casa_renta_mensual')}
            helperText={isRequiredMissing('pago_casa_renta_mensual') ? 'Campo obligatorio' : 'Ejemplo: 500'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard
          title='CAR PAYMENT AND MONTHLY INSURANCE'
          subtitle='PAGO DE CARRO Y SEGURO MENSUAL'
          required
        >
          <MuiTextField
            variant='standard'
            label={undefined}
            name='pago_carro_seguro_mensual'
            type='number'
            value={form.pago_carro_seguro_mensual}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('pago_carro_seguro_mensual')}
            helperText={isRequiredMissing('pago_carro_seguro_mensual') ? 'Campo obligatorio' : 'Ejemplo: 300'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='OTHER EXPENSES' subtitle='OTROS GASTOS' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='otros_gastos_mensuales'
            type='number'
            value={form.otros_gastos_mensuales}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('otros_gastos_mensuales')}
            helperText={isRequiredMissing('otros_gastos_mensuales') ? 'Campo obligatorio' : 'Ejemplo: 200'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='DESTINATION OF THE REQUEST' subtitle='DESTINO DE LA SOLICITUD' required>
          <FormControl fullWidth required error={isRequiredMissing('destino')}>
            <RadioGroup value={form.destino} onChange={handleSingleValue('destino')}>
              {DESTINO_OPTIONS.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<GoogleRadio value={option.value} />}
                  label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='FORM OF PAYMENT' subtitle='FORMA DE PAGOS' required>
          <FormControl fullWidth required error={isRequiredMissing('modalidad')}>
            <RadioGroup value={form.modalidad} onChange={handleSingleValue('modalidad')}>
              {MODALIDAD_OPTIONS.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<GoogleRadio value={option.value} />}
                  label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='APPLICATION AMOUNT' subtitle='MONTO DE SU SOLICITUD' required>
          <FormControl fullWidth required error={isRequiredMissing('monto_solicitud_rango')}>
            <RadioGroup value={form.monto_solicitud_rango} onChange={handleSingleValue('monto_solicitud_rango')}>
              {MONTO_RANGO_OPTIONS.map(option => (
                <FormControlLabel
                  key={option.value}
                  control={<GoogleRadio value={option.value} />}
                  label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PublicQuestionCard>

        <PublicQuestionCard title='AMOUNT REQUESTED' subtitle='MONTO SOLICITADO' required>
          <MuiTextField
            variant='standard'
            label={undefined}
            name='monto_solicitado'
            type='number'
            value={form.monto_solicitado}
            onChange={handleChange}
            fullWidth
            required
            error={isRequiredMissing('monto_solicitado')}
            helperText={isRequiredMissing('monto_solicitado') ? 'Campo obligatorio' : 'Ejemplo: 2000'}
            sx={googleTextFieldSx}
          />
        </PublicQuestionCard>

        <PublicQuestionCard title='IMPORTANT FILE' subtitle='ARCHIVOS (IMPORTANTE)' required>
          <Stack spacing={1.25}>
            <Typography color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
              UPLOAD IDENTIFICATION (ID) / SUBIR IDENTIFICACION (ID)
            </Typography>
            <Button variant='outlined' component='label' size='small' sx={googleOutlinedButtonSx}>
              Añadir archivo
              <input hidden type='file' accept='application/pdf,.pdf' onChange={handleDocumentoIdentidad} />
            </Button>
            {documentoIdentidad ? renderFileChips([documentoIdentidad], handleRemoveDocumentoIdentidad) : null}
            <Typography
              variant='caption'
              color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}
            >
              {documentoIdentidad ? '1 archivo cargado.' : 'Sube 1 archivo compatible. Tamaño máximo: 10 MB.'}
            </Typography>
          </Stack>
        </PublicQuestionCard>

        <PublicQuestionCard title='BANK STATEMENTS' subtitle='ESTADOS DE CUENTAS BANCARIOS' required>
          <Stack spacing={1.25}>
            <Typography color='text.secondary'>LAST 2 MONTHS / ULTIMOS 2 MESES</Typography>
            <Typography color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
              Sube entre 1 y 4 archivos compatibles. Tamaño máximo por archivo: 10MB.
            </Typography>
            <Button variant='outlined' component='label' size='small' sx={googleOutlinedButtonSx}>
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
        </PublicQuestionCard>

        <PublicQuestionCard title='PROOF OF INCOME' subtitle='COMPROBANTES DE INGRESOS' required>
          <Stack spacing={1.25}>
            <Typography color='text.secondary'>
              Sube entre 1 y 4 comprobantes. Tamaño máximo por archivo: 10MB.
            </Typography>
            <Typography color={isRequiredMissing('comprobantes_ingreso') ? 'error.main' : 'text.secondary'}>
              Debes cargar entre 1 y 4 archivos PDF.
            </Typography>
            <Button variant='outlined' component='label' size='small' sx={googleOutlinedButtonSx}>
              Añadir archivo
              <input
                hidden
                type='file'
                accept='application/pdf,.pdf'
                multiple
                onChange={handleComprobantesIngresoFiles}
              />
            </Button>
            {renderFileChips(documentosComprobantesIngreso, handleRemoveComprobanteIngreso)}
            <Typography
              variant='caption'
              color={isRequiredMissing('comprobantes_ingreso') ? 'error.main' : 'text.secondary'}
            >
              {documentosComprobantesIngreso.length
                ? `${documentosComprobantesIngreso.length} archivo(s) cargado(s)`
                : 'No hay comprobantes cargados'}
            </Typography>
          </Stack>
        </PublicQuestionCard>

        <Card sx={publicQuestionCardSx}>
          <CardContent sx={publicQuestionInnerSx}>
            <Stack spacing={2}>
              <Button variant='contained' type='submit' disabled={saving} fullWidth sx={googlePrimaryButtonSx}>
                {saving ? 'Guardando...' : 'Enviar solicitud'}
              </Button>
              <FormControlLabel
                control={
                  <GoogleCheckbox
                    checked={acceptedPublicTerms}
                    onChange={event => setAcceptedPublicTerms(event.target.checked)}
                  />
                }
                label='Acepto el aviso legal y el tratamiento de mis datos.'
              />
            </Stack>
          </CardContent>
        </Card>

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

  return (
    <Stack spacing={publicMode ? 1.5 : 3} component='form' onSubmit={handleSubmit} sx={rootFormSx}>
      <Card sx={introCardSx}>
        <CardContent>
          <Stack spacing={0.75}>
            <Typography
              variant='overline'
              sx={{
                letterSpacing: '0.14em',
                color: publicMode ? '#137333' : 'text.secondary',
                fontWeight: 700,
                fontSize: '0.68rem'
              }}
            >
              {publicMode ? 'Public intake form' : 'Formulario interno'}
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                color: '#202124',
                fontSize: '2.05rem'
              }}
            >
              CUSTOMER PRE-QUALIFICATION
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                color: '#202124',
                fontSize: '2.05rem'
              }}
            >
              PRECALIFICACION DE CLIENTES
            </Typography>
            <Typography color='text.secondary' sx={{ fontSize: 14.5, lineHeight: 1.45 }}>
              {publicMode
                ? 'Formulario público para registrar cliente y crear solicitud de crédito en un solo flujo.'
                : 'Formulario unificado para registrar cliente y crear solicitud de crédito en un solo flujo.'}
            </Typography>
            <Typography sx={{ color: '#d93025', fontWeight: 700, fontSize: 12.5 }}>
              * Indica que la pregunta es obligatoria
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {error ? <Alert severity='error'>{error}</Alert> : null}

      <Grid container spacing={publicMode ? 1.25 : 3}>
        <Grid size={publicMode ? { xs: 12 } : { xs: 12, lg: 8 }}>
          <Stack spacing={publicMode ? 0.9 : 3}>
            <Card sx={sectionCardSx}>
              <CardHeader
                title='Datos personales / Personal data'
                subheader={publicMode ? 'La información principal del solicitante' : undefined}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={publicMode ? 0.9 : 2}>
                  <Grid size={fieldHalfSize}>
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
                  <Grid size={fieldHalfSize}>
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
                  <Grid size={fieldHalfSize}>
                    <TextField
                      label='Teléfono'
                      name='telefono'
                      value={form.telefono}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={fieldHalfSize}>
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
                    <Stack
                      direction={{ xs: 'column', md: 'row' }}
                      spacing={1.5}
                      alignItems={{ md: 'center' }}
                      sx={publicMode ? { p: 0, border: 'none', borderRadius: 0, bgcolor: 'transparent' } : undefined}
                    >
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
                        sx={{ minWidth: { xs: '100%', md: 220 } }}
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
                      <Typography variant='caption' color='text.secondary' sx={{ mt: 0.75, display: 'block' }}>
                        {emailVerificationMessage}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid size={fieldHalfSize}>
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
                  <Grid size={fieldHalfSize}>
                    <FormControl fullWidth required error={isRequiredMissing('sexo')} sx={questionBoxSx}>
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        SEX * / SEXO
                      </FormLabel>
                      <RadioGroup value={form.sexo} onChange={handleSingleValue('sexo')}>
                        {SEXO_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<GoogleRadio value={option.value} />}
                            label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label='Dirección'
                      name='direccion'
                      value={form.direccion}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={sectionCardSx}>
              <CardHeader
                title='Información de contacto alterno o emergente'
                subheader={publicMode ? 'Contacto de respaldo' : undefined}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={publicMode ? 0.9 : 2}>
                  <Grid size={fieldHalfSize}>
                    <TextField
                      label='Nombre contacto'
                      name='nombre_contacto'
                      value={form.nombre_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={fieldHalfSize}>
                    <TextField
                      label='Apellido contacto'
                      name='apellido_contacto'
                      value={form.apellido_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={fieldHalfSize}>
                    <TextField
                      label='Teléfono contacto'
                      name='telefono_contacto'
                      value={form.telefono_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={fieldHalfSize}>
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
                    <TextField
                      label='Dirección contacto'
                      name='direccion_contacto'
                      value={form.direccion_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
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

            <Card sx={sectionCardSx}>
              <CardHeader
                title='Perfil legal y laboral / Legal & work profile'
                subheader={publicMode ? 'Datos de elegibilidad' : undefined}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={publicMode ? 0.9 : 2}>
                  <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth required error={isRequiredMissing('status_legal')} sx={questionBoxSx}>
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        CURRENT LEGAL STATUS * / ESTATUS LEGAL ACTUAL
                      </FormLabel>
                      <RadioGroup value={form.status_legal} onChange={handleSingleValue('status_legal')}>
                        {STATUS_LEGAL_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<GoogleRadio value={option.value} />}
                            label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth required error={isRequiredMissing('empleo_actual')} sx={questionBoxSx}>
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        YOU ARE CURRENTLY EMPLOYED * / ¿TIENES EMPLEO ACTUALMENTE?
                      </FormLabel>
                      <RadioGroup value={form.empleo_actual} onChange={handleSingleValue('empleo_actual')}>
                        {['SI', 'NO', 'OTRO'].map(option => (
                          <FormControlLabel
                            key={option}
                            control={<GoogleRadio value={option} />}
                            label={
                              <Typography sx={{ color: '#202124', fontSize: 14.5 }}>
                                {option === 'SI' ? 'SI (YES)' : option === 'NO' ? 'NO' : 'OTRO (OTHER)'}
                              </Typography>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('antiguedad_laboral_meses')}
                      sx={questionBoxSx}
                    >
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        ANTIQUITY AT WORK * / ANTIGUEDAD EN EL TRABAJO
                      </FormLabel>
                      <RadioGroup
                        value={form.antiguedad_laboral_meses}
                        onChange={handleSingleValue('antiguedad_laboral_meses')}
                      >
                        {ANTIGUEDAD_LABORAL_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<GoogleRadio value={option.value} />}
                            label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={sectionCardSx}>
              <CardHeader
                title='Finanzas / Financial profile'
                subheader={publicMode ? 'Ingresos y gastos mensuales' : undefined}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={publicMode ? 0.9 : 2}>
                  <Grid size={fieldHalfSize}>
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
                  <Grid size={fieldHalfSize}>
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
                  <Grid size={fieldHalfSize}>
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
                  <Grid size={fieldHalfSize}>
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

            <Card sx={sectionCardSx}>
              <CardHeader
                title='Información crediticia / Credit details'
                subheader={publicMode ? 'Destino, monto y forma de pago' : undefined}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={publicMode ? 0.9 : 2}>
                  <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth required error={isRequiredMissing('destino')} sx={questionBoxSx}>
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        DESTINATION OF THE REQUEST * / DESTINO DE LA SOLICITUD
                      </FormLabel>
                      <RadioGroup value={form.destino} onChange={handleSingleValue('destino')}>
                        {DESTINO_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<GoogleRadio value={option.value} />}
                            label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <FormControl fullWidth required error={isRequiredMissing('modalidad')} sx={questionBoxSx}>
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        FORM OF PAYMENT * / FORMA DE PAGOS
                      </FormLabel>
                      <RadioGroup value={form.modalidad} onChange={handleSingleValue('modalidad')}>
                        {MODALIDAD_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<GoogleRadio value={option.value} />}
                            label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={fieldHalfSize}>
                    <FormControl
                      fullWidth
                      required
                      error={isRequiredMissing('monto_solicitud_rango')}
                      sx={questionBoxSx}
                    >
                      <FormLabel
                        sx={{ color: '#202124', mb: 1, fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.25 }}
                      >
                        APPLICATION AMOUNT * / MONTO DE SU SOLICITUD
                      </FormLabel>
                      <RadioGroup
                        value={form.monto_solicitud_rango}
                        onChange={handleSingleValue('monto_solicitud_rango')}
                      >
                        {MONTO_RANGO_OPTIONS.map(option => (
                          <FormControlLabel
                            key={option.value}
                            control={<GoogleRadio value={option.value} />}
                            label={<Typography sx={{ color: '#202124', fontSize: 14.5 }}>{option.label}</Typography>}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid size={fieldHalfSize}>
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
                    <Grid size={fieldHalfSize}>
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
                    <Grid size={fieldHalfSize}>
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
                    <Grid size={fieldHalfSize}>
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
                    <Grid size={fieldHalfSize}>
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
              <Card sx={sectionCardSx}>
                <CardHeader title='Referido / Referral' />
                <Divider />
                <CardContent>
                  <Grid container spacing={publicMode ? 1.5 : 2}>
                    <Grid size={fieldThirdSize}>
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
                    <Grid size={fieldThirdSize}>
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
                    <Grid size={fieldThirdSize}>
                      <TextField
                        label='Referido externo (si no está en base)'
                        name='referido_externo'
                        value={form.referido_externo}
                        onChange={handleChange}
                        fullWidth
                        disabled={!form.es_referido}
                      />
                    </Grid>
                    <Grid size={fieldThirdSize}>
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

            <Card sx={sectionCardSx}>
              <CardHeader title='Archivos / Files' subheader={publicMode ? 'Documentación requerida' : undefined} />
              <Divider />
              <CardContent>
                <Stack spacing={publicMode ? 1.25 : 2}>
                  <Stack spacing={1} sx={questionBoxSx}>
                    <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: '#202124' }}>
                      IMPORTANT (FILE) * / ARCHIVOS (IMPORTANTE)
                    </Typography>
                    <Typography color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}>
                      UPLOAD IDENTIFICATION (ID) / SUBIR IDENTIFICACION (ID)
                    </Typography>
                    <Button variant='outlined' component='label' size='small' sx={googleOutlinedButtonSx}>
                      Añadir archivo
                      <input hidden type='file' accept='application/pdf,.pdf' onChange={handleDocumentoIdentidad} />
                    </Button>
                    {documentoIdentidad ? renderFileChips([documentoIdentidad], handleRemoveDocumentoIdentidad) : null}
                    <Typography
                      variant='caption'
                      color={isRequiredMissing('documento_identidad') ? 'error.main' : 'text.secondary'}
                    >
                      {documentoIdentidad ? '1 archivo cargado.' : 'Sube 1 archivo compatible. Tamaño máximo: 10 MB.'}
                    </Typography>
                  </Stack>

                  <Stack spacing={1} sx={questionBoxSx}>
                    <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: '#202124' }}>
                      HOW MANY BANK STATEMENTS * / ESTADOS DE CUENTAS BANCARIOS
                    </Typography>
                    <Typography color='text.secondary' sx={{ fontSize: 14 }}>
                      LAST 2 MONTHS / ULTIMOS 2 MESES
                    </Typography>
                    <Typography color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}>
                      Sube entre 1 y 4 archivos compatibles. Tamaño máximo por archivo: 10MB.
                    </Typography>
                    <Button variant='outlined' component='label' size='small' sx={googleOutlinedButtonSx}>
                      Añadir archivo
                      <input
                        hidden
                        type='file'
                        accept='application/pdf,.pdf'
                        multiple
                        onChange={handleEstadoCuentaFiles}
                      />
                    </Button>
                    {renderFileChips(documentosEstadoCuenta, handleRemoveEstadoCuenta)}
                    <Typography
                      variant='caption'
                      color={isRequiredMissing('estado_cuenta') ? 'error.main' : 'text.secondary'}
                    >
                      {documentosEstadoCuenta.length
                        ? `${documentosEstadoCuenta.length} archivo(s) cargado(s)`
                        : 'No hay estados de cuenta cargados'}
                    </Typography>
                  </Stack>

                  <Stack spacing={1} sx={questionBoxSx}>
                    <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: '#202124' }}>
                      PROOF OF INCOME * / COMPROBANTES DE INGRESOS
                    </Typography>
                    <Typography color='text.secondary' sx={{ fontSize: 14 }}>
                      Sube entre 1 y 4 comprobantes. Tamaño máximo por archivo: 10MB.
                    </Typography>
                    <Typography color={isRequiredMissing('comprobantes_ingreso') ? 'error.main' : 'text.secondary'}>
                      Debes cargar entre 1 y 4 archivos PDF.
                    </Typography>
                    <Button variant='outlined' component='label' size='small' sx={googleOutlinedButtonSx}>
                      Añadir archivo
                      <input
                        hidden
                        type='file'
                        accept='application/pdf,.pdf'
                        multiple
                        onChange={handleComprobantesIngresoFiles}
                      />
                    </Button>
                    {renderFileChips(documentosComprobantesIngreso, handleRemoveComprobanteIngreso)}
                    <Typography
                      variant='caption'
                      color={isRequiredMissing('comprobantes_ingreso') ? 'error.main' : 'text.secondary'}
                    >
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

        {publicMode ? null : (
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={actionCardSx}>
              <CardHeader title='Acciones' subheader='Revisa y envía tu solicitud' />
              <Divider />
              <CardContent>
                <Stack spacing={1.5}>
                  <Button variant='contained' type='submit' disabled={saving} fullWidth sx={googlePrimaryButtonSx}>
                    {saving ? 'Guardando...' : 'Publicar cliente y solicitud'}
                  </Button>
                  <Button variant='outlined' onClick={() => router.push('/clientes')} disabled={saving} fullWidth>
                    Cancelar
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

      {publicMode ? (
        <Card sx={actionCardSx}>
          <CardHeader title='Acciones' subheader='Revisa y envía tu solicitud' />
          <Divider />
          <CardContent>
            <Stack spacing={1.25}>
              <Button variant='contained' type='submit' disabled={saving} fullWidth sx={googlePrimaryButtonSx}>
                {saving ? 'Guardando...' : 'Enviar solicitud'}
              </Button>
              <FormControlLabel
                control={
                  <GoogleCheckbox
                    checked={acceptedPublicTerms}
                    onChange={event => setAcceptedPublicTerms(event.target.checked)}
                  />
                }
                label='Acepto el aviso legal y el tratamiento de mis datos.'
              />
            </Stack>
          </CardContent>
        </Card>
      ) : null}

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
