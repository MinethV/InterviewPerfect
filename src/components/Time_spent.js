import React from 'react';
import './Card.css';
import { Circle } from 'rc-progress';

function Time_spent({ title, body }) { // Destructure props here
  return (
    <div className='card-container'>
        <div className='card-content'>
            <div className='card-title'>
                <h3>{title}</h3>
                <hr></hr>
            </div>
            
            <div className='card-body'>
                <p>{body}</p>
            </div>
        </div>

        <div className='image-container'>
            <Circle percent={77} strokeWidth={5} strokeColor="#86f984" trailWidth={4} trailColor='#808080' />
        </div>  
    </div>
  );
}

export default Time_spent;