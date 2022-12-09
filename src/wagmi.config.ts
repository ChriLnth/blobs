import { getDefaultClient } from 'connectkit'
import { configureChains, createClient } from 'wagmi'
import { polygonMumbai, arbitrumGoerli } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { alchemyProvider } from 'wagmi/providers/alchemy'

import { ENV } from './config'

const alchemyApiKey = ENV.alchemyApiKey
const allowedChains = [polygonMumbai, arbitrumGoerli]

const { chains, provider } = configureChains(allowedChains, [
  alchemyProvider({ apiKey: alchemyApiKey }),
])

export const client = createClient(
  getDefaultClient({
    appName: 'blobs',
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    provider,
  })
)
  