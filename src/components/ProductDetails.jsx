import React, { useEffect } from 'react'
import Page4 from './Page4'
import him_saffron from '../images/him_saffron.jpg'
import spain_saffron from '../images/spain_saffron.jpg'
import '../styles/ProductDetails.css'
import foodback from '../images/foodback.jpg'
import Footer from './Footer'
import Page7 from './Page7'
function ProductDetails() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
  return (
    <div>
        <div className='pd_main'>
            <div className='pd_con1'>
                <img src={foodback} alt="" />

            </div>
            <div className='pd_con2'>
                <h5>#PRODUCT DETAILS</h5>
                <p>Z PRINCESS SAFFRON</p>
            </div>
        </div>
        <div className='pd_div11'>"Exceptional Products for Discerning Tastes"
        </div>
         <Page4 title='Kashmiri Saffron'
        subTitle="The Golden Essence of the Himalayas"
        paragraph={true}
        image={him_saffron}
        clsName="page3_div12"
      /> 



      <Page4
        title='Spain Saffron'
        subTitle="The Crown Jewel of La Mancha"
        paragraph={false}
        image={spain_saffron}
        clsName="page3_div12ff"

      />
      <Page7/>
      <Footer/>
    </div>
  )
}

export default ProductDetails