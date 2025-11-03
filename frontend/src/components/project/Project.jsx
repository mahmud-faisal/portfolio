import React from 'react'
import { assets } from '../../assets/front_images/assets'
import { FaEye, FaGithub, FaGlobe,  FaNodeJs,  FaReact, FaServer } from 'react-icons/fa'
import { Link } from 'react-router'
import ImageSlider from './ImageSlider';




const Project = ({project}) => {
    const techIcons = {
        React: <FaReact />,
        NodeJs: <FaNodeJs />,
        // JavaScript: <FaJs />,
        // Python: <FaPython />,
        // add more as needed
      }
    // console.log(project)
  return (
    <div className='flex p-4 border-1 rounded-2xl to-blue-950 gap-4'>
        <div className="max-w-[250px]">
            {/* Slider */}
            {/* <img src={assets.sample_project_image} alt="" className='max-w-[500px]' /> */}
            <ImageSlider images={project.media} />
        </div>

        <div className="content">
            <h2 className="project-name text-2xl font-bold">
                {project.title}
            </h2>
            <p className="desc">{project.short_description}</p>

            <h3 className="font-bold text-lg mt-2">
                Technologies Used:
            </h3>
            <div className="stacks flex flex-wrap gap-4" >
            {
                project.technologies?.map((tech)=>{
                   return(
                    
                    <div className="flex rounded-3xl bg-blue-950 text-white px-4 py-2 gap-2 items-center" key={tech._id}>
                    <p className="tech-name">{tech.name}</p><span>{techIcons[tech.name]}</span>
                    </div>
                
                   )
                })
            }
            </div>

            <div className="project-detail flex justify-between mt-8">
                <div className="flex gap-3 ">
                <Link to={project.links['github']}> <div className="flex items-center gap-2"><span><FaGithub /></span><p>Client</p></div></Link>
                <Link to={project.links['github']}> <div className="flex  items-center gap-2"><span><FaServer /></span><p>Server</p></div></Link>
                <Link to={project.links['live_demo']}>   <div className="flex  items-center gap-2"><span><FaGlobe /></span><p>Live</p></div></Link>
                
              
                
                </div>
                <div className="flex  items-center gap-2 ml-auto">
                    <span><FaEye /></span><p>See More</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Project