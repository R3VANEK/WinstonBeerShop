import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import hamburger from '../images/hamburger.png';

const Menu = () =>{

    let [isMenuExpanded, setMenuExpanded] = useState(false);

    return(

        <>
            <div id="hamburger-wrapper">
                <img src={hamburger} onClick={()=>{setMenuExpanded(!isMenuExpanded)}}/>
            </div>

            <aside id="menu-wrapper" className={(isMenuExpanded) ? "menu-expanded" : " menu-hidden"}>
            
                <ul>
                    <HashLink smooth to="/#about-section"><li className="menu-el">About us</li></HashLink>
                    <HashLink smooth to="/#latest-section"><li className="menu-el">Latest news</li></HashLink>
                    <HashLink smooth to="/#gallery-section"><li className="menu-el">Gallery</li></HashLink>
                </ul>

                <Link to={"catalog"}>
                    <button className='catalog-button'>    
                        Catalog 
                    </button>   
                </Link>

            </aside>
        
        </>



      
    )
}

export default Menu;