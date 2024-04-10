import React, { useState } from 'react';
import { GrLike } from "react-icons/gr";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import './Icons.css';
import Innercomment from './Innercomment';


export default function Icons({handleComment}){

  const [active, setActive] = useState(false);
  const [show,setShow]=useState(false);

    const handle = () => {
    setActive(!active);
  };
 
  const showEvent=()=>{
    setShow(true)
  }
  const handleClick=(value)=>{
    console.log("hi");
    handleComment(value)

    setShow(false)
  }
  return (
   <>    
    {!show &&<div className='iconbox'>

        <span onClick={handle} style={{ color: active ? "rgb(8, 127, 246)" : "black" }}><GrLike />&nbsp;Like</span>
        <span onClick={showEvent}><FaRegCommentAlt />&nbsp;Comment</span>
        <span><PiShareFatLight />&nbsp;Share</span>
    </div>}
    
    {show &&<Innercomment handleClick={handleClick} />}
   </>
      )
}
      