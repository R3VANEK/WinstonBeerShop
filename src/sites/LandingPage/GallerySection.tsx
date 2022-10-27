import React from 'react'



const GallerySection = () =>{
    return(
        <section className="full-width-section gallery-section" id="gallery-section">

            <article className="gallery-el">
                <span className="material-symbols-outlined">task_alt</span>
                <p>The best ingredients</p>
            </article>
            <article className="gallery-el">
                <span className="material-symbols-outlined">task_alt</span>
                <p>Expert brewers</p>   
            </article>
            <article className="gallery-el">
                <span className="material-symbols-outlined">task_alt</span>
                <p>Overwhelming taste</p>  
            </article>

        </section>
    )
}

export default GallerySection;