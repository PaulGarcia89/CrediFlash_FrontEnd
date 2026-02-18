import SolicitudFormModule from '@views/modules/SolicitudFormModule'

export const metadata = {
  title: 'Editar solicitud'
}

export default async function EditarSolicitudPage({ params }) {
  const resolvedParams = await params

  return <SolicitudFormModule solicitudId={resolvedParams?.id} />
}
