'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { actualizarCliente, crearCliente, obtenerCliente } from '@/api/clientes'

const initialForm = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  direccion: '',
  nombre_contacto: '',
  apellido_contacto: '',
  telefono_contacto: '',
  email_contacto: '',
  direccion_contacto: '',
  observaciones: ''
}

export default function ClienteFormModule({ clienteId = null }) {
  const router = useRouter()

  const [form, setForm] = useState(initialForm)
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(Boolean(clienteId))
  const [error, setError] = useState('')

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

  const handleChange = event => {
    const { name, value } = event.target

    setForm(previous => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setSaving(true)
    setError('')

    try {
      if (clienteId) {
        await actualizarCliente(clienteId, form)
        router.replace('/clientes')
      } else {
        await crearCliente(form)
        router.replace('/solicitudes/nueva')
      }
    } catch (err) {
      setError(err.message || 'No se pudo guardar el cliente.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'start', md: 'center' }}
        spacing={2}
      >
        <Box>
          <Typography variant='h4' sx={{ mb: 0.5 }}>
            {clienteId ? 'Editar cliente' : 'Agregar un nuevo cliente'}
          </Typography>
          <Typography color='text.secondary'>
            {clienteId
              ? 'Actualiza la información del cliente y su contacto de referencia.'
              : 'Registra un cliente para habilitar solicitudes de crédito y seguimiento.'}
          </Typography>
        </Box>

        <Stack direction='row' spacing={1.5} flexWrap='wrap'>
          <Button variant='tonal' color='secondary' onClick={() => router.push('/clientes')} disabled={saving}>
            Descartar
          </Button>
          <Button
            variant='tonal'
            color='primary'
            type='button'
            disabled={saving || loading}
            onClick={() => window.localStorage.setItem('cliente_draft', JSON.stringify(form))}
          >
            Guardar borrador
          </Button>
          <Button variant='contained' type='submit' disabled={saving || loading}>
            {saving ? 'Guardando...' : clienteId ? 'Actualizar cliente' : 'Publicar cliente'}
          </Button>
        </Stack>
      </Stack>

      {error ? <Alert severity='error'>{error}</Alert> : null}
      {loading ? <Alert severity='info'>Cargando cliente...</Alert> : null}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>
            <Card>
              <CardHeader title='Información del cliente' />
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
                    />
                  </Grid>
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
                </Grid>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title='Contacto alterno' />
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

            <Card>
              <CardHeader title='Descripción (opcional)' />
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
            <Card>
              <CardHeader title='Estado' />
              <Divider />
              <CardContent>
                <Stack spacing={1.5}>
                  <Chip label={clienteId ? 'Edición' : 'Borrador'} color='primary' variant='tonal' />
                  <Typography variant='body2' color='text.secondary'>
                    {clienteId
                      ? 'Los cambios se aplicarán al cliente existente.'
                      : 'Revisa los datos antes de publicar el cliente.'}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title='Organización' />
              <Divider />
              <CardContent>
                <Stack spacing={4}>
                  <TextField label='Canal' value='Registro manual' fullWidth size='small' disabled />
                  <TextField label='Tipo' value='Cliente individual' fullWidth size='small' disabled />
                  <TextField
                    label='Estado de publicación'
                    value='Listo para publicar'
                    fullWidth
                    size='small'
                    disabled
                  />
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardHeader title='Acciones' />
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
