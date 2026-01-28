import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import axios from "axios";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [phone,setPhone] = useState("");
    const navigate = useNavigate();

    const handleReservation = async (e) => {
    e.preventDefault();
    console.log("Reservation button clicked ✅");
    try {
        if(!firstName|| !lastName|| !email|| !phone|| !date|| !time){
            return toast.error("Please fill all the fields correctly");
        }
        if(phone.length !== 10){
            return toast.error("Phone number should be 10 digits long");
        }

      const { data } = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/v1/reservation/send`,
  { firstName, lastName, email, phone, date, time },
  {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  }
);

        console.log("DATA SENT TO BACKEND:", { firstName, lastName, email, phone, date, time });
        toast.success(data.message);
        setFirstName("");
        setLastName("");
        setPhone(0);
        setEmail("");
        setTime("");
        setDate("");
        navigate("/success");

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }



  return (
    <section className='reservation' id='reservation'>
        <div className="container">
            <div className="banner">
                <img src="/reservation.png" alt="res" />
            </div>
            <div className="banner">
                <div className="reservation_form_box">
                    <h1>Make a Reservation</h1>
                    <p>For further questions .please Call us</p>
                    <form onSubmit={handleReservation}>
                        <div>
                            <input 
                            type='text' 
                            placeholder='First Name' 
                            value={firstName} 
                            onChange={(e)=> setFirstName(e.target.value)}
                            />
                            
                            <input 
                            type='text' 
                            placeholder='Last Name' 
                            value={lastName} 
                            onChange={(e)=> setLastName(e.target.value)}
                            />
                            
                        </div>
                        <div>
                            <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)} />
                            <input type="time" placeholder='Time' value={time} onChange={(e)=>setTime(e.target.value)} />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder='Email' 
                                className='email_tag' 
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)} 
                            />
                            <input 
                                type="tel" 
                                placeholder='Phone' 
                                value={phone} 
                                onChange={(e)=> setPhone(e.target.value)} 
                            />

                            
                        </div>

                        <button type='submit'>
                                RESERVE NOW{""} 
                                <span>
                                    <HiOutlineArrowNarrowRight/>
                                </span>
                        </button>
                            
                    </form>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Reservation
