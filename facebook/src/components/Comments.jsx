import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { FaSmileBeam } from "react-icons/fa";
import './Comment.css';

export default function Comments({comments}){


  return (
 
<>
<div className='commentbox'>
       
       <div>
           <span className='heart'><FcLike /></span>
           <span className='like'> <AiFillLike /> </span>
           <span className='smile'>&#128515;</span>
           <span className='comment1'>&nbsp; &nbsp; Choose any one</span>
       </div>
    
       <div className='comment2'>{comments>0?comments:''}&nbsp;Comments</div>
    
     
        </div>
    <hr />
       
</>
     
     
       
 
  )
}
