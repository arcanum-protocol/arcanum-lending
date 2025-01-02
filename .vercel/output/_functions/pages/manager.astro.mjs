/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D6ete0YP.mjs';
import { $ as $$Layout } from '../chunks/Layout_DfWzHas9.mjs';
export { renderers } from '../renderers.mjs';

const $$Manager = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="font-droid whitespace-pre-line text-primary leading-[21px]">Arcanum decoupled portfolio management into three key 
		components: <span class="bg-layer-floor-5"><span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">liquidity provision, strategy management, 
			and strategy execution</span> </span> </span> <span class="font-droid whitespace-pre-line text-primary leading-[21px]">
This approach allows users to allocate funds 
		to a variety of strategies designed by professionals. 
		Portfolio managers can focus on selecting asset 
		allocations, while traders help rebalance pools 
		and earn incentives for their contributions
</span>  `, "footer": ($$result2) => renderTemplate`<span class="size-full text-primary font-namu font-semibold uppercase text-nowrap bg-[url(/footers/manager.svg)] min-[1277px]:bg-[url(/footers/manager_second.svg)] bg-left-bottom bg-no-repeat"></span>` })}`;
}, "C:/Users/eureq/arcanum-landing/src/pages/manager.astro", void 0);

const $$file = "C:/Users/eureq/arcanum-landing/src/pages/manager.astro";
const $$url = "/manager";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Manager,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
