import React from 'react'
import Home from '../pages/Home';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
      <div className="absolute top-0 w-full z-50">
      <Navbar />
      </div>
      <Outlet />

      
      
      <Footer/>

    </div>
  )
}

export default Main;