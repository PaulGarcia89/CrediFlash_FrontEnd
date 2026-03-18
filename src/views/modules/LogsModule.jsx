'use client'

import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import usePermissions from '@/hooks/usePermissions'

export default function LogsModule() {
  const { analista } = usePermissions()
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')

  if (!isAdminProfile) {
    return <Alert severity='warning'>Solo el perfil administrador puede acceder a Logs.</Alert>
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Logs</Typography>
      <Card>
        <CardContent>
          <Typography color='text.secondary'>Módulo disponible solo para administrador.</Typography>
        </CardContent>
      </Card>
    </Stack>
  )
}
