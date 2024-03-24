import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../images/logo.png';
import './Navbar.css'
import { Button } from "bootstrap";

export const Loginbutton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <a href="#" onClick={() => loginWithRedirect()} className="nav-link fs-5 navLink">
                Sign In
            </a>
        )
    )
}

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light mask-custom shadow-0 ps-5" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" height="26"
                             className="d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fs-5 navLink" href="#!">Review</a>
                            </li>
                            <li className="nav-item custom-li">
                                <Loginbutton/>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 navLink" href="/industry">
                                    <button type="button" className="btn btn-outline-primary" >
                                        Get Started
                                    </button>
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
