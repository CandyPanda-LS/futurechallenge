import React from 'react'
import rclogo from '../assets/rclogo.png'
import { GiHamburgerMenu } from "react-icons/gi";



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <img src={rclogo} width="200px" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ color: "#ffffff" }}
                >
                    <span className="navbar-toggler-icon" style={{ color: "white" ,fontSize:"30px"}}> <GiHamburgerMenu/></span>
                </button>

                <div
                    className="collapse navbar-collapse navLinkTab"
                    style={{ color: "white" }}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto navLinkTab">
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="#"
                                style={{ color: "#ffffff" }}
                            >
                                <h4>HOME</h4>

                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="#about"
                                style={{ color: "#ffffff" }}
                            >
                                <h4>ABOUT</h4>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="#news"
                                style={{ color: "#ffffff" }}
                            >
                                <h4>NEWS</h4>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="#workstat"
                                style={{ color: "#ffffff" }}
                            >
                                <h4>WERKSTATT </h4>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="#timeline"
                                style={{ color: "#ffffff" }}
                            >
                                <h4>TIMELINE</h4>
                            </a>
                        </li>

                    </ul>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
