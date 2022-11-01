import React, {useState, useEffect} from 'react'
import './catalog.css'

import Logo from "../../images/logo.png"
import Menu from '../shared/Menu'
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


const Catalog = () =>{


    let [latestBeers, setLatestBeers] = useState<PunkAPIBeerObject[] | []>([])

    useEffect(()=>{

        
        const h = async function(){
            for(let i = 0; i < 10; i++){
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
            <BeerCard beerId={beer.id} width="20vw" height="45vh" beerName={beer.name} image={beer.image_url} key={beer.id}/>
        )
    })




    return(
        <>

            <Menu/>

            <section id="catalog-hero">

                <div id="shade-overlay">
                    <img src={Logo} id="hero-logo"/>
                    <h1>Catalog.</h1>
                </div>

            </section>

            <main id="catalog-main">

               

               


                <section id="card-holder">
                    {LatestBeerCards}
                </section>

            </main>



        </>
    )
}

export default Catalog