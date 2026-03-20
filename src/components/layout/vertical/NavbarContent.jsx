'use client'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import LanguageToggle from '@components/layout/shared/LanguageToggle'
import UserDropdown from '@components/layout/shared/UserDropdown'
import NavToggle from './NavToggle'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div
      className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-2 md:gap-4 is-full')}
    >
      <Stack direction='row' spacing={1} alignItems='center' sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 34,
            height: 34,
            borderRadius: 1.5,
            border: theme => `1px solid ${theme.palette.divider}`,
            bgcolor: 'background.paper',
            flexShrink: 0
          }}
        >
          <NavToggle />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            gap: 1.25,
            px: 1.75,
            py: 1,
            borderRadius: 2,
            bgcolor: 'background.paper',
            border: theme => `1px solid ${theme.palette.divider}`,
            minWidth: 0,
            width: { sm: '100%', md: 420 },
            maxWidth: 520
          }}
        >
          <i className='tabler-search text-xl' />
          <Typography color='text.secondary' noWrap>
            Search [CTRL + K]
          </Typography>
        </Box>

        <Tooltip title='Buscar'>
          <IconButton size='small' sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
            <i className='tabler-search text-xl' />
          </IconButton>
        </Tooltip>
      </Stack>

      <Stack direction='row' spacing={{ xs: 0, sm: 0.5 }} alignItems='center' sx={{ flexShrink: 0 }}>
        <ModeDropdown />
        <Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
          <LanguageToggle />
        </Box>
        <IconButton size='small'>
          <i className='tabler-bell text-xl' />
        </IconButton>
        <UserDropdown />
      </Stack>
    </div>
  )
}

export default NavbarContent
