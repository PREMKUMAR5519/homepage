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


gsap.registerPlugin(ScrollTrigger);
function MainPage() {
  const { setShowNav, showLogin } = useUserContext()
  const [showEnd, setShowEnd] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(false)
  const [translateX, setTranslateX] = useState(0);
  const [zPrinces,setZPrincess] =useState(true)


  ///////////////////////////

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
  return (
    <div className='mainpage_main'>
      <Navbar />
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
                  <button>DISCOVER NOW </button>
                </div>
                <div className='mainpage_end'>
                  {/* <div className='mainpage_end1'>

                    {showEnd ? (
                      <div style={{ transform: `translateX(-${translateX}px)` }} className='mainpage_end11'>
                        <p className='mainpage_end1_1'> <p className='I_class'> I</p>  Unveil the Secrets of the Crocus Sativus</p>

                        <p className='mainpage_end1_2'>Explore our collection of premium saffron, cultivated <br /> with reverence for its legendary properties.  Each <br />thread whispers tales of royalty, whispers promises of <br /> vibrant dishes, radiant skin, and a touch of magic for <br /> your well-being.</p>

                      </div>) : (
                      <div style={{ transform: `translateX(-${translateX}px)` }} className={`mainpage_end11${showEnd ? "true" : " "}`}>
                        <p className='mainpage_end1_1'> <p className='I_class'> I</p>Unveiling the Magic of Saffron </p>
                        <p className='mainpage_end1_2'>Craving a taste of legend? Saffron, the "king of spices," <br /> elevates your world with honeyed aroma and  fiery <br /> color, transforming culinary creations into masterpieces. <br /> Beyond the kitchen, it reveals secrets  of beauty and well-being.<br /> Discover the magic of our premium saffron.
                        </p>

                      </div>)}
                    <div className='mainpage_end12'>
                      <GrNext onClick={handleEndShow} />
                    </div>


                  </div> */}
                </div>



              </div>
            </div>


          </div>
        </div>

        <div className='mainpage_con2' style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}>


          <Unveil/>
          
          {/* <Page5 /> design changed on 7/8/24 */}
        </div>
      </div>
      <div className='our_products'>Our Products</div>
      <Products/>
      <div className='View_all'>
        <button>View All Products<FaShoppingBag className='bag' />
        </button>
     </div>   
      <ParallaxSlide/>
  

     
  
    {/* <Stories/> design changed on 7/8/24 */}
     
      {/* <Page6 />
      <div className='d_uses'>Discover the Uses of Saffron</div>
      <Page7 /> */}
     <div className='footer_plus'>
     <NwsLetter/>
     <Footer />
     </div>



    </div>
  )
}

export default MainPage