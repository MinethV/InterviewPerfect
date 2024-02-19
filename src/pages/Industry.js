import React from "react";
import NavBar from '../components/NavBar';
import backgroundImage from "../images/industry.png";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ListGroup } from 'react-bootstrap';



const Industry = () => {
  return (
    
    <div className="bg-gray-100 min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      {/* <NavBar /> */}
      <Container className="py-5 ">
        <Row className="align-items-center mt-5">
          <Col md={6} className="mx-auto mt-5">
            <h1 className="text-center text-3xl font-bold mb-5 font-family-MicrosoftSansSerif" style={{ fontSize: '34px' }}>
              What field are you interestrd in?
            </h1>
            <ListGroup className="shadow-lg font-family-MicrosoftSansSerif " style={{ fontSize: '26px' }}>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                Software Engineering
                <FontAwesomeIcon icon={faChevronRight} />
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                Civil Engineering
                <FontAwesomeIcon icon={faChevronRight} />
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                Business Management
                <FontAwesomeIcon icon={faChevronRight} />
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center">
                HR Management
                <FontAwesomeIcon icon={faChevronRight} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};

export default Industry;
