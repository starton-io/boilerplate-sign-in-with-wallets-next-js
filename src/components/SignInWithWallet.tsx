/*
| Developed by Starton
| Filename : SignInWithWallet.js
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { Button, Card, CardContent, Paper, Typography } from '@mui/material'
import { useConnect } from 'wagmi'
import Image from 'next/image'
import startonStyles from '../styles/Starton.module.css'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function SignInWithWallet() {
	const { connect, connectors, error } = useConnect()

	return (
		<Card className={startonStyles.wallets}>
			<CardContent>
				<div className={startonStyles.div}>
					<Typography variant="h3">Sign in with</Typography>
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
