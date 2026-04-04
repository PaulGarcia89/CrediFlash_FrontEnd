import { apiRequest } from './http'

export const listarPrestamos = ({
  page = 1,
  limit = 20,
  search = '',
  status = '',
  cliente_id = '',
  fecha_desde = '',
  fecha_hasta = ''
} = {}) =>
  apiRequest('/prestamos', {
    method: 'GET',
    query: { page, limit, search, status, cliente_id, fecha_desde, fecha_hasta }
  })

export const registrarPagoSemanal = (
  prestamoId,
  monto_pago,
  monto_penalizacion = 0,
  monto_fee = 0,
  motivo_fee = ''
) =>
  apiRequest(`/prestamos/${prestamoId}/pago-semanal`, {
    method: 'POST',
    body: { monto_pago, monto_penalizacion, monto_fee, motivo_fee }
  })

export const generarCuotasSemanales = (prestamoId, payload) =>
  apiRequest(`/cuotas/prestamo/${prestamoId}/generar-semanales`, {
    method: 'POST',
    body: payload
  })

export const enviarNotificacionCuotaEmail = prestamoId =>
  apiRequest(`/cuotas/prestamo/${prestamoId}/notificar-email`, {
    method: 'POST'
  })

export const enviarNotificacionCuotaWhatsapp = prestamoId =>
  apiRequest(`/cuotas/prestamo/${prestamoId}/notificar-whatsapp`, {
    method: 'POST'
  })

export const obtenerModoRecordatorioWhatsapp = prestamoId =>
  apiRequest(`/prestamos/${prestamoId}/recordatorios/whatsapp`, {
    method: 'GET'
  })

export const actualizarModoRecordatorioWhatsapp = (prestamoId, modo) =>
  apiRequest(`/prestamos/${prestamoId}/recordatorios/whatsapp`, {
    method: 'PUT',
    body: { modo }
  })
