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
import { frFR, enUS, Localization } from '@mui/material/locale'
import merge from 'lodash/merge'
import { WagmiConfig, createClient, defaultChains, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { DEFAULT_SEO_PROPS, DefaultSeoPropsExtra } from 'config/common/seo.config'
import { store } from 'stores/store'
import createEmotionCache from 'utils/createEmotionCache'
import theme from 'styles/theme'
import { useGetCanonialUrl } from 'hooks/useGetCanonialUrl'
import { Dictionary } from 'utils'
import { AvailableLanguages } from 'contracts'

/*
|--------------------------------------------------------------------------
| Client-side cache, shared for the whole session of the user in the browser.
|--------------------------------------------------------------------------
*/
const clientSideEmotionCache = createEmotionCache()

/*
|--------------------------------------------------------------------------
| Localization array for connected Material UI with Next Translate
|--------------------------------------------------------------------------
*/
const connectedLanguages: Dictionary<Localization, AvailableLanguages> = {
	en: enUS,
	fr: frFR,
}

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
		// TIPS: We can replace this value with something from API
		const apiDataOrSomething = {} as ThemeOptions

		// Deep merge theme options with default theme and partner theme
		const locale: AvailableLanguages = (router.locale?.toLowerCase() as unknown as AvailableLanguages) ?? 'en'
		return createTheme(deepmerge(theme, apiDataOrSomething), connectedLanguages?.[locale] ?? enUS)
	}, [router.locale])

	// Wagmi config : configure desired chains to be used.
	// Need to setup chains or providers ? Go here : https://wagmi.sh/docs/providers/configuring-chains
	// ----------------------------------------------------------------------------

	const { chains, provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()])

	//Init Wagmi client
	const client = createClient({
		autoConnect: true,
		connectors: [
			new MetaMaskConnector({ chains }),
			new CoinbaseWalletConnector({
				chains,
				options: {
					appName: 'wagmi',
				},
			}),
			new WalletConnectConnector({
				chains,
				options: {
					qrcode: true,
				},
			}),
		],
		provider,
		webSocketProvider,
	})

	// Render
	// ----------------------------------------------------------------------------
	return (
		<CacheProvider value={emotionCache}>
			<Provider store={store}>
				<ThemeProvider theme={MUITheme}>
					<DefaultSeo {...defaultDataProps} />
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{/* Wrap in wagmi component and passing client to it*/}
					<WagmiConfig client={client}>
						<Component {...pageProps} />
					</WagmiConfig>
				</ThemeProvider>
			</Provider>
		</CacheProvider>
	)
}
