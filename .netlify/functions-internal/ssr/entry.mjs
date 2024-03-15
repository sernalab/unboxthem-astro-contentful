import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CU6_G1zG.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_0Q86ist1.mjs');
const _page1 = () => import('./chunks/index_dSAcguQJ.mjs');
const _page2 = () => import('./chunks/index_DZMjItSE.mjs');
const _page3 = () => import('./chunks/index_Bk4zzn5B.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/posts/index.astro", _page1],
    ["src/pages/send/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "dabb08fe-f213-40f6-82ce-9155b15630f9"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
