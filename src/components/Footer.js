import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer bg-white text-dark mt-5" style={{ backgroundColor: "white" }}>
      <Container>
      <Row>
          <Col>
            <hr className="bg-dark mb-4" />
          </Col>
        </Row>
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
          <Col className="text-left mb-4">
            <h4 className="font-weight-light" style={{ color: "#B385FFF2" }}>Follow Us on Social Media</h4>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={32} />
            </a>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} />
            </a>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={32} />
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
                <p className="text-muted" style={{ fontSize: "18px" }}><i>&copy; 2020 Interview Perfect</i></p>
            </Col>
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;