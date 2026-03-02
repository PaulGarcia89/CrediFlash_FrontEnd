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

export const listarAnalistas = ({ page = 1, limit = 100, search = '', estado = '' } = {}) =>
  apiRequest('/analistas', {
    method: 'GET',
    query: { page, limit, search, estado },
    auth: true
  })

export const actualizarPerfilAnalista = payload =>
  apiRequest('/analistas/perfil', {
    method: 'PUT',
    body: payload,
    auth: true
  })

export const resetPasswordAnalista = (analistaId, payload) =>
  apiRequest(`/analistas/${analistaId}/reset-password`, {
    method: 'POST',
    body: payload,
    auth: true
  })
