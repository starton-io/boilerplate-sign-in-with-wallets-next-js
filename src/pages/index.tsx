/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Box } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useAccount } from 'wagmi'
import SignInWithWallet from 'components/state/SignInWithWallet'
import Logged from 'components/state/Logged'

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
				<Box height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
					{!isConnected ? <SignInWithWallet /> : <Logged />}
				</Box>
			</Container>
		</React.Fragment>
	)
}

export default Home
