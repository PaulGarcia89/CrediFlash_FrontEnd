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
  const { can, canAny, analista } = usePermissions()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar
  const showHome = can('dashboard.view')
  const showAnalytics = can('analytics.view')
  const showClientes = can('clientes.view')
  const showSolicitudes = can('solicitudes.view')
  const showNuevoCaso = can('solicitudes.create') || can('clientes.create')
  const showCuotas = canAny(['prestamos.view', 'cuotas.view'])
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')
  const showReportes = can('reportes.view') || isAdminProfile
  const showLogs = can('logs.view') || isAdminProfile
  const showSettings = canAny(['roles.view', 'roles.manage', 'analistas.view', 'analistas.manage']) || isAdminProfile
  const showOperacion = showNuevoCaso || showSolicitudes || showCuotas
  const showAdministracion = showLogs || showSettings

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
            Inicio
          </MenuItem>
        ) : null}
        {showAnalytics ? (
          <MenuItem href='/analytics' icon={<i className='tabler-chart-bar' />}>
            Analytics
          </MenuItem>
        ) : null}

        {showClientes ? (
          <SubMenu label='Clientes' icon={<i className='tabler-users' />}>
            <MenuItem href='/clientes'>Listado de clientes</MenuItem>
          </SubMenu>
        ) : null}

        {showOperacion ? (
          <SubMenu label='Operación' icon={<i className='tabler-briefcase' />}>
            {showNuevoCaso ? <MenuItem href='/operacion/nuevo-caso'>Nuevo caso</MenuItem> : null}
            {showSolicitudes ? <MenuItem href='/solicitudes'>Solicitudes</MenuItem> : null}
            {showCuotas ? <MenuItem href='/cuotas'>Registro de cuotas</MenuItem> : null}
          </SubMenu>
        ) : null}

        {showReportes ? (
          <SubMenu label='Reportes' icon={<i className='tabler-report-analytics' />}>
            <MenuItem href='/reportes?tab=resumen'>Resumen de reportes</MenuItem>
            <MenuItem href='/reportes?tab=carga-pagos'>Carga de pagos bancarios</MenuItem>
          </SubMenu>
        ) : null}

        {showAdministracion ? (
          <SubMenu label='Administración' icon={<i className='tabler-settings' />}>
            {showSettings ? <MenuItem href='/settings'>Configuración de acceso</MenuItem> : null}
            {showLogs ? <MenuItem href='/logs'>Logs</MenuItem> : null}
          </SubMenu>
        ) : null}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
