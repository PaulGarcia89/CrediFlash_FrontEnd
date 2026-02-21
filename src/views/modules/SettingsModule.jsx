'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Drawer from '@mui/material/Drawer'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { listarAnalistas } from '@/api/auth'
import {
  asignarRolAnalista,
  actualizarRol,
  crearRol,
  guardarPermisosRol,
  listarRoles,
  obtenerCatalogoPermisos,
  obtenerPermisosEfectivosAnalista,
  obtenerPermisosRol,
  seedRolesPermisos
} from '@/api/roles'
import { getAnalista } from '@/lib/auth/session'

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
    total: Number(source?.total || extractRows(payload).length)
  }
}

const normalizeCatalogTree = (value, path = '') => {
  if (!value) return []

  if (Array.isArray(value)) {
    return value.map(item => {
      if (typeof item === 'string') {
        const id = path ? `${path}.${item}` : item

        return { id, label: item, children: [] }
      }

      const label = item?.label || item?.nombre || item?.name || 'Permiso'
      const rawId = item?.id || item?.codigo || item?.key || label
      const id = path ? `${path}.${rawId}` : String(rawId)
      const children = normalizeCatalogTree(item?.children || item?.permisos || item?.items, id)

      return { id, label: String(label), children }
    })
  }

  if (typeof value === 'object') {
    return Object.entries(value).map(([key, child]) => {
      const id = path ? `${path}.${key}` : key
      const children = normalizeCatalogTree(child, id)

      return { id, label: key, children }
    })
  }

  return []
}

const flattenLeafIds = nodes => {
  const result = []

  nodes.forEach(node => {
    if (!node.children?.length) {
      result.push(node.id)

      return
    }

    result.push(...flattenLeafIds(node.children))
  })

  return result
}

const extractPermisosSeleccionados = payload => {
  const source =
    payload?.data?.permisos ||
    payload?.permisos ||
    payload?.data?.permisosSeleccionados ||
    payload?.permisosSeleccionados ||
    []

  if (Array.isArray(source)) return source.map(item => String(item))

  if (source && typeof source === 'object') {
    const output = []

    Object.entries(source).forEach(([key, value]) => {
      if (value === true) output.push(String(key))
    })

    return output
  }

  return []
}

const isAdmin = analista => {
  const role = String(analista?.rol || analista?.role || '').toUpperCase()

  return role.includes('ADMIN')
}

export default function SettingsModule() {
  const [ready, setReady] = useState(false)
  const [tab, setTab] = useState('roles')
  const [roles, setRoles] = useState([])
  const [rolesLoading, setRolesLoading] = useState(true)
  const [catalogo, setCatalogo] = useState([])
  const [selectedRol, setSelectedRol] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedPermisos, setSelectedPermisos] = useState(new Set())
  const [rolForm, setRolForm] = useState({
    nombre: '',
    prioridad: 1,
    descripcion: '',
    estado: 'ACTIVO'
  })
  const [analistas, setAnalistas] = useState([])
  const [analistasLoading, setAnalistasLoading] = useState(false)
  const [searchAnalista, setSearchAnalista] = useState('')
  const [pageAnalistas, setPageAnalistas] = useState(1)
  const [paginationAnalistas, setPaginationAnalistas] = useState({ page: 1, pages: 1, total: 0 })
  const [permisosDialog, setPermisosDialog] = useState({
    open: false,
    analista: '',
    permisos: [],
    loading: false
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    setReady(true)
  }, [])

  const currentAnalista = useMemo(() => (ready ? getAnalista() : null), [ready])
  const allowSettings = useMemo(() => isAdmin(currentAnalista), [currentAnalista])

  const loadRoles = useCallback(async () => {
    setRolesLoading(true)

    try {
      const response = await listarRoles()

      setRoles(extractRows(response))
    } catch (err) {
      setError(err.message || 'No se pudieron cargar roles.')
    } finally {
      setRolesLoading(false)
    }
  }, [])

  const loadCatalogo = useCallback(async () => {
    try {
      const response = await obtenerCatalogoPermisos()
      const raw = response?.data || response

      setCatalogo(normalizeCatalogTree(raw))
    } catch (err) {
      setError(err.message || 'No se pudo cargar catálogo de permisos.')
    }
  }, [])

  const loadAnalistas = useCallback(async () => {
    setAnalistasLoading(true)

    try {
      const response = await listarAnalistas({ page: pageAnalistas, limit: 20, search: searchAnalista })

      setAnalistas(extractRows(response))
      setPaginationAnalistas(extractPagination(response))
    } catch (err) {
      setError(err.message || 'No se pudieron cargar analistas.')
    } finally {
      setAnalistasLoading(false)
    }
  }, [pageAnalistas, searchAnalista])

  useEffect(() => {
    if (!allowSettings) return

    loadRoles()
    loadCatalogo()
  }, [allowSettings, loadCatalogo, loadRoles])

  useEffect(() => {
    if (!allowSettings || tab !== 'analistas') return

    loadAnalistas()
  }, [allowSettings, tab, loadAnalistas])

  const openRoleDrawer = async rol => {
    setError('')
    setSuccess('')
    setSelectedRol(rol)
    setRolForm({
      nombre: rol?.nombre || rol?.name || '',
      prioridad: Number(rol?.prioridad || rol?.priority || 1),
      descripcion: rol?.descripcion || rol?.description || '',
      estado: rol?.estado || 'ACTIVO'
    })
    setDrawerOpen(true)

    try {
      const detail = await obtenerPermisosRol(rol.id)
      const selected = extractPermisosSeleccionados(detail)

      setSelectedPermisos(new Set(selected))
    } catch (err) {
      setError(err.message || 'No se pudo cargar detalle del rol.')
    }
  }

  const togglePermission = (permisoId, isChecked) => {
    setSelectedPermisos(previous => {
      const next = new Set(previous)

      if (isChecked) {
        next.add(permisoId)
      } else {
        next.delete(permisoId)
      }

      return next
    })
  }

  const toggleNodeWithChildren = (node, checked) => {
    const leafIds = flattenLeafIds([node])

    setSelectedPermisos(previous => {
      const next = new Set(previous)

      leafIds.forEach(id => {
        if (checked) next.add(id)
        else next.delete(id)
      })

      return next
    })
  }

  const saveRoleMeta = async () => {
    if (!rolForm.nombre.trim()) {
      setError('El nombre del rol es obligatorio.')

      return
    }

    setError('')
    setSuccess('')

    try {
      if (selectedRol?.id) {
        await actualizarRol(selectedRol.id, {
          nombre: rolForm.nombre,
          prioridad: Number(rolForm.prioridad || 1),
          descripcion: rolForm.descripcion,
          estado: rolForm.estado
        })
      } else {
        await crearRol({
          nombre: rolForm.nombre,
          prioridad: Number(rolForm.prioridad || 1),
          descripcion: rolForm.descripcion,
          estado: rolForm.estado
        })
      }

      setSuccess('Rol guardado correctamente.')
      await loadRoles()
    } catch (err) {
      setError(err.message || 'No se pudo guardar el rol.')
    }
  }

  const saveRolePermisos = async () => {
    if (!selectedRol?.id) {
      setError('Selecciona un rol para guardar permisos.')

      return
    }

    setError('')
    setSuccess('')

    try {
      await guardarPermisosRol(selectedRol.id, {
        permisos: Array.from(selectedPermisos)
      })

      setSuccess('Permisos del rol actualizados.')
    } catch (err) {
      setError(err.message || 'No se pudieron guardar permisos.')
    }
  }

  const handleSeedRoles = async () => {
    setError('')
    setSuccess('')

    try {
      await seedRolesPermisos()
      setSuccess('Roles/permisos base inicializados.')
      await loadRoles()
      await loadCatalogo()
    } catch (err) {
      setError(err.message || 'No se pudo inicializar catálogo base.')
    }
  }

  const assignRolToAnalista = async (analistaId, rolId) => {
    setError('')
    setSuccess('')

    try {
      await asignarRolAnalista(analistaId, { rol_id: rolId })
      setSuccess('Rol de acceso asignado al analista.')
      await loadAnalistas()
    } catch (err) {
      setError(err.message || 'No se pudo asignar rol al analista.')
    }
  }

  const showPermisosEfectivos = async (analistaId, analistaNombre) => {
    setError('')
    setSuccess('')
    setPermisosDialog({
      open: true,
      analista: analistaNombre || 'Analista',
      permisos: [],
      loading: true
    })

    try {
      const response = await obtenerPermisosEfectivosAnalista(analistaId)
      const permisos = extractPermisosSeleccionados(response)

      setPermisosDialog({
        open: true,
        analista: analistaNombre || 'Analista',
        permisos,
        loading: false
      })
    } catch (err) {
      setPermisosDialog(previous => ({ ...previous, loading: false }))
      setError(err.message || 'No se pudieron consultar permisos efectivos.')
    }
  }

  const renderPermissionTree = node => {
    const leafIds = flattenLeafIds([node])
    const selectedCount = leafIds.filter(id => selectedPermisos.has(id)).length
    const fullySelected = leafIds.length > 0 && selectedCount === leafIds.length

    if (!node.children?.length) {
      return (
        <FormControlLabel
          key={node.id}
          control={
            <Switch
              checked={selectedPermisos.has(node.id)}
              onChange={event => togglePermission(node.id, event.target.checked)}
            />
          }
          label={node.label}
        />
      )
    }

    return (
      <Card key={node.id} variant='outlined' sx={{ p: 2 }}>
        <Stack spacing={1.2}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant='h6'>{node.label}</Typography>
            <FormControlLabel
              control={<Switch checked={fullySelected} onChange={event => toggleNodeWithChildren(node, event.target.checked)} />}
              label='Seleccionar todo'
            />
          </Stack>
          <Grid container spacing={1}>
            {node.children.map(child => (
              <Grid key={child.id} size={{ xs: 12, md: 6 }}>
                {renderPermissionTree(child)}
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Card>
    )
  }

  if (!ready) {
    return (
      <Stack alignItems='center' py={8}>
        <CircularProgress size={28} />
      </Stack>
    )
  }

  if (!allowSettings) {
    return <Alert severity='warning'>Solo el usuario administrador tiene acceso a esta configuración.</Alert>
  }

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant='h4'>Configuración de acceso</Typography>
        <Typography color='text.secondary'>
          Gestiona niveles de analistas por rol, prioridad y permisos por categoría.
        </Typography>
      </Box>

      {error ? <Alert severity='error'>{error}</Alert> : null}
      {success ? <Alert severity='success'>{success}</Alert> : null}

      <Card>
        <CardContent>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab value='roles' label='Roles y permisos' />
            <Tab value='analistas' label='Acceso por analista' />
          </Tabs>
        </CardContent>
      </Card>

      {tab === 'roles' ? (
        <Card>
          <CardContent>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' spacing={1.5} mb={2}>
              <Typography variant='h5'>Roles</Typography>
              <Stack direction='row' spacing={1.5}>
                <Button variant='tonal' color='secondary' onClick={handleSeedRoles}>
                  Inicializar catálogo base
                </Button>
                <Button
                  variant='contained'
                  onClick={() => {
                    setSelectedRol(null)
                    setSelectedPermisos(new Set())
                    setRolForm({ nombre: '', prioridad: 1, descripcion: '', estado: 'ACTIVO' })
                    setDrawerOpen(true)
                  }}
                >
                  + Crear rol
                </Button>
              </Stack>
            </Stack>

            {rolesLoading ? (
              <Stack alignItems='center' py={6}>
                <CircularProgress size={24} />
              </Stack>
            ) : (
              <Table size='small'>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Prioridad</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {roles.map(rol => (
                    <TableRow key={rol.id} hover onClick={() => openRoleDrawer(rol)} sx={{ cursor: 'pointer' }}>
                      <TableCell>{rol.nombre || rol.name || '-'}</TableCell>
                      <TableCell>{rol.prioridad || rol.priority || '-'}</TableCell>
                      <TableCell>
                        <Chip
                          size='small'
                          variant='tonal'
                          label={rol.estado || '-'}
                          color={String(rol.estado || '').toUpperCase() === 'ACTIVO' ? 'success' : 'warning'}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                  {!roles.length ? (
                    <TableRow>
                      <TableCell colSpan={3} align='center'>
                        Sin roles registrados
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      ) : null}

      {tab === 'analistas' ? (
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' spacing={1.5}>
                <TextField
                  label='Buscar analista'
                  value={searchAnalista}
                  onChange={event => setSearchAnalista(event.target.value)}
                  size='small'
                  sx={{ minWidth: { xs: '100%', md: 320 } }}
                />
              </Stack>

              {analistasLoading ? (
                <Stack alignItems='center' py={6}>
                  <CircularProgress size={24} />
                </Stack>
              ) : (
                <Table size='small'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Analista</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Rol actual</TableCell>
                      <TableCell>Asignar rol</TableCell>
                      <TableCell>Permisos efectivos</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analistas.map(item => {
                      const analistaNombre = [item.nombre, item.apellido].filter(Boolean).join(' ') || 'Analista'

                      return (
                      <TableRow key={item.id} hover>
                        <TableCell>{analistaNombre}</TableCell>
                        <TableCell>{item.email || '-'}</TableCell>
                        <TableCell>{item.rol || item.rol_acceso || '-'}</TableCell>
                        <TableCell>
                          <TextField
                            select
                            size='small'
                            defaultValue={item.rol_id || ''}
                            sx={{ minWidth: 220 }}
                            onChange={event => assignRolToAnalista(item.id, event.target.value)}
                          >
                            <MenuItem value=''>Sin rol</MenuItem>
                            {roles.map(rol => (
                              <MenuItem key={rol.id} value={rol.id}>
                                {rol.nombre || rol.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </TableCell>
                        <TableCell>
                          <Button size='small' variant='tonal' onClick={() => showPermisosEfectivos(item.id, analistaNombre)}>
                            Ver permisos
                          </Button>
                        </TableCell>
                      </TableRow>
                    )})}
                    {!analistas.length ? (
                      <TableRow>
                        <TableCell colSpan={5} align='center'>
                          Sin analistas registrados
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </TableBody>
                </Table>
              )}

              <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Typography color='text.secondary'>Total: {paginationAnalistas.total}</Typography>
                <Pagination
                  page={paginationAnalistas.page}
                  count={Math.max(paginationAnalistas.pages, 1)}
                  onChange={(_, value) => setPageAnalistas(value)}
                  size='small'
                  color='primary'
                />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ) : null}

      <Drawer anchor='right' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: { xs: '100vw', sm: 760 }, p: 3 }}>
          <Stack spacing={2}>
            <Typography variant='h5'>{selectedRol?.id ? 'Editar rol' : 'Crear rol'}</Typography>
            <Divider />

            <Grid container spacing={1.5}>
              <Grid size={{ xs: 12, md: 7 }}>
                <TextField
                  fullWidth
                  label='Nombre'
                  value={rolForm.nombre}
                  onChange={event => setRolForm(previous => ({ ...previous, nombre: event.target.value }))}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <TextField
                  fullWidth
                  type='number'
                  label='Prioridad'
                  value={rolForm.prioridad}
                  onChange={event => setRolForm(previous => ({ ...previous, prioridad: event.target.value }))}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label='Descripción'
                  value={rolForm.descripcion}
                  onChange={event => setRolForm(previous => ({ ...previous, descripcion: event.target.value }))}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <TextField fullWidth label='Role ID' value={selectedRol?.id || 'Nuevo rol'} InputProps={{ readOnly: true }} />
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <TextField
                  fullWidth
                  select
                  label='Estado'
                  value={rolForm.estado}
                  onChange={event => setRolForm(previous => ({ ...previous, estado: event.target.value }))}
                >
                  <MenuItem value='ACTIVO'>ACTIVO</MenuItem>
                  <MenuItem value='INACTIVO'>INACTIVO</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Typography variant='h6'>Permisos por categoría</Typography>
            <Stack spacing={1.5}>{catalogo.map(node => renderPermissionTree(node))}</Stack>

            <Stack direction='row' spacing={1.5} justifyContent='flex-end' pt={1.5}>
              <Button variant='text' onClick={() => setDrawerOpen(false)}>
                Cancelar
              </Button>
              <Button variant='tonal' color='secondary' onClick={saveRoleMeta}>
                Guardar rol
              </Button>
              <Button variant='contained' onClick={saveRolePermisos}>
                Guardar permisos
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Drawer>

      <Dialog
        open={permisosDialog.open}
        fullWidth
        maxWidth='sm'
        onClose={() => setPermisosDialog(previous => ({ ...previous, open: false }))}
      >
        <DialogTitle>Permisos efectivos: {permisosDialog.analista}</DialogTitle>
        <DialogContent dividers>
          {permisosDialog.loading ? (
            <Stack alignItems='center' py={3}>
              <CircularProgress size={22} />
            </Stack>
          ) : permisosDialog.permisos.length ? (
            <List dense>
              {permisosDialog.permisos.map(permiso => (
                <ListItem key={permiso}>
                  <ListItemText primary={permiso} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography color='text.secondary'>Este analista no tiene permisos efectivos asignados.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPermisosDialog(previous => ({ ...previous, open: false }))}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}
