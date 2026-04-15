import RegistroClienteSolicitudModule from '@views/modules/RegistroClienteSolicitudModule'
import Box from '@mui/material/Box'

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
        py: { xs: 1.75, md: 3.5 },
        bgcolor: '#eaf3e4',
        backgroundImage: 'linear-gradient(180deg, #eaf3e4 0%, #e4efe0 100%)'
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 681, mx: 'auto', px: { xs: 1.25, sm: 1.5, md: 0 } }}>
        <RegistroClienteSolicitudModule publicMode />
      </Box>
    </Box>
  )
}
