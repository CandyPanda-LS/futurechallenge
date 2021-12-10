import React from 'react'
import AboutImg from "../assets/about.svg";

function HomeAboutSection() {
    return (
        <div
            className="pt-4"
            style={{ backgroundColor: "#03203D", color: "#ffffff" }}
        >
            <div
                className="container text-center pt-5 pb-5"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-sine"
                data-aos-offset="100"
                data-aos-duration="1000"
            >
                <img
                    src={AboutImg}
                    className="img-fluid"
                    alt="aboutImg"
                    style={{ width: "300px" }}
                />
                <h1 className="mt-4">About Future Challenge</h1>
                <hr />
                <div className="container">
                    <p>

                        ‘Future Challenge’ is a Professional Development Program involving a series of activities, held with the primary objective of amalgamating the local academic arena with the corporate world. The core of this program lies in the Career Day that is to be held on the 6th and 7th of January 2022. This main event comprises interview sessions, where the corporate sector gets the rare opportunity to interview a diverse group of over 400 Sri Lanka’s finest science undergraduates and graduates. A complementing and essential mix of workshops, forums, presentations and expert discussions will be held prior to the event to better prepare the undergraduates participating at this event.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutSection
