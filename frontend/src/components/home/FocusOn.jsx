import React from 'react'
import { assets } from '../../assets/front_images/assets'

const FocusOn = () => {
  return (
    <div className=' text-white z-40 py-24 bg-black'>

      <div className="w-9/10 m-auto">
      <h2 className="text-4xl text-center my-4">Focus on the <span className="text-customlime font-heebo">Best</span></h2>
      <div className="divider flex flex-col md:flex-row gap-8">
        <div className="left bg-gray-700 w-1/2 p-12 rounded-4xl">
          <div className="logos">
    <img src={assets.oj_logo} alt="" className='rounded-4xl' />
          </div>
          <div className="text-contents">
            <h3 className="text-white text-2xl font-bold py-2">Problem Solver</h3>
            <p className="">
              I have solved lots of analytical and algorithomic problems during the 4 years of my Bachelor
            </p>
          </div>
        </div>
        <div className="right w-1/2 flex flex-col gap-4">
          <div className="top p-12 rounded-4xl bg-gray-600">
            <img src={assets.client_server} alt="" className="rounded-4xl" />
            <h2 className="text-2xl font-bold py-2">Dev & <span className="">Design</span></h2>
            <p className="">Excels in both development and design to create a seamless and intuitive user experience.</p>
          </div>
          <div className="bottom p-12 rounded-4xl bg-gray-600">
            <img src={assets.client_server} alt="" className="rounded-4xl" />
            <h2 className="text-2xl font-bold py-2">Dev & <span className="">Design</span></h2>
            <p className="">Excels in both development and design to create a seamless and intuitive user experience.</p>
          </div>
          
        </div>
      </div>
      </div>

    
    </div>
  )
}

export default FocusOn