import React from 'react'
import { assets } from '../../assets/front_images/assets'
import { Link } from 'react-router'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className="w-9/10 py-32 m-auto flex justify-between">
            <div className="first">
                <img src={assets.owner} alt="" className='rounded-full w-[160px] h-[150px]'/>
            </div>
            <div className="second text-white w-1/4 flex flex-col justify-center items-center gap-3">
                <h3 className="text-3xl font-bold ">About Me</h3>
                <p className='text-center'>I studied computer science and engineering at the Daffodil International University and now I am looking for job.</p>
            </div>
            <div className="third text-white gap-3 flex flex-col">
                <h3 className="text-3xl font-bold ">Contact</h3>
                <div className="hero-social flex justify-center gap-3 text-2xl">
            <Link to="https://github.com/mahmud-faisal"><FaGithub /></Link>
            <Link to="https://github.com/mahmud-faisal"><FaLinkedin /></Link>
            <a href="mailto:kfaisalmahmud@gmail.com" className="">
            <FaEnvelope />
            </a>

            
            
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer