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

import { listarAnalistas, resetPasswordAnalista } from '@/api/auth'
import usePermissions from '@/hooks/usePermissions'
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

const normalizePermisosSource = source => {
  if (Array.isArray(source)) {
    const output = []

    source.forEach(item => {
      if (typeof item === 'string') {
        output.push(String(item))

        return
      }

      if (item && typeof item === 'object') {
        const codigo =
          item?.codigo ||
          item?.code ||
          item?.permission_code ||
          item?.permissionCode ||
          item?.permiso ||
          item?.id ||
          item?.key ||
          ''
        const activo =
          item?.activo === undefined &&
          item?.habilitado === undefined &&
          item?.selected === undefined &&
          item?.enabled === undefined &&
          item?.asignado === undefined &&
          item?.granted === undefined &&
          item?.value === undefined
            ? true
            : Boolean(
                item?.activo ??
                  item?.habilitado ??
                  item?.selected ??
                  item?.enabled ??
                  item?.asignado ??
                  item?.granted ??
                  item?.value
              )

        if (codigo && activo) {
          output.push(String(codigo))
        }
      }
    })

    return output
  }

  if (source && typeof source === 'object') {
    const output = []

    Object.entries(source).forEach(([key, value]) => {
      if (value === true) output.push(String(key))
    })

    return output
  }

  return []
}

const extractPermisosSeleccionados = payload => {
  const candidates = [
    payload?.data?.permisos,
    payload?.permisos,
    payload?.data?.permisosSeleccionados,
    payload?.permisosSeleccionados,
    payload?.data?.permission_codes,
    payload?.permission_codes,
    payload?.data?.permissions,
    payload?.permissions,
    payload?.data?.catalogo,
    payload?.catalogo,
    payload?.data?.permisos_catalogo,
    payload?.permisos_catalogo,
    payload?.data?.rol?.permisos,
    payload?.data?.rol?.permission_codes,
    payload?.data?.rol?.permissions,
    payload?.data?.role?.permisos,
    payload?.data?.role?.permission_codes,
    payload?.data?.role?.permissions
  ]

  const merged = []

  candidates.forEach(source => {
    const values = normalizePermisosSource(source)

    if (values.length) merged.push(...values)
  })

  return Array.from(new Set(merged))
}

const buildPermisosPayload = selected => {
  const permisosPayload = (selected || []).map(item => String(item))
  const permisosMap = permisosPayload.reduce((acc, code) => {
    acc[code] = true

    return acc
  }, {})
  const permisosObjects = permisosPayload.map(code => ({
    codigo: code,
    activo: true
  }))

  return {
    permisos: permisosPayload,
    permission_codes: permisosPayload,
    permisosSeleccionados: permisosPayload,
    permissions: permisosPayload,
    permisos_map: permisosMap,
    permisosMap,
    permisos_detalle: permisosObjects,
    permisosDetalle: permisosObjects
  }
}

const BASE_PERMISSION_CODES = [
  'dashboard.view',
  'clientes.view',
  'clientes.create',
  'clientes.edit',
  'solicitudes.view',
  'solicitudes.create',
  'solicitudes.approve',
  'solicitudes.reject',
  'prestamos.view',
  'prestamos.create',
  'prestamos.pay',
  'cuotas.view',
  'cuotas.manage',
  'documentos.view',
  'documentos.delete',
  'ratings.run',
  'analytics.view',
  'reportes.view',
  'reportes.manage',
  'analistas.view',
  'analistas.manage',
  'roles.view',
  'roles.manage',
  'logs.view',
  'logs.manage'
]
const REQUIRED_PERMISSION_CODES = ['logs.view', 'logs.manage']
const isValidPermissionCode = value => /^[a-z]+(?:\.[a-z_]+)+$/.test(String(value || '').trim().toLowerCase())

const normalizeRoleText = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .trim()

const resolveRoleIdFromAnalista = (item, roles = []) => {
  const directRoleId = String(item?.rol_id || item?.role_id || item?.rol_acceso_id || '').trim()

  if (directRoleId) return directRoleId

  const analistaRoleName = normalizeRoleText(item?.rol || item?.rol_acceso || item?.role || '')

  if (!analistaRoleName) return ''

  const matchedRole = (roles || []).find(role => {
    const roleName = normalizeRoleText(role?.nombre || role?.name || '')

    return roleName === analistaRoleName
  })

  return String(matchedRole?.id || '').trim()
}

export default function SettingsModule() {
  const { can, canAny } = usePermissions()
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
    analistaId: '',
    analista: '',
    rolId: '',
    rolNombre: '',
    permisos: [],
    seleccionados: [],
    loading: false
  })
  const [resetDialog, setResetDialog] = useState({
    open: false,
    analistaId: '',
    analistaNombre: ''
  })
  const [resetPasswordValue, setResetPasswordValue] = useState('')
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    setReady(true)
  }, [])

  const canViewRoles = can('roles.view')
  const canManageRoles = can('roles.manage')
  const canViewAnalistas = can('analistas.view')
  const canManageAnalistas = can('analistas.manage')
  const allowSettings = useMemo(() => canAny(['roles.view', 'analistas.view']), [canAny])
  const allPermissionCodes = useMemo(() => {
    const catalogPermissions = flattenLeafIds(catalogo || []).filter(isValidPermissionCode)
    const merged = [...BASE_PERMISSION_CODES, ...REQUIRED_PERMISSION_CODES, ...catalogPermissions]

    return Array.from(new Set(merged))
  }, [catalogo])
  const activeTab = useMemo(() => {
    if (tab === 'roles' && !canViewRoles && canViewAnalistas) return 'analistas'
    if (tab === 'analistas' && !canViewAnalistas && canViewRoles) return 'roles'

    return tab
  }, [canViewAnalistas, canViewRoles, tab])

  useEffect(() => {
    if (!allowSettings) return
    if (canViewRoles && tab !== 'roles' && tab !== 'analistas') {
      setTab('roles')
    }
    if (!canViewRoles && canViewAnalistas && tab !== 'analistas') {
      setTab('analistas')
    }
  }, [allowSettings, canViewAnalistas, canViewRoles, tab])

  const loadRoles = useCallback(async () => {
    if (!canViewRoles && !canManageAnalistas) {
      setRoles([])
      setRolesLoading(false)

      return
    }

    setRolesLoading(true)

    try {
      const response = await listarRoles()

      setRoles(extractRows(response))
    } catch (err) {
      setError(err.message || 'No se pudieron cargar roles.')
    } finally {
      setRolesLoading(false)
    }
  }, [canManageAnalistas, canViewRoles])

  const loadCatalogo = useCallback(async () => {
    if (!canViewRoles) {
      setCatalogo([])

      return
    }

    try {
      const response = await obtenerCatalogoPermisos()
      const raw = response?.data || response

      setCatalogo(normalizeCatalogTree(raw))
    } catch (err) {
      setError(err.message || 'No se pudo cargar catálogo de permisos.')
    }
  }, [canViewRoles])

  const loadAnalistas = useCallback(async () => {
    if (!canViewAnalistas) {
      setAnalistas([])
      setAnalistasLoading(false)

      return
    }

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
  }, [canViewAnalistas, pageAnalistas, searchAnalista])

  useEffect(() => {
    if (!allowSettings) return

    if (canViewRoles || canManageAnalistas) {
      loadRoles()
    }

    if (canViewRoles) {
      loadCatalogo()
    }
  }, [allowSettings, canManageAnalistas, canViewRoles, loadCatalogo, loadRoles])

  useEffect(() => {
    if (!allowSettings || tab !== 'analistas' || !canViewAnalistas) return

    loadAnalistas()
  }, [allowSettings, tab, canViewAnalistas, loadAnalistas])

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
    if (!canManageRoles) {
      setError('No tienes permisos para gestionar roles.')

      return
    }

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
    if (!canManageRoles) {
      setError('No tienes permisos para gestionar permisos de roles.')

      return
    }

    if (!selectedRol?.id) {
      setError('Selecciona un rol para guardar permisos.')

      return
    }

    setError('')
    setSuccess('')

    try {
      const permisosPayload = Array.from(selectedPermisos)

      await guardarPermisosRol(selectedRol.id, buildPermisosPayload(permisosPayload))

      setSuccess('Permisos del rol actualizados.')
    } catch (err) {
      setError(err.message || 'No se pudieron guardar permisos.')
    }
  }

  const handleSeedRoles = async () => {
    if (!canManageRoles) {
      setError('No tienes permisos para inicializar catálogo de roles.')

      return
    }

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
    if (!canManageAnalistas) {
      setError('No tienes permisos para asignar roles a analistas.')

      return
    }

    setError('')
    setSuccess('')

    try {
      await asignarRolAnalista(analistaId, { role_id: rolId || null })
      setSuccess(rolId ? 'Rol de acceso asignado al analista.' : 'Rol removido del analista.')
      await loadAnalistas()
    } catch (err) {
      setError(err.message || 'No se pudo actualizar el rol del analista.')
    }
  }

  const showPermisosEfectivos = async item => {
    const analistaId = item?.id
    const analistaNombre = [item?.nombre, item?.apellido].filter(Boolean).join(' ') || 'Analista'
    const rolId = resolveRoleIdFromAnalista(item, roles)
    const rolNombre = String(item?.rol || item?.rol_acceso || '').trim()

    setError('')
    setSuccess('')
    setPermisosDialog({
      open: true,
      analistaId: String(analistaId || ''),
      analista: analistaNombre || 'Analista',
      rolId,
      rolNombre,
      permisos: [],
      seleccionados: [],
      loading: true
    })

    try {
      const [responseEfectivos, responseRol] = await Promise.all([
        obtenerPermisosEfectivosAnalista(analistaId),
        rolId ? obtenerPermisosRol(rolId) : Promise.resolve({})
      ])
      const permisos = Array.from(
        new Set([...extractPermisosSeleccionados(responseEfectivos), ...extractPermisosSeleccionados(responseRol)])
      )

      setPermisosDialog({
        open: true,
        analistaId: String(analistaId || ''),
        analista: analistaNombre || 'Analista',
        rolId,
        rolNombre,
        permisos,
        seleccionados: permisos,
        loading: false
      })
    } catch (err) {
      setPermisosDialog(previous => ({ ...previous, loading: false }))
      setError(err.message || 'No se pudieron consultar permisos efectivos.')
    }
  }

  const togglePermisoDialog = (permisoCode, checked) => {
    setPermisosDialog(previous => {
      const set = new Set(previous.seleccionados || [])

      if (checked) set.add(permisoCode)
      else set.delete(permisoCode)

      return {
        ...previous,
        seleccionados: Array.from(set)
      }
    })
  }

  const savePermisosAnalistaDialog = async () => {
    if (!canManageRoles) {
      setError('No tienes permisos para editar permisos de roles.')

      return
    }

    if (!permisosDialog.rolId) {
      setError('Este analista no tiene rol asignado. Asigna un rol antes de editar permisos.')

      return
    }

    setError('')
    setSuccess('')
    setPermisosDialog(previous => ({ ...previous, loading: true }))

    try {
      const permisosPayload = permisosDialog.seleccionados || []

      await guardarPermisosRol(permisosDialog.rolId, buildPermisosPayload(permisosPayload))
      setSuccess(
        `Permisos actualizados para el rol ${permisosDialog.rolNombre || 'asignado'}. Se aplican a todos los analistas con ese rol.`
      )
      await loadRoles()
      if (tab === 'analistas') await loadAnalistas()

      const [roleDetail, efectivosDetail] = await Promise.all([
        obtenerPermisosRol(permisosDialog.rolId),
        obtenerPermisosEfectivosAnalista(permisosDialog.analistaId)
      ])
      const permisosConfirmados = Array.from(
        new Set([...extractPermisosSeleccionados(roleDetail), ...extractPermisosSeleccionados(efectivosDetail)])
      )
      const permisosFinales = permisosConfirmados.length ? permisosConfirmados : permisosPayload

      setPermisosDialog(previous => ({
        ...previous,
        permisos: permisosFinales,
        seleccionados: permisosFinales,
        loading: false
      }))
    } catch (err) {
      setPermisosDialog(previous => ({ ...previous, loading: false }))
      setError(err.message || 'No se pudieron guardar permisos del rol asignado.')
    }
  }

  const openResetPasswordDialog = (analistaId, analistaNombre) => {
    if (!canManageAnalistas) {
      setError('No tienes permisos para resetear contraseñas.')

      return
    }

    setError('')
    setSuccess('')
    setResetPasswordValue('')
    setResetDialog({
      open: true,
      analistaId: String(analistaId || ''),
      analistaNombre: analistaNombre || 'Analista'
    })
  }

  const submitResetPassword = async () => {
    if (!resetDialog.analistaId) {
      setError('No se pudo identificar el analista para resetear contraseña.')

      return
    }

    if (!resetPasswordValue || resetPasswordValue.length < 8) {
      setError('La nueva contraseña temporal debe tener al menos 8 caracteres.')

      return
    }

    setError('')
    setSuccess('')
    setResetPasswordLoading(true)

    try {
      await resetPasswordAnalista(resetDialog.analistaId, {
        nueva_password: resetPasswordValue
      })
      setSuccess('Contraseña reseteada correctamente. Se requerirá cambio al próximo login.')
      setResetDialog(previous => ({ ...previous, open: false }))
      setResetPasswordValue('')
    } catch (err) {
      setError(err.message || 'No se pudo resetear la contraseña del analista.')
    } finally {
      setResetPasswordLoading(false)
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
    return <Alert severity='warning'>No tienes permisos para acceder a Configuración.</Alert>
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
          <Tabs value={activeTab} onChange={(_, value) => setTab(value)}>
            {canViewRoles ? <Tab value='roles' label='Roles y permisos' /> : null}
            {canViewAnalistas ? <Tab value='analistas' label='Acceso por analista' /> : null}
          </Tabs>
        </CardContent>
      </Card>

      {activeTab === 'roles' && canViewRoles ? (
        <Card>
          <CardContent>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' spacing={1.5} mb={2}>
              <Typography variant='h5'>Roles</Typography>
              {canManageRoles ? (
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
              ) : null}
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
                    <TableRow
                      key={rol.id}
                      hover
                      onClick={() => {
                        if (!canManageRoles) return

                        openRoleDrawer(rol)
                      }}
                      sx={{ cursor: canManageRoles ? 'pointer' : 'default' }}
                    >
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

      {activeTab === 'analistas' && canViewAnalistas ? (
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
                      <TableCell>Seguridad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analistas.map(item => {
                      const analistaNombre = [item.nombre, item.apellido].filter(Boolean).join(' ') || 'Analista'
                      const assignedRoleId = resolveRoleIdFromAnalista(item, roles)

                      return (
                      <TableRow key={item.id} hover>
                        <TableCell>{analistaNombre}</TableCell>
                        <TableCell>{item.email || '-'}</TableCell>
                        <TableCell>{item.rol || item.rol_acceso || '-'}</TableCell>
                        <TableCell>
                          {canManageAnalistas ? (
                            <TextField
                              select
                              size='small'
                              value={assignedRoleId}
                              sx={{ minWidth: 220 }}
                              onChange={event => assignRolToAnalista(item.id, event.target.value)}
                            >
                              <MenuItem value=''>Quitar rol (sin rol)</MenuItem>
                              {roles.map(rol => (
                                <MenuItem key={rol.id} value={rol.id}>
                                  {rol.nombre || rol.name}
                                </MenuItem>
                              ))}
                            </TextField>
                          ) : (
                            <Typography color='text.secondary'>{item.rol || item.rol_acceso || 'Sin rol'}</Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button size='small' variant='tonal' onClick={() => showPermisosEfectivos(item)}>
                            Ver permisos
                          </Button>
                        </TableCell>
                        <TableCell>
                          {canManageAnalistas ? (
                            <Button
                              size='small'
                              variant='tonal'
                              color='warning'
                              onClick={() => openResetPasswordDialog(item.id, analistaNombre)}
                            >
                              Resetear contraseña
                            </Button>
                          ) : (
                            <Typography color='text.secondary'>Sin permisos</Typography>
                          )}
                        </TableCell>
                      </TableRow>
                    )})}
                    {!analistas.length ? (
                      <TableRow>
                        <TableCell colSpan={6} align='center'>
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

      <Drawer anchor='right' open={drawerOpen && canManageRoles} onClose={() => setDrawerOpen(false)}>
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

            {canManageRoles ? (
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
            ) : null}
          </Stack>
        </Box>
      </Drawer>

      <Dialog
        open={permisosDialog.open}
        fullWidth
        maxWidth='md'
        onClose={() => setPermisosDialog(previous => ({ ...previous, open: false }))}
      >
        <DialogTitle>Permisos efectivos: {permisosDialog.analista}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={1.5}>
            <Alert severity='info'>
              {permisosDialog.rolId
                ? `Editando permisos del rol ${permisosDialog.rolNombre || 'asignado'}. Los cambios aplican a todos los analistas con ese rol.`
                : 'Este analista no tiene rol asignado. Primero asigna un rol para habilitar edición de permisos.'}
            </Alert>

          {permisosDialog.loading ? (
            <Stack alignItems='center' py={3}>
              <CircularProgress size={22} />
            </Stack>
          ) : (
            <Grid container spacing={1}>
              {allPermissionCodes.map(permissionCode => {
                const checked = (permisosDialog.seleccionados || []).includes(permissionCode)

                return (
                  <Grid key={permissionCode} size={{ xs: 12, sm: 6 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={checked}
                          onChange={event => togglePermisoDialog(permissionCode, event.target.checked)}
                          disabled={!canManageRoles || !permisosDialog.rolId}
                        />
                      }
                      label={permissionCode}
                    />
                  </Grid>
                )
              })}
            </Grid>
          )}
            {!permisosDialog.loading && !(permisosDialog.seleccionados || []).length ? (
              <Typography color='text.secondary'>Este analista no tiene permisos efectivos asignados actualmente.</Typography>
            ) : null}
          </Stack>
        </DialogContent>
        <DialogActions>
          {canManageRoles ? (
            <Button
              variant='contained'
              onClick={savePermisosAnalistaDialog}
              disabled={permisosDialog.loading || !permisosDialog.rolId}
            >
              Guardar permisos
            </Button>
          ) : null}
          <Button onClick={() => setPermisosDialog(previous => ({ ...previous, open: false }))}>Cerrar</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={resetDialog.open}
        fullWidth
        maxWidth='xs'
        onClose={() => {
          if (resetPasswordLoading) return
          setResetDialog(previous => ({ ...previous, open: false }))
        }}
      >
        <DialogTitle>Resetear contraseña</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography color='text.secondary'>
              Analista: <strong>{resetDialog.analistaNombre}</strong>
            </Typography>
            <TextField
              fullWidth
              label='Nueva contraseña temporal'
              type='password'
              value={resetPasswordValue}
              onChange={event => setResetPasswordValue(event.target.value)}
              placeholder='NuevaClave123!'
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (resetPasswordLoading) return
              setResetDialog(previous => ({ ...previous, open: false }))
            }}
          >
            Cancelar
          </Button>
          <Button variant='contained' color='warning' onClick={submitResetPassword} disabled={resetPasswordLoading}>
            {resetPasswordLoading ? 'Procesando...' : 'Resetear'}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}
