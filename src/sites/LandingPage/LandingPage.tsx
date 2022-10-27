import React from 'react'

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import LatestSection from './LatestSection';
import FooterSection from './FooterSection';
import GallerySection from './GallerySection';
import Menu from '../Shared/Menu';


const LandingPage = () =>{
    return(
        <>
            <main id="full-page-wrapper">
                <HeroSection/>
                <AboutSection/>
                <LatestSection/>
                <GallerySection/>
                <FooterSection/>
            </main>

            <Menu/>
        </>
    )
}

export default LandingPage;