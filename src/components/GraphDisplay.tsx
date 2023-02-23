import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { HorizontalLine, LeftButton, RightButton } from '../assets/icons';

const GraphDisplay = () => {
  const date = useSelector((state: RootState) => state.overview.date);
  const monthTimeStamp = useSelector(
    (state: RootState) => state.overview.monthTimeStamp
  );
  const orders = useSelector((state: RootState) => state.overview.orders);
  const payments = useSelector((state: RootState) => state.overview.payments);

  const { pending_orders, reconciled_orders, total_orders } = orders;
  const { unreconciled_payments, reconciled_payments, total_payments } =
    payments;
  return (
    <div className='py-4 flex flex-col md:flex-row gap-6'>
      <div className='bg-white w-full md:w-2/3 p-4'>
        <div className='flex flex-wrap flex-col md:flex-row justify-between mb-8 gap-4'>
          <h1 className='text-lg text-ash font-semibold'>{date}</h1>
          <select className='outline-none bg-transparent border border-lightGrey  text-lightGrey text-sm py-2 px-4'>
            <option value={'1Jan - 1 Jun'}>1Jan - 1 Jun</option>
          </select>
          <div className='flex gap-2 items-center'>
            <img src={LeftButton} alt='arrow left' />
            <img src={RightButton} alt='arrow right' />
          </div>
        </div>
        <div className='bg-graph h-64 bg-no-repeat'>
          <div className='flex justify-between'>
            {monthTimeStamp.map((month) => (
              <h2>{month}</h2>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/3'>
        <div className='bg-white text-dark mb-4  p-4'>
          <h1 className='text-sm mb-6 font-bold'>Orders</h1>
          <img src={HorizontalLine} alt='horizontal line' className='mb-6' />
          <p>
            Pending Orders:{' '}
            <span className='text-yellow'>{pending_orders}</span>
          </p>
          <p>
            Reconcilled Orders:{' '}
            <span className='text-greem'>{reconciled_orders}</span>
          </p>

          <p>
            Total Orders: <span className='text-blue'>{total_orders}</span>
          </p>
        </div>
        <div className='bg-white text-dark  p-4'>
          <h1 className='text-sm mb-6 font-bold'>Payments</h1>
          <img src={HorizontalLine} alt='horizontal line' className='mb-6' />
          <p>
            Un-reconcilled Payments:{' '}
            <span className='text-yellow'>{unreconciled_payments}</span>
          </p>
          <p>
            Reconcilled Payments:{' '}
            <span className='text-green'>{reconciled_payments}</span>
          </p>

          <p>
            Total Payments: <span className='text-blue'>{total_payments}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphDisplay;
