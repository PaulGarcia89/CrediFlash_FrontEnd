const TOKEN_KEY = 'cf_token'
const USER_KEY = 'cf_analista'

const isBrowser = () => typeof window !== 'undefined'

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
    window.localStorage.setItem(USER_KEY, JSON.stringify(analista))
  }
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
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export const clearSession = () => {
  if (!isBrowser()) return

  window.localStorage.removeItem(TOKEN_KEY)
  window.localStorage.removeItem(USER_KEY)
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('authToken')

  document.cookie = `${TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}

export const isAuthenticated = () => Boolean(getToken())
