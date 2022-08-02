/*
| Developed by Starton
| Filename : SignInWithWallet.js
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { Card, CardContent, Typography, styled } from '@mui/material'
import { useConnect } from 'wagmi'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { StartonBox } from 'components/StartonUtils/StartonBox'
import { StartonButton } from 'components/StartonUtils/StartonButton'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StartonSignInStyled = styled(Card)(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	padding: '5em',
}))

/*
|--------------------------------------------------------------------------
| SignIn with Matamask, Coinbase Wallet or WalletConnect using Wagmi connectors
|--------------------------------------------------------------------------
*/
export default function SignInWithWallet() {
	const { connect, connectors, error } = useConnect()
	const { t } = useTranslation()

	//utiliser styled pour les composants
	return (
		<StartonSignInStyled>
			<CardContent>
				<StartonBox>
					<Typography variant="h3">{t('common:sign-in-with')}</Typography>
				</StartonBox>
				<StartonBox>
					{connectors.map((connector) => (
						<StartonButton variant={'outlined'} key={connector.id} onClick={() => connect({ connector })}>
							<Image
								alt={''}
								src={`/${connector.name.replace(/\s/g, '')}.svg`}
								width={200}
								height={100}
							/>
						</StartonButton>
					))}
				</StartonBox>
				{error && (
					<StartonBox>
						<Typography variant="h5">{error.message}</Typography>
					</StartonBox>
				)}
			</CardContent>
		</StartonSignInStyled>
	)
}
