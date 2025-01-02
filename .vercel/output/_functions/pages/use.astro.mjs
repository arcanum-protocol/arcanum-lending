/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D6ete0YP.mjs';
import { $ as $$Layout } from '../chunks/Layout_DfWzHas9.mjs';
export { renderers } from '../renderers.mjs';

const $$Use = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-1/2 grid grid-cols-[2fr,_40fr,_40fr] grid-rows-4 text-primary"> <span class="uppercase font-namu font-[400] text-lg place-self-start text-tertiary">1</span> <span class="uppercase font-namu font-[400] text-2xl whitespace-pre-line mt-2">Create your own 
			tokenized portfolio</span> <span class="font-droid font-[400] text-sm whitespace-pre-line mt-4">Create a tokenised strategy 
			and receive fees. <span class="bg-layer-floor-5"><span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">The more popular
				the strategy is - the more fees you 
				can get</span></span> </span> <span class="uppercase font-namu font-[400] text-lg place-self-start text-tertiary">2</span> <span class="uppercase font-namu font-[400] text-2xl whitespace-pre-line mt-2">arm $AREV token</span> <span class="font-droid font-[400] text-sm whitespace-pre-line mt-4">Provide liquidity to portfolios 
			to <span class="bg-layer-floor-5"><span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">farm Arcanum revenue token</span></span></span> <span class="uppercase font-namu font-[400] text-lg place-self-start text-tertiary">3</span> <span class="uppercase font-namu font-[400] text-2xl whitespace-pre-line mt-2">Stake $AREV token</span> <span class="font-droid font-[400] text-sm whitespace-pre-line mt-4">Secure <span class="bg-layer-floor-5"><span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">Arcanum’s oracle network</span></span>
by delegating $AREV token to validators</span> <span class="uppercase font-namu font-[400] text-lg place-self-start text-tertiary">3</span> <span class="uppercase font-namu font-[400] text-2xl whitespace-pre-line mt-2">Use portfolios as 
			liquidity source</span> <span class="font-droid font-[400] text-sm whitespace-pre-line mt-4"><span class="bg-layer-floor-5"><span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">Become an on-chain trader</span></span> or use 
		multipools in your existing trading 
		strategies</span> </div>  `, "footer": ($$result2) => renderTemplate`<span class="size-full text-primary font-namu font-semibold uppercase bg-[url(/footers/use.svg)] min-[1277px]:bg-[url(/footers/use_second.svg)] bg-left-bottom bg-no-repeat"></span>` })}`;
}, "C:/Users/eureq/arcanum-landing/src/pages/use.astro", void 0);

const $$file = "C:/Users/eureq/arcanum-landing/src/pages/use.astro";
const $$url = "/use";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Use,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
