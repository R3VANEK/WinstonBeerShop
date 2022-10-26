import React, {useState} from 'react'


import hamburger from '../../images/hamburger.png';

const Menu = () =>{

    let [isMenuExpanded, setMenuExpanded] = useState(true);

    return(

        <>
            <div id="hamburger-wrapper">
                <img src={hamburger} onClick={()=>{setMenuExpanded(!isMenuExpanded)}}/>
            </div>

            <aside id="menu-wrapper" className={(isMenuExpanded) ? "menu-expanded" : " menu-hidden"}>
            
                <ul>
                    <a href="#"><li className="menu-el">About us</li></a>
                    <a href="#"><li className="menu-el">Latest news</li></a>
                    <a href="#"><li className="menu-el">Gallery</li></a>
                </ul>

                <a href="#">
                    <button>    
                        Catalog 
                    </button>   
                </a>

            </aside>
        
        </>



      
    )
}

export default Menu;