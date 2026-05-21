'use client'

import { useMemo, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { crearSolicitudShortForm } from '@/api/solicitudes'

const introCardSx = {
  borderTop: theme => `10px solid ${theme.palette.primary.main}`,
  borderRadius: 3
}

const sectionCardSx = { borderRadius: 3 }

const AMOUNT_OPTIONS = ['300', '500', '1000', '1500', '2000', '3000']
const MODALIDAD_OPTIONS = [
  { value: 'SEMANAL', label: 'Semanal' },
  { value: 'QUINCENAL', label: 'Quincenal' },
  { value: 'MENSUAL', label: 'Mensual' }
]

const TRACKING_KEYS = [
  'manual',
  'entry_source',
  'requested_amount_source',
  'source',
  'ad_id',
  'campaign_id',
  'campaign_name',
  'adset_id',
  'adset_name',
  'origin',
  'aid',
  'utm_medium',
  'utm_source',
  'utm_id',
  'utm_content',
  'utm_term',
  'utm_campaign',
  'fbclid',
  'requested_amount'
]

const isValidEmailFormat = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())

const sanitizeAmount = value => String(value || '').replace(/[^\d.]/g, '')

const extractSolicitudId = payload =>
  payload?.data?.id || payload?.id || payload?.data?.solicitud_id || payload?.solicitud_id || ''

export default function ShortFormSolicitudModule() {
  const searchParams = useSearchParams()

  const tracking = useMemo(() => {
    const entries = Object.fromEntries(searchParams.entries())

    return TRACKING_KEYS.reduce((accumulator, key) => {
      const value = String(entries[key] || '').trim()

      if (value) accumulator[key] = value

      return accumulator
    }, {})
  }, [searchParams])

  const [form, setForm] = useState({
    requested_amount: sanitizeAmount(tracking.requested_amount || ''),
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    modalidad: 'SEMANAL',
    idioma: 'ES',
    consentimiento: true
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target

    setForm(previous => ({
      ...previous,
      [name]: name === 'requested_amount' ? sanitizeAmount(value) : value
    }))
  }

  const isRequiredMissing = field => {
    if (!submitAttempted) return false

    if (field === 'requested_amount') return !(Number(form.requested_amount || 0) > 0)
    if (field === 'nombre') return !String(form.nombre || '').trim()
    if (field === 'apellido') return !String(form.apellido || '').trim()
    if (field === 'telefono') return !String(form.telefono || '').trim()
    if (field === 'email') return !String(form.email || '').trim()

    return false
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setSubmitAttempted(true)
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      if (!(Number(form.requested_amount || 0) > 0)) {
        throw new Error('Debes ingresar un monto solicitado válido.')
      }

      if (!String(form.nombre || '').trim()) throw new Error('Debes ingresar el nombre.')
      if (!String(form.apellido || '').trim()) throw new Error('Debes ingresar el apellido.')
      if (!String(form.telefono || '').trim()) throw new Error('Debes ingresar el teléfono.')
      if (!String(form.email || '').trim()) throw new Error('Debes ingresar el correo.')
      if (!isValidEmailFormat(form.email)) throw new Error('Debes ingresar un correo con formato válido.')

      const payload = {
        nombre: String(form.nombre || '').trim(),
        apellido: String(form.apellido || '').trim(),
        telefono: String(form.telefono || '').trim(),
        email: String(form.email || '')
          .trim()
          .toLowerCase(),
        requested_amount: Number(form.requested_amount || 0),
        monto_solicitado: Number(form.requested_amount || 0),
        modalidad: form.modalidad,
        idioma: form.idioma,
        consentimiento: Boolean(form.consentimiento),
        tracking_params: tracking,
        ...tracking
      }

      const response = await crearSolicitudShortForm(payload)
      const createdId = extractSolicitudId(response)

      setSuccess(
        createdId ? `Solicitud corta enviada correctamente. ID: ${createdId}` : 'Solicitud corta enviada correctamente.'
      )
    } catch (err) {
      setError(err.message || 'No se pudo enviar la solicitud corta.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
      <Card sx={introCardSx}>
        <CardContent>
          <Stack spacing={1}>
            <Typography
              sx={{
                letterSpacing: '0.14em',
                color: 'text.secondary',
                fontWeight: 700,
                fontSize: '0.68rem'
              }}
            >
              SHORT FORM
            </Typography>
            <Typography
              variant='h3'
              sx={{ fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em', color: '#202124' }}
            >
              Solicitud rápida de crédito
            </Typography>
            <Typography color='text.secondary' sx={{ fontSize: 15, lineHeight: 1.45, maxWidth: 760 }}>
              Completa este formulario corto para registrar una nueva solicitud en un flujo independiente y con tracking
              separado del resto del sistema.
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {error ? <Alert severity='error'>{error}</Alert> : null}
      {success ? <Alert severity='success'>{success}</Alert> : null}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card sx={sectionCardSx}>
            <CardContent>
              <Stack spacing={3}>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: 700, mb: 0.5 }}>
                    Monto solicitado
                  </Typography>
                  <Typography color='text.secondary'>Puedes usar el monto del enlace o escribir otro valor.</Typography>
                </Box>

                <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
                  {AMOUNT_OPTIONS.map(amount => (
                    <Chip
                      key={amount}
                      label={`$${amount}`}
                      color={String(form.requested_amount) === amount ? 'primary' : 'default'}
                      variant={String(form.requested_amount) === amount ? 'filled' : 'outlined'}
                      onClick={() => setForm(previous => ({ ...previous, requested_amount: amount }))}
                    />
                  ))}
                </Stack>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Monto solicitado *'
                      name='requested_amount'
                      type='number'
                      value={form.requested_amount}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('requested_amount')}
                      helperText={isRequiredMissing('requested_amount') ? 'Campo obligatorio' : 'Ejemplo: 2000'}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      select
                      label='Modalidad'
                      name='modalidad'
                      value={form.modalidad}
                      onChange={handleChange}
                      fullWidth
                    >
                      {MODALIDAD_OPTIONS.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Nombre *'
                      name='nombre'
                      value={form.nombre}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('nombre')}
                      helperText={isRequiredMissing('nombre') ? 'Campo obligatorio' : ''}
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
                      helperText={isRequiredMissing('apellido') ? 'Campo obligatorio' : ''}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Teléfono *'
                      name='telefono'
                      value={form.telefono}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('telefono')}
                      helperText={isRequiredMissing('telefono') ? 'Campo obligatorio' : ''}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label='Correo electrónico *'
                      name='email'
                      type='email'
                      value={form.email}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={isRequiredMissing('email')}
                      helperText={isRequiredMissing('email') ? 'Campo obligatorio' : ''}
                    />
                  </Grid>
                </Grid>

                <Divider />

                <Stack spacing={1}>
                  <Typography variant='h6' sx={{ fontWeight: 700 }}>
                    Tracking del enlace
                  </Typography>
                  <Typography color='text.secondary'>
                    Este flujo guarda separado el origen de campaña y los parámetros de marketing del enlace.
                  </Typography>
                  <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
                    {Object.entries(tracking).map(([key, value]) => (
                      <Chip key={key} label={`${key}: ${value}`} variant='outlined' />
                    ))}
                    {!Object.keys(tracking).length ? (
                      <Chip label='Sin parámetros de tracking' variant='outlined' />
                    ) : null}
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ borderRadius: 3, position: 'sticky', top: 24 }}>
            <CardHeader title='Acciones' subheader='Envía la solicitud al flujo corto independiente.' />
            <Divider />
            <CardContent>
              <Stack spacing={1.5}>
                <Button variant='contained' type='submit' disabled={saving} fullWidth>
                  {saving ? 'Enviando...' : 'Enviar solicitud corta'}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}
