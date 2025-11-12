import React from 'react'
import { assets } from '../../assets/front_images/assets'
const Intro = () => {
  return (
    <div className="flex mt-8 w-2/3 justify-center mx-auto gap-24 flex-col lg:flex-row items-center">
    {/* Left section: image + name */}
    <div className="flex flex-col items-center">
      <div className="img-container w-[350px] mx-6">
        <img
          src={assets.owner}
          alt="Portrait of Kazi Faisal Mahmud"
          className="rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-4xl font-mono tracking-tight text-left mb-8 mt-2">
        Kazi Faisal Mahmud
      </h1>
    </div>

    {/* Right section: quote */}
    <div className="flex items-center">
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 max-w-lg">
        <p className="text-justify font-heebo text-xl leading-relaxed">
        I am a Computer Science and Engineering student at Daffodil International University, passionate about technology and personal growth. I strive for excellence in every endeavor and am committed to making meaningful contributions to my family, community, and country.
        </p>
      </blockquote>
    </div>
  </div>
  )
}

export default Intro