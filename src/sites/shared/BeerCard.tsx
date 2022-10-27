import React, {useState} from 'react'

import defaultBeerImage from '../../images/defaultBeer.png'

type BeerProps = {
    width: string,
    height: string,
    beerName: string,
    image: string | null,
    key?: number
}


const BeerCard = (props:BeerProps) =>{

    let [isLiked, setIsLiked] = useState(false)
    let trueImage = (props.image === null) ? defaultBeerImage : props.image;


    //TODO logika znajdywania czy dane piwo jest polubione przez localStorage

    const likeBeerClicked = () =>{
         //TODO logika zmiany w localStorage liked
        setIsLiked(!isLiked);
    }

    return(

        <a href="#">
            <article className="beer-card" style={{width:props.width, height:props.height}}>

            {/* tu trzeba ekstraktować pierwszy tagline */}
            {/* <p className="beer-right-flipped">Post Modern Classic</p> */}


            <div className={(isLiked) ? "liked-beer-wrapper liked" : "liked-beer-wrapper"}>
                <span className="material-symbols-outlined" onClick={likeBeerClicked}>favorite</span>
            </div>

            <div className="beer-image-wrapper">
                <img src={trueImage} 
                    alt={props.beerName + " image"} 
                    className='beer-image' 
                    style={(props.image === null) ? {height:"40%"} : {}}
                />
            </div>
            

            <div className="beer-name-wrapper">
                <p className='beer-name'>{props.beerName}</p>
            </div>
            
            </article>
        </a>
        
    )
}

export default BeerCard