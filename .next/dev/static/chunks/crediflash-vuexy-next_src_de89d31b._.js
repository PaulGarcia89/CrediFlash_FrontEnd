(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/crediflash-vuexy-next/src/lib/auth/session.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getAnalista",
    ()=>getAnalista,
    "getToken",
    ()=>getToken,
    "isAuthenticated",
    ()=>isAuthenticated,
    "setSession",
    ()=>setSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var TOKEN_KEY = 'cf_token';
var USER_KEY = 'cf_analista';
var isBrowser = function() {
    return ("TURBOPACK compile-time value", "object") !== 'undefined';
};
var setSession = function(param) {
    var token = param.token, analista = param.analista;
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    if (token) {
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('accessToken', token);
        window.localStorage.setItem('authToken', token);
        document.cookie = "".concat(TOKEN_KEY, "=").concat(token, "; path=/; max-age=28800; samesite=lax");
    }
    if (analista) {
        window.localStorage.setItem(USER_KEY, JSON.stringify(analista));
    }
};
var getToken = function() {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    return window.localStorage.getItem(TOKEN_KEY) || window.localStorage.getItem('token') || window.localStorage.getItem('accessToken') || window.localStorage.getItem('authToken') || '';
};
var getAnalista = function() {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    var raw = window.localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
};
var clearSession = function() {
    if (!isBrowser()) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('authToken');
    document.cookie = "".concat(TOKEN_KEY, "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT");
};
var isAuthenticated = function() {
    return Boolean(getToken());
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/api/http.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/lib/auth/session.js [app-client] (ecmascript)");
;
;
;
;
;
var API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
var TOKEN_KEYS = [
    'cf_token',
    'accessToken',
    'token',
    'authToken'
];
var getToken = function() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = TOKEN_KEYS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            var value = window.localStorage.getItem(key);
            if (value) return value;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return null;
};
var buildUrl = function(path, query) {
    var normalizedBase = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
    var normalizedPath = path.startsWith('/') ? path : "/".concat(path);
    var url = new URL("".concat(normalizedBase).concat(normalizedPath));
    if (query) {
        Object.entries(query).forEach(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 2), key = _param[0], value = _param[1];
            if (value !== undefined && value !== null && value !== '') {
                url.searchParams.set(key, String(value));
            }
        });
    }
    return url.toString();
};
var apiRequest = function(path) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref_method = _ref.method, method = _ref_method === void 0 ? 'GET' : _ref_method, query = _ref.query, body = _ref.body, _ref_auth = _ref.auth, auth = _ref_auth === void 0 ? true : _ref_auth;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var headers, token, response, e, payload, message, error;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    headers = {
                        'Content-Type': 'application/json'
                    };
                    if (auth) {
                        token = getToken();
                        if (token) {
                            headers.Authorization = "Bearer ".concat(token);
                        }
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        fetch(buildUrl(path, query), {
                            method: method,
                            headers: headers,
                            body: body ? JSON.stringify(body) : undefined,
                            cache: 'no-store'
                        })
                    ];
                case 2:
                    response = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    throw new Error('No se pudo conectar con el backend en http://localhost:5001');
                case 4:
                    return [
                        4,
                        response.json().catch(function() {
                            return {};
                        })
                    ];
                case 5:
                    payload = _state.sent();
                    if (!response.ok) {
                        if (response.status === 401 || response.status === 403) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSession"])();
                        }
                        message = (payload === null || payload === void 0 ? void 0 : payload.message) || (payload === null || payload === void 0 ? void 0 : payload.error) || "HTTP ".concat(response.status);
                        error = new Error(message);
                        error.status = response.status;
                        error.payload = payload;
                        throw error;
                    }
                    return [
                        2,
                        payload
                    ];
            }
        });
    })();
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/api/cuotas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generarCuotasSemanales",
    ()=>generarCuotasSemanales,
    "listarPrestamos",
    ()=>listarPrestamos,
    "registrarPagoSemanal",
    ()=>registrarPagoSemanal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/api/http.js [app-client] (ecmascript)");
;
;
var listarPrestamos = function() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_page = _ref.page, page = _ref_page === void 0 ? 1 : _ref_page, _ref_limit = _ref.limit, limit = _ref_limit === void 0 ? 20 : _ref_limit, _ref_status = _ref.status, status = _ref_status === void 0 ? '' : _ref_status, _ref_cliente_id = _ref.cliente_id, cliente_id = _ref_cliente_id === void 0 ? '' : _ref_cliente_id, _ref_fecha_desde = _ref.fecha_desde, fecha_desde = _ref_fecha_desde === void 0 ? '' : _ref_fecha_desde, _ref_fecha_hasta = _ref.fecha_hasta, fecha_hasta = _ref_fecha_hasta === void 0 ? '' : _ref_fecha_hasta;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])('/prestamos', {
        method: 'GET',
        query: {
            page: page,
            limit: limit,
            status: status,
            cliente_id: cliente_id,
            fecha_desde: fecha_desde,
            fecha_hasta: fecha_hasta
        }
    });
};
var registrarPagoSemanal = function(prestamoId, monto_pago) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/prestamos/".concat(prestamoId, "/pago-semanal"), {
        method: 'POST',
        body: {
            monto_pago: monto_pago
        }
    });
};
var generarCuotasSemanales = function(prestamoId, payload) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/cuotas/prestamo/".concat(prestamoId, "/generar-semanales"), {
        method: 'POST',
        body: payload
    });
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CuotasModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Pagination/Pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$cuotas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/api/cuotas.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
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
;
var formatCurrency = function(value) {
    return new Intl.NumberFormat('es-DO', {
        style: 'currency',
        currency: 'DOP',
        maximumFractionDigits: 2
    }).format(Number(value || 0));
};
var extractRows = function(payload) {
    var _payload_data;
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload === null || payload === void 0 ? void 0 : payload.data)) return payload.data;
    if (Array.isArray(payload === null || payload === void 0 ? void 0 : payload.rows)) return payload.rows;
    if (Array.isArray(payload === null || payload === void 0 ? void 0 : (_payload_data = payload.data) === null || _payload_data === void 0 ? void 0 : _payload_data.rows)) return payload.data.rows;
    return [];
};
var extractPagination = function(payload) {
    var _payload_data;
    var source = (payload === null || payload === void 0 ? void 0 : payload.pagination) || (payload === null || payload === void 0 ? void 0 : (_payload_data = payload.data) === null || _payload_data === void 0 ? void 0 : _payload_data.pagination);
    return {
        page: Number((source === null || source === void 0 ? void 0 : source.page) || 1),
        pages: Number((source === null || source === void 0 ? void 0 : source.pages) || 1),
        total: Number((source === null || source === void 0 ? void 0 : source.total) || extractRows(payload).length)
    };
};
var getCuotasRestantes = function(row) {
    if (Number.isFinite(Number(row.num_semanas)) && Number.isFinite(Number(row.pagos_hechos))) {
        return Math.max(Number(row.num_semanas) - Number(row.pagos_hechos), 0);
    }
    if (Number.isFinite(Number(row.pagos_pendientes)) && Number.isFinite(Number(row.pagos_semanales)) && Number(row.pagos_semanales) > 0) {
        return Math.ceil(Number(row.pagos_pendientes) / Number(row.pagos_semanales));
    }
    return 0;
};
function CuotasModule() {
    var _this = this;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), prestamos = _useState[0], setPrestamos = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), loading = _useState1[0], setLoading = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), error = _useState2[0], setError = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), success = _useState3[0], setSuccess = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), searchCliente = _useState4[0], setSearchCliente = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1), 2), page = _useState5[0], setPage = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        page: 1,
        pages: 1,
        total: 0
    }), 2), pagination = _useState6[0], setPagination = _useState6[1];
    var _useState7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), pagoDialogOpen = _useState7[0], setPagoDialogOpen = _useState7[1];
    var _useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), selectedPrestamo = _useState8[0], setSelectedPrestamo = _useState8[1];
    var _useState9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), montoPago = _useState9[0], setMontoPago = _useState9[1];
    var _useState10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), processing = _useState10[0], setProcessing = _useState10[1];
    var loadPrestamos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CuotasModule.useCallback[loadPrestamos]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                "CuotasModule.useCallback[loadPrestamos]": function() {
                    var response, rows, normalizedQuery, err;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                        "CuotasModule.useCallback[loadPrestamos]": function(_state) {
                            switch(_state.label){
                                case 0:
                                    setLoading(true);
                                    setError('');
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        3,
                                        4,
                                        5
                                    ]);
                                    return [
                                        4,
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$cuotas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listarPrestamos"])({
                                            page: page,
                                            limit: 20,
                                            status: 'ACTIVO'
                                        })
                                    ];
                                case 2:
                                    response = _state.sent();
                                    rows = extractRows(response);
                                    if (searchCliente.trim()) {
                                        normalizedQuery = searchCliente.toLowerCase().trim();
                                        rows = rows.filter({
                                            "CuotasModule.useCallback[loadPrestamos]": function(row) {
                                                var label = String(row.nombre_completo || '').toLowerCase();
                                                return label.includes(normalizedQuery);
                                            }
                                        }["CuotasModule.useCallback[loadPrestamos]"]);
                                    }
                                    setPrestamos(rows);
                                    setPagination(extractPagination(response));
                                    return [
                                        3,
                                        5
                                    ];
                                case 3:
                                    err = _state.sent();
                                    setError(err.message || 'No se pudo cargar préstamos.');
                                    return [
                                        3,
                                        5
                                    ];
                                case 4:
                                    setLoading(false);
                                    return [
                                        7
                                    ];
                                case 5:
                                    return [
                                        2
                                    ];
                            }
                        }
                    }["CuotasModule.useCallback[loadPrestamos]"]);
                }
            }["CuotasModule.useCallback[loadPrestamos]"])();
        }
    }["CuotasModule.useCallback[loadPrestamos]"], [
        page,
        searchCliente
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CuotasModule.useEffect": function() {
            loadPrestamos();
        }
    }["CuotasModule.useEffect"], [
        loadPrestamos
    ]);
    var openPagoDialog = function(row) {
        setSelectedPrestamo(row);
        setMontoPago(String(row.pagos_semanales || ''));
        setPagoDialogOpen(true);
    };
    var closePagoDialog = function() {
        setPagoDialogOpen(false);
        setSelectedPrestamo(null);
        setMontoPago('');
    };
    var confirmarPago = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
            var parsedMonto, err;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!selectedPrestamo) return [
                            2
                        ];
                        parsedMonto = Number(montoPago);
                        if (!Number.isFinite(parsedMonto) || parsedMonto <= 0) {
                            setError('El monto_pago debe ser mayor que 0.');
                            return [
                                2
                            ];
                        }
                        setProcessing(true);
                        setError('');
                        setSuccess('');
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            4,
                            5,
                            6
                        ]);
                        return [
                            4,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$api$2f$cuotas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrarPagoSemanal"])(selectedPrestamo.id, parsedMonto)
                        ];
                    case 2:
                        _state.sent();
                        setSuccess("Pago semanal registrado para ".concat(selectedPrestamo.nombre_completo || selectedPrestamo.id, "."));
                        closePagoDialog();
                        return [
                            4,
                            loadPrestamos()
                        ];
                    case 3:
                        _state.sent();
                        return [
                            3,
                            6
                        ];
                    case 4:
                        err = _state.sent();
                        setError(err.message || 'No se pudo registrar la cuota.');
                        return [
                            3,
                            6
                        ];
                    case 5:
                        setProcessing(false);
                        return [
                            7
                        ];
                    case 6:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    var rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CuotasModule.useMemo[rows]": function() {
            return prestamos || [];
        }
    }["CuotasModule.useMemo[rows]"], [
        prestamos
    ]);
    var _selectedPrestamo_num_semanas;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "h4",
                                        children: "Registro de cuotas"
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "text.secondary",
                                        children: "Préstamos activos para registrar pago semanal."
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "small",
                                label: "Nombre de cliente",
                                placeholder: "Buscar por nombre y apellido",
                                value: searchCliente,
                                onChange: function(event) {
                                    setSearchCliente(event.target.value);
                                    setPage(1);
                                }
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                severity: "error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 176,
                                columnNumber: 22
                            }, this) : null,
                            success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                severity: "success",
                                children: success
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 177,
                                columnNumber: 24
                            }, this) : null,
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                alignItems: "center",
                                py: 8,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "small",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Cliente"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Monto total"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Pago semanal"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Semanas"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Cuotas restantes"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Estado"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    children: "Acciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: [
                                            rows.map(function(row) {
                                                var _row_num_semanas;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    hover: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: row.nombre_completo || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: formatCurrency(row.total_pagar)
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: formatCurrency(row.pagos_semanales)
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: (_row_num_semanas = row.num_semanas) !== null && _row_num_semanas !== void 0 ? _row_num_semanas : '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 202,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: getCuotasRestantes(row)
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 203,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: row.status || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                variant: "contained",
                                                                size: "small",
                                                                onClick: function() {
                                                                    return openPagoDialog(row);
                                                                },
                                                                children: "Registrar cuota"
                                                            }, void 0, false, {
                                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                                lineNumber: 206,
                                                                columnNumber: 25
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, row.id, true, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, _this);
                                            }),
                                            rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    colSpan: 7,
                                                    align: "center",
                                                    children: "Sin resultados"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                direction: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        color: "text.secondary",
                                        children: [
                                            "Total: ",
                                            pagination.total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        page: pagination.page,
                                        count: Math.max(pagination.pages, 1),
                                        onChange: function(_, value) {
                                            return setPage(value);
                                        },
                                        size: "small",
                                        color: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: pagoDialogOpen,
                onClose: closePagoDialog,
                fullWidth: true,
                maxWidth: "sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: "Confirmar pago semanal"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            spacing: 2,
                            mt: 1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        "Cliente: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (selectedPrestamo === null || selectedPrestamo === void 0 ? void 0 : selectedPrestamo.nombre_completo) || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                            lineNumber: 242,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        "Monto total: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: formatCurrency(selectedPrestamo === null || selectedPrestamo === void 0 ? void 0 : selectedPrestamo.total_pagar)
                                        }, void 0, false, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                            lineNumber: 245,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        "Número de semanas: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: (_selectedPrestamo_num_semanas = selectedPrestamo === null || selectedPrestamo === void 0 ? void 0 : selectedPrestamo.num_semanas) !== null && _selectedPrestamo_num_semanas !== void 0 ? _selectedPrestamo_num_semanas : '-'
                                        }, void 0, false, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                            lineNumber: 248,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        "Cuotas restantes: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: selectedPrestamo ? getCuotasRestantes(selectedPrestamo) : 0
                                        }, void 0, false, {
                                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    label: "Monto pago",
                                    type: "number",
                                    value: montoPago,
                                    onChange: function(event) {
                                        return setMontoPago(event.target.value);
                                    },
                                    inputProps: {
                                        min: 0,
                                        step: '0.01'
                                    },
                                    size: "small",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "text",
                                onClick: closePagoDialog,
                                disabled: processing,
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "contained",
                                color: "success",
                                onClick: confirmarPago,
                                disabled: processing,
                                children: processing ? 'Procesando...' : 'Confirmar'
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/views/modules/CuotasModule.jsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(CuotasModule, "NlKb1yAZJUu2YQ91XP8MDBnqTTw=");
_c = CuotasModule;
var _c;
__turbopack_context__.k.register(_c, "CuotasModule");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crediflash-vuexy-next_src_de89d31b._.js.map