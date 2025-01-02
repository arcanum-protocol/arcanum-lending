/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D6ete0YP.mjs';
import { $ as $$Layout } from '../chunks/Layout_DfWzHas9.mjs';
export { renderers } from '../renderers.mjs';

const $$Arev = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="font-droid whitespace-pre-line text-primary leading-[21px]">Arcanum's permissionless portfolios are secured 
		by the <span class="bg-layer-floor-5"> <span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">$AREV token, which has a floor price backed 
			by the ecosystem's native token</span> </span> </span> <span class="font-droid whitespace-pre-line text-primary leading-[21px]"><span class="bg-layer-floor-5"> <span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">$AREV is used in the Proof-of-Stake (PoS)</span></span> mechanism 
		of Arcanum's oracle network, which provides portfolio 
		share prices. The token has a limited supply and 
		increases its floor price each time the protocol 
		generates revenue from portfolio management
</span>  `, "footer": ($$result2) => renderTemplate`<span class="size-full text-primary font-namu font-semibold uppercase text-nowrap bg-[url(/footers/arev.svg)] min-[1277px]:bg-[url(/footers/arev_second.svg)] bg-left-bottom bg-no-repeat"></span>` })}`;
}, "C:/Users/eureq/arcanum-landing/src/pages/arev.astro", void 0);

const $$file = "C:/Users/eureq/arcanum-landing/src/pages/arev.astro";
const $$url = "/arev";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Arev,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
