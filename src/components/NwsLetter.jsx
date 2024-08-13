import React from 'react'
import banner from '../images/banner.jpg'
import nwsletter_back from '../images/nwsletter_back.jpeg'
function NwsLetter() {
  return (
    <div className='nwsletter_main'>
               <div className='nwsletter_container'>
             <div className='sub_txt'>SUBSCRIBE TO OUR NEWSLETTER</div>
        <div className='newsletter_container'>
            <input type="text" placeholder='Email Address' /><button>SUBSCRIBE</button>
        </div>
        </div>
    </div>
  )
}

export default NwsLetter