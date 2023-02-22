import React from 'react';
import { mainData, paymentsData, ordersData } from '../data/Data';
import { MerchantProfile } from '../assets/icons';

const Sidebar = () => {
  return (
    <aside className='py-6 text-navigationGrey px-4'>
      <button className='bg-green rounded-full text-white font-Roboto font-bold tracking-wide py-2 px-4 leading-[14px] text-xs'>
        GENERATE INVOICE
      </button>
      <div className='mt-6'>
        <h1 className='font-medium mb-6'>Main</h1>

        {mainData.map((main) => (
          <div
            key={main.id}
            className='flex gap-8 mb-6 cursor-pointer items-center'
          >
            <img src={main.icon} alt={main.title} />
            <a href={main.route} className='text-[11px] leading-[14.63px]'>
              {main.title}
            </a>
          </div>
        ))}
      </div>

      <div className='mt-6'>
        <h1 className='font-medium mb-6'>Payments</h1>

        {paymentsData.map((payment) => (
          <div
            key={payment.id}
            className='flex items-center gap-8 mb-6 cursor-pointer '
          >
            <img src={payment.icon} alt={payment.title} />
            <a href={payment.route} className='text-[11px] leading-[14.63px]'>
              {payment.title}
            </a>
          </div>
        ))}
      </div>
      <div className='mt-6  '>
        <h1 className='font-medium mb-6'>Orders</h1>
        {ordersData.map((order) => (
          <div key={order.id} className='flex gap-8 cursor-pointer mb-6'>
            <img src={order.icon} alt={order.title} />
            <a href={order.route} className='text-[11px] leading-[14.63px]'>
              {order.title}
            </a>
          </div>
        ))}
      </div>

      <div>
        <div className='flex gap-8 cursor-pointer'>
          <img src={MerchantProfile} alt='Merchant' />
          <p className='text-[11px] leading-[14.63px]'>Merchant Profile</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
