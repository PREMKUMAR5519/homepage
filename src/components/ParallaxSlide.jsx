import React, { useEffect } from 'react'
import '../styles/ParallaxSlide.css'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import banner from '../images/banner.jpg'
import banner_about from '../images/bannner_about.jpg'
import sample1 from '../images/sample5.jpeg'
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import ourproductback from '../images/ourproductsback.jpeg'
import whychooseback from '../images/whychooseback.jpeg'
import usecaseback from '../images/usecaseback.jpeg'



function ParallaxSlide() {
  const navigate = useNavigate()
    useEffect(() => {
        const parallax = document.getElementById("parallax");

        // Parallax Effect for DIV 1
        window.addEventListener("scroll", function () {
          let offset = window.pageYOffset;
          parallax.style.backgroundPositionY = offset * 0.7 + "px";
          // DIV 1 background will move slower than other elements on scroll.
        });
        
      
    }, [])
    
  return (
    <section>
  <div id="parallax" className="parallax-item" style={{backgroundImage:`url(${ourproductback})`}}>
    <div className='parallax_div1'>
      <h1>OUR PRODUCTS
      </h1>
      <p>these saffrons bring a touch of magic to every culinary, medicinal, and cosmetic experience.</p>
      <button onClick={()=>navigate('/productdeatil')}>DISCOVER NOW</button>

    </div>
   

  </div>
  <div className="parallax-item"  id='banner_about' style={{backgroundImage:`url(${whychooseback})`}}>
  <div className='parallax_div1'>
      <h1>WHY CHOOSE OUR SAFFRON
      </h1>
      <button>DISCOVER NOW</button>

    </div>

  </div>
  <div className="parallax-item" id='parallax_unique'> 
    <div className='setus'>
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
 

   </div>
  <div className="parallax-item" id='banner'  style={{backgroundImage:`url(${usecaseback})`,height:"100vh"}} >
  <div className='parallax_div1'>
      <h1>Unlock the Golden Potential
      </h1>
      <button>DISCOVER NOW</button>

    </div>
  
  </div>
</section>
  )
}

export default ParallaxSlide