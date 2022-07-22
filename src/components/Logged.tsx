import * as React from 'react'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { Typography, Button, Card, CardContent } from '@mui/material'
import startonStyles from 'styles/Starton.module.css'

export default function SignInWithWallet() {
	const { address } = useAccount()
	const { data: ensName } = useEnsName({ address })
	const { disconnect } = useDisconnect()

	return (
		<Card className={startonStyles.wallets}>
			<CardContent>
				{' '}
				<div className={startonStyles.div} style={{ marginTop: '3em' }}>
					<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
						You are connected with the wallet {ensName ? `${ensName} (${address})` : address}
					</Typography>
				</div>
				<div className={startonStyles.box}>
					<Button variant="outlined" color="error" onClick={() => disconnect()} size={'large'}>
						Disconnect
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
