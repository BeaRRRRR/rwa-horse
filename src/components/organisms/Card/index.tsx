'use client'
import ProgressBar from '@/components/molecules/ProgressBar/index';
import React from 'react';

interface CardProps {
  title: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ title, details }) => {
  const [quantity, setQuantity] = React.useState<number>(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex justify-between bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col">
        <h4 className="font-bold text-lg mb-2 text-gray-900">{title}</h4>
        <div className="text-gray-500 mb-4 text-gray-900">
          <p>{details}</p>
          <ProgressBar percentage={60} />
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-900 rounded px-2 py-1">-</button>
          <span className="text-gray-900">{quantity}</span>
          <button onClick={increaseQuantity} className="bg-gray-200 text-gray-900 rounded px-2 py-1">+</button>
          <button className="bg-orange-400 text-gray-900 rounded px-4 py-2">Buy</button>
        </div>
      </div>
      <div className="ml-4 w-72 h-72 bg-gray-300 rounded-lg">
        {/* Image placeholder */}
      </div>
    </div>
  );
};

export default Card;
