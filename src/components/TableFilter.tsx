import React, { useState } from 'react';
import { Search } from '../assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const TableFilter = () => {
  const statusType = useSelector(
    (state: RootState) => state.overview.statusType
  );

  const [searchInput, setSearchInput] = useState('');
  const [status, setStatus] = useState('');
  return (
    <div className='flex flex-wrap text-dark w-full justify-between py-2'>
      <div className='flex gap-6 items-center'>
        <p className='text-[13px]'>Showing</p>
        <select className='w-20 outline-none bg-transparent  text-blu text-sm p-4'>
          <option value={20}>20</option>
        </select>
        <p className='text-[13px]'>out of 500 payments</p>
      </div>
      <div className='md:flex hidden items-center p-2 border-b-[0.5px] border-b-searchBorder'>
        <img src={Search} alt='search' />
        <input
          type='text'
          placeholder='Search Payments'
          className='outline-none bg-transparent text-[11px] leading-[15px] placeholder-searchBorder p-2'
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <div className='flex gap-4 items-center'>
        <p>Show</p>
        <select
          onChange={(e) => setStatus(e.target.value)}
          className='w-full outline-none rounded-[2px] bg-transparent border border-lightGrey  hover:bg-offWhite text-[13px] py-2 px-4'
        >
          {statusType.map((status) => (
            <option
              key={status}
              value={status}
              className='text-deepGrey  text-xs'
            >
              {status}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TableFilter;
