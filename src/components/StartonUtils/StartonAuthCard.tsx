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
	boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonAuthCard: React.FC<StartonAuthCardProps> = (props) => {
	return <StartonCard {...props} />
}
