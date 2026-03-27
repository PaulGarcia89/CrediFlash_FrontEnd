import { apiRequest } from './http'

export const listarClientes = ({ page = 1, limit = 20, search = '', estado = 'ACTIVO' } = {}) =>
  apiRequest('/clientes', {
    method: 'GET',
    query: { page, limit, search, estado }
  })

export const listarClientesReferiblesPublico = ({ page = 1, limit = 200, search = '' } = {}) =>
  apiRequest('/public/clientes/referibles', {
    method: 'GET',
    query: { page, limit, search },
    auth: false
  })

export const crearCliente = payload =>
  apiRequest('/clientes', {
    method: 'POST',
    body: payload
  })

export const crearClientePublico = payload =>
  apiRequest('/public/clientes', {
    method: 'POST',
    body: payload,
    auth: false
  })

export const obtenerCliente = clienteId =>
  apiRequest(`/clientes/${clienteId}`, {
    method: 'GET'
  })

export const actualizarCliente = (clienteId, payload) =>
  apiRequest(`/clientes/${clienteId}`, {
    method: 'PUT',
    body: payload
  })

export const inactivarCliente = clienteId =>
  apiRequest(`/clientes/${clienteId}`, {
    method: 'DELETE'
  })

export const verHistorialPrestamosCliente = (clienteId, { page = 1, limit = 20 } = {}) =>
  apiRequest(`/clientes/${clienteId}/prestamos`, {
    method: 'GET',
    query: { page, limit }
  })

export const obtenerDocumentosCliente = clienteId =>
  apiRequest(`/clientes/${clienteId}/documentos`, {
    method: 'GET'
  })

export const enviarCodigoVerificacionEmailCliente = email =>
  apiRequest('/clientes/verificacion-email/enviar', {
    method: 'POST',
    body: { email }
  })

export const enviarCodigoVerificacionEmailClientePublico = email =>
  apiRequest('/public/clientes/verificacion-email/enviar', {
    method: 'POST',
    body: { email },
    auth: false
  })

export const verificarCodigoEmailCliente = (email, codigo) =>
  apiRequest('/clientes/verificacion-email/verificar', {
    method: 'POST',
    body: { email, codigo }
  })

export const verificarCodigoEmailClientePublico = (email, codigo) =>
  apiRequest('/public/clientes/verificacion-email/verificar', {
    method: 'POST',
    body: { email, codigo },
    auth: false
  })

export const obtenerScoreComportamientoCliente = clienteId =>
  apiRequest(`/clientes/${clienteId}/score-comportamiento`, {
    method: 'GET'
  })
