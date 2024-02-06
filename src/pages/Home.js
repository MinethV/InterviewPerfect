import React from "react";
import NavBar from '../components/NavBar';
import HomeImg from '../images/recruite.png';

export const Home = () => {
    return (
        <>
            <NavBar/>
            <div className="container-fluid">
                <div className="row mb-5" >
                    <div className="col headingCol">
                        <p className="lh-1 heading">Interview <br/> mastery, <br/> made easy.</p>
                        <p className="fs-3 fw-light">Never fear an interview again: <br/> Prepare
                            for success with our <br/>comprehensive
                            and versatile <br/> interview simulator</p>
                        <button type="button" className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="col homeImage">
                    <img src={HomeImg} className="img-fluid" id="IntImg1" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>asdfasf</h1>
                    </div>
                    <div className="col">
                        <h1>qlahdfklsadhksdh</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
