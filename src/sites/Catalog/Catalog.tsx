import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './catalog.css'

import Logo from "../../images/logo.png"
import Menu from '../shared/Menu'
import BeerCard from '../shared/BeerCard'
import ScrollHelp from '../shared/ScrollHelp'


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


    let [beerList, setBeerList] = useState<PunkAPIBeerObject[] | []>([])
    let [pageAPINumber ,setPageAPINumber] = useState(1);
    let [beerName, setBeerName] = useState("");
    let [catalogState, setCatalogState] = useState("beer");


    // zbindowanie eventu scrolla do przeglądarki
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{

            if(window.innerHeight + document.documentElement.scrollTop
                > document.documentElement.offsetHeight * 0.9 && catalogState === "beer"){
                    setPageAPINumber(pageAPINumber++)
                }
        })
    })

    // fetch osbługujący infinite scrolla
    useEffect(()=>{

        if(catalogState !== "beer")
            return;

        console.log("scroll fetch")
        
        fetch(`https://api.punkapi.com/v2/beers?page=${pageAPINumber}&per_page=15`, {method:"GET"})
        .then((res)=>{return res.json()})
        .then((res)=>{
            let response:PunkAPIBeerObject[] = res
            setBeerList(beerList = [...beerList, ...response])
        })

    }, [pageAPINumber])


    // fetch przy korzystaniu z inputa zaimplementowany z debouncem
    // dla optymalizacji aplikacji
    useEffect(() => {
        const getData = setTimeout(() => {

            fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`, {method:"GET"})
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                let response:PunkAPIBeerObject[] = res
                setBeerList(beerList = [...beerList, ...response])
            })

        },1000)
    
    
        return () => clearTimeout(getData)
      
    }, [beerName])


    useEffect(()=>{

        if(catalogState === "favorites"){

            setBeerList(beerList = [])

            let favoriteBeers = []

            for(let i =0; i < localStorage.length; i++){

                const key = localStorage.key(i) || '0';
                // zabezpieczenie przed innymi wartościami w localStorage
                if(!(localStorage.getItem(key) === 'liked'))
                    continue;

                fetch(`https://api.punkapi.com/v2/beers/${key}`, {method:"GET"})
                .then((res) => {return res.json()})
                .then((res) =>{
                    let response:PunkAPIBeerObject[] = res
                    console.log(response)
                    setBeerList(beerList = [...beerList, ...response])
                })
            }
        }
        else if(catalogState === "beer"){
            setBeerList(beerList = [])
            setPageAPINumber(2);
        }

    }, [catalogState])



    const changeCatalogType = (mode:string) =>{
       
        setCatalogState(mode)
    }






    let LatestBeerCards = beerList.map((beer)=>{
        return(
            <BeerCard beerId={beer.id} beerName={beer.name} image={beer.image_url} key={beer.id}/>
        )
    })


    const searchBeer = (e: React.FormEvent<HTMLInputElement>) =>{
        const beerName = e.currentTarget.value;
        setBeerName(e.currentTarget.value)
    }



    return(
        <>

            <Menu/>
            <ScrollHelp/>

            <section id="catalog-hero">

                <div id="shade-overlay">
                    <Link to={"/"}>
                        <img src={Logo} id="hero-logo"/>
                    </Link>

                    <h1>Catalog.</h1>
                </div>

            </section>

            <main id="catalog-main">

               
                <section id="catalog-type-wrapper">

                    <div className={catalogState === "beer" ? "catalog-type active" : "catalog-type"} onClick={() =>{changeCatalogType("beer")}}>
                        <h2>Our products</h2>
                        <p>Discover all of our finest collection of homebrew beers</p>
                    </div>
                    <div className={catalogState === "favorites" ? "catalog-type active" : "catalog-type"} onClick={() =>{changeCatalogType("favorites")}}>
                        <h2>Your favorites</h2>
                        <p>Tested and loved. These beers are the closest to your heart and taste</p>
                    </div>
                </section>
               
                <div id="input-wrapper">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="search beer by name" onChange={searchBeer} />
                </div>

                <section id="card-holder">
                    {LatestBeerCards}
                </section>

            </main>



        </>
    )
}

export default Catalog