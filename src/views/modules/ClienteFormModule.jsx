'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import {
  actualizarCliente,
  crearCliente,
  enviarCodigoVerificacionEmailCliente,
  listarClientes,
  obtenerCliente,
  verificarCodigoEmailCliente
} from '@/api/clientes'

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
  observaciones: ''
}

const parseBoolean = value => value === true || value === 1 || String(value || '').toLowerCase() === 'true'

const introCardSx = {
  borderTop: theme => `10px solid ${theme.palette.primary.main}`,
  borderRadius: 3
}
const sectionCardSx = { borderRadius: 3 }
const actionCardSx = {
  borderRadius: 3,
  position: 'sticky',
  top: 24,
  alignSelf: 'flex-start',
  width: '100%'
}
const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows

  return []
}

const getClienteLabel = cliente => [cliente?.nombre, cliente?.apellido].filter(Boolean).join(' ').trim()
const getClienteId = cliente =>
  String(cliente?.id || cliente?.cliente_id || cliente?.uuid || cliente?._id || cliente?.clienteId || '')
const normalizeText = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
const isSameCliente = (left, right) => {
  const leftId = getClienteId(left)
  const rightId = getClienteId(right)

  if (leftId && rightId) return leftId === rightId

  return normalizeText(getClienteLabel(left)) === normalizeText(getClienteLabel(right))
}
const isValidEmailFormat = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())

export default function ClienteFormModule({ clienteId = null }) {
  const router = useRouter()

  const [form, setForm] = useState(initialForm)
  const [clientesActivos, setClientesActivos] = useState([])
  const [loadingClientesActivos, setLoadingClientesActivos] = useState(false)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(Boolean(clienteId))
  const [error, setError] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [emailVerificationCode, setEmailVerificationCode] = useState('')
  const [emailVerificationSent, setEmailVerificationSent] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [verifiedEmail, setVerifiedEmail] = useState('')
  const [emailVerificationLoading, setEmailVerificationLoading] = useState(false)
  const [emailCodeValidationLoading, setEmailCodeValidationLoading] = useState(false)
  const [emailVerificationMessage, setEmailVerificationMessage] = useState('')
  const [documentoIdentidadFile, setDocumentoIdentidadFile] = useState(null)
  const [documentoIdentidadError, setDocumentoIdentidadError] = useState('')

  useEffect(() => {
    const loadClientesActivos = async () => {
      setLoadingClientesActivos(true)

      try {
        const response = await listarClientes({ page: 1, limit: 500, search: '', estado: 'ACTIVO' })
        let rows = extractRows(response)

        if (clienteId) {
          rows = rows.filter(item => getClienteId(item) !== String(clienteId))
        }

        setClientesActivos(rows)
      } catch (_err) {
        // Mantener formulario usable aunque falle catálogo de referidos
        setClientesActivos([])
      } finally {
        setLoadingClientesActivos(false)
      }
    }

    loadClientesActivos()
  }, [clienteId])

  useEffect(() => {
    if (!form.es_referido || !form.referido_por || !clientesActivos.length) return

    const alreadyId = clientesActivos.some(item => getClienteId(item) === String(form.referido_por))

    if (alreadyId) return

    const byLabel = clientesActivos.find(
      item => normalizeText(getClienteLabel(item)) === normalizeText(form.referido_por)
    )

    if (getClienteId(byLabel)) {
      setForm(previous => ({ ...previous, referido_por: getClienteId(byLabel) }))
    }
  }, [clientesActivos, form.es_referido, form.referido_por])

  useEffect(() => {
    if (!clienteId) return

    const fetchCliente = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await obtenerCliente(clienteId)
        const cliente = response?.data || response

        setForm(previous => ({
          ...previous,
          nombre: cliente?.nombre || '',
          apellido: cliente?.apellido || '',
          telefono: cliente?.telefono || '',
          email: cliente?.email || '',
          direccion: cliente?.direccion || '',
          es_referido: parseBoolean(cliente?.es_referido),
          referido_por: cliente?.referido_por || '',
          referido_externo: cliente?.referido_por || '',
          monto_referido: String(cliente?.monto_referido ?? '0'),
          nombre_contacto: cliente?.nombre_contacto || '',
          apellido_contacto: cliente?.apellido_contacto || '',
          telefono_contacto: cliente?.telefono_contacto || '',
          email_contacto: cliente?.email_contacto || '',
          direccion_contacto: cliente?.direccion_contacto || '',
          observaciones: cliente?.observaciones || ''
        }))
      } catch (err) {
        setError(err.message || 'No se pudo cargar el cliente.')
      } finally {
        setLoading(false)
      }
    }

    fetchCliente()
  }, [clienteId])

  useEffect(() => {
    if (clienteId) return

    setEmailVerified(false)
    setVerifiedEmail('')
    setEmailVerificationSent(false)
    setEmailVerificationCode('')
    setEmailVerificationMessage('')
  }, [form.email, clienteId])

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

  const handleDocumentoIdentidadChange = event => {
    const file = event.target.files?.[0] || null

    if (!file) {
      setDocumentoIdentidadFile(null)
      setDocumentoIdentidadError('')
      return
    }

    const isPdf =
      file.type === 'application/pdf' ||
      String(file.name || '')
        .toLowerCase()
        .endsWith('.pdf')

    if (!isPdf) {
      setDocumentoIdentidadFile(null)
      setDocumentoIdentidadError('Solo se permite archivo PDF.')
      return
    }

    setDocumentoIdentidadFile(file)
    setDocumentoIdentidadError('')
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

      if (!clienteId) {
        if (!email) {
          throw new Error('Debes ingresar un correo para registrar y verificar el cliente.')
        }

        if (!isValidEmailFormat(email)) {
          throw new Error('Ingresa un correo con formato válido.')
        }

        if (!emailVerified || verifiedEmail !== email) {
          throw new Error('Debes verificar el correo con código antes de publicar el cliente.')
        }
      }

      const montoReferido = Number(String(form.monto_referido || '0').replace(',', '.'))

      if (!Number.isFinite(montoReferido) || montoReferido < 0) {
        throw new Error('El monto referido debe ser un valor mayor o igual a 0.')
      }

      const referidoPorCliente = clientesActivos.find(item => {
        const selected = String(form.referido_por || '')

        return getClienteId(item) === selected || normalizeText(getClienteLabel(item)) === normalizeText(selected)
      })
      const referidoPorNombre = referidoPorCliente ? getClienteLabel(referidoPorCliente) : ''
      const referidoExterno = String(form.referido_externo || '').trim()

      if (form.es_referido && !referidoPorNombre && !referidoExterno) {
        throw new Error('Debes seleccionar un cliente activo o indicar un referido externo.')
      }

      if (documentoIdentidadError) {
        throw new Error(documentoIdentidadError)
      }

      const payload = {
        ...form,
        email,
        es_referido: Boolean(form.es_referido),
        referido_por: form.es_referido ? referidoPorNombre || referidoExterno : '',
        monto_referido: form.es_referido ? Number(montoReferido.toFixed(2)) : 0
      }

      const buildFormData = data => {
        const formData = new FormData()

        Object.entries(data).forEach(([key, value]) => {
          if (value === undefined || value === null) return
          formData.append(key, typeof value === 'boolean' ? String(value) : String(value))
        })

        if (documentoIdentidadFile) {
          formData.append('documento_identidad', documentoIdentidadFile)
        }

        return formData
      }

      if (clienteId) {
        const submitPayload = documentoIdentidadFile ? buildFormData(payload) : payload
        await actualizarCliente(clienteId, submitPayload)
        router.replace('/clientes')
      } else {
        const submitPayload = documentoIdentidadFile ? buildFormData(payload) : payload
        await crearCliente(submitPayload)
        router.replace('/solicitudes/nueva')
      }
    } catch (err) {
      setError(err.message || 'No se pudo guardar el cliente.')
    } finally {
      setSaving(false)
    }
  }

  const handleSendVerificationCode = async () => {
    if (clienteId) return

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
      await enviarCodigoVerificacionEmailCliente(email)
      setEmailVerificationSent(true)
      setEmailVerificationMessage('Código de verificación enviado al correo.')
    } catch (err) {
      setError(err.message || 'No se pudo enviar el código de verificación.')
    } finally {
      setEmailVerificationLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    if (clienteId) return

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
      await verificarCodigoEmailCliente(email, codigo)
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

  const isRequiredMissing = field => {
    if (!submitAttempted) return false

    if (field === 'nombre') return !String(form.nombre || '').trim()
    if (field === 'apellido') return !String(form.apellido || '').trim()
    if (field === 'email') return !clienteId && !String(form.email || '').trim()
    if (field === 'referido_por') {
      if (!Boolean(form.es_referido)) return false

      return !String(form.referido_por || '').trim() && !String(form.referido_externo || '').trim()
    }

    return false
  }

  return (
    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
      <Card sx={introCardSx}>
        <CardContent>
          <Stack spacing={0.75}>
            <Typography
              sx={{
                letterSpacing: '0.14em',
                color: 'text.secondary',
                fontWeight: 700,
                fontSize: '0.68rem'
              }}
            >
              FORMULARIO INTERNO
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
              {clienteId ? 'EDIT CUSTOMER' : 'ADD NEW CUSTOMER'}
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
              {clienteId ? 'EDITAR CLIENTE' : 'AGREGAR NUEVO CLIENTE'}
            </Typography>
            <Typography color='text.secondary' sx={{ fontSize: 14.5, lineHeight: 1.45 }}>
              {clienteId
                ? 'Actualiza la información del cliente y su contacto alterno en un solo lugar.'
                : 'Registra un nuevo cliente para habilitar solicitudes, seguimiento y operación comercial.'}
            </Typography>
            <Typography sx={{ color: '#d93025', fontWeight: 700, fontSize: 12.5 }}>
              * Indica que la pregunta es obligatoria
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {error ? <Alert severity='error'>{error}</Alert> : null}
      {loading ? <Alert severity='info'>Cargando cliente...</Alert> : null}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>
            <Card sx={sectionCardSx}>
              <CardHeader
                title='Datos personales / Personal data'
                subheader='Completa la información principal del cliente.'
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label='Nombre'
                      name='nombre'
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder='Nombre del cliente'
                      fullWidth
                      required
                      error={isRequiredMissing('nombre')}
                      helperText={isRequiredMissing('nombre') ? 'Campo obligatorio' : 'Ejemplo: Juan'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Apellido'
                      name='apellido'
                      value={form.apellido}
                      onChange={handleChange}
                      placeholder='Apellido del cliente'
                      fullWidth
                      required
                      error={isRequiredMissing('apellido')}
                      helperText={isRequiredMissing('apellido') ? 'Campo obligatorio' : 'Ejemplo: Pérez'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Teléfono'
                      name='telefono'
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder='809-000-0000'
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Email'
                      name='email'
                      type='email'
                      value={form.email}
                      onChange={handleChange}
                      placeholder='cliente@correo.com'
                      fullWidth
                      required={!clienteId}
                      error={isRequiredMissing('email')}
                      helperText={isRequiredMissing('email') ? 'Campo obligatorio' : 'Ejemplo: cliente@correo.com'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>{null}</Grid>
                  {!clienteId ? (
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
                  ) : null}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Dirección'
                      name='direccion'
                      value={form.direccion}
                      onChange={handleChange}
                      placeholder='Dirección principal'
                      fullWidth
                    />
                  </Grid>
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
                      value={
                        clientesActivos.find(item => {
                          const selected = String(form.referido_por || '')

                          return (
                            getClienteId(item) === selected ||
                            normalizeText(getClienteLabel(item)) === normalizeText(selected)
                          )
                        }) || null
                      }
                      onChange={(_, value) =>
                        setForm(previous => ({
                          ...previous,
                          referido_por: value ? getClienteId(value) || getClienteLabel(value) : '',
                          referido_externo: value ? '' : previous.referido_externo
                        }))
                      }
                      getOptionLabel={option => getClienteLabel(option) || 'Cliente'}
                      isOptionEqualToValue={(option, value) => isSameCliente(option, value)}
                      disabled={!form.es_referido || loadingClientesActivos}
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
                                ? loadingClientesActivos
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
                      placeholder='0.00'
                      fullWidth
                      disabled={!form.es_referido}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Stack spacing={1}>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ sm: 'center' }}>
                        <Button variant='outlined' component='label' color='info'>
                          Cargar documento de identidad (PDF)
                          <input
                            hidden
                            type='file'
                            accept='application/pdf,.pdf'
                            onChange={handleDocumentoIdentidadChange}
                          />
                        </Button>
                        {documentoIdentidadFile ? (
                          <Button
                            variant='text'
                            color='inherit'
                            onClick={() => {
                              setDocumentoIdentidadFile(null)
                              setDocumentoIdentidadError('')
                            }}
                          >
                            Quitar archivo
                          </Button>
                        ) : null}
                      </Stack>
                      <Typography variant='caption' color={documentoIdentidadError ? 'error' : 'text.secondary'}>
                        {documentoIdentidadError
                          ? documentoIdentidadError
                          : 'Sube un PDF con licencia o pasaporte. Opcional.'}
                      </Typography>
                      {documentoIdentidadFile ? (
                        <Typography variant='body2' color='text.secondary'>
                          {documentoIdentidadFile.name} • {(documentoIdentidadFile.size / (1024 * 1024)).toFixed(2)} MB
                        </Typography>
                      ) : null}
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={sectionCardSx}>
              <CardHeader title='Contacto alterno / Alternative contact' subheader='Datos de referencia del cliente.' />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Nombre contacto'
                      name='nombre_contacto'
                      value={form.nombre_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Apellido contacto'
                      name='apellido_contacto'
                      value={form.apellido_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Teléfono contacto'
                      name='telefono_contacto'
                      value={form.telefono_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
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
                    <TextField
                      label='Dirección contacto'
                      name='direccion_contacto'
                      value={form.direccion_contacto}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={sectionCardSx}>
              <CardHeader title='Descripción / Description' subheader='Notas internas u observaciones adicionales.' />
              <Divider />
              <CardContent>
                <TextField
                  label='Observaciones'
                  name='observaciones'
                  value={form.observaciones}
                  onChange={handleChange}
                  placeholder='Notas internas del cliente'
                  fullWidth
                  multiline
                  minRows={5}
                />
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>
            <Card sx={actionCardSx}>
              <CardHeader title='Acciones' subheader='Revisa y guarda la información del cliente' />
              <Divider />
              <CardContent>
                <Stack spacing={1.5}>
                  <Button variant='contained' type='submit' disabled={saving || loading} fullWidth>
                    {saving ? 'Guardando...' : clienteId ? 'Actualizar cliente' : 'Publicar cliente'}
                  </Button>
                  <Button variant='outlined' onClick={() => router.push('/clientes')} disabled={saving} fullWidth>
                    Cancelar
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}
