// MUI Imports
import { useTheme } from '@mui/material/styles'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
import VerticalNavContent from './VerticalNavContent'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledHorizontalNavExpandIcon from '@menu/styles/horizontal/StyledHorizontalNavExpandIcon'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'
import menuRootStyles from '@core/styles/horizontal/menuRootStyles'
import verticalNavigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
import verticalMenuItemStyles from '@core/styles/vertical/menuItemStyles'
import verticalMenuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import usePermissions from '@/hooks/usePermissions'

const RenderExpandIcon = ({ level }) => (
  <StyledHorizontalNavExpandIcon level={level}>
    <i className='tabler-chevron-right' />
  </StyledHorizontalNavExpandIcon>
)

const RenderVerticalExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const HorizontalMenu = () => {
  // Hooks
  const verticalNavOptions = useVerticalNav()
  const theme = useTheme()
  const { can, canAny, analista } = usePermissions()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const isAdminProfile = String(analista?.rol || analista?.role || '').toUpperCase().includes('ADMIN')
  const showHome = can('dashboard.view')
  const showAnalytics = can('analytics.view')
  const showClientes = can('clientes.view')
  const showSolicitudes = can('solicitudes.view')
  const showNuevoCaso = can('solicitudes.create') || can('clientes.create')
  const showCuotas = canAny(['prestamos.view', 'cuotas.view'])
  const showReportes = can('reportes.view') || isAdminProfile
  const showLogs = can('logs.view') || isAdminProfile
  const showSettings = canAny(['roles.view', 'roles.manage', 'analistas.view', 'analistas.manage']) || isAdminProfile
  const showOperacion = showNuevoCaso || showSolicitudes || showCuotas
  const showAdministracion = showLogs || showSettings

  return (
    <HorizontalNav
      switchToVertical
      verticalNavContent={VerticalNavContent}
      verticalNavProps={{
        customStyles: verticalNavigationCustomStyles(verticalNavOptions, theme),
        backgroundColor: 'var(--mui-palette-background-paper)'
      }}
    >
      <Menu
        rootStyles={menuRootStyles(theme)}
        renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
        menuItemStyles={menuItemStyles(theme, 'tabler-circle')}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        popoutMenuOffset={{
          mainAxis: ({ level }) => (level && level > 0 ? 14 : 12),
          alignmentAxis: 0
        }}
        verticalMenuProps={{
          menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
          renderExpandIcon: ({ open }) => (
            <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
          ),
          renderExpandedMenuItemIcon: { icon: <i className='tabler-circle text-xs' /> },
          menuSectionStyles: verticalMenuSectionStyles(verticalNavOptions, theme)
        }}
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
            <MenuItem href='/reportes'>Resumen de reportes</MenuItem>
          </SubMenu>
        ) : null}

        {showReportes ? (
          <MenuItem href='/carga-datos-bancarios' icon={<i className='tabler-upload' />}>
            Carga de datos bancarios
          </MenuItem>
        ) : null}

        {showAdministracion ? (
          <SubMenu label='Administración' icon={<i className='tabler-settings' />}>
            {showSettings ? <MenuItem href='/settings'>Configuración de acceso</MenuItem> : null}
            {showLogs ? <MenuItem href='/logs'>Logs</MenuItem> : null}
          </SubMenu>
        ) : null}
      </Menu>
      {/* <Menu
          rootStyles={menuRootStyles(theme)}
          renderExpandIcon={({ level }) => <RenderExpandIcon level={level} />}
          menuItemStyles={menuItemStyles(theme, 'tabler-circle')}
          renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 14 : 12),
            alignmentAxis: 0
          }}
          verticalMenuProps={{
            menuItemStyles: verticalMenuItemStyles(verticalNavOptions, theme),
            renderExpandIcon: ({ open }) => (
              <RenderVerticalExpandIcon open={open} transitionDuration={transitionDuration} />
            ),
            renderExpandedMenuItemIcon: { icon: <i className='tabler-circle text-xs' /> },
            menuSectionStyles: verticalMenuSectionStyles(verticalNavOptions, theme)
          }}
        >
          <GenerateHorizontalMenu menuData={menuData(dictionary)} />
        </Menu> */}
    </HorizontalNav>
  )
}

export default HorizontalMenu
