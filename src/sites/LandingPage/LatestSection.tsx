import React, {useEffect, useState} from 'react'

import Test from '../../images/sectionImages/test.png'

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

        
        const cos = async function(){
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

        cos()
       
        
        
        


    }, [])

    let LatestBeerCards = latestBeers.map((beer)=>{
        return(
            <BeerCard width="15vw" height="45vh" beerName={beer.name} image={beer.image_url} key={beer.id}/>
        )
    })


    return(
        <section className="full-width-section latest-section" >

            <h2 className="section-title">Latest hits</h2>

            <div id="latest-card-wrapper">
               {LatestBeerCards}
            </div>

            <a href="#">
                <button className='catalog-button' style={{marginTop:"10vh"}}>    
                    Catalog 
                </button>   
            </a>

        </section>
    )
}

export default LatestSection;