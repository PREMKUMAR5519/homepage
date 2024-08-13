import React, { useEffect } from 'react'
import v2 from '../images/rightv.mp4'
import v6 from '../images/v6.mp4'
import backimg from '../images/backimg.webp'
import Navbar from './Navbar'
import Footer from './Footer'
import him_saffron from '../images/him_saffron.jpg'
import spain_saffron from '../images/spain_saffron.jpg'
import '../styles/Kashmiri.css'
import back2 from '../images/back2.jpg'
import back3 from '../images/back3.jpg'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function About() {
    const { pathname } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // This will immediately set the scroll position
        });
      }, [pathname]);
    
  
  return (
    <div className='about_main' >
        <div className='about_maincon' style={{backgroundImage:`url(${back3})`}}>
        <div className='main_about'><p onClick={()=>navigate('/')}>HOME</p></div>
        <div className='about_container1'>KASHMIRI SAFFRON</div>
        <div className='about_container2'>Revered for its unparalleled quality, Himalayan saffron adds a touch of luxury and exotic flavor to culinary creations worldwide.</div>
        <div className='about_container3'>
            <div className='about_container31'>
                <h6>The Golden Essence of the Himalayas</h6>
                <p>Nestled in the heart of the enchanting Kashmir Valley, Kashmiri saffron is renowned for its deep crimson threads and unparalleled potency. This "Red Gold" is celebrated for its rich flavor, vibrant color, and remarkable medicinal properties</p>

            </div>
            <div className='about_container32'>
                <video autoPlay muted loop>
                <source src={v2}/>
                </video>

            </div>
        </div>
        </div>

        <div className='about_container5'>
           <div className='about_container51'> 
            <div className='about_container512'>
                <img src={him_saffron} alt="" />

            </div>
            <div className='about_container513'>
                <h6>THE GOLDERN SPICE</h6>
                <p> Grown primarily in the Kashmir Valley, it is renowned for its unique flavor, vibrant color, and medicinal properties. The saffron threads are meticulously hand-harvested and dried, making it one of the most expensive and sought-after spices in the world. The high altitude, rich soil, and specific climatic conditions of the region contribute to the exceptional quality of Kashmir saffron.</p>

            </div>
           </div>

        </div>

          <div className='about_container4'>
            <div className='about_container31'>
                <h6>The Golden Essence of the Himalayas</h6>
                <p>Nestled in the heart of the enchanting Kashmir Valley, Kashmiri saffron is renowned for its deep crimson threads and unparalleled potency. This "Red Gold" is celebrated for its rich flavor, vibrant color, and remarkable medicinal properties</p>

            </div>
            <div className='about_container32'>
                <video autoPlay muted loop>
                <source src={v6}/>
                </video>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About