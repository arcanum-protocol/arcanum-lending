/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D6ete0YP.mjs';
import { $ as $$Layout } from '../chunks/Layout_DfWzHas9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "actions": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="gap-4 flex flex-row *:border *:rounded-[1px] *:border-fill-secondary text-brand-secondary font-droid"> <button class="w-[186px] bg-transparent h-[66px] after:size-3 after:bg-[url(/icons/link.svg)] after:inline-block after:ml-2">Launch app</button> <button class="w-[135px] bg-transparent h-[66px] after:size-3 after:bg-[url(/icons/link.svg)] after:inline-block after:ml-2">Docs</button> </div>`, "default": ($$result2) => renderTemplate` <span class="font-droid whitespace-pre-line text-primary leading-[21px]">Arcanum is a permissionless automated portfolio
		manager built upon a new crypto primitive - <span class="after:inline-block text-brand-secondary bg-clip-text font-droid after:ml-1 after:*:fill-brand-secondary after:size-3 after:bg-[url(/icons/link.svg)]">Multipool</span> </span> <span class="font-droid whitespace-pre-line text-primary leading-[21px]">Multipool enables the creation of tokens fully backed 
		by existing on-chain assets, ensuring efficient 
		management through trading incentives. It allows 
		users to gain <span class="bg-layer-floor-5"> <span class="font-droid whitespace-pre-line bg-gradient-to-tl from-[#F37968] to-[#ED6486] bg-clip-text text-transparent">exposure to a diversified multi-asset 
			portfolio by contributing just a single asset</span> </span> </span>   `, "footer": ($$result2) => renderTemplate`<span class="size-full text-primary font-namu font-semibold uppercase bg-[url(/footers/main.svg)] min-[1277px]:bg-[url(/footers/main_second.svg)] bg-left-bottom bg-no-repeat"></span>` })}`;
}, "C:/Users/eureq/arcanum-landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/eureq/arcanum-landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
