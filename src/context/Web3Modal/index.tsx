'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { Chain } from '@wagmi/core'

export const spicy = 
  {
    id: 88_882,
    name: 'Chiliz Spicy Testnet',
    network: 'chiliz-spicy-Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'CHZ',
      symbol: 'CHZ',
    },
    rpcUrls: {
      default: {
        http: [
          'https://spicy-rpc.chiliz.com',
          'https://chiliz-spicy.publicnode.com'
        ],
        webSocket:[
          'wss://spicy-rpc-ws.chiliz.com',
          'wss://chiliz-spicy.publicnode.com'
        ]
      },
      public: {
        http: [
          'https://spicy-rpc.chiliz.com',
          'https://chiliz-spicy.publicnode.com'
        ],
        webSocket:[
          'wss://spicy-rpc-ws.chiliz.com',
          'wss://chiliz-spicy.publicnode.com'
        ]
      },
    },
    blockExplorers: {
      default: {
        name: 'Chiliz Explorer',
        url: 'http://spicy-explorer.chiliz.com',
      },
    },
    testnet: true,
  }

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''

// 2. Create wagmiConfig
const metadata = {
  name: 'RWA horse',
  description: 'RWA horse',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [spicy]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'dark' })

export type Props = {
  children: React.ReactNode,
}

export function Web3Modal({ children }: Props) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
