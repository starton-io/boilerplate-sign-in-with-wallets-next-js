/*
| Developed by Starton
| Filename : theme.ts
*/

import { ThemeOptions } from '@mui/material/styles'

/*
|--------------------------------------------------------------------------
| Declare modifier.
|--------------------------------------------------------------------------
*/
declare module '@mui/material/styles' {
	interface PaletteIconColor {
		blue: string
		red: string
		green: string
	}
	// eslint-disable-next-line no-unused-vars
	interface Palette {
		icon: PaletteIconColor
	}
	// eslint-disable-next-line no-unused-vars
	interface PaletteOptions {
		icon?: PaletteIconColor | undefined
	}
}

/*
|--------------------------------------------------------------------------
| Additional interfaces
|--------------------------------------------------------------------------
*/
export interface PaletteIconColor {
	blue: string
	red: string
	green: string
}

/*
|--------------------------------------------------------------------------
| Create a theme instance.
|--------------------------------------------------------------------------
*/
export default {
	palette: {
		type: 'light',
		icon: {
			blue: '#0ED2E9',
			red: '#EA5455',
			green: '#28C76F',
		},
		primary: {
			main: '#151A1F',
			dark: '#29343D',
			light: '#FFFFFF',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#01B29E',
			dark: '#017F71',
			light: '#E6FFFC',
			contrastText: '#FFFFFF',
		},
		text: {
			primary: '#151A1F',
			secondary: '#1F272E',
			disabled: '#678298',
		},
		background: {
			default: '#F3F5F7',
			paper: '#FFFFFF',
		},
	},
	typography: {
		h1: {
			fontSize: 32,
			paragraphSpacing: 0,
			textDecoration: 'none',
			textCase: 'none',
		},
		h2: {
			fontSize: 24,
			paragraphSpacing: 0,
			textDecoration: 'none',
			textCase: 'none',
		},
		h3: {
			fontSize: 10,
			paragraphSpacing: 0,
			textDecoration: 'none',
			textCase: 'none',
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
} as const as ThemeOptions
