import React, {useState, useEffect} from 'react'

import defaultBeerImage from '../../images/defaultBeer.png'

type BeerProps = {
    beerId: number,
    width: string,
    height: string,
    beerName: string,
    image: string | null,
    key?: number
}


const BeerCard = (props:BeerProps) =>{

    let [isLiked, setIsLiked] = useState(false)
    let trueImage = (props.image === null) ? defaultBeerImage : props.image;

    useEffect(()=>{
        if(localStorage.getItem(props.beerId.toString()) !== null)
            setIsLiked(true);
    }, [])


    const likeBeerClicked = () =>{
        localStorage.setItem(props.beerId.toString(), "liked");
        setIsLiked(!isLiked);
    }

    return(

        
            <article className="beer-card" style={{width:props.width, height:props.height}}>

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