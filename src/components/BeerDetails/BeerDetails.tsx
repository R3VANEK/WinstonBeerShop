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
                        {/* <h1  id='beer-details-h1'>{beerData.name}</h1> */}
                        <h1  id='beer-details-h1'>lorem ipsum sid dolor 2007 - 2019 asdasdasd</h1>

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
                    

                    {/* <p id="beer-description">{beerData.description}</p> */}
                    <p id="beer-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quidem cum laudantium rerum minus temporibus, nihil quo sunt provident, tenetur repudiandae eligendi deserunt ipsa nesciunt nam fugit laborum placeat ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nemo quidem, laborum sed voluptate aliquam, ad eius repellat eos temporibus, impedit doloribus repudiandae enim aut amet officia nesciunt voluptatum aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quaerat ullam corporis, enim facere, sapiente incidunt fugiat ipsam ipsum tenetur esse nisi rem. Distinctio ut recusandae commodi fugit omnis nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam totam nam doloribus, nostrum ullam, libero officia natus expedita obcaecati commodi molestiae accusantium nemo cum necessitatibus corporis sunt doloremque. Dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, totam amet? Quia reiciendis, itaque voluptates nihil ipsum possimus, aliquam cupiditate expedita sed odit fugiat ullam, quibusdam asperiores animi quos sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda tenetur impedit dolor possimus vel nihil corporis et unde explicabo dolore ex consectetur, dicta modi officia laborum placeat, tempora rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatum nobis ad consectetur porro itaque quod repellendus velit repellat nostrum aperiam fugiat. Architecto dolore odit ullam ab animi eius hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam, unde nam neque quo, nulla perspiciatis rerum ut repellat sint dolores, ipsum deserunt atque sequi laborum magni reiciendis perferendis sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime maiores dolores aut. Dignissimos, voluptates commodi perspiciatis beatae eveniet voluptatum fugit consequatur recusandae, error earum in, nam magni dolor necessitatibus.</p>

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