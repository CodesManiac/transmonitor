import React from 'react';
import Table from './Table';
import TableFilter from './TableFilter';

const Payments = () => {
  return (
    <section className='mt-6'>
      <h1 className='text-4xl text-dark'>Payments</h1>
      <TableFilter />
      <div className='overflow-x-auto'>
        <Table />
      </div>
    </section>
  );
};

export default Payments;
