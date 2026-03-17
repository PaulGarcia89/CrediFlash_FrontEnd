import { getAnalista, getPermissionCodes } from './session'

const normalizeCode = value => String(value || '').trim().toLowerCase()

const normalizePermissionList = input => {
  const values = Array.isArray(input) ? input : []
  const unique = new Set()

  values.forEach(item => {
    const code = normalizeCode(item)

    if (code) unique.add(code)
  })

  return Array.from(unique)
}

const isAdminRole = source => {
  const role = String(source?.rol || source?.role || source?.rol_acceso || '').toUpperCase()

  return role.includes('ADMIN')
}

export const extractPermissionCodes = source => {
  if (Array.isArray(source)) {
    return normalizePermissionList(source)
  }

  const analista = source || getAnalista() || {}
  const permissionCodes = normalizePermissionList(
    analista?.permission_codes || analista?.permissions || analista?.permisos || []
  )

  if (permissionCodes.length) return permissionCodes

  if (isAdminRole(analista)) {
    // Fallback temporal: si backend aún no devuelve permission_codes para admin, se habilita acceso completo en UI.
    return ['*']
  }

  return normalizePermissionList(getPermissionCodes())
}

const includesWithWildcard = (codes, requestedPermission) => {
  if (codes.includes('*')) return true
  if (codes.includes(requestedPermission)) return true

  return codes.some(code => {
    if (!code.endsWith('.*')) return false
    const prefix = code.slice(0, -2)

    return requestedPermission === prefix || requestedPermission.startsWith(`${prefix}.`)
  })
}

export const can = (permission, source) => {
  const requestedPermission = normalizeCode(permission)

  if (!requestedPermission) return true

  const codes = extractPermissionCodes(source)

  return includesWithWildcard(codes, requestedPermission)
}

export const canAny = (permissions = [], source) => {
  if (!Array.isArray(permissions) || permissions.length === 0) return true

  return permissions.some(permission => can(permission, source))
}
