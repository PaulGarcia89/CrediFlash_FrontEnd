import RegistroClienteSolicitudModule from '@views/modules/RegistroClienteSolicitudModule'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'

export const metadata = {
  title: 'Nuevo caso público'
}

export default function NuevoCasoPublicoPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 2, md: 4 },
        bgcolor: '#f1f3f4',
        backgroundImage:
          'radial-gradient(circle at top left, rgba(52, 168, 83, 0.1), transparent 26%), radial-gradient(circle at top right, rgba(95, 99, 104, 0.06), transparent 22%), linear-gradient(180deg, #f8f9fa 0%, #edf0ed 100%)'
      }}
    >
      <Box
        aria-hidden='true'
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.32) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.18,
          pointerEvents: 'none'
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 820, mx: 'auto', px: { xs: 1.5, sm: 2.5, md: 3 } }}>
        <Stack
          spacing={2}
          sx={{
            mb: { xs: 3, md: 4 },
            p: { xs: 2.25, md: 3 },
            borderRadius: 4,
            border: '1px solid #dadce0',
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 1px 2px rgba(60, 64, 67, 0.15)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ sm: 'center' }}
            justifyContent='space-between'
          >
            <Stack spacing={1} sx={{ maxWidth: 760 }}>
              <Box
                component='img'
                src='/creditflash-logo.svg'
                alt='CreditFlash'
                sx={{ height: 46, width: 'auto', alignSelf: 'flex-start' }}
              />
              <Typography
                variant='h4'
                sx={{ fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.08, color: '#202124' }}
              >
                CUSTOMER PRE-QUALIFICATION
              </Typography>
              <Typography
                variant='h4'
                sx={{ fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.08, color: '#202124' }}
              >
                PRECALIFICACION DE CLIENTES
              </Typography>
              <Typography sx={{ color: '#5f6368', maxWidth: 720, fontSize: 15 }}>
                Complete este formulario para evaluar su solicitud de préstamo. La información será tratada de manera
                confidencial y utilizada únicamente con fines de evaluación crediticia.
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ minWidth: { sm: 250 } }}>
              <Box
                sx={{
                  px: 2,
                  py: 1.25,
                  borderRadius: 999,
                  bgcolor: '#eef7ea',
                  color: '#137333',
                  fontWeight: 700,
                  border: '1px solid #dce8df',
                  alignSelf: { xs: 'flex-start', sm: 'flex-end' }
                }}
              >
                Formulario público
              </Box>
              <Typography variant='body2' sx={{ color: '#5f6368', textAlign: { xs: 'left', sm: 'right' } }}>
                No requiere iniciar sesión.
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ borderColor: '#dadce0' }} />
          <Alert
            severity='info'
            sx={{
              borderRadius: 3,
              border: '1px solid #d9ead3',
              bgcolor: '#f8faf8',
              color: '#202124',
              '& .MuiAlert-icon': { color: '#137333' }
            }}
          >
            Aviso legal: Los datos enviados serán utilizados exclusivamente para evaluación crediticia y verificación.
            Al enviar, usted acepta el tratamiento de datos conforme a las políticas de CreditFlash.
          </Alert>
        </Stack>
        <RegistroClienteSolicitudModule publicMode />
      </Box>
    </Box>
  )
}
