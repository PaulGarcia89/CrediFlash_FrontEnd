import { apiRequest } from './http'

export const cargarPagosBancariosArchivo = archivo => {
  const formData = new FormData()

  formData.append('archivo', archivo)

  return apiRequest('/reportes/pagos-bancarios/cargar', {
    method: 'POST',
    body: formData
  })
}

export const listarPagosBancarios = ({
  page = 1,
  limit = 20,
  search = '',
  fecha_desde = '',
  fecha_hasta = '',
  lote_id = '',
  estado = ''
} = {}) =>
  apiRequest('/reportes/pagos-bancarios', {
    method: 'GET',
    query: {
      page,
      limit,
      search,
      fecha_desde,
      fecha_hasta,
      lote_id,
      estado
    }
  })

export const obtenerDetalleLotePagos = loteId =>
  apiRequest(`/reportes/pagos-bancarios/lote/${loteId}`, {
    method: 'GET'
  })

