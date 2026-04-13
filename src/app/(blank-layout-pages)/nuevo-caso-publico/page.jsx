import RegistroClienteSolicitudModule from '@views/modules/RegistroClienteSolicitudModule'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'

export const metadata = {
  title: 'Nuevo caso público'
}

export default function NuevoCasoPublicoPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', py: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 980, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant='h4' sx={{ fontWeight: 700 }}>
            CreditFlash · Formulario público
          </Typography>
          <Typography color='text.secondary'>
            Complete este formulario para registrar su solicitud de crédito. Esta página no requiere iniciar sesión.
          </Typography>
          <Alert severity='info'>
            Aviso legal: La información proporcionada será utilizada únicamente para la evaluación de crédito y podrá ser verificada por
            nuestro equipo. Al enviar el formulario, usted acepta el tratamiento de sus datos conforme a las políticas de CreditFlash.
          </Alert>
        </Stack>
        <RegistroClienteSolicitudModule publicMode />
      </Box>
    </Box>
  )
}
