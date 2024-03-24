import React from "react";
import NavBar from '../components/NavBar';
import HomeImg from '../images/recruite.png';
import '../Stylesheets/home.css';

export const Home = () => {
    return (
        <>
            <div className="container-fluid homeContainer">
                <div className="row mb-5">
                    <div className="col headingCol">
                        <p className="lh-1 heading">Interview <br/> mastery, <br/> made easy.</p>
                        <p className="fs-5 fw-light">Never fear an interview again: Prepare <br/>
                            for success with our comprehensive <br/>
                            and versatile interview simulator</p>
                        <button type="button" className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="col homeImage">
                        <img src={HomeImg} className="img-fluid" id="IntImg1" alt=""/>
                    </div>
                </div>

            </div>
        </>
    )
}
