import React from 'react'
import { assets } from '../../assets/front_images/assets'
import { FaEye, FaGithub, FaGlobe, FaReact, FaServer } from 'react-icons/fa'
const Project = () => {
  return (
    <div className='flex p-4 border-1 rounded-2xl to-blue-950 gap-4'>
        <div className="">
            {/* Slider */}
            <img src={assets.sample_project_image} alt="" className='max-w-[500px]' />
        </div>

        <div className="content">
            <h2 className="project-name text-2xl font-bold">
                Medical BootCamp
            </h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto amet fuga, maiores ipsum voluptatum voluptatibus harum odit atque tempore eveniet hic, esse assumenda doloremque laboriosam maxime praesentium, et iure?</p>

            <h3 className="font-bold text-lg mt-2">
                Technologies Used:
            </h3>
            <div className="stacks flex flex-wrap">
                <div className="flex rounded-3xl bg-blue-950 text-white px-4 py-2 gap-2 items-center">
                <p className="tech-name">React</p><span><FaReact /></span>
                </div>
            </div>

            <div className="project-detail flex justify-between mt-8">
                <div className="flex gap-3 ">
                <div className="flex items-center gap-2"><span><FaGithub /></span><p>Client</p></div>
                <div className="flex  items-center gap-2"><span><FaServer /></span><p>Server</p></div>
                <div className="flex  items-center gap-2"><span><FaGlobe /></span><p>Live</p></div>
                
                </div>
                <div className="flex  items-center gap-2">
                    <span><FaEye /></span><p>See More</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Project