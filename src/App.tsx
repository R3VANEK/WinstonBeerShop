import React from 'react';
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";

import './index.css';
import './css/landingpage.css'

import HeroSection from './sites/LandingPage/HeroSection';
import LandingPage from './sites/LandingPage/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
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
