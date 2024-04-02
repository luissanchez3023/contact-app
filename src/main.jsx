import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar.jsx';
import NewContactModal from './components/NewContactModal.jsx';
import OverviewPage from './pages/Overview.page.jsx';
import FavoritesPage from './pages/Favorites.page.jsx';
import ContactsPage from './pages/Contacts.page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <OverviewPage />
      </>
    ),
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/Favorites',
    element: (
      <>
        <Navbar />
        <FavoritesPage />
      </>
    ),
  },
  {
    path: '/newContact',
    element: (
      <>
        <Navbar />
        <NewContactModal/>
      </>
    ),
  },
  {
    path: '/view',
    element: (
      <>
        <Navbar />
        <NewContactModal/>
        <ContactsPage/>
        <FavoritesPage/>

      </>
    ),
  },
  {
    path: '/Contacts',
    element: (
      <>
        <Navbar />
        <ContactsPage />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
