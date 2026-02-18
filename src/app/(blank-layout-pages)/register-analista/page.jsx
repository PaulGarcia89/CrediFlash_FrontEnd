import RegisterAnalista from '@views/RegisterAnalista'

import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'Registro de Analista',
  description: 'Registro de usuarios analistas'
}

export default async function RegisterAnalistaPage() {
  const mode = await getServerMode()

  return <RegisterAnalista mode={mode} />
}
