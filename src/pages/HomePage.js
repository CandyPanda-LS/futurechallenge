import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import HomeHeroSection from '../modules/HomeHeroSection';
import HomeAboutSection from '../modules/HomeAboutSection';
import LatestNews from '../modules/LatestNews';
import WorkStat from '../modules/WorkStat';
import TimeLineSection from '../modules/TimeLineSection';
import Footer from '../modules/Footer';

function HomePage(props) {
    useEffect(() => {
        AOS.init();
    });
    return (
        <div style={{ height: "100vh" }}>
            <HomeHeroSection />
            <section id="about">
                <HomeAboutSection />
            </section>
            <section id="news">
                <LatestNews />
            </section>
            <section id="workstat">
                <WorkStat/>
            </section>
            <section id="timeline">
            <TimeLineSection/>
            </section>
            {/* <GetInTouch /> */}
            <Footer/>
        </div>
    )
}

export default HomePage
