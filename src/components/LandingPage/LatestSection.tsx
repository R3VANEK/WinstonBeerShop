import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import { PunkShortBeer } from '../../types/APITypes'

import BeerCard from '../BeerCard'





const LatestSection = () =>{



    let [latestBeers, setLatestBeers] = useState<PunkShortBeer[] | []>([])

    useEffect(()=>{

        
        const h = async function(){
            for(let i = 0; i < 2; i++){
                fetch('https://api.punkapi.com/v2/beers/random',{
                    method:"GET"
                })
                .then((res)=>{return res.json()})
                .then((res)=>{
                    let response:PunkShortBeer[] = res
                    
                    setLatestBeers(latestBeers = [...latestBeers, ...response])
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