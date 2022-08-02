/*
| Developed by Starton
| Filename : Logged.tsx
| Description : Logged component
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { useAccount, useDisconnect, useEnsName } from 'wagmi'
import { Typography, Card, CardContent } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { StartonBox } from 'components/StartonUtils/StartonBox'
import { StartonButton } from 'components/StartonUtils/StartonButton'

/*
|--------------------------------------------------------------------------
| Logged component who display user connect informations. More informations
| about logged wallet here : https://wagmi.sh/docs/getting-started
|--------------------------------------------------------------------------
*/

export default function Logged() {
	const { t } = useTranslation()
	const { address } = useAccount()
	const { data: ensName } = useEnsName({ address })
	const { disconnect } = useDisconnect()

	return (
		<Card>
			<CardContent>
				<StartonBox style={{ marginTop: '3em' }}>
					<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
						{t('common:connected')} {ensName ? `${ensName} (${address})` : address}
					</Typography>
				</StartonBox>
				<StartonBox sx={{ marginTop: '1em' }}>
					<StartonButton variant="outlined" color="error" onClick={() => disconnect()} size={'large'}>
						{t('common:disconnect')}
					</StartonButton>
				</StartonBox>
			</CardContent>
		</Card>
	)
}
