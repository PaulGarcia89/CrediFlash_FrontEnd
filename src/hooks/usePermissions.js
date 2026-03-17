'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { can as hasPermission, canAny as hasAnyPermission, extractPermissionCodes } from '@/lib/auth/permissions'
import { getAnalista } from '@/lib/auth/session'

export default function usePermissions() {
  const [analista, setAnalista] = useState(() => getAnalista())

  useEffect(() => {
    const syncSession = () => {
      setAnalista(getAnalista())
    }

    syncSession()
    window.addEventListener('storage', syncSession)
    window.addEventListener('cf:session-updated', syncSession)

    return () => {
      window.removeEventListener('storage', syncSession)
      window.removeEventListener('cf:session-updated', syncSession)
    }
  }, [])

  const permissionCodes = useMemo(() => extractPermissionCodes(analista), [analista])

  const can = useCallback(permission => hasPermission(permission, permissionCodes), [permissionCodes])
  const canAny = useCallback(permissions => hasAnyPermission(permissions, permissionCodes), [permissionCodes])

  return {
    analista,
    permissionCodes,
    can,
    canAny
  }
}
