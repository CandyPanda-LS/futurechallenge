import React from 'react'
import rclogo from '../assets/rclogo.png'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <img src={rclogo} width="17%" height="50%" />
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
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse navLinkTab"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto navLinkTab">
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="/"
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
                                <h4>WORKSTAT</h4>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a
                                className="nav-link navLinkTab js-scroll-trigger"
                                href="/Papers"
                                style={{ color: "#ffffff" }}
                            >
                                <h4>RESEARCH PAPERS</h4>
                            </a>
                        </li>

                    </ul>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
