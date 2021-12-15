import React from 'react'
import fclogo from '../assets/fclogo.png'
import Countdown from "react-countdown";
import './HomeDetials.css'


function HomeDetails() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div
                    className="col-lg-6 col-md-6 col-sm-12"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                >

                    <img
                        src={fclogo}
                        alt="imgLogo"
                        className="img-fluid"
                        width="150%"
                    />
                </div>
                <div
                    className="col-lg-6 col-md-6 col-sm-12 conferenceDetailsSection"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="500"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                >
                    <div
                        className="col-lg-12 col-md-12 col-sm-12 conferenceDetailsSection"
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="500"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        <div className="container">
                            <h2 className="mb-0 font-weight-bold ">
                                FUTURE CHALLENGE 2021-22
                            </h2>
                            <p className="mb-0 mt-4" style={{ fontSize: "15px",textAlign:"justify" }}>Future Challenge was started in 2005 as a day-long Career Fair with the participation of just 14 companies. With time, both its importance and magnitude has grown, with more and more companies and graduates participating in the event. We have witnessed the increased participation of more leading local and multinational companies, from IT, Finance, Marketing, Research and Development, Apparel to Fast-Moving Consumer Goods (FMCG).
                            </p>
                            <h2 className="mt-3" style={{ fontSize: "20px" }}>Faculty of Science , University of Colombo</h2>
                        </div>

                        <div>
                            <Countdown
                                date={'2022-01-06T00:00:00'}
                                intervalDelay={0}
                                precision={3}
                                renderer={(props) => (
                                    <div className="container mt-5 mb-5">
                                        <div className="row text-center ">
                                            <div className="col countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">{props.days}</div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{ fontSize: "15px" }}>DAYS</p></div>
                                                </div>
                                            </div>
                                            <div className="col countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">{props.hours}</div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{ fontSize: "15px" }}>HOURS</p></div>
                                                </div>
                                            </div>
                                            <div className="col countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">
                                                        {props.minutes}
                                                    </div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{ fontSize: "15px" }}>MINUTES</p></div>
                                                </div>
                                            </div>
                                            <div className="col countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">
                                                        {props.seconds}
                                                    </div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{ fontSize: "15px" }}>SECONDS</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeDetails
