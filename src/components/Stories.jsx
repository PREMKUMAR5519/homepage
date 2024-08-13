import React, { useState } from 'react'
import '../styles/Stories.css'
import { useNavigate } from 'react-router-dom'
import him_saffron from '../images/him_saffron.jpg'
import spain_saffron from '../images/spain_saffron.jpg'
import str_1 from '../images/str1.jpg'
import str_2 from '../images/str2.webp'
import str_3 from '../images/str3.jpg'
import banner_about from '../images/bannner_about.jpg'
import lightpink from '../images/lightpink.jpeg'
import lightblue from '../images/lightblue.jpeg'
import pastalblue from '../images/pastalblue.jpeg'
import { GrNext } from "react-icons/gr";
import back4 from '../images/back8.jpg'
import back5 from '../images/back5.jpg'





function Stories() {
    const navigate = useNavigate()
    const [flip,setFlip]=useState(true)
  return (
    <div className='story_main'>
        {/* <div className='story_container1'>
            Stories

        </div> */}
        <div className='story_container2'>
            <div className='story_container2_div1' onClick={()=>{navigate('/kashmir-saffron')}}>
                <div className='story_container2_div11'>
                <img src={lightpink} alt="" />
                <div className='story_container2_div11_1'> 
                <h3>KASHMIR SAFFRON</h3>
                </div>
                </div>
                <h6> Nestled in the heart of the enchanting Kashmir Valley, Kashmiri saffron...</h6>
                <p>Learn More  <GrNext className='gnxt'/></p>
            </div>
             

                {/* <div className={`story_container2_div2 ${flip?"":"false"}`} onClick={()=>{setFlip(!flip)}}>
                        {flip?(<>
                            <div className='story_container2_div21'>
               <img src={pastalblue} alt="" />
               </div>
               <div className='story_container2_div22'>
                <h3>Z PRINCESS SAFRON</h3>
               <p>World's Finest Saffron</p>

               </div>
               <div className='story_container2_div23'>
                <h3>OUR SAFFRON</h3>
                <h6>  At Z Princess Saffron, we offer premium saffron from...</h6>
                <p>Learn More <GrNext className='gnxt'/></p>
               </div>
                        
                        </>):(<div className='card_back'>
                            <h3>Why Choose Our Saffron?</h3>
                            <p> At Z Princess Saffron, we offer premium saffron from Kashmir and Spain, known for its vibrant color, rich flavor, and health benefits. Ethically and sustainably sourced, our saffron supports local farmers and the environment. With specialized lines for culinary, skincare, and wellness, our saffron enhances your lifestyle. Backed by a satisfaction guarantee and transparent practices, Z Princess Saffron is your trusted source for quality saffron.</p>
                        </div>)}
                    
                 
            </div> */}
    

     
        
  

            
            <div className='story_container2_div1'  onClick={()=>{navigate('/spain-saffron')}} >
            <div className='story_container2_div11'>
                <img src={lightblue} alt="" />
                <div className='story_container2_div11_1'> 
                <h3>SPAIN SAFFRON</h3>
                </div>
                </div>
                <h6>Cultivated  in the historic region of La Mancha, Spanish saffron...</h6>
                <p>Learn More  <GrNext className='gnxt'/></p>
            </div>

        </div>

    </div>
  )
}

export default Stories