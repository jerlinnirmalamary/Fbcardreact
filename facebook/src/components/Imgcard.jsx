import React from 'react';
import './ImageCard.css';


export function ImageCard() {
    return (
      <div className='imagecard'>
        <p className='p'>The best care for your skin</p>
        <div>
            <img className='imgcard' src="image.jpeg" alt="" />
        </div>
      </div>
    )
  }
