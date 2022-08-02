/*
| Developed by Starton
| Filename : index.tsx
| Description : Index.tsx
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import SignInWithWallet from 'components/SignInWithWallet'
import Logged from 'components/Logged'
import { StartonBox } from 'components/StartonUtils/StartonBox'

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
				<StartonBox sx={{ flexDirection: 'column', marginTop: '20%', marginBottom: '3em' }}>
					<Image alt="logo black" src="/logo_monochrome_black.svg" width={300} height={150} />
					<Typography variant={'h2'} textAlign={'center'} width={'100%'} sx={{ fontWeight: 'bold' }}>
						{t('common:starton-tagline')}
					</Typography>
				</StartonBox>
				<StartonBox>{!isConnected ? <SignInWithWallet /> : <Logged />}</StartonBox>
				<StartonBox sx={{ marginTop: '6em' }}>
					<Typography variant="h5">
						{t('common:join-us')}
						<a
							target="_blank"
							href={'https://discord.starton.io'}
							style={{ color: 'white', background: 'black' }}
							rel="noreferrer"
						>
							Discord
						</a>
					</Typography>
					<Typography variant="h5">
						{t('common:discover')}
						<a
							target="_blank"
							href={'https://starton.io'}
							style={{ color: 'white', background: 'black' }}
							rel="noreferrer"
						>
							{t('common:website')}
						</a>
					</Typography>
					<Typography variant="h5">
						{t('common:start-building')}
						<a
							target="_blank"
							href={'https://app.starton.io'}
							style={{ color: 'white', background: 'black' }}
							rel="noreferrer"
						>
							web3
						</a>
					</Typography>
				</StartonBox>
			</Container>
		</React.Fragment>
	)
}

export default Home
