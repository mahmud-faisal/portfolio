import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/front_images/assets'
import { Link } from 'react-router'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const halfHeight = window.innerHeight / 2
      setShowNav(window.scrollY > halfHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const isVisible = showNav || menuOpen

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isVisible ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-9/10 m-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
          <Link to='/'><img src={assets.logo_nbg} alt="logo" className="w-[48px]" /></Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex gap-4 font-bold text-amber-900 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-6 pointer-events-none'
          }`}
        >
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projects</Link>
          {/* <Link to='/resume'>Resume</Link> */}
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          
        </div>

        {/* Menu Icon */}
        <div onClick={toggleMenu} className="cursor-pointer">
          <img src={assets.menu_icon} alt="menu" className="w-10" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
