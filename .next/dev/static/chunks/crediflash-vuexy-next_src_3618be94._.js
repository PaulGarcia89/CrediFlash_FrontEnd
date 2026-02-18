(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/crediflash-vuexy-next/src/@menu/contexts/verticalNavContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerticalNavProvider",
    ()=>VerticalNavProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
var VerticalNavContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
var VerticalNavProvider = function(param) {
    var children = param.children;
    _s();
    // States
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), verticalNavState = _useState[0], setVerticalNavState = _useState[1];
    // Hooks
    var updateVerticalNavState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VerticalNavProvider.useCallback[updateVerticalNavState]": function(values) {
            setVerticalNavState({
                "VerticalNavProvider.useCallback[updateVerticalNavState]": function(prevState) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prevState, values), {
                        collapsing: values.isCollapsed === true,
                        expanding: values.isCollapsed === false
                    });
                }
            }["VerticalNavProvider.useCallback[updateVerticalNavState]"]);
        }
    }["VerticalNavProvider.useCallback[updateVerticalNavState]"], []);
    var collapseVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VerticalNavProvider.useCallback[collapseVerticalNav]": function(value) {
            setVerticalNavState({
                "VerticalNavProvider.useCallback[collapseVerticalNav]": function(prevState) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prevState), {
                        isHovered: value !== undefined && false,
                        isCollapsed: value !== undefined ? Boolean(value) : !Boolean(prevState === null || prevState === void 0 ? void 0 : prevState.isCollapsed),
                        collapsing: value === true,
                        expanding: value !== true
                    });
                }
            }["VerticalNavProvider.useCallback[collapseVerticalNav]"]);
        }
    }["VerticalNavProvider.useCallback[collapseVerticalNav]"], []);
    var hoverVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VerticalNavProvider.useCallback[hoverVerticalNav]": function(value) {
            setVerticalNavState({
                "VerticalNavProvider.useCallback[hoverVerticalNav]": function(prevState) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prevState), {
                        isHovered: value !== undefined ? Boolean(value) : !Boolean(prevState === null || prevState === void 0 ? void 0 : prevState.isHovered)
                    });
                }
            }["VerticalNavProvider.useCallback[hoverVerticalNav]"]);
        }
    }["VerticalNavProvider.useCallback[hoverVerticalNav]"], []);
    var toggleVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VerticalNavProvider.useCallback[toggleVerticalNav]": function(value) {
            setVerticalNavState({
                "VerticalNavProvider.useCallback[toggleVerticalNav]": function(prevState) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prevState), {
                        isToggled: value !== undefined ? Boolean(value) : !Boolean(prevState === null || prevState === void 0 ? void 0 : prevState.isToggled)
                    });
                }
            }["VerticalNavProvider.useCallback[toggleVerticalNav]"]);
        }
    }["VerticalNavProvider.useCallback[toggleVerticalNav]"], []);
    var verticalNavProviderValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VerticalNavProvider.useMemo[verticalNavProviderValue]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, verticalNavState), {
                updateVerticalNavState: updateVerticalNavState,
                collapseVerticalNav: collapseVerticalNav,
                hoverVerticalNav: hoverVerticalNav,
                toggleVerticalNav: toggleVerticalNav
            });
        }
    }["VerticalNavProvider.useMemo[verticalNavProviderValue]"], [
        verticalNavState,
        updateVerticalNavState,
        collapseVerticalNav,
        hoverVerticalNav,
        toggleVerticalNav
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VerticalNavContext.Provider, {
        value: verticalNavProviderValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/contexts/verticalNavContext.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, _this);
};
_s(VerticalNavProvider, "uqeXP0d3aqd88VpyBjwK4k8k5Ac=");
_c = VerticalNavProvider;
const __TURBOPACK__default__export__ = VerticalNavContext;
var _c;
__turbopack_context__.k.register(_c, "VerticalNavProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
/*
 * If you change the following items in the config object, you will not see any effect in the local development server
 * as these are stored in the cookie (cookie has the highest priority over the themeConfig):
 * 1. mode
 * 2. skin
 * 3. semiDark
 * 4. layout
 * 5. navbar.contentWidth
 * 6. contentWidth
 * 7. footer.contentWidth
 *
 * To see the effect of the above items, you can click on the reset button from the Customizer
 * which is on the top-right corner of the customizer besides the close button.
 * This will reset the cookie to the values provided in the config object below.
 *
 * Another way is to clear the cookie from the browser's Application/Storage tab and then reload the page.
 */ var themeConfig = {
    templateName: 'CrediFlash',
    homePageUrl: '/home',
    settingsCookieName: 'crediflash-mui-next',
    mode: 'system',
    skin: 'default',
    semiDark: false,
    layout: 'vertical',
    layoutPadding: 24,
    compactContentWidth: 1440,
    navbar: {
        type: 'fixed',
        contentWidth: 'compact',
        floating: true,
        detached: true,
        blur: true // true, false
    },
    contentWidth: 'compact',
    footer: {
        type: 'static',
        contentWidth: 'compact',
        detached: true //! true, false (This will not work in the Horizontal Layout)
    },
    disableRipple: false // true, false
};
const __TURBOPACK__default__export__ = themeConfig;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/configs/primaryColorConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
// Primary color config object
var primaryColorConfig = [
    {
        name: 'primary-1',
        light: '#8F85F3',
        main: '#7367F0',
        dark: '#675DD8'
    },
    {
        name: 'primary-2',
        light: '#4EB0B1',
        main: '#0D9394',
        dark: '#096B6C'
    },
    {
        name: 'primary-3',
        light: '#FFC25A',
        main: '#FFAB1D',
        dark: '#BA7D15'
    },
    {
        name: 'primary-4',
        light: '#F0718D',
        main: '#EB3D63',
        dark: '#AC2D48'
    },
    {
        name: 'primary-5',
        light: '#5CAFF1',
        main: '#2092EC',
        dark: '#176BAC'
    }
];
const __TURBOPACK__default__export__ = primaryColorConfig;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/hooks/useObjectCookie.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useObjectCookie",
    ()=>useObjectCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useCookie.js [app-client] (ecmascript) <export default as useCookie>");
;
;
var _s = __turbopack_context__.k.signature();
;
;
var useObjectCookie = function(key, fallback) {
    _s();
    // Hooks
    var _useCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])(key), 2), valStr = _useCookie[0], updateCookie = _useCookie[1];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useObjectCookie.useMemo[value]": function() {
            return valStr ? JSON.parse(valStr) : fallback;
        }
    }["useObjectCookie.useMemo[value]"], [
        valStr
    ]);
    var updateValue = function(newVal) {
        updateCookie(JSON.stringify(newVal));
    };
    return [
        value,
        updateValue
    ];
};
_s(useObjectCookie, "HTUxD4pOtPoaDF77HbXMxlPhmR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"]
    ];
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/contexts/settingsContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsContext",
    ()=>SettingsContext,
    "SettingsProvider",
    ()=>SettingsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/primaryColorConfig.js [app-client] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useObjectCookie.js [app-client] (ecmascript)");
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
var SettingsProvider = function(props) {
    _s();
    // Initial Settings
    var initialSettings = {
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mode,
        skin: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].skin,
        semiDark: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].semiDark,
        layout: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout,
        navbarContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navbar.contentWidth,
        contentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].contentWidth,
        footerContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.contentWidth,
        primaryColor: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][0].main
    };
    var updatedInitialSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, initialSettings), {
        mode: props.mode || __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mode
    });
    // Cookies
    var _useObjectCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].settingsCookieName, JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings), 2), settingsCookie = _useObjectCookie[0], updateSettingsCookie = _useObjectCookie[1];
    // State
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings), 2), _settingsState = _useState[0], _updateSettingsState = _useState[1];
    var updateSettings = function(settings, options) {
        var _ref = options || {}, _ref_updateCookie = _ref.updateCookie, updateCookie = _ref_updateCookie === void 0 ? true : _ref_updateCookie;
        _updateSettingsState(function(prev) {
            var newSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev, settings);
            // Update cookie if needed
            if (updateCookie) updateSettingsCookie(newSettings);
            return newSettings;
        });
    };
    /**
   * Updates the settings for page with the provided settings object.
   * Updated settings won't be saved to cookie hence will be reverted once navigating away from the page.
   *
   * @param settings - The partial settings object containing the properties to update.
   * @returns A function to reset the page settings.
   *
   * @example
   * useEffect(() => {
   *     return updatePageSettings({ theme: 'dark' });
   * }, []);
   */ var updatePageSettings = function(settings) {
        updateSettings(settings, {
            updateCookie: false
        });
        // Returns a function to reset the page settings
        return function() {
            return updateSettings(settingsCookie, {
                updateCookie: false
            });
        };
    };
    var resetSettings = function() {
        updateSettings(initialSettings);
    };
    var isSettingsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsProvider.useMemo[isSettingsChanged]": function() {
            return JSON.stringify(initialSettings) !== JSON.stringify(_settingsState);
        }
    }["SettingsProvider.useMemo[isSettingsChanged]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        _settingsState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            settings: _settingsState,
            updateSettings: updateSettings,
            isSettingsChanged: isSettingsChanged,
            resetSettings: resetSettings,
            updatePageSettings: updatePageSettings
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/contexts/settingsContext.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, _this);
};
_s(SettingsProvider, "rSX0DHkUkRc7iaaGoDBGwuDV+dU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useObjectCookie"]
    ];
});
_c = SettingsProvider;
var _c;
__turbopack_context__.k.register(_c, "SettingsProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettings",
    ()=>useSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/contexts/settingsContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
var useSettings = function() {
    _s();
    // Hooks
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsContext"]);
    if (!context) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
};
_s(useSettings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/components/theme/ModeChanger.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js [app-client] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useMedia.js [app-client] (ecmascript) <export default as useMedia>");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
var ModeChanger = function(param) {
    var systemMode = param.systemMode;
    _s();
    // Hooks
    var setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"])().setMode;
    var settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])().settings;
    var isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', systemMode === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModeChanger.useEffect": function() {
            if (settings.mode) {
                if (settings.mode === 'system') {
                    setMode(isDark ? 'dark' : 'light');
                } else {
                    setMode(settings.mode);
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ModeChanger.useEffect"], [
        settings.mode
    ]);
    return null;
};
_s(ModeChanger, "JbuVjyMegD3TzwHiGnRtC8+McQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"]
    ];
});
_c = ModeChanger;
const __TURBOPACK__default__export__ = ModeChanger;
var _c;
__turbopack_context__.k.register(_c, "ModeChanger");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/accordion.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var accordion = function(skin) {
    return {
        MuiAccordion: {
            defaultProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin === 'bordered' && {
                variant: 'outlined'
            }),
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        transition: theme.transitions.create([
                            'margin',
                            'border-radius',
                            'box-shadow'
                        ]),
                        '&:not(:last-child)': {
                            marginBlockEnd: theme.spacing(2)
                        },
                        borderRadius: 'var(--mui-shape-borderRadius)'
                    }, skin !== 'bordered' && {
                        boxShadow: 'var(--mui-customShadows-xs)'
                    }), {
                        '&:before': {
                            content: 'none'
                        },
                        '&.Mui-expanded': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin !== 'bordered' && {
                            boxShadow: 'var(--mui-customShadows-md)'
                        }), {
                            marginBlockStart: 0
                        })
                    });
                }
            }
        },
        MuiAccordionSummary: {
            defaultProps: {
                expandIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-chevron-right"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/accordion.jsx",
                    lineNumber: 32,
                    columnNumber: 19
                }, _this)
            },
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        minHeight: 46,
                        padding: theme.spacing(3, 5),
                        paddingInlineStart: theme.spacing(6),
                        gap: theme.spacing(2),
                        color: 'var(--mui-palette-text-primary)',
                        '&.Mui-expanded': {
                            minHeight: 46,
                            '& .MuiAccordionSummary-expandIconWrapper': {
                                transform: 'rotate(90deg)'
                            }
                        },
                        '& .MuiAccordionSummary-expandIconWrapper': {
                            transform: theme.direction === 'rtl' && 'rotate(180deg)'
                        },
                        '& .MuiTypography-root': {
                            color: 'inherit',
                            fontWeight: theme.typography.fontWeightMedium
                        }
                    };
                },
                content: {
                    margin: '0 !important'
                },
                expandIconWrapper: {
                    color: 'var(--mui-palette-text-primary)',
                    fontSize: '1.25rem',
                    '& i, & svg': {
                        fontSize: 'inherit'
                    }
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        paddingTop: theme.spacing(0),
                        '& .MuiTypography-root': {
                            color: 'var(--mui-palette-text-secondary)'
                        }
                    };
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = accordion;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
var alerts = {
    MuiAlert: {
        defaultProps: {
            iconMapping: {
                error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-alert-circle"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 8,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-alert-triangle"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 9,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-info-circle"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 10,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-circle-check"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 11,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            }
        },
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    padding: theme.spacing(3, 4),
                    gap: theme.spacing(4)
                }, theme.typography.body1), {
                    '&:not(:has(.MuiAlertTitle-root))': {
                        '& .MuiAlert-icon + .MuiAlert-message': {
                            alignSelf: 'center'
                        }
                    },
                    variants: [
                        {
                            props: {
                                variant: 'standard',
                                severity: 'error'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-error-main)',
                                    color: 'var(--mui-palette-error-contrastText)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'standard',
                                severity: 'warning'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-warning-main)',
                                    color: 'var(--mui-palette-warning-contrastText)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'standard',
                                severity: 'info'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-info-main)',
                                    color: 'var(--mui-palette-info-contrastText)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'standard',
                                severity: 'success'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-success-main)',
                                    color: 'var(--mui-palette-success-contrastText)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                severity: 'error'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-error-main)',
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-error-lightOpacity)',
                                    color: 'var(--mui-palette-error-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                severity: 'warning'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-warning-main)',
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
                                    color: 'var(--mui-palette-warning-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                severity: 'info'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-info-main)',
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-info-lightOpacity)',
                                    color: 'var(--mui-palette-info-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                severity: 'success'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-success-main)',
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                                    color: 'var(--mui-palette-success-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                severity: 'error'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-common-white)',
                                    color: 'var(--mui-palette-error-main)',
                                    boxShadow: 'var(--mui-customShadows-xs)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                severity: 'warning'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-common-white)',
                                    color: 'var(--mui-palette-warning-main)',
                                    boxShadow: 'var(--mui-customShadows-xs)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                severity: 'info'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-common-white)',
                                    color: 'var(--mui-palette-info-main)',
                                    boxShadow: 'var(--mui-customShadows-xs)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                severity: 'success'
                            },
                            style: {
                                '& .MuiAlert-icon': {
                                    backgroundColor: 'var(--mui-palette-common-white)',
                                    color: 'var(--mui-palette-success-main)',
                                    boxShadow: 'var(--mui-customShadows-xs)'
                                }
                            }
                        }
                    ]
                });
            },
            icon: {
                padding: 0,
                margin: 0,
                minInlineSize: 30,
                blockSize: 30,
                borderRadius: 'var(--mui-shape-borderRadius)',
                alignItems: 'center',
                justifyContent: 'center',
                '& i, & svg': {
                    fontSize: 'inherit'
                }
            },
            message: {
                padding: 0
            },
            action: {
                padding: 0,
                marginRight: 0
            }
        }
    },
    MuiAlertTitle: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    fontSize: theme.typography.h5.fontSize,
                    lineHeight: 1.33333,
                    marginTop: 0,
                    marginBottom: theme.spacing(1),
                    color: 'inherit'
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = alerts;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/autocomplete.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var autocomplete = function(skin) {
    return {
        MuiAutocomplete: {
            defaultProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin === 'bordered' && {
                slotProps: {
                    paper: {
                        variant: 'outlined'
                    }
                }
            }), {
                ChipProps: {
                    size: 'small'
                },
                popupIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-chevron-down"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/autocomplete.jsx",
                    lineNumber: 17,
                    columnNumber: 18
                }, _this)
            }),
            styleOverrides: {
                root: {
                    '& .MuiButtonBase-root.Mui-disabled i, & .MuiButtonBase-root.Mui-disabled svg': {
                        color: 'var(--mui-palette-action-disabled)'
                    },
                    '& .MuiOutlinedInput-input': {
                        height: '1.4375em'
                    }
                },
                input: {
                    '& + .MuiAutocomplete-endAdornment': {
                        right: '1rem',
                        '& i, & svg': {
                            fontSize: '1.25rem',
                            color: 'var(--mui-palette-text-primary)'
                        },
                        '& .MuiAutocomplete-clearIndicator': {
                            padding: 2
                        }
                    },
                    '&.MuiInputBase-inputSizeSmall + .MuiAutocomplete-endAdornment': {
                        '& i, & svg': {
                            fontSize: '1rem'
                        }
                    }
                },
                paper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin !== 'bordered' && {
                    boxShadow: 'var(--mui-customShadows-lg)',
                    marginBlockStart: '0.125rem'
                }),
                listbox: function(param) {
                    var theme = param.theme;
                    return {
                        '& .MuiAutocomplete-option': {
                            paddingBlock: theme.spacing(2),
                            marginInline: theme.spacing(2),
                            marginBlock: theme.spacing(0.5),
                            borderRadius: 'var(--mui-shape-borderRadius)',
                            '&[aria-selected="true"]': {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)',
                                '&.Mui-focused, &.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                                }
                            }
                        },
                        '& .MuiAutocomplete-option.Mui-focusVisible': {
                            backgroundColor: 'var(--mui-palette-action-hover)'
                        }
                    };
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = autocomplete;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/avatar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var avatar = {
    MuiAvatarGroup: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    justifyContent: 'flex-end',
                    '& .MuiAvatar-root': {
                        borderColor: 'var(--mui-palette-background-paper)'
                    },
                    '&.pull-up .MuiAvatar-root': {
                        cursor: 'pointer',
                        transition: theme.transitions.create([
                            'box-shadow',
                            'transform'
                        ], {
                            easing: 'ease',
                            duration: theme.transitions.duration.shorter
                        }),
                        '&:hover': {
                            zIndex: 2,
                            boxShadow: 'var(--mui-customShadows-md)',
                            transform: 'translateY(-5px)'
                        }
                    }
                };
            }
        }
    },
    MuiAvatar: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    color: 'var(--mui-palette-text-primary)',
                    fontSize: theme.typography.body1.fontSize,
                    lineHeight: 1.2
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = avatar;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/backdrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var backdrop = {
    MuiBackdrop: {
        styleOverrides: {
            root: {
                '&:not(.MuiBackdrop-invisible)': {
                    backgroundColor: 'var(--backdrop-color)'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = backdrop;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/badges.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var badges = {
    MuiBadge: {
        styleOverrides: {
            standard: function(param) {
                var theme = param.theme;
                return {
                    height: 24,
                    minWidth: 24,
                    borderRadius: 20,
                    fontSize: theme.typography.subtitle2.fontSize,
                    lineHeight: 1.23077,
                    padding: theme.spacing(1, 2)
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = badges;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/breadcrumbs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var breadcrumbs = {
    MuiBreadcrumbs: {
        styleOverrides: {
            root: {
                '& svg, & i': {
                    fontSize: '1.25rem'
                },
                '& a': {
                    textDecoration: 'none',
                    color: 'var(--mui-palette-primary-main)'
                }
            },
            li: function(param) {
                var theme = param.theme;
                return {
                    lineHeight: theme.typography.body1.lineHeight,
                    '& > *:not(a)': {
                        color: 'var(--mui-palette-text-primary)'
                    }
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = breadcrumbs;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-client] (ecmascript)");
;
;
;
;
var iconStyles = function(size) {
    return {
        '& > *:nth-of-type(1)': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, size === 'small' ? {
            fontSize: '14px'
        } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, size === 'medium' ? {
            fontSize: '16px'
        } : {
            fontSize: '20px'
        }))
    };
};
var button = {
    MuiButtonBase: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple
        }
    },
    MuiButton: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    '&.Mui-disabled': {
                        opacity: 0.45
                    },
                    transition: theme.transitions.create('all', {
                        duration: theme.transitions.duration.short
                    }),
                    '&:not(.Mui-disabled):active': {
                        transform: 'scale(0.98)'
                    }
                }, ownerState.variant === 'text' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' && {
                    padding: theme.spacing(1.5, 2.25)
                }, ownerState.size === 'medium' && {
                    padding: theme.spacing(2, 3)
                }, ownerState.size === 'large' && {
                    padding: theme.spacing(2.75, 4)
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.variant === 'outlined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' && {
                    padding: theme.spacing(1.25, 3.25)
                }, ownerState.size === 'medium' && {
                    padding: theme.spacing(1.75, 4.75)
                }, ownerState.size === 'large' && {
                    padding: theme.spacing(2.5, 6.25)
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' && {
                    padding: theme.spacing(1.5, 3.5)
                }, ownerState.size === 'medium' && {
                    padding: theme.spacing(2, 5)
                }, ownerState.size === 'large' && {
                    padding: theme.spacing(2.75, 6.5)
                }))), {
                    variants: [
                        {
                            props: {
                                variant: 'text',
                                color: 'primary'
                            },
                            style: {
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-primary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'text',
                                color: 'secondary'
                            },
                            style: {
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-secondary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'text',
                                color: 'error'
                            },
                            style: {
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-error-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'text',
                                color: 'warning'
                            },
                            style: {
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-warning-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'text',
                                color: 'info'
                            },
                            style: {
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-info-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'text',
                                color: 'success'
                            },
                            style: {
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-success-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                color: 'primary'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-primary-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-primary-main)',
                                    borderColor: 'var(--mui-palette-primary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                color: 'secondary'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-secondary-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-secondary-main)',
                                    borderColor: 'var(--mui-palette-secondary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                color: 'error'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-error-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-error-main)',
                                    borderColor: 'var(--mui-palette-error-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                color: 'warning'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-warning-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-warning-main)',
                                    borderColor: 'var(--mui-palette-warning-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                color: 'info'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-info-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-info-main)',
                                    borderColor: 'var(--mui-palette-info-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'outlined',
                                color: 'success'
                            },
                            style: {
                                borderColor: 'var(--mui-palette-success-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-success-main)',
                                    borderColor: 'var(--mui-palette-success-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'contained',
                                color: 'primary'
                            },
                            style: {
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-primary-sm)'
                                },
                                '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-primary-dark)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-primary-contrastText)',
                                    backgroundColor: 'var(--mui-palette-primary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'contained',
                                color: 'secondary'
                            },
                            style: {
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-secondary-sm)'
                                },
                                '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-secondary-dark)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-secondary-contrastText)',
                                    backgroundColor: 'var(--mui-palette-secondary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'contained',
                                color: 'error'
                            },
                            style: {
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-error-sm)'
                                },
                                '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-error-dark)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-error-contrastText)',
                                    backgroundColor: 'var(--mui-palette-error-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'contained',
                                color: 'warning'
                            },
                            style: {
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-warning-sm)'
                                },
                                '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-warning-dark)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-warning-contrastText)',
                                    backgroundColor: 'var(--mui-palette-warning-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'contained',
                                color: 'info'
                            },
                            style: {
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-info-sm)'
                                },
                                '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-info-dark)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-info-contrastText)',
                                    backgroundColor: 'var(--mui-palette-info-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'contained',
                                color: 'success'
                            },
                            style: {
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-success-sm)'
                                },
                                '&:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-success-dark)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-success-contrastText)',
                                    backgroundColor: 'var(--mui-palette-success-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'primary'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-primary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'secondary'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
                                color: 'var(--mui-palette-secondary-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-secondary-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'error'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-error-lightOpacity)',
                                color: 'var(--mui-palette-error-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-error-mainOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-error-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'warning'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
                                color: 'var(--mui-palette-warning-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-warning-mainOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-warning-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'info'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-info-lightOpacity)',
                                color: 'var(--mui-palette-info-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-info-mainOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-info-main)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'success'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                                color: 'var(--mui-palette-success-main)',
                                '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active, &.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                    backgroundColor: 'var(--mui-palette-success-mainOpacity)'
                                },
                                '&.Mui-disabled': {
                                    color: 'var(--mui-palette-success-main)'
                                }
                            }
                        }
                    ]
                });
            },
            sizeSmall: function(param) {
                var theme = param.theme;
                return {
                    lineHeight: 1.38462,
                    fontSize: theme.typography.body2.fontSize,
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                };
            },
            sizeLarge: {
                fontSize: '1.0625rem',
                lineHeight: 1.529412,
                borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
            },
            startIcon: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                    marginInlineEnd: theme.spacing(1.5)
                } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'medium' ? {
                    marginInlineEnd: theme.spacing(2)
                } : {
                    marginInlineEnd: theme.spacing(2.5)
                }), iconStyles(ownerState.size));
            },
            endIcon: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                    marginInlineStart: theme.spacing(1.5)
                } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'medium' ? {
                    marginInlineStart: theme.spacing(2)
                } : {
                    marginInlineStart: theme.spacing(2.5)
                }), iconStyles(ownerState.size));
            }
        }
    }
};
const __TURBOPACK__default__export__ = button;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/button-group.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-client] (ecmascript)");
;
;
var buttonGroup = {
    MuiButtonGroup: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple
        },
        styleOverrides: {
            root: {
                variants: [
                    {
                        props: {
                            variant: 'text',
                            color: 'primary'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-primary-main)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'secondary'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-secondary-main)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'error'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-error-main)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'warning'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-warning-main)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'info'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-info-main)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'success'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-success-main)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained',
                            color: 'primary'
                        },
                        style: {
                            '&:not(.Mui-disabled)': {
                                boxShadow: 'var(--mui-customShadows-primary-sm)'
                            },
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-primary-dark)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained',
                            color: 'secondary'
                        },
                        style: {
                            '&:not(.Mui-disabled)': {
                                boxShadow: 'var(--mui-customShadows-secondary-sm)'
                            },
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-secondary-dark)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained',
                            color: 'error'
                        },
                        style: {
                            '&:not(.Mui-disabled)': {
                                boxShadow: 'var(--mui-customShadows-error-sm)'
                            },
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-error-dark)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained',
                            color: 'warning'
                        },
                        style: {
                            '&:not(.Mui-disabled)': {
                                boxShadow: 'var(--mui-customShadows-warning-sm)'
                            },
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-warning-dark)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained',
                            color: 'info'
                        },
                        style: {
                            '&:not(.Mui-disabled)': {
                                boxShadow: 'var(--mui-customShadows-info-sm)'
                            },
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-info-dark)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'contained',
                            color: 'success'
                        },
                        style: {
                            '&:not(.Mui-disabled)': {
                                boxShadow: 'var(--mui-customShadows-success-sm)'
                            },
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderColor: 'var(--mui-palette-success-dark)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'primary',
                            orientation: 'horizontal'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderRight: '1px solid var(--mui-palette-primary-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'secondary',
                            orientation: 'horizontal'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderRight: '1px solid var(--mui-palette-secondary-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'error',
                            orientation: 'horizontal'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderRight: '1px solid var(--mui-palette-error-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'warning',
                            orientation: 'horizontal'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderRight: '1px solid var(--mui-palette-warning-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'info',
                            orientation: 'horizontal'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderRight: '1px solid var(--mui-palette-info-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'success',
                            orientation: 'horizontal'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderRight: '1px solid var(--mui-palette-success-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'primary',
                            orientation: 'vertical'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderBottom: '1px solid var(--mui-palette-primary-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'secondary',
                            orientation: 'vertical'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderBottom: '1px solid var(--mui-palette-secondary-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'error',
                            orientation: 'vertical'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderBottom: '1px solid var(--mui-palette-error-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'warning',
                            orientation: 'vertical'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderBottom: '1px solid var(--mui-palette-warning-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'info',
                            orientation: 'vertical'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderBottom: '1px solid var(--mui-palette-info-darkOpacity)'
                                }
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'success',
                            orientation: 'vertical'
                        },
                        style: {
                            '& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton': {
                                '&, &.Mui-disabled': {
                                    borderBottom: '1px solid var(--mui-palette-success-darkOpacity)'
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
};
const __TURBOPACK__default__export__ = buttonGroup;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var card = function(skin) {
    return {
        MuiCard: {
            defaultProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin === 'bordered' && {
                variant: 'outlined'
            }),
            styleOverrides: {
                root: function(param) {
                    var ownerState = param.ownerState;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.variant !== 'outlined' && {
                        boxShadow: 'var(--mui-customShadows-md)'
                    });
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        '& + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    };
                },
                subheader: function(param) {
                    var theme = param.theme;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.typography.subtitle1), {
                        color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                    });
                },
                action: function(param) {
                    var theme = param.theme;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.typography.body1), {
                        color: 'var(--mui-palette-text-disabled)',
                        marginBlock: 0,
                        marginInlineEnd: 0,
                        '& .MuiIconButton-root': {
                            color: 'inherit'
                        }
                    });
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        color: 'var(--mui-palette-text-secondary)',
                        '&:last-child': {
                            paddingBlockEnd: theme.spacing(6)
                        },
                        '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    };
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        '& .MuiButtonBase-root:not(:first-of-type)': {
                            marginInlineStart: theme.spacing(4)
                        },
                        '&:where(.card-actions-dense)': {
                            padding: theme.spacing(3),
                            '& .MuiButton-text': {
                                paddingInline: theme.spacing(3)
                            }
                        },
                        '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardHeader-root:first-child, & + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    };
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = card;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var Icon = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z",
            stroke: "var(--mui-palette-text-disabled)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, _this);
};
_c = Icon;
var IndeterminateIcon = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 12h7",
                stroke: "var(--mui-palette-common-white)",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, _this);
};
_c1 = IndeterminateIcon;
var CheckedIcon = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m8.5 12 2.5 2.5 5-5",
                stroke: "var(--mui-palette-common-white)",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, _this);
};
_c2 = CheckedIcon;
var checkbox = {
    MuiCheckbox: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            indeterminateIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IndeterminateIcon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 50,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckedIcon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 51,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        },
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                    padding: theme.spacing(1),
                    '& svg': {
                        fontSize: '1.25rem'
                    }
                } : {
                    padding: theme.spacing(1.5),
                    '& svg': {
                        fontSize: '1.5rem'
                    }
                }), {
                    '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) svg, &:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) i': {
                        color: 'var(--mui-palette-text-disabled)'
                    },
                    '&.Mui-checked:not(.Mui-disabled) svg, &.MuiCheckbox-indeterminate:not(.Mui-disabled) svg': {
                        filter: "drop-shadow(var(--mui-customShadows-".concat(ownerState.color, "-sm))")
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        '&:not(.Mui-checked)': {
                            color: 'var(--mui-palette-text-disabled)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorPrimary': {
                            color: 'var(--mui-palette-primary-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorSecondary': {
                            color: 'var(--mui-palette-secondary-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorError': {
                            color: 'var(--mui-palette-error-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorWarning': {
                            color: 'var(--mui-palette-warning-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorInfo': {
                            color: 'var(--mui-palette-info-main)'
                        },
                        '&.Mui-checked.MuiCheckbox-colorSuccess': {
                            color: 'var(--mui-palette-success-main)'
                        }
                    }
                });
            }
        }
    }
};
const __TURBOPACK__default__export__ = checkbox;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "IndeterminateIcon");
__turbopack_context__.k.register(_c2, "CheckedIcon");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/chip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var chip = {
    MuiChip: {
        styleOverrides: {
            root: function(param) {
                var ownerState = param.ownerState, theme = param.theme;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.typography.body2), {
                    fontWeight: theme.typography.fontWeightMedium,
                    '&.MuiChip-outlined:not(.MuiChip-colorDefault)': {
                        borderColor: "var(--mui-palette-".concat(ownerState.color, "-main)")
                    }
                }), ownerState.size === 'small' ? {
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                } : {
                    borderRadius: 'var(--mui-shape-borderRadius)'
                }), {
                    '& .MuiChip-deleteIcon': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                        fontSize: '1rem',
                        marginInlineEnd: theme.spacing(1),
                        marginInlineStart: theme.spacing(-2)
                    } : {
                        fontSize: '1.25rem',
                        marginInlineEnd: theme.spacing(1.5),
                        marginInlineStart: theme.spacing(-2)
                    }),
                    '& .MuiChip-avatar, & .MuiChip-icon': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        '& i, & svg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                            fontSize: 13
                        } : {
                            fontSize: 15
                        })
                    }, ownerState.size === 'small' ? {
                        blockSize: 16,
                        inlineSize: 16,
                        marginInlineStart: theme.spacing(1),
                        marginInlineEnd: theme.spacing(-1.5)
                    } : {
                        blockSize: 20,
                        inlineSize: 20,
                        marginInlineStart: theme.spacing(1.5),
                        marginInlineEnd: theme.spacing(-2)
                    }),
                    '&.Mui-disabled': {
                        opacity: 0.45
                    },
                    variants: [
                        {
                            props: {
                                variant: 'tonal',
                                color: 'primary'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)',
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: 'rgb(var(--mui-palette-primary-mainChannel) / 0.7)',
                                    '&:hover': {
                                        color: 'var(--mui-palette-primary-main)'
                                    }
                                },
                                '&.MuiChip-clickable:hover': {
                                    backgroundColor: 'var(--mui-palette-primary-main)',
                                    color: 'var(--mui-palette-common-white)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'secondary'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
                                color: 'var(--mui-palette-secondary-main)',
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.7)',
                                    '&:hover': {
                                        color: 'var(--mui-palette-secondary-main)'
                                    }
                                },
                                '&.MuiChip-clickable:hover': {
                                    backgroundColor: 'var(--mui-palette-secondary-main)',
                                    color: 'var(--mui-palette-common-white)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'error'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-error-lightOpacity)',
                                color: 'var(--mui-palette-error-main)',
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-error-mainOpacity)'
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: 'rgb(var(--mui-palette-error-mainChannel) / 0.7)',
                                    '&:hover': {
                                        color: 'var(--mui-palette-error-main)'
                                    }
                                },
                                '&.MuiChip-clickable:hover': {
                                    backgroundColor: 'var(--mui-palette-error-main)',
                                    color: 'var(--mui-palette-common-white)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'warning'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
                                color: 'var(--mui-palette-warning-main)',
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-warning-mainOpacity)'
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: 'rgb(var(--mui-palette-warning-mainChannel) / 0.7)',
                                    '&:hover': {
                                        color: 'var(--mui-palette-warning-main)'
                                    }
                                },
                                '&.MuiChip-clickable:hover': {
                                    backgroundColor: 'var(--mui-palette-warning-main)',
                                    color: 'var(--mui-palette-common-white)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'info'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-info-lightOpacity)',
                                color: 'var(--mui-palette-info-main)',
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-info-mainOpacity)'
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: 'rgb(var(--mui-palette-info-mainChannel) / 0.7)',
                                    '&:hover': {
                                        color: 'var(--mui-palette-info-main)'
                                    }
                                },
                                '&.MuiChip-clickable:hover': {
                                    backgroundColor: 'var(--mui-palette-info-main)',
                                    color: 'var(--mui-palette-common-white)'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'success'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                                color: 'var(--mui-palette-success-main)',
                                '&.Mui-focusVisible': {
                                    backgroundColor: 'var(--mui-palette-success-mainOpacity)'
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: 'rgb(var(--mui-palette-success-mainChannel) / 0.7)',
                                    '&:hover': {
                                        color: 'var(--mui-palette-success-main)'
                                    }
                                },
                                '&.MuiChip-clickable:hover': {
                                    backgroundColor: 'var(--mui-palette-success-main)',
                                    color: 'var(--mui-palette-common-white)'
                                }
                            }
                        }
                    ]
                });
            },
            label: function(param) {
                var ownerState = param.ownerState, theme = param.theme;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                    paddingInline: theme.spacing(2.5),
                    paddingBlock: theme.spacing(0.5)
                } : {
                    paddingInline: theme.spacing(3)
                });
            },
            iconMedium: {
                fontSize: '1.25rem'
            },
            iconSmall: {
                fontSize: '1rem'
            }
        }
    }
};
const __TURBOPACK__default__export__ = chip;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/dialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
;
var dialog = function(skin) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: function(param) {
                    var theme = param.theme;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                    }, skin !== 'bordered' ? {
                        boxShadow: 'var(--mui-customShadows-lg)'
                    } : {
                        boxShadow: 'none'
                    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.breakpoints.down('sm'), {
                        '&:not(.MuiDialog-paperFullScreen)': {
                            margin: theme.spacing(6)
                        }
                    }));
                },
                paperFullScreen: {
                    borderRadius: 0
                }
            }
        },
        MuiDialogTitle: {
            defaultProps: {
                variant: 'h5'
            },
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        '& + .MuiDialogActions-root': {
                            paddingTop: 0
                        }
                    };
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        '& + .MuiDialogContent-root, & + .MuiDialogActions-root': {
                            paddingTop: 0
                        }
                    };
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        padding: theme.spacing(6),
                        '& .MuiButtonBase-root:not(:first-of-type)': {
                            marginInlineStart: theme.spacing(4)
                        },
                        '&:where(.dialog-actions-dense)': {
                            padding: theme.spacing(3),
                            '& .MuiButton-text': {
                                paddingInline: theme.spacing(3)
                            }
                        }
                    };
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = dialog;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/drawer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
var drawer = function(skin) {
    return {
        MuiDrawer: {
            defaultProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin === 'bordered' && {
                PaperProps: {
                    elevation: 0
                }
            }),
            styleOverrides: {
                paper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin !== 'bordered' && {
                    boxShadow: 'var(--mui-customShadows-lg)'
                })
            }
        }
    };
};
const __TURBOPACK__default__export__ = drawer;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/fab.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var fab = {
    MuiFab: {
        styleOverrides: {
            root: {
                variants: [
                    {
                        props: {
                            color: 'default'
                        },
                        style: {
                            color: 'rgb(var(--mui-mainColorChannels-light) / 0.9)',
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-grey-A100)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'primary'
                        },
                        style: {
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-primary-dark)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'secondary'
                        },
                        style: {
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-secondary-dark)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'error'
                        },
                        style: {
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-error-dark)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'warning'
                        },
                        style: {
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-warning-dark)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'info'
                        },
                        style: {
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-info-dark)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'success'
                        },
                        style: {
                            '&.Mui-focusVisible:not(:has(span.MuiTouchRipple-root))': {
                                backgroundColor: 'var(--mui-palette-success-dark)'
                            }
                        }
                    }
                ]
            }
        }
    }
};
const __TURBOPACK__default__export__ = fab;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/form-control-label.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var formControlLabel = {
    MuiFormControlLabel: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    marginInlineStart: theme.spacing(-2)
                };
            },
            label: {
                '&, &.Mui-disabled': {
                    color: 'var(--mui-palette-text-primary)'
                },
                '&.Mui-disabled': {
                    opacity: 0.45
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = formControlLabel;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/icon-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-client] (ecmascript)");
;
;
;
;
var iconButton = {
    MuiIconButton: {
        styleOverrides: {
            root: {
                '& .MuiSvgIcon-root, & i, & svg': {
                    fontSize: 'inherit'
                },
                variants: [
                    {
                        props: {
                            color: 'default'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-action-active)'
                            }
                        })
                    },
                    {
                        props: {
                            color: 'primary'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-primary-main)'
                            }
                        })
                    },
                    {
                        props: {
                            color: 'secondary'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-secondary-main)'
                            }
                        })
                    },
                    {
                        props: {
                            color: 'error'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-error-main)'
                            }
                        })
                    },
                    {
                        props: {
                            color: 'warning'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-warning-main)'
                            }
                        })
                    },
                    {
                        props: {
                            color: 'info'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-info-main)'
                            }
                        })
                    },
                    {
                        props: {
                            color: 'success'
                        },
                        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                            }
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                            '&.Mui-focusVisible:not(.Mui-disabled)': {
                                backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                            }
                        }), {
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-success-main)'
                            }
                        })
                    }
                ]
            },
            sizeSmall: function(param) {
                var theme = param.theme;
                return {
                    padding: theme.spacing(1.25),
                    fontSize: '1.25rem'
                };
            },
            sizeMedium: function(param) {
                var theme = param.theme;
                return {
                    padding: theme.spacing(2),
                    fontSize: '1.375rem'
                };
            },
            sizeLarge: function(param) {
                var theme = param.theme;
                return {
                    padding: theme.spacing(3),
                    fontSize: '1.5rem'
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = iconButton;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/input.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var input = {
    MuiFormControl: {
        styleOverrides: {
            root: {
                '&:has(.MuiRadio-root) .MuiFormHelperText-root, &:has(.MuiCheckbox-root) .MuiFormHelperText-root, &:has(.MuiSwitch-root) .MuiFormHelperText-root': {
                    marginInline: 0
                }
            }
        }
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                lineHeight: 1.6,
                '&.MuiInput-underline': {
                    '&:before': {
                        borderColor: 'var(--mui-palette-customColors-inputBorder)'
                    },
                    '&:not(.Mui-disabled, .Mui-error):hover:before': {
                        borderColor: 'var(--mui-palette-action-active)'
                    }
                },
                '&.Mui-disabled .MuiInputAdornment-root, &.Mui-disabled .MuiInputAdornment-root > *': {
                    color: 'var(--mui-palette-action-disabled)'
                }
            }
        }
    },
    MuiFilledInput: {
        styleOverrides: {
            root: {
                borderStartStartRadius: 4,
                borderStartEndRadius: 4,
                '&:before': {
                    borderBottom: '1px solid var(--mui-palette-text-secondary)'
                },
                '&:hover:before': {
                    borderBottom: '1px solid var(--mui-palette-text-primary)'
                },
                '&.Mui-disabled:before': {
                    borderBottomStyle: 'solid',
                    opacity: 0.38
                }
            }
        }
    },
    MuiInputLabel: {
        styleOverrides: {
            shrink: function(param) {
                var ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.variant === 'outlined' && {
                    transform: 'translate(14px, -8px) scale(0.867)'
                }, ownerState.variant === 'filled' && {
                    transform: "translate(12px, ".concat(ownerState.size === 'small' ? 4 : 7, "px) scale(0.867)")
                }, ownerState.variant === 'standard' && {
                    transform: 'translate(0, -1.5px) scale(0.867)'
                });
            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                '&:not(.Mui-focused):not(.Mui-error):not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--mui-palette-action-active)'
                },
                '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--mui-palette-divider)'
                },
                '&:not(.Mui-error).MuiInputBase-colorPrimary.Mui-focused': {
                    boxShadow: 'var(--mui-customShadows-primary-sm)'
                }
            },
            input: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.size) === 'medium' && {
                    '&:not(.MuiInputBase-inputMultiline, .MuiInputBase-inputAdornedStart)': {
                        padding: theme.spacing(4)
                    },
                    height: '1.5em'
                }), {
                    '& ~ .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-customColors-inputBorder)'
                    }
                });
            },
            notchedOutline: {
                '& legend': {
                    fontSize: '0.867em'
                }
            }
        }
    },
    MuiInputAdornment: {
        styleOverrides: {
            root: {
                color: 'var(--mui-palette-text-primary)',
                '& i, & svg': {
                    fontSize: '1rem !important'
                },
                '& *': {
                    color: 'inherit !important'
                }
            }
        }
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                lineHeight: 1,
                letterSpacing: 'unset'
            }
        }
    }
};
const __TURBOPACK__default__export__ = input;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var list = {
    MuiListItem: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    gap: theme.spacing(3)
                };
            },
            padding: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, !ownerState.dense && {
                    paddingBlock: theme.spacing(2),
                    paddingInlineStart: theme.spacing(5)
                });
            }
        }
    },
    MuiListItemAvatar: {
        styleOverrides: {
            root: {
                minInlineSize: 'unset'
            }
        }
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minInlineSize: 0,
                color: 'var(--mui-palette-text-primary)',
                fontSize: '1.375rem',
                '& > svg, & > i': {
                    fontSize: 'inherit'
                }
            }
        }
    },
    MuiListItemButton: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    gap: theme.spacing(2)
                }, !ownerState.dense && {
                    paddingBlock: theme.spacing(2)
                }), {
                    paddingInlineStart: theme.spacing(5),
                    '&.Mui-selected': {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        '&:hover, &.Mui-focused, &.Mui-focusVisible': {
                            backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                        },
                        '& .MuiTypography-root': {
                            color: 'var(--mui-palette-primary-main)'
                        },
                        '& + .MuiListItemSecondaryAction-root .MuiIconButton-root': {
                            color: 'var(--mui-palette-primary-main)'
                        }
                    }
                });
            }
        }
    },
    MuiListItemText: {
        styleOverrides: {
            root: {
                margin: 0
            },
            primary: {
                color: 'var(--mui-palette-text-primary)'
            }
        }
    },
    MuiListSubheader: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.typography.subtitle2), {
                    paddingBlock: 10,
                    paddingInline: theme.spacing(5)
                });
            }
        }
    }
};
const __TURBOPACK__default__export__ = list;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
var menu = function(skin) {
    return {
        MuiMenu: {
            defaultProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin === 'bordered' && {
                slotProps: {
                    paper: {
                        elevation: 0
                    }
                }
            }),
            styleOverrides: {
                paper: function(param) {
                    var theme = param.theme;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        marginBlockStart: theme.spacing(0.5)
                    }, skin !== 'bordered' && {
                        boxShadow: 'var(--mui-customShadows-lg)'
                    });
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return {
                        paddingBlock: theme.spacing(2),
                        gap: theme.spacing(2),
                        color: 'var(--mui-palette-text-primary)',
                        marginInline: theme.spacing(2),
                        borderRadius: 'var(--mui-shape-borderRadius)',
                        '& i, & svg': {
                            fontSize: '1.375rem'
                        },
                        '& .MuiListItemIcon-root': {
                            minInlineSize: 0
                        },
                        '&:not(:last-of-type)': {
                            marginBlockEnd: theme.spacing(0.5)
                        },
                        '&.Mui-selected': {
                            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                            color: 'var(--mui-palette-primary-main)',
                            '& .MuiListItemIcon-root': {
                                color: 'var(--mui-palette-primary-main)'
                            },
                            '&:hover, &.Mui-focused, &.Mui-focusVisible': {
                                backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                            }
                        },
                        '&.Mui-disabled': {
                            color: 'var(--mui-palette-text-disabled)',
                            opacity: 0.45
                        }
                    };
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = menu;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/pagination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var pagination = {
    MuiPagination: {
        styleOverrides: {
            root: {
                variants: [
                    {
                        props: {
                            variant: 'text',
                            color: 'primary'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                                backgroundColor: 'var(--mui-palette-primary-main)',
                                color: 'var(--mui-palette-primary-contrastText)'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'text',
                            color: 'secondary'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                                backgroundColor: 'var(--mui-palette-secondary-main)',
                                color: 'var(--mui-palette-secondary-contrastText)'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'outlined'
                        },
                        style: {
                            '& .MuiPaginationItem-root': {
                                borderColor: 'var(--mui-palette-customColors-inputBorder)'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'outlined',
                            color: 'primary'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected': {
                                color: 'var(--mui-palette-primary-main)',
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                borderColor: 'rgb(var(--mui-palette-primary-mainChannel))'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'outlined',
                            color: 'secondary'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected': {
                                color: 'var(--mui-palette-secondary-main)',
                                backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
                                borderColor: 'rgb(var(--mui-palette-secondary-mainChannel))'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal'
                        },
                        style: {
                            '& .MuiPaginationItem-root:not(.MuiPaginationItem-ellipsis)': {
                                backgroundColor: 'var(--mui-palette-action-selected)'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'standard'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected': {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)',
                                '&:hover': {
                                    backgroundColor: 'var(--mui-palette-primary-mainOpacity)'
                                }
                            },
                            '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                                backgroundColor: 'var(--mui-palette-action-disabledBackground)'
                            },
                            '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'primary'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected': {
                                backgroundColor: 'var(--mui-palette-primary-main)',
                                color: 'var(--mui-palette-primary-contrastText)',
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-primary-sm)'
                                },
                                '&:hover': {
                                    backgroundColor: 'var(--mui-palette-primary-dark)'
                                }
                            },
                            '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)'
                            },
                            '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                                backgroundColor: 'var(--mui-palette-primary-main)',
                                color: 'var(--mui-palette-primary-contrastText)'
                            }
                        }
                    },
                    {
                        props: {
                            variant: 'tonal',
                            color: 'secondary'
                        },
                        style: {
                            '& .MuiPaginationItem-root.Mui-selected': {
                                backgroundColor: 'var(--mui-palette-secondary-main)',
                                color: 'var(--mui-palette-secondary-contrastText)',
                                '&:not(.Mui-disabled)': {
                                    boxShadow: 'var(--mui-customShadows-secondary-sm)'
                                },
                                '&:hover': {
                                    backgroundColor: 'var(--mui-palette-secondary-dark)'
                                }
                            },
                            '& .MuiPaginationItem-root:hover:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                                backgroundColor: 'var(--mui-palette-secondary-mainOpacity)'
                            },
                            '& .MuiPaginationItem-root.Mui-selected.Mui-disabled': {
                                backgroundColor: 'var(--mui-palette-secondary-main)',
                                color: 'var(--mui-palette-secondary-contrastText)'
                            }
                        }
                    }
                ]
            },
            ul: {
                rowGap: 6
            }
        }
    },
    MuiPaginationItem: {
        styleOverrides: {
            root: function(param) {
                var ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'medium' && {
                    height: '2.375rem',
                    minWidth: '2.375rem'
                }, ownerState.shape !== 'rounded' && {
                    borderRadius: '50px'
                }), {
                    '&.Mui-selected.Mui-disabled': {
                        color: 'var(--mui-palette-text-primary)',
                        opacity: 0.45
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45
                    }
                }), ownerState.shape === 'rounded' && ownerState.size === 'small' && {
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                }, ownerState.shape === 'rounded' && ownerState.size === 'large' && {
                    borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                });
            },
            ellipsis: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            sizeSmall: {
                height: '1.875rem',
                minWidth: '1.875rem'
            },
            sizeLarge: {
                height: '3rem',
                minWidth: '3rem'
            }
        }
    }
};
const __TURBOPACK__default__export__ = pagination;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/paper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var paper = {
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
};
const __TURBOPACK__default__export__ = paper;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/popover.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
var popover = function(skin) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, skin === 'bordered' ? {
                    boxShadow: 'none',
                    border: '1px solid var(--mui-palette-divider)'
                } : {
                    boxShadow: 'var(--mui-customShadows-sm)'
                })
            }
        }
    };
};
const __TURBOPACK__default__export__ = popover;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/progress.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var progress = {
    MuiLinearProgress: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    blockSize: 6,
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    backgroundColor: 'var(--mui-palette-customColors-trackBg)',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 'var(--mui-shape-borderRadius)'
                    },
                    '& .MuiLinearProgress-dashed': {
                        marginTop: theme.spacing(0.2)
                    }
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = progress;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var IconChecked = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z",
            fill: "var(--mui-palette-common-white)",
            stroke: "currentColor",
            strokeWidth: "5"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, _this);
};
_c = IconChecked;
var UncheckedIcon = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
            stroke: "var(--mui-palette-text-disabled)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, _this);
};
_c1 = UncheckedIcon;
var radio = {
    MuiRadio: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UncheckedIcon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChecked, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
                lineNumber: 29,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        },
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                    padding: theme.spacing(1),
                    '& svg': {
                        fontSize: '1.25rem'
                    }
                } : {
                    padding: theme.spacing(1.5),
                    '& svg': {
                        fontSize: '1.5rem'
                    }
                }), {
                    '&:not(.Mui-checked):not(.Mui-disabled) svg, &:not(.Mui-checked):not(.Mui-disabled) i': {
                        color: 'var(--mui-palette-text-disabled)'
                    },
                    '&.Mui-checked:not(.Mui-disabled) svg': {
                        filter: "drop-shadow(var(--mui-customShadows-".concat(ownerState.color, "-sm))")
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        '&:not(.Mui-checked)': {
                            color: 'var(--mui-palette-text-secondary)'
                        },
                        '&.Mui-checked.MuiRadio-colorPrimary': {
                            color: 'var(--mui-palette-primary-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorSecondary': {
                            color: 'var(--mui-palette-secondary-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorError': {
                            color: 'var(--mui-palette-error-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorWarning': {
                            color: 'var(--mui-palette-warning-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorInfo': {
                            color: 'var(--mui-palette-info-main)'
                        },
                        '&.Mui-checked.MuiRadio-colorSuccess': {
                            color: 'var(--mui-palette-success-main)'
                        }
                    }
                });
            }
        }
    }
};
const __TURBOPACK__default__export__ = radio;
var _c, _c1;
__turbopack_context__.k.register(_c, "IconChecked");
__turbopack_context__.k.register(_c1, "UncheckedIcon");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
var rating = {
    MuiRating: {
        defaultProps: {
            emptyIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "tabler-star"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx",
                lineNumber: 4,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "tabler-star-filled"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx",
                lineNumber: 5,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        styleOverrides: {
            root: {
                gap: '2px',
                color: 'var(--mui-palette-warning-main)',
                '& i, & svg': {
                    flexShrink: 0
                },
                '& .MuiRating-decimal > label:first-of-type, & .MuiRating-decimal > span:first-of-type': {
                    zIndex: 1
                }
            },
            sizeSmall: {
                '& .MuiRating-icon i, & .MuiRating-icon svg': {
                    fontSize: '1.25rem'
                }
            },
            sizeLarge: {
                '& .MuiRating-icon i, & .MuiRating-icon svg': {
                    fontSize: '1.75rem'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = rating;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/select.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
var SelectIcon = function() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
        className: "tabler-chevron-down"
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/select.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, _this);
};
_c = SelectIcon;
var iconStyles = function(theme) {
    return {
        userSelect: 'none',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        transition: theme.transitions.create('fill', {
            duration: theme.transitions.duration.shorter
        }),
        fontSize: '1.25rem',
        position: 'absolute',
        right: '1rem',
        pointerEvents: 'none'
    };
};
var select = {
    MuiSelect: {
        defaultProps: {
            IconComponent: SelectIcon
        },
        styleOverrides: {
            select: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.variant === 'outlined' && {
                    height: '1.5em'
                }), {
                    '&[aria-expanded="true"] ~ i, &[aria-expanded="true"] ~ svg': {
                        transform: 'rotate(180deg)'
                    },
                    '& ~ i, & ~ svg': iconStyles(theme),
                    '&.MuiInputBase-inputSizeSmall': {
                        '& ~ i, & ~ svg': {
                            height: '1.125rem',
                            width: '1.125rem'
                        }
                    },
                    '&:not(aria-label="Without label") ~ .MuiOutlinedInput-notchedOutline > legend > span': {
                        paddingInline: '5px'
                    }
                });
            }
        }
    },
    MuiNativeSelect: {
        styleOverrides: {
            select: function(param) {
                var theme = param.theme;
                return {
                    '& + i, & + svg': iconStyles(theme)
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = select;
var _c;
__turbopack_context__.k.register(_c, "SelectIcon");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/slider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var slider = {
    MuiSlider: {
        styleOverrides: {
            root: function(param) {
                var ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    boxSizing: 'border-box'
                }, ownerState.orientation === 'horizontal' ? ownerState.size !== 'small' ? {
                    blockSize: 6
                } : {
                    blockSize: 4
                } : ownerState.size !== 'small' ? {
                    inlineSize: 6
                } : {
                    inlineSize: 4
                }), {
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: "var(--mui-palette-".concat(ownerState.color, "-main)")
                    }
                });
            },
            thumb: function(param) {
                var ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                    blockSize: 14,
                    inlineSize: 14,
                    border: '2px solid currentColor',
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: "0 0 0 7px var(--mui-palette-".concat(ownerState.color, "-lightOpacity)")
                    },
                    '&.Mui-active.Mui-focusVisible': {
                        boxShadow: "0 0 0 10px var(--mui-palette-".concat(ownerState.color, "-lightOpacity)")
                    }
                } : {
                    blockSize: 22,
                    inlineSize: 22,
                    border: '4px solid currentColor'
                }), {
                    backgroundColor: 'var(--mui-palette-common-white)'
                }), !ownerState.disabled && {
                    boxShadow: 'var(--mui-customShadows-sm)'
                }), {
                    '&:before': {
                        boxShadow: 'none'
                    },
                    '&:after': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? {
                        blockSize: 28,
                        inlineSize: 28
                    } : {
                        blockSize: 38,
                        inlineSize: 38
                    }),
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: "0 0 0 8px var(--mui-palette-".concat(ownerState.color, "-lightOpacity)")
                    },
                    '&.Mui-active.Mui-focusVisible': {
                        boxShadow: "0 0 0 13px var(--mui-palette-".concat(ownerState.color, "-lightOpacity)")
                    }
                });
            },
            rail: function(param) {
                var ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    opacity: 1,
                    color: "var(--mui-palette-".concat(ownerState.color, "-lightOpacity)")
                }, ownerState.track === 'inverted' && {
                    backgroundColor: "var(--mui-palette-".concat(ownerState.color, "-main)")
                });
            },
            valueLabel: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.typography.caption), {
                    padding: theme.spacing(0.5, 2),
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, theme.typography.body2), {
                    fontWeight: theme.typography.fontWeightMedium,
                    padding: theme.spacing(0.5, 2.5),
                    borderRadius: 'var(--mui-shape-borderRadius)'
                })), {
                    color: 'var(--mui-palette-customColors-tooltipText)',
                    backgroundColor: 'var(--mui-palette-Tooltip-bg)',
                    '&:before': {
                        display: 'none'
                    }
                });
            },
            track: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.track === 'inverted' && {
                    backgroundColor: "color-mix(in srgb, ".concat(theme.palette[ownerState.color || 'primary'].main, " 16%, var(--mui-palette-background-paper))"),
                    borderColor: "color-mix(in srgb, ".concat(theme.palette[ownerState.color || 'primary'].main, " 16%, var(--mui-palette-background-paper))")
                });
            }
        }
    }
};
const __TURBOPACK__default__export__ = slider;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/snackbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var snackbar = function(skin) {
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: function(param) {
                    var theme = param.theme;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        padding: theme.spacing(0, 4)
                    }, skin !== 'bordered' ? {
                        boxShadow: 'var(--mui-customShadows-xs)'
                    } : {
                        boxShadow: 'none'
                    }), {
                        '& .MuiSnackbarContent-message': {
                            paddingBlock: theme.spacing(3)
                        }
                    });
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = snackbar;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/switch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
var switchOverrides = {
    MuiSwitch: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    '&:has(.Mui-disabled)': {
                        opacity: 0.45
                    }
                }, ownerState.size !== 'small' ? {
                    width: 46,
                    height: 36,
                    padding: theme.spacing(2.25, 2)
                } : {
                    width: 42,
                    height: 30,
                    padding: theme.spacing(1.75, 2),
                    '& .MuiSwitch-thumb': {
                        width: 12,
                        height: 12
                    },
                    '& .MuiSwitch-switchBase': {
                        padding: 7,
                        left: 3,
                        '&.Mui-checked': {
                            left: -3
                        }
                    }
                });
            },
            switchBase: function(param) {
                var ownerState = param.ownerState;
                return {
                    top: 2,
                    left: 1,
                    '&.Mui-checked': {
                        left: -7,
                        color: 'var(--mui-palette-common-white)',
                        '& + .MuiSwitch-track': {
                            opacity: 1
                        }
                    },
                    '&.Mui-checked:not(.Mui-disabled) + .MuiSwitch-track': {
                        boxShadow: "var(--mui-customShadows-".concat(ownerState.color, "-sm)")
                    },
                    '&:not(.Mui-checked) + .MuiSwitch-track': {
                        boxShadow: '0 0 4px rgb(0 0 0 / 0.16) inset'
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 1
                    },
                    '&:hover:not(:has(span.MuiTouchRipple-root))': {
                        backgroundColor: 'transparent'
                    }
                };
            },
            thumb: {
                width: 14,
                height: 14,
                boxShadow: 'var(--mui-customShadows-xs)'
            },
            track: {
                opacity: 1,
                borderRadius: 10,
                backgroundColor: 'var(--mui-palette-action-focus)'
            }
        }
    }
};
const __TURBOPACK__default__export__ = switchOverrides;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/table-pagination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var tablePagination = {
    MuiTablePagination: {
        styleOverrides: {
            toolbar: function(param) {
                var theme = param.theme;
                return {
                    paddingInlineEnd: "".concat(theme.spacing(3), " !important")
                };
            },
            select: {
                '& ~ i, & ~ svg': {
                    right: '2px !important'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = tablePagination;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/tabs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
;
var tabs = {
    MuiTabs: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    minBlockSize: 38
                }, ownerState.orientation === 'horizontal' ? {
                    borderBlockEnd: '1px solid var(--mui-palette-divider)'
                } : {
                    borderInlineEnd: '1px solid var(--mui-palette-divider)'
                }), {
                    '& .MuiTab-root:hover': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.orientation === 'horizontal' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        paddingBlockEnd: theme.spacing(1.5)
                    }, ownerState.textColor === 'secondary' ? {
                        color: 'var(--mui-palette-secondary-main)',
                        borderBlockEnd: '2px solid var(--mui-palette-secondary-lightOpacity)'
                    } : {
                        color: 'var(--mui-palette-primary-main)',
                        borderBlockEnd: '2px solid var(--mui-palette-primary-lightOpacity)'
                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        paddingInlineEnd: theme.spacing(4.5)
                    }, ownerState.textColor === 'secondary' ? {
                        color: 'var(--mui-palette-secondary-main)',
                        borderInlineEnd: '2px solid var(--mui-palette-secondary-mainOpacity)'
                    } : {
                        color: 'var(--mui-palette-primary-main)',
                        borderInlineEnd: '2px solid var(--mui-palette-primary-mainOpacity)'
                    })), {
                        '& .MuiTabScrollButton-root': {
                            borderRadius: 'var(--mui-shape-borderRadius)'
                        }
                    }),
                    '& ~ .MuiTabPanel-root': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.orientation === 'horizontal' ? {
                        paddingBlockStart: theme.spacing(6)
                    } : {
                        paddingInlineStart: theme.spacing(6)
                    })
                });
            },
            vertical: {
                minWidth: 131,
                '& .MuiTab-root': {
                    minWidth: 130
                }
            }
        }
    },
    MuiTab: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: function(param) {
                var theme = param.theme, ownerState = param.ownerState;
                return {
                    lineHeight: 1.4667,
                    padding: theme.spacing(2, 5),
                    minBlockSize: 38,
                    color: 'var(--mui-palette-text-primary)',
                    '& > .MuiTab-icon': (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        fontSize: '1.125rem'
                    }, ownerState.iconPosition === 'top' && {
                        marginBlockEnd: theme.spacing(1.5)
                    }, ownerState.iconPosition === 'bottom' && {
                        marginBlockStart: theme.spacing(1.5)
                    }, ownerState.iconPosition === 'start' && {
                        marginInlineEnd: theme.spacing(1.5)
                    }, ownerState.iconPosition === 'end' && {
                        marginInlineStart: theme.spacing(1.5)
                    })
                };
            }
        }
    },
    MuiTabPanel: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    }
};
const __TURBOPACK__default__export__ = tabs;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/timeline.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var timeline = {
    MuiTimeline: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    },
    MuiTimelineDot: {
        styleOverrides: {
            root: function(param) {
                var theme = param.theme;
                return {
                    margin: theme.spacing(3, 0),
                    boxShadow: 'none',
                    '&:has(> i), &:has(> svg)': {
                        padding: 6
                    },
                    '& > svg, & > i': {
                        fontSize: '1.25rem'
                    },
                    '&:has(svg)': {
                        width: 32,
                        height: 32,
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    variants: [
                        {
                            props: {
                                variant: 'outlined'
                            },
                            style: {
                                padding: 5,
                                '& + .MuiTimelineConnector-root': {
                                    backgroundColor: 'transparent',
                                    borderInlineStart: '1px dashed var(--mui-palette-divider)'
                                },
                                '&:has(+ .MuiTimelineConnector-root)': {
                                    marginBlock: '0.625rem'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'grey'
                            },
                            style: {
                                boxShadow: '0 0 0 3px rgb(var(--mui-palette-action-activeChannel) / 0.04)'
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'primary'
                            },
                            style: {
                                boxShadow: '0 0 0 3px var(--mui-palette-primary-lightOpacity)'
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'secondary'
                            },
                            style: {
                                boxShadow: '0 0 0 3px var(--mui-palette-secondary-lightOpacity)'
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'error'
                            },
                            style: {
                                boxShadow: '0 0 0 3px var(--mui-palette-error-lightOpacity)'
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'warning'
                            },
                            style: {
                                boxShadow: '0 0 0 3px var(--mui-palette-warning-lightOpacity)'
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'info'
                            },
                            style: {
                                boxShadow: '0 0 0 3px var(--mui-palette-info-lightOpacity)'
                            }
                        },
                        {
                            props: {
                                variant: 'filled',
                                color: 'success'
                            },
                            style: {
                                boxShadow: '0 0 0 3px var(--mui-palette-success-lightOpacity)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal'
                            },
                            style: {
                                border: 0,
                                '&:has(+ .MuiTimelineConnector-root)': {
                                    marginBlock: '1rem'
                                }
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'grey'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-action-selected)',
                                color: 'var(--mui-palette-text-primary)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'primary'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                                color: 'var(--mui-palette-primary-main)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'secondary'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-secondary-lightOpacity)',
                                color: 'var(--mui-palette-secondary-main)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'error'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-error-lightOpacity)',
                                color: 'var(--mui-palette-error-main)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'warning'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-warning-lightOpacity)',
                                color: 'var(--mui-palette-warning-main)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'info'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-info-lightOpacity)',
                                color: 'var(--mui-palette-info-main)'
                            }
                        },
                        {
                            props: {
                                variant: 'tonal',
                                color: 'success'
                            },
                            style: {
                                backgroundColor: 'var(--mui-palette-success-lightOpacity)',
                                color: 'var(--mui-palette-success-main)'
                            }
                        }
                    ]
                };
            }
        }
    },
    MuiTimelineConnector: {
        styleOverrides: {
            root: {
                width: 1,
                backgroundColor: 'var(--mui-palette-divider)'
            }
        }
    },
    MuiTimelineContent: {
        styleOverrides: {
            root: {
                paddingBottom: '1rem'
            }
        }
    }
};
const __TURBOPACK__default__export__ = timeline;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/toggle-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
;
var toggleButton = {
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: function(param) {
                var ownerState = param.ownerState;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, ownerState.size === 'small' && {
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                }, ownerState.size === 'large' && {
                    borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                });
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                '&:not(.Mui-selected):not(.Mui-disabled)': {
                    color: 'var(--mui-palette-text-secondary)'
                }
            },
            sizeSmall: {
                borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
            },
            sizeLarge: {
                borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
            }
        }
    }
};
const __TURBOPACK__default__export__ = toggleButton;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/tooltip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var tooltip = {
    MuiTooltip: {
        styleOverrides: {
            tooltip: function(param) {
                var theme = param.theme;
                return {
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
                    fontSize: theme.typography.subtitle2.fontSize,
                    lineHeight: 1.539,
                    color: 'var(--mui-palette-customColors-tooltipText)',
                    paddingInline: theme.spacing(3),
                    paddingBlock: 5
                };
            },
            popper: {
                '&[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
                    marginTop: '6px !important'
                },
                '&[data-popper-placement*="top"] .MuiTooltip-tooltip': {
                    marginBottom: '6px !important'
                },
                '&[data-popper-placement*="left"] .MuiTooltip-tooltip': {
                    marginRight: '6px !important'
                },
                '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
                    marginLeft: '6px !important'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = tooltip;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/typography.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var typography = {
    MuiTypography: {
        styleOverrides: {
            root: {
                variants: [
                    {
                        props: {
                            variant: 'h1'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'h2'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'h3'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'h4'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'h5'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'h6'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'subtitle1'
                        },
                        style: {
                            color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                        }
                    },
                    {
                        props: {
                            variant: 'subtitle2'
                        },
                        style: {
                            color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                        }
                    },
                    {
                        props: {
                            variant: 'body1'
                        },
                        style: {
                            color: 'var(--mui-palette-text-secondary)'
                        }
                    },
                    {
                        props: {
                            variant: 'body2'
                        },
                        style: {
                            color: 'var(--mui-palette-text-secondary)'
                        }
                    },
                    {
                        props: {
                            variant: 'button'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    },
                    {
                        props: {
                            variant: 'caption'
                        },
                        style: {
                            color: 'var(--mui-palette-text-disabled)'
                        }
                    },
                    {
                        props: {
                            variant: 'overline'
                        },
                        style: {
                            color: 'var(--mui-palette-text-primary)'
                        }
                    }
                ]
            },
            gutterBottom: function(param) {
                var theme = param.theme;
                return {
                    marginBottom: theme.spacing(2)
                };
            }
        }
    }
};
const __TURBOPACK__default__export__ = typography;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// Override Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/accordion.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/autocomplete.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/avatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/backdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/badges.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/button-group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/chip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/drawer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/fab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/form-control-label.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/icon-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/paper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/progress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/slider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/snackbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/table-pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/timeline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/toggle-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/typography.js [app-client] (ecmascript)");
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
var overrides = function(skin) {
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$alert$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
};
const __TURBOPACK__default__export__ = overrides;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/colorSchemes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var colorSchemes = function(skin) {
    return {
        light: {
            palette: {
                primary: {
                    main: '#7367F0',
                    light: '#8F85F3',
                    dark: '#675DD8',
                    lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
                },
                secondary: {
                    main: '#808390',
                    light: '#999CA6',
                    dark: '#737682',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
                },
                error: {
                    main: '#FF4C51',
                    light: '#FF7074',
                    dark: '#E64449',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
                },
                warning: {
                    main: '#FF9F43',
                    light: '#FFB269',
                    dark: '#E68F3C',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
                },
                info: {
                    main: '#00BAD1',
                    light: '#33C8DA',
                    dark: '#00A7BC',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
                },
                success: {
                    main: '#28C76F',
                    light: '#53D28C',
                    dark: '#24B364',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
                },
                text: {
                    primary: "rgb(var(--mui-mainColorChannels-light) / 0.9)",
                    secondary: "rgb(var(--mui-mainColorChannels-light) / 0.7)",
                    disabled: "rgb(var(--mui-mainColorChannels-light) / 0.4)",
                    primaryChannel: 'var(--mui-mainColorChannels-light)',
                    secondaryChannel: 'var(--mui-mainColorChannels-light)'
                },
                divider: "rgb(var(--mui-mainColorChannels-light) / 0.12)",
                dividerChannel: 'var(--mui-mainColorChannels-light)',
                background: {
                    default: skin === 'bordered' ? '#FFFFFF' : '#F8F7FA',
                    paper: '#FFFFFF',
                    paperChannel: '255 255 255'
                },
                action: {
                    active: "rgb(var(--mui-mainColorChannels-light) / 0.6)",
                    hover: "rgb(var(--mui-mainColorChannels-light) / 0.06)",
                    selected: "rgb(var(--mui-mainColorChannels-light) / 0.08)",
                    disabled: "rgb(var(--mui-mainColorChannels-light) / 0.3)",
                    disabledBackground: "rgb(var(--mui-mainColorChannels-light) / 0.16)",
                    focus: "rgb(var(--mui-mainColorChannels-light) / 0.1)",
                    focusOpacity: 0.1,
                    activeChannel: 'var(--mui-mainColorChannels-light)',
                    selectedChannel: 'var(--mui-mainColorChannels-light)'
                },
                Alert: {
                    errorColor: 'var(--mui-palette-error-main)',
                    warningColor: 'var(--mui-palette-warning-main)',
                    infoColor: 'var(--mui-palette-info-main)',
                    successColor: 'var(--mui-palette-success-main)',
                    errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
                    warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
                    infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
                    successStandardBg: 'var(--mui-palette-success-lightOpacity)',
                    errorFilledColor: 'var(--mui-palette-error-contrastText)',
                    warningFilledColor: 'var(--mui-palette-warning-contrastText)',
                    infoFilledColor: 'var(--mui-palette-info-contrastText)',
                    successFilledColor: 'var(--mui-palette-success-contrastText)',
                    errorFilledBg: 'var(--mui-palette-error-main)',
                    warningFilledBg: 'var(--mui-palette-warning-main)',
                    infoFilledBg: 'var(--mui-palette-info-main)',
                    successFilledBg: 'var(--mui-palette-success-main)'
                },
                Avatar: {
                    defaultBg: '#EEEDF0'
                },
                Chip: {
                    defaultBorder: 'var(--mui-palette-divider)'
                },
                FilledInput: {
                    bg: 'var(--mui-palette-action-hover)',
                    hoverBg: 'var(--mui-palette-action-selected)',
                    disabledBg: 'var(--mui-palette-action-hover)'
                },
                SnackbarContent: {
                    bg: '#2F2B3D',
                    color: 'var(--mui-palette-background-paper)'
                },
                Switch: {
                    defaultColor: 'var(--mui-palette-common-white)',
                    defaultDisabledColor: 'var(--mui-palette-common-white)',
                    primaryDisabledColor: 'var(--mui-palette-common-white)',
                    secondaryDisabledColor: 'var(--mui-palette-common-white)',
                    errorDisabledColor: 'var(--mui-palette-common-white)',
                    warningDisabledColor: 'var(--mui-palette-common-white)',
                    infoDisabledColor: 'var(--mui-palette-common-white)',
                    successDisabledColor: 'var(--mui-palette-common-white)'
                },
                Tooltip: {
                    bg: '#2F2B3D'
                },
                TableCell: {
                    border: 'var(--mui-palette-divider)'
                },
                customColors: {
                    bodyBg: '#F8F7FA',
                    chatBg: '#F3F2F5',
                    greyLightBg: '#FAFAFA',
                    inputBorder: "rgb(var(--mui-mainColorChannels-light) / 0.22)",
                    tableHeaderBg: '#FFFFFF',
                    tooltipText: '#FFFFFF',
                    trackBg: '#F1F0F2'
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: '#7367F0',
                    light: '#8F85F3',
                    dark: '#675DD8',
                    lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
                },
                secondary: {
                    main: '#808390',
                    light: '#999CA6',
                    dark: '#737682',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
                },
                error: {
                    main: '#FF4C51',
                    light: '#FF7074',
                    dark: '#E64449',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
                },
                warning: {
                    main: '#FF9F43',
                    light: '#FFB269',
                    dark: '#E68F3C',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
                },
                info: {
                    main: '#00BAD1',
                    light: '#33C8DA',
                    dark: '#00A7BC',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
                },
                success: {
                    main: '#28C76F',
                    light: '#53D28C',
                    dark: '#24B364',
                    contrastText: '#FFF',
                    lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
                    lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
                    mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
                    darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
                    darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
                },
                text: {
                    primary: "rgb(var(--mui-mainColorChannels-dark) / 0.9)",
                    secondary: "rgb(var(--mui-mainColorChannels-dark) / 0.7)",
                    disabled: "rgb(var(--mui-mainColorChannels-dark) / 0.4)",
                    primaryChannel: 'var(--mui-mainColorChannels-dark)',
                    secondaryChannel: 'var(--mui-mainColorChannels-dark)'
                },
                divider: "rgb(var(--mui-mainColorChannels-dark) / 0.12)",
                dividerChannel: 'var(--mui-mainColorChannels-dark)',
                background: {
                    default: skin === 'bordered' ? '#2F3349' : '#25293C',
                    paper: '#2F3349',
                    paperChannel: '47 51 73'
                },
                action: {
                    active: "rgb(var(--mui-mainColorChannels-dark) / 0.6)",
                    hover: "rgb(var(--mui-mainColorChannels-dark) / 0.06)",
                    selected: "rgb(var(--mui-mainColorChannels-dark) / 0.08)",
                    disabled: "rgb(var(--mui-mainColorChannels-dark) / 0.3)",
                    disabledBackground: "rgb(var(--mui-mainColorChannels-dark) / 0.16)",
                    focus: "rgb(var(--mui-mainColorChannels-dark) / 0.1)",
                    focusOpacity: 0.1,
                    activeChannel: 'var(--mui-mainColorChannels-dark)',
                    selectedChannel: 'var(--mui-mainColorChannels-dark)'
                },
                Alert: {
                    errorColor: 'var(--mui-palette-error-main)',
                    warningColor: 'var(--mui-palette-warning-main)',
                    infoColor: 'var(--mui-palette-info-main)',
                    successColor: 'var(--mui-palette-success-main)',
                    errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
                    warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
                    infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
                    successStandardBg: 'var(--mui-palette-success-lightOpacity)',
                    errorFilledColor: 'var(--mui-palette-error-contrastText)',
                    warningFilledColor: 'var(--mui-palette-warning-contrastText)',
                    infoFilledColor: 'var(--mui-palette-info-contrastText)',
                    successFilledColor: 'var(--mui-palette-success-contrastText)',
                    errorFilledBg: 'var(--mui-palette-error-main)',
                    warningFilledBg: 'var(--mui-palette-warning-main)',
                    infoFilledBg: 'var(--mui-palette-info-main)',
                    successFilledBg: 'var(--mui-palette-success-main)'
                },
                Avatar: {
                    defaultBg: '#373B50'
                },
                Chip: {
                    defaultBorder: 'var(--mui-palette-divider)'
                },
                FilledInput: {
                    bg: 'var(--mui-palette-action-hover)',
                    hoverBg: 'var(--mui-palette-action-selected)',
                    disabledBg: "var(--mui-palette-action-hover)"
                },
                SnackbarContent: {
                    bg: '#F7F4FF',
                    color: 'var(--mui-palette-background-paper)'
                },
                Switch: {
                    defaultColor: 'var(--mui-palette-common-white)',
                    defaultDisabledColor: 'var(--mui-palette-common-white)',
                    primaryDisabledColor: 'var(--mui-palette-common-white)',
                    secondaryDisabledColor: 'var(--mui-palette-common-white)',
                    errorDisabledColor: 'var(--mui-palette-common-white)',
                    warningDisabledColor: 'var(--mui-palette-common-white)',
                    infoDisabledColor: 'var(--mui-palette-common-white)',
                    successDisabledColor: 'var(--mui-palette-common-white)'
                },
                Tooltip: {
                    bg: '#F7F4FF'
                },
                TableCell: {
                    border: 'var(--mui-palette-divider)'
                },
                customColors: {
                    bodyBg: '#25293C',
                    chatBg: '#202534',
                    greyLightBg: '#353A52',
                    inputBorder: "rgb(var(--mui-mainColorChannels-dark) / 0.22)",
                    tableHeaderBg: '#2F3349',
                    tooltipText: '#2F3349',
                    trackBg: '#3A3F57'
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = colorSchemes;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/spacing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var spacing = {
    spacing: function(factor) {
        return "".concat(0.25 * factor, "rem");
    }
};
const __TURBOPACK__default__export__ = spacing;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/shadows.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var shadows = function(mode) {
    var color = "var(--mui-mainColorChannels-".concat(mode, "Shadow)");
    return [
        'none',
        "0px 2px 1px -1px rgb(".concat(color, " / 0.2),0px 1px 1px 0px rgb(").concat(color, " / 0.14),0px 1px 3px 0px rgb(").concat(color, " / 0.12)"),
        "0px 3px 1px -2px rgb(".concat(color, " / 0.2),0px 2px 2px 0px rgb(").concat(color, " / 0.14),0px 1px 5px 0px rgb(").concat(color, " / 0.12)"),
        "0px 3px 3px -2px rgb(".concat(color, " / 0.2),0px 3px 4px 0px rgb(").concat(color, " / 0.14),0px 1px 8px 0px rgb(").concat(color, " / 0.12)"),
        "0px 2px 4px -1px rgb(".concat(color, " / 0.2),0px 4px 5px 0px rgb(").concat(color, " / 0.14),0px 1px 10px 0px rgb(").concat(color, " / 0.12)"),
        "0px 3px 5px -1px rgb(".concat(color, " / 0.2),0px 5px 8px 0px rgb(").concat(color, " / 0.14),0px 1px 14px 0px rgb(").concat(color, " / 0.12)"),
        "0px 3px 5px -1px rgb(".concat(color, " / 0.2),0px 6px 10px 0px rgb(").concat(color, " / 0.14),0px 1px 18px 0px rgb(").concat(color, " / 0.12)"),
        "0px 4px 5px -2px rgb(".concat(color, " / 0.2),0px 7px 10px 1px rgb(").concat(color, " / 0.14),0px 2px 16px 1px rgb(").concat(color, " / 0.12)"),
        "0px 5px 5px -3px rgb(".concat(color, " / 0.2),0px 8px 10px 1px rgb(").concat(color, " / 0.14),0px 3px 14px 2px rgb(").concat(color, " / 0.12)"),
        "0px 5px 6px -3px rgb(".concat(color, " / 0.2),0px 9px 12px 1px rgb(").concat(color, " / 0.14),0px 3px 16px 2px rgb(").concat(color, " / 0.12)"),
        "0px 6px 6px -3px rgb(".concat(color, " / 0.2),0px 10px 14px 1px rgb(").concat(color, " / 0.14),0px 4px 18px 3px rgb(").concat(color, " / 0.12)"),
        "0px 6px 7px -4px rgb(".concat(color, " / 0.2),0px 11px 15px 1px rgb(").concat(color, " / 0.14),0px 4px 20px 3px rgb(").concat(color, " / 0.12)"),
        "0px 7px 8px -4px rgb(".concat(color, " / 0.2),0px 12px 17px 2px rgb(").concat(color, " / 0.14),0px 5px 22px 4px rgb(").concat(color, " / 0.12)"),
        "0px 7px 8px -4px rgb(".concat(color, " / 0.2),0px 13px 19px 2px rgb(").concat(color, " / 0.14),0px 5px 24px 4px rgb(").concat(color, " / 0.12)"),
        "0px 7px 9px -4px rgb(".concat(color, " / 0.2),0px 14px 21px 2px rgb(").concat(color, " / 0.14),0px 5px 26px 4px rgb(").concat(color, " / 0.12)"),
        "0px 8px 9px -5px rgb(".concat(color, " / 0.2),0px 15px 22px 2px rgb(").concat(color, " / 0.14),0px 6px 28px 5px rgb(").concat(color, " / 0.12)"),
        "0px 8px 10px -5px rgb(".concat(color, " / 0.2),0px 16px 24px 2px rgb(").concat(color, " / 0.14),0px 6px 30px 5px rgb(").concat(color, " / 0.12)"),
        "0px 8px 11px -5px rgb(".concat(color, " / 0.2),0px 17px 26px 2px rgb(").concat(color, " / 0.14),0px 6px 32px 5px rgb(").concat(color, " / 0.12)"),
        "0px 9px 11px -5px rgb(".concat(color, " / 0.2),0px 18px 28px 2px rgb(").concat(color, " / 0.14),0px 7px 34px 6px rgb(").concat(color, " / 0.12)"),
        "0px 9px 12px -6px rgb(".concat(color, " / 0.2),0px 19px 29px 2px rgb(").concat(color, " / 0.14),0px 7px 36px 6px rgb(").concat(color, " / 0.12)"),
        "0px 10px 13px -6px rgb(".concat(color, " / 0.2),0px 20px 31px 3px rgb(").concat(color, " / 0.14),0px 8px 38px 7px rgb(").concat(color, " / 0.12)"),
        "0px 10px 13px -6px rgb(".concat(color, " / 0.2),0px 21px 33px 3px rgb(").concat(color, " / 0.14),0px 8px 40px 7px rgb(").concat(color, " / 0.12)"),
        "0px 10px 14px -6px rgb(".concat(color, " / 0.2),0px 22px 35px 3px rgb(").concat(color, " / 0.14),0px 8px 42px 7px rgb(").concat(color, " / 0.12)"),
        "0px 11px 14px -7px rgb(".concat(color, " / 0.2),0px 23px 36px 3px rgb(").concat(color, " / 0.14),0px 9px 44px 8px rgb(").concat(color, " / 0.12)"),
        "0px 11px 15px -7px rgb(".concat(color, " / 0.2),0px 24px 38px 3px rgb(").concat(color, " / 0.14),0px 9px 46px 8px rgb(").concat(color, " / 0.12)")
    ];
};
const __TURBOPACK__default__export__ = shadows;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/customShadows.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var customShadows = function(mode) {
    return {
        xs: "0px 1px 6px rgb(var(--mui-mainColorChannels-".concat(mode, "Shadow) / ").concat(mode === 'light' ? 0.1 : 0.16, ")"),
        sm: "0px 2px 8px rgb(var(--mui-mainColorChannels-".concat(mode, "Shadow) / ").concat(mode === 'light' ? 0.12 : 0.18, ")"),
        md: "0px 3px 12px rgb(var(--mui-mainColorChannels-".concat(mode, "Shadow) / ").concat(mode === 'light' ? 0.14 : 0.2, ")"),
        lg: "0px 4px 18px rgb(var(--mui-mainColorChannels-".concat(mode, "Shadow) / ").concat(mode === 'light' ? 0.16 : 0.22, ")"),
        xl: "0px 5px 30px rgb(var(--mui-mainColorChannels-".concat(mode, "Shadow) / ").concat(mode === 'light' ? 0.18 : 0.24, ")"),
        primary: {
            sm: '0px 2px 6px rgb(var(--mui-palette-primary-mainChannel) / 0.3)',
            md: '0px 4px 16px rgb(var(--mui-palette-primary-mainChannel) / 0.4)',
            lg: '0px 6px 20px rgb(var(--mui-palette-primary-mainChannel) / 0.5)'
        },
        secondary: {
            sm: '0px 2px 6px rgb(var(--mui-palette-secondary-mainChannel) / 0.3)',
            md: '0px 4px 16px rgb(var(--mui-palette-secondary-mainChannel) / 0.4)',
            lg: '0px 6px 20px rgb(var(--mui-palette-secondary-mainChannel) / 0.5)'
        },
        error: {
            sm: '0px 2px 6px rgb(var(--mui-palette-error-mainChannel) / 0.3)',
            md: '0px 4px 16px rgb(var(--mui-palette-error-mainChannel) / 0.4)',
            lg: '0px 6px 20px rgb(var(--mui-palette-error-mainChannel) / 0.5)'
        },
        warning: {
            sm: '0px 2px 6px rgb(var(--mui-palette-warning-mainChannel) / 0.3)',
            md: '0px 4px 16px rgb(var(--mui-palette-warning-mainChannel) / 0.4)',
            lg: '0px 6px 20px rgb(var(--mui-palette-warning-mainChannel) / 0.5)'
        },
        info: {
            sm: '0px 2px 6px rgb(var(--mui-palette-info-mainChannel) / 0.3)',
            md: '0px 4px 16px rgb(var(--mui-palette-info-mainChannel) / 0.4)',
            lg: '0px 6px 20px rgb(var(--mui-palette-info-mainChannel) / 0.5)'
        },
        success: {
            sm: '0px 2px 6px rgb(var(--mui-palette-success-mainChannel) / 0.3)',
            md: '0px 4px 16px rgb(var(--mui-palette-success-mainChannel) / 0.4)',
            lg: '0px 6px 20px rgb(var(--mui-palette-success-mainChannel) / 0.5)'
        }
    };
};
const __TURBOPACK__default__export__ = customShadows;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/typography.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var typography = function(fontFamily) {
    return {
        fontFamily: typeof fontFamily === 'undefined' || fontFamily === '' ? [
            '"Public Sans"',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',') : fontFamily,
        fontSize: 17,
        h1: {
            fontSize: '3.35rem',
            fontWeight: 500,
            lineHeight: 1.47826
        },
        h2: {
            fontSize: '2.85rem',
            fontWeight: 500,
            lineHeight: 1.47368421
        },
        h3: {
            fontSize: '2.2rem',
            fontWeight: 500,
            lineHeight: 1.5
        },
        h4: {
            fontSize: '1.95rem',
            fontWeight: 500,
            lineHeight: 1.58334
        },
        h5: {
            fontSize: '1.45rem',
            fontWeight: 500,
            lineHeight: 1.5556
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: 1.46667
        },
        subtitle1: {
            fontSize: '1.15rem',
            lineHeight: 1.46667
        },
        subtitle2: {
            fontSize: '1.05rem',
            fontWeight: 400,
            lineHeight: 1.53846154
        },
        body1: {
            fontSize: '1.15rem',
            lineHeight: 1.46667
        },
        body2: {
            fontSize: '1.05rem',
            lineHeight: 1.53846154
        },
        button: {
            fontSize: '1.1rem',
            lineHeight: 1.46667,
            textTransform: 'none'
        },
        caption: {
            fontSize: '1rem',
            lineHeight: 1.38462,
            letterSpacing: '0.4px'
        },
        overline: {
            fontSize: '0.95rem',
            lineHeight: 1.16667,
            letterSpacing: '0.8px'
        }
    };
};
const __TURBOPACK__default__export__ = typography;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/theme/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// Theme Options Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/colorSchemes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/spacing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/shadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/customShadows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/typography.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var theme = function(settings, mode, direction) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        direction: direction,
        components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        colorSchemes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(settings.skin)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), {
        shape: {
            borderRadius: 6,
            customBorderRadius: {
                xs: 2,
                sm: 4,
                md: 6,
                lg: 8,
                xl: 10
            }
        },
        shadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode),
        typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('"Public Sans", sans-serif'),
        customShadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(mode),
        mainColorChannels: {
            light: '47 43 61',
            dark: '225 222 245',
            lightShadow: '47 43 61',
            darkShadow: '19 17 32'
        }
    });
};
const __TURBOPACK__default__export__ = theme;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/components/theme/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript) <export default as deepmerge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material-nextjs/esm/v13-appRouter/appRouterV13.js [app-client] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useMedia.js [app-client] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js [app-client] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$theme$2f$ModeChanger$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/theme/ModeChanger.jsx [app-client] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-client] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)");
// Core Theme Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/index.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
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
var CustomThemeProvider = function(props) {
    _s();
    // Props
    var children = props.children, direction = props.direction, systemMode = props.systemMode;
    // Hooks
    var settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])().settings;
    var isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', systemMode === 'dark');
    // Vars
    var isServer = ("TURBOPACK compile-time value", "object") === 'undefined';
    var currentMode;
    if ("TURBOPACK compile-time falsy", 0) {
        currentMode = systemMode;
    } else {
        if (settings.mode === 'system') {
            currentMode = isDark ? 'dark' : 'light';
        } else {
            currentMode = settings.mode;
        }
    }
    // Merge the primary color scheme override with the core theme
    var theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomThemeProvider.useMemo[theme]": function() {
            var newTheme = {
                colorSchemes: {
                    light: {
                        palette: {
                            primary: {
                                main: settings.primaryColor,
                                light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(settings.primaryColor, 0.2),
                                dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(settings.primaryColor, 0.1)
                            }
                        }
                    },
                    dark: {
                        palette: {
                            primary: {
                                main: settings.primaryColor,
                                light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(settings.primaryColor, 0.2),
                                dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(settings.primaryColor, 0.1)
                            }
                        }
                    }
                },
                cssVariables: {
                    colorSchemeSelector: 'data'
                }
            };
            var coreTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__["deepmerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(settings, currentMode, direction), newTheme);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(coreTheme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CustomThemeProvider.useMemo[theme]"], [
        settings.primaryColor,
        settings.skin,
        currentMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            prepend: true
        }, direction === 'rtl' && {
            key: 'rtl',
            stylisPlugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ]
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            defaultMode: systemMode,
            modeStorageKey: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].templateName.toLowerCase().split(' ').join('-'), "-mui-template-mode"),
            forceThemeRerender: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$theme$2f$ModeChanger$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        systemMode: systemMode
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, _this),
                    children
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, _this);
};
_s(CustomThemeProvider, "zt/HLUrrT85FN0jmBdeRTT0w8vM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"]
    ];
});
_c = CustomThemeProvider;
const __TURBOPACK__default__export__ = CustomThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "CustomThemeProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@core/hooks/useLayoutInit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useCookie.js [app-client] (ecmascript) <export default as useCookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useMedia.js [app-client] (ecmascript) <export default as useMedia>");
// Type Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var useLayoutInit = function(colorSchemeFallback) {
    _s();
    // Hooks
    var settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])().settings;
    var setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"])().setMode;
    var _useCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])('colorPref'), 2), _ = _useCookie[0], updateCookieColorPref = _useCookie[1];
    var isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', colorSchemeFallback === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLayoutInit.useEffect": function() {
            var appMode = isDark ? 'dark' : 'light';
            updateCookieColorPref(appMode);
            if (settings.mode === 'system') {
                // We need to change the mode in settings context to apply the mode change to MUI components
                setMode(appMode);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useLayoutInit.useEffect"], [
        isDark
    ]);
// This hook does not return anything as it is only used to initialize color preference cookie and settings context on first load
};
_s(useLayoutInit, "hSYegBJ4uM4QfflALBvBB99u9rw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorScheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"]
    ];
});
const __TURBOPACK__default__export__ = useLayoutInit;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Classes for vertical layout
__turbopack_context__.s([
    "blankLayoutClasses",
    ()=>blankLayoutClasses,
    "commonLayoutClasses",
    ()=>commonLayoutClasses,
    "frontLayoutClasses",
    ()=>frontLayoutClasses,
    "horizontalLayoutClasses",
    ()=>horizontalLayoutClasses,
    "verticalLayoutClasses",
    ()=>verticalLayoutClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
var verticalLayoutClasses = {
    root: 'ts-vertical-layout',
    contentWrapper: 'ts-vertical-layout-content-wrapper',
    header: 'ts-vertical-layout-header',
    headerFixed: 'ts-vertical-layout-header-fixed',
    headerStatic: 'ts-vertical-layout-header-static',
    headerFloating: 'ts-vertical-layout-header-floating',
    headerDetached: 'ts-vertical-layout-header-detached',
    headerAttached: 'ts-vertical-layout-header-attached',
    headerContentCompact: 'ts-vertical-layout-header-content-compact',
    headerContentWide: 'ts-vertical-layout-header-content-wide',
    headerBlur: 'ts-vertical-layout-header-blur',
    navbar: 'ts-vertical-layout-navbar',
    navbarContent: 'ts-vertical-layout-navbar-content',
    content: 'ts-vertical-layout-content',
    contentCompact: 'ts-vertical-layout-content-compact',
    contentWide: 'ts-vertical-layout-content-wide',
    footer: 'ts-vertical-layout-footer',
    footerStatic: 'ts-vertical-layout-footer-static',
    footerFixed: 'ts-vertical-layout-footer-fixed',
    footerDetached: 'ts-vertical-layout-footer-detached',
    footerAttached: 'ts-vertical-layout-footer-attached',
    footerContentWrapper: 'ts-vertical-layout-footer-content-wrapper',
    footerContent: 'ts-vertical-layout-footer-content',
    footerContentCompact: 'ts-vertical-layout-footer-content-compact',
    footerContentWide: 'ts-vertical-layout-footer-content-wide'
};
var horizontalLayoutClasses = {
    root: 'ts-horizontal-layout',
    contentWrapper: 'ts-horizontal-layout-content-wrapper',
    header: 'ts-horizontal-layout-header',
    headerFixed: 'ts-horizontal-layout-header-fixed',
    headerStatic: 'ts-horizontal-layout-header-static',
    headerContentCompact: 'ts-horizontal-layout-header-content-compact',
    headerContentWide: 'ts-horizontal-layout-header-content-wide',
    headerBlur: 'ts-horizontal-layout-header-blur',
    navbar: 'ts-horizontal-layout-navbar',
    navbarContent: 'ts-horizontal-layout-navbar-content',
    navigation: 'ts-horizontal-layout-navigation',
    navigationContentWrapper: 'ts-horizontal-layout-navigation-content-wrapper',
    content: 'ts-horizontal-layout-content',
    contentCompact: 'ts-horizontal-layout-content-compact',
    contentWide: 'ts-horizontal-layout-content-wide',
    footer: 'ts-horizontal-layout-footer',
    footerStatic: 'ts-horizontal-layout-footer-static',
    footerFixed: 'ts-horizontal-layout-footer-fixed',
    footerContentWrapper: 'ts-horizontal-layout-footer-content-wrapper',
    footerContent: 'ts-horizontal-layout-footer-content',
    footerContentCompact: 'ts-horizontal-layout-footer-content-compact',
    footerContentWide: 'ts-horizontal-layout-footer-content-wide'
};
var blankLayoutClasses = {
    root: 'ts-blank-layout'
};
var frontLayoutClasses = {
    root: 'ts-front-layout-root',
    header: 'ts-front-layout-header',
    navbar: 'ts-front-layout-navbar',
    navbarContent: 'ts-front-layout-navbar-content',
    footer: 'ts-front-layout-footer'
};
var commonLayoutClasses = {
    contentHeightFixed: 'ts-layout-content-height-fixed'
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crediflash-vuexy-next/src/@layouts/BlankLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-client] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useLayoutInit.js [app-client] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-client] (ecmascript)");
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
var BlankLayout = function(props) {
    _s();
    // Props
    var children = props.children, systemMode = props.systemMode;
    // Hooks
    var settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"])().settings;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(systemMode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blankLayoutClasses"].root, 'is-full bs-full'),
        "data-skin": settings.skin,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/BlankLayout.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, _this);
};
_s(BlankLayout, "xng3J4gYyFtFtMIN0ZJt2Y/RcWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = BlankLayout;
const __TURBOPACK__default__export__ = BlankLayout;
var _c;
__turbopack_context__.k.register(_c, "BlankLayout");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crediflash-vuexy-next_src_3618be94._.js.map