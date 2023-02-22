import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <Header />

      <main className='flex h-screen w-full'>
        <div className=' hidden md:block w-[260px] h-screen bg-white px-4'>
          <Sidebar />
        </div>
        <section className='w-full md:w-[100vw-260px] h-full overflow-auto  bg-outletBackground'>
          {' '}
          <Outlet />
        </section>
      </main>
    </div>
  );
};
export default Layout;
