import { apiRequest } from './http'

export const obtenerAnalyticsDashboard = ({ fecha_desde = '', fecha_hasta = '' } = {}) =>
  apiRequest('/analytics/dashboard', {
    method: 'GET',
    query: { fecha_desde, fecha_hasta }
  })
