/*
| Developed by Starton
| Filename : StartonBox.tsx
| Description : StartonBox component
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { Box, BoxProps, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonBoxProps extends BoxProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const StartonBoxStyled = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	gap: '5%',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonBox: React.FC<StartonBoxProps> = (props) => {
	return <StartonBoxStyled data-testid={'starton-box'} {...props} />
}
