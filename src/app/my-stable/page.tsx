// pages/mystable.tsx
import ConnectButton from '@/components/molecules/ConnectButton/index';
import HorseCard from '@/components/organisms/StableCard/index';
import React from 'react';
import Link from 'next/link'

const MyStablePage: React.FC = () => {
  // Sample data - replace with actual data from your database or API
  const horses = [
    {
      name: 'Horse name here',
      description: 'Description & Info',
      tokens: 2,
      timestamp: 'Timestamp (November 15th 2023, 14:23)',
    },
    // Add more horse objects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-orange-500 flex items-center">
            <svg className="w-6 h-6 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            My Stable
          </Link>
          <ConnectButton />
        </div>
        {horses.map((horse, index) => (
          <HorseCard key={index} {...horse} />
        ))}
      </div>
    </div>
  );
};

export default MyStablePage;
