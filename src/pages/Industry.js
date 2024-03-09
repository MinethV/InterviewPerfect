
import React from "react";
import NavBar from '../components/NavBar';
import backgroundImage from "../images/industry.png";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { ListGroup } from 'react-bootstrap';





export default Industry;

import React from 'react';
import {Link} from "react-router-dom";
import './Industry.css';

export const Industry = () => {
  return (
    <div className='industry-container'>
      <div className='industry'>
      <h2>What field are you interested in?</h2>
      <form>
      <button type="submit">
        Software Enginnering
        <span className="arrow"></span>
        </button>

        < hr />

        <button type="submit">
        Civil Engineering
        <span className="arrow"></span>
        </button>

        < hr />

        <button type="submit">
        Business Management
        <span className="arrow"></span>
        </button>

        < hr />
      
        <button type="submit">
        HR Management
        <span className="arrow"></span>
        </button>

        < hr />

      </form>
    </div>
    </div>

  );
};





