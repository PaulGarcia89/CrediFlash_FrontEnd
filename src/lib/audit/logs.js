import { getAnalista } from '@/lib/auth/session'

const LOG_STORAGE_KEY = 'cf_audit_logs'
const LOG_MAX_ITEMS = 2000

const isBrowser = () => typeof window !== 'undefined'

const normalize = value =>
  String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const readLogs = () => {
  if (!isBrowser()) return []

  const raw = window.localStorage.getItem(LOG_STORAGE_KEY)

  if (!raw) return []

  try {
    const parsed = JSON.parse(raw)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeLogs = logs => {
  if (!isBrowser()) return

  const limited = (Array.isArray(logs) ? logs : []).slice(0, LOG_MAX_ITEMS)

  window.localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(limited))
  window.dispatchEvent(
    new CustomEvent('cf:audit-log-added', {
      detail: {
        total: limited.length
      }
    })
  )
}

const getAnalistaSnapshot = () => {
  const analista = getAnalista() || {}
  const nombreCompleto = [analista?.nombre, analista?.apellido].filter(Boolean).join(' ').trim()

  return {
    analista_id: String(analista?.id || analista?.analista_id || '').trim(),
    analista_nombre: nombreCompleto || analista?.email || 'Analista',
    analista_email: analista?.email || ''
  }
}

const mapModuleByPath = path => {
  const normalized = normalize(path)

  if (normalized.includes('/clientes')) return 'Clientes'
  if (normalized.includes('/solicitudes')) return 'Solicitudes'
  if (normalized.includes('/prestamos')) return 'Préstamos'
  if (normalized.includes('/cuotas')) return 'Cuotas'
  if (normalized.includes('/roles')) return 'Roles'
  if (normalized.includes('/analistas')) return 'Analistas'
  if (normalized.includes('/documentos') || normalized.includes('/uploads')) return 'Documentos'
  if (normalized.includes('/analytics') || normalized.includes('/reportes')) return 'Reportes'
  if (normalized.includes('/logs')) return 'Logs'
  if (normalized.includes('/login') || normalized.includes('/perfil')) return 'Autenticación'

  return 'General'
}

const mapApiAction = ({ method, path }) => {
  const normalizedMethod = String(method || 'GET').toUpperCase()
  const normalizedPath = normalize(path)

  if (normalizedMethod === 'POST' && normalizedPath.includes('/clientes')) return 'Creó cliente'
  if (normalizedMethod === 'PUT' && normalizedPath.includes('/clientes/')) return 'Actualizó cliente'
  if (normalizedMethod === 'POST' && normalizedPath.includes('/solicitudes')) return 'Creó solicitud'
  if (normalizedMethod === 'PUT' && normalizedPath.includes('/solicitudes/')) return 'Actualizó solicitud'
  if (normalizedMethod === 'POST' && normalizedPath.includes('/prestamos/solicitud/')) return 'Aprobó solicitud y creó préstamo'
  if (normalizedMethod === 'POST' && normalizedPath.includes('/prestamos/') && normalizedPath.includes('/pago-semanal')) {
    return 'Registró pago semanal'
  }
  if (normalizedMethod === 'POST' && normalizedPath.includes('/cuotas/prestamo/') && normalizedPath.includes('/notificar-email')) {
    return 'Envió notificación por correo'
  }
  if (normalizedMethod === 'POST' && normalizedPath.includes('/roles')) return 'Creó rol'
  if (normalizedMethod === 'PUT' && normalizedPath.includes('/roles/') && normalizedPath.includes('/permisos')) {
    return 'Actualizó permisos de rol'
  }
  if (normalizedMethod === 'PUT' && normalizedPath.includes('/analistas/') && normalizedPath.includes('/rol-acceso')) {
    return 'Asignó rol de acceso'
  }
  if (normalizedMethod === 'POST' && normalizedPath.includes('/analistas/') && normalizedPath.includes('/reset-password')) {
    return 'Reseteó contraseña de analista'
  }
  if (normalizedMethod === 'DELETE' && normalizedPath.includes('/documentos/')) return 'Eliminó documento'
  if (normalizedMethod === 'POST' && (normalizedPath.includes('/analistas/login') || normalizedPath.includes('/login'))) {
    return 'Inició sesión'
  }

  return `${normalizedMethod} ${path}`
}

export const getAuditLogs = () => readLogs()

export const clearAuditLogs = () => writeLogs([])

export const appendAuditLog = ({ action, module, detail, source = 'UI', path = '', method = '', status = '' }) => {
  if (!isBrowser()) return

  const now = new Date()
  const analista = getAnalistaSnapshot()
  const logs = readLogs()
  const entry = {
    id: `${now.getTime()}-${Math.random().toString(36).slice(2, 9)}`,
    timestamp: now.toISOString(),
    action: String(action || 'Acción ejecutada'),
    module: String(module || mapModuleByPath(path)),
    detail: String(detail || '').trim(),
    source: String(source || 'UI'),
    method: String(method || '').toUpperCase(),
    path: String(path || ''),
    status: String(status || ''),
    ...analista
  }

  writeLogs([entry, ...logs])
}

export const logApiMutation = ({ method, path, status }) => {
  const normalizedMethod = String(method || 'GET').toUpperCase()

  if (!['POST', 'PUT', 'PATCH', 'DELETE'].includes(normalizedMethod)) return

  appendAuditLog({
    action: mapApiAction({ method: normalizedMethod, path }),
    module: mapModuleByPath(path),
    source: 'API',
    method: normalizedMethod,
    path,
    status: String(status || '')
  })
}

export const logRouteNavigation = path => {
  const cleanedPath = String(path || '').trim()

  if (!cleanedPath || cleanedPath === '/login') return

  const logs = readLogs()
  const latest = logs[0]
  const nowMs = Date.now()
  const latestMs = latest?.timestamp ? new Date(latest.timestamp).getTime() : 0

  if (latest && latest.action === 'Accedió a pantalla' && latest.path === cleanedPath && nowMs - latestMs < 2500) {
    return
  }

  appendAuditLog({
    action: 'Accedió a pantalla',
    module: mapModuleByPath(cleanedPath),
    detail: cleanedPath,
    source: 'NAVEGACIÓN',
    path: cleanedPath
  })
}
