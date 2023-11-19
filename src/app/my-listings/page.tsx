// pages/mystable.tsx
import ConnectButton from '@/components/molecules/ConnectButton/index';
import HorseCard from '@/components/organisms/StableCard/index';
import React from 'react';
import Link from 'next/link'
import Header from '@/components/organisms/Header/index';

const MyStablePage: React.FC = () => {
  // Sample data - replace with actual data from your database or API
const horses = [
    {
      name: 'Strike Gold',
      age: '2 years',
      height: '16 hands',
      gender: 'Filly',
      raceType: 'Flat',
      breed: 'Dutch Warmblood',
      color: 'Chestnut brown',
      description: 'Description here Description here Description here Description here Description here',
      totalNFT: '820 NFTs',
      price: '40 CHD each',
      date: 'November 15th 2023, 13:20 PM',
      imageUrl: 'https://i.imgur.com/44BfxHj.jpeg'
    },
    {
      name: 'Strike Gold',
      age: '2 years',
      height: '16 hands',
      gender: 'Filly',
      raceType: 'Flat',
      breed: 'Dutch Warmblood',
      color: 'Chestnut brown',
      description: 'Description here Description here Description here Description here Description here',
      totalNFT: '820 NFTs',
      price: '40 CHD each',
      date: 'November 15th 2023, 13:20 PM',
      imageUrl: 'https://i.imgur.com/44BfxHj.jpeg'
    },
]

  return (
    <div className="min-h-screen bg-brown">
      <Header seller/>

          <div className='max-w-4xl mx-auto'>
      <header className="flex justify-between items-center mb-14">
        <h1 className="text-4xl text-orange">Your horses</h1>
    <Link href='/create'>
        <p className="bg-orange py-2 px-4 rounded-lg shadow-lg">
          Add a new horse
        </p>
    </Link>
      </header>

      <div>
      {horses.map((horse, index) => (
          <HorseCard key={index} {...horse} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MyStablePage;
