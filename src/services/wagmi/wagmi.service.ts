/*
| Developed by Starton
| Filename : wagmi.service.tsx
*/

import { configureChains, createConfig } from 'wagmi'
import { mainnet, optimism, polygon } from '@wagmi/core/chains'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

// Wagmi config : configure desired chains to be used.
// Need to setup chains or providers ? Go here : https://wagmi.sh/docs/providers/configuring-chains
// ----------------------------------------------------------------------------
export const { chains, publicClient, webSocketPublicClient } = configureChains(
	[mainnet, optimism, polygon],
	[publicProvider()],
)

//Init Wagmi config
export const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: [new MetaMaskConnector({ chains })],
	publicClient,
	webSocketPublicClient,
})
