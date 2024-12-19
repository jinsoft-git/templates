import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'primary': '#E65E49',
				'secondary': '#E67A49',
				'label': '#262121',
				'label75': 'rgba(38, 33, 33, 0.75)',
				'label50': 'rgba(38, 33, 33, 0.50)',
				'label25': 'rgba(38, 33, 33, 0.25)',
				'label10': 'rgba(38, 33, 33, 0.10)',

			},
			fontFamily: {
				'sans': ['Noto-Sans', 'Roboto', 'Anton', 'Inter', 'sans-serif'],
			},
		}
	},

	plugins: []
} satisfies Config;
