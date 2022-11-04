import React, {useState, useEffect} from 'react'

import { BeerCardProps } from '../types/PropsTypes'

import defaultBeerImage from '../images/defaultBeer.png'




const BeerCard = (props:BeerCardProps) =>{

    let [isLiked, setIsLiked] = useState(false)
    let trueImage = (props.image === null) ? defaultBeerImage : props.image;

    useEffect(()=>{
        if(localStorage.getItem(props.beerId.toString()) !== null)
            setIsLiked(true);
    }, [])


    const likeBeerClicked = () =>{

        if(isLiked)
            localStorage.removeItem(props.beerId.toString());    
        else
            localStorage.setItem(props.beerId.toString(), "liked");
            
        setIsLiked(!isLiked);
    }

    return(

        
            <article className="beer-card">

                {/* tu trzeba ekstraktować pierwszy tagline */}
                {/* <p className="beer-right-flipped">Post Modern Classic</p> */}


                <div className={(isLiked) ? "liked-beer-wrapper liked" : "liked-beer-wrapper"}>
                    <span className="material-symbols-outlined" onClick={likeBeerClicked}>favorite</span>
                </div>

                <a href={`/beer-details/${props.beerId}`} style={{width:"100%", height:"100%"}}>
                    <div className="beer-image-wrapper">
                        <img src={trueImage} 
                            alt={props.beerName + " image"} 
                            className='beer-image' 
                            loading='lazy'
                            style={(props.image === null) ? {height:"40%"} : {}}
                        />
                    </div>
                    

                    <div className="beer-name-wrapper">
                        <p className='beer-name'>{props.beerName}</p>
                    </div>
                </a>
            </article>
       
        
    )
}

export default BeerCard