import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import logo from '../images/logo.png';
import {Link} from "react-router-dom";

export const Loginbutton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()} className="btn btn-primary p-3">
                Sign In
            </button>
        )
    )
}

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light mask-custom shadow-0 ps-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Link to="/">
                            <img src={logo} alt="" height="26" className="d-inline-block align-text-top"/>
                        </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-1">
                                <Loginbutton/>
                            </li>
                            <button type="button" className="btn btn-outline-primary">Get Started</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
