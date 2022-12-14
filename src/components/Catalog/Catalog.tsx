import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './catalog.css'

import { PunkFullBeer } from '../../types/APITypes'

import Logo from "../../images/logo.png"
import Menu from '../Menu'
import BeerCard from '../BeerCard'
import ScrollHelp from '../ScrollHelp'
import SkeletonBeerCard from '../SkeletonBeerCard'





const Catalog = () =>{


    let [beerList, setBeerList] = useState<PunkFullBeer[] | []>([])
    let [pageAPINumber ,setPageAPINumber] = useState(1);
    let [beerName, setBeerName] = useState("");
    let [isLoading, setIsLoading] = useState(false);
    let [catalogState, setCatalogState] = useState("beer");


    // zbindowanie eventu scrolla do przeglądarki
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{

            if(window.innerHeight + document.documentElement.scrollTop
                > document.documentElement.offsetHeight * 0.9 && catalogState === "beer"){
                    setPageAPINumber(pageAPINumber++)
                }
        })
    }, [])



    const scrollFetchBeers = async ()=>{

        if(catalogState !== "beer")
            return


        await setIsLoading(true)
        let data = await  fetch(`https://api.punkapi.com/v2/beers?page=${pageAPINumber}&per_page=15`, {method:"GET"});
        const beers:PunkFullBeer[] = await data.json();

        if(pageAPINumber === 1)
            setBeerList(beerList = [...beers])
        else
            setBeerList(beerList = [...beerList, ...beers])

        await setIsLoading(false)
    }




    // // fetch osbługujący infinite scrolla
    useEffect(()=>{

        if(catalogState !== "beer")
            return;

            const wrapper = async ()=>{
                let data = await  fetch(`https://api.punkapi.com/v2/beers?page=${pageAPINumber}&per_page=15`, {method:"GET"});
                const beers:PunkFullBeer[] = await data.json();

                if(pageAPINumber === 1)
                    setBeerList(beerList = [...beers])
                else
                    setBeerList(beerList = [...beerList, ...beers])
            }

            wrapper()
            .catch((err)=> {throw new Error(err)});;


    }, [pageAPINumber])


   


    useEffect(()=>{


        if(catalogState !== "search")
            (document.getElementById("searchInput") as HTMLInputElement).value = ""

        if(catalogState === "favorites"){

            const wrapper = async () =>{

                let favoriteBeers = []

                await setIsLoading(true)
                for(let i =0; i < localStorage.length; i++){

                    const key = localStorage.key(i) || '0';
                    // zabezpieczenie przed innymi wartościami w localStorage
                    if(!(localStorage.getItem(key) === 'liked'))
                        continue;

                    let data = await  fetch(`https://api.punkapi.com/v2/beers/${key}`, {method:"GET"});
                    const beers:PunkFullBeer[] = await data.json();
                    favoriteBeers.push(beers[0])
                }

                await setBeerList(beerList = favoriteBeers)
                await setIsLoading(false)

            }

            wrapper()
            .catch((err)=>{throw new Error(err)});;
        }


        else if(catalogState === "beer"){

            const wrapper = async () =>{
                await setPageAPINumber(1);
                await scrollFetchBeers()
                .catch((err)=>{throw new Error(err)});;
            }

            wrapper();
            //TODO wyeliminuj to żeby nie było bounca 
        }

    }, [catalogState])



    useEffect(()=>{

        if(beerName === "" || catalogState !== "search")
            return
        
        const getData = setTimeout( async () => {

            await setBeerList(beerList = [])
            await setCatalogState("search")
            await setIsLoading(true)

            let data = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`, {method:"GET"})
            const beers:PunkFullBeer[] = await data.json();
            setBeerList(beerList = [...beerList, ...beers])

            await setIsLoading(false)

        },1000) 


        return () => clearTimeout(getData)

    }, [beerName])



    const searchBeer = async (e:React.ChangeEvent<HTMLInputElement>) =>{
        setCatalogState("search")
        setBeerName(beerName = e.target.value);
    }



    
    let LatestBeerCards = beerList.map((beer)=>{
        return(
            <BeerCard beerId={beer.id} beerName={beer.name} image={beer.image_url} key={beer.id}/>
        )
    })


    let SkeletonBeerCards = [1,2,3,4,5,6,7,8,9,10].map((i)=>{
        return(<SkeletonBeerCard/>)
    })

    let NotFoundVisual:JSX.Element = (
        <h1>No records of that beer found, sorry</h1>
    )

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

                    <div className={catalogState !== "favorites" ? "catalog-type active" : "catalog-type"} onClick={() =>{setCatalogState("beer")}}>
                        <h2>Our products</h2>
                        <p>Discover all of our finest collection of homebrew beers</p>
                    </div>
                    <div className={catalogState === "favorites" ? "catalog-type active" : "catalog-type"} onClick={() =>{setCatalogState("favorites")}}>
                        <h2>Your favorites</h2>
                        <p>Tested and loved. These beers are the closest to your heart and taste</p>
                    </div>
                </section>
               
                <div id="input-wrapper">
                    <span className="material-symbols-outlined">search</span>
                    <input type="text" placeholder="search beer by name" id="searchInput" onChange={searchBeer} />
                </div>

                <section id="card-holder">

                    {isLoading && SkeletonBeerCards}
                    {!isLoading && LatestBeerCards}
                    {/* {(LatestBeerCards.length === 0) ? NotFoundVisual : LatestBeerCards} */}
                </section>

            </main>



        </>
    )
}

export default Catalog