/*
| Developed by Starton
| Filename : SignInWithWallet.js
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { CardContent, Typography } from '@mui/material'
import { useConnect } from 'wagmi'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { StartonBox } from 'components/StartonUtils/StartonBox'
import { StartonButton } from 'components/StartonUtils/StartonButton'
import { StartonAuthCard } from 'components/StartonUtils/StartonAuthCard'

/*
|--------------------------------------------------------------------------
| SignIn with Metamask, Coinbase Wallet or WalletConnect using Wagmi connectors
|--------------------------------------------------------------------------
*/
export default function SignInWithWallet() {
	const { connect, connectors, error } = useConnect()
	const { t } = useTranslation()

	//utiliser styled pour les composants
	return (
		<StartonAuthCard>
			<CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				<StartonBox>
					<Typography variant="h2" color={'secondary'}>
						{t('index:content.sign-in-with')}
					</Typography>
				</StartonBox>
				<StartonBox>
					{connectors.map((connector) => (
						<StartonButton variant={'contained'} key={connector.id} onClick={() => connect({ connector })}>
							<Image
								alt={connector.name}
								src={`/${connector.name.replace(/\s/g, '')}.svg`}
								width={175}
								height={75}
							/>
						</StartonButton>
					))}
				</StartonBox>
				{error ? (
					<StartonBox>
						<Typography variant="body2" color={'error'}>
							{error.message}
						</Typography>
					</StartonBox>
				) : null}
			</CardContent>
		</StartonAuthCard>
	)
}
