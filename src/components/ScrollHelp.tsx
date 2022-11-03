import React, {useEffect} from 'react'
import '../../index.css'

const ScrollHelp = () =>{


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{

            console.log(window.scrollY)
            if(window.scrollY > 1300)
                document.getElementById("scroll-div")?.classList.add("scroll-visible")
            else
                document.getElementById("scroll-div")?.classList.remove("scroll-visible")
        })
    }, [])

    return(
        <div id="scroll-div" onClick={()=>{window.scrollTo(0,0)}}>
            <div id="scroll-arrow"></div>
        </div>
    )
}

export default ScrollHelp