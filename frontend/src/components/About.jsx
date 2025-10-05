import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>We love serving delicious food</p>
                </div>
                <p className='mid'>
                    You love food? And guess what we love making it for you. 
                    I am a passionate Youtuber and a mother of 2 lovely children and Now have my own restraunt.
                    The best Cuisine you will ever have is waiting for you. 
                    We are happy having you here .What are you waitng for have your reservations NOWWWW!!!!
                </p>
                <Link to={"/"}>
                    Explore Menu{""} 
                    <span>
                    <HiOutlineArrowNarrowRight/>
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
      
    </section>
  )
}

export default About
