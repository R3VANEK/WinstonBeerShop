import React, {useEffect, useState} from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

import { PunkFullBeer } from '../../types/APITypes'

import './BeerDetails.css'

import defaultBeerImage from '../../images/defaultBeer.png'



const BeerDetails = () =>{

    const beerData:PunkFullBeer = useLoaderData() as PunkFullBeer;
    let [isLiked, setIsLiked] = useState(false)
    let [isShowedBrewersTip, setIsShowedBrewersTip] = useState(false);


    useEffect(()=>{
        if(localStorage.getItem(beerData.id.toString()) !== null)
            setIsLiked(true);
    }, [])

    const likeBeerClicked = () =>{

        if(isLiked)
            localStorage.removeItem(beerData.id.toString());    
        else
            localStorage.setItem(beerData.id.toString(), "liked");

        setIsLiked(!isLiked);
    }


    return(

        <>
        
            <div id="overlay-full-width" className={(isShowedBrewersTip) ? "visible" : "hidden"}>
                <article id="brewer-tips-wrapper">
                    <h2>Brewers tips</h2>
                    <p>{beerData.brewers_tips}</p>


                    <div className="close-tip" onClick={()=>{setIsShowedBrewersTip(false)}}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                    
                </article>
            </div>

            <article className='full-width-section' id="beer-details">
                
                <main>

                    <div id="heading-wrapper">
                        
                        {/* TODO id 115 piwa jest EDge Case dla tekstu, trzeba poprawić wielkość */}
                        <h1  id='beer-details-h1'>{beerData.name}</h1>

                        <div id="fav-and-tips-wrapper">
                            <div className={(isLiked) ? "liked-beer-wrapper liked" : "liked-beer-wrapper"}>
                                <span className="material-symbols-outlined" onClick={likeBeerClicked}>favorite</span>
                            </div>

                            <div className="liked-beer-wrapper" onClick={()=>{setIsShowedBrewersTip(true)}}>
                                <span className="material-symbols-outlined">info</span>
                            </div>
                        </div>

                    </div>
                    <h2 id="beer-tagline">{beerData.tagline}</h2>
                    

                    <p id="beer-description">{beerData.description}</p>
                </main>

                <aside>
                    
                    <img src={(beerData.image_url === null) ? defaultBeerImage : beerData.image_url} 
                            alt={beerData.name + " image"} 
                            className={(beerData.image_url === null) ? "default-image" : ""}/> 
                </aside>

            </article>
        </>

    )
}

export default BeerDetails