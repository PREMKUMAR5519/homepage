import React, { useEffect } from 'react'
import v3 from '../images/v3.mp4'
import v4 from '../images/v4.mp4'
import backimg from '../images/backimg.webp'
import Navbar from './Navbar'
import Footer from './Footer'
import him_saffron from '../images/him_saffron.jpg'
import spain_saffron from '../images/spain_saffron.jpg'
import '../styles/Kashmiri.css'
import back2 from '../images/back2.jpg'
import back3 from '../images/back3.jpg'
import { useLocation,useNavigate } from 'react-router-dom';

function SpainSaffron() {
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
        <div className='main_about'><p onClick={()=>navigate('/')} >HOME</p></div>
        <div className='about_container1'>SPAIN SAFFRON</div>
        <div className='about_container2'> renowned for its high quality and intense aroma, is primarily produced in the La Mancha region and is a key ingredient in many traditional Spanish dishes.</div>
        <div className='about_container3'>
            <div className='about_container31'>
                <h6>The Golden Essence of the Himalayas</h6>
                <p>Cultivated  in the historic region of La Mancha, Spanish saffron is synonymous with authenticity and excellence. Often referred to as <br /> <span className='differ'>'the best in the world'</span>  this variety is prized for its distinctive floral notes and striking golden hue.</p>

            </div>
            <div className='about_container32'>
                <video autoPlay muted loop>
                <source src={v4}/>
                </video>

            </div>
        </div>
        </div>

        <div className='about_container5'>
           <div className='about_container51'> 
            <div className='about_container512'>
                <img src={spain_saffron} alt="" />

            </div>
            <div className='about_container513'>
                <h6>THE CULINARY JEWEL</h6>
                <p> A precious spice that adds unparalleled flavor, color, and aroma to dishes around the world. Harvested from the delicate stigmas of the Crocus sativus flower, this luxurious ingredient is labor-intensive to produce, contributing to its high value. Saffron's unique ability to elevate simple recipes into gourmet experiences makes it a favorite among chefs and home cooks alike, infusing each dish with a golden hue and a subtle, earthy sweetness.</p>

            </div>
           </div>

        </div>

          <div className='about_container4'>
            <div className='about_container31'>
                <h6>The soul of Spanish cuisine</h6>
                <p>Perfect for iconic dishes like paella and risotto, Spanish saffron enhances food with its unique blend of sweetness and earthiness. In cosmetics, its high content of antioxidants helps protect the skin from damage and aging, making it a favorite in high-end skincare products. La Mancha’s saffron stands out not only for its flavor but also for its meticulous hand-harvesting process, making each strand a testament to Spanish craftsmanship.</p>

            </div>
            <div className='about_container32'>
                <video autoPlay muted loop>
                <source src={v3}/>
                </video>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SpainSaffron