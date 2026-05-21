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
        py: 0,
        bgcolor: '#FBF3DF'
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '100%', mx: 'auto', px: 0 }}>
        <ShortFormSolicitudModule />
      </Box>
    </Box>
  )
}
