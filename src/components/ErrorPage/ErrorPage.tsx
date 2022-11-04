import React from 'react'
import { useRouteError, Link } from "react-router-dom";


import './errorpage.css'

const ErrorPage = () =>{

    const error:any = useRouteError();


    return(
        <main id="error-main">
            <h1>Oops!</h1>
            <p>Sorry, unexpected error has ocurred</p>
            <p><i>{error.statusText || error.message}</i></p>

            <Link to={"/"}>
                <button className='catalog-button'>Home page</button>
            </Link>
        </main>
    )
}


export default ErrorPage