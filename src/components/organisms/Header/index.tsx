import ConnectButton from '@/components/molecules/ConnectButton/index';
import React from 'react';
import Link from 'next/link'

interface HeaderProps {
  // Define additional props as needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="py-4 bg-gray-100 flex justify-center">
      <div className="w-3/5 mt-15 mb-9">
        <div className="flex justify-between ">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">HorsePad</h1>
            <div className="flex align-center mb-4">
              {/* This will be the placeholder for the button */}
              <Link href="/my-stable" className="text-orange-500 text-xl flex items-center mr-4">
                My stable
              </Link>
              <ConnectButton/>
            </div>
        </div>
        <p className="font-medium text-lg mb-1 text-gray-900">Tokenizing Race Horse Ownership</p>
        <p className="text-gray-600 text-gray-900">Democratizing the ownership of race horses through tokenization. Own, compete, and earn.</p>
      </div>
    </header>
  );
};

export default Header;
