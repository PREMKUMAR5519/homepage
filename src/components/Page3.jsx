import React from 'react'
import '../styles/Page3.css'
import back from '../images/back.jpg'
import back1 from '../images/back1.png'
import back2 from '../images/back2.png'

import over_flower from '../images/over_flower.png'

function Page3() {
  return (
    <div className='page3_mainc'>
   
      <div className='page3_container1'>
        <img src={back2} alt="" />


      </div>
      <div className='page3_container2'>
       <div className='page3_container2_div1'>
       <div className='why_txt'>
        <p>Why Choose Our Saffron?</p>
        </div>
        <div className='exp_txt'>
        At Z Princess Saffron, we offer premium saffron from Kashmir and Spain, known for its vibrant color, rich flavor, and health benefits. Ethically and sustainably sourced, our saffron supports local farmers and the environment. With specialized lines for culinary, skincare, and wellness, our saffron enhances your lifestyle. Backed by a satisfaction guarantee and transparent practices, Z Princess Saffron is your trusted source for quality saffron.        </div>
       </div>
       <div className='page3_container2_div2'>
        <img src={over_flower} alt="" />

       </div>

      </div>

    </div>
  )
}

export default Page3