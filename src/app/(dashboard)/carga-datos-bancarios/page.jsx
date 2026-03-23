import ReportesModule from '@views/modules/ReportesModule'

export const metadata = {
  title: 'Carga de datos bancarios'
}

export default function CargaDatosBancariosPage() {
  return <ReportesModule initialSubMenu='carga-pagos-bancarios' hideTabs pageTitle='Carga de datos bancarios' />
}
