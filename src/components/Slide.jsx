import React from 'react'
import backvideo from '../images/backvideo.mp4'
import '../styles/Register.css'
import '../styles/Slide.css'
import { useUserContext } from './UserContext'
import Slider1 from './sliders/Slider1'
function Slide() {
  return (
    <div>
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={backvideo} type="video/mp4" />

      </video>
      <div className='slide_main'>
       <div className='slide_container'>
        <Slider1/>
       </div>
      </div>
    </div>

  </div>  )
}

export default Slide