import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import defaultBeerImage from '../../images/defaultBeer.png'

import './BeerDetails.css'

type PunkAPIBeerObject = {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    volume : {value: string, unit: string},
    boil_volume: {value: string, unit: string},
    food_pairing: string[],
    brewers_tips: string

}

const BeerDetails = () =>{

    const {beerId} = useParams();
    let [isLiked, setIsLiked] = useState(false)
    let [isShowedBrewersTip, setIsShowedBrewersTip] = useState(false);
    let [beerData, setBeerData] = useState<PunkAPIBeerObject>({
        id: -1,
        name: '',
        tagline: '',
        first_brewed: '',
        description: '',
        image_url: '',
        volume: {value:'', unit:''},
        boil_volume: {value: '', unit: ''},
        food_pairing: [],
        brewers_tips: ''
    })
    useEffect(()=>{
        //TODO: dodać wywalanie 404 kiedy nie uda się pobrać danych
        fetch(`https://api.punkapi.com/v2/beers/${beerId}`, {
            method:"GET"
        })
        .then((res) => {return res.json()})
        .then((res)=>{setBeerData(res[0])})
        
        
    }, [])


    const likeBeerClicked = () =>{
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