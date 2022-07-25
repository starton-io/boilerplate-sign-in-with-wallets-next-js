/*
| Developed by Starton
| Filename : SignInWithWallet.js
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { useConnect } from 'wagmi'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import startonStyles from '../styles/Starton.module.css'

/*
|--------------------------------------------------------------------------
| SignIn with Matamask, Coinbase Wallet or WalletConnect using Wagmi connectors
|--------------------------------------------------------------------------
*/
export default function SignInWithWallet() {
	const { connect, connectors, error } = useConnect()
	const { t } = useTranslation()

	return (
		<Card className={startonStyles.wallets}>
			<CardContent>
				<div className={startonStyles.div}>
					<Typography variant="h3">{t('common:sign-in-with')}</Typography>
				</div>
				<div className={startonStyles.buttons}>
					{connectors.map((connector) => (
						<Button key={connector.id} onClick={() => connect({ connector })}>
							<Image
								alt={''}
								src={`/${connector.name.replace(/\s/g, '')}.svg`}
								width={200}
								height={100}
							/>
						</Button>
					))}
				</div>
				{error && (
					<div className={startonStyles.div}>
						<Typography variant="h5">{error.message}</Typography>
					</div>
				)}
			</CardContent>
		</Card>
	)
}
