import React from 'react'
import "../Style/Skills.css"
import SeperatorLine from "../Components/SepratorLine"
import { SkillData } from '../data/SkillData'
import SkillCard from './SkillCard'
const Skills = () => {
  const data = SkillData
  return (
    <div className='skills'>
     <SeperatorLine/>
    <label className='section_title'>Skills</label>
    <div className='skills_container'>
      {
        data.map((item)=>{
          return(
            <>
            <div className='skills_section'>
              <label className='skill_title'>{item.type}</label>
            </div>
            <div className='skill_list'>
            {item.list.map((skill)=>{
              return(
               <SkillCard skill={skill}/>
              )
            })}
            </div>
            </>
          )
        })
      }
    </div>
     
    </div>
  )
}

export default Skills