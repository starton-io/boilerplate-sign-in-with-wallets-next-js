/*
| Developed by Starton
| Filename : Logged.tsx
| Description : Logged component
| Author : Maxime AIGUIER (maxime@starton.io)
*/

import * as React from 'react'
import { useAccount, useDisconnect } from 'wagmi'
import { Typography, CardContent } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { Theme } from '@mui/system'
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
	const { disconnect } = useDisconnect()

	return (
		<StartonAuthCard>
			<CardContent>
				<StartonBox
					sx={{
						margin: (theme: Theme) => theme.spacing(2, 0, 0, 0),
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
						{t('index:content.connected')}
					</Typography>
					<Typography variant={'body2'} color={'secondary'}>
						{address}
					</Typography>
				</StartonBox>
				<StartonBox sx={{ margin: (theme: Theme) => theme.spacing(2, 0, 0, 0) }}>
					<StartonButton variant="outlined" color="error" onClick={() => disconnect()} size={'large'}>
						{t('index:content.disconnect')}
					</StartonButton>
				</StartonBox>
			</CardContent>
		</StartonAuthCard>
	)
}
