const verticalMenuData = () => [
  {
    label: 'Home',
    href: '/home',
    icon: 'tabler-smart-home'
  },
  {
    label: 'Analytics',
    href: '/analytics',
    icon: 'tabler-chart-bar'
  },
  {
    label: 'Clientes',
    icon: 'tabler-users',
    children: [
      {
        label: 'Registrar cliente',
        href: '/clientes/nuevo'
      },
      {
        label: 'Listado de clientes',
        href: '/clientes'
      }
    ]
  },
  {
    label: 'Solicitudes',
    icon: 'tabler-file-description',
    children: [
      {
        label: 'Ingresar solicitud',
        href: '/solicitudes/nueva'
      },
      {
        label: 'Listado de solicitudes',
        href: '/solicitudes'
      }
    ]
  },
  {
    label: 'Cuotas',
    icon: 'tabler-cash-banknote',
    children: [
      {
        label: 'Registro de cuotas',
        href: '/cuotas'
      }
    ]
  }
]

export default verticalMenuData
