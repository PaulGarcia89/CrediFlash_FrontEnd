import { apiRequest } from './http'

export const loginAnalista = credentials =>
  apiRequest('/analistas/login', {
    method: 'POST',
    body: credentials,
    auth: false
  })

export const registrarAnalista = payload =>
  apiRequest('/analistas/registrar', {
    method: 'POST',
    body: payload,
    auth: false
  })

export const obtenerPerfilAnalista = () =>
  apiRequest('/analistas/perfil', {
    method: 'GET',
    auth: true
  })
