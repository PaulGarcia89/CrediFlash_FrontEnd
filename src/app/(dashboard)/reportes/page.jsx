import ReportesModule from '@views/modules/ReportesModule'

export const metadata = {
  title: 'Reportes'
}

export default function ReportesPage() {
  return <ReportesModule initialSubMenu='resumen' hideTabs pageTitle='Reportes' />
}
