/*
| Developed by Starton
| Filename : StartonAuthCard.tsx
| Author : Philippe DESPLATS (philippe@starton.io)
*/

import React from 'react'
import { Card, CardProps, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonAuthCardProps extends CardProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StartonCard = styled(Card)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: theme.spacing(3, 5),
	backgroundColor: theme.palette.background.default,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonAuthCard: React.FC<StartonAuthCardProps> = (props) => {
	return <StartonCard elevation={0} {...props} />
}
