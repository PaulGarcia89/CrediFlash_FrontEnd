const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const getToken = () => {
  if (typeof window === 'undefined') return ''

  return localStorage.getItem('token') || localStorage.getItem('accessToken') || localStorage.getItem('authToken') || ''
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

export const apiClient = async (path, { method = 'GET', body, auth = true } = {}) => {
  const headers = {}

  if (body && !(body instanceof FormData)) {
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
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body: body instanceof FormData ? body : body !== undefined && body !== null ? JSON.stringify(body) : undefined
    })
  } catch {
    throw new Error(`No se pudo conectar con el backend en ${API_URL}`)
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data?.message || data?.error || `HTTP ${response.status}`

    if (shouldForceLogin(response.status, message)) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cf_token')
        localStorage.removeItem('token')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('authToken')
        localStorage.removeItem('cf_analista')
        document.cookie = 'cf_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'

        if (window.location.pathname !== '/login') {
          window.location.replace('/login')
        }
      }
    }

    throw new Error(message)
  }

  return data
}
