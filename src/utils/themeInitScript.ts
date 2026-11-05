import { THEMES } from "@/constants/theme";

const themeCssMap = Object.fromEntries(
  Object.entries(THEMES).map(([id, theme]) => [
    id,
    Object.fromEntries(
      Object.entries(theme.css).map(([key, value]) => [
        `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`,
        value,
      ]),
    ),
  ]),
);

// Reads the persisted settings blob, resolves "system" via the OS, and
// applies the theme tokens before first paint. Falls back to the legacy
// theme key, then to light.
export const themeInitScript = `(function(){try{var id=null;var s=localStorage.getItem('best-family-tree-settings');if(s){var p=JSON.parse(s);id=p&&p.state&&p.state.theme;}if(!id){var l=localStorage.getItem('best-family-tree-theme');if(l==='light'||l==='dark')id=l;}var css=${JSON.stringify(themeCssMap)};if(!css[id]){id=(typeof matchMedia==='function'&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';}var t=css[id];if(t){var r=document.documentElement;r.setAttribute('data-theme',id);for(var k in t){r.style.setProperty(k,t[k]);}}}catch(e){}})();`;
