module.exports = [
"[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
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
 */ const themeConfig = {
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
}),
"[project]/crediflash-vuexy-next/src/@core/utils/serverHelpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMode",
    ()=>getMode,
    "getServerMode",
    ()=>getServerMode,
    "getSettingsFromCookie",
    ()=>getSettingsFromCookie,
    "getSkin",
    ()=>getSkin,
    "getSystemMode",
    ()=>getSystemMode
]);
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/headers.js [app-rsc] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-rsc] (ecmascript)");
;
;
;
const getSettingsFromCookie = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieName = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].settingsCookieName;
    return JSON.parse(cookieStore.get(cookieName)?.value || '{}');
};
const getMode = async ()=>{
    const settingsCookie = await getSettingsFromCookie();
    // Get mode from cookie or fallback to theme config
    const _mode = settingsCookie.mode || __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].mode;
    return _mode;
};
const getSystemMode = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const mode = await getMode();
    const colorPrefCookie = cookieStore.get('colorPref')?.value || 'light';
    return (mode === 'system' ? colorPrefCookie : mode) || 'light';
};
const getServerMode = async ()=>{
    const mode = await getMode();
    const systemMode = await getSystemMode();
    return mode === 'system' ? systemMode : mode;
};
const getSkin = async ()=>{
    const settingsCookie = await getSettingsFromCookie();
    return settingsCookie.skin || 'default';
};
}),
"[project]/crediflash-vuexy-next/src/app/layout.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/InitColorSchemeScript/InitColorSchemeScript.js [app-rsc] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$utils$2f$serverHelpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/utils/serverHelpers.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: {
        default: 'CrediFlash',
        template: '%s | CrediFlash'
    },
    description: 'CrediFlash - Plataforma de gestion crediticia y analitica financiera.',
    icons: {
        icon: '/icon.svg'
    }
};
const RootLayout = async (props)=>{
    const { children } = props;
    // Type guard to ensure lang is a valid Locale
    // Vars
    const systemMode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$utils$2f$serverHelpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSystemMode"])();
    const direction = 'ltr';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        id: "__next",
        lang: "en",
        dir: direction,
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            suppressHydrationWarning: true,
            className: "flex is-full min-bs-full flex-auto flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InitColorSchemeScript$2f$InitColorSchemeScript$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    attribute: "data",
                    defaultMode: systemMode
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/app/layout.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/app/layout.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/app/layout.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RootLayout;
}),
];

//# sourceMappingURL=crediflash-vuexy-next_src_55fa1116._.js.map