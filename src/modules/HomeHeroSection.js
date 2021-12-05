import React from 'react'
import HomeDetails from './HomeDetails'
import './HomeHeroSection.css'
import Navbar from './Navbar'

function HomeHeroSection() {
    return (
        <div className="HomeHeroDiv">
            <Navbar/>
            <HomeDetails/>
            
        </div>
    )
}

export default HomeHeroSection
