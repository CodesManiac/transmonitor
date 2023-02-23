import React from 'react';
import { StatsCardType } from './../types/DataTypes';

const StatsCard = ({ image, title, amount }: StatsCardType) => {
  return (
    <div className='bg-white flex gap-2 p-4'>
      <div>
        <p className='text-xs text-grey'>{title}</p>
        <p className='text-base md:text-lg text-dark'>{amount}</p>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default StatsCard;
