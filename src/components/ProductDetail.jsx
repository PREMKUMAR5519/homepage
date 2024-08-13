import React, { useEffect } from 'react'
import '../styles/ProductDetail.css'
import ourproductback from '../images/ourproductsback.jpeg'
import whychooseback from '../images/whychooseback.jpeg'
import usecaseback from '../images/usecaseback.jpeg'
import v2 from '../images/rightv.mp4'
import v6 from '../images/v6.mp4'
import crumppaper from '../images/crumppaper.jpg'
import { useNavigate } from 'react-router-dom'


function ProductDetail() {
    const navigate =useNavigate()
    useEffect(() => {
        const parallax = document.getElementById("parallax");

        window.addEventListener("scroll", function () {
          let offset = window.pageYOffset;
          parallax.style.backgroundPositionY = offset * 0.7 + "px";
        });
        
      
    }, [])
    
  return (
    <section className='productdetail_main'>
        <div className='productdetail1'  >
            <h1>OUR PRODUCTS</h1>
            <p>From the snow-capped peaks of Kashmir to the arid plains of Iran and the sunlit fields of Spain, each region’s saffron offers a unique story, flavor, and beauty benefit. Whether you seek the potent aroma and skin-brightening qualities of Kashmiri saffron, the balanced elegance and anti-aging effects of Iranian threads, or the floral richness and protective properties of Spanish varieties, these saffrons bring a touch of magic to every culinary, medicinal, and cosmetic experience.</p>

        </div>
        <div className='productdetail2'>
            <video  autoPlay loop muted>
                <source src={v2}/>
            </video>
            <div className='productdetail2_div'>
                <h1>KASHMIR SAFFRON</h1>
                <p>The Golden Essence of the Himalayas</p>
                <button onClick={()=>navigate('/kashmir-saffron')}>DISCOVER MORE</button>

            </div>
            
        </div>
        <div className='productdetail3'>
        <video autoPlay loop muted src={v6}></video>
        <div className='productdetail2_div'>
                <h1>SPAIN SAFFRON</h1>
                <p>The Crown Jewel of La Mancha</p>
                <button>DISCOVER MORE</button>

            </div>

            
            </div>
   
    </section>
  )
}

export default ProductDetail