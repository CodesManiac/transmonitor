import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import AllOrders from './pages/allOrders';
import AllPayments from './pages/allPayments';
import ErrorPage from './pages/errorPage';
import OverView from './pages/overview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'overview',
        element: <OverView />,
      },
      {
        path: 'all-payments',
        element: <AllPayments />,
      },
      {
        path: 'all-orders',
        element: <AllOrders />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
