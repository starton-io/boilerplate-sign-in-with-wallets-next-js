/*
| Developed by Starton
| Filename : index.tsx
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Typography } from '@mui/material'

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<NextSeo title="Home" />
			<Container
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Typography variant={'h2'} textAlign={'center'} width={'100%'}>
					Starton Boilerplate with NextJS
				</Typography>
			</Container>
		</React.Fragment>
	)
}

export default Home
