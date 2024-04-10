import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import './Profile.css';

export default function Profile(){
    return (
        <div className='box'>
            <div className='leftside'>
                <div><img className='img' src="./img1.jpg" alt="" /></div>
               <div className='letter'>
                    <span className='span1'>Skin Mockup </span> 
                    <span className='span2'>Morning at 11:00 AM</span>  
                </div> 
            
            </div>

            <div className='rightside'> 
                <div className='icon'>
                <BsThreeDots />
                </div>
            </div>
        </div>
      )
} 


 