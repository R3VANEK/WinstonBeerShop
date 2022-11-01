import React from 'react';
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";

import './index.css';
import './css/landingpage.css'

import LandingPage from './sites/LandingPage/LandingPage';
import BeerDetails from './sites/BeerDetails/BeerDetails';
import Catalog from './sites/Catalog/Catalog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "beer-details/:beerId",
    element: <BeerDetails/>
  },
  {
    path: "catalog",
    element: <Catalog/>
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
