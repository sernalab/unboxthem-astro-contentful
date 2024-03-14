import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_sZ57LypF.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9HCc-z0.js"}],"styles":[{"type":"external","src":"/_astro/index.BjdggLKJ.css"},{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n"}],"routeData":{"route":"/posts","isIndex":true,"type":"page","pattern":"^\\/posts\\/?$","segments":[[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/posts/index.astro","pathname":"/posts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9HCc-z0.js"}],"styles":[{"type":"external","src":"/_astro/index.BjdggLKJ.css"},{"type":"inline","content":"html{box-sizing:border-box;scroll-behavior:smooth}@media (prefers-reduced-motion: reduce){html{scroll-behavior:auto}html body *{animation-duration:0s!important;animation-delay:0s!important}}*,*:after,*:before{box-sizing:inherit}blockquote,body,figure,h1,h2,h3,h4,h5,h6,hr,li,ol,p,pre,ul{margin:0;padding:0}ul:where([class]){list-style:none}button,input,select,textarea{color:inherit;letter-spacing:inherit;font:inherit}input[type=text],textarea{width:100%}fieldset{padding:0;border:none}legend{margin-bottom:.5rem;max-width:100%}button,input,textarea{border:1px solid gray}button{padding:.75em 1em;border-radius:0;background-color:transparent;line-height:1}button *{pointer-events:none}button:hover{cursor:pointer}embed,iframe,img,object,svg,video{display:block;max-width:100%}table{width:100%;table-layout:fixed}[hidden]{display:none!important}noscript{display:block;margin-top:1em;margin-bottom:1em}[tabindex=\"-1\"]{outline:none!important;box-shadow:none!important}:root{--primary-100: hsl(273, 27%, 48%);--primary-200: hsl(273, 29%, 58%);--primary-300: hsl(273, 27%, 48%);--primary-400: hsl(273, 30%, 43%);--primary-500: hsl(273, 33%, 33%);--secondary-100: hsl(0, 87%, 68%);--secondary-200: hsl(0, 89%, 73%);--secondary-300: hsl(0, 87%, 68%);--secondary-400: hsl(0, 85%, 63%);--secondary-500: hsl(0, 90%, 58%);--neutral-100: hsl(0, 0%, 100%);--neutral-200: hsl(200, 23%, 97%);--neutral-300: hsl(200, 12%, 95%);--neutral-400: hsl(205, 12%, 88%);--neutral-500: hsl(209, 13%, 83%);--neutral-600: hsl(208, 6%, 55%);--neutral-700: hsl(210, 8%, 31%);--neutral-800: hsl(212, 9%, 22%);--neutral-900: hsl(210, 10%, 14%);--dark-100: hsl(240, 4%, 9%)}.text-gradient[data-astro-cid-jseywsqh]{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-500));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.darkmode .text-gradient{background:linear-gradient(315deg,var(--primary-200) 25%,var(--secondary-400));background-clip:border-box;-webkit-background-clip:text;-webkit-text-fill-color:transparent}html{font-family:system-ui,sans-serif;background:#13151a}main[data-astro-cid-j7pv25f6]{margin:auto;padding:1rem;width:800px;max-width:calc(100% - 2rem);color:#fff;font-size:20px;line-height:1.6}.astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-j7pv25f6]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/pages/posts/index.astro",{"propagation":"none","containsHead":true}],["/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-manifest":"manifest_CnMWCqsL.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_0Q86ist1.mjs","\u0000@astro-page:src/pages/posts/index@_@astro":"chunks/index_igKaImDp.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_B8bxEdsg.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D9HCc-z0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/AW.COMth6nY.jpg","/_astro/index.BjdggLKJ.css","/astronaut-hero-img.webp","/favicon.svg","/_astro/hoisted.D9HCc-z0.js"],"buildFormat":"directory"});

export { manifest };
