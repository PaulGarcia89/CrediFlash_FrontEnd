'use client'

import { useEffect, useState } from 'react'

import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { obtenerPerfilAnalista } from '@/api/auth'

export default function ProfileModule() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [analista, setAnalista] = useState(null)

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
          <Typography variant='h4'>My Profile</Typography>
          {error ? <Alert severity='error'>{error}</Alert> : null}
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
        </Stack>
      </CardContent>
    </Card>
  )
}
