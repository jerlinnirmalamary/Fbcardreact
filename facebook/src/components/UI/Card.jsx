import React from 'react';
import { useState } from 'react';
import Profile from '../Profile';
import { ImageCard } from '../Imgcard';
import Comments from '../Comments';
import Icons from '../Icons';
import './Card.css';


export default function Card1(){
    const [comments,setComments]=useState([]);
    
    function addComments(value){
        setComments((previousState)=>[...previousState,value])
    }
    
    return (
       <>
        <div className='mainbox'>
            <Profile />
            <ImageCard />
            <Comments comments={comments.length}/>
            <Icons handleComment={addComments} />
        </div>   
       
       </>
      )
}



