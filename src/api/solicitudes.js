import { apiRequest } from './http'

export const listarSolicitudes = ({ page = 1, limit = 20, estado = '', search = '' } = {}) =>
  apiRequest('/solicitudes', {
    method: 'GET',
    query: { page, limit, estado, search }
  })

export const crearSolicitud = formData =>
  apiRequest('/solicitudes', {
    method: 'POST',
    body: formData
  })

export const obtenerSolicitud = solicitudId =>
  apiRequest(`/solicitudes/${solicitudId}`, {
    method: 'GET'
  })

export const actualizarSolicitud = (solicitudId, payload) =>
  apiRequest(`/solicitudes/${solicitudId}`, {
    method: 'PUT',
    body: payload
  })

export const aprobarSolicitud = (solicitudId, payload) =>
  apiRequest(`/prestamos/solicitud/${solicitudId}`, {
    method: 'POST',
    body: payload
  })

export const rechazarSolicitud = solicitudId =>
  apiRequest(`/solicitudes/${solicitudId}/rechazar-simple`, {
    method: 'POST'
  })

export const ejecutarModeloNuevo = solicitudId =>
  apiRequest(`/solicitudes/${solicitudId}/ejecutar-modelo-nuevo`, {
    method: 'POST'
  })

export const ejecutarModeloAntiguo = solicitudId =>
  apiRequest(`/solicitudes/${solicitudId}/ejecutar-modelo-antiguo`, {
    method: 'POST'
  })

export const ejecutarRatingNuevoCliente = payload =>
  apiRequest('/ratings/new-client', {
    method: 'POST',
    body: payload
  })

export const ejecutarRatingClienteAntiguo = nombreCompleto =>
  apiRequest(`/ratings/client/${encodeURIComponent(nombreCompleto)}`, {
    method: 'GET'
  })
