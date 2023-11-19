'use client'

// components/HorseCard.tsx
import React from 'react';

interface HorseCardProps {
  name: string;
  age: string;
  height: string;
  gender: string;
  raceType: string;
  breed: string;
  color: string;
  description: string;
  totalNFT: string;
  price: string;
  date: string;
  imageUrl: string; // Assuming you pass the image URL as a prop
}

const HorseCard: React.FC<HorseCardProps> = ({
  name,
  age,
  height,
  gender,
  raceType,
  breed,
  color,
  description,
  totalNFT,
  price,
  date,
  imageUrl
}) => {
  return (
    <div className="">
      <div className="flex">
        <div className="mr-10">
          <img
            src={imageUrl}
            alt={name}
            className="rounded-lg object-cover w-full h-60 w-60" // Adjust size as needed
          />
        </div>
        <div className="col-span-2">
          <h3 className="text-3xl font-bold text-superwhite mb-4">{name}</h3>
          <p className="text-orange mb-2">{`${age} · ${height} · ${gender} · ${raceType} · ${breed} · ${color}`}</p>
          <p className="text-gray pb-16">{description}</p>
          <p className="text-superwhite text-xl mb-3">{`Total ${totalNFT} @ ${price}`}</p>
          <p className="text-gray">{date}</p>
        </div>
      </div>
      <hr className="border-t border-gray my-14" />
    </div>
  );
};

export default HorseCard;
