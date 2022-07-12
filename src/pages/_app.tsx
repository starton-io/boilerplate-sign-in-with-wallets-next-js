/*
| Developed by Starton
| Filename : _app.tsx
*/

import '../styles/globals.css'
import React from 'react'
import { ThemeOptions, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { deepmerge } from '@mui/utils'
import { enUS } from '@mui/material/locale'
import merge from 'lodash/merge'
import { DEFAULT_SEO_PROPS, DefaultSeoPropsExtra } from 'config/common/seo.config'
import { store } from 'stores/store'
import createEmotionCache from 'utils/createEmotionCache'
import theme from 'styles/theme'
import { useGetCanonialUrl } from 'hooks/useGetCanonialUrl'

/*
|--------------------------------------------------------------------------
| Client-side cache, shared for the whole session of the user in the browser.
|--------------------------------------------------------------------------
*/
const clientSideEmotionCache = createEmotionCache()

/*
|--------------------------------------------------------------------------
| Application interface modifier
|--------------------------------------------------------------------------
*/
interface AppEmotionProps extends AppProps {
	emotionCache?: EmotionCache
}

/*
|--------------------------------------------------------------------------
| Application layout
|--------------------------------------------------------------------------
*/
export default function StartonApp({
	Component,
	pageProps,
	router,
	emotionCache = clientSideEmotionCache,
}: AppEmotionProps) {
	// Prepare canonical url
	// ----------------------------------------------------------------------------
	const { url } = useGetCanonialUrl(router)

	// Create default SEO data props
	// ----------------------------------------------------------------------------
	const defaultDataProps = React.useMemo<DefaultSeoPropsExtra>(() => {
		// Prepare data with component data
		const seoProps: DefaultSeoPropsExtra = {
			canonical: url,
			openGraph: {
				url,
			},
		}

		// Deep merging
		return merge(DEFAULT_SEO_PROPS, seoProps)
	}, [url])

	// MUI create theme with I18N changer
	// ----------------------------------------------------------------------------
	const MUITheme = React.useMemo(() => {
		const partnerTheme = {} as ThemeOptions

		// Deep merge theme options with default theme and partner theme
		return createTheme(deepmerge(theme, partnerTheme), enUS)
	}, [])

	// Render
	// ----------------------------------------------------------------------------
	return (
		<CacheProvider value={emotionCache}>
			<Provider store={store}>
				<ThemeProvider theme={MUITheme}>
					<DefaultSeo {...defaultDataProps} />
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</CacheProvider>
	)
}
