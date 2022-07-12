/*
| Developed by Starton
| Filename : commonSlice.ts
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

/*
|--------------------------------------------------------------------------
| CONTRACTS
|--------------------------------------------------------------------------
*/
export interface CommonsState {
	ui: {
		staticTopBanner: boolean
	}
}

/*
|--------------------------------------------------------------------------
| INIT STATE
|--------------------------------------------------------------------------
*/
const initialState: CommonsState = {
	ui: {
		staticTopBanner: false,
	},
}

/*
|--------------------------------------------------------------------------
| SLICE
|--------------------------------------------------------------------------
*/
export const commonsSlice = createSlice({
	name: 'commons',
	initialState,
	reducers: {
		setUIStaticTopBanner: (state, action: PayloadAction<boolean>) => {
			state.ui.staticTopBanner = action.payload
		},
	},
})

/*
|--------------------------------------------------------------------------
| EXPORT SELECTORS
|--------------------------------------------------------------------------
*/
export const selectUIStaticTopBanner = (state: RootState) => state.commons.ui.staticTopBanner

/*
|--------------------------------------------------------------------------
| EXPORT
|--------------------------------------------------------------------------
*/
export const { setUIStaticTopBanner } = commonsSlice.actions
export default commonsSlice.reducer
