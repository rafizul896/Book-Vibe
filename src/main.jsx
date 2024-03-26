import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReadBooks from './components/ReadBooks.jsx';
import WishlistBooks from './components/WishlistBooks.jsx';
import PagesToRead from './pages/PagesToRead.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "readbooks",
            element: <ReadBooks></ReadBooks>
          },
          {
            path: "wishlistbooks",
            element: <WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
