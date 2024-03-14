import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './Root';
import { KomadniNamestaj, NamestajPoMeri, ProjektovanjeEnterijera, ONama, Item } from './Screens'
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
        // children: [
        //   {
        //     path: '/komadniNamestaj/:id',
        //     element: <Item />
        //   }
        // ]
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
        path: '/oNama',
        element: <ONama />
      },
      {
        path: '/komadniNamestaj/:id',
        element: <Item />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
