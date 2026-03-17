// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import usePermissions from '@/hooks/usePermissions'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { can, canAny } = usePermissions()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar
  const showHome = can('dashboard.view')
  const showAnalytics = can('analytics.view')
  const showClientes = can('clientes.view')
  const showClientesCreate = can('clientes.create')
  const showSolicitudes = can('solicitudes.view')
  const showSolicitudesCreate = can('solicitudes.create')
  const showCuotas = canAny(['prestamos.view', 'cuotas.view'])

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {showHome ? (
          <MenuItem href='/home' icon={<i className='tabler-smart-home' />}>
            Home
          </MenuItem>
        ) : null}
        {showAnalytics ? (
          <MenuItem href='/analytics' icon={<i className='tabler-chart-bar' />}>
            Analytics
          </MenuItem>
        ) : null}

        {showClientes ? (
          <SubMenu label='Clientes' icon={<i className='tabler-users' />}>
            {showClientesCreate ? <MenuItem href='/clientes/nuevo'>Registrar cliente</MenuItem> : null}
            <MenuItem href='/clientes'>Listado de clientes</MenuItem>
          </SubMenu>
        ) : null}

        {showSolicitudes ? (
          <SubMenu label='Solicitudes' icon={<i className='tabler-file-description' />}>
            {showSolicitudesCreate ? <MenuItem href='/solicitudes/nueva'>Ingresar solicitud</MenuItem> : null}
            <MenuItem href='/solicitudes'>Listado de solicitudes</MenuItem>
          </SubMenu>
        ) : null}

        {showCuotas ? (
          <SubMenu label='Cuotas' icon={<i className='tabler-cash-banknote' />}>
            <MenuItem href='/cuotas'>Registro de cuotas</MenuItem>
          </SubMenu>
        ) : null}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
