import React from 'react'
import '../styles/MenuSlider.css'
import { useUserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'
function MenuSlider() {
  const navigate = useNavigate()
  const { goldenElixir,setGoldenElixir,setSideBar,menuSlider,setMenuSlider }=useUserContext()
  function handleNavigate(val){
    navigate(`${val}`)
    setMenuSlider(false)
    setSideBar(false)
    
  }
  return (
    <div className={`ms_main ${menuSlider? "true":"false"}`}>
       {goldenElixir == 'culinary' &&
       (<div className={`ms_div ${goldenElixir}`}>
         <h1>CULINARY USES</h1>
         <button onClick={()=>handleNavigate('/culinary-use')}>DISCOVER</button>
       </div>)
        }
         {goldenElixir == 'medicine' &&
       ( <div className={`ms_div ${goldenElixir}`}>
       <h1>MEDICINAL USES</h1>
        <button onClick={()=>handleNavigate('/medicine-use')} >DISCOVER</button>
        </div> )
        }
         {goldenElixir == 'beauty' &&
       (<div className={`ms_div ${goldenElixir}`}>
         <h1>BEAUTY USES</h1>
        <button onClick={()=>handleNavigate('/beauty-use')} >DISCOVER</button>
        </div> )
        }
         {goldenElixir == 'pregnancy' &&
       (<div className={`ms_div ${goldenElixir}`}>
        <h1>PREGNANCY USES</h1>
        <button onClick={()=>handleNavigate('/pregnancy-use')} >DISCOVER</button>
        </div> )
        }
        
    </div>
  )
}

export default MenuSlider