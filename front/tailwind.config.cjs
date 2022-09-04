/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				ghibli: ['Ghibli'],
				'ghibli-bold': ['Ghibli Bold']
			},
			colors: {
				primary: {
					50: '#f6fafa',
					100: '#eef5f6',
					200: '#d4e7e8',
					300: '#bad9d9',
					400: '#86bcbd',
					500: '#529fa1',
					600: '#4a8f91',
					700: '#3e7779',
					800: '#315f61',
					900: '#284e4f'
				},
				secondary: {
					50: '#fbfbf8',
					100: '#f6f7f2',
					200: '#e9ebde',
					300: '#dcdfca',
					400: '#c1c8a2',
					500: '#a7b07a',
					600: '#969e6e',
					700: '#7d845c',
					800: '#646a49',
					900: '#52563c'
				}
			},
			backgroundColor: {
				blue: {
					50: '#f6fafa',
					100: '#eef5f6',
					200: '#d4e7e8',
					300: '#bad9d9',
					400: '#86bcbd',
					500: '#529fa1',
					600: '#4a8f91',
					700: '#3e7779',
					800: '#315f61',
					900: '#284e4f'
				},
				pink: {
					50: '#fdf8f8',
					100: '#fbf1f1',
					200: '#f6dddd',
					300: '#f1c9c8',
					400: '#e6a09f',
					500: '#db7776',
					600: '#c56b6a',
					700: '#a45959',
					800: '#834747',
					900: '#6b3a3a'
				},
				green: {
					50: '#fbfbf8',
					100: '#f6f7f2',
					200: '#e9ebde',
					300: '#dcdfca',
					400: '#c1c8a2',
					500: '#a7b07a',
					600: '#969e6e',
					700: '#7d845c',
					800: '#646a49',
					900: '#52563c'
				},
				beige: {
					50: '#fefcfb',
					100: '#fcf9f6',
					200: '#f8f0e9',
					300: '#f4e7db',
					400: '#ecd4c0',
					500: '#e4c2a5',
					600: '#cdaf95',
					700: '#ab927c',
					800: '#897463',
					900: '#705f51'
				},
				brown: {
					50: '#f8f6f6',
					100: '#f0eeec',
					200: '#dbd3d0',
					300: '#c5b9b3',
					400: '#99857a',
					500: '#6d5041',
					600: '#62483b',
					700: '#523c31',
					800: '#413027',
					900: '#352720'
				}
			}
		}
	},
	plugins: []
};