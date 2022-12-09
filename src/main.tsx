import { ConnectKitProvider } from 'connectkit'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'

import { App } from './App'
import { client } from './wagmi.config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider theme='midnight'>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
