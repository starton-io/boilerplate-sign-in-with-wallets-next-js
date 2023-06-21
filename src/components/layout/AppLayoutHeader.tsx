/*
| Developed by Starton
| Filename : AppLayoutHeader.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Container, ContainerProps, styled, Typography } from '@mui/material'
import { StartonType } from '@starton/react-ui-iconography'
import { Theme } from '@mui/system'
import useTranslation from 'next-translate/useTranslation'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AppLayoutHeaderProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const Header = styled((props) => <Container component={'header'} {...props} />)<ContainerProps>(({ theme }) => ({
	padding: theme.spacing(2, 0),
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	height: 75,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const AppLayoutHeader: React.FC<AppLayoutHeaderProps> = () => {
	const { t } = useTranslation()

	return (
		<Header>
			<StartonType sx={{ width: 200, height: 'auto' }} />
			<Typography
				variant={'h2'}
				textAlign={'center'}
				sx={{ fontWeight: 'bold', fontSize: '2rem', marginTop: (theme: Theme) => theme.spacing(1) }}
			>
				{t('common:header.starton-tagline')}
			</Typography>
		</Header>
	)
}

/*
|--------------------------------------------------------------------------
| Component configurations
|--------------------------------------------------------------------------
*/
AppLayoutHeader.displayName = 'AppLayoutHeader'
