import React from 'react'
import {assets} from '../assets/front_images/assets'
const About = () => {
  return (
    <div className='w-9/10 m-auto'>
        <h1 className="text-4xl text-center">Kazi Faisal Mahmud</h1>

        <div className="img-container w-[800px] m-auto ">
            <img src={assets.male_avatar} alt="" className='' />
        </div>
        <p className="">Hi I am Faisal . I am a student of computer Science And Engineering at Daffodil International University . My biggest goal in my life is to be a kind person .I want to achieve success in every step of my life .I always want to hard work for myself , my family and my country .

</p>
    </div>
  )
}

export default About