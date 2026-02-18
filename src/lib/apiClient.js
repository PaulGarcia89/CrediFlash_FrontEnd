const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'

const getToken = () => {
  if (typeof window === 'undefined') return ''

  return localStorage.getItem('token') || localStorage.getItem('accessToken') || localStorage.getItem('authToken') || ''
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
    throw new Error('No se pudo conectar con el backend en :5001')
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data?.message || data?.error || `HTTP ${response.status}`

    if (response.status === 401 || response.status === 403) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('authToken')

        if (window.location.pathname !== '/login') {
          window.location.replace('/login')
        }
      }
    }

    throw new Error(message)
  }

  return data
}
