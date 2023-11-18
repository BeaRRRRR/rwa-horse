// components/HorseCard.tsx
import React from 'react';

interface HorseCardProps {
  name: string;
  description: string;
  tokens: number;
  timestamp?: string;
  // Add other props as necessary
}

const HorseCard: React.FC<HorseCardProps> = ({ name, description, tokens, timestamp }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between mb-4">
      <div className="flex-1">
        <div className="bg-gray-300 h-24 w-24 rounded-md mb-3"></div> {/* Placeholder for image */}
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="text-right">
        <div className="text-orange-500 font-semibold">{tokens} tokens</div>
        {timestamp && <div className="text-sm text-gray-500">{timestamp}</div>}
      </div>
    </div>
  );
};

export default HorseCard;
