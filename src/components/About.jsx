import React from 'react'
import '../styles/About.css'
import aboutback from '../images/aboutback.jpg'
import whychooseback from '../images/whychooseback.jpeg'
import blackwater from '../images/blackwater.jpg'
import aboutback2 from '../images/aboutback2.jpeg'
import Navbar from './Navbar'
import Footer from './Footer'


function About() {
  return (
    <div className='aboutn_main'>
        <Navbar/>
        <div className='aboutn_div1'>
            <img src={aboutback} alt="" />
            <div className='aboutn_div11'>
                
                <div className='aboutn_div1top'>
                <div className='aboutn_div11_1'>
                    <p>ZPRINCESS</p>
                    <p>SAFFRON</p>

                </div>
                <div className='aboutn_div11_2'>
                is a distinguished saffron seller located in Chennai, India, dedicated to bringing you the world’s finest saffron. Our saffron is meticulously harvested from the most prestigious regions known for their superior quality – Kashmir, Spain, and Iran. Each strand of our saffron carries the essence of these regions, known for their unique climate and traditional harvesting methods, which contribute to the rich aroma, vivid color, and unforgettable flavor.

                </div>

                </div>
                <div className='aboutn_div1botom'>
                    <div className='aboutn_div1botom1'>
                        <img src={blackwater} alt="" />

                    </div>
                    <div className='aboutn_div1botom2'>
                    we are passionate about offering an authentic saffron experience. Our commitment to quality ensures that every thread of saffron you purchase from us is pure, unadulterated, and of the highest standard.

                    </div>

                </div>

            </div>

        </div>
        <div class="screen"></div>
        <div className='aboutn_div2'>
            <div className='aboutn_div21'>
                <p>            Whether you are a professional chef aiming to elevate your dishes or a home cook looking to add a touch of luxury to your culinary creations, our saffron is perfect for adding depth and richness to a variety of dishes.
                </p>
            </div>
            <div className='aboutn_div22'>
                <h1>BEAUTY AND SKINCARE</h1>
                <p>
                For beauty and skincare enthusiasts, our saffron offers natural anti-inflammatory and antioxidant properties, perfect for brightening the skin, reducing pigmentation, and enhancing your overall complexion with a radiant glow.
                </p>

            </div>
            <div className='aboutn_div23'>
                <h1>Health-conscious </h1>
                <p>
                Health-conscious individuals can benefit from the numerous health properties of saffron, including improved mood, digestion, and overall well-being. Our saffron is ideal for incorporating a natural, health-boosting ingredient into your daily routine.                </p>

            </div>

            <div className='aboutn_div22'>
                <h1>For pregnant women</h1>
                <p>
                For pregnant women, saffron has traditionally been used to support well-being, offering benefits such as improved digestion and mood enhancement. However, it should be used in moderation, and we always recommend consulting with a healthcare professional before use.                </p>

            </div>
            <div className='aboutn_div23'>
                <h1>Our mission </h1>
                <p>
                to provide our customers with unparalleled service and a product that stands out in terms of quality and authenticity. We believe that saffron is more than just a spice – it’s a journey through tradition, culture, and flavor. Trust Z PRINCESS SAFFRON to deliver an exceptional saffron experience, one that enhances your cooking, beauty, and health routines.                </p>

            </div>
            <div className='aboutn_div24'>
            <p>Join us in celebrating the timeless allure of saffron. With Z PRINCESS SAFFRON, every aspect of your life becomes a little more luxurious and memorable.</p>
                

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default About