import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className='overflow-hidden h-screen'>
      <Header />

      <main className='flex h-screen w-full'>
        <div className=' hidden md:block w-[260px] h-full bg-white !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-grey'>
          <Sidebar />
        </div>

        <section className='w-full md:w-[100vw-260px] h-full overflow-auto pb-12 bg-outletBackground'>
          {' '}
          <Outlet />
        </section>
      </main>
    </div>
  );
};
export default Layout;
