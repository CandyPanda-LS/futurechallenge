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
                        className="col-lg-8 col-md-8 col-sm-12 conferenceDetailsSection"
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="500"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                    >
                        <div className="container">
                            <h2 className="mb-0 font-weight-bold ">
                                FUTURE CHALLENGE 2021
                            </h2>
                            <p className="mb-0" style={{fontSize:"15px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. .</p>
                            <h2 className="mt-3" style={{fontSize:"20px"}}>Univeristy of Colombo , Faculty of Science</h2>
                        </div>

                        <div>
                            <Countdown
                                date={Date.now() + 1000000000}
                                intervalDelay={0}
                                precision={3}
                                renderer={(props) => (
                                    <div className="container">
                                        <div className="row text-center">
                                            <div className="col-lg-2 countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">{props.days}</div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{fontSize:"15px"}}>DAYS</p></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">{props.hours}</div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{fontSize:"15px"}}>HOURS</p></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">
                                                        {props.minutes}
                                                    </div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{fontSize:"15px"}}>MINUTES</p></div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 countDownDiv">
                                                <div className="row">
                                                    <div className="col-lg-12 countDownData">
                                                        {props.seconds}
                                                    </div>
                                                    <div className="col-lg-12 countDownTitle"><p style={{fontSize:"15px"}}>SECONDS</p></div>
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
