/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			// screens: {
			// 	'2xl': { 'max': '1400px' },
			// 	'md': { 'max': '768px' },
			// 	'xs': { 'max': '429px' },
			// },
			screens: {
				'desktop': { 'max': '1400px' },
				'table': { 'max': '768px' },
				'mobile': { 'max': '429px' },
			}
		},
		extend: {
			colors: {
				primary: '#242F9E',
				secondary: '#242F9E',
				grey: '#666666',
				white: '#FFFFFF',
				dark: '#22212D',
				light: '#242F9E',
				error: '#DA1E11',
				success: '#28B873',
				warning: '#F9CF3A',
				info: '#0C7EDA',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
