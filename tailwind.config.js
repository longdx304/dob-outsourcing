/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		screens: {
			'desktop4k': '1536px',
			'desktop': '1024px',
			'tablet': '600px',
			'mobile': '320px',
		},
		extend: {
			colors: {
				primary: '#242F9E',
				secondary: '#5260EB',
				grey: '#666666',
				white: '#FFFFFF',
				dark: '#22212D',
				light: '#F7F7F7',
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
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/aspect-ratio'),],
}
