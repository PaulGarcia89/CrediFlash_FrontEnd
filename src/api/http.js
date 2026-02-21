import { clearSession } from '@/lib/auth/session'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const normalizeApiBase = () => {
  const trimmed = String(API_URL || '').trim().replace(/\/$/, '')

  if (!trimmed) return ''
  if (trimmed.endsWith('/api')) return trimmed

  return `${trimmed}/api`
}

const API_BASE_URL = normalizeApiBase()

const TOKEN_KEYS = ['cf_token', 'accessToken', 'token', 'authToken']

const getToken = () => {
  if (typeof window === 'undefined') return null

  for (const key of TOKEN_KEYS) {
    const value = window.localStorage.getItem(key)

    if (value) return value
  }

  return null
}

const buildUrl = (path, query) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (!API_BASE_URL) {
    throw new Error('Falta configurar NEXT_PUBLIC_API_URL en el entorno de despliegue.')
  }

  const url = new URL(`${API_BASE_URL}${normalizedPath}`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value))
      }
    })
  }

  return url.toString()
}

const shouldForceLogin = (status, message = '') => {
  if (status === 401 || status === 403) return true

  const normalized = String(message || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return (
    normalized.includes('token') &&
    (normalized.includes('expir') ||
      normalized.includes('caduc') ||
      normalized.includes('inval') ||
      normalized.includes('requer') ||
      normalized.includes('autentic'))
  )
}

export const apiRequest = async (path, { method = 'GET', query, body, auth = true } = {}) => {
  const headers = {}
  const isFormData = body instanceof FormData

  if (!isFormData && body !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (auth) {
    const token = getToken()

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
  }

  let response
  let requestUrl = ''

  try {
    requestUrl = buildUrl(path, query)
    response = await fetch(requestUrl, {
      method,
      headers,
      body: isFormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
      cache: 'no-store'
    })
  } catch {
    throw new Error(
      `No se pudo conectar con el backend en ${API_BASE_URL || 'NEXT_PUBLIC_API_URL no configurada en producción'}`
    )
  }

  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    const backendMessage = payload?.message || payload?.error || ''

    if (shouldForceLogin(response.status, backendMessage)) {
      clearSession()

      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        window.location.replace('/login')
      }
    }

    const message = backendMessage || `HTTP ${response.status}`
    const error = new Error(message)

    error.status = response.status
    error.payload = payload
    error.url = requestUrl
    error.method = method

    throw error
  }

  return payload
}
