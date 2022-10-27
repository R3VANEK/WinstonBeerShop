import React from 'react'

import BeerImage from '../../images/sectionImages/hero1.jpg'
import BeerImage1 from '../../images/sectionImages/hero2.jpg'
import BeerImage2 from '../../images/sectionImages/about.jpg'


const AboutSection = () =>{
    return(
        <section className="full-width-section about-section">

            <h2 className="section-title">About us</h2>

            <div id="about-content-wrapper">

                <div id="about-image-wrapper">
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel perspiciatis repudiandae sunt aut, culpa similique aliquid, quod alias beatae laboriosam quos exercitationem deleniti, minus voluptatum eaque. Quis, culpa officiis.</p>
                </div>

                <div>
                     
                     <img src={BeerImage2}/>
                </div>
            </div>

        </section>
    )
}

export default AboutSection;