'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

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
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { listarClientes } from '@/api/clientes'
import { actualizarSolicitud, crearSolicitud, obtenerSolicitud } from '@/api/solicitudes'

const MODELO_OPTIONS = ['CLIENTE_NUEVO', 'CLIENTE_ANTIGUO']

const initialForm = {
  cliente_id: '',
  monto_solicitado: '',
  plazo_semanas: '',
  tasa_variable_pct: '',
  modelo_calificacion: 'CLIENTE_NUEVO',
  destino: ''
}

const extractRows = payload => {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.rows)) return payload.rows
  if (Array.isArray(payload?.data?.rows)) return payload.data.rows

  return []
}

const extractPagination = payload => {
  const source = payload?.pagination || payload?.data?.pagination

  return {
    page: Number(source?.page || 1),
    pages: Number(source?.pages || 1),
    total: Number(source?.total || 0)
  }
}

const extractSolicitudId = payload =>
  payload?.data?.id || payload?.id || payload?.data?.solicitud_id || payload?.solicitud_id || ''

const clienteOptionLabel = cliente => {
  const nombre = [cliente?.nombre, cliente?.apellido].filter(Boolean).join(' ')

  return `${nombre || 'Sin nombre'} — ${cliente?.telefono || 'Sin teléfono'} — ${cliente?.email || 'Sin email'}`
}

export default function SolicitudFormModule({ solicitudId = null }) {
  const router = useRouter()

  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(Boolean(solicitudId))
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [clienteValue, setClienteValue] = useState(null)
  const [clienteSearch, setClienteSearch] = useState('')
  const [clientePage, setClientePage] = useState(1)
  const [clientesOptions, setClientesOptions] = useState([])
  const [clientesLoading, setClientesLoading] = useState(false)
  const [clientesPagination, setClientesPagination] = useState({ page: 1, pages: 1, total: 0 })

  const [files, setFiles] = useState([])
  const [snackbar, setSnackbar] = useState({ open: false, message: '' })

  const canLoadMoreClientes = useMemo(
    () => clientesPagination.page < clientesPagination.pages,
    [clientesPagination.page, clientesPagination.pages]
  )

  useEffect(() => {
    if (!solicitudId) return

    const fetchSolicitud = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await obtenerSolicitud(solicitudId)
        const solicitud = response?.data || response
        const cliente = solicitud?.cliente || null
        const tasaPct = Number(solicitud?.tasa_variable || 0) * 100

        setForm({
          cliente_id: solicitud?.cliente_id || '',
          monto_solicitado: solicitud?.monto_solicitado || '',
          plazo_semanas: solicitud?.plazo_semanas || '',
          tasa_variable_pct: Number.isFinite(tasaPct) ? String(tasaPct) : '',
          modelo_calificacion: solicitud?.modelo_calificacion || 'CLIENTE_NUEVO',
          destino: solicitud?.destino || ''
        })

        if (cliente?.id) {
          setClienteValue(cliente)
          setClientesOptions(previous => {
            const exists = previous.some(item => item.id === cliente.id)

            if (exists) return previous

            return [cliente, ...previous]
          })
        }
      } catch (err) {
        setError(err.message || 'No se pudo cargar la solicitud.')
      } finally {
        setLoading(false)
      }
    }

    fetchSolicitud()
  }, [solicitudId])

  const loadClientesActivos = useCallback(async (pageValue, searchValue, append = false) => {
    setClientesLoading(true)

    try {
      const response = await listarClientes({
        page: pageValue,
        limit: 100,
        search: searchValue,
        estado: 'ACTIVO'
      })

      const rows = extractRows(response)

      setClientesOptions(previous => {
        if (!append) return rows

        const map = new Map(previous.map(item => [item.id, item]))

        rows.forEach(item => map.set(item.id, item))

        return Array.from(map.values())
      })

      setClientesPagination(extractPagination(response))
    } catch {
      setSnackbar({ open: true, message: 'No se pudieron cargar clientes activos.' })
    } finally {
      setClientesLoading(false)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setClientePage(1)
      loadClientesActivos(1, clienteSearch, false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [clienteSearch, loadClientesActivos])

  const handleLoadMoreClientes = async () => {
    const nextPage = clientePage + 1

    setClientePage(nextPage)
    await loadClientesActivos(nextPage, clienteSearch, true)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setForm(previous => ({ ...previous, [name]: value }))
  }

  const handleFiles = event => {
    const selected = Array.from(event.target.files || [])

    if (selected.length > 3) {
      setSnackbar({ open: true, message: 'Solo se permiten 3 documentos por solicitud.' })

      return
    }

    const oversized = selected.find(file => file.size > 10 * 1024 * 1024)

    if (oversized) {
      setSnackbar({ open: true, message: 'Cada documento debe pesar máximo 10MB.' })

      return
    }

    setFiles(selected)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setSaving(true)
    setError('')

    try {
      if (!form.cliente_id) {
        throw new Error('Debes seleccionar un cliente activo.')
      }

      const tasaVariable = Number(form.tasa_variable_pct || 0) / 100

      if (tasaVariable < 0.01 || tasaVariable > 1) {
        throw new Error('La tasa variable (%) debe estar entre 1 y 100.')
      }

      if (solicitudId) {
        await actualizarSolicitud(solicitudId, {
          cliente_id: form.cliente_id,
          monto_solicitado: Number(form.monto_solicitado || 0),
          plazo_semanas: Number(form.plazo_semanas || 0),
          tasa_variable: tasaVariable,
          modelo_calificacion: form.modelo_calificacion,
          destino: form.destino
        })
      } else {
        const payload = new FormData()

        payload.append('cliente_id', form.cliente_id)
        payload.append('monto_solicitado', String(Number(form.monto_solicitado || 0)))
        payload.append('plazo_semanas', String(Number(form.plazo_semanas || 0)))
        payload.append('tasa_variable', String(tasaVariable))
        payload.append('modelo_calificacion', form.modelo_calificacion)
        payload.append('destino', form.destino)

        files.forEach(file => {
          payload.append(`documentos+${form.cliente_id}`, file)
        })

        const created = await crearSolicitud(payload)
        const createdSolicitudId = extractSolicitudId(created)
        const params = new URLSearchParams()

        if (createdSolicitudId) params.set('focusSolicitudId', String(createdSolicitudId))
        if (form.cliente_id) params.set('focusClienteId', String(form.cliente_id))

        router.replace(`/solicitudes?${params.toString()}`)

        return
      }

      router.replace('/solicitudes')
    } catch (err) {
      setError(err.message || 'No se pudo guardar la solicitud.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <Stack spacing={3} component='form' onSubmit={handleSubmit}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ xs: 'start', md: 'center' }}
          spacing={2}
        >
          <Box>
            <Typography variant='h4' sx={{ mb: 0.5 }}>
              {solicitudId ? 'Editar solicitud' : 'Agregar una nueva solicitud'}
            </Typography>
            <Typography color='text.secondary'>
              {solicitudId
                ? 'Actualiza los datos de la solicitud pendiente.'
                : 'Registra una solicitud para el flujo de evaluación y aprobación.'}
            </Typography>
          </Box>

          <Stack direction='row' spacing={1.5} flexWrap='wrap'>
            <Button variant='tonal' color='secondary' onClick={() => router.push('/solicitudes')} disabled={saving}>
              Descartar
            </Button>
            <Button
              variant='tonal'
              color='primary'
              type='button'
              disabled={saving || loading}
              onClick={() => window.localStorage.setItem('solicitud_draft', JSON.stringify(form))}
            >
              Guardar borrador
            </Button>
            <Button variant='contained' type='submit' disabled={saving || loading}>
              {saving ? 'Guardando...' : solicitudId ? 'Actualizar solicitud' : 'Publicar solicitud'}
            </Button>
          </Stack>
        </Stack>

        {error ? <Alert severity='error'>{error}</Alert> : null}
        {loading ? <Alert severity='info'>Cargando solicitud...</Alert> : null}

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={3}>
              <Card>
                <CardHeader title='Información de la solicitud' />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }}>
                      <Autocomplete
                        options={clientesOptions}
                        value={clienteValue}
                        loading={clientesLoading}
                        disabled={Boolean(solicitudId)}
                        onChange={(_, value) => {
                          setClienteValue(value)
                          setForm(previous => ({ ...previous, cliente_id: value?.id || '' }))
                        }}
                        onInputChange={(_, value) => {
                          setClienteSearch(value)
                        }}
                        getOptionLabel={option => clienteOptionLabel(option)}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        renderInput={params => (
                          <TextField
                            {...params}
                            label='Clientes Activos'
                            placeholder='Buscar por teléfono o email'
                            required
                          />
                        )}
                      />
                      {canLoadMoreClientes ? (
                        <Box mt={1}>
                          <Button
                            variant='text'
                            size='small'
                            onClick={handleLoadMoreClientes}
                            disabled={clientesLoading}
                          >
                            Cargar más clientes
                          </Button>
                        </Box>
                      ) : null}
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextField
                        label='Monto solicitado'
                        name='monto_solicitado'
                        type='number'
                        value={form.monto_solicitado}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextField
                        label='Plazo (semanas)'
                        name='plazo_semanas'
                        type='number'
                        value={form.plazo_semanas}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <TextField
                        label='Tasa variable (%)'
                        name='tasa_variable_pct'
                        type='number'
                        value={form.tasa_variable_pct}
                        onChange={handleChange}
                        inputProps={{ min: 1, max: 100 }}
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        select
                        label='Modelo de calificación'
                        name='modelo_calificacion'
                        value={form.modelo_calificacion}
                        onChange={handleChange}
                        fullWidth
                        required
                      >
                        {MODELO_OPTIONS.map(model => (
                          <MenuItem key={model} value={model}>
                            {model}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label='Modelo de aprobación'
                        value=''
                        fullWidth
                        disabled
                        helperText='Se asigna en el flujo de revisión.'
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label='Destino del crédito'
                        name='destino'
                        value={form.destino}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title='Documentos' subheader='Carga opcional de 0 a 3 archivos por solicitud.' />
                <Divider />
                <CardContent>
                  {!solicitudId ? (
                    <>
                      <Button variant='outlined' component='label'>
                        Cargar documentos (0 a 3)
                        <input hidden type='file' multiple onChange={handleFiles} />
                      </Button>
                      <Typography variant='caption' color='text.secondary' display='block' mt={1}>
                        {files.length > 0 ? `${files.length} archivo(s) seleccionado(s)` : 'Sin documentos cargados'}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant='caption' color='text.secondary'>
                      La edición de documentos no está habilitada en esta versión.
                    </Typography>
                  )}
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
                    <Chip label={solicitudId ? 'Edición' : 'Borrador'} color='primary' variant='tonal' />
                    <Typography variant='body2' color='text.secondary'>
                      El modelo de aprobación se ejecuta luego desde el listado de solicitudes.
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
                    <TextField label='Tipo' value='Solicitud de crédito' fullWidth size='small' disabled />
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
                      {saving ? 'Guardando...' : solicitudId ? 'Actualizar solicitud' : 'Publicar solicitud'}
                    </Button>
                    <Button variant='outlined' onClick={() => router.push('/solicitudes')} disabled={saving} fullWidth>
                      Cancelar
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

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
    </>
  )
}
