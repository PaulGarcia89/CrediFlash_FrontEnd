'use client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function SettingsModule() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1.5}>
          <Typography variant='h4'>Settings</Typography>
          <Typography color='text.secondary'>
            Configuración base migrada. Puedes extender aquí preferencias, seguridad y parámetros de la cuenta.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
