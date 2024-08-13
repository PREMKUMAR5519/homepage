import React, { useEffect } from 'react'
import '../styles/ProductListing.css'
import Stories from './Stories'
import Products from './Products'
import Footer from './Footer'
import { useNavigate,useLocation } from 'react-router-dom'
function ProductListing() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // This will immediately set the scroll position
        });
      }, [pathname]);
    
  
  return (
    <div className='pl_main'>
         <div className='pl_div1'  >
            <h1>OUR PRODUCTS</h1>
            <p>From the snow-capped peaks of Kashmir to the arid plains of Iran and the sunlit fields of Spain, each region’s saffron offers a unique story, flavor, and beauty benefit. Whether you seek the potent aroma and skin-brightening qualities of Kashmiri saffron, the balanced elegance and anti-aging effects of Iranian threads, or the floral richness and protective properties of Spanish varieties, these saffrons bring a touch of magic to every culinary, medicinal, and cosmetic experience.</p>

        </div>
        <Stories/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default ProductListing