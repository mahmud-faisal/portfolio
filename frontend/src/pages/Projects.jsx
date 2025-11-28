import React, { useContext } from 'react'
import Project from '../components/project/Project'
import { StoreContext } from '../context/StoreContext'

const Projects = () => {

  const {backend_url,projectList} = useContext(StoreContext);
  
  // console.log(projectList)
  return (
    
    <div className='w-9/10 mx-auto mt-32 mb-20'>
      <h2 className="text-center text-4xl font-bold my-4">Projects</h2>
        {projectList.map((data)=>{
          return(
            <Project key={data._id} project={data}/>
          )

        })}
        
    </div>
  )
}

export default Projects