module.exports=[49766,a=>{"use strict";var b=a.i(54273);function c(a){let{defaultMode:c="system",defaultLightColorScheme:d="light",defaultDarkColorScheme:e="dark",modeStorageKey:f="mode",colorSchemeStorageKey:g="color-scheme",attribute:h="data-color-scheme",colorSchemeNode:i="document.documentElement",nonce:j}=a||{},k="",l=h;if("class"===h&&(l=".%s"),"data"===h&&(l="[data-%s]"),l.startsWith(".")){let a=l.substring(1);k+=`${i}.classList.remove('${a}'.replace('%s', light), '${a}'.replace('%s', dark));
      ${i}.classList.add('${a}'.replace('%s', colorScheme));`}let m=l.match(/\[([^[\]]+)\]/);if(m){let[a,b]=m[1].split("=");b||(k+=`${i}.removeAttribute('${a}'.replace('%s', light));
      ${i}.removeAttribute('${a}'.replace('%s', dark));`),k+=`
      ${i}.setAttribute('${a}'.replace('%s', colorScheme), ${b?`${b}.replace('%s', colorScheme)`:'""'});`}else".%s"!==l&&(k+=`${i}.setAttribute('${l}', colorScheme);`);return(0,b.jsx)("script",{suppressHydrationWarning:!0,nonce:j,dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${f}') || '${c}';
  const dark = localStorage.getItem('${g}-dark') || '${e}';
  const light = localStorage.getItem('${g}-light') || '${d}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${k}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}let d=function(a){let{defaultMode:d="system",defaultLightColorScheme:e="light",defaultDarkColorScheme:f="dark",modeStorageKey:g="mui-mode",colorSchemeStorageKey:h="mui-color-scheme",attribute:i="data-mui-color-scheme",colorSchemeNode:j="document.documentElement",nonce:k}=a;return(0,b.jsx)(c,{defaultMode:d,defaultLightColorScheme:e,defaultDarkColorScheme:f,modeStorageKey:g,colorSchemeStorageKey:h,attribute:i,colorSchemeNode:j,nonce:k})};var e=a.i(92903);let f=async a=>{let{children:c}=a,f=await (0,e.getSystemMode)();return(0,b.jsx)("html",{id:"__next",lang:"en",dir:"ltr",suppressHydrationWarning:!0,children:(0,b.jsxs)("body",{suppressHydrationWarning:!0,className:"flex is-full min-bs-full flex-auto flex-col",children:[(0,b.jsx)(d,{attribute:"data",defaultMode:f}),c]})})};a.s(["default",0,f,"metadata",0,{title:{default:"CreditFlash",template:"%s | CreditFlash"},description:"CreditFlash - Plataforma de gestion crediticia y analitica financiera.",icons:{icon:"/icon.svg"}}],49766)}];

//# sourceMappingURL=material-dashboard-pro-react_crediflash-vuexy-next_src_app_layout_jsx_f0f933ec._.js.map