import React from 'react';
import './Card.css';
import { Circle } from 'rc-progress';

export function Confidence_level({ title, body }) { 
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
            <Circle percent={77} strokeWidth={5} strokeColor="#edb933" trailWidth={4} trailColor='#808080' />
        </div>  
    </div>
  );
}

