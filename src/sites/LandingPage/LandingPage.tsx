import React from 'react'

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import LatestSection from './LatestSection';
import FooterSection from './FooterSection';
import GallerySection from './GallerySection';

const LandingPage = () =>{
    return(
        <main id="full-page-wrapper">

            <HeroSection/>
            <AboutSection/>
            <LatestSection/>
            <GallerySection/>
            <FooterSection/>
        </main>
    )
}

export default LandingPage;