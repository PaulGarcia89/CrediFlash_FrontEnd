import { apiRequest } from './http'

export const aprobarSolicitudComoPrestamo = (solicitudId, payload) =>
  apiRequest(`/prestamos/solicitud/${solicitudId}`, {
    method: 'POST',
    body: payload
  })
