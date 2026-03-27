import RegistroClienteSolicitudModule from '@views/modules/RegistroClienteSolicitudModule'

export const metadata = {
  title: 'Nuevo caso público'
}

export default function NuevoCasoPublicoPage() {
  return <RegistroClienteSolicitudModule publicMode />
}
