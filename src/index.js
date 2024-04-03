import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root';
import { KomadniNamestaj, NamestajPoMeri, ProjektovanjeEnterijera, Item, Cart, Favorite } from './Screens'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: '/komadniNamestaj',
        element: <KomadniNamestaj />,
      },
      {
        path: '/namestajPoMeri',
        element: <NamestajPoMeri />
      },
      {
        path: '/projektovanjeEnterijera',
        element: <ProjektovanjeEnterijera />
      },
      {
        path: '/favorite',
        element: <Favorite />
      },
      {
        path: '/komadniNamestaj/:id',
        element: <Item />
      },
      {
        path: '/cart',
        element: <Cart />
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
