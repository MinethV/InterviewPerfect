import React from 'react';
import './Card.css';
import { Circle } from 'rc-progress';

function Filler_words({ title, body }) { // Destructure props here
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
            <Circle percent={77} strokeWidth={5} strokeColor="#ff8788" trailWidth={4} trailColor='#808080' />
        </div>  
    </div>
  );
}

export default Filler_words;