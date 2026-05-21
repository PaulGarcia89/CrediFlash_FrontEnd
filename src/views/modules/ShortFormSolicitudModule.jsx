'use client'

import { useMemo, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { crearSolicitudShortForm } from '@/api/solicitudes'

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

const AMOUNT_OPTIONS = [
  { label: '$200 — $500', value: '350' },
  { label: '$500 — $1,000', value: '750' },
  { label: '$1,000 — $2,500', value: '2000' },
  { label: '$2,500 — $5,000', value: '3750' }
]

const PURPOSE_OPTIONS = [
  'Consolidación De Deudas',
  'Gastos Cotidianos/Emergencia',
  'Consolidación De Tarjetas De Crédito',
  'Compra De Auto',
  'Mejoras Del Hogar',
  'Gastos Médicos',
  'Negocio',
  'Impuestos',
  'Alquiler O Hipoteca',
  'Otro'
]

const MODALIDAD_OPTIONS = [
  { value: 'SEMANAL', label: 'Semanal' },
  { value: 'QUINCENAL', label: 'Quincenal' },
  { value: 'MENSUAL', label: 'Mensual' }
]

const TOTAL_STEPS = 7

const isValidEmailFormat = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())
const sanitizeAmount = value => String(value || '').replace(/[^\d.]/g, '')
const extractSolicitudId = payload =>
  payload?.data?.id || payload?.id || payload?.data?.solicitud_id || payload?.solicitud_id || ''

const getAmountRangeLabel = amountValue => {
  const amount = Number(amountValue || 0)

  if (amount >= 2500) return '$2,500+'
  if (amount >= 1000) return '$1,000 — $2,500'
  if (amount >= 500) return '$500 — $1,000'
  if (amount > 0) return '$100 — $500'

  return '$100 — $2,500'
}

const fieldInputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '999px',
    backgroundColor: '#fff',
    color: '#4a221d',
    fontSize: '1.15rem',
    '& fieldset': {
      borderColor: '#b37a5a',
      borderWidth: 1.5
    },
    '&:hover fieldset': {
      borderColor: '#a05e38'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a05e38'
    }
  },
  '& .MuiInputBase-input': {
    py: 1.2
  },
  '& .MuiFormHelperText-root': {
    ml: 0
  }
}

const titleSx = {
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: { xs: '3.4rem', md: '5.15rem' },
  lineHeight: 0.94,
  fontWeight: 700,
  letterSpacing: '-0.04em',
  maxWidth: 620,
  color: '#5b241f'
}

const pillButtonSx = {
  borderRadius: '999px',
  borderColor: '#dca57d',
  color: '#4b211c',
  fontSize: { xs: '1.5rem', md: '1.72rem' },
  fontWeight: 500,
  px: 3.5,
  py: 2,
  textTransform: 'none'
}

const nextButtonSx = {
  alignSelf: 'flex-end',
  borderRadius: '999px',
  background: 'linear-gradient(90deg, #ee7d2a 0%, #b44b4b 100%)',
  px: 5.5,
  py: 1.85,
  fontSize: { xs: '1.6rem', md: '1.78rem' },
  fontWeight: 500,
  textTransform: 'none',
  boxShadow: '0 16px 30px rgba(180, 75, 75, 0.18)'
}

const buildSummaryLabel = form => {
  switch (form.step) {
    case 1:
      return `Monto: $${Number(form.requested_amount || 0).toLocaleString('en-US')}`
    case 2:
      return `Monto: $${Number(form.requested_amount || 0).toLocaleString('en-US')}`
    case 3:
      return `Monto Menor: ${form.monto_menor_considerado || '-'}`
    case 4:
      return `Propósito Del Préstamo: ${form.loan_purpose || '-'}`
    case 5:
      return `Nombre: ${[form.nombre, form.apellido].filter(Boolean).join(' ') || '-'}`
    case 6:
      return `Nombre: ${[form.nombre, form.apellido].filter(Boolean).join(' ') || '-'}`
    default:
      return `Contacto: ${form.email || form.telefono || '-'}`
  }
}

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
    monto_menor_considerado: '',
    loan_purpose: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    telefono: '',
    email: '',
    modalidad: 'SEMANAL',
    idioma: 'ES',
    consentimiento: true,
    step: 1
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [saving, setSaving] = useState(false)

  const amountRangeLabel = useMemo(() => getAmountRangeLabel(form.requested_amount), [form.requested_amount])
  const progressValue = useMemo(() => Math.round((form.step / TOTAL_STEPS) * 100), [form.step])
  const fullName = useMemo(
    () => [form.nombre, form.apellido].filter(Boolean).join(' ').trim(),
    [form.apellido, form.nombre]
  )
  const summaryLabel = useMemo(() => buildSummaryLabel(form), [form])

  const setField = (name, value) => {
    setForm(previous => ({ ...previous, [name]: value }))
  }

  const goNext = () => {
    setForm(previous => ({ ...previous, step: Math.min(previous.step + 1, TOTAL_STEPS) }))
  }

  const goBack = () => {
    setError('')
    setForm(previous => ({ ...previous, step: Math.max(previous.step - 1, 1) }))
  }

  const validateStep = () => {
    if (!(Number(form.requested_amount || 0) > 0)) return 'Debes seleccionar un monto solicitado.'
    if (form.step === 2 && !form.monto_menor_considerado) return 'Selecciona si aceptarías un monto menor.'
    if (form.step === 3 && !form.loan_purpose) return 'Selecciona el propósito del préstamo.'
    if (form.step === 4) {
      if (!String(form.nombre || '').trim()) return 'Debes ingresar el nombre.'
      if (!String(form.apellido || '').trim()) return 'Debes ingresar el apellido.'
    }
    if (form.step === 5 && !String(form.fecha_nacimiento || '').trim()) return 'Debes ingresar la fecha de nacimiento.'
    if (form.step === 6 && !String(form.telefono || '').trim()) return 'Debes ingresar el teléfono.'
    if (form.step === 7) {
      if (!String(form.email || '').trim()) return 'Debes ingresar el correo.'
      if (!isValidEmailFormat(form.email)) return 'Debes ingresar un correo con formato válido.'
    }

    return ''
  }

  const handleAdvance = async event => {
    event.preventDefault()
    setError('')

    const stepError = validateStep()

    if (stepError) {
      setError(stepError)
      return
    }

    if (form.step < TOTAL_STEPS) {
      goNext()
      return
    }

    setSaving(true)
    setSuccess('')

    try {
      const payload = {
        nombre: String(form.nombre || '').trim(),
        apellido: String(form.apellido || '').trim(),
        telefono: String(form.telefono || '').trim(),
        email: String(form.email || '')
          .trim()
          .toLowerCase(),
        fecha_nacimiento: String(form.fecha_nacimiento || '').trim(),
        requested_amount: Number(form.requested_amount || 0),
        monto_solicitado: Number(form.requested_amount || 0),
        monto_menor_considerado: form.monto_menor_considerado,
        loan_purpose: form.loan_purpose,
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
    <Box
      component='form'
      onSubmit={handleAdvance}
      sx={{
        minHeight: '100vh',
        bgcolor: '#fbf3df',
        color: '#4b211c',
        px: { xs: 2.5, sm: 4, md: 7 },
        py: { xs: 4, md: 7 }
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 1140, mx: 'auto' }}>
        <Stack spacing={1.25}>
          <Stack direction='row' justifyContent='space-between' alignItems='baseline' spacing={2}>
            <Typography sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, color: '#d0a27d', fontWeight: 500 }}>
              1/2 Precalificación <strong style={{ color: '#4b211c' }}>{progressValue}%</strong>
            </Typography>
            <Typography sx={{ fontSize: { xs: '1.7rem', md: '2rem' }, fontWeight: 700 }}>{amountRangeLabel}</Typography>
          </Stack>
          <Box
            sx={{
              height: 8,
              borderRadius: 999,
              bgcolor: 'rgba(255,255,255,0.65)',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                width: `${progressValue}%`,
                height: '100%',
                borderRadius: 999,
                bgcolor: '#ee7d2a'
              }}
            />
          </Box>
        </Stack>

        {error ? <Alert severity='error'>{error}</Alert> : null}
        {success ? <Alert severity='success'>{success}</Alert> : null}

        <Stack spacing={3} sx={{ pt: { xs: 3, md: 8 } }}>
          {form.step > 1 ? (
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#ee7d2a' }}>↑ {summaryLabel}</Typography>
          ) : null}

          {form.step === 1 ? (
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 5, md: 10 }}
              alignItems={{ xs: 'stretch', md: 'flex-start' }}
              sx={{ pt: { xs: 4, md: 15 }, minHeight: { md: 800 } }}
            >
              <Box sx={{ flex: '1 1 56%', pt: { md: 18 }, pl: { md: 3 } }}>
                <Typography
                  sx={{
                    ...titleSx,
                    fontSize: { xs: '3.45rem', md: '5.4rem' },
                    maxWidth: 620
                  }}
                >
                  Elige el monto del préstamo deseado
                </Typography>
              </Box>

              <Stack
                spacing={2.15}
                sx={{ flex: '0 0 410px', width: { xs: '100%', md: 410 }, pt: { md: 31 }, pr: { md: 2 } }}
              >
                {AMOUNT_OPTIONS.map(option => {
                  const isSelected = String(form.requested_amount || '') === option.value
                  const selectedLabel = `$${Number(option.value).toLocaleString('en-US')}`

                  return (
                    <Button
                      key={option.value}
                      type='button'
                      variant='outlined'
                      onClick={() => setField('requested_amount', option.value)}
                      sx={{
                        ...pillButtonSx,
                        borderColor: isSelected ? '#b6754f' : '#dca57d',
                        borderWidth: isSelected ? 2.5 : 1.6,
                        bgcolor: isSelected ? 'rgba(255,255,255,0.32)' : 'transparent',
                        minHeight: 104,
                        justifyContent: 'center',
                        fontSize: { xs: '1.6rem', md: '1.82rem' }
                      }}
                    >
                      {isSelected ? `✓ ${selectedLabel}` : option.label}
                    </Button>
                  )
                })}

                <Button
                  type='submit'
                  variant='contained'
                  sx={{ ...nextButtonSx, mt: 2.8, minHeight: 104, width: '100%' }}
                >
                  Siguiente paso →
                </Button>
              </Stack>
            </Stack>
          ) : null}

          {form.step === 2 ? (
            <Stack spacing={3}>
              <Typography sx={titleSx}>¿También considerarías un monto menor a $1,000?</Typography>
              <Stack spacing={1.5} sx={{ width: 160, ml: 'auto' }}>
                {['Sí', 'No'].map(option => (
                  <Button
                    key={option}
                    type='button'
                    variant='outlined'
                    onClick={() => {
                      setField('monto_menor_considerado', option)
                      setError('')
                      goNext()
                    }}
                    sx={{
                      borderRadius: '999px',
                      borderColor: '#c98d64',
                      color: '#4b211c',
                      fontSize: '1.1rem',
                      py: 1.15
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ) : null}

          {form.step === 3 ? (
            <Stack spacing={3}>
              <Typography sx={titleSx}>¿Cuál es el propósito de tu préstamo?</Typography>
              <Stack spacing={1.4} alignItems='center'>
                {PURPOSE_OPTIONS.map(option => (
                  <Button
                    key={option}
                    type='button'
                    variant='outlined'
                    onClick={() => {
                      setField('loan_purpose', option)
                      setError('')
                      goNext()
                    }}
                    sx={{
                      borderRadius: '999px',
                      borderColor: '#c98d64',
                      color: '#4b211c',
                      fontSize: { xs: '1.05rem', md: '1.22rem' },
                      px: { xs: 3, md: 4.5 },
                      py: 1.4,
                      textTransform: 'none',
                      minWidth: { xs: '100%', sm: 'auto' }
                    }}
                  >
                    {option}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ) : null}

          {form.step === 4 ? (
            <Stack spacing={2.4} sx={{ maxWidth: 520 }}>
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: { xs: '2.4rem', md: '3.35rem' },
                  lineHeight: 1.04,
                  fontWeight: 700
                }}
              >
                ¿Cuál es tu nombre legal?
              </Typography>
              <TextField
                label='Nombre'
                value={form.nombre}
                onChange={event => setField('nombre', event.target.value)}
                fullWidth
                sx={fieldInputSx}
              />
              <TextField
                label='Apellido'
                value={form.apellido}
                onChange={event => setField('apellido', event.target.value)}
                fullWidth
                sx={fieldInputSx}
              />
              <Button type='submit' variant='contained' sx={{ ...nextButtonSx, fontSize: '1.12rem', px: 4, py: 1.45 }}>
                Siguiente paso →
              </Button>
            </Stack>
          ) : null}

          {form.step === 5 ? (
            <Stack spacing={2.4} sx={{ maxWidth: 520 }}>
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: { xs: '2.2rem', md: '3.1rem' },
                  lineHeight: 1.05,
                  fontWeight: 700
                }}
              >
                ¡Mucho gusto, {fullName || 'amigo'}! ¿Cuál es tu fecha de nacimiento?
              </Typography>
              <TextField
                label='Fecha de nacimiento'
                type='date'
                value={form.fecha_nacimiento}
                onChange={event => setField('fecha_nacimiento', event.target.value)}
                InputLabelProps={{ shrink: true }}
                fullWidth
                sx={fieldInputSx}
              />
              <Button type='submit' variant='contained' sx={{ ...nextButtonSx, fontSize: '1.12rem', px: 4, py: 1.45 }}>
                Siguiente paso →
              </Button>
            </Stack>
          ) : null}

          {form.step === 6 ? (
            <Stack spacing={2.4} sx={{ maxWidth: 520 }}>
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: { xs: '2.2rem', md: '3.1rem' },
                  lineHeight: 1.05,
                  fontWeight: 700
                }}
              >
                ¿Cuál es tu número de teléfono?
              </Typography>
              <TextField
                label='Teléfono'
                value={form.telefono}
                onChange={event => setField('telefono', event.target.value)}
                fullWidth
                sx={fieldInputSx}
              />
              <Button type='submit' variant='contained' sx={{ ...nextButtonSx, fontSize: '1.12rem', px: 4, py: 1.45 }}>
                Siguiente paso →
              </Button>
            </Stack>
          ) : null}

          {form.step === 7 ? (
            <Stack spacing={2.4} sx={{ maxWidth: 520 }}>
              <Typography
                sx={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: { xs: '2.2rem', md: '3.1rem' },
                  lineHeight: 1.05,
                  fontWeight: 700
                }}
              >
                ¿Cuál es tu correo electrónico?
              </Typography>
              <TextField
                label='Correo electrónico'
                type='email'
                value={form.email}
                onChange={event => setField('email', event.target.value)}
                fullWidth
                sx={fieldInputSx}
              />
              <TextField
                select
                label='Modalidad preferida'
                value={form.modalidad}
                onChange={event => setField('modalidad', event.target.value)}
                fullWidth
                sx={fieldInputSx}
              >
                {MODALIDAD_OPTIONS.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                type='submit'
                variant='contained'
                disabled={saving}
                sx={{ ...nextButtonSx, fontSize: '1.12rem', px: 4, py: 1.45 }}
              >
                {saving ? 'Enviando...' : 'Enviar solicitud →'}
              </Button>
            </Stack>
          ) : null}
        </Stack>

        <Stack direction='row' justifyContent='space-between' alignItems='center' pt={2}>
          <Button
            type='button'
            variant='text'
            onClick={goBack}
            disabled={form.step === 1 || saving}
            sx={{ color: '#8d5a43', textTransform: 'none' }}
          >
            Atrás
          </Button>
          <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap' justifyContent='flex-end'>
            {Object.keys(tracking)
              .slice(0, 3)
              .map(key => (
                <Chip key={key} label={`${key}: ${tracking[key]}`} size='small' variant='outlined' />
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
