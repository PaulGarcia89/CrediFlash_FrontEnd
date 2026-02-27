import { apiRequest } from './http'

export const listarClientes = ({ page = 1, limit = 20, search = '', estado = 'ACTIVO' } = {}) =>
  apiRequest('/clientes', {
    method: 'GET',
    query: { page, limit, search, estado }
  })

export const crearCliente = payload =>
  apiRequest('/clientes', {
    method: 'POST',
    body: payload
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
