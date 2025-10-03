import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaPaperPlane,  } from 'react-icons/fa'
import {assets} from '../assets/front_images/assets';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div className='w-9/10 md:w-7/10 m-auto mt-48'>
        <h2 className="text-4xl font-bold text-center ">Get in  Touch</h2>
        <p className="w-full md:w-2/3  my-4 text-center mx-auto">Feel free to reach out anytime through any medium — I'm always happy to connect, collaborate or simply have a friendly chat.</p>
        <div className="flex flex-col gap-8 md:flex-row justify-between my-8">
            
            <div className="left w-full md:w-10/21">
            <h3 className="text-2xl font-bold mt-4">Contact Information</h3>
            <p className="w-full md:w-2/3  mt-2 mb-8 text-sm">Get an early response by contacting through the sending message using the form</p>
            <div className="flex flex-col gap-6">
                <div className="flex-col gap-2 flex">
                <p className="flex items-center gap-4 text-xl "><span className="text-blue-500"> <FaEnvelope /> </span>Email</p> 
                <a href="mailto:kfaisalmahmud@gmail.com">kfaisalmahmud@gmail.com</a>
                </div>
                <div className="flex flex-col gap-2"><p className="text-xl flex items-center gap-3 "><span className="text-blue-500"><FaLocationArrow /></span>Location</p>
                <p className="">Dhaka, Bangladesh</p>
                 </div>
                <div className="flex flex-col gap-2">
                <p className="flex gap-3 items-center text-xl font-bold ">Connect Me</p>
                <div className=" flex gap-4 text-3xl">
                <Link to="https://github.com/mahmud-faisal"><FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/kfmahmud/"><FaLinkedin /></Link>
            <a href="mailto:kfaisalmahmud@gmail.com" className="">
            <FaEnvelope />
            </a>
                </div>
                </div>
                
            </div>
            </div>
            <div className="right w-full md:w-10/21">
            <h3 className="text-2xl font-bold mt-4 mx-12">Send Me a Message</h3>
            <p className="mx-12 mt-2 text-sm">Write me what ever in your mind</p>
            <form action="" className=" px-12 py-4  flex flex-col gap-4 rounded-2xl">
                <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" name="" id="" className='border rounded-lg p-2' placeholder='Enter your name' />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="" className='border w-full rounded-lg p-2' placeholder='example@mail.com' />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="Message">Message</label>
                <textarea name="" id="" rows={5} className='border rounded-lg p-2' placeholder='Write me whatever in your mind'></textarea>
                </div>
                <button type="submit" className='bg-blue-950 w-[150px] py-2 px-4 rounded-2xl cursor-pointer text-white flex gap-3 items-center'>Submit<FaPaperPlane /></button>
            </form>

            </div>
        </div>

    </div>
  )
}

export default Contact