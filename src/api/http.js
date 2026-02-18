import { clearSession } from '@/lib/auth/session'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api'

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
  const normalizedBase = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const url = new URL(`${normalizedBase}${normalizedPath}`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value))
      }
    })
  }

  return url.toString()
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

  try {
    response = await fetch(buildUrl(path, query), {
      method,
      headers,
      body: isFormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
      cache: 'no-store'
    })
  } catch {
    throw new Error('No se pudo conectar con el backend en http://localhost:5001')
  }

  const payload = await response.json().catch(() => ({}))

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      clearSession()

      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        window.location.replace('/login')
      }
    }

    const message = payload?.message || payload?.error || `HTTP ${response.status}`
    const error = new Error(message)

    error.status = response.status
    error.payload = payload

    throw error
  }

  return payload
}
