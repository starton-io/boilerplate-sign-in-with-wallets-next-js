/*
| Developed by Starton
| Filename : wagmi.service.tsx
*/

import { configureChains, createClient, defaultChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// Wagmi config : configure desired chains to be used.
// Need to setup chains or providers ? Go here : https://wagmi.sh/docs/providers/configuring-chains
// ----------------------------------------------------------------------------
export const { chains, provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()])

//Init Wagmi client
export const wagmiClient = createClient({
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
