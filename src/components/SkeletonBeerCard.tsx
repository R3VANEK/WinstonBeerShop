import React from 'react'

import defaultBeerImage from '../images/defaultBeer.png'




const SkeletonBeerCard = () =>{


    return(

        
            <article className="beer-card skeleton">



                

                <a href="#" style={{width:"100%", height:"100%"}}>
                    <div className="beer-image-wrapper">
                        <img src={defaultBeerImage} 
                            alt="skeleton image" 
                            className='beer-image' 
                            style={{height:"40%"}}
                        />
                    </div>
                    

                    <div className="beer-name-wrapper">
                        <p className='beer-name'>Loading...</p>
                    </div>
                </a>
            </article>
       
        
    )
}

export default SkeletonBeerCard