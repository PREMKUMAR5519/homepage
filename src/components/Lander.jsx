import React, { useState } from 'react'
import backvideo from '../images/backvideo.mp4'
import "../styles/Lander.css"
import saffrom_img from "../images/saffron_img.png"
function Lander() {
  const[enterPwd,setEnterPwd]=useState(true)
  const[existingUser,setExistingUser]=useState(false)
  const [email,SetEmail]=useState("")
  const [oldPassword,setOldPassword]=useState("") 
  const [newPassword,setNewPassword]=useState("")


  function handleContinue(){
    setEnterPwd(false)
  }
  function handleEmailChange(e){
    SetEmail(e.target.value)
  }
  function handleOldPasswordChange(e){
    setOldPassword(e.target.value)

  }
  function handleNewPasswordChange(e){
    setNewPassword(e.target.value)

  }
  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={backvideo} type="video/mp4" />

        </video>
        <div className='Landermain'>
         <div className='lander_div'>
          <div className='lander_div1' >
            <div className='lander_div11'>
                <p>            zprincesssaffron
                </p>
                <h5> High quality saffron, best flavour and aroma for our products <br/>100% natural products to reach out customers.</h5>
            </div>
            <div className='lander_div12'>
              <img src={saffrom_img} alt="" />
            </div>

          </div>
         
          {enterPwd?(<div className='lander_div2'>
            <div className='lander_login'>LOGIN OR CREATE ACCOUNT</div>
            <div className='lander_input'>
              <label htmlFor="">Enter Email</label>
              <input value={email} onChange={handleEmailChange} type="email" />
            </div>
            <div>
              <button onClick={handleContinue} className='lander_btn'>Continue</button>
            </div>
            <div className='lander_desc'>
                            <p className='lander_btn_txt'>Get access to your Orders, Wishlist and Recommendations</p>

            </div>

          </div>):( <div className='lander_div2'>
           {existingUser?(<>
            <div className='lander_login'>WELCOME BACK</div>
            <div className='lander_input'>
              <label htmlFor="">Enter Password</label>
              <input value={oldPassword} onChange={handleOldPasswordChange} type="Password" />
            </div>
            <div>
              <button onClick={handleContinue} className='lander_btn'>Login</button>
            </div>
            <div className='lander_desc'>
                            <p className='lander_btn_txt'>Get access to your Orders, Wishlist and Recommendations</p>

            </div></>):(<>
              <div className='lander_login'>CREATE ACCOUNT</div>
            <div className='lander_input'>
              <label htmlFor="">Create Password</label>
              <input  value={newPassword} onChange={handleNewPasswordChange} type="password" />
            </div>
            <div>
              <button onClick={handleContinue} className='lander_btn'>SignUp</button>
            </div>
            <div className='lander_desc'>
                            <p className='lander_btn_txt'>Get access to your Orders, Wishlist and Recommendations</p>

            </div></>)}

          </div>)}


         </div>
        </div>
      </div>

    </div>
  )
}

export default Lander