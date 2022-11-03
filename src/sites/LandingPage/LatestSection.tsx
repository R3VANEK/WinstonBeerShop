import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import BeerCard from '../shared/BeerCard'


type PunkAPIBeerObject = {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string | null,
    volume : {value: string, unit: string},
    boil_volume: {value: string, unit: string},
    food_pairing: string[],
    brewers_tips: string    

}


const LatestSection = () =>{



    let [latestBeers, setLatestBeers] = useState<PunkAPIBeerObject[] | []>([])

    useEffect(()=>{

        
        const h = async function(){
            for(let i = 0; i < 2; i++){
                fetch('https://api.punkapi.com/v2/beers/random',{
                    method:"GET"
                })
                .then((res)=>{return res.json()})
                .then((res)=>{
                    let response:PunkAPIBeerObject[] = res
                    
                    setLatestBeers(latestBeers = [...latestBeers, ...response])
                })
                .then(()=>{
                    console.log(latestBeers)
                })
            }
        }

        h()
    }, [])

    let LatestBeerCards = latestBeers.map((beer)=>{
        return(
            <BeerCard beerId={beer.id}  beerName={beer.name} image={beer.image_url} key={beer.id}/>
        )
    })


    return(
        <section className="full-width-section latest-section" id="latest-section">

            <h2 className="section-title">Latest hits</h2>

            <div id="latest-card-wrapper">
               {LatestBeerCards}
            </div>

            <Link to={"catalog"}>
                <button className='catalog-button' style={{marginTop:"10vh"}}>    
                    Catalog 
                </button>   
            </Link>

        </section>
    )
}

export default LatestSection;