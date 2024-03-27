import React from "react";
import HomeImg from '../images/recruite.png';
import '../Stylesheets/home.css';
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

export const Home = () => {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    const handleVisit = () => {
        if (!isAuthenticated) {
            loginWithRedirect();
        } else {
            navigate('/industry');
        }
    };

    return (
        <>

            <div className="container-fluid homeContainer">
                <div className={`row mb-5 ${isMobile ? "flex-column" : ""}`}>
                    <div className={`col headingCol ${isMobile ? "order-2" : ""}`}>
                        <p className="lh-1 heading">Interview mastery, made easy.</p>
                        <p className="fs-5 fw-light">
                            Never fear an interview again: Prepare for success with our
                            comprehensive and versatile interview simulator
                        </p>
                        <button type="button" className="btn btn-primary" onClick={handleVisit}>
                            Get Started
                        </button>

            <div className="container-fluid">
                <div className="row mb-5" >
                    <div className="col headingCol">
                        <p className="lh-1 heading">Interview <br/> mastery, <br/> made easy.</p>
                        <p className="fs-5 fw-light">Never fear an interview again: Prepare <br/> 
                            for success with our comprehensive <br/>
                            and versatile interview simulator</p>
                        <button type="button" className="btn btn-primary">Get Started</button>

                    </div>
                    <div className={`col homeImage ${isMobile ? "order-1" : ""}`}>
                        <img src={HomeImg} className="img-fluid" id="IntImg1" alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};