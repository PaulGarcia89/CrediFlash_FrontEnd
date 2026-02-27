'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { styled, useTheme } from '@mui/material/styles'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import classnames from 'classnames'

import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

import { registrarAnalista } from '@/api/auth'

const ROLE_OPTIONS = ['ANALISTA', 'SUPERVISOR', 'ADMINISTRADOR']

const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 640,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 520
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 420
  }
}))

const MobileIllustration = styled('img')(({ theme }) => ({
  inlineSize: '100%',
  maxInlineSize: 360,
  blockSize: 'auto',
  marginInline: 'auto',
  marginBlockEnd: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const initialForm = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  password: '',
  rol: 'ANALISTA',
  codigo_analista: '',
  departamento: ''
}

const RegisterAnalista = ({ mode }) => {
  const router = useRouter()
  const theme = useTheme()

  const [form, setForm] = useState(initialForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-login-light.png'

  const authBackground = mode === 'dark' ? darkImg : lightImg
  const characterIllustration = mode === 'dark' ? darkIllustration : lightIllustration

  const handleChange = event => {
    const { name, value } = event.target

    setForm(previous => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      await registrarAnalista(form)
      setSuccess('Analista registrado correctamente. Redirigiendo...')
      setTimeout(() => {
        router.replace('/login')
      }, 1200)
    } catch (err) {
      setError(err.message || 'No se pudo registrar el analista.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className='flex bs-full justify-center'>
      <div className='flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden'>
        <RegisterIllustration src={characterIllustration} alt='Ilustración registro' />
        <MaskImg
          alt='Máscara'
          src={authBackground}
          className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
        />
      </div>

      <div className='flex justify-center items-start md:items-center bs-full bg-backgroundPaper !min-is-full p-6 pt-24 md:pt-12 md:!min-is-[unset] md:p-12 md:is-[520px]'>
        <Link
          href='/login'
          className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'
        >
          <Logo />
        </Link>

        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[430px] md:max-is-[unset]'>
          <MobileIllustration src={characterIllustration} alt='Ilustración registro' />
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>Registro de Analistas</Typography>
            <Typography>Completa los datos para crear una cuenta de analista.</Typography>
          </div>

          <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-4'>
            {error ? <Alert severity='error'>{error}</Alert> : null}
            {success ? <Alert severity='success'>{success}</Alert> : null}

            <CustomTextField
              label='Nombre'
              name='nombre'
              value={form.nombre}
              onChange={handleChange}
              required
              fullWidth
            />
            <CustomTextField
              label='Apellido'
              name='apellido'
              value={form.apellido}
              onChange={handleChange}
              required
              fullWidth
            />
            <CustomTextField
              label='Teléfono'
              name='telefono'
              value={form.telefono}
              onChange={handleChange}
              required
              fullWidth
            />
            <CustomTextField
              label='Email'
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <CustomTextField
              label='Password'
              name='password'
              type='password'
              value={form.password}
              onChange={handleChange}
              required
              fullWidth
            />
            <CustomTextField select label='Rol' name='rol' value={form.rol} onChange={handleChange} required fullWidth>
              {ROLE_OPTIONS.map(role => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </CustomTextField>
            <CustomTextField
              label='Código Analista'
              name='codigo_analista'
              value={form.codigo_analista}
              onChange={handleChange}
              fullWidth
            />
            <CustomTextField
              label='Departamento'
              name='departamento'
              value={form.departamento}
              onChange={handleChange}
              fullWidth
            />

            <Button fullWidth variant='contained' type='submit' disabled={saving}>
              {saving ? (
                <Stack direction='row' spacing={1} alignItems='center'>
                  <CircularProgress size={16} color='inherit' />
                  <span>Registrando...</span>
                </Stack>
              ) : (
                'Registrar'
              )}
            </Button>

            <Button fullWidth variant='text' component={Link} href='/login'>
              Ya tengo cuenta, iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterAnalista
