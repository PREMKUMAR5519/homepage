import React from 'react'
import '../styles/Test.css'
import aboutback from '../images/aboutback.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

function Test() {
  return (
    <div className='aboutt_main'>
        <Navbar/>
        <div style={{backgroundImage:`url(${aboutback})`}} class="about_parallax">
            <div className='about_parallax_div1'>
                <div className='about_parallax_div11'>
                <h1><span>ZPRINCESS SAFFRON</span></h1>
                </div>
               

            </div>
            <div className='about_parallax_div2'>
                <h3>we are passionate about offering an authentic saffron experience. Our commitment to quality ensures that every thread of saffron you purchase from us is pure, unadulterated, and of the highest standard.
                </h3>
                <div className='about_parallax_div12'>
                is a distinguished saffron seller located in Chennai, India, dedicated to bringing you the world’s finest saffron. Our saffron is meticulously harvested from the most prestigious regions known for their superior quality – Kashmir, Spain, and Iran. Each strand of our saffron carries the essence of these regions, known for their unique climate and traditional harvesting methods, which contribute to the rich aroma, vivid color, and unforgettable flavor.


                </div>


            </div>
</div>
<div class="about_screen"></div>
<div class="flex" id="index">
  <div class="item">
  <h1>BEAUTY AND SKINCARE</h1>
  <p>
                For beauty and skincare enthusiasts, our saffron offers natural anti-inflammatory and antioxidant properties, perfect for brightening the skin, reducing pigmentation, and enhancing your overall complexion with a radiant glow.
                </p>
  </div>
  <div class="item">
  <h1>Health-conscious </h1>
  <p>
                Health-conscious individuals can benefit from the numerous health properties of saffron, including improved mood, digestion, and overall well-being. Our saffron is ideal for incorporating a natural, health-boosting ingredient into your daily routine.                </p>

  </div>
  <div class="item">
  <h1>For pregnant women</h1>
  <p>
                For pregnant women, saffron has traditionally been used to support well-being, offering benefits such as improved digestion and mood enhancement. However, it should be used in moderation, and we always recommend consulting with a healthcare professional before use.                </p>

  </div>
  <div class="item double"></div>
  <div class="item">
  <h1>Our mission </h1>

  <p>
                to provide our customers with unparalleled service and a product that stands out in terms of quality and authenticity. We believe that saffron is more than just a spice – it’s a journey through tradition, culture, and flavor. Trust Z PRINCESS SAFFRON to deliver an exceptional saffron experience, one that enhances your cooking, beauty, and health routines.                </p>
  </div>
 
  
</div>
<div className='aboutend'>
<p>Join us in celebrating the timeless allure of saffron. With Z PRINCESS SAFFRON, every aspect of your life becomes a little more luxurious and memorable.</p>

</div>
<Footer/>
    </div>
  )
}

export default Test