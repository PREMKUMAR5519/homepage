import React, { useEffect } from 'react'
import '../styles/Insight.css'
import Navbar from './Navbar'
import { useUserContext } from './UserContext'
import ProductDetail from './ProductDetail'

function Insight() {
    const { setShowNav }=useUserContext()
    useEffect(() => {
        console.log("hello")
        setShowNav(true);


        const handleScroll = () => {
            setShowNav(true);
            console.log("hello")

          if (window.scrollY > 300) {
            setShowNav(false);
          } else {
            setShowNav(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className='insight_main'>
        <Navbar/>
        <div className='insight_div1'>
        </div>
        <div className='insight_div2'>
            <ProductDetail/>
        </div>
    </div>
  )
}

export default Insight