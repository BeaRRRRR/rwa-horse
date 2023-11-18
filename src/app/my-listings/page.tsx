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
    },
    // Add more horse objects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6 text-xl">
            My Listings
          <ConnectButton />
        </div>
        {horses.map((horse, index) => (
          <HorseCard key={index} {...horse} />
        ))}
        <Link href="/create">
          <button className="bg-orange-400 text-gray-900 rounded py-4 w-full">Create New</button>
        </Link>
      </div>
    </div>
  );
};

export default MyStablePage;
