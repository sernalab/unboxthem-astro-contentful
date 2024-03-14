/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_sZ57LypF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import contentful from 'contentful';
/* empty css                          */
import { $ as $$Image } from './generic_CQGpjJbe.mjs';

const $$Astro$7 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="px-4 shadow-black text-white"> <nav class="flex items-center justify-between"> <h2><a href="/">Unboxthem</a></h2> <div class="internal-links"> <a class="py-4 px-2 no-underline border-b-4 border-b-[var(--secondary-100)] active:border-b-white" href="/">Home</a> <a class="py-4 px-2 no-underline" href="/posts">Posts</a> <a class="py-4 px-2 no-underline" href="/">Authors</a> <a class="py-4 px-2 no-underline" href="/">Send your story</a> </div> <div class="social-links flex"> <a class="py-4 px-2" href="https://twitter.com/astrodotbuild" target="_blank"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> </a> <a class="py-4 px-2" href=""> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg> </a> </div> </nav> </header>`;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/layouts/Layout.astro", void 0);

const contentfulClient = contentful.createClient({
  space: "r2ivqj9agsai",
  accessToken: "nWioXx69T6lZnfOSyoRhc_eSZ_10jka94C0so1P7MlM",
  host: "cdn.contentful.com"
});

const $$Astro$4 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  const entries = await contentfulClient.getEntries({
    content_type: "post"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-white"> ${entries.items.map((item) => renderTemplate`<ul> <li>${item.fields.title}</li> </ul>`)} </div> ` })}`;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/pages/posts/index.astro", void 0);

const $$file$1 = "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/pages/posts/index.astro";
const $$url$1 = "/posts";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$EarlyAccessHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EarlyAccessHeader;
  return renderTemplate`${maybeRenderHead()}<header class="px-4 shadow-black text-white"> <nav class="flex items-center justify-between"> <h2><a href="/">Unboxthem</a></h2> <div class="internal-links"> <a class="py-4 px-2 no-underline border-b-4 border-b-[var(--secondary-100)] active:border-b-white" href="/">Home</a> <a class="py-4 px-2 no-underline" href="/">Send your story</a> </div> <div class="social-links flex"> <a class="py-4 px-2" href="https://twitter.com/astrodotbuild" target="_blank"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg> </a> <a class="py-4 px-2" href=""> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg> </a> </div> </nav> </header>`;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/components/EarlyAccessHeader.astro", void 0);

const logo = new Proxy({"src":"/_astro/AW.COMth6nY.jpg","width":1920,"height":960,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/assets/img/AW.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$HeroLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroLaunch;
  return renderTemplate`${maybeRenderHead()}<section class="my-24" data-astro-cid-jseywsqh> <div class="container mx-auto min-w-12" data-astro-cid-jseywsqh> <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-jseywsqh> <div class="flex flex-col items-center gap-8 lg:items-start" data-astro-cid-jseywsqh> <h1 class="text-white text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-jseywsqh> ${renderSlot($$result, $$slots["default"], renderTemplate`
Be part of the <span class="text-gradient" data-astro-cid-jseywsqh>first 10 posts
</span>delving into the world of porn.
`)} </h1> <button type="button" class="w-fit text-white bg-[var(--secondary-100)] border-0 text-xl rounded-lg px-5 py-2.5 text-center me-2 mb-2" data-astro-cid-jseywsqh>
Participate
</button> </div> ${renderComponent($$result, "Image", $$Image, { "class": "hidden lg:block object-cover h-full", "src": logo, "alt": "", "decoding": "async", "data-astro-cid-jseywsqh": true })} </div> </div> </section> `;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/components/HeroLaunch.astro", void 0);

const $$Astro$1 = createAstro();
const $$EarlyAccessLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EarlyAccessLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "EarlyAccessHeader", $$EarlyAccessHeader, {})} ${renderComponent($$result, "HeroLaunch", $$HeroLaunch, {})} ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/layouts/EarlyAccessLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- <Layout title="Welcome to Unboxthem."> -->${renderComponent($$result, "EarlyAccessLayout", $$EarlyAccessLayout, { "title": "Welcome to Unboxthem.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6></main> ` })} <!-- </Layout> --> `;
}, "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/pages/index.astro", void 0);

const $$file = "/Users/carles/Documents/Code/Proyectos/unboxthem-astro-contentful/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
