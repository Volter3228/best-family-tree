import { THEMES, DEFAULT_THEME } from "@/constants/theme";

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

export const themeInitScript = `(function(){try{var s=localStorage.getItem('best-family-tree-theme');var ids=Object.keys(${JSON.stringify(themeCssMap)});var id=s&&ids.includes(s)?s:'${DEFAULT_THEME}';var css=${JSON.stringify(themeCssMap)}[id];if(css){var r=document.documentElement;r.setAttribute('data-theme',id);for(var k in css){r.style.setProperty(k,css[k]);}}}catch(e){}})();`;
