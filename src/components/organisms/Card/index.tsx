'use client'

// components/Card.tsx
import React from 'react';
import ProgressBar from '@/components/molecules/ProgressBar/index';
import { parseEther } from 'viem'
import { writeContract  } from 'wagmi/actions'
import { tokenAbi } from '@/util/tokenAbi';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  mintedNFT: number;
  totalNFT: number;
  nftPrice: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  mintedNFT,
  totalNFT,
  nftPrice
}) => {
  async function buy() {
    console.log('buy')
    const { hash } = await writeContract({
      address: '0x792dCc75563E901Ee6CA04B41B0a89A671428C4a',
      abi: tokenAbi,
      functionName: 'mintTokens',
      value: parseEther('0.5')
    })
  }

  const [quantity, setQuantity] = React.useState<number>(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="mb-14">
      <img src={imageUrl} alt="" className="w-full h-60 object-cover rounded-t-xl" />
      <div className="p-6 bg-lbrown rounded-b-xl">
        <h2 className="text-4xl text-superwhite font-bold mb-2">{title}</h2>
        <p className="text-orange mb-4">{subtitle}</p>
        <p className="text-gray mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-orange">{mintedNFT * 100 / totalNFT}% minted</p>
            <p className="text-orange">{mintedNFT} tokens</p>
          </div>
          <div>
            <p className="text-gray">100%</p>
            <p className="text-gray">{totalNFT} tokens</p>
          </div>
        </div>
        <ProgressBar percentage={mintedNFT * 100 / totalNFT } />
        <p className="mt-6 mb-2 text-2xl text-white font-bold">{nftPrice} CHZ</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button onClick={decreaseQuantity} className="text-white bg-gray-600 h-10 w-10 flex items-center justify-center rounded-full">
              &ndash;
            </button>
            <p className="text-white mx-4">{quantity}</p>
            <button onClick={increaseQuantity} className="text-white bg-gray-600 h-10 w-10 flex items-center justify-center rounded-full">
              +
            </button>
            </div>
        </div>
        <button className="bg-orange text-white py-2 px-10 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600" onClick={buy}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
