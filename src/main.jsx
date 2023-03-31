import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  redirect,
  createBrowserRouter,
} from 'react-router-dom';
// TODO: Maybe pull the loaders out of the individual components and put them in dedicated files.
//       Maybe a single "loaders" dir or perhaps refactor to give each component it's own dir for
//       a) the component
//       b) the css module
//       c) the loader(s)
//       d) the action(s)
//       This might be easier to navigate and reason about when looking at the dir tree
import Contacts, { loader as contactsLoader } from './routes/Contacts';
import Company, { loader as companyLoader } from './routes/Company';
import NewContact from './routes/NewContact'; // action as navigateToIndexAction,
import ContactDetails, {
  loader as contactDetailsLoader,
} from './routes/ContactDetails';
import RootLayout from './routes/RootLayout';
import './index.css';
import ContactEdit from './routes/ContactEdit';

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
            path: '/contacts',
            children: [
              {
                path: '/contacts/:id',
                element: <ContactDetails />,
                loader: contactDetailsLoader,
                action: navigateToIndexAction,
              },
              {
                path: '/contacts/:id/edit',
                element: <ContactEdit />,
                loader: contactDetailsLoader,
                action: navigateToIndexAction,
              },
            ],
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
