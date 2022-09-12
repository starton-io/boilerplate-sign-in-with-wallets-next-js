/*
| Developed by Starton
| Filename : index.tsx
| Description : Index.tsx
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Typography, styled, Box } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useAccount } from 'wagmi'
import { Theme } from '@mui/system'
import { StartonButton, StartonLogotypeWhite } from '@starton/ui-nextjs'
import SignInWithWallet from 'components/SignInWithWallet'
import Logged from 'components/Logged'
import { StartonBox } from 'components/StartonUtils/StartonBox'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HomeLink = styled('a')(() => ({}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Home: NextPage = () => {
	const { t } = useTranslation()
	const ref = useAccount()
	const [isConnected, setIsConnected] = React.useState(false)
	const links = React.useMemo(() => {
		return [
			{
				sentence: `${t('index:content.join-us')}`,
				name: 'discord',
				link: 'https://discord.starton.io',
			},
			{
				sentence: `${t('index:content.discover')}`,
				name: `${t('index:content.website')}`,
				link: 'https://starton.io',
			},
			{
				sentence: `${t('index:content.start-building')}`,
				name: 'web3',
				link: 'https://starton.io',
			},
		]
	}, [])

	React.useEffect(() => setIsConnected(ref.isConnected), [ref])

	return (
		<React.Fragment>
			<NextSeo title={t('index:seo.title')} description={t('index:seo.description')} />
			<Container>
				<StartonBox sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
					<StartonBox display={'flex'} alignItems={'center'} flexDirection={'column'} marginBottom={10}>
						<StartonLogotypeWhite width={'30%'} />
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
						{links.map((link, index) => (
							<Box key={index} display={'flex'} alignItems={'center'} gap={1}>
								<Typography variant={'button'}>{link.sentence}</Typography>
								<StartonButton variant={'contained'}>
									<HomeLink target="_blank" href={link.link} rel="noreferrer">
										{link.name}
									</HomeLink>
								</StartonButton>
							</Box>
						))}
					</StartonBox>
				</StartonBox>
			</Container>
		</React.Fragment>
	)
}

export default Home
