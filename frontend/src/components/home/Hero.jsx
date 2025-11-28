import React from 'react'
import { FaLinkedin,FaGithub,FaEnvelope } from "react-icons/fa";
import { assets } from '../../assets/front_images/assets';
import { Link } from 'react-router';
import Navbar from './Navbar';


const Hero = () => {
  return (
    <div>
      
        <div className="hero">
          <div className="hero-container relative">
          <img src={assets.hero_img} alt="" className="hero-img h-screen w-screen" />
          </div>
          <div className="hero-text flex flex-col gap-4 items-center absolute top-1/2 left-1/2 -translate-1/2">
            <p className="font-roboto font-bold tracking-wider">HI THERE! I'M</p>
            <h1 className="text-4xl font-bold font-heebo">
                KAZI FAISAL MAHMUD
            </h1>
            <p className="font-roboto font-bold tracking-wider">COMPUTER SCIENCE GRADUATE</p>
            <div className="hero-social flex justify-center gap-3 text-2xl">
            <Link to="https://github.com/mahmud-faisal"><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/kfmahmud/"><FaLinkedin /></Link>
            <a href="mailto:kfaisalmahmud@gmail.com" className="">
            <FaEnvelope />
            </a>

            
            
          </div>
          </div>

          
        </div>


    </div>
  )
}

export default Hero