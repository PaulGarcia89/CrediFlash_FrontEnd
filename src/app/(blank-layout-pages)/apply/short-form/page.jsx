import Box from '@mui/material/Box'

import ShortFormSolicitudModule from '@views/modules/ShortFormSolicitudModule'

export const metadata = {
  title: 'Solicitud corta'
}

export default function ShortFormSolicitudPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 2, md: 4 },
        bgcolor: '#f6f7fb'
      }}
    >
      <Box sx={{ maxWidth: 1180, mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <ShortFormSolicitudModule />
      </Box>
    </Box>
  )
}
