import React from 'react'
import "../Style/Contact.css"
import SeparatorLine from "../Components/SepratorLine"
import { Social } from '../Components/Social'
const Contact = () => {
  return (
    <div className='contact'>
      <SeparatorLine />
      <label className='section_title'>Contact</label>
      <div className='contact_container' >
        <div className='contact_left'>
          <p>Want to get in touch? Contact me on any of the platfrom.</p>
          <Social />
          <div className='contact-details'>
          <div><i class="fi fi-rr-envelope"></i> gitukhanchi99@gmail.com</div>
          <div> <i class="fi fi-rr-phone-call"></i> +91 7703946643</div>
          </div>
        </div>
        <div className='contact_right'>
          <a download href={require("../assets/Geeta-CV.pdf")}>
            <i class='fi-rr-cloud-download download_icon' />
            Download Resume</a>
        </div>
      </div>
    </div>

  )
}

export default Contact