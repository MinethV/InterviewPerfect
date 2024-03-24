import React from "react";
import NavBar from '../components/NavBar';
import HomeImg from '../images/recruite.png';
import { useAuth0 } from '@auth0/auth0-react';
import './home.css';

export const Loginbutton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button href="#" onClick={() => loginWithRedirect()} className="btn btn-primary">
                Start Practising
            </button>
        )
    )
}

export const Home = () => {
    return (
        <>
            <NavBar/>
            <div className="homecontainer container-fluid">
                <div className="row mb-5" >
                    <div className="col headingCol">
                        <p className="lh-1 heading">Interview <br/> mastery, <br/> made easy.</p>
                        <p className="fs-5 fw-light">Never fear an interview again: Prepare <br/> 
                            for success with our comprehensive <br/>
                            and versatile interview simulator</p>
                            <Loginbutton/>
                    </div>
                    <div className="col homeImage">
                    <img src={HomeImg} className="img-fluid" id="IntImg1" alt=""/>
                    </div>
                </div>

                <div className="row mb-5" >
                <div className="col headingCol"> 
                <p className="fs-2 fw-light">How it works ?</p>
                </div>
                </div>
           
            </div>
        </>
    )
}
