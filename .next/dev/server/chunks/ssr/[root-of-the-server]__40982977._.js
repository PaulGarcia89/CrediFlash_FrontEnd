module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/crediflash-vuexy-next/src/configs/primaryColorConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Primary color config object
const primaryColorConfig = [
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
}),
"[project]/crediflash-vuexy-next/src/@core/hooks/useObjectCookie.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useObjectCookie",
    ()=>useObjectCookie
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useCookie.js [app-ssr] (ecmascript) <export default as useCookie>");
;
;
const useObjectCookie = (key, fallback)=>{
    // Hooks
    const [valStr, updateCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>valStr ? JSON.parse(valStr) : fallback, [
        valStr
    ]);
    const updateValue = (newVal)=>{
        updateCookie(JSON.stringify(newVal));
    };
    return [
        value,
        updateValue
    ];
};
}),
"[project]/crediflash-vuexy-next/src/@core/contexts/settingsContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsContext",
    ()=>SettingsContext,
    "SettingsProvider",
    ()=>SettingsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/primaryColorConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useObjectCookie.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const SettingsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const SettingsProvider = (props)=>{
    // Initial Settings
    const initialSettings = {
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mode,
        skin: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].skin,
        semiDark: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].semiDark,
        layout: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layout,
        navbarContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.contentWidth,
        contentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].contentWidth,
        footerContentWidth: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.contentWidth,
        primaryColor: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$primaryColorConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][0].main
    };
    const updatedInitialSettings = {
        ...initialSettings,
        mode: props.mode || __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].mode
    };
    // Cookies
    const [settingsCookie, updateSettingsCookie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useObjectCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useObjectCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].settingsCookieName, JSON.stringify(props.settingsCookie) !== '{}' ? props.settingsCookie : updatedInitialSettings);
    // State
    const [_settingsState, _updateSettingsState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(JSON.stringify(settingsCookie) !== '{}' ? settingsCookie : updatedInitialSettings);
    const updateSettings = (settings, options)=>{
        const { updateCookie = true } = options || {};
        _updateSettingsState((prev)=>{
            const newSettings = {
                ...prev,
                ...settings
            };
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
   */ const updatePageSettings = (settings)=>{
        updateSettings(settings, {
            updateCookie: false
        });
        // Returns a function to reset the page settings
        return ()=>updateSettings(settingsCookie, {
                updateCookie: false
            });
    };
    const resetSettings = ()=>{
        updateSettings(initialSettings);
    };
    const isSettingsChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>JSON.stringify(initialSettings) !== JSON.stringify(_settingsState), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        _settingsState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsContext.Provider, {
        value: {
            settings: _settingsState,
            updateSettings,
            isSettingsChanged,
            resetSettings,
            updatePageSettings
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/contexts/settingsContext.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSettings",
    ()=>useSettings
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/contexts/settingsContext.jsx [app-ssr] (ecmascript)");
;
;
const useSettings = ()=>{
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$contexts$2f$settingsContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsContext"]);
    if (!context) {
        throw new Error('useSettingsContext must be used within a SettingsProvider');
    }
    return context;
};
}),
"[project]/crediflash-vuexy-next/src/@core/hooks/useLayoutInit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useCookie.js [app-ssr] (ecmascript) <export default as useCookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useMedia.js [app-ssr] (ecmascript) <export default as useMedia>");
// Type Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const useLayoutInit = (colorSchemeFallback)=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const { setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])();
    const [_, updateCookieColorPref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useCookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useCookie$3e$__["useCookie"])('colorPref');
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', colorSchemeFallback === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const appMode = isDark ? 'dark' : 'light';
        updateCookieColorPref(appMode);
        if (settings.mode === 'system') {
            // We need to change the mode in settings context to apply the mode change to MUI components
            setMode(appMode);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDark
    ]);
// This hook does not return anything as it is only used to initialize color preference cookie and settings context on first load
};
const __TURBOPACK__default__export__ = useLayoutInit;
}),
"[project]/crediflash-vuexy-next/src/@layouts/LayoutWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useLayoutInit.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const LayoutWrapper = (props)=>{
    // Props
    const { systemMode, verticalLayout, horizontalLayout } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useLayoutInit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(systemMode);
    // Return the layout based on the layout context
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col flex-auto",
        "data-skin": settings.skin,
        children: settings.layout === 'horizontal' ? horizontalLayout : verticalLayout
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/LayoutWrapper.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LayoutWrapper;
}),
"[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const verticalLayoutClasses = {
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
const horizontalLayoutClasses = {
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
const blankLayoutClasses = {
    root: 'ts-blank-layout'
};
const frontLayoutClasses = {
    root: 'ts-front-layout-root',
    header: 'ts-front-layout-header',
    navbar: 'ts-front-layout-navbar',
    navbarContent: 'ts-front-layout-navbar-content',
    footer: 'ts-front-layout-footer'
};
const commonLayoutClasses = {
    contentHeightFixed: 'ts-layout-content-height-fixed'
};
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/shared/StyledMain.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
const StyledMain = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].main`
  padding: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  ${({ isContentCompact })=>isContentCompact && `
    margin-inline: auto;
    max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
  `}

  &:has(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonLayoutClasses"].contentHeightFixed}) {
    display: flex;
    overflow: hidden;
  }
`;
const __TURBOPACK__default__export__ = StyledMain;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/vertical/LayoutContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/styles/shared/StyledMain.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const LayoutContent = ({ children })=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const contentCompact = settings.contentWidth === 'compact';
    const contentWide = settings.contentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        isContentCompact: contentCompact,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].content, 'flex-auto', {
            [`${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].contentCompact} is-full`]: contentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].contentWide]: contentWide
        }),
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/vertical/LayoutContent.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LayoutContent;
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/vertical/StyledContentWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
'use client';
;
;
const StyledContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  &:has(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].content}>.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonLayoutClasses"].contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`;
const __TURBOPACK__default__export__ = StyledContentWrapper;
}),
"[project]/crediflash-vuexy-next/src/@menu/contexts/horizontalNavContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalNavProvider",
    ()=>HorizontalNavProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const HorizontalNavContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const HorizontalNavProvider = ({ children })=>{
    // States
    const [isBreakpointReached, setIsBreakpointReached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Stable callback using useCallback
    const updateIsBreakpointReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setIsBreakpointReached(value);
    }, []);
    // Hooks
    const HorizontalNavProviderValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isBreakpointReached,
            updateIsBreakpointReached
        }), [
        isBreakpointReached,
        updateIsBreakpointReached
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HorizontalNavContext.Provider, {
        value: HorizontalNavProviderValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/contexts/horizontalNavContext.jsx",
        lineNumber: 26,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HorizontalNavContext;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/LayoutContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/styles/shared/StyledMain.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const LayoutContent = ({ children })=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const contentCompact = settings.contentWidth === 'compact';
    const contentWide = settings.contentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$shared$2f$StyledMain$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        isContentCompact: contentCompact,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].content, 'flex-auto', {
            [`${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].contentCompact} is-full`]: contentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].contentWide]: contentWide
        }),
        style: {
            padding: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/LayoutContent.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LayoutContent;
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/horizontal/StyledContentWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
'use client';
;
;
const StyledContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  &:has(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].content}>.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commonLayoutClasses"].contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`;
const __TURBOPACK__default__export__ = StyledContentWrapper;
}),
"[project]/crediflash-vuexy-next/src/@menu/contexts/verticalNavContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerticalNavProvider",
    ()=>VerticalNavProvider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const VerticalNavContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const VerticalNavProvider = ({ children })=>{
    // States
    const [verticalNavState, setVerticalNavState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    // Hooks
    const updateVerticalNavState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((values)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                ...values,
                collapsing: values.isCollapsed === true,
                expanding: values.isCollapsed === false
            }));
    }, []);
    const collapseVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                isHovered: value !== undefined && false,
                isCollapsed: value !== undefined ? Boolean(value) : !Boolean(prevState?.isCollapsed),
                collapsing: value === true,
                expanding: value !== true
            }));
    }, []);
    const hoverVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                isHovered: value !== undefined ? Boolean(value) : !Boolean(prevState?.isHovered)
            }));
    }, []);
    const toggleVerticalNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setVerticalNavState((prevState)=>({
                ...prevState,
                isToggled: value !== undefined ? Boolean(value) : !Boolean(prevState?.isToggled)
            }));
    }, []);
    const verticalNavProviderValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...verticalNavState,
            updateVerticalNavState,
            collapseVerticalNav,
            hoverVerticalNav,
            toggleVerticalNav
        }), [
        verticalNavState,
        updateVerticalNavState,
        collapseVerticalNav,
        hoverVerticalNav,
        toggleVerticalNav
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VerticalNavContext.Provider, {
        value: verticalNavProviderValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/contexts/verticalNavContext.jsx",
        lineNumber: 57,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VerticalNavContext;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/crediflash-vuexy-next/src/components/theme/ModeChanger.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useMedia.js [app-ssr] (ecmascript) <export default as useMedia>");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
;
;
;
;
const ModeChanger = ({ systemMode })=>{
    // Hooks
    const { setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', systemMode === 'dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (settings.mode) {
            if (settings.mode === 'system') {
                setMode(isDark ? 'dark' : 'light');
            } else {
                setMode(settings.mode);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.mode
    ]);
    return null;
};
const __TURBOPACK__default__export__ = ModeChanger;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/accordion.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const accordion = (skin)=>({
        MuiAccordion: {
            defaultProps: {
                ...skin === 'bordered' && {
                    variant: 'outlined'
                }
            },
            styleOverrides: {
                root: ({ theme })=>({
                        transition: theme.transitions.create([
                            'margin',
                            'border-radius',
                            'box-shadow'
                        ]),
                        '&:not(:last-child)': {
                            marginBlockEnd: theme.spacing(2)
                        },
                        borderRadius: 'var(--mui-shape-borderRadius)',
                        ...skin !== 'bordered' && {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        },
                        '&:before': {
                            content: 'none'
                        },
                        '&.Mui-expanded': {
                            ...skin !== 'bordered' && {
                                boxShadow: 'var(--mui-customShadows-md)'
                            },
                            marginBlockStart: 0
                        }
                    })
            }
        },
        MuiAccordionSummary: {
            defaultProps: {
                expandIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-chevron-right"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/accordion.jsx",
                    lineNumber: 32,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            },
            styleOverrides: {
                root: ({ theme })=>({
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
                    }),
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
                root: ({ theme })=>({
                        padding: theme.spacing(6),
                        paddingTop: theme.spacing(0),
                        '& .MuiTypography-root': {
                            color: 'var(--mui-palette-text-secondary)'
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = accordion;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const alerts = {
    MuiAlert: {
        defaultProps: {
            iconMapping: {
                error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-alert-circle"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 8,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-alert-triangle"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 9,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0)),
                info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-info-circle"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 10,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-circle-check"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx",
                    lineNumber: 11,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            }
        },
        styleOverrides: {
            root: ({ theme })=>({
                    padding: theme.spacing(3, 4),
                    gap: theme.spacing(4),
                    ...theme.typography.body1,
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
                }),
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
            root: ({ theme })=>({
                    fontSize: theme.typography.h5.fontSize,
                    lineHeight: 1.33333,
                    marginTop: 0,
                    marginBottom: theme.spacing(1),
                    color: 'inherit'
                })
        }
    }
};
const __TURBOPACK__default__export__ = alerts;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/autocomplete.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const autocomplete = (skin)=>({
        MuiAutocomplete: {
            defaultProps: {
                ...skin === 'bordered' && {
                    slotProps: {
                        paper: {
                            variant: 'outlined'
                        }
                    }
                },
                ChipProps: {
                    size: 'small'
                },
                popupIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-chevron-down"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/autocomplete.jsx",
                    lineNumber: 17,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0))
            },
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
                paper: {
                    ...skin !== 'bordered' && {
                        boxShadow: 'var(--mui-customShadows-lg)',
                        marginBlockStart: '0.125rem'
                    }
                },
                listbox: ({ theme })=>({
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
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = autocomplete;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/avatar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const avatar = {
    MuiAvatarGroup: {
        styleOverrides: {
            root: ({ theme })=>({
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
                })
        }
    },
    MuiAvatar: {
        styleOverrides: {
            root: ({ theme })=>({
                    color: 'var(--mui-palette-text-primary)',
                    fontSize: theme.typography.body1.fontSize,
                    lineHeight: 1.2
                })
        }
    }
};
const __TURBOPACK__default__export__ = avatar;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/backdrop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const backdrop = {
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/badges.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const badges = {
    MuiBadge: {
        styleOverrides: {
            standard: ({ theme })=>({
                    height: 24,
                    minWidth: 24,
                    borderRadius: 20,
                    fontSize: theme.typography.subtitle2.fontSize,
                    lineHeight: 1.23077,
                    padding: theme.spacing(1, 2)
                })
        }
    }
};
const __TURBOPACK__default__export__ = badges;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/breadcrumbs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const breadcrumbs = {
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
            li: ({ theme })=>({
                    lineHeight: theme.typography.body1.lineHeight,
                    '& > *:not(a)': {
                        color: 'var(--mui-palette-text-primary)'
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = breadcrumbs;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
;
const iconStyles = (size)=>({
        '& > *:nth-of-type(1)': {
            ...size === 'small' ? {
                fontSize: '14px'
            } : {
                ...size === 'medium' ? {
                    fontSize: '16px'
                } : {
                    fontSize: '20px'
                }
            }
        }
    });
const button = {
    MuiButtonBase: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple
        }
    },
    MuiButton: {
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    '&.Mui-disabled': {
                        opacity: 0.45
                    },
                    transition: theme.transitions.create('all', {
                        duration: theme.transitions.duration.short
                    }),
                    '&:not(.Mui-disabled):active': {
                        transform: 'scale(0.98)'
                    },
                    ...ownerState.variant === 'text' ? {
                        ...ownerState.size === 'small' && {
                            padding: theme.spacing(1.5, 2.25)
                        },
                        ...ownerState.size === 'medium' && {
                            padding: theme.spacing(2, 3)
                        },
                        ...ownerState.size === 'large' && {
                            padding: theme.spacing(2.75, 4)
                        }
                    } : {
                        ...ownerState.variant === 'outlined' ? {
                            ...ownerState.size === 'small' && {
                                padding: theme.spacing(1.25, 3.25)
                            },
                            ...ownerState.size === 'medium' && {
                                padding: theme.spacing(1.75, 4.75)
                            },
                            ...ownerState.size === 'large' && {
                                padding: theme.spacing(2.5, 6.25)
                            }
                        } : {
                            ...ownerState.size === 'small' && {
                                padding: theme.spacing(1.5, 3.5)
                            },
                            ...ownerState.size === 'medium' && {
                                padding: theme.spacing(2, 5)
                            },
                            ...ownerState.size === 'large' && {
                                padding: theme.spacing(2.75, 6.5)
                            }
                        }
                    },
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
                }),
            sizeSmall: ({ theme })=>({
                    lineHeight: 1.38462,
                    fontSize: theme.typography.body2.fontSize,
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                }),
            sizeLarge: {
                fontSize: '1.0625rem',
                lineHeight: 1.529412,
                borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
            },
            startIcon: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        marginInlineEnd: theme.spacing(1.5)
                    } : {
                        ...ownerState.size === 'medium' ? {
                            marginInlineEnd: theme.spacing(2)
                        } : {
                            marginInlineEnd: theme.spacing(2.5)
                        }
                    },
                    ...iconStyles(ownerState.size)
                }),
            endIcon: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        marginInlineStart: theme.spacing(1.5)
                    } : {
                        ...ownerState.size === 'medium' ? {
                            marginInlineStart: theme.spacing(2)
                        } : {
                            marginInlineStart: theme.spacing(2.5)
                        }
                    },
                    ...iconStyles(ownerState.size)
                })
        }
    }
};
const __TURBOPACK__default__export__ = button;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/button-group.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
;
const buttonGroup = {
    MuiButtonGroup: {
        defaultProps: {
            disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/card.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const card = (skin)=>{
    return {
        MuiCard: {
            defaultProps: {
                ...skin === 'bordered' && {
                    variant: 'outlined'
                }
            },
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant !== 'outlined' && {
                            boxShadow: 'var(--mui-customShadows-md)'
                        }
                    })
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(6),
                        '& + .MuiCardContent-root, & + .MuiCardActions-root': {
                            paddingBlockStart: 0
                        },
                        '& + .MuiCollapse-root .MuiCardContent-root:first-child, & + .MuiCollapse-root .MuiCardActions-root:first-child': {
                            paddingBlockStart: 0
                        }
                    }),
                subheader: ({ theme })=>({
                        ...theme.typography.subtitle1,
                        color: 'rgb(var(--mui-palette-text-primaryChannel) / 0.55)'
                    }),
                action: ({ theme })=>({
                        ...theme.typography.body1,
                        color: 'var(--mui-palette-text-disabled)',
                        marginBlock: 0,
                        marginInlineEnd: 0,
                        '& .MuiIconButton-root': {
                            color: 'inherit'
                        }
                    })
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: ({ theme })=>({
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
                    })
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: ({ theme })=>({
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
                    })
            }
        }
    };
};
const __TURBOPACK__default__export__ = card;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Icon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z",
            stroke: "var(--mui-palette-text-disabled)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const IndeterminateIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 12h7",
                stroke: "var(--mui-palette-common-white)",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CheckedIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m8.5 12 2.5 2.5 5-5",
                stroke: "var(--mui-palette-common-white)",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const checkbox = {
    MuiCheckbox: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            indeterminateIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IndeterminateIcon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 50,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckedIcon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx",
                lineNumber: 51,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        },
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        padding: theme.spacing(1),
                        '& svg': {
                            fontSize: '1.25rem'
                        }
                    } : {
                        padding: theme.spacing(1.5),
                        '& svg': {
                            fontSize: '1.5rem'
                        }
                    },
                    '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) svg, &:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) i': {
                        color: 'var(--mui-palette-text-disabled)'
                    },
                    '&.Mui-checked:not(.Mui-disabled) svg, &.MuiCheckbox-indeterminate:not(.Mui-disabled) svg': {
                        filter: `drop-shadow(var(--mui-customShadows-${ownerState.color}-sm))`
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
                })
        }
    }
};
const __TURBOPACK__default__export__ = checkbox;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/chip.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const chip = {
    MuiChip: {
        styleOverrides: {
            root: ({ ownerState, theme })=>({
                    ...theme.typography.body2,
                    fontWeight: theme.typography.fontWeightMedium,
                    '&.MuiChip-outlined:not(.MuiChip-colorDefault)': {
                        borderColor: `var(--mui-palette-${ownerState.color}-main)`
                    },
                    ...ownerState.size === 'small' ? {
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                    } : {
                        borderRadius: 'var(--mui-shape-borderRadius)'
                    },
                    '& .MuiChip-deleteIcon': {
                        ...ownerState.size === 'small' ? {
                            fontSize: '1rem',
                            marginInlineEnd: theme.spacing(1),
                            marginInlineStart: theme.spacing(-2)
                        } : {
                            fontSize: '1.25rem',
                            marginInlineEnd: theme.spacing(1.5),
                            marginInlineStart: theme.spacing(-2)
                        }
                    },
                    '& .MuiChip-avatar, & .MuiChip-icon': {
                        '& i, & svg': {
                            ...ownerState.size === 'small' ? {
                                fontSize: 13
                            } : {
                                fontSize: 15
                            }
                        },
                        ...ownerState.size === 'small' ? {
                            blockSize: 16,
                            inlineSize: 16,
                            marginInlineStart: theme.spacing(1),
                            marginInlineEnd: theme.spacing(-1.5)
                        } : {
                            blockSize: 20,
                            inlineSize: 20,
                            marginInlineStart: theme.spacing(1.5),
                            marginInlineEnd: theme.spacing(-2)
                        }
                    },
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
                }),
            label: ({ ownerState, theme })=>({
                    ...ownerState.size === 'small' ? {
                        paddingInline: theme.spacing(2.5),
                        paddingBlock: theme.spacing(0.5)
                    } : {
                        paddingInline: theme.spacing(3)
                    }
                }),
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/dialog.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const dialog = (skin)=>({
        MuiDialog: {
            styleOverrides: {
                paper: ({ theme })=>({
                        borderRadius: 'var(--mui-shape-customBorderRadius-lg)',
                        ...skin !== 'bordered' ? {
                            boxShadow: 'var(--mui-customShadows-lg)'
                        } : {
                            boxShadow: 'none'
                        },
                        [theme.breakpoints.down('sm')]: {
                            '&:not(.MuiDialog-paperFullScreen)': {
                                margin: theme.spacing(6)
                            }
                        }
                    }),
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
                root: ({ theme })=>({
                        padding: theme.spacing(6),
                        '& + .MuiDialogActions-root': {
                            paddingTop: 0
                        }
                    })
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(6),
                        '& + .MuiDialogContent-root, & + .MuiDialogActions-root': {
                            paddingTop: 0
                        }
                    })
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: ({ theme })=>({
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
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = dialog;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/drawer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const drawer = (skin)=>({
        MuiDrawer: {
            defaultProps: {
                ...skin === 'bordered' && {
                    PaperProps: {
                        elevation: 0
                    }
                }
            },
            styleOverrides: {
                paper: {
                    ...skin !== 'bordered' && {
                        boxShadow: 'var(--mui-customShadows-lg)'
                    }
                }
            }
        }
    });
const __TURBOPACK__default__export__ = drawer;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/fab.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const fab = {
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/form-control-label.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const formControlLabel = {
    MuiFormControlLabel: {
        styleOverrides: {
            root: ({ theme })=>({
                    marginInlineStart: theme.spacing(-2)
                }),
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/icon-button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
;
const iconButton = {
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
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'rgb(var(--mui-palette-text-primaryChannel) / 0.08)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-action-active)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'primary'
                        },
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'var(--mui-palette-primary-lighterOpacity)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-primary-main)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'secondary'
                        },
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'var(--mui-palette-secondary-lighterOpacity)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-secondary-main)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'error'
                        },
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'var(--mui-palette-error-lighterOpacity)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-error-main)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'warning'
                        },
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'var(--mui-palette-warning-lighterOpacity)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-warning-main)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'info'
                        },
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'var(--mui-palette-info-lighterOpacity)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-info-main)'
                            }
                        }
                    },
                    {
                        props: {
                            color: 'success'
                        },
                        style: {
                            '&:not(.Mui-disabled):hover, &:not(.Mui-disabled):active': {
                                backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                            },
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disableRipple && {
                                '&.Mui-focusVisible:not(.Mui-disabled)': {
                                    backgroundColor: 'var(--mui-palette-success-lighterOpacity)'
                                }
                            },
                            '&.Mui-disabled': {
                                opacity: 0.45,
                                color: 'var(--mui-palette-success-main)'
                            }
                        }
                    }
                ]
            },
            sizeSmall: ({ theme })=>({
                    padding: theme.spacing(1.25),
                    fontSize: '1.25rem'
                }),
            sizeMedium: ({ theme })=>({
                    padding: theme.spacing(2),
                    fontSize: '1.375rem'
                }),
            sizeLarge: ({ theme })=>({
                    padding: theme.spacing(3),
                    fontSize: '1.5rem'
                })
        }
    }
};
const __TURBOPACK__default__export__ = iconButton;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const input = {
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
            shrink: ({ ownerState })=>({
                    ...ownerState.variant === 'outlined' && {
                        transform: 'translate(14px, -8px) scale(0.867)'
                    },
                    ...ownerState.variant === 'filled' && {
                        transform: `translate(12px, ${ownerState.size === 'small' ? 4 : 7}px) scale(0.867)`
                    },
                    ...ownerState.variant === 'standard' && {
                        transform: 'translate(0, -1.5px) scale(0.867)'
                    }
                })
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
            input: ({ theme, ownerState })=>({
                    ...ownerState?.size === 'medium' && {
                        '&:not(.MuiInputBase-inputMultiline, .MuiInputBase-inputAdornedStart)': {
                            padding: theme.spacing(4)
                        },
                        height: '1.5em'
                    },
                    '& ~ .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'var(--mui-palette-customColors-inputBorder)'
                    }
                }),
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const list = {
    MuiListItem: {
        styleOverrides: {
            root: ({ theme })=>({
                    gap: theme.spacing(3)
                }),
            padding: ({ theme, ownerState })=>({
                    ...!ownerState.dense && {
                        paddingBlock: theme.spacing(2),
                        paddingInlineStart: theme.spacing(5)
                    }
                })
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
            root: ({ theme, ownerState })=>({
                    gap: theme.spacing(2),
                    ...!ownerState.dense && {
                        paddingBlock: theme.spacing(2)
                    },
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
                })
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
            root: ({ theme })=>({
                    ...theme.typography.subtitle2,
                    paddingBlock: 10,
                    paddingInline: theme.spacing(5)
                })
        }
    }
};
const __TURBOPACK__default__export__ = list;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const menu = (skin)=>({
        MuiMenu: {
            defaultProps: {
                ...skin === 'bordered' && {
                    slotProps: {
                        paper: {
                            elevation: 0
                        }
                    }
                }
            },
            styleOverrides: {
                paper: ({ theme })=>({
                        marginBlockStart: theme.spacing(0.5),
                        ...skin !== 'bordered' && {
                            boxShadow: 'var(--mui-customShadows-lg)'
                        }
                    })
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme })=>({
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
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = menu;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/pagination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const pagination = {
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
            root: ({ ownerState })=>({
                    ...ownerState.size === 'medium' && {
                        height: '2.375rem',
                        minWidth: '2.375rem'
                    },
                    ...ownerState.shape !== 'rounded' && {
                        borderRadius: '50px'
                    },
                    '&.Mui-selected.Mui-disabled': {
                        color: 'var(--mui-palette-text-primary)',
                        opacity: 0.45
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45
                    },
                    ...ownerState.shape === 'rounded' && ownerState.size === 'small' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                    },
                    ...ownerState.shape === 'rounded' && ownerState.size === 'large' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                    }
                }),
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/paper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const paper = {
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none'
            }
        }
    }
};
const __TURBOPACK__default__export__ = paper;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/popover.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const popover = (skin)=>({
        MuiPopover: {
            styleOverrides: {
                paper: {
                    ...skin === 'bordered' ? {
                        boxShadow: 'none',
                        border: '1px solid var(--mui-palette-divider)'
                    } : {
                        boxShadow: 'var(--mui-customShadows-sm)'
                    }
                }
            }
        }
    });
const __TURBOPACK__default__export__ = popover;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/progress.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const progress = {
    MuiLinearProgress: {
        styleOverrides: {
            root: ({ theme })=>({
                    blockSize: 6,
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    backgroundColor: 'var(--mui-palette-customColors-trackBg)',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: 'var(--mui-shape-borderRadius)'
                    },
                    '& .MuiLinearProgress-dashed': {
                        marginTop: theme.spacing(0.2)
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = progress;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const IconChecked = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5.5 12a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z",
            fill: "var(--mui-palette-common-white)",
            stroke: "currentColor",
            strokeWidth: "5"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const UncheckedIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
            stroke: "var(--mui-palette-text-disabled)",
            strokeWidth: "2"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const radio = {
    MuiRadio: {
        defaultProps: {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UncheckedIcon, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            checkedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconChecked, {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx",
                lineNumber: 29,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        },
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        padding: theme.spacing(1),
                        '& svg': {
                            fontSize: '1.25rem'
                        }
                    } : {
                        padding: theme.spacing(1.5),
                        '& svg': {
                            fontSize: '1.5rem'
                        }
                    },
                    '&:not(.Mui-checked):not(.Mui-disabled) svg, &:not(.Mui-checked):not(.Mui-disabled) i': {
                        color: 'var(--mui-palette-text-disabled)'
                    },
                    '&.Mui-checked:not(.Mui-disabled) svg': {
                        filter: `drop-shadow(var(--mui-customShadows-${ownerState.color}-sm))`
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
                })
        }
    }
};
const __TURBOPACK__default__export__ = radio;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const rating = {
    MuiRating: {
        defaultProps: {
            emptyIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "tabler-star"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx",
                lineNumber: 4,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/select.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const SelectIcon = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
        className: "tabler-chevron-down"
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/theme/overrides/select.jsx",
        lineNumber: 5,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const iconStyles = (theme)=>({
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
    });
const select = {
    MuiSelect: {
        defaultProps: {
            IconComponent: SelectIcon
        },
        styleOverrides: {
            select: ({ theme, ownerState })=>({
                    ...ownerState.variant === 'outlined' && {
                        height: '1.5em'
                    },
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
                })
        }
    },
    MuiNativeSelect: {
        styleOverrides: {
            select: ({ theme })=>({
                    '& + i, & + svg': iconStyles(theme)
                })
        }
    }
};
const __TURBOPACK__default__export__ = select;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/slider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const slider = {
    MuiSlider: {
        styleOverrides: {
            root: ({ ownerState })=>({
                    boxSizing: 'border-box',
                    ...ownerState.orientation === 'horizontal' ? ownerState.size !== 'small' ? {
                        blockSize: 6
                    } : {
                        blockSize: 4
                    } : ownerState.size !== 'small' ? {
                        inlineSize: 6
                    } : {
                        inlineSize: 4
                    },
                    '&.Mui-disabled': {
                        opacity: 0.45,
                        color: `var(--mui-palette-${ownerState.color}-main)`
                    }
                }),
            thumb: ({ ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        blockSize: 14,
                        inlineSize: 14,
                        border: '2px solid currentColor',
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0 0 0 7px var(--mui-palette-${ownerState.color}-lightOpacity)`
                        },
                        '&.Mui-active.Mui-focusVisible': {
                            boxShadow: `0 0 0 10px var(--mui-palette-${ownerState.color}-lightOpacity)`
                        }
                    } : {
                        blockSize: 22,
                        inlineSize: 22,
                        border: '4px solid currentColor'
                    },
                    backgroundColor: 'var(--mui-palette-common-white)',
                    ...!ownerState.disabled && {
                        boxShadow: 'var(--mui-customShadows-sm)'
                    },
                    '&:before': {
                        boxShadow: 'none'
                    },
                    '&:after': {
                        ...ownerState.size === 'small' ? {
                            blockSize: 28,
                            inlineSize: 28
                        } : {
                            blockSize: 38,
                            inlineSize: 38
                        }
                    },
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0 0 0 8px var(--mui-palette-${ownerState.color}-lightOpacity)`
                    },
                    '&.Mui-active.Mui-focusVisible': {
                        boxShadow: `0 0 0 13px var(--mui-palette-${ownerState.color}-lightOpacity)`
                    }
                }),
            rail: ({ ownerState })=>({
                    opacity: 1,
                    color: `var(--mui-palette-${ownerState.color}-lightOpacity)`,
                    ...ownerState.track === 'inverted' && {
                        backgroundColor: `var(--mui-palette-${ownerState.color}-main)`
                    }
                }),
            valueLabel: ({ theme, ownerState })=>({
                    ...ownerState.size === 'small' ? {
                        ...theme.typography.caption,
                        padding: theme.spacing(0.5, 2),
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                    } : {
                        ...theme.typography.body2,
                        fontWeight: theme.typography.fontWeightMedium,
                        padding: theme.spacing(0.5, 2.5),
                        borderRadius: 'var(--mui-shape-borderRadius)'
                    },
                    color: 'var(--mui-palette-customColors-tooltipText)',
                    backgroundColor: 'var(--mui-palette-Tooltip-bg)',
                    '&:before': {
                        display: 'none'
                    }
                }),
            track: ({ theme, ownerState })=>({
                    ...ownerState.track === 'inverted' && {
                        backgroundColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`,
                        borderColor: `color-mix(in srgb, ${theme.palette[ownerState.color || 'primary'].main} 16%, var(--mui-palette-background-paper))`
                    }
                })
        }
    }
};
const __TURBOPACK__default__export__ = slider;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/snackbar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const snackbar = (skin)=>({
        MuiSnackbarContent: {
            styleOverrides: {
                root: ({ theme })=>({
                        padding: theme.spacing(0, 4),
                        ...skin !== 'bordered' ? {
                            boxShadow: 'var(--mui-customShadows-xs)'
                        } : {
                            boxShadow: 'none'
                        },
                        '& .MuiSnackbarContent-message': {
                            paddingBlock: theme.spacing(3)
                        }
                    })
            }
        }
    });
const __TURBOPACK__default__export__ = snackbar;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/switch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const switchOverrides = {
    MuiSwitch: {
        defaultProps: {
            disableRipple: true
        },
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    '&:has(.Mui-disabled)': {
                        opacity: 0.45
                    },
                    ...ownerState.size !== 'small' ? {
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
                    }
                }),
            switchBase: ({ ownerState })=>({
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
                        boxShadow: `var(--mui-customShadows-${ownerState.color}-sm)`
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
                }),
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/table-pagination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const tablePagination = {
    MuiTablePagination: {
        styleOverrides: {
            toolbar: ({ theme })=>({
                    paddingInlineEnd: `${theme.spacing(3)} !important`
                }),
            select: {
                '& ~ i, & ~ svg': {
                    right: '2px !important'
                }
            }
        }
    }
};
const __TURBOPACK__default__export__ = tablePagination;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/tabs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const tabs = {
    MuiTabs: {
        styleOverrides: {
            root: ({ theme, ownerState })=>({
                    minBlockSize: 38,
                    ...ownerState.orientation === 'horizontal' ? {
                        borderBlockEnd: '1px solid var(--mui-palette-divider)'
                    } : {
                        borderInlineEnd: '1px solid var(--mui-palette-divider)'
                    },
                    '& .MuiTab-root:hover': {
                        ...ownerState.orientation === 'horizontal' ? {
                            paddingBlockEnd: theme.spacing(1.5),
                            ...ownerState.textColor === 'secondary' ? {
                                color: 'var(--mui-palette-secondary-main)',
                                borderBlockEnd: '2px solid var(--mui-palette-secondary-lightOpacity)'
                            } : {
                                color: 'var(--mui-palette-primary-main)',
                                borderBlockEnd: '2px solid var(--mui-palette-primary-lightOpacity)'
                            }
                        } : {
                            paddingInlineEnd: theme.spacing(4.5),
                            ...ownerState.textColor === 'secondary' ? {
                                color: 'var(--mui-palette-secondary-main)',
                                borderInlineEnd: '2px solid var(--mui-palette-secondary-mainOpacity)'
                            } : {
                                color: 'var(--mui-palette-primary-main)',
                                borderInlineEnd: '2px solid var(--mui-palette-primary-mainOpacity)'
                            }
                        },
                        '& .MuiTabScrollButton-root': {
                            borderRadius: 'var(--mui-shape-borderRadius)'
                        }
                    },
                    '& ~ .MuiTabPanel-root': {
                        ...ownerState.orientation === 'horizontal' ? {
                            paddingBlockStart: theme.spacing(6)
                        } : {
                            paddingInlineStart: theme.spacing(6)
                        }
                    }
                }),
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
            root: ({ theme, ownerState })=>({
                    lineHeight: 1.4667,
                    padding: theme.spacing(2, 5),
                    minBlockSize: 38,
                    color: 'var(--mui-palette-text-primary)',
                    '& > .MuiTab-icon': {
                        fontSize: '1.125rem',
                        ...ownerState.iconPosition === 'top' && {
                            marginBlockEnd: theme.spacing(1.5)
                        },
                        ...ownerState.iconPosition === 'bottom' && {
                            marginBlockStart: theme.spacing(1.5)
                        },
                        ...ownerState.iconPosition === 'start' && {
                            marginInlineEnd: theme.spacing(1.5)
                        },
                        ...ownerState.iconPosition === 'end' && {
                            marginInlineStart: theme.spacing(1.5)
                        }
                    }
                })
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/timeline.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const timeline = {
    MuiTimeline: {
        styleOverrides: {
            root: {
                padding: 0
            }
        }
    },
    MuiTimelineDot: {
        styleOverrides: {
            root: ({ theme })=>({
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
                })
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/toggle-button.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const toggleButton = {
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: ({ ownerState })=>({
                    ...ownerState.size === 'small' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-sm)'
                    },
                    ...ownerState.size === 'large' && {
                        borderRadius: 'var(--mui-shape-customBorderRadius-lg)'
                    }
                })
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/tooltip.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const tooltip = {
    MuiTooltip: {
        styleOverrides: {
            tooltip: ({ theme })=>({
                    borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
                    fontSize: theme.typography.subtitle2.fontSize,
                    lineHeight: 1.539,
                    color: 'var(--mui-palette-customColors-tooltipText)',
                    paddingInline: theme.spacing(3),
                    paddingBlock: 5
                }),
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/typography.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const typography = {
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
            gutterBottom: ({ theme })=>({
                    marginBottom: theme.spacing(2)
                })
        }
    }
};
const __TURBOPACK__default__export__ = typography;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/overrides/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Override Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/accordion.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$alert$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/alert.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/autocomplete.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/backdrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/badges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/breadcrumbs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/button-group.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/checkbox.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/chip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/drawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/fab.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/form-control-label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/icon-button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/menu.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/pagination.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/paper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/popover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/progress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/radio.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/rating.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/select.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/slider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/snackbar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/switch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/table-pagination.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/tabs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/timeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/toggle-button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/typography.js [app-ssr] (ecmascript)");
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
const overrides = (skin)=>{
    return Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$accordion$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$alert$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$autocomplete$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$backdrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$badges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$breadcrumbs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$button$2d$group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$checkbox$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$fab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$form$2d$control$2d$label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$icon$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$popover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$progress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$radio$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$rating$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$slider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$snackbar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(skin), __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$switch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$table$2d$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$timeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$toggle$2d$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
};
const __TURBOPACK__default__export__ = overrides;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/colorSchemes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const colorSchemes = (skin)=>{
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
                    primary: `rgb(var(--mui-mainColorChannels-light) / 0.9)`,
                    secondary: `rgb(var(--mui-mainColorChannels-light) / 0.7)`,
                    disabled: `rgb(var(--mui-mainColorChannels-light) / 0.4)`,
                    primaryChannel: 'var(--mui-mainColorChannels-light)',
                    secondaryChannel: 'var(--mui-mainColorChannels-light)'
                },
                divider: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
                dividerChannel: 'var(--mui-mainColorChannels-light)',
                background: {
                    default: skin === 'bordered' ? '#FFFFFF' : '#F8F7FA',
                    paper: '#FFFFFF',
                    paperChannel: '255 255 255'
                },
                action: {
                    active: `rgb(var(--mui-mainColorChannels-light) / 0.6)`,
                    hover: `rgb(var(--mui-mainColorChannels-light) / 0.06)`,
                    selected: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
                    disabled: `rgb(var(--mui-mainColorChannels-light) / 0.3)`,
                    disabledBackground: `rgb(var(--mui-mainColorChannels-light) / 0.16)`,
                    focus: `rgb(var(--mui-mainColorChannels-light) / 0.1)`,
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
                    inputBorder: `rgb(var(--mui-mainColorChannels-light) / 0.22)`,
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
                    primary: `rgb(var(--mui-mainColorChannels-dark) / 0.9)`,
                    secondary: `rgb(var(--mui-mainColorChannels-dark) / 0.7)`,
                    disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.4)`,
                    primaryChannel: 'var(--mui-mainColorChannels-dark)',
                    secondaryChannel: 'var(--mui-mainColorChannels-dark)'
                },
                divider: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
                dividerChannel: 'var(--mui-mainColorChannels-dark)',
                background: {
                    default: skin === 'bordered' ? '#2F3349' : '#25293C',
                    paper: '#2F3349',
                    paperChannel: '47 51 73'
                },
                action: {
                    active: `rgb(var(--mui-mainColorChannels-dark) / 0.6)`,
                    hover: `rgb(var(--mui-mainColorChannels-dark) / 0.06)`,
                    selected: `rgb(var(--mui-mainColorChannels-dark) / 0.08)`,
                    disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.3)`,
                    disabledBackground: `rgb(var(--mui-mainColorChannels-dark) / 0.16)`,
                    focus: `rgb(var(--mui-mainColorChannels-dark) / 0.1)`,
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
                    disabledBg: `var(--mui-palette-action-hover)`
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
                    inputBorder: `rgb(var(--mui-mainColorChannels-dark) / 0.22)`,
                    tableHeaderBg: '#2F3349',
                    tooltipText: '#2F3349',
                    trackBg: '#3A3F57'
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = colorSchemes;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/spacing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const spacing = {
    spacing: (factor)=>`${0.25 * factor}rem`
};
const __TURBOPACK__default__export__ = spacing;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/shadows.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const shadows = (mode)=>{
    const color = `var(--mui-mainColorChannels-${mode}Shadow)`;
    return [
        'none',
        `0px 2px 1px -1px rgb(${color} / 0.2),0px 1px 1px 0px rgb(${color} / 0.14),0px 1px 3px 0px rgb(${color} / 0.12)`,
        `0px 3px 1px -2px rgb(${color} / 0.2),0px 2px 2px 0px rgb(${color} / 0.14),0px 1px 5px 0px rgb(${color} / 0.12)`,
        `0px 3px 3px -2px rgb(${color} / 0.2),0px 3px 4px 0px rgb(${color} / 0.14),0px 1px 8px 0px rgb(${color} / 0.12)`,
        `0px 2px 4px -1px rgb(${color} / 0.2),0px 4px 5px 0px rgb(${color} / 0.14),0px 1px 10px 0px rgb(${color} / 0.12)`,
        `0px 3px 5px -1px rgb(${color} / 0.2),0px 5px 8px 0px rgb(${color} / 0.14),0px 1px 14px 0px rgb(${color} / 0.12)`,
        `0px 3px 5px -1px rgb(${color} / 0.2),0px 6px 10px 0px rgb(${color} / 0.14),0px 1px 18px 0px rgb(${color} / 0.12)`,
        `0px 4px 5px -2px rgb(${color} / 0.2),0px 7px 10px 1px rgb(${color} / 0.14),0px 2px 16px 1px rgb(${color} / 0.12)`,
        `0px 5px 5px -3px rgb(${color} / 0.2),0px 8px 10px 1px rgb(${color} / 0.14),0px 3px 14px 2px rgb(${color} / 0.12)`,
        `0px 5px 6px -3px rgb(${color} / 0.2),0px 9px 12px 1px rgb(${color} / 0.14),0px 3px 16px 2px rgb(${color} / 0.12)`,
        `0px 6px 6px -3px rgb(${color} / 0.2),0px 10px 14px 1px rgb(${color} / 0.14),0px 4px 18px 3px rgb(${color} / 0.12)`,
        `0px 6px 7px -4px rgb(${color} / 0.2),0px 11px 15px 1px rgb(${color} / 0.14),0px 4px 20px 3px rgb(${color} / 0.12)`,
        `0px 7px 8px -4px rgb(${color} / 0.2),0px 12px 17px 2px rgb(${color} / 0.14),0px 5px 22px 4px rgb(${color} / 0.12)`,
        `0px 7px 8px -4px rgb(${color} / 0.2),0px 13px 19px 2px rgb(${color} / 0.14),0px 5px 24px 4px rgb(${color} / 0.12)`,
        `0px 7px 9px -4px rgb(${color} / 0.2),0px 14px 21px 2px rgb(${color} / 0.14),0px 5px 26px 4px rgb(${color} / 0.12)`,
        `0px 8px 9px -5px rgb(${color} / 0.2),0px 15px 22px 2px rgb(${color} / 0.14),0px 6px 28px 5px rgb(${color} / 0.12)`,
        `0px 8px 10px -5px rgb(${color} / 0.2),0px 16px 24px 2px rgb(${color} / 0.14),0px 6px 30px 5px rgb(${color} / 0.12)`,
        `0px 8px 11px -5px rgb(${color} / 0.2),0px 17px 26px 2px rgb(${color} / 0.14),0px 6px 32px 5px rgb(${color} / 0.12)`,
        `0px 9px 11px -5px rgb(${color} / 0.2),0px 18px 28px 2px rgb(${color} / 0.14),0px 7px 34px 6px rgb(${color} / 0.12)`,
        `0px 9px 12px -6px rgb(${color} / 0.2),0px 19px 29px 2px rgb(${color} / 0.14),0px 7px 36px 6px rgb(${color} / 0.12)`,
        `0px 10px 13px -6px rgb(${color} / 0.2),0px 20px 31px 3px rgb(${color} / 0.14),0px 8px 38px 7px rgb(${color} / 0.12)`,
        `0px 10px 13px -6px rgb(${color} / 0.2),0px 21px 33px 3px rgb(${color} / 0.14),0px 8px 40px 7px rgb(${color} / 0.12)`,
        `0px 10px 14px -6px rgb(${color} / 0.2),0px 22px 35px 3px rgb(${color} / 0.14),0px 8px 42px 7px rgb(${color} / 0.12)`,
        `0px 11px 14px -7px rgb(${color} / 0.2),0px 23px 36px 3px rgb(${color} / 0.14),0px 9px 44px 8px rgb(${color} / 0.12)`,
        `0px 11px 15px -7px rgb(${color} / 0.2),0px 24px 38px 3px rgb(${color} / 0.14),0px 9px 46px 8px rgb(${color} / 0.12)`
    ];
};
const __TURBOPACK__default__export__ = shadows;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/customShadows.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const customShadows = (mode)=>{
    return {
        xs: `0px 1px 6px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.1 : 0.16})`,
        sm: `0px 2px 8px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.12 : 0.18})`,
        md: `0px 3px 12px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.14 : 0.2})`,
        lg: `0px 4px 18px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.16 : 0.22})`,
        xl: `0px 5px 30px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.18 : 0.24})`,
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
}),
"[project]/crediflash-vuexy-next/src/@core/theme/typography.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const typography = (fontFamily)=>({
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
    });
const __TURBOPACK__default__export__ = typography;
}),
"[project]/crediflash-vuexy-next/src/@core/theme/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Theme Options Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/overrides/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/colorSchemes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/spacing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/shadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/customShadows.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/typography.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const theme = (settings, mode, direction)=>{
    return {
        direction,
        components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$overrides$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        colorSchemes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$colorSchemes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(settings.skin),
        ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$spacing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
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
        shadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$shadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mode),
        typography: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('"Public Sans", sans-serif'),
        customShadows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$customShadows$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mode),
        mainColorChannels: {
            light: '47 43 61',
            dark: '225 222 245',
            lightShadow: '47 43 61',
            darkShadow: '19 17 32'
        }
    };
};
const __TURBOPACK__default__export__ = theme;
}),
"[project]/crediflash-vuexy-next/src/components/theme/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-ssr] (ecmascript) <export default as deepmerge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material-nextjs/esm/v13-appRouter/appRouterV13.js [app-ssr] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useMedia.js [app-ssr] (ecmascript) <export default as useMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$theme$2f$ModeChanger$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/theme/ModeChanger.jsx [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Core Theme Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/theme/index.js [app-ssr] (ecmascript)");
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
const CustomThemeProvider = (props)=>{
    // Props
    const { children, direction, systemMode } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useMedia$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMedia$3e$__["useMedia"])('(prefers-color-scheme: dark)', systemMode === 'dark');
    // Vars
    const isServer = ("TURBOPACK compile-time value", "undefined") === 'undefined';
    let currentMode;
    if ("TURBOPACK compile-time truthy", 1) {
        currentMode = systemMode;
    } else //TURBOPACK unreachable
    ;
    // Merge the primary color scheme override with the core theme
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const newTheme = {
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: settings.primaryColor,
                            light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lighten"])(settings.primaryColor, 0.2),
                            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darken"])(settings.primaryColor, 0.1)
                        }
                    }
                },
                dark: {
                    palette: {
                        primary: {
                            main: settings.primaryColor,
                            light: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lighten"])(settings.primaryColor, 0.2),
                            dark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["darken"])(settings.primaryColor, 0.1)
                        }
                    }
                }
            },
            cssVariables: {
                colorSchemeSelector: 'data'
            }
        };
        const coreTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__["deepmerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(settings, currentMode, direction), newTheme);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(coreTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.primaryColor,
        settings.skin,
        currentMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$esm$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
        options: {
            prepend: true,
            ...direction === 'rtl' && {
                key: 'rtl',
                stylisPlugins: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
                ]
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            defaultMode: systemMode,
            modeStorageKey: `${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`,
            forceThemeRerender: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$theme$2f$ModeChanger$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        systemMode: systemMode
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
            lineNumber: 94,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/theme/index.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CustomThemeProvider;
}),
"[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$contexts$2f$verticalNavContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/contexts/verticalNavContext.jsx [app-ssr] (ecmascript)");
;
;
const useVerticalNav = ()=>{
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$contexts$2f$verticalNavContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    if (context === undefined) {
        //TODO: set better error message
        throw new Error('VerticalNav Component is required!');
    }
    return context;
};
const __TURBOPACK__default__export__ = useVerticalNav;
}),
"[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Common classes for menu components
__turbopack_context__.s([
    "horizontalNavClasses",
    ()=>horizontalNavClasses,
    "menuClasses",
    ()=>menuClasses,
    "verticalNavClasses",
    ()=>verticalNavClasses
]);
const menuClasses = {
    root: 'ts-menu-root',
    menuSectionRoot: 'ts-menusection-root',
    menuItemRoot: 'ts-menuitem-root',
    subMenuRoot: 'ts-submenu-root',
    button: 'ts-menu-button',
    prefix: 'ts-menu-prefix',
    suffix: 'ts-menu-suffix',
    label: 'ts-menu-label',
    icon: 'ts-menu-icon',
    menuSectionWrapper: 'ts-menu-section-wrapper',
    menuSectionContent: 'ts-menu-section-content',
    menuSectionLabel: 'ts-menu-section-label',
    subMenuContent: 'ts-submenu-content',
    subMenuExpandIcon: 'ts-submenu-expand-icon',
    disabled: 'ts-disabled',
    active: 'ts-active',
    open: 'ts-open'
};
const verticalNavClasses = {
    root: 'ts-vertical-nav-root',
    container: 'ts-vertical-nav-container',
    bgColorContainer: 'ts-vertical-nav-bg-color-container',
    header: 'ts-vertical-nav-header',
    image: 'ts-vertical-nav-image',
    backdrop: 'ts-vertical-nav-backdrop',
    collapsed: 'ts-collapsed',
    toggled: 'ts-toggled',
    hovered: 'ts-hovered',
    scrollWithContent: 'ts-scroll-with-content',
    breakpointReached: 'ts-breakpoint-reached',
    collapsing: 'ts-collapsing',
    expanding: 'ts-expanding'
};
const horizontalNavClasses = {
    root: 'ts-horizontal-nav-root',
    scrollWithContent: 'ts-scroll-with-content',
    breakpointReached: 'ts-breakpoint-reached'
};
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
const StyledVerticalMenu = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav`
  & > ul > :first-of-type {
    margin-block-start: 0;
  }
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].root} {
    ${({ rootStyles })=>rootStyles}
  }
`;
const __TURBOPACK__default__export__ = StyledVerticalMenu;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/styles.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ul": "styles-module__AzX1FG__ul",
});
}),
"[project]/crediflash-vuexy-next/src/@menu/defaultConfigs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultBreakpoints",
    ()=>defaultBreakpoints,
    "horizontalSubMenuToggleDuration",
    ()=>horizontalSubMenuToggleDuration,
    "verticalNavToggleDuration",
    ()=>verticalNavToggleDuration,
    "verticalSubMenuToggleDuration",
    ()=>verticalSubMenuToggleDuration
]);
const defaultBreakpoints = {
    xs: '480px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
    xxl: '1920px',
    always: 'always'
};
const verticalNavToggleDuration = 300;
const verticalSubMenuToggleDuration = 300;
const horizontalSubMenuToggleDuration = 200;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerticalMenuContext",
    ()=>VerticalMenuContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalMenu.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/styles.module.css [app-ssr] (css module)");
// Default Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/defaultConfigs.js [app-ssr] (ecmascript)");
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
const VerticalMenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const Menu = (props, ref)=>{
    // Props
    const { children, className, rootStyles, menuItemStyles, renderExpandIcon, renderExpandedMenuItemIcon, menuSectionStyles, browserScroll = false, triggerPopout = 'hover', popoutWhenCollapsed = false, subMenuOpenBehavior = 'accordion', transitionDuration = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalSubMenuToggleDuration"], collapsedMenuSectionLabel = '-', popoutMenuOffset = {
        mainAxis: 0
    }, textTruncate = true, ...rest } = props;
    // States
    const [openSubmenu, setOpenSubmenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs
    const openSubmenusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Hooks
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { updateVerticalNavState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const toggleOpenSubmenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...submenus)=>{
        if (!submenus.length) return;
        const openSubmenuCopy = [
            ...openSubmenu
        ];
        submenus.forEach(({ level, label, active = false, id })=>{
            const submenuIndex = openSubmenuCopy.findIndex((submenu)=>submenu.id === id);
            const submenuExists = submenuIndex >= 0;
            const isAccordion = subMenuOpenBehavior === 'accordion';
            const inactiveSubmenuIndex = openSubmenuCopy.findIndex((submenu)=>!submenu.active && submenu.level === 0);
            // Delete submenu if it exists
            if (submenuExists) {
                openSubmenuCopy.splice(submenuIndex, 1);
            }
            if (isAccordion) {
                // Add submenu if it doesn't exist
                if (!submenuExists) {
                    if (inactiveSubmenuIndex >= 0 && !active && level === 0) {
                        openSubmenuCopy.splice(inactiveSubmenuIndex, 1, {
                            level,
                            label,
                            active,
                            id
                        });
                    } else {
                        openSubmenuCopy.push({
                            level,
                            label,
                            active,
                            id
                        });
                    }
                }
            } else {
                // Add submenu if it doesn't exist
                if (!submenuExists) {
                    openSubmenuCopy.push({
                        level,
                        label,
                        active,
                        id
                    });
                }
            }
        });
        setOpenSubmenu(openSubmenuCopy);
    }, [
        openSubmenu,
        subMenuOpenBehavior
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOpenSubmenu([
            ...openSubmenusRef.current
        ]);
        openSubmenusRef.current = [];
    }, [
        pathname
    ]);
    // UseEffect, update verticalNav state to set initial values and update values on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        updateVerticalNavState({
            isPopoutWhenCollapsed: popoutWhenCollapsed
        });
    }, [
        popoutWhenCollapsed,
        updateVerticalNavState
    ]);
    const providerValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            browserScroll,
            triggerPopout,
            transitionDuration,
            menuItemStyles,
            menuSectionStyles,
            renderExpandIcon,
            renderExpandedMenuItemIcon,
            openSubmenu,
            openSubmenusRef,
            toggleOpenSubmenu,
            subMenuOpenBehavior,
            collapsedMenuSectionLabel,
            popoutMenuOffset,
            textTruncate
        }), [
        browserScroll,
        triggerPopout,
        transitionDuration,
        menuItemStyles,
        menuSectionStyles,
        renderExpandIcon,
        renderExpandedMenuItemIcon,
        openSubmenu,
        openSubmenusRef,
        toggleOpenSubmenu,
        subMenuOpenBehavior,
        collapsedMenuSectionLabel,
        popoutMenuOffset,
        textTruncate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VerticalMenuContext.Provider, {
        value: providerValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingTree"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].root, className),
                rootStyles: rootStyles,
                ...rest,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ul,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx",
                lineNumber: 148,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx",
            lineNumber: 147,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx",
        lineNumber: 146,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(Menu);
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledSubMenuContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledSubMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: ${({ transitionDuration })=>`block-size ${transitionDuration}ms ease-in-out`};
  box-sizing: border-box;

  ${({ isCollapsed, level, isPopoutWhenCollapsed, isHovered })=>isCollapsed && level === 0 && !isPopoutWhenCollapsed && !isHovered && `
      block-size: 0 !important;
    `}

  ${({ isCollapsed, level, isPopoutWhenCollapsed })=>isCollapsed && level === 0 && isPopoutWhenCollapsed ? `
      display: block;
      padding-inline-start: 0px;
      inline-size: 260px;
      border-radius: 4px;
      block-size: auto !important;
      transition: none !important;
      background-color: white;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     ` : `
      position: static !important;
      transform: none !important;
      `}

  ${({ browserScroll })=>browserScroll && `overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100));`}


  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledSubMenuContent;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenuContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-perfect-scrollbar/lib/index.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledSubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledSubMenuContent.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/styles.module.css [app-ssr] (css module)");
;
;
;
;
;
const SubMenuContent = (props, ref)=>{
    // Props
    const { children, open, level, isCollapsed, isHovered, transitionDuration, isPopoutWhenCollapsed, openWhenCollapsed, browserScroll, ...rest } = props;
    // States
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const SubMenuContentRef = ref;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mounted) {
            if (open || open && isHovered) {
                const target = SubMenuContentRef?.current;
                if (target) {
                    target.style.display = 'block';
                    target.style.overflow = 'hidden';
                    target.style.blockSize = 'auto';
                    const height = target.offsetHeight;
                    target.style.blockSize = '0px';
                    target.offsetHeight;
                    target.style.blockSize = `${height}px`;
                    setTimeout(()=>{
                        target.style.overflow = 'auto';
                        target.style.blockSize = 'auto';
                    }, transitionDuration);
                }
            } else {
                const target = SubMenuContentRef?.current;
                if (target) {
                    target.style.overflow = 'hidden';
                    target.style.blockSize = `${target.offsetHeight}px`;
                    target.offsetHeight;
                    target.style.blockSize = '0px';
                    setTimeout(()=>{
                        target.style.overflow = 'auto';
                        target.style.display = 'none';
                    }, transitionDuration);
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        open,
        mounted,
        SubMenuContentRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, [
        isHovered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledSubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        level: level,
        isCollapsed: isCollapsed,
        isHovered: isHovered,
        open: open,
        openWhenCollapsed: openWhenCollapsed,
        isPopoutWhenCollapsed: isPopoutWhenCollapsed,
        transitionDuration: transitionDuration,
        browserScroll: browserScroll,
        ...rest,
        children: !browserScroll && level === 0 && isPopoutWhenCollapsed && isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            options: {
                wheelPropagation: false,
                suppressScrollX: true
            },
            style: {
                maxBlockSize: `calc((var(--vh, 1vh) * 100))`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ul,
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenuContent.jsx",
                lineNumber: 93,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenuContent.jsx",
            lineNumber: 89,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ul,
            children: children
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenuContent.jsx",
            lineNumber: 96,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenuContent.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(SubMenuContent);
}),
"[project]/crediflash-vuexy-next/src/@menu/components/RouterLink.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouterLink",
    ()=>RouterLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const RouterLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    // Props
    const { href, className, ...other } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        href: href,
        className: className,
        ...other,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/RouterLink.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "menuButtonStyles",
    ()=>menuButtonStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/react/dist/emotion-react.development.esm.js [app-ssr] (ecmascript) <locals>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$RouterLink$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/RouterLink.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const menuButtonStyles = (props)=>{
    // Props
    const { level, disabled, children, isCollapsed, isPopoutWhenCollapsed } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])({
        display: 'flex',
        alignItems: 'center',
        minBlockSize: '30px',
        textDecoration: 'none',
        color: 'inherit',
        boxSizing: 'border-box',
        cursor: 'pointer',
        paddingInlineEnd: '20px',
        paddingInlineStart: `${level === 0 ? 20 : (isPopoutWhenCollapsed && isCollapsed ? level : level + 1) * 20}px`,
        '&:hover, &[aria-expanded="true"]': {
            backgroundColor: '#f3f3f3'
        },
        '&:focus-visible': {
            outline: 'none',
            backgroundColor: '#f3f3f3'
        },
        ...disabled && {
            pointerEvents: 'none',
            cursor: 'default',
            color: '#adadad'
        },
        // All the active styles are applied to the button including menu items or submenu
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
            ...!children && {
                color: 'white'
            },
            backgroundColor: children ? '#f3f3f3' : '#765feb'
        }
    });
};
const MenuButton = ({ className, component, children, ...rest }, ref)=>{
    if (component) {
        // If component is a string, create a new element of that type
        if (typeof component === 'string') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className),
                ...rest,
                ref
            }, children);
        } else {
            // Otherwise, clone the element
            const { className: classNameProp, ...props } = component.props;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(component, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, classNameProp),
                ...rest,
                ...props,
                ref
            }, children);
        }
    } else {
        // If there is no component but href is defined, render RouterLink
        if (rest.href) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$RouterLink$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterLink"], {
                ref: ref,
                className: className,
                href: rest.href,
                ...rest,
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuButton.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                ref: ref,
                className: className,
                ...rest,
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuButton.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MenuButton);
}),
"[project]/crediflash-vuexy-next/src/@menu/svg/ChevronRight.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const ChevronRight = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fontSize: "1.5rem",
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/ChevronRight.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/ChevronRight.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ChevronRight;
}),
"[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript)");
;
;
const useVerticalMenu = ()=>{
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerticalMenuContext"]);
    if (context === undefined) {
        //TODO: set better error message
        throw new Error('Menu Component is required!');
    }
    return context;
};
const __TURBOPACK__default__export__ = useVerticalMenu;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
const StyledHorizontalMenu = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nav`
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].root} {
    ${({ rootStyles })=>rootStyles}
  }
`;
const __TURBOPACK__default__export__ = StyledHorizontalMenu;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/horizontalUl.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "li": "horizontalUl-module__Gpfx7q__li",
  "root": "horizontalUl-module__Gpfx7q__root",
});
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalMenuContext",
    ()=>HorizontalMenuContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalMenu.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$horizontalUl$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/horizontalUl.module.css [app-ssr] (css module)");
// Default Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/defaultConfigs.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const HorizontalMenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({});
const Menu = (props, ref)=>{
    // Props
    const { children, className, rootStyles, menuItemStyles, triggerPopout = 'hover', browserScroll = false, transitionDuration = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalSubMenuToggleDuration"], renderExpandIcon, renderExpandedMenuItemIcon, popoutMenuOffset = {
        mainAxis: 0
    }, textTruncate = true, verticalMenuProps, ...rest } = props;
    const providerValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            triggerPopout,
            browserScroll,
            menuItemStyles,
            renderExpandIcon,
            renderExpandedMenuItemIcon,
            transitionDuration,
            popoutMenuOffset,
            textTruncate,
            verticalMenuProps
        }), [
        triggerPopout,
        browserScroll,
        menuItemStyles,
        renderExpandIcon,
        renderExpandedMenuItemIcon,
        transitionDuration,
        popoutMenuOffset,
        textTruncate,
        verticalMenuProps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HorizontalMenuContext.Provider, {
        value: providerValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingTree"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].root, className),
                rootStyles: rootStyles,
                ...rest,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$horizontalUl$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(Menu);
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalSubMenuContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledHorizontalSubMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  inline-size: 260px;
  border-radius: 4px;
  box-shadow: 0 9px 28px 8px #00000011;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;

  ${({ browserScroll, top })=>browserScroll && `overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100) - ${top}px);`}
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledHorizontalSubMenuContent;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenuContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-perfect-scrollbar/lib/index.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalSubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalSubMenuContent.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/styles.module.css [app-ssr] (css module)");
;
;
;
;
;
const SubMenuContent = (props, ref)=>{
    // Props
    const { children, open, firstLevel, top, browserScroll, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalSubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        firstLevel: firstLevel,
        open: open,
        top: top,
        browserScroll: browserScroll,
        ...rest,
        children: !browserScroll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            options: {
                wheelPropagation: false,
                suppressScrollX: true
            },
            style: {
                maxBlockSize: `calc((var(--vh, 1vh) * 100) - ${top}px)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ul,
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenuContent.jsx",
                lineNumber: 32,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenuContent.jsx",
            lineNumber: 28,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ul,
            children: children
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenuContent.jsx",
            lineNumber: 35,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenuContent.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(SubMenuContent);
}),
"[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript)");
;
;
const useHorizontalMenu = ()=>{
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HorizontalMenuContext"]);
    if (context === undefined) {
        //TODO: set better error message
        throw new Error('Menu Component is required!');
    }
    return context;
};
const __TURBOPACK__default__export__ = useHorizontalMenu;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "menuButtonStyles",
    ()=>menuButtonStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/react/dist/emotion-react.development.esm.js [app-ssr] (ecmascript) <locals>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$RouterLink$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/RouterLink.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const menuButtonStyles = (props)=>{
    // Props
    const { level, disabled, children } = props;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"])({
        display: 'flex',
        alignItems: 'center',
        minBlockSize: '30px',
        textDecoration: 'none',
        color: 'inherit',
        boxSizing: 'border-box',
        cursor: 'pointer',
        paddingInline: '20px',
        '&:hover': {
            backgroundColor: '#f3f3f3'
        },
        '&:focus-visible': {
            outline: 'none',
            backgroundColor: '#f3f3f3'
        },
        ...disabled && {
            pointerEvents: 'none',
            cursor: 'default',
            color: '#adadad'
        },
        // All the active styles are applied to the button including menu items or submenu
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
            ...level === 0 ? {
                color: 'white',
                backgroundColor: '#765feb'
            } : {
                ...children ? {
                    backgroundColor: '#f3f3f3'
                } : {
                    color: '#765feb',
                    backgroundColor: '#765feb1f'
                }
            }
        }
    });
};
const MenuButton = ({ className, component, children, ...rest }, ref)=>{
    if (component) {
        // If component is a string, create a new element of that type
        if (typeof component === 'string') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className),
                ...rest,
                ref
            }, children);
        } else {
            // Otherwise, clone the element
            const { className: classNameProp, ...props } = component.props;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(component, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, classNameProp),
                ...rest,
                ...props,
                ref
            }, children);
        }
    } else {
        // If there is no component but href is defined, render RouterLink
        if (rest.href) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$RouterLink$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterLink"], {
                ref: ref,
                className: className,
                href: rest.href,
                ...rest,
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuButton.jsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                ref: ref,
                className: className,
                ...rest,
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuButton.jsx",
                lineNumber: 92,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MenuButton);
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuLabel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  flex-grow: 1;
  ${({ textTruncate })=>textTruncate && `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `};
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledMenuLabel;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuPrefix.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledMenuPrefix = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  margin-inline-end: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered })=>firstLevel && isCollapsed && !isHovered ? 'none' : 'flex'};
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledMenuPrefix;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSuffix.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledMenuSuffix = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  margin-inline-start: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered })=>firstLevel && isCollapsed && !isHovered ? 'none' : 'flex'};
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledMenuSuffix;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalNavExpandIcon.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledHorizontalNavExpandIconWrapper",
    ()=>StyledHorizontalNavExpandIconWrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledHorizontalNavExpandIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: flex;
  margin-inline-start: 5px;
  ${({ rootStyles })=>rootStyles};
`;
const StyledHorizontalNavExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: flex;

  ${({ level })=>level === 0 && `
    & > i,
    & > svg {
      transform: rotate(90deg);
    }
  `}

  ${({ level })=>level && level > 0 && `
    [dir='rtl'] & > i,
    [dir='rtl'] & > svg {
      transform: rotate(180deg);
    }
  `}
`;
const __TURBOPACK__default__export__ = StyledHorizontalNavExpandIcon;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalSubMenuContentWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledHorizontalSubMenuContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  z-index: 10;

  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledHorizontalSubMenuContentWrapper;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalSubMenuContext",
    ()=>HorizontalSubMenuContext,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenuContent.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalMenu.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuLabel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuPrefix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSuffix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalNavExpandIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalSubMenuContentWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalSubMenuContentWrapper.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$horizontalUl$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/horizontalUl.module.css [app-ssr] (css module)");
// Icon Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$ChevronRight$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/svg/ChevronRight.jsx [app-ssr] (ecmascript)");
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
const StyledSubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li`
  ${({ level })=>level === 0 && {
        borderRadius: '6px',
        overflow: 'hidden'
    }}

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].open} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button} {
    background-color: #f3f3f3;
  }

  ${({ menuItemStyles })=>menuItemStyles};
  ${({ rootStyles })=>rootStyles};

  > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button} {
    ${({ level, disabled, children })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuButtonStyles"])({
        level,
        disabled,
        children
    })};
    ${({ buttonStyles })=>buttonStyles};
  }
`;
const HorizontalSubMenuContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    getItemProps: ()=>({})
});
const SubMenu = (props, ref)=>{
    // Props
    const { children, className, contentClassName, label, icon, title, prefix, suffix, level = 0, disabled = false, rootStyles, component, onClick, onKeyUp, onOpenChange, ...rest } = props;
    // States
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('ltr');
    const listItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Hooks
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloatingTree"])();
    const nodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloatingNodeId"])();
    const parentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloatingParentNodeId"])();
    const { triggerPopout, renderExpandIcon, menuItemStyles, browserScroll, transitionDuration, renderExpandedMenuItemIcon, popoutMenuOffset, textTruncate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Vars
    // Filter out falsy values from children
    const childNodes = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(Boolean);
    const mainAxisOffset = popoutMenuOffset && popoutMenuOffset.mainAxis && (typeof popoutMenuOffset.mainAxis === 'function' ? popoutMenuOffset.mainAxis({
        level
    }) : popoutMenuOffset.mainAxis);
    const alignmentAxisOffset = popoutMenuOffset && popoutMenuOffset.alignmentAxis && (typeof popoutMenuOffset.alignmentAxis === 'function' ? popoutMenuOffset.alignmentAxis({
        level
    }) : popoutMenuOffset.alignmentAxis);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dir.current = window.getComputedStyle(document.documentElement).getPropertyValue('direction');
    }, []);
    const { y, refs, floatingStyles, context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        open,
        nodeId,
        onOpenChange: setOpen,
        placement: level > 0 ? dir.current !== 'rtl' ? 'right-start' : 'left-start' : 'bottom-start',
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: mainAxisOffset,
                alignmentAxis: alignmentAxisOffset
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                crossAxis: false
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])()
        ],
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"]
    });
    // Floating UI Transition Styles
    const { isMounted, styles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTransitionStyles"])(context, {
        // Configure both open and close durations:
        duration: transitionDuration,
        initial: {
            opacity: 0,
            transform: 'translateY(10px)'
        },
        open: {
            opacity: 1,
            transform: 'translateY(0px)'
        },
        close: {
            opacity: 0,
            transform: 'translateY(10px)'
        }
    });
    const hover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useHover"])(context, {
        handleClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safePolygon"])({
            blockPointerEvents: true
        }),
        restMs: 25,
        enabled: triggerPopout === 'hover',
        delay: {
            open: 75
        } // Delay opening submenu by 75ms
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useClick"])(context, {
        enabled: triggerPopout === 'click',
        toggle: false
    });
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDismiss"])(context);
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRole"])(context, {
        role: 'menu'
    });
    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps, getItemProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInteractions"])([
        hover,
        click,
        dismiss,
        role
    ]);
    const handleOnClick = (event)=>{
        onClick?.(event);
        triggerPopout === 'click' && setOpen(!open);
    };
    const handleOnKeyUp = (event)=>{
        onKeyUp?.(event);
        if (event.key === 'Enter') {
            setOpen(!open);
        }
    };
    const getSubMenuItemStyles = (element)=>{
        // If the menuItemStyles prop is provided, get the styles for the specified element.
        if (menuItemStyles) {
            // Define the parameters that are passed to the style functions.
            const params = {
                level,
                disabled,
                active,
                isSubmenu: true,
                open: open
            };
            // Get the style function for the specified element.
            const styleFunction = menuItemStyles[element];
            if (styleFunction) {
                // If the style function is a function, call it and return the result.
                // Otherwise, return the style function itself.
                return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction;
            }
        }
    };
    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere in the tree.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleTreeClick = ()=>{
            setOpen(false);
        };
        const onSubMenuOpen = (event)=>{
            if (event.nodeId !== nodeId && event.parentId === parentId) {
                setOpen(false);
            }
        };
        tree?.events.on('click', handleTreeClick);
        tree?.events.on('menuopen', onSubMenuOpen);
        return ()=>{
            tree?.events.off('click', handleTreeClick);
            tree?.events.off('menuopen', onSubMenuOpen);
        };
    }, [
        tree,
        nodeId,
        parentId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            tree?.events.emit('menuopen', {
                parentId,
                nodeId
            });
        }
    }, [
        tree,
        open,
        nodeId,
        parentId
    ]);
    // Change active state when the url changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if the current url matches any of the children urls
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmUrlInChildren"])(children, pathname)) {
            setActive(true);
        } else {
            setActive(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    // User event handler for open state change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onOpenChange?.(open);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        open
    ]);
    // Merge the reference ref with the ref passed to the component
    const referenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMergeRefs"])([
        refs.setReference,
        ref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingNode"], {
        id: nodeId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledSubMenu, {
            ...!disabled && {
                ref: referenceRef,
                ...getReferenceProps()
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot]: level === 0
            }, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
            }, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].disabled]: disabled
            }, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].open]: open
            }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$horizontalUl$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].li, className),
            menuItemStyles: getSubMenuItemStyles('root'),
            level: level,
            disabled: disabled,
            active: active,
            buttonStyles: getSubMenuItemStyles('button'),
            rootStyles: rootStyles,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: title,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button, {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
                    }),
                    component: component,
                    onClick: handleOnClick,
                    onKeyUp: handleOnKeyUp,
                    ...rest,
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderMenuIcon"])({
                            icon,
                            level,
                            active,
                            disabled,
                            renderExpandedMenuItemIcon,
                            styles: getSubMenuItemStyles('icon')
                        }),
                        prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            firstLevel: level === 0,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].prefix,
                            rootStyles: getSubMenuItemStyles('prefix'),
                            children: prefix
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].label,
                            rootStyles: getSubMenuItemStyles('label'),
                            textTruncate: textTruncate,
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            firstLevel: level === 0,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].suffix,
                            rootStyles: getSubMenuItemStyles('suffix'),
                            children: suffix
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledHorizontalNavExpandIconWrapper"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuExpandIcon,
                            rootStyles: getSubMenuItemStyles('subMenuExpandIcon'),
                            children: renderExpandIcon ? renderExpandIcon({
                                level,
                                disabled,
                                active,
                                open: open
                            }) : // eslint-disable-next-line lines-around-comment
                            /* Expanded Arrow Icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                level: level,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$ChevronRight$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "1rem"
                                }, void 0, false, {
                                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                                    lineNumber: 368,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                                lineNumber: 367,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HorizontalSubMenuContext.Provider, {
                    value: {
                        getItemProps
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingPortal"], {
                        children: isMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalSubMenuContentWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ref: refs.setFloating,
                            ...getFloatingProps(),
                            style: floatingStyles,
                            rootStyles: getSubMenuItemStyles('subMenuStyles'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                open: open,
                                top: y ? y - window.scrollY : 0,
                                firstLevel: level === 0,
                                browserScroll: browserScroll,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuContent, contentClassName),
                                rootStyles: getSubMenuItemStyles('subMenuContent'),
                                style: {
                                    ...styles
                                },
                                children: childNodes.map((node, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(node, {
                                        ...getItemProps({
                                            ref (node) {
                                                listItemsRef.current[index] = node;
                                            },
                                            onClick (event) {
                                                if (node.props.children && !Array.isArray(node.props.children)) {
                                                    node.props.onClick?.(event);
                                                    tree?.events.emit('click');
                                                }
                                            }
                                        }),
                                        level: level + 1
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                                lineNumber: 383,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                            lineNumber: 377,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
            lineNumber: 285,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx",
        lineNumber: 283,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(SubMenu);
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalMenuItem.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuButton.jsx [app-ssr] (ecmascript)");
;
;
;
const StyledHorizontalMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li`
  position: relative;
  ${({ level })=>level === 0 && {
        borderRadius: '6px',
        overflow: 'hidden'
    }}
  ${({ menuItemStyles })=>menuItemStyles};
  ${({ rootStyles })=>rootStyles};

  > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button} {
    ${({ level, disabled })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuButtonStyles"])({
        level,
        disabled
    })};
    ${({ buttonStyles })=>buttonStyles};
  }
`;
const __TURBOPACK__default__export__ = StyledHorizontalMenuItem;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useUpdateEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useUpdateEffect$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useUpdateEffect.js [app-ssr] (ecmascript) <export default as useUpdateEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuButton.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuLabel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuPrefix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSuffix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalMenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalMenuItem.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$horizontalUl$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/horizontalUl.module.css [app-ssr] (css module)");
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
const MenuItem = (props, ref)=>{
    // Props
    const { children, icon, className, prefix, suffix, level = 0, disabled = false, exactMatch = true, activeUrl, component, onActiveChange, rootStyles, ...rest } = props;
    // States
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hooks
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloatingTree"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { toggleVerticalNav, isToggled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { getItemProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HorizontalSubMenuContext"]);
    const { menuItemStyles, renderExpandedMenuItemIcon, textTruncate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const getMenuItemStyles = (element)=>{
        // If the menuItemStyles prop is provided, get the styles for the specified element.
        if (menuItemStyles) {
            // Define the parameters that are passed to the style functions.
            const params = {
                level,
                disabled,
                active,
                isSubmenu: false
            };
            // Get the style function for the specified element.
            const styleFunction = menuItemStyles[element];
            if (styleFunction) {
                // If the style function is a function, call it and return the result.
                // Otherwise, return the style function itself.
                return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction;
            }
        }
    };
    // Handle the click event.
    const handleClick = ()=>{
        if (isToggled) {
            toggleVerticalNav();
        }
    };
    // Change active state when the url changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const href = rest.href || component && typeof component !== 'string' && component.props.href;
        if (href) {
            // Check if the current url matches any of the children urls
            if (exactMatch ? pathname === href : activeUrl && pathname.includes(activeUrl)) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    // Call the onActiveChange callback when the active state changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useUpdateEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useUpdateEffect$3e$__["useUpdateEffect"])(()=>{
        onActiveChange?.(active);
    }, [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalMenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuItemRoot]: level === 0
        }, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
        }, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].disabled]: disabled
        }, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$horizontalUl$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].li, className),
        level: level,
        disabled: disabled,
        buttonStyles: getMenuItemStyles('button'),
        menuItemStyles: getMenuItemStyles('root'),
        rootStyles: rootStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
            }),
            component: component,
            tabIndex: disabled ? -1 : 0,
            onClick: handleClick,
            ...getItemProps({
                onClick (event) {
                    props.onClick?.(event);
                    tree?.events.emit('click');
                }
            }),
            ...rest,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderMenuIcon"])({
                    icon,
                    level,
                    active,
                    disabled,
                    renderExpandedMenuItemIcon,
                    styles: getMenuItemStyles('icon')
                }),
                prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    firstLevel: level === 0,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].prefix,
                    rootStyles: getMenuItemStyles('prefix'),
                    children: prefix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].label,
                    rootStyles: getMenuItemStyles('label'),
                    textTruncate: textTruncate,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    firstLevel: level === 0,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].suffix,
                    rootStyles: getMenuItemStyles('suffix'),
                    children: suffix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx",
            lineNumber: 125,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MenuItem);
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/VerticalNavInHorizontal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/vertical-menu/index.jsx [app-ssr] (ecmascript) <locals>");
;
;
const VerticalNavInHorizontal = (props)=>{
    // Props
    const { children, className, breakpoint, customBreakpoint, verticalNavProps } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        ...verticalNavProps,
        className: className,
        breakpoint: breakpoint,
        customBreakpoint: customBreakpoint,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/VerticalNavInHorizontal.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VerticalNavInHorizontal;
}),
"[project]/crediflash-vuexy-next/src/@menu/hooks/useMediaQuery.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const useMediaQuery = (breakpoint)=>{
    // States
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(breakpoint === 'always');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (breakpoint && breakpoint !== 'always') {
            const media = window.matchMedia(`(max-width: ${breakpoint})`);
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = ()=>setMatches(media.matches);
            window.addEventListener('resize', listener);
            return ()=>window.removeEventListener('resize', listener);
        }
    }, [
        matches,
        breakpoint
    ]);
    return matches;
};
const __TURBOPACK__default__export__ = useMediaQuery;
}),
"[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Context Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$contexts$2f$horizontalNavContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/contexts/horizontalNavContext.jsx [app-ssr] (ecmascript)");
;
;
const useHorizontalNav = ()=>{
    // Hooks
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$contexts$2f$horizontalNavContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    if (context === undefined) {
        //TODO: set better error message
        throw new Error('HorizontalNav Component is required!');
    }
    return context;
};
const __TURBOPACK__default__export__ = useHorizontalNav;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledHorizontalNav = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  inline-size: 100%;
  overflow: hidden;
  position: relative;
  ${({ customStyles })=>customStyles}
`;
const __TURBOPACK__default__export__ = StyledHorizontalNav;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/HorizontalNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$VerticalNavInHorizontal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/VerticalNavInHorizontal.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useMediaQuery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useMediaQuery.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalNav.jsx [app-ssr] (ecmascript)");
// Default Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/defaultConfigs.js [app-ssr] (ecmascript)");
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
const HorizontalNav = (props)=>{
    // Props
    const { switchToVertical = false, hideMenu = false, breakpoint = 'lg', customBreakpoint, breakpoints, customStyles, className, children, verticalNavProps, verticalNavContent: VerticalNavContent } = props;
    // Vars
    const mergedBreakpoints = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultBreakpoints"],
        ...breakpoints
    };
    const horizontalMenuClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalNavClasses"].root, className);
    // Refs
    const prevBreakpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Hooks
    const { updateIsBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
    const breakpointReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useMediaQuery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(customBreakpoint ?? (breakpoint ? mergedBreakpoints[breakpoint] : breakpoint));
    // Set the breakpointReached value in the state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (prevBreakpoint.current === breakpointReached) return;
        updateIsBreakpointReached(breakpointReached);
        prevBreakpoint.current = breakpointReached;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        breakpointReached
    ]);
    // If switchToVertical is true, then render the VerticalNav component if breakpoint is reached
    if (switchToVertical && breakpointReached) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$VerticalNavInHorizontal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            breakpoint: breakpoint,
            className: horizontalMenuClasses,
            customBreakpoint: customBreakpoint,
            verticalNavProps: verticalNavProps,
            children: VerticalNavContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VerticalNavContent, {
                children: children
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/HorizontalNav.jsx",
                lineNumber: 70,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/HorizontalNav.jsx",
            lineNumber: 64,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // If hideMenu is true, then hide the HorizontalNav component if breakpoint is reached
    if (hideMenu && breakpointReached) {
        return null;
    }
    // If switchToVertical & hideMenu are false, then render the HorizontalNav component
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        customStyles: customStyles,
        className: horizontalMenuClasses,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/HorizontalNav.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HorizontalNav;
}),
"[project]/crediflash-vuexy-next/src/@menu/horizontal-menu/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Import all Horizontal Nav components and export them
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$HorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/HorizontalNav.jsx [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$HorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubMenu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubMenu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalMenuItem.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuButton.jsx [app-ssr] (ecmascript)");
;
;
;
const StyledVerticalMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li`
  position: relative;
  margin-block-start: 4px;
  ${({ menuItemStyles })=>menuItemStyles};
  ${({ rootStyles })=>rootStyles};

  > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button} {
    ${({ level, disabled, isCollapsed, isPopoutWhenCollapsed })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuButtonStyles"])({
        level,
        disabled,
        isCollapsed,
        isPopoutWhenCollapsed
    })};
    ${({ buttonStyles })=>buttonStyles};
  }
`;
const __TURBOPACK__default__export__ = StyledVerticalMenuItem;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useUpdateEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useUpdateEffect$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-use/esm/useUpdateEffect.js [app-ssr] (ecmascript) <export default as useUpdateEffect>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuButton.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalMenu.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuLabel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuPrefix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSuffix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalMenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalMenuItem.jsx [app-ssr] (ecmascript)");
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
const MenuItem = (props, ref)=>{
    // Props
    const { children, icon, className, prefix, suffix, level = 0, disabled = false, exactMatch = true, activeUrl, component, onActiveChange, rootStyles, ...rest } = props;
    // States
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hooks
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { menuItemStyles, renderExpandedMenuItemIcon, textTruncate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { isCollapsed, isHovered, isPopoutWhenCollapsed, toggleVerticalNav, isToggled, isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Get the styles for the specified element.
    const getMenuItemStyles = (element)=>{
        // If the menuItemStyles prop is provided, get the styles for the specified element.
        if (menuItemStyles) {
            // Define the parameters that are passed to the style functions.
            const params = {
                level,
                disabled,
                active,
                isSubmenu: false
            };
            // Get the style function for the specified element.
            const styleFunction = menuItemStyles[element];
            if (styleFunction) {
                // If the style function is a function, call it and return the result.
                // Otherwise, return the style function itself.
                return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction;
            }
        }
    };
    // Handle the click event.
    const handleClick = ()=>{
        if (isToggled) {
            toggleVerticalNav();
        }
    };
    // Change active state when the url changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const href = rest.href || component && typeof component !== 'string' && component.props.href;
        if (href) {
            // Check if the current url matches any of the children urls
            if (exactMatch ? pathname === href : activeUrl && pathname.includes(activeUrl)) {
                setActive(true);
            } else {
                setActive(false);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    // Call the onActiveChange callback when the active state changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$use$2f$esm$2f$useUpdateEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useUpdateEffect$3e$__["useUpdateEffect"])(()=>{
        onActiveChange?.(active);
    }, [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalMenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuItemRoot, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].disabled]: disabled
        }, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
        }, className),
        level: level,
        isCollapsed: isCollapsed,
        isPopoutWhenCollapsed: isPopoutWhenCollapsed,
        disabled: disabled,
        buttonStyles: getMenuItemStyles('button'),
        menuItemStyles: getMenuItemStyles('root'),
        rootStyles: rootStyles,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
            }),
            component: component,
            tabIndex: disabled ? -1 : 0,
            ...rest,
            onClick: (e)=>{
                handleClick();
                rest.onClick && rest.onClick(e);
            },
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderMenuIcon"])({
                    icon,
                    level,
                    active,
                    disabled,
                    renderExpandedMenuItemIcon,
                    styles: getMenuItemStyles('icon'),
                    isBreakpointReached
                }),
                prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isHovered: isHovered,
                    isCollapsed: isCollapsed,
                    firstLevel: level === 0,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].prefix,
                    rootStyles: getMenuItemStyles('prefix'),
                    children: prefix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].label,
                    rootStyles: getMenuItemStyles('label'),
                    textTruncate: textTruncate,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isHovered: isHovered,
                    isCollapsed: isCollapsed,
                    firstLevel: level === 0,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].suffix,
                    rootStyles: getMenuItemStyles('suffix'),
                    children: suffix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MenuItem);
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuIcon.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledMenuIcon = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledMenuIcon;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSectionLabel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledMenuSectionLabel = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  ${({ textTruncate })=>textTruncate && `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `};
  ${({ isCollapsed, isHovered })=>!isCollapsed || isCollapsed && isHovered ? `
flex-grow: 1;
` : ''}
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledMenuSectionLabel;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalMenuSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
const StyledVerticalMenuSection = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li`
  display: flex;
  inline-size: 100%;
  position: relative;
  overflow: hidden;
  margin-block-start: 15px;

  & .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionContent} {
    font-size: 14px;
    color: #aaaaaa;
  }

  ${({ menuSectionStyles })=>menuSectionStyles};
  ${({ rootStyles })=>rootStyles};
`;
const __TURBOPACK__default__export__ = StyledVerticalMenuSection;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalMenu.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuPrefix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSuffix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSectionLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSectionLabel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalMenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalMenuSection.jsx [app-ssr] (ecmascript)");
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
const menuSectionWrapperStyles = {
    display: 'inline-block',
    inlineSize: '100%',
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    overflow: 'hidden'
};
const menuSectionContentStyles = {
    display: 'flex',
    alignItems: 'center',
    inlineSize: '100%',
    position: 'relative',
    paddingBlock: '0.75rem',
    paddingInline: '1.25rem',
    overflow: 'hidden'
};
const MenuSection = (props, ref)=>{
    // Props
    const { children, icon, className, prefix, suffix, label, rootStyles, ...rest } = props;
    // Hooks
    const { isCollapsed, isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { menuSectionStyles, collapsedMenuSectionLabel, textTruncate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const getMenuSectionStyles = (element)=>{
        // If the menuSectionStyles prop is provided, get the styles for the element from the prop
        if (menuSectionStyles) {
            return menuSectionStyles[element];
        }
    };
    return(// eslint-disable-next-line lines-around-comment
    // Menu Section
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalMenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        rootStyles: rootStyles,
        menuSectionStyles: getMenuSectionStyles('root'),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionRoot, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionWrapper,
            ...rest,
            style: menuSectionWrapperStyles,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionContent,
                    style: menuSectionContentStyles,
                    children: [
                        icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].icon,
                            rootStyles: getMenuSectionStyles('icon'),
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isCollapsed: isCollapsed,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].prefix,
                            rootStyles: getMenuSectionStyles('prefix'),
                            children: prefix
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        collapsedMenuSectionLabel && isCollapsed && !isHovered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSectionLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isCollapsed: isCollapsed,
                            isHovered: isHovered,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionLabel,
                            rootStyles: getMenuSectionStyles('label'),
                            textTruncate: textTruncate,
                            children: collapsedMenuSectionLabel
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSectionLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isCollapsed: isCollapsed,
                            isHovered: isHovered,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionLabel,
                            rootStyles: getMenuSectionStyles('label'),
                            textTruncate: textTruncate,
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            isCollapsed: isCollapsed,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].suffix,
                            rootStyles: getMenuSectionStyles('suffix'),
                            children: suffix
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(MenuSection);
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx [app-ssr] (ecmascript) <export default as MenuSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@core/components/mui/Chip.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Mui Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Chip/Chip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
'use client';
;
;
;
;
const Chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ round })=>{
    return {
        ...round === 'true' && {
            borderRadius: 500
        }
    };
});
const CustomChip = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
        ...props
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/components/mui/Chip.jsx",
        lineNumber: 18,
        columnNumber: 29
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = CustomChip;
}),
"[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GenerateHorizontalMenu",
    ()=>GenerateHorizontalMenu,
    "GenerateVerticalMenu",
    ()=>GenerateVerticalMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$horizontal$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/horizontal-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/vertical-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuSection$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx [app-ssr] (ecmascript) <export default as MenuSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/components/mui/Chip.jsx [app-ssr] (ecmascript)");
;
;
;
;
const GenerateVerticalMenu = ({ menuData })=>{
    // Hooks
    const renderMenuItems = (data)=>{
        // Use the map method to iterate through the array of menu data
        return data.map((item, index)=>{
            const menuSectionItem = item;
            const subMenuItem = item;
            const menuItem = item;
            // Check if the current item is a section
            if (menuSectionItem.isSection) {
                const { children, isSection, ...rest } = menuSectionItem;
                // If it is, return a MenuSection component and call generateMenu with the current menuSectionItem's children
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuSection$3e$__["MenuSection"], {
                    ...rest,
                    children: children && renderMenuItems(children)
                }, index, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Check if the current item is a sub menu
            if (subMenuItem.children) {
                const { children, icon, prefix, suffix, ...rest } = subMenuItem;
                const Icon = icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: icon
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 31,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)) : null;
                const subMenuPrefix = prefix && prefix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    round: "true",
                    ...prefix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 32,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)) : prefix;
                const subMenuSuffix = suffix && suffix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    round: "true",
                    ...suffix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 33,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)) : suffix;
                // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
                    prefix: subMenuPrefix,
                    suffix: subMenuSuffix,
                    ...rest,
                    ...Icon && {
                        icon: Icon
                    },
                    children: children && renderMenuItems(children)
                }, index, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
            // If the current item is neither a section nor a sub menu, return a MenuItem component
            const { label, icon, prefix, suffix, ...rest } = menuItem;
            // Localize the href
            const href = rest.href;
            const Icon = icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: icon
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 54,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)) : null;
            const menuItemPrefix = prefix && prefix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "small",
                round: "true",
                ...prefix
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 55,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)) : prefix;
            const menuItemSuffix = suffix && suffix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "small",
                round: "true",
                ...suffix
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 56,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)) : suffix;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                prefix: menuItemPrefix,
                suffix: menuItemSuffix,
                ...rest,
                href: href,
                ...Icon && {
                    icon: Icon
                },
                children: label
            }, index, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderMenuItems(menuData)
    }, void 0, false);
};
const GenerateHorizontalMenu = ({ menuData })=>{
    // Hooks
    const renderMenuItems = (data)=>{
        // Use the map method to iterate through the array of menu data
        return data.map((item, index)=>{
            const subMenuItem = item;
            const menuItem = item;
            // Check if the current item is a sub menu
            if (subMenuItem.children) {
                const { children, icon, prefix, suffix, ...rest } = subMenuItem;
                const Icon = icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: icon
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 88,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)) : null;
                const subMenuPrefix = prefix && prefix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    round: "true",
                    ...prefix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 89,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)) : prefix;
                const subMenuSuffix = suffix && suffix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    round: "true",
                    ...suffix
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 90,
                    columnNumber: 56
                }, ("TURBOPACK compile-time value", void 0)) : suffix;
                // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
                    prefix: subMenuPrefix,
                    suffix: subMenuSuffix,
                    ...rest,
                    ...Icon && {
                        icon: Icon
                    },
                    children: children && renderMenuItems(children)
                }, index, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }
            // If the current item is not a sub menu, return a MenuItem component
            const { label, icon, prefix, suffix, ...rest } = menuItem;
            // Localize the href
            const href = rest.href;
            const Icon = icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: icon
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 111,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)) : null;
            const menuItemPrefix = prefix && prefix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "small",
                round: "true",
                ...prefix
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 112,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)) : prefix;
            const menuItemSuffix = suffix && suffix.label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$components$2f$mui$2f$Chip$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "small",
                round: "true",
                ...suffix
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 113,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0)) : suffix;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                prefix: menuItemPrefix,
                suffix: menuItemSuffix,
                ...rest,
                href: href,
                ...Icon && {
                    icon: Icon
                },
                children: label
            }, index, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx",
                lineNumber: 116,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderMenuItems(menuData)
    }, void 0, false);
};
}),
"[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "confirmUrlInChildren",
    ()=>confirmUrlInChildren,
    "mapHorizontalToVerticalMenu",
    ()=>mapHorizontalToVerticalMenu,
    "renderMenuIcon",
    ()=>renderMenuIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$horizontal$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/horizontal-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/vertical-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$GenerateMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/GenerateMenu.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuIcon.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const confirmUrlInChildren = (children, url)=>{
    if (!children) {
        return false;
    }
    if (Array.isArray(children)) {
        return children.some((child)=>confirmUrlInChildren(child, url));
    }
    if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
        const { component, href, exactMatch, activeUrl, children: subChildren } = children.props;
        if (component && typeof component !== 'string' && component.props.href) {
            return exactMatch === true || exactMatch === undefined ? component.props.href === url : activeUrl !== undefined && url.includes(activeUrl);
        }
        if (href) {
            return exactMatch === true || exactMatch === undefined ? href === url : activeUrl !== undefined && url.includes(activeUrl);
        }
        if (subChildren) {
            return confirmUrlInChildren(subChildren, url);
        }
    }
    return false;
};
/*
 * Reason behind mapping the children of the horizontal-menu component to the vertical-menu component:
 * The Horizontal menu components will not work inside of Vertical menu on small screens.
 * So, we have to map the children of the horizontal-menu components to the vertical-menu components.
 * We also kept the same names and almost similar props for menuitem and submenu components for easy mapping.
 */ /**
 * Processes children of a HorizontalMenu component to either generate a vertical menu directly
 * from menuData or apply a transformation function to each child.
 *
 * @param {ReactNode} children - The children of the HorizontalMenu component.
 * @param {Function} mapFunction - A function to transform each child that doesn't have menuData.
 * @returns {ReactNode} The processed children suitable for inclusion in a VerticalMenu.
 */ const processMenuChildren = (children, mapFunction)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>{
        // Skip processing for non-React elements
        if (!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return child;
        // If child has menuData prop, create a GenerateVerticalMenu component
        // Otherwise, apply the transformation function to the child
        return child.props.menuData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$GenerateMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GenerateVerticalMenu"], {
            menuData: child.props.menuData
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx",
            lineNumber: 72,
            columnNumber: 35
        }, ("TURBOPACK compile-time value", void 0)) : mapFunction(child);
    });
};
const mapHorizontalToVerticalMenu = (children)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>{
        // If the child is not a valid React element, exclude it from the output
        if (!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) return null;
        // Destructure to separate specific props and rest props for further use
        const { children: childChildren, verticalMenuProps, ...rest } = child.props;
        // Use a switch statement to handle different types of menu items
        switch(child.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"]:
                // Directly transform HorizontalMenuItem to VerticalMenuItem
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                    ...rest,
                    children: childChildren
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx",
                    lineNumber: 95,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"]:
                // Transform HorizontalSubMenu to VerticalSubMenu, recursively transforming its children
                // The rest props from HorizontalSubMenu include all required VerticalSubMenu props like label
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
                    ...rest,
                    children: mapHorizontalToVerticalMenu(childChildren)
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx",
                    lineNumber: 99,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"]:
                // For HorizontalMenu, process its children specifically, then wrap in VerticalMenu
                const transformedChildren = processMenuChildren(childChildren, mapHorizontalToVerticalMenu);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    ...verticalMenuProps || {},
                    children: transformedChildren
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx",
                    lineNumber: 104,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                // For any other type of child, return it without modification
                return child;
        }
    });
};
const renderMenuIcon = (params)=>{
    const { icon, level, active, disabled, styles, renderExpandedMenuItemIcon, isBreakpointReached } = params;
    if (icon && (level === 0 || !isBreakpointReached && level && level > 0)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].icon,
            rootStyles: styles,
            children: icon
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx",
            lineNumber: 120,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (level && level !== 0 && renderExpandedMenuItemIcon && renderExpandedMenuItemIcon.icon !== null && (!renderExpandedMenuItemIcon.level || renderExpandedMenuItemIcon.level >= level)) {
        const iconToRender = typeof renderExpandedMenuItemIcon.icon === 'function' ? renderExpandedMenuItemIcon.icon({
            level,
            active,
            disabled
        }) : renderExpandedMenuItemIcon.icon;
        if (iconToRender) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].icon,
                rootStyles: styles,
                children: iconToRender
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx",
                lineNumber: 140,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
    return null;
};
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavExpandIcon.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledVerticalNavExpandIconWrapper",
    ()=>StyledVerticalNavExpandIconWrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledVerticalNavExpandIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: flex;
  margin-inline-start: 5px;
  ${({ rootStyles })=>rootStyles};
`;
const StyledVerticalNavExpandIcon = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  display: flex;

  & > i,
  & > svg {
    transition: ${({ transitionDuration })=>`transform ${transitionDuration}ms ease-in-out`};
    ${({ open })=>open && 'transform: rotate(90deg);'}

    [dir='rtl'] & {
      transform: rotate(180deg);
      ${({ open })=>open && 'transform: rotate(90deg);'}
    }
  }
`;
const __TURBOPACK__default__export__ = StyledVerticalNavExpandIcon;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenuContent.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuButton.jsx [app-ssr] (ecmascript)");
// Icon Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$ChevronRight$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/svg/ChevronRight.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalMenu.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuLabel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuPrefix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledMenuSuffix.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavExpandIcon.jsx [app-ssr] (ecmascript)");
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
const StyledSubMenu = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].li`
  position: relative;
  inline-size: 100%;
  margin-block-start: 4px;

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].open} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button} {
    background-color: #f3f3f3;
  }

  ${({ menuItemStyles })=>menuItemStyles};
  ${({ rootStyles })=>rootStyles};

  > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button} {
    ${({ level, disabled, active, children, isCollapsed, isPopoutWhenCollapsed })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuButtonStyles"])({
        level,
        active,
        disabled,
        children,
        isCollapsed,
        isPopoutWhenCollapsed
    })};
    ${({ buttonStyles })=>buttonStyles};
  }
`;
const SubMenu = (props, ref)=>{
    // Props
    const { children, className, contentClassName, label, icon, title, prefix, suffix, defaultOpen, level = 0, disabled = false, rootStyles, component, onOpenChange, onClick, onKeyUp, ...rest } = props;
    // States
    const [openWhenCollapsed, setOpenWhenCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isCollapsed, isPopoutWhenCollapsed, isHovered, isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloatingTree"])();
    const { browserScroll, triggerPopout, renderExpandIcon, renderExpandedMenuItemIcon, menuItemStyles, openSubmenu, toggleOpenSubmenu, transitionDuration, openSubmenusRef, popoutMenuOffset, textTruncate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Vars
    // Filter out falsy values from children
    const childNodes = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter(Boolean);
    const mainAxisOffset = popoutMenuOffset && popoutMenuOffset.mainAxis && (typeof popoutMenuOffset.mainAxis === 'function' ? popoutMenuOffset.mainAxis({
        level
    }) : popoutMenuOffset.mainAxis);
    const alignmentAxisOffset = popoutMenuOffset && popoutMenuOffset.alignmentAxis && (typeof popoutMenuOffset.alignmentAxis === 'function' ? popoutMenuOffset.alignmentAxis({
        level
    }) : popoutMenuOffset.alignmentAxis);
    const { refs, floatingStyles, context } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        strategy: 'fixed',
        open: openWhenCollapsed,
        onOpenChange: setOpenWhenCollapsed,
        placement: 'right-start',
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: mainAxisOffset,
                alignmentAxis: alignmentAxisOffset
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                crossAxis: false
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])()
        ],
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"]
    });
    const hover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useHover"])(context, {
        handleClose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["safePolygon"])({
            blockPointerEvents: true
        }),
        restMs: 25,
        enabled: triggerPopout === 'hover',
        delay: {
            open: 75
        } // Delay opening submenu by 75ms
    });
    const click = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useClick"])(context, {
        enabled: triggerPopout === 'click' // Only enable click effect when triggerPopout option is set to 'click'
    });
    const dismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDismiss"])(context);
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRole"])(context, {
        role: 'menu'
    });
    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps, getItemProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useInteractions"])([
        hover,
        click,
        dismiss,
        role
    ]);
    const isSubMenuOpen = openSubmenu?.some((item)=>item.id === id) ?? false;
    const handleSlideToggle = ()=>{
        if (level === 0 && isCollapsed && !isHovered) {
            return;
        }
        toggleOpenSubmenu?.({
            level,
            label,
            active,
            id
        });
        onOpenChange?.(!isSubMenuOpen);
        if (openSubmenusRef?.current && openSubmenusRef?.current.length > 0) openSubmenusRef.current = [];
    };
    const handleOnClick = (event)=>{
        onClick?.(event);
        handleSlideToggle();
    };
    const handleOnKeyUp = (event)=>{
        onKeyUp?.(event);
        if (event.key === 'Enter') {
            handleSlideToggle();
        }
    };
    const getSubMenuItemStyles = (element)=>{
        // If the menuItemStyles prop is provided, get the styles for the specified element.
        if (menuItemStyles) {
            // Define the parameters that are passed to the style functions.
            const params = {
                level,
                disabled,
                active,
                isSubmenu: true,
                open: isSubMenuOpen
            };
            // Get the style function for the specified element.
            const styleFunction = menuItemStyles[element];
            if (styleFunction) {
                // If the style function is a function, call it and return the result.
                // Otherwise, return the style function itself.
                return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction;
            }
        }
    };
    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere in the tree.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleTreeClick = ()=>{
            setOpenWhenCollapsed(false);
        };
        tree?.events.on('click', handleTreeClick);
        return ()=>{
            tree?.events.off('click', handleTreeClick);
        };
    }, [
        tree
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (isCollapsed && level === 0) {
            setOpenWhenCollapsed(false);
        }
    }, [
        isCollapsed,
        level,
        active
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmUrlInChildren"])(children, pathname)) {
            openSubmenusRef?.current.push({
                level,
                label,
                active: true,
                id
            });
        } else {
            if (defaultOpen) {
                openSubmenusRef?.current.push({
                    level,
                    label,
                    active: false,
                    id
                });
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Change active state when the url changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if the current url matches any of the children urls
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["confirmUrlInChildren"])(children, pathname)) {
            setActive(true);
            if (openSubmenusRef?.current.findIndex((submenu)=>submenu.id === id) === -1) {
                openSubmenusRef?.current.push({
                    level,
                    label,
                    active: true,
                    id
                });
            }
        } else {
            setActive(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    /* useEffect(() => {
      console.log(openSubmenu)
    }, [openSubmenu]) */ const submenuContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: isCollapsed && level === 0 && isPopoutWhenCollapsed ? refs.setFloating : contentRef,
        ...isCollapsed && level === 0 && isPopoutWhenCollapsed && getFloatingProps(),
        browserScroll: browserScroll,
        openWhenCollapsed: openWhenCollapsed,
        isPopoutWhenCollapsed: isPopoutWhenCollapsed,
        transitionDuration: transitionDuration,
        open: isSubMenuOpen,
        level: level,
        isCollapsed: isCollapsed,
        isHovered: isHovered,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuContent, contentClassName),
        rootStyles: {
            ...isCollapsed && level === 0 && isPopoutWhenCollapsed && floatingStyles,
            ...getSubMenuItemStyles('subMenuContent')
        },
        children: childNodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(node, {
                ...getItemProps({
                    onClick (event) {
                        if (node.props.children && !Array.isArray(node.props.children)) {
                            node.props.onClick?.(event);
                            tree?.events.emit('click');
                        }
                    }
                }),
                level: level + 1
            }))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
        lineNumber: 274,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return(// eslint-disable-next-line lines-around-comment
    /* Sub Menu */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledSubMenu, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
        }, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].disabled]: disabled
        }, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].open]: isSubMenuOpen
        }, className),
        menuItemStyles: getSubMenuItemStyles('root'),
        level: level,
        isPopoutWhenCollapsed: isPopoutWhenCollapsed,
        disabled: disabled,
        active: active,
        isCollapsed: isCollapsed,
        buttonStyles: getSubMenuItemStyles('button'),
        rootStyles: rootStyles,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: isCollapsed && level === 0 && isPopoutWhenCollapsed && !disabled ? refs.setReference : null,
                onClick: handleOnClick,
                ...isCollapsed && level === 0 && isPopoutWhenCollapsed && !disabled && getReferenceProps(),
                onKeyUp: handleOnKeyUp,
                title: title,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active]: active
                }),
                component: component,
                tabIndex: disabled ? -1 : 0,
                ...rest,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderMenuIcon"])({
                        icon,
                        level,
                        active,
                        disabled,
                        renderExpandedMenuItemIcon,
                        styles: getSubMenuItemStyles('icon'),
                        isBreakpointReached
                    }),
                    prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuPrefix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isHovered: isHovered,
                        isCollapsed: isCollapsed,
                        firstLevel: level === 0,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].prefix,
                        rootStyles: getSubMenuItemStyles('prefix'),
                        children: prefix
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuLabel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].label,
                        rootStyles: getSubMenuItemStyles('label'),
                        textTruncate: textTruncate,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                        lineNumber: 365,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledMenuSuffix$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isHovered: isHovered,
                        isCollapsed: isCollapsed,
                        firstLevel: level === 0,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].suffix,
                        rootStyles: getSubMenuItemStyles('suffix'),
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isCollapsed && !isHovered && level === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StyledVerticalNavExpandIconWrapper"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuExpandIcon,
                        rootStyles: getSubMenuItemStyles('subMenuExpandIcon'),
                        children: renderExpandIcon ? renderExpandIcon({
                            level,
                            disabled,
                            active,
                            open: isSubMenuOpen
                        }) : // eslint-disable-next-line lines-around-comment
                        /* Expanded Arrow Icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            open: isSubMenuOpen,
                            transitionDuration: transitionDuration,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$ChevronRight$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                fontSize: "1rem"
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                                lineNumber: 403,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                            lineNumber: 402,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                lineNumber: 329,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isCollapsed && level === 0 && isPopoutWhenCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingPortal"], {
                children: openWhenCollapsed && submenuContent
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
                lineNumber: 412,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : submenuContent
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx",
        lineNumber: 310,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(SubMenu);
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
;
;
const StyledNavHeader = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  padding: 15px;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${({ transitionDuration })=>`padding-inline ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed, collapsedWidth })=>isCollapsed && !isHovered && `padding-inline: calc((${collapsedWidth}px - 1px - 22px) / 2);`}
`;
const NavHeader = ({ children })=>{
    // Hooks
    const { isHovered, isCollapsed, collapsedWidth, transitionDuration } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledNavHeader, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].header,
        isHovered: isHovered,
        isCollapsed: isCollapsed,
        collapsedWidth: collapsedWidth,
        transitionDuration: transitionDuration,
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavHeader;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/StyledBackdrop.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledBackdrop = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: fixed;
  inset-inline-start: 0;
  inset-block-start: 0;
  inset-inline-end: 0;
  inset-block-end: 0;
  z-index: 1;
  background-color: ${({ backdropColor })=>backdropColor || 'rgba(0, 0, 0, 0.3)'};
  touch-action: none;
`;
const __TURBOPACK__default__export__ = StyledBackdrop;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
const StyledVerticalNav = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].aside`
  ${({ scrollWithContent })=>!scrollWithContent && `
    position: sticky;
    inset-block-start: 0;
    block-size: 100dvh;
  `}
  z-index: 9;

  /* Transition */
  transition-property: inline-size, min-inline-size, margin-inline-start, inset-inline-start;
  transition-duration: ${({ transitionDuration })=>`${transitionDuration}ms`};
  transition-timing-function: ease-in-out;

  /* Width & Min Width & Margin */
  inline-size: ${({ width })=>`${width}px`};
  min-inline-size: ${({ width })=>`${width}px`};
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].collapsed} {
    inline-size: ${({ collapsedWidth })=>`${collapsedWidth}px`};
    min-inline-size: ${({ collapsedWidth })=>`${collapsedWidth}px`};
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].collapsing}, &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].expanding} {
    pointer-events: none;
  }

  /* Collapsed & Toggled */
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].breakpointReached} {
    position: fixed;
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-start: ${({ width })=>`-${width}px`};
    z-index: 100;
    margin: 0;
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].collapsed} {
      inset-inline-start: -${({ collapsedWidth })=>`${collapsedWidth}px`};
    }
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].toggled} {
      inset-inline-start: 0;
    }
  }

  ${({ width, isBreakpointReached })=>!isBreakpointReached && `
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].toggled} {
      margin-inline-start: -${width}px;
    }
  `}

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalNavClasses"].root} .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].root} > ul {
    flex-direction: column;
    align-items: stretch;
  }

  /* User Styles */
  ${({ customStyles })=>customStyles}
`;
const __TURBOPACK__default__export__ = StyledVerticalNav;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavContainer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
;
const StyledVerticalNavContainer = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: relative;
  block-size: 100%;
  inline-size: 100%;
  border-inline-end: 1px solid #efefef;
  .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].hovered} &,
  .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].expanding} & {
    inline-size: ${({ width })=>`${width}px`};
  }

  /* Transition */
  transition-property: inline-size, inset-inline-start;
  transition-duration: ${({ transitionDuration })=>`${transitionDuration}ms`};
  transition-timing-function: ease-in-out;
`;
const __TURBOPACK__default__export__ = StyledVerticalNavContainer;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavBgColorContainer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
;
const StyledVerticalNavBgColorContainer = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  position: relative;
  block-size: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  ${({ backgroundColor })=>backgroundColor && `background-color:${backgroundColor};`}
`;
const __TURBOPACK__default__export__ = StyledVerticalNavBgColorContainer;
}),
"[project]/crediflash-vuexy-next/src/@menu/styles/vertical/verticalNavBgImage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "root": "verticalNavBgImage-module__xGaZRa__root",
});
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useMediaQuery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useMediaQuery.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledBackdrop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/StyledBackdrop.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavContainer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavContainer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavBgColorContainer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavBgColorContainer.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$verticalNavBgImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/verticalNavBgImage.module.css [app-ssr] (css module)");
// Default Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/defaultConfigs.js [app-ssr] (ecmascript)");
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
const VerticalNav = (props)=>{
    // Props
    const { width = 260, collapsedWidth = 80, defaultCollapsed = false, backgroundColor = 'white', backgroundImage, breakpoint = 'lg', customBreakpoint, breakpoints, transitionDuration = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavToggleDuration"], backdropColor, scrollWithContent = false, className, customStyles, children, ...rest } = props;
    // Vars
    const mergedBreakpoints = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$defaultConfigs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultBreakpoints"],
        ...breakpoints
    };
    // Refs
    const verticalNavCollapsedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Hooks
    const { updateVerticalNavState, isCollapsed: isCollapsedContext, width: widthContext, isBreakpointReached: isBreakpointReachedContext, isToggled: isToggledContext, isHovered: isHoveredContext, collapsing: collapsingContext, expanding: expandingContext, isScrollWithContent: isScrollWithContentContext, transitionDuration: transitionDurationContext, isPopoutWhenCollapsed: isPopoutWhenCollapsedContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
    const breakpointReached = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useMediaQuery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(customBreakpoint ?? (breakpoint ? mergedBreakpoints[breakpoint] : breakpoint));
    // UseEffect, update verticalNav state to set initial values and update values on change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        updateVerticalNavState({
            width,
            collapsedWidth,
            transitionDuration,
            isScrollWithContent: scrollWithContent,
            isBreakpointReached: breakpointReached
        });
        if (!breakpointReached) {
            updateVerticalNavState({
                isToggled: false
            });
            verticalNavCollapsedRef.current && updateVerticalNavState({
                isCollapsed: true
            });
        } else {
            if (isCollapsedContext && !verticalNavCollapsedRef.current) {
                verticalNavCollapsedRef.current = true;
            }
            isCollapsedContext && updateVerticalNavState({
                isCollapsed: false
            });
            isHoveredContext && updateVerticalNavState({
                isHovered: false
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        width,
        collapsedWidth,
        scrollWithContent,
        breakpointReached,
        updateVerticalNavState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (defaultCollapsed) {
            updateVerticalNavState({
                isCollapsed: defaultCollapsed,
                isToggled: false
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        defaultCollapsed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>{
            updateVerticalNavState({
                expanding: false,
                collapsing: false
            });
        }, transitionDuration);
        if (!isCollapsedContext && !breakpointReached && verticalNavCollapsedRef.current) {
            verticalNavCollapsedRef.current = false;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isCollapsedContext
    ]);
    // Handle Backdrop(Content Overlay) Click
    const handleBackdropClick = ()=>{
        // Close the verticalNav
        updateVerticalNavState({
            isToggled: false
        });
    };
    // Handle VerticalNav Hover Event
    const handleVerticalNavHover = ()=>{
        /* If verticalNav is collapsed then only hover class should be added to verticalNav
          and hover functionality should work (expand verticalNav width) */ if (isCollapsedContext && !isHoveredContext) {
            updateVerticalNavState({
                isHovered: true
            });
        }
    };
    // Handle VerticalNav Hover Out Event
    const handleVerticalNavHoverOut = ()=>{
        // If verticalNav is collapsed then only remove hover class should contract verticalNav width
        if (isCollapsedContext && isHoveredContext) {
            updateVerticalNavState({
                isHovered: false
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        width: defaultCollapsed && !widthContext ? collapsedWidth : width,
        isBreakpointReached: isBreakpointReachedContext,
        collapsedWidth: collapsedWidth,
        collapsing: collapsingContext,
        expanding: expandingContext,
        customStyles: customStyles,
        scrollWithContent: isScrollWithContentContext,
        transitionDuration: transitionDurationContext,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].root, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].collapsed]: isCollapsedContext,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].toggled]: isToggledContext,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].hovered]: isHoveredContext,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].breakpointReached]: isBreakpointReachedContext,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].scrollWithContent]: isScrollWithContentContext,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].collapsing]: collapsingContext,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].expanding]: expandingContext
        }, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavContainer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                width: widthContext,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].container,
                transitionDuration: transitionDurationContext,
                ...!isPopoutWhenCollapsedContext && isCollapsedContext && !breakpointReached && {
                    onMouseEnter: handleVerticalNavHover,
                    onMouseLeave: handleVerticalNavHoverOut
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavBgColorContainer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].bgColorContainer,
                        backgroundColor: backgroundColor,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    backgroundImage && // eslint-disable-next-line lines-around-comment
                    /* VerticalNav Background Image */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].image, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$verticalNavBgImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root),
                        src: backgroundImage,
                        alt: "verticalNav background"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isToggledContext && breakpointReached && // eslint-disable-next-line lines-around-comment
            /* VerticalNav Backdrop */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$StyledBackdrop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                role: "button",
                tabIndex: 0,
                "aria-label": "backdrop",
                onClick: handleBackdropClick,
                onKeyPress: handleBackdropClick,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].backdrop,
                backdropColor: backdropColor
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx",
                lineNumber: 202,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VerticalNav;
}),
"[project]/crediflash-vuexy-next/src/@menu/svg/Close.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Close = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fontSize: "1.5rem",
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/Close.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/Close.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Close;
}),
"[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircle.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const RadioCircle = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fontSize: "1.5rem",
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M5 12c0 3.859 3.14 7 7 7 3.859 0 7-3.141 7-7s-3.141-7-7-7c-3.86 0-7 3.141-7 7zm12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5 2.243-5 5-5 5 2.243 5 5z"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircle.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircle.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RadioCircle;
}),
"[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircleMarked.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const RadioCircleMarked = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fontSize: "1.5rem",
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircleMarked.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircleMarked.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircleMarked.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RadioCircleMarked;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Icon Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$Close$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/svg/Close.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$RadioCircle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircle.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$RadioCircleMarked$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/svg/RadioCircleMarked.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const NavCollapseIcons = (props)=>{
    // Props
    const { closeIcon, lockedIcon, unlockedIcon, onClick, onClose, ...rest } = props;
    // Hooks
    const { isCollapsed, collapseVerticalNav, isBreakpointReached, toggleVerticalNav } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Handle Lock / Unlock Icon Buttons click
    const handleClick = (action)=>{
        // Setup the verticalNav to be locked or unlocked
        const collapse = action === 'lock' ? false : true;
        // Tell the verticalNav to lock or unlock
        collapseVerticalNav(collapse);
        // Call onClick function if passed
        onClick && onClick();
    };
    // Handle Close button click
    const handleClose = ()=>{
        // Close verticalNav using toggle verticalNav function
        toggleVerticalNav(false);
        // Call onClose function if passed
        onClose && onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isBreakpointReached ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "button",
            tabIndex: 0,
            style: {
                display: 'flex',
                cursor: 'pointer'
            },
            onClick: handleClose,
            ...rest,
            children: closeIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$Close$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx",
                lineNumber: 43,
                columnNumber: 25
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx",
            lineNumber: 42,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "button",
            tabIndex: 0,
            style: {
                display: 'flex',
                cursor: 'pointer'
            },
            onClick: ()=>handleClick('lock'),
            ...rest,
            children: unlockedIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$RadioCircle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx",
                lineNumber: 53,
                columnNumber: 28
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx",
            lineNumber: 46,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "button",
            tabIndex: 0,
            style: {
                display: 'flex',
                cursor: 'pointer'
            },
            onClick: ()=>handleClick('unlock'),
            ...rest,
            children: lockedIcon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$svg$2f$RadioCircleMarked$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx",
                lineNumber: 63,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx",
            lineNumber: 56,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = NavCollapseIcons;
}),
"[project]/crediflash-vuexy-next/src/@menu/vertical-menu/index.jsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Import all Vertical Nav components and export them
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$VerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/VerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$VerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
;
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx [app-ssr] (ecmascript) <export default as NavHeader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx [app-ssr] (ecmascript) <export default as NavCollapseIcons>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavCollapseIcons",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx [app-ssr] (ecmascript)");
}),
"[project]/crediflash-vuexy-next/src/@core/styles/vertical/menuItemStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
const menuItemStyles = (verticalNavOptions, theme)=>{
    // Vars
    const { isCollapsed, isHovered, isPopoutWhenCollapsed, transitionDuration } = verticalNavOptions;
    const popoutCollapsed = isPopoutWhenCollapsed && isCollapsed;
    const popoutExpanded = isPopoutWhenCollapsed && !isCollapsed;
    const collapsedNotHovered = isCollapsed && !isHovered;
    return {
        root: ({ level })=>({
                ...!isPopoutWhenCollapsed || popoutExpanded || popoutCollapsed && level === 0 ? {
                    marginBlockStart: theme.spacing(1.5)
                } : {
                    marginBlockStart: 0
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].open} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}, &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                    backgroundColor: 'var(--mui-palette-action-selected) !important'
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].disabled} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                    color: 'var(--mui-palette-text-disabled)',
                    '& *': {
                        color: 'inherit'
                    }
                },
                [`&:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].subMenuRoot}) > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                    ...popoutCollapsed && level > 0 ? {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)',
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].icon}`]: {
                            color: 'var(--mui-palette-primary-main)'
                        }
                    } : {
                        color: 'var(--mui-palette-primary-contrastText)',
                        background: theme.direction === 'ltr' ? `linear-gradient(270deg,
                    rgb(var(--mui-palette-primary-mainChannel) / 0.7) 0%,
                    var(--mui-palette-primary-main) 100%) !important` : `linear-gradient(270deg,
                     var(--mui-palette-primary-main) 100%,
                     rgb(var(--mui-palette-primary-mainChannel) / 0.7) 100%) !important`,
                        boxShadow: 'var(--mui-customShadows-primary-sm)',
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].icon}`]: {
                            color: 'inherit'
                        }
                    }
                }
            }),
        button: ({ level, active })=>({
                paddingBlock: '8px',
                paddingInline: '12px',
                borderRadius: 'var(--border-radius)',
                ...!(isCollapsed && !isHovered) && {
                    '&:has(.MuiChip-root)': {
                        paddingBlock: theme.spacing(1.75)
                    }
                },
                ...(!isPopoutWhenCollapsed || popoutExpanded || popoutCollapsed && level === 0) && {
                    borderRadius: 'var(--mui-shape-borderRadius)',
                    transition: `padding-inline-start ${transitionDuration}ms ease-in-out`
                },
                ...!active && {
                    '&:hover, &:focus-visible': {
                        backgroundColor: 'var(--mui-palette-action-hover)'
                    },
                    '&[aria-expanded="true"]': {
                        backgroundColor: 'var(--mui-palette-action-selected)'
                    }
                }
            }),
        icon: ({ level })=>({
                transition: `margin-inline-end ${transitionDuration}ms ease-in-out`,
                ...level === 0 && {
                    fontSize: '1.375rem'
                },
                ...level > 0 && {
                    fontSize: '0.75rem',
                    color: 'var(--mui-palette-text-secondary)'
                },
                ...level === 0 && {
                    marginInlineEnd: theme.spacing(2)
                },
                ...level > 0 && {
                    marginInlineEnd: theme.spacing(3.5)
                },
                ...level === 1 && !popoutCollapsed && {
                    marginInlineStart: theme.spacing(1.5)
                },
                ...level > 1 && {
                    marginInlineStart: theme.spacing((popoutCollapsed ? 0 : 1.5) + 2.5 * (level - 1))
                },
                ...collapsedNotHovered && {
                    marginInlineEnd: 0
                },
                ...popoutCollapsed && level > 0 && {
                    marginInlineEnd: theme.spacing(2)
                },
                '& > i, & > svg': {
                    fontSize: 'inherit'
                }
            }),
        prefix: {
            marginInlineEnd: theme.spacing(2)
        },
        label: ({ level })=>({
                ...(!isPopoutWhenCollapsed || popoutExpanded || popoutCollapsed && level === 0) && {
                    transition: `opacity ${transitionDuration}ms ease-in-out`,
                    ...collapsedNotHovered && {
                        opacity: 0
                    }
                }
            }),
        suffix: {
            marginInlineStart: theme.spacing(2)
        },
        subMenuExpandIcon: {
            fontSize: '1.25rem',
            marginInlineStart: theme.spacing(2),
            '& i, & svg': {
                fontSize: 'inherit'
            }
        },
        subMenuContent: ({ level })=>({
                zIndex: 'calc(var(--drawer-z-index) + 1)',
                borderRadius: 'var(--border-radius)',
                backgroundColor: popoutCollapsed ? 'var(--mui-palette-background-paper)' : 'transparent',
                ...popoutCollapsed && {
                    '& > ul, & > div > ul': {
                        [`& > li:not(:last-child), & > li > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}:not(:last-child)`]: {
                            marginBlockEnd: `${theme.spacing(0.5)} !important`
                        }
                    },
                    ...level === 0 && {
                        boxShadow: 'var(--mui-customShadows-sm)',
                        '[data-skin="bordered"] ~ [data-floating-ui-portal] &': {
                            boxShadow: 'none',
                            border: '1px solid var(--mui-palette-divider)'
                        },
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                            paddingInline: theme.spacing(4)
                        },
                        padding: theme.spacing(2)
                    }
                }
            })
    };
};
const __TURBOPACK__default__export__ = menuItemStyles;
}),
"[project]/crediflash-vuexy-next/src/@core/styles/vertical/menuSectionStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
const menuSectionStyles = (verticalNavOptions, theme)=>{
    // Vars
    const { isCollapsed, isHovered } = verticalNavOptions;
    const collapsedNotHovered = isCollapsed && !isHovered;
    return {
        root: {
            marginBlockStart: theme.spacing(0),
            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionContent}`]: {
                color: 'var(--mui-palette-text-disabled)',
                paddingInline: '12px !important',
                paddingBlock: `${theme.spacing(collapsedNotHovered ? 3.625 : 1.5)} !important`,
                marginBlockStart: theme.spacing(3.5),
                '&:before': {
                    content: '""',
                    blockSize: 1,
                    inlineSize: '1.375rem',
                    backgroundColor: 'var(--mui-palette-text-disabled)'
                },
                ...!collapsedNotHovered && {
                    '&:before': {
                        content: 'none'
                    }
                },
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].menuSectionLabel}`]: {
                    flexGrow: 0,
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    lineHeight: 1.38462,
                    letterSpacing: '0.4px',
                    ...collapsedNotHovered && {
                        display: 'none'
                    }
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = menuSectionStyles;
}),
"[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-perfect-scrollbar/lib/index.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/vertical-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/SubMenu.jsx [app-ssr] (ecmascript) <export default as SubMenu>");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavExpandIcon.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuItemStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/vertical/menuItemStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuSectionStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/vertical/menuSectionStyles.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const RenderExpandIcon = ({ open, transitionDuration })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        transitionDuration: transitionDuration,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "tabler-chevron-right"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const VerticalMenu = ({ scrollMenu })=>{
    // Hooks
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const verticalNavOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Vars
    const { isBreakpointReached, transitionDuration } = verticalNavOptions;
    const ScrollWrapper = isBreakpointReached ? 'div' : __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollWrapper, {
        ...isBreakpointReached ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: (container)=>scrollMenu(container, false)
        } : {
            options: {
                wheelPropagation: false,
                suppressScrollX: true
            },
            onScrollY: (container)=>scrollMenu(container, true)
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            popoutMenuOffset: {
                mainAxis: 23
            },
            menuItemStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuItemStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(verticalNavOptions, theme),
            renderExpandIcon: ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderExpandIcon, {
                    open: open,
                    transitionDuration: transitionDuration
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 50,
                    columnNumber: 41
                }, void 0),
            renderExpandedMenuItemIcon: {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-circle text-xs"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 51,
                    columnNumber: 45
                }, void 0)
            },
            menuSectionStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuSectionStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(verticalNavOptions, theme),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                    href: "/home",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-smart-home"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                        lineNumber: 54,
                        columnNumber: 38
                    }, void 0),
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                    href: "/analytics",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-chart-bar"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                        lineNumber: 57,
                        columnNumber: 43
                    }, void 0),
                    children: "Analytics"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
                    label: "Clientes",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-users"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                        lineNumber: 61,
                        columnNumber: 41
                    }, void 0),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            href: "/clientes/nuevo",
                            children: "Registrar cliente"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            href: "/clientes",
                            children: "Listado de clientes"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
                    label: "Solicitudes",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-file-description"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                        lineNumber: 66,
                        columnNumber: 44
                    }, void 0),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            href: "/solicitudes/nueva",
                            children: "Ingresar solicitud"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            href: "/solicitudes",
                            children: "Listado de solicitudes"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$SubMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SubMenu$3e$__["SubMenu"], {
                    label: "Cuotas",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-cash-banknote"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                        lineNumber: 71,
                        columnNumber: 39
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                        href: "/cuotas",
                        children: "Registro de cuotas"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VerticalMenu;
}),
"[project]/crediflash-vuexy-next/src/@core/svg/Logo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Logo = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "1.4583em",
        height: "1em",
        viewBox: "0 0 56 38",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1.5",
                y: "1.5",
                width: "53",
                height: "35",
                rx: "10",
                fill: "currentColor",
                fillOpacity: "0.12"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/svg/Logo.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.5 19.5C13.5 12.5964 18.5964 7.5 25.5 7.5H40.5V13H25.5C21.5294 13 19 15.5294 19 19.5C19 23.4706 21.5294 26 25.5 26H33.5V31.5H25.5C18.5964 31.5 13.5 26.4036 13.5 19.5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/svg/Logo.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M35 16H43V22H35V16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/@core/svg/Logo.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/svg/Logo.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$svg$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/svg/Logo.jsx [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LogoText = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: ${({ color })=>color ?? 'var(--mui-palette-text-primary)'};
  font-size: 1.375rem;
  line-height: 1.09091;
  font-weight: 700;
  letter-spacing: 0.25px;
  transition: ${({ transitionDuration })=>`margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed, isBreakpointReached })=>!isBreakpointReached && isCollapsed && !isHovered ? 'opacity: 0; margin-inline-start: 0;' : 'opacity: 1; margin-inline-start: 12px;'}
`;
const Logo = ({ color })=>{
    // Refs
    const logoTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const { isHovered, transitionDuration, isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const { layout } = settings;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (layout !== 'collapsed') {
            return;
        }
        if (logoTextRef && logoTextRef.current) {
            if (!isBreakpointReached && layout === 'collapsed' && !isHovered) {
                logoTextRef.current?.classList.add('hidden');
            } else {
                logoTextRef.current.classList.remove('hidden');
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isHovered,
        layout,
        isBreakpointReached
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$svg$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "text-2xl text-primary"
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoText, {
                color: color,
                ref: logoTextRef,
                isHovered: isHovered,
                isCollapsed: layout === 'collapsed',
                transitionDuration: transitionDuration,
                isBreakpointReached: isBreakpointReached,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].templateName
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/crediflash-vuexy-next/src/@core/styles/vertical/navigationCustomStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
const navigationCustomStyles = (verticalNavOptions, theme)=>{
    // Vars
    const { collapsedWidth, isCollapsed, isHovered, transitionDuration } = verticalNavOptions;
    const collapsedHovered = isCollapsed && isHovered;
    const collapsedNotHovered = isCollapsed && !isHovered;
    return {
        color: 'var(--mui-palette-text-primary)',
        zIndex: 'var(--drawer-z-index) !important',
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].header}`]: {
            paddingBlock: theme.spacing(5),
            paddingInline: theme.spacing(5.5, 4),
            ...collapsedNotHovered && {
                paddingInline: theme.spacing((collapsedWidth - 35) / 8),
                '& a': {
                    transform: `translateX(-${22 - (collapsedWidth - 29) / 2}px)`
                }
            },
            '& a': {
                transition: `transform ${transitionDuration}ms ease`
            }
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].container}`]: {
            transition: theme.transitions.create([
                'inline-size',
                'inset-inline-start',
                'box-shadow'
            ], {
                duration: transitionDuration,
                easing: 'ease-in-out'
            }),
            borderColor: 'transparent',
            boxShadow: 'var(--mui-customShadows-sm)',
            '[data-skin="bordered"] &': {
                boxShadow: 'none',
                ...collapsedHovered && {
                    boxShadow: 'var(--mui-customShadows-sm)'
                },
                borderColor: 'var(--mui-palette-divider)'
            }
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].root}`]: {
            paddingBlock: theme.spacing(1),
            paddingInline: theme.spacing(3)
        },
        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalNavClasses"].backdrop}`]: {
            backgroundColor: 'var(--backdrop-color)'
        }
    };
};
const __TURBOPACK__default__export__ = navigationCustomStyles;
}),
"[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/ThemeProviderWithVars.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/vertical-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavHeader$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx [app-ssr] (ecmascript) <export default as NavHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavCollapseIcons$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx [app-ssr] (ecmascript) <export default as NavCollapseIcons>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$vertical$2f$VerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/vertical/VerticalMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$navigationCustomStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/vertical/navigationCustomStyles.js [app-ssr] (ecmascript)");
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
const StyledBoxForShadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        top: 60,
        left: -8,
        zIndex: 2,
        opacity: 0,
        position: 'absolute',
        pointerEvents: 'none',
        width: 'calc(100% + 15px)',
        height: theme.mixins.toolbar.minHeight,
        transition: 'opacity .15s ease-in-out',
        background: `linear-gradient(var(--mui-palette-background-paper) ${theme.direction === 'rtl' ? '95%' : '5%'}, rgb(var(--mui-palette-background-paperChannel) / 0.85) 30%, rgb(var(--mui-palette-background-paperChannel) / 0.5) 65%, rgb(var(--mui-palette-background-paperChannel) / 0.3) 75%, transparent)`,
        '&.scrolled': {
            opacity: 1
        }
    }));
const Navigation = (props)=>{
    // Props
    const { mode } = props;
    // Hooks
    const verticalNavOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { updateSettings, settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const { mode: muiMode, systemMode: muiSystemMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProviderWithVars$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useColorScheme"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    // Refs
    const shadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Vars
    const { isCollapsed, isHovered, collapseVerticalNav, isBreakpointReached } = verticalNavOptions;
    const isSemiDark = settings.semiDark;
    const currentMode = muiMode === 'system' ? muiSystemMode : muiMode || mode;
    const isDark = currentMode === 'dark';
    const scrollMenu = (container, isPerfectScrollbar)=>{
        container = isBreakpointReached || !isPerfectScrollbar ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains('scrolled')) {
                // @ts-ignore
                shadowRef.current.classList.add('scrolled');
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove('scrolled');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (settings.layout === 'collapsed') {
            collapseVerticalNav(true);
        } else {
            collapseVerticalNav(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        settings.layout
    ]);
    return(// eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$vertical$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        customStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$navigationCustomStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(verticalNavOptions, theme),
        collapsedWidth: 71,
        backgroundColor: "var(--mui-palette-background-paper)",
        ...isSemiDark && !isDark && {
            'data-dark': ''
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavHeader$3e$__["NavHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !(isCollapsed && !isHovered) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavCollapseIcons$3e$__["NavCollapseIcons"], {
                        lockedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-circle-dot text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, void 0),
                        unlockedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-circle text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                            lineNumber: 106,
                            columnNumber: 27
                        }, void 0),
                        closeIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-x text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                            lineNumber: 107,
                            columnNumber: 24
                        }, void 0),
                        onClick: ()=>updateSettings({
                                layout: !isCollapsed ? 'collapsed' : 'vertical'
                            })
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledBoxForShadow, {
                ref: shadowRef
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$vertical$2f$VerticalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                scrollMenu: scrollMenu
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/Navigation.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = Navigation;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// Next Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/react-perfect-scrollbar/lib/index.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavHeader.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/vertical-menu/NavCollapseIcons.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuUtils.jsx [app-ssr] (ecmascript)");
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
const StyledBoxForShadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        top: 60,
        left: -8,
        zIndex: 2,
        opacity: 0,
        position: 'absolute',
        pointerEvents: 'none',
        width: 'calc(100% + 15px)',
        height: theme.mixins.toolbar.minHeight,
        transition: 'opacity .15s ease-in-out',
        background: `linear-gradient(var(--mui-palette-background-paper) ${theme.direction === 'rtl' ? '95%' : '5%'}, rgb(var(--mui-palette-background-paperChannel) / 0.85) 30%, rgb(var(--mui-palette-background-paperChannel) / 0.5) 65%, rgb(var(--mui-palette-background-paperChannel) / 0.3) 75%, transparent)`,
        '&.scrolled': {
            opacity: 1
        }
    }));
const VerticalNavContent = ({ children })=>{
    // Hooks
    const { isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Refs
    const shadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Vars
    const ScrollWrapper = isBreakpointReached ? 'div' : __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$react$2d$perfect$2d$scrollbar$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    const scrollMenu = (container, isPerfectScrollbar)=>{
        container = isBreakpointReached || !isPerfectScrollbar ? container.target : container;
        if (shadowRef && container.scrollTop > 0) {
            // @ts-ignore
            if (!shadowRef.current.classList.contains('scrolled')) {
                // @ts-ignore
                shadowRef.current.classList.add('scrolled');
            }
        } else {
            // @ts-ignore
            shadowRef.current.classList.remove('scrolled');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$vertical$2d$menu$2f$NavCollapseIcons$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        lockedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-circle-dot text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                            lineNumber: 72,
                            columnNumber: 23
                        }, void 0),
                        unlockedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-circle text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, void 0),
                        closeIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-x text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                            lineNumber: 74,
                            columnNumber: 22
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledBoxForShadow, {
                ref: shadowRef
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollWrapper, {
                ...isBreakpointReached ? {
                    className: 'bs-full overflow-y-auto overflow-x-hidden',
                    onScroll: (container)=>scrollMenu(container, false)
                } : {
                    options: {
                        wheelPropagation: false,
                        suppressScrollX: true
                    },
                    onScrollY: (container)=>scrollMenu(container, true)
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuUtils$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapHorizontalToVerticalMenu"])(children)
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = VerticalNavContent;
}),
"[project]/crediflash-vuexy-next/src/@core/styles/horizontal/menuItemStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/utils/menuClasses.js [app-ssr] (ecmascript)");
;
const menuItemStyles = (theme, iconClass)=>({
        root: ({ level })=>({
                ...level === 0 && {
                    borderRadius: 6
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].open} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                    backgroundColor: 'var(--mui-palette-action-selected) !important'
                },
                ...level === 0 ? {
                    [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                        color: 'var(--mui-palette-primary-contrastText) !important',
                        background: theme.direction === 'ltr' ? `linear-gradient(270deg,
                  rgb(var(--mui-palette-primary-mainChannel) / 0.7) 0%,
                  var(--mui-palette-primary-main) 100%) !important` : `linear-gradient(270deg,
                  var(--mui-palette-primary-main) 100%,
                  rgb(var(--mui-palette-primary-mainChannel) / 0.7) 100%) !important`
                    }
                } : {
                    [`&:not([aria-expanded]) > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                        backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
                        color: 'var(--mui-palette-primary-main)'
                    },
                    [`&[aria-expanded] > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}`]: {
                        backgroundColor: 'var(--mui-palette-action-selected) !important'
                    }
                },
                [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].disabled} > .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].button}`]: {
                    color: 'var(--mui-palette-text-disabled)',
                    '& *': {
                        color: 'inherit'
                    }
                }
            }),
        button: {
            borderRadius: 'var(--border-radius)',
            paddingInline: theme.spacing(4),
            '&:not(:has(.MuiChip-root))': {
                paddingBlock: theme.spacing(2)
            },
            '&:has(.MuiChip-root)': {
                paddingBlock: theme.spacing(1.75)
            },
            [`&:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}):hover, &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active}):focus-visible, &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active})[aria-expanded="true"]`]: {
                backgroundColor: 'var(--mui-palette-action-hover)'
            }
        },
        icon: ({ level })=>({
                marginInlineEnd: theme.spacing(2),
                ...level < 2 ? {
                    fontSize: '1.375rem'
                } : {
                    fontSize: '0.75rem',
                    color: 'var(--mui-palette-text-secondary)'
                },
                '& > i, & > svg': {
                    fontSize: 'inherit'
                },
                [`& .${iconClass}`]: {
                    fontSize: '0.75rem',
                    color: 'var(--mui-palette-text-secondary)',
                    ...level === 1 && {
                        marginInline: theme.spacing(1.25)
                    },
                    [`.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$utils$2f$menuClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["menuClasses"].active} &`]: {
                        color: 'var(--mui-palette-primary-main)'
                    }
                }
            }),
        prefix: {
            marginInlineEnd: theme.spacing(2)
        },
        suffix: {
            marginInlineStart: theme.spacing(2)
        },
        subMenuStyles: {
            zIndex: 'calc(var(--header-z-index) + 1)'
        },
        subMenuExpandIcon: {
            fontSize: '1.25rem',
            marginInlineStart: theme.spacing(2),
            '& i, & svg': {
                fontSize: 'inherit'
            }
        },
        subMenuContent: {
            borderRadius: 'var(--border-radius)',
            backgroundColor: 'var(--mui-palette-background-paper)',
            boxShadow: 'var(--mui-customShadows-lg)',
            '[data-skin="bordered"] &': {
                boxShadow: 'none',
                border: '1px solid var(--mui-palette-divider)'
            },
            '& > ul, & > div > ul': {
                padding: theme.spacing(2),
                '& > li:not(:last-child)': {
                    marginBlockEnd: theme.spacing(0.5)
                }
            }
        }
    });
const __TURBOPACK__default__export__ = menuItemStyles;
}),
"[project]/crediflash-vuexy-next/src/@core/styles/horizontal/menuRootStyles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const menuRootStyles = (theme)=>{
    return {
        '& > ul > li:not(:last-of-type)': {
            marginInlineEnd: theme.spacing(1.5)
        }
    };
};
const __TURBOPACK__default__export__ = menuRootStyles;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$horizontal$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/horizontal-menu/index.jsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/Menu.jsx [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/components/horizontal-menu/MenuItem.jsx [app-ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$VerticalNavContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/horizontal/VerticalNavContent.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/horizontal/StyledHorizontalNavExpandIcon.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/styles/vertical/StyledVerticalNavExpandIcon.jsx [app-ssr] (ecmascript)");
// Style Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$horizontal$2f$menuItemStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/horizontal/menuItemStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$horizontal$2f$menuRootStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/horizontal/menuRootStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$navigationCustomStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/vertical/navigationCustomStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuItemStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/vertical/menuItemStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuSectionStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/styles/vertical/menuSectionStyles.js [app-ssr] (ecmascript)");
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
const RenderExpandIcon = ({ level })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$horizontal$2f$StyledHorizontalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        level: level,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "tabler-chevron-right"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
            lineNumber: 24,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const RenderVerticalExpandIcon = ({ open, transitionDuration })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$styles$2f$vertical$2f$StyledVerticalNavExpandIcon$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        transitionDuration: transitionDuration,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "tabler-chevron-right"
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const HorizontalMenu = ()=>{
    // Hooks
    const verticalNavOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    // Vars
    const { transitionDuration } = verticalNavOptions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$horizontal$2d$menu$2f$index$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        switchToVertical: true,
        verticalNavContent: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$VerticalNavContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        verticalNavProps: {
            customStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$navigationCustomStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(verticalNavOptions, theme),
            backgroundColor: 'var(--mui-palette-background-paper)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$Menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
            rootStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$horizontal$2f$menuRootStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme),
            renderExpandIcon: ({ level })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderExpandIcon, {
                    level: level
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                    lineNumber: 53,
                    columnNumber: 42
                }, void 0),
            menuItemStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$horizontal$2f$menuItemStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme, 'tabler-circle'),
            renderExpandedMenuItemIcon: {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "tabler-circle text-xs"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                    lineNumber: 55,
                    columnNumber: 45
                }, void 0)
            },
            popoutMenuOffset: {
                mainAxis: ({ level })=>level && level > 0 ? 14 : 12,
                alignmentAxis: 0
            },
            verticalMenuProps: {
                menuItemStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuItemStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(verticalNavOptions, theme),
                renderExpandIcon: ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RenderVerticalExpandIcon, {
                        open: open,
                        transitionDuration: transitionDuration
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, void 0),
                renderExpandedMenuItemIcon: {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-circle text-xs"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                        lineNumber: 65,
                        columnNumber: 47
                    }, void 0)
                },
                menuSectionStyles: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$styles$2f$vertical$2f$menuSectionStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(verticalNavOptions, theme)
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                    href: "/",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-smart-home"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                        lineNumber: 69,
                        columnNumber: 34
                    }, void 0),
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$components$2f$horizontal$2d$menu$2f$MenuItem$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                    href: "/about",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-info-circle"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                        lineNumber: 72,
                        columnNumber: 39
                    }, void 0),
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HorizontalMenu;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/Navigation.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$HorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/horizontal/HorizontalMenu.jsx [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const StyledDiv = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  ${({ isContentCompact, isBreakpointReached })=>!isBreakpointReached && `
    padding: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;

    ${isContentCompact && `
      margin-inline: auto;
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    `}
  `}
`;
const Navigation = ()=>{
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const { isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Vars
    const headerContentCompact = settings.navbarContentWidth === 'compact';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...!isBreakpointReached && {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navigation, 'relative flex border-bs')
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledDiv, {
            isContentCompact: headerContentCompact,
            isBreakpointReached: isBreakpointReached,
            ...!isBreakpointReached && {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navigationContentWrapper, 'flex items-center is-full plb-2')
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$HorizontalMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Navigation.jsx",
                lineNumber: 55,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Navigation.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Navigation.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navigation;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavToggle.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useVerticalNav.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)");
;
;
;
const NavToggle = ()=>{
    // Hooks
    const { toggleVerticalNav } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useVerticalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Toggle Vertical Nav
    const handleClick = ()=>{
        toggleVerticalNav();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isBreakpointReached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "tabler-menu-2 cursor-pointer",
            onClick: handleClick
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavToggle.jsx",
            lineNumber: 19,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = NavToggle;
}),
"[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// React Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Popper/Popper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Fade/Fade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Paper/Paper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/ClickAwayListener/ClickAwayListener.js [app-ssr] (ecmascript) <export ClickAwayListener as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
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
const ModeDropdown = ()=>{
    // States
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tooltipOpen, setTooltipOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const { settings, updateSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const handleClose = ()=>{
        setOpen(false);
        setTooltipOpen(false);
    };
    const handleToggle = ()=>{
        setOpen((prevOpen)=>!prevOpen);
    };
    const handleModeSwitch = (mode)=>{
        handleClose();
        if (settings.mode !== mode) {
            updateSettings({
                mode: mode
            });
        }
    };
    const getModeIcon = ()=>{
        if (settings.mode === 'system') {
            return 'tabler-device-laptop';
        } else if (settings.mode === 'dark') {
            return 'tabler-moon-stars';
        } else {
            return 'tabler-sun';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: settings.mode + ' Mode',
                onOpen: ()=>setTooltipOpen(true),
                onClose: ()=>setTooltipOpen(false),
                open: open ? false : tooltipOpen ? true : false,
                slotProps: {
                    popper: {
                        className: 'capitalize'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    ref: anchorRef,
                    onClick: handleToggle,
                    className: "text-textPrimary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: getModeIcon()
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                transition: true,
                disablePortal: true,
                placement: "bottom-start",
                anchorEl: anchorRef.current,
                className: "min-is-[160px] !mbs-3 z-[1]",
                children: ({ TransitionProps, placement })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...TransitionProps,
                        style: {
                            transformOrigin: placement === 'bottom-start' ? 'left top' : 'right top'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__["default"], {
                                onClickAway: handleClose,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onKeyDown: handleClose,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "gap-3",
                                            onClick: ()=>handleModeSwitch('light'),
                                            selected: settings.mode === 'light',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "tabler-sun"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Light"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "gap-3",
                                            onClick: ()=>handleModeSwitch('dark'),
                                            selected: settings.mode === 'dark',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "tabler-moon-stars"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Dark"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "gap-3",
                                            onClick: ()=>handleModeSwitch('system'),
                                            selected: settings.mode === 'system',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "tabler-device-laptop"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "System"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ModeDropdown;
}),
"[project]/crediflash-vuexy-next/src/lib/auth/session.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const TOKEN_KEY = 'cf_token';
const USER_KEY = 'cf_analista';
const isBrowser = ()=>("TURBOPACK compile-time value", "undefined") !== 'undefined';
const setSession = ({ token, analista })=>{
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
};
const getToken = ()=>{
    if (!isBrowser()) return '';
    //TURBOPACK unreachable
    ;
};
const getAnalista = ()=>{
    if (!isBrowser()) return null;
    //TURBOPACK unreachable
    ;
    const raw = undefined;
};
const clearSession = ()=>{
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
};
const isAuthenticated = ()=>Boolean(getToken());
}),
"[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Badge/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/ClickAwayListener/ClickAwayListener.js [app-ssr] (ecmascript) <export ClickAwayListener as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Fade/Fade.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Paper/Paper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Popper/Popper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/lib/auth/session.js [app-ssr] (ecmascript)");
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
const BadgeContentSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')({
    width: 8,
    height: 8,
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'var(--mui-palette-success-main)',
    boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
});
const getInitials = (analista)=>{
    const nombre = analista?.nombre || '';
    const apellido = analista?.apellido || '';
    return `${nombre.slice(0, 1)}${apellido.slice(0, 1)}`.toUpperCase() || 'AN';
};
const UserDropdown = ()=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analista, setAnalista] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnalista((0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnalista"])());
    }, []);
    const handleDropdownOpen = ()=>{
        setOpen((previous)=>!previous);
    };
    const handleDropdownClose = (event, url)=>{
        if (url) {
            router.push(url);
        }
        if (anchorRef.current && anchorRef.current.contains(event?.target)) {
            return;
        }
        setOpen(false);
    };
    const handleUserLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSession"])();
        router.replace('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: anchorRef,
                overlap: "circular",
                badgeContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BadgeContentSpan, {
                    onClick: handleDropdownOpen
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                    lineNumber: 79,
                    columnNumber: 23
                }, void 0),
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                className: "mis-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    ref: anchorRef,
                    onClick: handleDropdownOpen,
                    className: "cursor-pointer bs-[38px] is-[38px]",
                    children: getInitials(analista)
                }, void 0, false, {
                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popper$2f$Popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                transition: true,
                disablePortal: true,
                placement: "bottom-end",
                anchorEl: anchorRef.current,
                className: "min-is-[240px] !mbs-3 z-[1]",
                children: ({ TransitionProps, placement })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...TransitionProps,
                        style: {
                            transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: settings.skin === 'bordered' ? 'border shadow-none' : 'shadow-lg',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ClickAwayListener$2f$ClickAwayListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__ClickAwayListener__as__default$3e$__["default"], {
                                onClickAway: (event)=>handleDropdownClose(event),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center plb-2 pli-6 gap-2",
                                            tabIndex: -1,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: getInitials(analista)
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "font-medium",
                                                            color: "text.primary",
                                                            children: [
                                                                analista?.nombre,
                                                                analista?.apellido
                                                            ].filter(Boolean).join(' ') || 'Analista'
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                            lineNumber: 109,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            variant: "caption",
                                                            children: analista?.rol || 'ANALISTA'
                                                        }, void 0, false, {
                                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "mlb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "mli-2 gap-3",
                                            onClick: (event)=>handleDropdownClose(event, '/profile'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "tabler-user"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    color: "text.primary",
                                                    children: "My Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "mli-2 gap-3",
                                            onClick: (event)=>handleDropdownClose(event, '/settings'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "tabler-settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    color: "text.primary",
                                                    children: "Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center plb-2 pli-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                fullWidth: true,
                                                variant: "contained",
                                                color: "error",
                                                size: "small",
                                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "tabler-logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 32
                                                }, void 0),
                                                onClick: handleUserLogout,
                                                sx: {
                                                    '& .MuiButton-endIcon': {
                                                        marginInlineStart: 1.5
                                                    }
                                                },
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = UserDropdown;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$NavToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavToggle.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/Logo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$ModeDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$UserDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const NavbarContent = ()=>{
    // Hooks
    const { isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbarContent, 'flex items-center justify-between gap-4 is-full'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$NavToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isBreakpointReached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$Logo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
                        lineNumber: 29,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$ModeDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$UserDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavbarContent;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
const Navbar = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbar, 'flex items-center justify-between is-full'),
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Navbar.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/horizontal/StyledHeader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
const StyledHeader = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].header`
  box-shadow: var(--mui-customShadows-sm);

  [data-skin='bordered'] & {
    box-shadow: none;
    border-block-end: 1px solid var(--border-color);
  }

  &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerBlur}) {
    background-color: var(--mui-palette-background-paper);
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerBlur} {
    backdrop-filter: blur(6px);
    background-color: rgb(var(--background-color-rgb) / 0.88);
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerContentCompact} .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbar} {
    margin-inline: auto;
    max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
  }

  .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].navbar} {
    position: relative;
    min-block-size: var(--header-height);
    padding-block: 8px;
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledHeader;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/styles/horizontal/StyledHeader.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const Header = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    // Vars
    const { navbarContentWidth } = settings;
    const headerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'fixed';
    const headerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'static';
    const headerBlur = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.blur === true;
    const headerContentCompact = navbarContentWidth === 'compact';
    const headerContentWide = navbarContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        theme: theme,
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].header, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerFixed]: headerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerStatic]: headerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerBlur]: headerBlur,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerContentCompact]: headerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].headerContentWide]: headerContentWide
        }),
        children: children
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Header.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$Navigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/horizontal/Navigation.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$NavbarContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/horizontal/NavbarContent.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$components$2f$horizontal$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$components$2f$horizontal$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Header.jsx [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@menu/hooks/useHorizontalNav.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Header = ()=>{
    // Hooks
    const { isBreakpointReached } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$menu$2f$hooks$2f$useHorizontalNav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$components$2f$horizontal$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$components$2f$horizontal$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$NavbarContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Header.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Header.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isBreakpointReached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$Navigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Header.jsx",
                        lineNumber: 22,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Header.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isBreakpointReached && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$horizontal$2f$Navigation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/horizontal/Header.jsx",
                lineNumber: 24,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/vertical/StyledHeader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
const StyledHeader = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].header`
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  shrink: 0;
  min-block-size: var(--header-height);

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerContentCompact} {
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      margin-inline: auto;
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      max-inline-size: calc(${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px - ${2 * __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px);
    }

    .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);

    &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur}).scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur}).scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}.scrolled .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      box-shadow: var(--mui-customShadows-sm);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-inline: 1px solid var(--border-color);
        border-block-end: 1px solid var(--border-color);
      }
    }
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached} .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      border-end-start-radius: var(--border-radius);
      border-end-end-radius: var(--border-radius);
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}, &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating} {
      pointer-events: none;

      & .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
        pointer-events: auto;
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur} {
      &.scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached},
        &.scrolled.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
        .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
        &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
        .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
        backdrop-filter: blur(6px);
        background-color: rgb(var(--background-color-rgb) / 0.88);
      }

      &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating} {
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          inset-block-start: 0;
          inset-inline: 0;
          block-size: 100%;
          background: linear-gradient(
            180deg,
            rgb(var(--mui-palette-background-defaultChannel) / 0.7) 44%,
            rgb(var(--mui-palette-background-defaultChannel) / 0.43) 73%,
            rgb(var(--mui-palette-background-defaultChannel) / 0)
          );
          backdrop-filter: blur(10px);
          mask: linear-gradient(
            var(--mui-palette-background-default),
            var(--mui-palette-background-default) 18%,
            transparent 100%
          );
        }
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached}.scrolled {
      box-shadow: var(--mui-customShadows-sm);

      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-end: 1px solid var(--border-color);
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      ${({ theme })=>`transition: ${theme.transitions.create([
        'box-shadow',
        'border-width',
        'padding-inline',
        'backdrop-filter'
    ])}`};
    }
    &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
      &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}.scrolled
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      padding-inline: 16px;
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating} {
    padding-block-start: 16px;

    .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
      background-color: var(--mui-palette-background-paper);
      border-radius: var(--border-radius);
      padding-inline: 16px;
      box-shadow: var(--mui-customShadows-sm);

      [data-skin='bordered'] & {
        box-shadow: none;
        border: 1px solid var(--border-color);
      }
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}
    .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar},
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed}.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached}
    .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
    inline-size: calc(100% - ${2 * __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px);
  }

  &:not(.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating}).${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerStatic}
    .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
    padding-inline: 16px;
  }

  .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar} {
    position: relative;
    padding-block: 8px;
    inline-size: 100%;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledHeader;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/vertical/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/useScrollTrigger/useScrollTrigger.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/styles/vertical/StyledHeader.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const Navbar = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        threshold: 0,
        disableHysteresis: true
    });
    // Vars
    const { navbarContentWidth } = settings;
    const headerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'fixed';
    const headerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.type === 'static';
    const headerFloating = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.floating === true;
    const headerDetached = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.detached === true;
    const headerAttached = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.detached === false;
    const headerBlur = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].navbar.blur === true;
    const headerContentCompact = navbarContentWidth === 'compact';
    const headerContentWide = navbarContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        theme: theme,
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].header, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFixed]: headerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerStatic]: headerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerFloating]: headerFloating,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerDetached]: !headerFloating && headerDetached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerAttached]: !headerFloating && headerAttached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerBlur]: headerBlur,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerContentCompact]: headerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].headerContentWide]: headerContentWide,
            scrolled: trigger
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbar, 'flex bs-full'),
            children: children
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/vertical/Navbar.jsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/vertical/Navbar.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$ModeDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/ModeDropdown.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$UserDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/components/layout/shared/UserDropdown.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
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
const NavbarContent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].navbarContent, 'flex items-center justify-between gap-4 is-full'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2,
                    py: 1.25,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: (theme)=>`1px solid ${theme.palette.divider}`,
                    minWidth: 280,
                    width: {
                        xs: '100%',
                        md: 420
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "tabler-search text-xl"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "text.secondary",
                        children: "Search [CTRL + K]"
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                direction: "row",
                spacing: 0.5,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-language text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$ModeDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-layout-grid-add text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: "small",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "tabler-bell text-xl"
                        }, void 0, false, {
                            fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$components$2f$layout$2f$shared$2f$UserDropdown$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crediflash-vuexy-next/src/components/layout/vertical/NavbarContent.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavbarContent;
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/vertical/StyledFooter.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer`
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentCompact} {
    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached} {
      margin-inline: auto;
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached} .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
      margin-inline: auto;
      max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached},
      &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached}
      .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
      background-color: var(--mui-palette-background-paper);
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached} {
      pointer-events: none;
      padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;

      & .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
        pointer-events: auto;
        box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-lightShadow) / 0.14);
        [data-mui-color-scheme='dark'] & {
          box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-darkShadow) / 0.14);
        }
        border-start-start-radius: var(--border-radius);
        border-start-end-radius: var(--border-radius);

        [data-skin='bordered'] & {
          box-shadow: none;
          border-inline: 1px solid var(--border-color);
          border-block-start: 1px solid var(--border-color);
        }
      }
    }

    &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached} {
      box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-lightShadow) / 0.14);
      [data-mui-color-scheme='dark'] & {
        box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-darkShadow) / 0.14);
      }
      [data-skin='bordered'] & {
        box-shadow: none;
        border-block-start: 1px solid var(--border-color);
      }
    }
  }

  & .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper} {
    padding-block: 16px;
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledFooter;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/vertical/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/styles/vertical/StyledFooter.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Footer = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const { footerContentWidth } = settings;
    const footerDetached = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.detached === true;
    const footerAttached = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.detached === false;
    const footerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'static';
    const footerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'fixed';
    const footerContentCompact = footerContentWidth === 'compact';
    const footerContentWide = footerContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$vertical$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footer, 'is-full', {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerDetached]: footerDetached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerAttached]: footerAttached,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerStatic]: footerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerFixed]: footerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentCompact]: footerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWide]: footerContentWide
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalLayoutClasses"].footerContentWrapper,
            children: children
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/vertical/Footer.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/vertical/Footer.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/crediflash-vuexy-next/src/components/layout/vertical/FooterContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use client';
const FooterContent = ()=>null;
const __TURBOPACK__default__export__ = FooterContent;
}),
"[project]/crediflash-vuexy-next/src/@layouts/styles/horizontal/StyledFooter.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
;
;
;
const StyledFooter = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$emotion$2f$styled$2f$dist$2f$emotion$2d$styled$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer`
  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);
    background-color: var(--mui-palette-background-paper);
    box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-lightShadow) / 0.14);
    [data-mui-color-scheme='dark'] & {
      box-shadow: 0 3px 12px 0px rgb(var(--mui-mainColorChannels-darkShadow) / 0.14);
    }
    [data-skin='bordered'] & {
      box-shadow: none;
      border-block-start: 1px solid var(--border-color);
    }
  }

  &.${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentCompact} .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWrapper} {
    margin-inline: auto;
    max-inline-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compactContentWidth}px;
  }

  .${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWrapper} {
    padding-block: 16px;
    padding-inline: ${__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].layoutPadding}px;
  }

  ${({ overrideStyles })=>overrideStyles}
`;
const __TURBOPACK__default__export__ = StyledFooter;
}),
"[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// Third-party Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/classnames/index.js [app-ssr] (ecmascript)");
// Config Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/configs/themeConfig.js [app-ssr] (ecmascript)");
// Hook Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@core/hooks/useSettings.jsx [app-ssr] (ecmascript)");
// Util Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/utils/layoutClasses.js [app-ssr] (ecmascript)");
// Styled Component Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/@layouts/styles/horizontal/StyledFooter.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Footer = (props)=>{
    // Props
    const { children, overrideStyles } = props;
    // Hooks
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$core$2f$hooks$2f$useSettings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Vars
    const { footerContentWidth } = settings;
    const footerStatic = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'static';
    const footerFixed = __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$configs$2f$themeConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.type === 'fixed';
    const footerContentCompact = footerContentWidth === 'compact';
    const footerContentWide = footerContentWidth === 'wide';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$styles$2f$horizontal$2f$StyledFooter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        overrideStyles: overrideStyles,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footer, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerStatic]: footerStatic,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerFixed]: footerFixed,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentCompact]: footerContentCompact,
            [__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWide]: footerContentWide
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f40$layouts$2f$utils$2f$layoutClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["horizontalLayoutClasses"].footerContentWrapper,
            children: children
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Footer.jsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@layouts/components/horizontal/Footer.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/crediflash-vuexy-next/src/components/layout/horizontal/FooterContent.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use client';
const FooterContent = ()=>null;
const __TURBOPACK__default__export__ = FooterContent;
}),
"[project]/crediflash-vuexy-next/src/@core/components/scroll-to-top/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// MUI Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Zoom$2f$Zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Zoom/Zoom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/useScrollTrigger/useScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const ScrollToTopStyled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        zIndex: 'var(--mui-zIndex-fab)',
        position: 'fixed',
        insetInlineEnd: theme.spacing(10),
        insetBlockEnd: theme.spacing(14)
    }));
const ScrollToTop = (props)=>{
    // Props
    const { children, className } = props;
    // Hooks
    // init trigger
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        threshold: 400,
        disableHysteresis: true
    });
    const handleClick = ()=>{
        const anchor = document.querySelector('body');
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Zoom$2f$Zoom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        in: trigger,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollToTopStyled, {
            className: className,
            onClick: handleClick,
            role: "presentation",
            children: children
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/@core/components/scroll-to-top/index.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/crediflash-vuexy-next/src/@core/components/scroll-to-top/index.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ScrollToTop;
}),
"[project]/crediflash-vuexy-next/src/components/auth/AuthGuard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crediflash-vuexy-next/src/lib/auth/session.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function AuthGuard({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$src$2f$lib$2f$auth$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"])();
        if (!token) {
            const redirect = pathname ? `?redirect=${encodeURIComponent(pathname)}` : '';
            router.replace(`/login${redirect}`);
            return;
        }
        setReady(true);
    }, [
        pathname,
        router
    ]);
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crediflash$2d$vuexy$2d$next$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/crediflash-vuexy-next/src/components/auth/AuthGuard.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/crediflash-vuexy-next/src/components/auth/AuthGuard.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return children;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__40982977._.js.map