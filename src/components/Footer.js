import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { faTwitter, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <footer className="footer bg-white text-dark mt-5" style={{ backgroundColor: "white" }}>
      <Container>
        <Row>
          <Col md={4}>
            <h4 className="font-weight-light mb-4" style={{ color: "#B385FFF2" }}>COMPANY</h4>
            <ListGroup className="footer-nav" style={{ border: "none" }}>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>About Us</ListGroupItem>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Team</ListGroupItem>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Contact</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h4 className="font-weight-light mb-4" style={{ color: "#B385FFF2" }}>USEFUL LINKS</h4>
            <ListGroup className="footer-nav" style={{ border: "none" }}>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Terms of use</ListGroupItem>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Privacy Policy</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4}>
            <h4 className="font-weight-light mb-4" style={{ color: "#B385FFF2" }}>COMMUNITY</h4>
            <ListGroup className="footer-nav" style={{ border: "none" }}>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Blog</ListGroupItem>
              <ListGroupItem className="text-muted" style={{ border: "none" }}>Social Media</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="bg-dark mb-4" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-4">
            <h4 className="font-weight-light" style={{ color: "#B385FFF2" }}>Follow Us on Social Media</h4>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="bg-dark mb-4" />
          </Col>
        </Row>
        <Row className="mt-5">
            <Col className="text-left ">
                <p className="lead mb-0" style={{ fontSize: "18px" }}><i>&copy; 2020 Interview Perfect</i></p>
            </Col>
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;