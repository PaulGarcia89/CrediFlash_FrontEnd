'use client'

import { useEffect, useState } from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { actualizarPerfilAnalista, obtenerPerfilAnalista } from '@/api/auth'

export default function ProfileModule() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [analista, setAnalista] = useState(null)
  const [passwordActual, setPasswordActual] = useState('')
  const [nuevaPassword, setNuevaPassword] = useState('')
  const [confirmacionPassword, setConfirmacionPassword] = useState('')
  const [savingPassword, setSavingPassword] = useState(false)

  useEffect(() => {
    const fetchPerfil = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await obtenerPerfilAnalista()

        setAnalista(response?.data?.analista || response?.data || response?.analista || null)
      } catch (err) {
        setError(err.message || 'No se pudo cargar perfil.')
      } finally {
        setLoading(false)
      }
    }

    fetchPerfil()
  }, [])

  const handleChangePassword = async event => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setSavingPassword(true)

    try {
      if (!passwordActual) {
        throw new Error('Debes indicar tu contraseña actual.')
      }

      if (!nuevaPassword || nuevaPassword.length < 8) {
        throw new Error('La nueva contraseña debe tener al menos 8 caracteres.')
      }

      if (nuevaPassword !== confirmacionPassword) {
        throw new Error('La confirmación de contraseña no coincide.')
      }

      await actualizarPerfilAnalista({
        password_actual: passwordActual,
        nueva_password: nuevaPassword
      })

      setSuccess('Contraseña actualizada correctamente.')
      setPasswordActual('')
      setNuevaPassword('')
      setConfirmacionPassword('')
    } catch (err) {
      setError(err.message || 'No se pudo actualizar la contraseña.')
    } finally {
      setSavingPassword(false)
    }
  }

  if (loading) {
    return (
      <Stack alignItems='center' py={8}>
        <CircularProgress size={28} />
      </Stack>
    )
  }

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant='h4'>Mi perfil</Typography>
          {error ? <Alert severity='error'>{error}</Alert> : null}
          {success ? <Alert severity='success'>{success}</Alert> : null}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='caption' color='text.secondary'>
                Nombre
              </Typography>
              <Typography>{analista?.nombre || '-'}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='caption' color='text.secondary'>
                Apellido
              </Typography>
              <Typography>{analista?.apellido || '-'}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='caption' color='text.secondary'>
                Email
              </Typography>
              <Typography>{analista?.email || '-'}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='caption' color='text.secondary'>
                Rol
              </Typography>
              <Typography>{analista?.rol || '-'}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='caption' color='text.secondary'>
                Teléfono
              </Typography>
              <Typography>{analista?.telefono || '-'}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='caption' color='text.secondary'>
                Estado
              </Typography>
              <Typography>{analista?.estado || '-'}</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 1 }} />

          <Stack spacing={2} component='form' onSubmit={handleChangePassword}>
            <Typography variant='h5'>Cambiar contraseña</Typography>
            <Typography color='text.secondary'>
              Si olvidaste tu contraseña, solicita al administrador un reset. Si recuerdas tu contraseña actual, puedes cambiarla aquí.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label='Contraseña actual'
                  type='password'
                  value={passwordActual}
                  onChange={event => setPasswordActual(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label='Nueva contraseña'
                  type='password'
                  value={nuevaPassword}
                  onChange={event => setNuevaPassword(event.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label='Confirmar nueva contraseña'
                  type='password'
                  value={confirmacionPassword}
                  onChange={event => setConfirmacionPassword(event.target.value)}
                  required
                />
              </Grid>
            </Grid>
            <Stack direction='row' justifyContent='flex-end'>
              <Button type='submit' variant='contained' disabled={savingPassword}>
                {savingPassword ? 'Actualizando...' : 'Actualizar contraseña'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
