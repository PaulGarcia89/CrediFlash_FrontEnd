'use client'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: 2,
          py: 1.25,
          borderRadius: 2,
          bgcolor: 'background.paper',
          border: theme => `1px solid ${theme.palette.divider}`,
          minWidth: 280,
          width: { xs: '100%', md: 420 }
        }}
      >
        <i className='tabler-search text-xl' />
        <Typography color='text.secondary'>Search [CTRL + K]</Typography>
      </Box>

      <Stack direction='row' spacing={0.5} alignItems='center'>
        <IconButton size='small'>
          <i className='tabler-language text-xl' />
        </IconButton>
        <ModeDropdown />
        <IconButton size='small'>
          <i className='tabler-layout-grid-add text-xl' />
        </IconButton>
        <IconButton size='small'>
          <i className='tabler-bell text-xl' />
        </IconButton>
        <UserDropdown />
      </Stack>
    </div>
  )
}

export default NavbarContent
