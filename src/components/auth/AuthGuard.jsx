'use client'

import { useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { getToken } from '@/lib/auth/session'

export default function AuthGuard({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const token = getToken()

    if (!token) {
      const redirect = pathname ? `?redirect=${encodeURIComponent(pathname)}` : ''

      router.replace(`/login${redirect}`)

      return
    }

    setReady(true)
  }, [pathname, router])

  if (!ready) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress size={28} />
      </Box>
    )
  }

  return children
}
