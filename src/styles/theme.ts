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
		color: {
			primary: '#555454',
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
} as const as ThemeOptions
