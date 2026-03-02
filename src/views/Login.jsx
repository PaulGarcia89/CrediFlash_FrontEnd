'use client'

import { useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { styled, useTheme } from '@mui/material/styles'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import classnames from 'classnames'

import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

import { loginAnalista, obtenerPerfilAnalista } from '@/api/auth'
import { getToken, setSession } from '@/lib/auth/session'

const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
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

const Login = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const theme = useTheme()

  const redirectPath = searchParams.get('redirect') || '/home'

  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-login-light.png'

  const authBackground = mode === 'dark' ? darkImg : lightImg
  const characterIllustration = mode === 'dark' ? darkIllustration : lightIllustration

  useEffect(() => {
    if (getToken()) {
      router.replace('/home')
    }
  }, [router])

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await loginAnalista({ email, password })
      const token = response?.data?.token || response?.token

      if (!token) {
        throw new Error('Login correcto pero backend no devolvió token.')
      }

      let analista = response?.data?.user || response?.user || null

      if (!analista) {
        const perfilResponse = await obtenerPerfilAnalista()

        analista = perfilResponse?.data?.analista || perfilResponse?.data || perfilResponse?.analista || null
      }

      setSession({ token, analista })
      router.replace(redirectPath)
    } catch (err) {
      setError(err.message || 'No se pudo iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex bs-full justify-center'>
      <div className='flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden'>
        <LoginIllustration src={characterIllustration} alt='Ilustración login' />
        <MaskImg
          alt='Máscara'
          src={authBackground}
          className={classnames({ 'scale-x-[-1]': theme.direction === 'rtl' })}
        />
      </div>

      <div className='flex justify-center items-start md:items-center bs-full bg-backgroundPaper !min-is-full p-6 pt-24 md:pt-12 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <Link
          href='/login'
          className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'
        >
          <Logo />
        </Link>

        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <MobileIllustration src={characterIllustration} alt='Ilustración login' />
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>Ingreso al sistema CreditFlash</Typography>
            <Typography>Inicia sesión con tu usuario de analista.</Typography>
          </div>

          <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
            {error ? <Alert severity='error'>{error}</Alert> : null}

            <CustomTextField
              autoFocus
              fullWidth
              label='Email'
              placeholder='nombre@dominio.com'
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />

            <CustomTextField
              fullWidth
              label='Password'
              placeholder='••••••••'
              type={isPasswordShown ? 'text' : 'password'}
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setIsPasswordShown(show => !show)}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />

            <Button fullWidth variant='contained' type='submit' disabled={loading}>
              {loading ? (
                <Stack direction='row' spacing={1} alignItems='center'>
                  <CircularProgress size={16} color='inherit' />
                  <span>Ingresando...</span>
                </Stack>
              ) : (
                'Ingresar'
              )}
            </Button>

            <Button
              fullWidth
              variant='contained'
              color='success'
              component={Link}
              href='/authentication/sign-up/analista'
            >
              Registrar
            </Button>

            <Typography variant='body2' color='text.secondary' textAlign='center'>
              ¿Olvidaste tu contraseña? Solicita al administrador que la resetee desde Configuración de acceso.
            </Typography>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
