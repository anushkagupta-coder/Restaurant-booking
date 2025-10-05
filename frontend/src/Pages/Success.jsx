import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Link from "react-router-dom";

const Success = () => {
    const [countdown,setCountdown]=useState(10);
    const navigate=useNavigate();

    useEffect(()=>{
        const timeoutId=setInterval(()=>{
            setCountdown(preCount=>{
                if(preCount ===1){
                    clearInterval(timeoutId)
                    navigate("/")
                }
                return precount - 1;
            });
        },1000);
        return ()=>clearInterval(timeoutId);
    },[navigate]);
  return (
    <>
    <section className='notFound'>
        <div className="container">
            <img src="/sandwich.png" alt="success" />
            <h1>redirecting to Home in {countdown} seconds...</h1>
            <Link to ={'/'}>Back to Home <HiOutlineArrowNarrowRight/></Link>
        </div>
        
        
    </section> 
    </>
  )
}

export default Success
