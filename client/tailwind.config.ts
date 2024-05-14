import type { Config } from "tailwindcss";

// min-[375px]:bg-amber-950 min-[768px]:bg-black min-[1440px]:bg-red-800

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/entities/**/*.{js,ts,jsx,tsx}",
		"./src/next-pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx}",
		"./src/widgets/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			fraunces144pt: ["Fraunces 144pt"],
			manrope: ["Manrope"]
		},
		container: {
			center: true,
			screens: {
				DEFAULT: "300px",
				sm: "375px",
				md: "768px",
				lg: "1440px"
			},
			padding: {
				DEFAULT: "1rem",
				sm: "1.6rem",
				md: "3.9rem",
				lg: "16.5rem"
			}
		},
		extend: {
			colors: {
				violet: {
					"50": "#ece7ff",
					"100": "#dbd3ff",
					"200": "#c3b1ff",
					"300": "#a382ff",
					"400": "#9151ff",
					"500": "#8c2aff",
					"600": "#8e06ff",
					"700": "#8c00ff",
					"800": "#7202d1",
					"900": "#5b0ca3",
					"950": "#24053e"
				},
				"mulled-wine": {
					"50": "#f7f6f8",
					"100": "#ebe9f0",
					"200": "#ddd9e4",
					"300": "#c5bed2",
					"400": "#a89fbb",
					"500": "#9587aa",
					"600": "#87769a",
					"700": "#7b698c",
					"800": "#685974",
					"900": "#584d62",
					"950": "#37303b"
				},
				"spring-green": {
					"50": "#edfff5",
					"100": "#d5ffeb",
					"200": "#aeffd7",
					"300": "#6fffb9",
					"400": "#44ffa1",
					"500": "#00e973",
					"600": "#00c25c",
					"700": "#00984b",
					"800": "#04773f",
					"900": "#066136",
					"950": "#00371b"
				},
				"white-pointer": {
					"50": "#fcf8ff",
					"100": "#f5e8ff",
					"200": "#ecd5ff",
					"300": "#ddb4fe",
					"400": "#c984fc",
					"500": "#b455f7",
					"600": "#a033ea",
					"700": "#8a22ce",
					"800": "#7521a8",
					"900": "#601c87",
					"950": "#420764"
				},
				white: {
					"50": "#ffffff",
					"100": "#efefef",
					"200": "#dcdcdc",
					"300": "#bdbdbd",
					"400": "#989898",
					"500": "#7c7c7c",
					"600": "#656565",
					"700": "#525252",
					"800": "#464646",
					"900": "#3d3d3d",
					"950": "#292929"
				}
			},
			boxShadow: {
				card: "8px 8px 0 0 #000"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			}
		}
	},
	plugins: []
};
export default config;
