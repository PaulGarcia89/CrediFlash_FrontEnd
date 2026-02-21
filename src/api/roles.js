import { apiRequest } from './http'

export const seedRolesPermisos = () =>
  apiRequest('/roles/seed', {
    method: 'POST'
  })

export const listarRoles = () =>
  apiRequest('/roles', {
    method: 'GET'
  })

export const obtenerCatalogoPermisos = () =>
  apiRequest('/roles/catalogo-permisos', {
    method: 'GET'
  })

export const obtenerPermisosRol = rolId =>
  apiRequest(`/roles/${rolId}/permisos`, {
    method: 'GET'
  })

export const crearRol = payload =>
  apiRequest('/roles', {
    method: 'POST',
    body: payload
  })

export const actualizarRol = (rolId, payload) =>
  apiRequest(`/roles/${rolId}`, {
    method: 'PUT',
    body: payload
  })

export const guardarPermisosRol = (rolId, payload) =>
  apiRequest(`/roles/${rolId}/permisos`, {
    method: 'PUT',
    body: payload
  })

export const asignarRolAnalista = (analistaId, payload) =>
  apiRequest(`/analistas/${analistaId}/rol-acceso`, {
    method: 'PUT',
    body: payload
  })

export const obtenerPermisosEfectivosAnalista = analistaId =>
  apiRequest(`/analistas/${analistaId}/permisos-efectivos`, {
    method: 'GET'
  })
