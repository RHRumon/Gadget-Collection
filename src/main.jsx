import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Cart from './components/Cart/Cart.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import { ToastContainer, toast } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
         path: "statistics",
         element: <Statistics></Statistics>
      },
      {
         path: "dashboard",
         element: <Dashboard></Dashboard>,
         loader: () => fetch('/data.json')
      },
      {
         path: "cart",
         element: <Cart></Cart>
      },
      {
         path: "wishlist",
         element: <Wishlist></Wishlist>
      },
      {
         path: "productdetails/:product_id",
         element: <ProductDetails></ProductDetails>,
         loader: () => fetch(`/data.json`)
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
