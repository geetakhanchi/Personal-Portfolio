import React from 'react'
import { Social_Data } from '../data/social_contact'
import "../Style/Social.css"
export const Social = () => {
    const data=Social_Data
  return (
    <div className='social-contact'>
        {
            data.map((item)=>{
                return (
                   <a rel="noreferrer" target="_blank" key={item.id} href={ item.link}>
                        <div  className='social_div'>
                        <img className='social_icon' src={item.icon }  alt="" />
                        </div>
                   </a>
                )
            })
        }
    </div>
  )
}
