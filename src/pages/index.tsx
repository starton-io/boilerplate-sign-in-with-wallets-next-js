/*
| Developed by Starton
| Filename : index.tsx
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Box, Container, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import startonStyles from '../styles/Starton.module.css'
import SignInWithWallet from 'components/SignInWithWallet'
import Logged from 'components/Logged'

const Home: NextPage = () => {
	const { t } = useTranslation()
	const { isConnected } = useAccount()

	return (
		<React.Fragment>
			<NextSeo title={t('index:seo.title')} description={t('index:seo.description')} />
			<Container className={startonStyles.container}>
				<div className={startonStyles.header}>
					<Image alt="logo black" src="/logo_monochrome_black.svg" width={300} height={150} />
					<Typography variant={'h2'} textAlign={'center'} width={'100%'} sx={{ fontWeight: 'bold' }}>
						{t('common:starton-tagline')}
					</Typography>
				</div>
				<div>
					{!isConnected ? (
						<SignInWithWallet />
					) : (
						<Logged />
					)}
				</div>
				<Box className={startonStyles.box}>
					<Typography variant="h5" className={startonStyles.link}>
						Join us on{' '}
						<a
							target="_blank"
							href={'https://discord.starton.io'}
							className={startonStyles.a}
							rel="noreferrer"
						>
							Discord
						</a>
					</Typography>
					<Typography variant="h5" className={startonStyles.link}>
						Discover our{' '}
						<a target="_blank" href={'https://starton.io'} className={startonStyles.a} rel="noreferrer">
							website
						</a>
					</Typography>
					<Typography variant="h5" className={startonStyles.link}>
						Start building{' '}
						<a target="_blank" href={'https://app.starton.io'} className={startonStyles.a} rel="noreferrer">
							web3
						</a>
					</Typography>
				</Box>
			</Container>
		</React.Fragment>
	)
}

export default Home
