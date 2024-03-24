import React from 'react';
import { Link } from "react-router-dom";
import './Industry.css';

export const Industry = () => {
  return (
    <div className='industry-container'>
      <div className='industry'>
        <h2>What field are you interested in?</h2>
        <Link to="/askquestions">
          <button type="button">
            Software Engineering
            <span className="arrow"></span>
          </button>
        </Link>
        <hr />
        <Link to="/askquestions">
          <button type="button">
            Civil Engineering
            <span className="arrow"></span>
          </button>
        </Link>
        <hr />
        <Link to="/askquestions">
          <button type="button">
            Business Management
            <span className="arrow"></span>
          </button>
        </Link>
        <hr />
        <Link to="/askquestions">
          <button type="button">
            HR Management
            <span className="arrow"></span>
          </button>
        </Link>
        <hr />
      </div>
    </div>
  );
};
