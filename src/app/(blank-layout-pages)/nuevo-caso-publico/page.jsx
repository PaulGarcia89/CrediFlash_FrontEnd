import RegistroClienteSolicitudModule from '@views/modules/RegistroClienteSolicitudModule'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'

export const metadata = {
  title: 'Nuevo caso público'
}

export default function NuevoCasoPublicoPage() {
  const basePath = process.env.BASEPATH || ''

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', py: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 980, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Box
            component='img'
            src='/creditflash-logo.svg'
            alt='CreditFlash'
            sx={{ height: 44, width: 'auto' }}
          />
          <Typography variant='h4' sx={{ fontWeight: 700 }}>
            CreditFlash · Formulario público
          </Typography>
          <Typography color='text.secondary'>
            Complete este formulario para registrar su solicitud de crédito. Esta página no requiere iniciar sesión.
          </Typography>
          <Alert severity='info'>
            Aviso legal: Los datos enviados serán utilizados exclusivamente para evaluación crediticia y verificación. Al enviar, usted
            acepta el tratamiento de datos conforme a las políticas de CreditFlash.
          </Alert>
        </Stack>
        <RegistroClienteSolicitudModule publicMode />
      </Box>
    </Box>
  )
}
