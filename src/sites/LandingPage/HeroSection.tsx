import React from 'react'

import Logo from "../../images/logo.png"

const HeroSection = () =>{
    return(
        <section className="full-width-section hero-section" id="hero-section">

            <div id="shade-overlay">

                <img src={Logo} id="hero-logo"/>

                <h1>We craft beer<br/> Excelent beer.</h1>
                <h2>
                    With unyielding enthusiasm and 70 years of experience, we deliver to you the most exquisite liquors to enjoy after hard day of work. Trust the tradition and professionalism of our brewers. Let us do the work and give yourself to the unique tastes and explore world's finest and most curated beers
                </h2>
            </div>

        </section>
    )
}

export default HeroSection;