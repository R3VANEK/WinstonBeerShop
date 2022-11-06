import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css';
import './css/landingpage.css'

import LandingPage from './components/LandingPage/LandingPage';
import BeerDetails from './components/BeerDetails/BeerDetails';
import Catalog from './components/Catalog/Catalog';
import ErrorPage from './components/ErrorPage/ErrorPage';

import { detailsLoader } from './router-loaders/detailsLoader';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "beer-details/:beerId",
    element: <BeerDetails/>,
    loader: detailsLoader,
    errorElement: <ErrorPage />
  },
  {
    path: "catalog",
    element: <Catalog/>,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
