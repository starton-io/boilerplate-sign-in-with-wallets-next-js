/*
| Developed by Starton
| Filename : index.tsx
*/

import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import { Box, Button, Container, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Home: NextPage = () => {
	const { t } = useTranslation()
	const router = useRouter()

	return (
		<React.Fragment>
			<NextSeo title={t('index:seo.title')} description={t('index:seo.description')} />
			<Container
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Typography variant={'h2'} textAlign={'center'} width={'100%'}>
					{t('common:welcome-msg')}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						mt: 2,
					}}
				>
					{router?.locales?.map((locale) => (
						<Link key={locale} href={router.asPath} locale={locale}>
							<Button variant={'outlined'} sx={{ mx: 2 }}>
								{t(`common:languages.${locale}`)}
							</Button>
						</Link>
					))}
				</Box>
			</Container>
		</React.Fragment>
	)
}

export default Home
