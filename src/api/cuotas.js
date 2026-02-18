import { apiRequest } from './http'

export const listarPrestamos = ({
  page = 1,
  limit = 20,
  status = '',
  cliente_id = '',
  fecha_desde = '',
  fecha_hasta = ''
} = {}) =>
  apiRequest('/prestamos', {
    method: 'GET',
    query: { page, limit, status, cliente_id, fecha_desde, fecha_hasta }
  })

export const registrarPagoSemanal = (prestamoId, monto_pago) =>
  apiRequest(`/prestamos/${prestamoId}/pago-semanal`, {
    method: 'POST',
    body: { monto_pago }
  })

export const generarCuotasSemanales = (prestamoId, payload) =>
  apiRequest(`/cuotas/prestamo/${prestamoId}/generar-semanales`, {
    method: 'POST',
    body: payload
  })
