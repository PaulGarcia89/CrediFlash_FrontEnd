const TOKEN_KEY = 'cf_token'
const USER_KEY = 'cf_analista'
const PERMISSIONS_KEY = 'cf_permission_codes'

const isBrowser = () => typeof window !== 'undefined'

const normalizePermissionCodes = permissionCodes => {
  const source = Array.isArray(permissionCodes) ? permissionCodes : []
  const unique = new Set()

  source.forEach(item => {
    const code = String(item || '').trim()

    if (code) unique.add(code)
  })

  return Array.from(unique)
}

const emitSessionUpdated = () => {
  if (!isBrowser()) return

  window.dispatchEvent(new CustomEvent('cf:session-updated'))
}

export const setSession = ({ token, analista }) => {
  if (!isBrowser()) return

  if (token) {
    window.localStorage.setItem(TOKEN_KEY, token)
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('accessToken', token)
    window.localStorage.setItem('authToken', token)
    document.cookie = `${TOKEN_KEY}=${token}; path=/; max-age=28800; samesite=lax`
  }

  if (analista) {
    const permissionCodes = normalizePermissionCodes(
      analista?.permission_codes || analista?.permissions || analista?.permisos || []
    )
    const normalizedAnalista = {
      ...analista,
      permission_codes: permissionCodes
    }

    window.localStorage.setItem(USER_KEY, JSON.stringify(normalizedAnalista))
    window.localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(permissionCodes))
  }

  emitSessionUpdated()
}

export const getToken = () => {
  if (!isBrowser()) return ''

  return (
    window.localStorage.getItem(TOKEN_KEY) ||
    window.localStorage.getItem('token') ||
    window.localStorage.getItem('accessToken') ||
    window.localStorage.getItem('authToken') ||
    ''
  )
}

export const getAnalista = () => {
  if (!isBrowser()) return null

  const raw = window.localStorage.getItem(USER_KEY)

  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)
    const permissionCodes = normalizePermissionCodes(
      parsed?.permission_codes || parsed?.permissions || parsed?.permisos || getPermissionCodes()
    )

    return {
      ...parsed,
      permission_codes: permissionCodes
    }
  } catch {
    return null
  }
}

export const getPermissionCodes = () => {
  if (!isBrowser()) return []

  const raw = window.localStorage.getItem(PERMISSIONS_KEY)

  if (!raw) return []

  try {
    return normalizePermissionCodes(JSON.parse(raw))
  } catch {
    return []
  }
}

export const clearSession = () => {
  if (!isBrowser()) return

  window.localStorage.removeItem(TOKEN_KEY)
  window.localStorage.removeItem(USER_KEY)
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('authToken')
  window.localStorage.removeItem(PERMISSIONS_KEY)

  document.cookie = `${TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  emitSessionUpdated()
}

export const isAuthenticated = () => Boolean(getToken())
