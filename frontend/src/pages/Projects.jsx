import React, { useContext } from 'react'
import Project from '../components/project/Project'
import { StoreContext } from '../context/StoreContext'

const Projects = () => {

  const {backend_url,projectList} = useContext(StoreContext);
  
  // console.log(projectList)
  return (
    <div className='w-9/10 m-auto'>
        {projectList.map((data)=>{
          return(
            <Project key={data._id} project={data}/>
          )

        })}
        
    </div>
  )
}

export default Projects