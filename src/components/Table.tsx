import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { DownArrow } from '../assets/icons';
const Table = () => {
  const allPayments = useSelector(
    (state: RootState) => state.overview.allPayments
  );
  console.log('allpayments', allPayments);
  return (
    <table className='table-auto w-max lg:w-full my-4'>
      <thead>
        <tr className='text-tableData bg-offWhite text-left'>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transaction No</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {allPayments.map((payment: any) => (
          <tr
            key={payment}
            className='border-b border-tableRowBorder text-tableData text-sm'
          >
            <td className='px-4 py-2'>
              <div className='flex gap-10 items-center'>
                <div className='rounded-[50%] bg-tableData p-2'>
                  <p className='text-white'>VW</p>
                </div>
                <span className='text-deepGrey'>{payment.item_type}</span>
              </div>
            </td>
            <td className='px-4 py-2'>{payment.price}</td>
            <td className='px-4 py-2'>{payment.transaction_number}</td>
            <td className='px-4 py-2'>{payment.time}</td>
            <td className='px-4 py-2'>
              <div className='flex justify-between items-center'>
                <div
                  className={`flex gap-4 px-4 py-2 border border-tableRowBorder rounded-full items-center ${
                    payment.status === 'Reconciled'
                      ? 'text-green'
                      : payment.status === 'Pending'
                      ? 'text-yellow'
                      : 'text-statusGrey'
                  }`}
                >
                  <p
                    className={`${
                      payment.status === 'Reconciled'
                        ? 'bg-green'
                        : payment.status === 'Pending'
                        ? 'bg-yellow'
                        : 'bg-statusGrey'
                    } rounded-[50%] w-3`}
                  >
                    0
                  </p>
                  {payment.status}
                </div>
                <img src={DownArrow} alt='arrow pointing down' />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
