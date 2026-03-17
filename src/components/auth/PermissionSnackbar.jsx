'use client'

import { useEffect, useState } from 'react'

import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const DEFAULT_MESSAGE = 'No tienes permisos para realizar esta acción.'

export default function PermissionSnackbar() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(DEFAULT_MESSAGE)

  useEffect(() => {
    const onForbidden = event => {
      const backendMessage = String(event?.detail?.message || '').trim()

      setMessage(backendMessage || DEFAULT_MESSAGE)
      setOpen(true)
    }

    window.addEventListener('cf:forbidden', onForbidden)

    return () => {
      window.removeEventListener('cf:forbidden', onForbidden)
    }
  }, [])

  return (
    <Snackbar open={open} autoHideDuration={3500} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert onClose={() => setOpen(false)} severity='error' variant='filled' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
