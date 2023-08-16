import React from 'react'
import SepratorLine from '../Components/SepratorLine'
import { project_data } from '../data/Project_data'
import "../Style/Project.css"
import ProjectCard from './ProjectCard'
const Projects = () => {
  const data=project_data
 
  return (
    <div className='projects'>
    <SepratorLine/>
      <label className='section_title'>Projects</label>
      <div>
       {
         data?.map((item)=>{
           return(
             <ProjectCard project={item} key={item.id}/>
           )
         })
       }
      </div>
      <div>

      </div>
    </div>
  )
}

export default Projects 