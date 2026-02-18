module.exports = [
"[project]/crediflash-vuexy-next/src/api/http.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/lib/auth/session.js [app-ssr] (ecmascript)");
;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
const TOKEN_KEYS = [
    'cf_token',
    'accessToken',
    'token',
    'authToken'
];
const getToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const key = undefined;
};
const buildUrl = (path, query)=>{
    const normalizedBase = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${normalizedBase}${normalizedPath}`);
    if (query) {
        Object.entries(query).forEach(([key, value])=>{
            if (value !== undefined && value !== null && value !== '') {
                url.searchParams.set(key, String(value));
            }
        });
    }
    return url.toString();
};
const apiRequest = async (path, { method = 'GET', query, body, auth = true } = {})=>{
    const headers = {};
    const isFormData = body instanceof FormData;
    if (!isFormData && body !== undefined) {
        headers['Content-Type'] = 'application/json';
    }
    if (auth) {
        const token = getToken();
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
    }
    let response;
    try {
        response = await fetch(buildUrl(path, query), {
            method,
            headers,
            body: isFormData ? body : body !== undefined ? JSON.stringify(body) : undefined,
            cache: 'no-store'
        });
    } catch  {
        throw new Error('No se pudo conectar con el backend en http://localhost:5001');
    }
    const payload = await response.json().catch(()=>({}));
    if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSession"])();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
        const message = payload?.message || payload?.error || `HTTP ${response.status}`;
        const error = new Error(message);
        error.status = response.status;
        error.payload = payload;
        throw error;
    }
    return payload;
};
}),
"[project]/crediflash-vuexy-next/src/api/clientes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actualizarCliente",
    ()=>actualizarCliente,
    "crearCliente",
    ()=>crearCliente,
    "inactivarCliente",
    ()=>inactivarCliente,
    "listarClientes",
    ()=>listarClientes,
    "obtenerCliente",
    ()=>obtenerCliente,
    "verHistorialPrestamosCliente",
    ()=>verHistorialPrestamosCliente
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/api/http.js [app-ssr] (ecmascript)");
;
const listarClientes = ({ page = 1, limit = 20, search = '', estado = 'ACTIVO' } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/clientes', {
        method: 'GET',
        query: {
            page,
            limit,
            search,
            estado
        }
    });
const crearCliente = (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/clientes', {
        method: 'POST',
        body: payload
    });
const obtenerCliente = (clienteId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/clientes/${clienteId}`, {
        method: 'GET'
    });
const actualizarCliente = (clienteId, payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/clientes/${clienteId}`, {
        method: 'PUT',
        body: payload
    });
const inactivarCliente = (clienteId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/clientes/${clienteId}`, {
        method: 'DELETE'
    });
const verHistorialPrestamosCliente = (clienteId, { page = 1, limit = 20 } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/clientes/${clienteId}/prestamos`, {
        method: 'GET',
        query: {
            page,
            limit
        }
    });
}),
"[project]/crediflash-vuexy-next/src/api/solicitudes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actualizarSolicitud",
    ()=>actualizarSolicitud,
    "aprobarSolicitud",
    ()=>aprobarSolicitud,
    "crearSolicitud",
    ()=>crearSolicitud,
    "ejecutarModeloAntiguo",
    ()=>ejecutarModeloAntiguo,
    "ejecutarModeloNuevo",
    ()=>ejecutarModeloNuevo,
    "ejecutarRatingClienteAntiguo",
    ()=>ejecutarRatingClienteAntiguo,
    "ejecutarRatingNuevoCliente",
    ()=>ejecutarRatingNuevoCliente,
    "listarSolicitudes",
    ()=>listarSolicitudes,
    "obtenerSolicitud",
    ()=>obtenerSolicitud,
    "rechazarSolicitud",
    ()=>rechazarSolicitud
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/api/http.js [app-ssr] (ecmascript)");
;
const listarSolicitudes = ({ page = 1, limit = 20, estado = '', search = '' } = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/solicitudes', {
        method: 'GET',
        query: {
            page,
            limit,
            estado,
            search
        }
    });
const crearSolicitud = (formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/solicitudes', {
        method: 'POST',
        body: formData
    });
const obtenerSolicitud = (solicitudId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/solicitudes/${solicitudId}`, {
        method: 'GET'
    });
const actualizarSolicitud = (solicitudId, payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/solicitudes/${solicitudId}`, {
        method: 'PUT',
        body: payload
    });
const aprobarSolicitud = (solicitudId, payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/prestamos/solicitud/${solicitudId}`, {
        method: 'POST',
        body: payload
    });
const rechazarSolicitud = (solicitudId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/solicitudes/${solicitudId}/rechazar-simple`, {
        method: 'POST'
    });
const ejecutarModeloNuevo = (solicitudId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/solicitudes/${solicitudId}/ejecutar-modelo-nuevo`, {
        method: 'POST'
    });
const ejecutarModeloAntiguo = (solicitudId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/solicitudes/${solicitudId}/ejecutar-modelo-antiguo`, {
        method: 'POST'
    });
const ejecutarRatingNuevoCliente = (payload)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])('/ratings/new-client', {
        method: 'POST',
        body: payload
    });
const ejecutarRatingClienteAntiguo = (nombreCompleto)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/ratings/client/${encodeURIComponent(nombreCompleto)}`, {
        method: 'GET'
    });
}),
"[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SolicitudFormModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Alert/Alert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Autocomplete/Autocomplete.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Card/Card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CardContent/CardContent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CardHeader/CardHeader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Chip/Chip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Grid/Grid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/TextField/TextField.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$clientes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/api/clientes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$solicitudes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/api/solicitudes.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MODELO_OPTIONS = [
    'CLIENTE_NUEVO',
    'CLIENTE_ANTIGUO'
];
const initialForm = {
    cliente_id: '',
    monto_solicitado: '',
    plazo_semanas: '',
    tasa_variable_pct: '',
    modelo_calificacion: 'CLIENTE_NUEVO',
    destino: ''
};
const extractRows = (payload)=>{
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.rows)) return payload.rows;
    if (Array.isArray(payload?.data?.rows)) return payload.data.rows;
    return [];
};
const extractPagination = (payload)=>{
    const source = payload?.pagination || payload?.data?.pagination;
    return {
        page: Number(source?.page || 1),
        pages: Number(source?.pages || 1),
        total: Number(source?.total || 0)
    };
};
const extractSolicitudId = (payload)=>payload?.data?.id || payload?.id || payload?.data?.solicitud_id || payload?.solicitud_id || '';
const clienteOptionLabel = (cliente)=>{
    const nombre = [
        cliente?.nombre,
        cliente?.apellido
    ].filter(Boolean).join(' ');
    return `${nombre || 'Sin nombre'} — ${cliente?.telefono || 'Sin teléfono'} — ${cliente?.email || 'Sin email'}`;
};
function SolicitudFormModule({ solicitudId = null }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Boolean(solicitudId));
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [clienteValue, setClienteValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clienteSearch, setClienteSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [clientePage, setClientePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [clientesOptions, setClientesOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [clientesLoading, setClientesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clientesPagination, setClientesPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        pages: 1,
        total: 0
    });
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [snackbar, setSnackbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        message: ''
    });
    const canLoadMoreClientes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>clientesPagination.page < clientesPagination.pages, [
        clientesPagination.page,
        clientesPagination.pages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!solicitudId) return;
        const fetchSolicitud = async ()=>{
            setLoading(true);
            setError('');
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$solicitudes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["obtenerSolicitud"])(solicitudId);
                const solicitud = response?.data || response;
                const cliente = solicitud?.cliente || null;
                const tasaPct = Number(solicitud?.tasa_variable || 0) * 100;
                setForm({
                    cliente_id: solicitud?.cliente_id || '',
                    monto_solicitado: solicitud?.monto_solicitado || '',
                    plazo_semanas: solicitud?.plazo_semanas || '',
                    tasa_variable_pct: Number.isFinite(tasaPct) ? String(tasaPct) : '',
                    modelo_calificacion: solicitud?.modelo_calificacion || 'CLIENTE_NUEVO',
                    destino: solicitud?.destino || ''
                });
                if (cliente?.id) {
                    setClienteValue(cliente);
                    setClientesOptions((previous)=>{
                        const exists = previous.some((item)=>item.id === cliente.id);
                        if (exists) return previous;
                        return [
                            cliente,
                            ...previous
                        ];
                    });
                }
            } catch (err) {
                setError(err.message || 'No se pudo cargar la solicitud.');
            } finally{
                setLoading(false);
            }
        };
        fetchSolicitud();
    }, [
        solicitudId
    ]);
    const loadClientesActivos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (pageValue, searchValue, append = false)=>{
        setClientesLoading(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$clientes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listarClientes"])({
                page: pageValue,
                limit: 100,
                search: searchValue,
                estado: 'ACTIVO'
            });
            const rows = extractRows(response);
            setClientesOptions((previous)=>{
                if (!append) return rows;
                const map = new Map(previous.map((item)=>[
                        item.id,
                        item
                    ]));
                rows.forEach((item)=>map.set(item.id, item));
                return Array.from(map.values());
            });
            setClientesPagination(extractPagination(response));
        } catch  {
            setSnackbar({
                open: true,
                message: 'No se pudieron cargar clientes activos.'
            });
        } finally{
            setClientesLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeout = setTimeout(()=>{
            setClientePage(1);
            loadClientesActivos(1, clienteSearch, false);
        }, 300);
        return ()=>clearTimeout(timeout);
    }, [
        clienteSearch,
        loadClientesActivos
    ]);
    const handleLoadMoreClientes = async ()=>{
        const nextPage = clientePage + 1;
        setClientePage(nextPage);
        await loadClientesActivos(nextPage, clienteSearch, true);
    };
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setForm((previous)=>({
                ...previous,
                [name]: value
            }));
    };
    const handleFiles = (event)=>{
        const selected = Array.from(event.target.files || []);
        if (selected.length > 3) {
            setSnackbar({
                open: true,
                message: 'Solo se permiten 3 documentos por solicitud.'
            });
            return;
        }
        const oversized = selected.find((file)=>file.size > 10 * 1024 * 1024);
        if (oversized) {
            setSnackbar({
                open: true,
                message: 'Cada documento debe pesar máximo 10MB.'
            });
            return;
        }
        setFiles(selected);
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setSaving(true);
        setError('');
        try {
            if (!form.cliente_id) {
                throw new Error('Debes seleccionar un cliente activo.');
            }
            const tasaVariable = Number(form.tasa_variable_pct || 0) / 100;
            if (tasaVariable < 0.01 || tasaVariable > 1) {
                throw new Error('La tasa variable (%) debe estar entre 1 y 100.');
            }
            if (solicitudId) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$solicitudes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actualizarSolicitud"])(solicitudId, {
                    cliente_id: form.cliente_id,
                    monto_solicitado: Number(form.monto_solicitado || 0),
                    plazo_semanas: Number(form.plazo_semanas || 0),
                    tasa_variable: tasaVariable,
                    modelo_calificacion: form.modelo_calificacion,
                    destino: form.destino
                });
            } else {
                const payload = new FormData();
                payload.append('cliente_id', form.cliente_id);
                payload.append('monto_solicitado', String(Number(form.monto_solicitado || 0)));
                payload.append('plazo_semanas', String(Number(form.plazo_semanas || 0)));
                payload.append('tasa_variable', String(tasaVariable));
                payload.append('modelo_calificacion', form.modelo_calificacion);
                payload.append('destino', form.destino);
                files.forEach((file)=>{
                    payload.append(`documentos+${form.cliente_id}`, file);
                });
                const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$solicitudes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["crearSolicitud"])(payload);
                const createdSolicitudId = extractSolicitudId(created);
                const params = new URLSearchParams();
                if (createdSolicitudId) params.set('focusSolicitudId', String(createdSolicitudId));
                if (form.cliente_id) params.set('focusClienteId', String(form.cliente_id));
                router.replace(`/solicitudes?${params.toString()}`);
                return;
            }
            router.replace('/solicitudes');
        } catch (err) {
            setError(err.message || 'No se pudo guardar la solicitud.');
        } finally{
            setSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                spacing: 3,
                component: "form",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        direction: {
                            xs: 'column',
                            md: 'row'
                        },
                        justifyContent: "space-between",
                        alignItems: {
                            xs: 'start',
                            md: 'center'
                        },
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "h4",
                                        sx: {
                                            mb: 0.5
                                        },
                                        children: solicitudId ? 'Editar solicitud' : 'Agregar una nueva solicitud'
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        color: "text.secondary",
                                        children: solicitudId ? 'Actualiza los datos de la solicitud pendiente.' : 'Registra una solicitud para el flujo de evaluación y aprobación.'
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                direction: "row",
                                spacing: 1.5,
                                flexWrap: "wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "tonal",
                                        color: "secondary",
                                        onClick: ()=>router.push('/solicitudes'),
                                        disabled: saving,
                                        children: "Descartar"
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "tonal",
                                        color: "primary",
                                        type: "button",
                                        disabled: saving || loading,
                                        onClick: ()=>window.localStorage.setItem('solicitud_draft', JSON.stringify(form)),
                                        children: "Guardar borrador"
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "contained",
                                        type: "submit",
                                        disabled: saving || loading,
                                        children: saving ? 'Guardando...' : solicitudId ? 'Actualizar solicitud' : 'Publicar solicitud'
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        severity: "error",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                        lineNumber: 301,
                        columnNumber: 18
                    }, this) : null,
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        severity: "info",
                        children: "Cargando solicitud..."
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                        lineNumber: 302,
                        columnNumber: 20
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                size: {
                                    xs: 12,
                                    lg: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    spacing: 3,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Información de la solicitud"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        container: true,
                                                        spacing: 2,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                        options: clientesOptions,
                                                                        value: clienteValue,
                                                                        loading: clientesLoading,
                                                                        disabled: Boolean(solicitudId),
                                                                        onChange: (_, value)=>{
                                                                            setClienteValue(value);
                                                                            setForm((previous)=>({
                                                                                    ...previous,
                                                                                    cliente_id: value?.id || ''
                                                                                }));
                                                                        },
                                                                        onInputChange: (_, value)=>{
                                                                            setClienteSearch(value);
                                                                        },
                                                                        getOptionLabel: (option)=>clienteOptionLabel(option),
                                                                        isOptionEqualToValue: (option, value)=>option.id === value.id,
                                                                        renderInput: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                ...params,
                                                                                label: "Clientes Activos",
                                                                                placeholder: "Buscar por teléfono o email",
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                                lineNumber: 328,
                                                                                columnNumber: 27
                                                                            }, void 0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    canLoadMoreClientes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        mt: 1,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            variant: "text",
                                                                            size: "small",
                                                                            onClick: handleLoadMoreClientes,
                                                                            disabled: clientesLoading,
                                                                            children: "Cargar más clientes"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                        lineNumber: 337,
                                                                        columnNumber: 25
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12,
                                                                    md: 4
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    label: "Monto solicitado",
                                                                    name: "monto_solicitado",
                                                                    type: "number",
                                                                    value: form.monto_solicitado,
                                                                    onChange: handleChange,
                                                                    fullWidth: true,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 350,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12,
                                                                    md: 4
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    label: "Plazo (semanas)",
                                                                    name: "plazo_semanas",
                                                                    type: "number",
                                                                    value: form.plazo_semanas,
                                                                    onChange: handleChange,
                                                                    fullWidth: true,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 361,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12,
                                                                    md: 4
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    label: "Tasa variable (%)",
                                                                    name: "tasa_variable_pct",
                                                                    type: "number",
                                                                    value: form.tasa_variable_pct,
                                                                    onChange: handleChange,
                                                                    inputProps: {
                                                                        min: 1,
                                                                        max: 100
                                                                    },
                                                                    fullWidth: true,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 372,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12,
                                                                    md: 6
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    select: true,
                                                                    label: "Modelo de calificación",
                                                                    name: "modelo_calificacion",
                                                                    value: form.modelo_calificacion,
                                                                    onChange: handleChange,
                                                                    fullWidth: true,
                                                                    required: true,
                                                                    children: MODELO_OPTIONS.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            value: model,
                                                                            children: model
                                                                        }, model, false, {
                                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                            lineNumber: 396,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 385,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12,
                                                                    md: 6
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    label: "Modelo de aprobación",
                                                                    value: "",
                                                                    fullWidth: true,
                                                                    disabled: true,
                                                                    helperText: "Se asigna en el flujo de revisión."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 402,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                size: {
                                                                    xs: 12
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    label: "Destino del crédito",
                                                                    name: "destino",
                                                                    value: form.destino,
                                                                    onChange: handleChange,
                                                                    fullWidth: true,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 412,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Documentos",
                                                    subheader: "Carga opcional de 0 a 3 archivos por solicitud."
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 428,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: !solicitudId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "outlined",
                                                                component: "label",
                                                                children: [
                                                                    "Cargar documentos (0 a 3)",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        hidden: true,
                                                                        type: "file",
                                                                        multiple: true,
                                                                        onChange: handleFiles
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 432,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "caption",
                                                                color: "text.secondary",
                                                                display: "block",
                                                                mt: 1,
                                                                children: files.length > 0 ? `${files.length} archivo(s) seleccionado(s)` : 'Sin documentos cargados'
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 436,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "caption",
                                                        color: "text.secondary",
                                                        children: "La edición de documentos no está habilitada en esta versión."
                                                    }, void 0, false, {
                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                        lineNumber: 441,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 429,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                size: {
                                    xs: 12,
                                    lg: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    spacing: 3,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Estado"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 453,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 454,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        spacing: 1.5,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                label: solicitudId ? 'Edición' : 'Borrador',
                                                                color: "primary",
                                                                variant: "tonal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 457,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "body2",
                                                                color: "text.secondary",
                                                                children: "El modelo de aprobación se ejecuta luego desde el listado de solicitudes."
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 458,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                        lineNumber: 456,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 455,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Organización"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 466,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 467,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        spacing: 4,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Canal",
                                                                value: "Registro manual",
                                                                fullWidth: true,
                                                                size: "small",
                                                                disabled: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 470,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Tipo",
                                                                value: "Solicitud de crédito",
                                                                fullWidth: true,
                                                                size: "small",
                                                                disabled: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                label: "Estado de publicación",
                                                                value: "Listo para publicar",
                                                                fullWidth: true,
                                                                size: "small",
                                                                disabled: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 472,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 468,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardHeader$2f$CardHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    title: "Acciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 484,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        spacing: 1.5,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "contained",
                                                                type: "submit",
                                                                disabled: saving || loading,
                                                                fullWidth: true,
                                                                children: saving ? 'Guardando...' : solicitudId ? 'Actualizar solicitud' : 'Publicar solicitud'
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 488,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "outlined",
                                                                onClick: ()=>router.push('/solicitudes'),
                                                                disabled: saving,
                                                                fullWidth: true,
                                                                children: "Cancelar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                                lineNumber: 491,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                        lineNumber: 487,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                                    lineNumber: 486,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: snackbar.open,
                autoHideDuration: 3000,
                onClose: ()=>setSnackbar({
                        open: false,
                        message: ''
                    }),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    severity: "warning",
                    variant: "filled",
                    children: snackbar.message
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/views/modules/SolicitudFormModule.jsx",
                lineNumber: 502,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=crediflash-vuexy-next_src_eb259e8d._.js.map