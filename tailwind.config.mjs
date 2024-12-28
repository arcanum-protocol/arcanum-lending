/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			main: "1231px",
			second: "860px",
		},
		fontFamily: {
			droid: ["droid-sans-mono", "sans-serif"],
			namu: ["namu", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#EAEAEA",
				secondary: "#8A8B8C",
				tertiary: "#646466",
				onaccent: "#F37968",
				brand: {
					primary: "#4093FE",
					secondary: "#0148FE",
					gradient: "linear-gradient(180deg, #0148FE 0%, #4093FE 100%)",
				},
				positive: {
					primary: "#12A610",
					secondary: "#087410",
					tertiary: "#354A35",
				},
				negative: {
					primary: "#D10F0F",
					secondary: "#A40204",
					tertiary: "#5C3030",
				},
				attention: {
					primary: "#FA8B1C",
					secondary: "#C05E11",
					tertiary: "#4C3C2C",
				},
				accent: {
					purple: "#C983D6",
					violet: "#A38DF1",
					turquoise: "#66BECC",
					green: "#86CE83",
					yellow: "#ECCD73",
					orange: "#F37A6D",
					red: "#ED6486",
				},
				layer: {
					floor: {
						0: "#0D0B0D",
						1: "#101112",
						2: "#242633",
						3: "#333340",
						4: "#EAEAEA",
						5: "#201F27",
						overlay: "#33334080",
					},
				},
				fill: {
					primary: "#0D0B0D",
					secondary: "#252627",
					tetrary: "#646466",
					quaternary: "#8A8B8C",
					accent: "#FFFFFF",
				},
			},
		},
	},
	plugins: [],
};
