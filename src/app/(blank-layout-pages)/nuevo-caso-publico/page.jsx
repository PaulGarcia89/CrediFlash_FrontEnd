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
        py: { xs: 2, md: 5 },
        bgcolor: '#f4f7f1',
        backgroundImage:
          'radial-gradient(circle at top left, rgba(83, 164, 81, 0.13), transparent 28%), radial-gradient(circle at top right, rgba(36, 88, 39, 0.08), transparent 24%), linear-gradient(180deg, #f7faf4 0%, #eef4ea 100%)'
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
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1100, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          spacing={2}
          sx={{
            mb: { xs: 3, md: 4 },
            p: { xs: 2.5, md: 3.5 },
            borderRadius: 4,
            border: '1px solid rgba(131, 156, 122, 0.22)',
            bgcolor: 'rgba(255, 255, 255, 0.84)',
            boxShadow: '0 18px 45px rgba(25, 38, 17, 0.08)',
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
                variant='h3'
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#153218'
                }}
              >
                CUSTOMER PRE-QUALIFICATION
              </Typography>
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  color: '#153218'
                }}
              >
                PRECALIFICACION DE CLIENTES
              </Typography>
              <Typography sx={{ color: '#4e6350', maxWidth: 760 }}>
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
                  color: '#2f6b35',
                  fontWeight: 700,
                  border: '1px solid rgba(83, 164, 81, 0.18)',
                  alignSelf: { xs: 'flex-start', sm: 'flex-end' }
                }}
              >
                Formulario público
              </Box>
              <Typography variant='body2' sx={{ color: '#5e7260', textAlign: { xs: 'left', sm: 'right' } }}>
                No requiere iniciar sesión.
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ borderColor: 'rgba(131, 156, 122, 0.2)' }} />
          <Alert
            severity='info'
            sx={{
              borderRadius: 3,
              border: '1px solid rgba(83, 164, 81, 0.18)',
              bgcolor: '#fbfef8',
              color: '#304633',
              '& .MuiAlert-icon': { color: '#53a451' }
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
