import ClienteFormModule from '@views/modules/ClienteFormModule'

export const metadata = {
  title: 'Editar cliente'
}

export default async function EditarClientePage({ params }) {
  const resolvedParams = await params

  return <ClienteFormModule clienteId={resolvedParams?.id} />
}
