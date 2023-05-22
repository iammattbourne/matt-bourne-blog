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
		  'heading-colour': '#111827',
          'body-colour': '#6B7280'
		},
		extend:
		{
			typography: ({ theme }) => ({
				mattBourne: {
				  css: {
					'--tw-prose-body': theme('colors.body-colour'),
					'--tw-prose-headings': theme('colors.heading-colour'),
					'--tw-prose-lead': theme('colors.heading-colour'),
					'--tw-prose-links': theme('colors.brand-blue'),
					'--tw-prose-bold': theme('colors.heading-colour'),
					'--tw-prose-counters': theme('colors.body-colour'),
					'--tw-prose-bullets': theme('colors.body-colour'),
					'--tw-prose-hr': theme('colors.body-colour'),
					'--tw-prose-quotes': theme('colors.heading-colour'),
					'--tw-prose-quote-borders': theme('colors.brand-blue'),
					'--tw-prose-captions': theme('colors.heading-colour'),
					'--tw-prose-code': theme('colors.brand-blue'),
					'--tw-prose-pre-code': theme('colors.brand-blue'),
					'--tw-prose-pre-bg': theme('colors.brand-blue'),
					'--tw-prose-th-borders': theme('colors.brand-blue-light'),
					'--tw-prose-td-borders': theme('colors.brand-blue-light'),
					p: {
						'font-weight': '300',
					},
					'li::marker': {
						'font-weight': '300',
					},
					li: {
						'font-weight': '300',		
					}
				  },
				},
			  }),
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
