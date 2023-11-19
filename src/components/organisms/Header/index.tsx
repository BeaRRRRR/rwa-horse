'use client'

import ConnectButton from '@/components/molecules/ConnectButton/index';
import React from 'react';
import Link from 'next/link'

interface HeaderProps {
  seller?: boolean,
  stable?: boolean,
  buyer?: boolean,
  onSocialLogin?: () => void,
  isSocialsAuthenticated?: boolean,
}

const Header: React.FC<HeaderProps> = ({ buyer = false, seller = false , stable = false, onSocialLogin = () => {}, isSocialsAuthenticated = false}: HeaderProps) => {
  return (
    <header className="py-7 px-24 bg-brown flex justify-center">
        <div className="flex justify-between w-full">
          {!seller && !stable && <h1 className="text-3xl font-bold text-superwhite">HorsePad</h1>}
            <div className="flex align-center">
              {/* This will be the placeholder for the button */}
              {seller || buyer &&
               <div>
                 <Link href="/my-stable" className="text-superwhite text-xl flex items-center mr-4">
                My stable
                 </Link>
               </div>
              }
              {stable &&
               <div>
               <Link href="/" className="text-orange-500 flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            My Stable
              </Link>
               </div>
              }
              {isSocialsAuthenticated ? <p className="text-superwhite text-xl">Logged In!</p> :  
               <>
                 <button className="bg-orange text-superwhite w-full mr-6 rounded-lg text-xl font-bold shadow-lg focus:outline-none hover:bg-brown transition duration-300 ease-in-out" onClick={onSocialLogin}>Login with Socials</button>
                 <ConnectButton/>
              </>
              }
            </div>
        </div>
    </header>
  );
};

export default Header;
