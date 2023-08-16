import React from 'react'
import "../Style/About.css"
import { FcCommandLine } from "react-icons/fc";
import { Social } from '../Components/Social';
const About = () => {
  return (
    <div className='about'>
      <div className='about_top'>
        <div className='about_info'> 
        Hello There I am <FcCommandLine/> <br/> <span style={{color:"#c672f4",fontSize:"32px"}}>Geeta Khanchi</span><br/>
        Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled at building and maintaining web applications using HTML, CSS, JavaScript, Reactjs for frontend and Python, Django as Backend. Looking forward to joining a progressive and challenging work environment.
        </div>
        <div className='about_pic' >
          <img className='picture' src={require("../assets/Profile-pic.jpg")} alt="profile_image" />
        </div>
      </div>
      <Social/>
    </div>
  )
}

export default About