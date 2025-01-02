import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CkQzCI3E.mjs';
import { manifest } from './manifest_DNfgiUmT.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/arev.astro.mjs');
const _page2 = () => import('./pages/manager.astro.mjs');
const _page3 = () => import('./pages/use.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.1_@types+node@22.5.0_jiti@2.4.2_lightningcss@1.27.0_rollup@4.29.1_terser@5.36.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/arev.astro", _page1],
    ["src/pages/manager.astro", _page2],
    ["src/pages/use.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1933ac18-c7ab-4e7c-9a42-38340948ae77",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
