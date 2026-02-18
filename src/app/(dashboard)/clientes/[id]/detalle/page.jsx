import ClienteDashboardModule from '@views/modules/ClienteDashboardModule'

export const metadata = {
  title: 'Dashboard del cliente'
}

export default async function ClienteDetallePage({ params }) {
  const resolvedParams = await params

  return <ClienteDashboardModule clienteId={resolvedParams?.id} />
}
