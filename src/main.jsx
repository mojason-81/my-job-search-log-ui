import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  redirect,
  createBrowserRouter,
} from 'react-router-dom';
import Contacts, { loader as contactsLoader } from './routes/Contacts';
import Company, { loader as companyLoader } from './routes/Company';
import NewContact from './routes/NewContact'; // action as navigateToIndexAction,
import ContactDetails, {
  loader as contactDetailsLoader,
} from './routes/ContactDetails';
import RootLayout from './routes/RootLayout';
import './index.css';

// TODO: Maybe move this to a 'Utilities" function / file / dir / etc
const navigateToIndexAction = () => redirect('/');

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Contacts />,
        loader: contactsLoader,
        action: navigateToIndexAction,
        children: [
          {
            path: '/create-contact',
            element: <NewContact />,
            action: navigateToIndexAction,
          },
          {
            path: '/contacts/:id',
            element: <ContactDetails />,
            loader: contactDetailsLoader,
          },
        ],
      },
      {
        path: '/company/:id',
        element: <Company />,
        loader: companyLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
