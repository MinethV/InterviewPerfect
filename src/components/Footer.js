import React from "react";

import '../Stylesheets/Footer.css'
import logo from '../images/logo.png';


const Footer = () => {
    return (
        <footer className="footer bg-white text-dark mt-5 footer-container" style={{backgroundColor: "white"}}>
            <div className="container">
                <div className='footer-top'>
                    <div className="footer-top-left">
                        <img src={logo} alt="" height="45"
                             className="d-inline-block align-text-top"/> <br/><br/>
                        <p className="text-muted">Your one stop solution to all your interview needs</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr className="bg-dark mb-4"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="font-weight-light mb-1" style={{color: "#B385FFF2"}}>COMPANY</h4>
                        <ul className="list-group footer-nav" style={{border: "none"}}>
                            <li className="list-group-item text-muted" style={{border: "none"}}>
                                <a href="/about" style={{color: "inherit", textDecoration: "none"}}>About
                                    Us</a>
                            </li>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="font-weight-light mb-1" style={{color: "#B385FFF2"}}>USEFUL LINKS</h4>
                        <ul className="list-group footer-nav" style={{border: "none"}}>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Terms of use</li>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="font-weight-light mb-1" style={{color: "#B385FFF2"}}>COMMUNITY</h4>
                        <ul className="list-group footer-nav" style={{border: "none"}}>
                            <li className="list-group-item text-muted" style={{border: "none"}}>Social Media</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr className="bg-dark mb-1"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-left">
                        <p className="text-muted" style={{fontSize: "16px"}}><i>&copy; 2024 Interview Perfect</i></p>
                    </div>
                </div>
            </div>
        </footer>
    );

import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css'



const Footer = () => {
  return (
    <footer className="footer bg-white text-dark mt-5 footer-container" style={{ backgroundColor: "white" }}>
      <Container>
      <div className='footer-top'>
                <div className="footer-top-left">
                    <div className="footer-top-text">
                    <Row>
                      <Col className="text-left mb-4">
                        <h4 className="font-weight-light" style={{ color: "#B385FFF2" }}>Follow Us </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} className="mb-3 text-center">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaTwitter size={24} />
                        </a>
                      </Col>
                      <Col md={3} className="mb-3 text-center">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaGithub size={24} />
                        </a>
                      </Col>
                      <Col md={3} className="mb-3 text-center">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={24} />
                        </a>
                      </Col>
                      <Col md={3} className="mb-3 text-center">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <FaLinkedinIn size={24} />
                        </a>
                      </Col>
                    </Row>
                    </div>
                    
                </div>
                <div className='footer-top-right'>
        
                  <div className='footer-input'>
                    <input type="text" placeholder="Search here" className='input'/>
                    <button className='subscribe-button'>Send</button>
                  </div>    
                    
                </div>
      </div>


       <Row>
          <Col>
            <hr className="bg-dark mb-4" />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h4 className="font-weight-light mb-1" style={{ color: "#B385FFF2" }}>COMPANY</h4>
            <ListGroup className="footer-nav" style={{ border: "none" }}>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>About Us</ListGroupItem>
              
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Contact Us</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h4 className="font-weight-light mb-1" style={{ color: "#B385FFF2" }}>USEFUL LINKS</h4>
            <ListGroup className="footer-nav" style={{ border: "none" }}>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Terms of use</ListGroupItem>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Privacy Policy</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h4 className="font-weight-light mb-1" style={{ color: "#B385FFF2" }}>COMMUNITY</h4>
            <ListGroup className="footer-nav" style={{ border: "none" }}>
              
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Social Media</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="bg-dark mb-1" />
          </Col>
        </Row>
        
        
        <Row className="mt-3">
            <Col className="text-left ">
                <p className="text-muted" style={{ fontSize: "16px" }}><i>&copy; 2020 Interview Perfect</i></p>
            </Col>
        </Row>
        
      </Container>
    </footer>
  );

};

export default Footer;