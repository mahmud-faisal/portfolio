import React from 'react'
import { assets } from '../../assets/front_images/assets'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='w-9/10 flex justify-between items-center m-auto z-50'>
        <div className="">
        <Link to='/'><img src={assets.logo_nbg} alt="" className="w-[100px]" /></Link>
        </div>

        {/* Navigations */}

        <div className="flex gap-4 font-bold text-amber-900">
          <Link to='/projects'>Projects</Link>
          <Link to='/resume'>Resume</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>

        {/* Navigations */}

        <div className="">
        <img src={assets.menu_icon} alt="" className="w-[40px]" />
        </div>
    </div>
  )
}

export default Navbar