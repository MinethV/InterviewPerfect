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




