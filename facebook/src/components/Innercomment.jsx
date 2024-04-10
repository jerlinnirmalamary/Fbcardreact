import React, { useState } from 'react';
import './Innercomment.css';

export default function Innercomment({handleClick}){
let inputValue="";

console.log(inputValue);
function inputBox(value){
    inputValue=value;
}

function clickEvent(){
  if(inputValue.length>0){ 
    handleClick(inputValue)
  }
  else{

  }
}

  return (
   <>
    <div className='comment'>  
       <div>
       <textarea className='textarea' name="" id="" onChange={(event)=> inputBox(event.target.value)} ></textarea>
        <small>Enter some text</small>
       </div>
        <button className='btn'onClick={clickEvent}>Send</button>
   
    </div>
   </>
  )
}
                                                                                    