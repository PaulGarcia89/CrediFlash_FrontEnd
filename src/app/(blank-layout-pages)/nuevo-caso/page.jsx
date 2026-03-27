import RegistroClienteSolicitudModule from '@views/modules/RegistroClienteSolicitudModule'
import Box from '@mui/material/Box'

export const metadata = {
  title: 'Nuevo caso público'
}

export default function NuevoCasoPublicoPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff', py: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: 980, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <RegistroClienteSolicitudModule publicMode />
      </Box>
    </Box>
  )
}
