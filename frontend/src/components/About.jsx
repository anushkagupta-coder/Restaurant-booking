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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium nulla mollitia? Dicta quibusdam
                     reprehenderit iusto libero iste, ducimus porro unde laboriosam culpa laudantium alias velit vel officiis dolore 
                     consequatur cupiditate autem minima qui id nam corporis. Ducimus, nobis. Omnis beatae quis accusantium laboriosam debitis 
                     et voluptate numquam cupiditate quibusdam!
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
