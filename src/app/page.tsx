'use client'

import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3AuthModalPack, Web3AuthConfig } from '@safe-global/auth-kit'
import { Web3AuthOptions } from '@web3auth/modal'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'

import Card from '@/components/organisms/Card/index';
import Header from '@/components/organisms/Header/index';
import StatsPanel from '@/components/organisms/StatsPanel/index';
import { useEffect, useState } from 'react';
import { ADAPTER_EVENTS, CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';

const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x1',
    // https://chainlist.org/
    rpcTarget: 'https://rpc.ankr.com/eth'
  }

// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId: 'BL3v4iilDC4Nw4dbtTXtIUUVO9RDEvslHhEID030bia4azLZb1yniRpJuTLsg9ISJ_coxJVLar1ffYqo6fWaODk', // https://dashboard.web3auth.io/
  web3AuthNetwork: 'testnet',
  chainConfig, 
  uiConfig: {
    theme: 'white',
  }
}

// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#configuring-adapters
const modalConfig = {
  [WALLET_ADAPTERS.TORUS_EVM]: {
    label: 'torus',
    showOnModal: false
  },
  [WALLET_ADAPTERS.METAMASK]: {
    label: 'metamask',
    showOnDesktop: true,
    showOnMobile: false
  }
}

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });
// https://web3auth.io/docs/sdk/pnp/web/modal/whitelabel#whitelabeling-while-modal-initialization
const openloginAdapter = new OpenloginAdapter({
  loginSettings: {
    mfaLevel: 'mandatory'
  },
  adapterSettings: {
    network: 'testnet',
    clientId: 'BL3v4iilDC4Nw4dbtTXtIUUVO9RDEvslHhEID030bia4azLZb1yniRpJuTLsg9ISJ_coxJVLar1ffYqo6fWaODk',
    uxMode: 'popup',
    whiteLabel: {
      name: 'Safe'
    }
  },
  privateKeyProvider,
})

const web3AuthConfig: Web3AuthConfig = {
  txServiceUrl: 'https://safe-transaction-goerli.safe.global'
}

export default function Home() {
  // Data for the cards, could also be fetched from an API
  const [isSocialsAuthenticated, setSocialsAuthenticated] = useState(false)

  async function handleSocialLogin() {
    console.log('social login')
    const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig)
    try {
    await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig })
    const authKitSignData = await web3AuthModalPack.signIn()
        setSocialsAuthenticated(true)

      web3AuthModalPack.subscribe(ADAPTER_EVENTS.CONNECTED, () => {
        console.log('connect')
        setSocialsAuthenticated(true)
      })
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="bg-superwhite">
      <Header onSocialLogin={handleSocialLogin} isSocialsAuthenticated={isSocialsAuthenticated} />
      <main>
        <div >
          <section className='flex justify-between h-96 bg-white'>
            <div className='py-20 w-1/2'>
              <div className="mx-auto max-w-lg">
              <p className="text-black text-5xl mb-12">
                <span className="text-orange">Tokenizing</span>
                <br></br>
                Race Horse Ownership
              </p>
              <p className="text-black text-2xl">
                Democratizing the ownership of race horses through tokenization. Own, compete, and earn.
              </p>
              </div>
            </div>
            <img className='w-1/2 h-full'/>
          </section>

          <section className="max-w-6xl mx-auto px-4 py-10">
            <StatsPanel />
          </section>

          <section className="bg-brown  w-screen pt-28 pb-4">
            <div className="w-3/5 mx-auto px-4">
              <h3 className="text-5xl font-bold mb-10 text-gray-900 text-orange mt-30">Listings</h3>
              <p className="text-white text-xl mb-10">Text here - Democratizing the ownership of race horses through tokenization. Own, compete, and earn.</p>
              <div className="">
                  <Card
                    title="Strike Gold"
                    subtitle="2 years · 16 hands · Filly · Dutch Warmblood · Chestnut brown"
                    description="Has a gentle temperament and a competitive spirit, making her well-suited for both experienced riders and those new to the racing scene. She has been trained in both flat racing and show jumping, showcasing remarkable versatility and athleticism."
                    imageUrl="https://i.imgur.com/SU7gZt0.jpeg"
                    mintedNFT={320}
                    totalNFT={1000}
                    nftPrice='1'
                  />
                  <Card
                    title="Jacky William"
                    subtitle="4 years · 16 hands · Filly · Dutch Warmblood · Chestnut brown"
                    description="Bred from a million dollar race horse"
                    imageUrl="https://i.imgur.com/SU7gZt0.jpeg"
                    mintedNFT={320}
                    totalNFT={1000}
                    nftPrice='1'
                  />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
