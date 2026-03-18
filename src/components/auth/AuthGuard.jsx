'use client'

import { useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { obtenerPerfilAnalista } from '@/api/auth'
import { logRouteNavigation } from '@/lib/audit/logs'
import { getToken, setSession } from '@/lib/auth/session'

export default function AuthGuard({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const token = getToken()

    if (!token) {
      const redirect = pathname ? `?redirect=${encodeURIComponent(pathname)}` : ''

      router.replace(`/login${redirect}`)

      return
    }

    const hydrateSession = async () => {
      try {
        const response = await obtenerPerfilAnalista()
        const analista = response?.data?.analista || response?.data?.user || response?.data || response?.analista || null

        if (analista && !cancelled) {
          setSession({ token, analista })
        }
      } catch {
        // Si falla perfil, mantenemos sesión con token local.
      } finally {
        if (!cancelled) setReady(true)
      }
    }

    hydrateSession()

    return () => {
      cancelled = true
    }
  }, [pathname, router])

  useEffect(() => {
    if (!ready) return
    if (!pathname) return

    logRouteNavigation(pathname)
  }, [pathname, ready])

  if (!ready) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress size={28} />
      </Box>
    )
  }

  return children
}
