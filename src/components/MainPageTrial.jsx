import React, { useEffect, useState, useRef } from 'react'
import "../styles/MainPage.css"
import backvideo from '../images/backvideo.mp4'
import Navbar from './Navbar'
import kashmir_saffron from '../images/kashmir_saffron.jpg'
import borderline from '../images/borderline.png'
import spain_saff from '../images/spain_saff.png'
import spain_saff1 from '../images/spain_saff1.png'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Footer from './Footer'
import { useUserContext } from './UserContext'
import Page5 from './Page5'
import saffron_outline_img from '../images/saffron_outline_img.png'
import { FaShoppingBag } from "react-icons/fa";
import him_saffron1 from "../images/him_saffron1.png"
import him_saff2 from "../images/him_saff2.jpg"
import himsaff from "../images/himsaff.jpg"
import iransaff from "../images/iransaff.png"
import NewsLetter from './NewsLetter'
import LoginHover from './LoginHover'
import { GrNext } from "react-icons/gr";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page6 from './Page6'
import Page7 from './Page7'
import him_saffron from '../images/him_saffron.jpg'
import spain_saffron from '../images/spain_saffron.jpg'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rightvideo from '../images/rightvideo.mp4'
import ImageSlider from './ImageSlider'
import IS from './IS'
import ParallaxSlide from './ParallaxSlide'
import Products from './Products'
import NwsLetter from './NwsLetter'
import Stories from './Stories'
import banner2 from '../images/banner3.jpg'
import Unveil from './Unveil'
import OurProducts from './OurProducts'
import '../styles/MainPageTrial.css'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom'
import MenuSlider from './MenuSlider'

gsap.registerPlugin(ScrollTrigger);
function MainPageTrial() {
  const navigate = useNavigate()
  const {  menuSlider,setMenuSlider,sideBar,setSideBar,setShowNav, showLogin } = useUserContext()
  const [showEnd, setShowEnd] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(false)
  const [translateX, setTranslateX] = useState(0);
  const [zPrinces,setZPrincess] =useState(true)


  ///////////////////////////
  useEffect(() => {
    setMenuSlider(false)
    setSideBar(false)
  }, [])
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = scrollPosition / maxScroll;

      // Adjust this calculation as needed
      const maxTranslateX = 500;  // maximum translate value in pixels
      const newTranslateX = maxTranslateX * scrollRatio;

      setTranslateX(newTranslateX);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  ///////////////////////
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      if (window.scrollY > 500) {
        setHeight(true);
      } else {
        setHeight(false);
      }
    


    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  function handleEndShow() {
    setShowEnd(!showEnd)
  }
  function handleDiscoverNow(){
    navigate('/test')
  }
  return (
    <div className='mainpage_main'>
      <Navbar />
      <SideBar/>
      <MenuSlider/>
      {showLogin ? (<LoginHover />) : ' '}
      <div className={`mainpagecon ${height ? "true" : ''}`}>
        <div style={{ transform: `translateY(${scrollPosition * 0.2}px)` }} className='mainpage_con1'>
          <div className='mainpage_container'>
            <div className="video-container">
              <video autoPlay loop muted>
                <source src={backvideo} type="video/mp4" />

              </video>
              <div className='mainpage_div'>
                <div className={`mainpage_div1 ${zPrinces?"true":""}`}>
                  {/* //////////////// */}
                  Z PRINCESS SAFFRON
                  {/* /////////////// */}
                </div>
                <div className='line_l'>

                </div>
                <div className='mainpage_div2'>
                  World's Finest Saffron
                </div>
                <div className='mainpage_div3'>
                  <button onClick={handleDiscoverNow} >DISCOVER NOW </button>
                </div>
                <div className='mainpage_end'>
                  
                </div>



              </div>
            </div>


          </div>
        </div>

        <div className='mainpage_con2' style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}>


          <OurProducts/>
          
        </div>
      </div>
    
      <div className='mainpagetrialdiv'>
      <div className='setus_div1'>
        WHAT SET US APART

      </div>

      <div className='setus_div2'>
        <div >
          <h1>Transparency</h1>
          <p>We provide detailed information about the origin and processing of our saffron, so you know exactly what you're buying.</p>
        </div>
        <div>
          <h1>Innovation</h1>
          <p>We continuously explore new ways to enhance the quality and usability of our saffron, ensuring we stay ahead of the market.</p>
        </div>
        <div>
          <h1>Passion</h1>
          <p>Our passion for saffron drives us to maintain the highest standards and share this incredible spice with the world.</p>
        </div>

      </div>

    </div>
  

     
  
    
     <div className='footer_plus'>
     <NwsLetter/>
     <Footer />
     </div>



    </div>
  )
}

export default MainPageTrial