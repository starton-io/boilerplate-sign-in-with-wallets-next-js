/*
| Developed by Starton
| Filename : AppLayout.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Box, GlobalStyles } from '@mui/material'
import { AppLayoutHeader } from './AppLayoutHeader'
import { AppLayoutFooter } from './AppLayoutFooter'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface AppLayoutProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Global styles
|--------------------------------------------------------------------------
*/
const inputGlobalStyles = (
	<GlobalStyles
		styles={(theme) => ({
			/* width */
			'&::-webkit-scrollbar': {
				width: '8px',
				height: '8px',
			},

			/* Track */
			'&::-webkit-scrollbar-track': {
				background: theme.palette.divider,
			},

			/* Handle */
			'&::-webkit-scrollbar-thumb': {
				background: theme.palette.background.paper,
				borderRadius: 5,
				borderStyle: 'solid',
				borderWidth: '1px',
				borderColor: theme.palette.divider,
			},

			'&::-webkit-scrollbar-corner': {
				background: 'transparent',
			},
		})}
	/>
)

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const AppLayout: React.FC<AppLayoutProps> = (props) => {
	return (
		<React.Fragment>
			{inputGlobalStyles}
			<Box minHeight={'100vh'} display={'flex'} flexDirection={'column'} gap={4}>
				<AppLayoutHeader />
				<Box component={'main'} flexGrow={1} display={'flex'}>
					{props.children}
				</Box>
				<AppLayoutFooter />
			</Box>
		</React.Fragment>
	)
}

/*
|--------------------------------------------------------------------------
| Component configurations
|--------------------------------------------------------------------------
*/
AppLayout.displayName = 'AppLayout'
