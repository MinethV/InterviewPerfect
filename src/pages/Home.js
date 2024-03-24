import React from "react";
import NavBar from "../components/NavBar";
import HomeImg from "../images/recruite.png";
import "../Stylesheets/home.css";

export const Home = () => {
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
            <button type="button" className="btn btn-primary">
              Get Started
            </button>
          </div>
          <div className={`col homeImage ${isMobile ? "order-1" : ""}`}>
            <img src={HomeImg} className="img-fluid" id="IntImg1" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};