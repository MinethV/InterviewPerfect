import React from "react";
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