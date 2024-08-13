import React from 'react'
import '../styles/Unveil.css'
import unveilback from'../images/unveilback.jpeg'
function Unveil() {
  return (
    <div className='unveil_main' style={{backgroundImage:`url(${unveilback})`}}>
      <div className='unveil_div1'>
        <h1>Unveiling the Magic</h1>
        <button>DISCOVER NOW</button>

      </div>
       </div>
  )
}

export default Unveil