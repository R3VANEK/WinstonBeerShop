import React, {useState} from 'react'
import {Link} from "react-router-dom";


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
                    <a href="#about-section"><li className="menu-el">About us</li></a>
                    <a href="#latest-section"><li className="menu-el">Latest news</li></a>
                    <a href="#gallery-section"><li className="menu-el">Gallery</li></a>
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