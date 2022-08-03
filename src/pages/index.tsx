/*
| Developed by Starton
| Filename : index.tsx
| Description : Index.tsx
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Typography, styled } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import { Theme } from '@mui/system'
import SignInWithWallet from 'components/SignInWithWallet'
import Logged from 'components/Logged'
import { StartonBox } from 'components/StartonUtils/StartonBox'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HomeLink = styled('a')(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	background: theme.palette.primary.main,
	padding: theme.spacing(1),
	borderRadius: '4px',
	boxShadow:
		'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
	transition: 'all 0.15s ease-in-out',
	'&:hover': {
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Home: NextPage = () => {
	const { t } = useTranslation()
	const ref = useAccount()
	const [isConnected, setIsConnected] = React.useState(false)

	React.useEffect(() => setIsConnected(ref.isConnected), [ref])

	return (
		<React.Fragment>
			<NextSeo title={t('index:seo.title')} description={t('index:seo.description')} />
			<Container>
				<StartonBox sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
					<StartonBox sx={{ flexDirection: 'column', marginBottom: (theme: Theme) => theme.spacing(10) }}>
						<Image alt="logo black" src="/logo_monochrome_black.svg" width={150} height={75} />
						<Typography
							variant={'h2'}
							textAlign={'center'}
							color={'secondary'}
							sx={{ fontWeight: 'bold', fontSize: '2rem', marginTop: (theme: Theme) => theme.spacing(1) }}
						>
							{t('index:content.starton-tagline')}
						</Typography>
					</StartonBox>
					<StartonBox>{!isConnected ? <SignInWithWallet /> : <Logged />}</StartonBox>
					<StartonBox sx={{ marginTop: (theme: Theme) => theme.spacing(10) }}>
						<Typography variant="h5">
							{t('index:content.join-us')}
							<HomeLink target="_blank" href={'https://discord.starton.io'} rel="noreferrer">
								discord
							</HomeLink>
						</Typography>
						<Typography variant="h5">
							{t('index:content.discover')}
							<HomeLink target="_blank" href={'https://starton.io'} rel="noreferrer">
								{t('index:content.website')}
							</HomeLink>
						</Typography>
						<Typography variant="h5">
							{t('index:content.start-building')}
							<HomeLink target="_blank" href={'https://app.starton.io'} rel="noreferrer">
								web3
							</HomeLink>
						</Typography>
					</StartonBox>
				</StartonBox>
			</Container>
		</React.Fragment>
	)
}

export default Home
