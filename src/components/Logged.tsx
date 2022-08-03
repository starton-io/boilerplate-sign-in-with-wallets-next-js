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
import { StartonAuthCard } from 'components/StartonUtils/StartonAuthCard'

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
		<StartonAuthCard>
			<CardContent>
				<StartonBox
					style={{
						marginTop: (theme) => theme.spacing(2),
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
						{t('index:content.connected')}
					</Typography>
					<Typography color={'secondary'}>{ensName ? `${ensName} (${address})` : address}</Typography>
				</StartonBox>
				<StartonBox sx={{ marginTop: (theme) => theme.spacing(2) }}>
					<StartonButton variant="outlined" color="error" onClick={() => disconnect()} size={'large'}>
						{t('index:content.disconnect')}
					</StartonButton>
				</StartonBox>
			</CardContent>
		</StartonAuthCard>
	)
}
