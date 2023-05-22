/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		colors: {
		  transparent: 'transparent',
		  current: 'currentColor',
		  'brand-blue': '#1a56db',
		  'brand-blue-light': '#8dabed',
		},
		extend:
		{
		  fontFamily: {
			'heading': ['Inter', 'sans-serif'],
			'body': ['Nunito', 'sans-serif'],
		  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
}
