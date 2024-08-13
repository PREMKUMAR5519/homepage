import React, { useState } from 'react'
import '../styles/SideBar.css'
import { IoCloseSharp } from "react-icons/io5";
import { useUserContext } from './UserContext';
import { useSpring, animated } from 'react-spring';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaL } from 'react-icons/fa6';

function SideBar() {
  const navigate = useNavigate()
    const { setGoldenElixir,menuSlider,setMenuSlider,menuItems,setMenuItems,menuSubItems,setMenuSubItems,sideBar,setSideBar }=useUserContext()
    const [showMenuSub,setShowMenuSub]=useState()

    const itemAnimation1 = useSpring({
        opacity: menuItems ? 1 : 0,
        transform: menuItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 900,
      });
      const itemAnimation2 = useSpring({
        opacity: menuItems ? 1 : 0,
        transform: menuItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 800,
      });
      const itemAnimation3 = useSpring({
        opacity: menuItems ? 1 : 0,
        transform: menuItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 700,
      });
      const itemAnimation4 = useSpring({
        opacity: menuItems ? 1 : 0,
        transform: menuItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 600,
      });
      const itemAnimation5 = useSpring({
        opacity: menuItems ? 1 : 0,
        transform: menuItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 500,
      });
      const itemAnimation6 = useSpring({
        opacity: menuItems ? 1 : 0,
        transform: menuItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 400,
      });

      
      const itemAnimation7 = useSpring({
        opacity: menuSubItems ? 1 : 0,
        transform: menuSubItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 600,
      });
      const itemAnimation8 = useSpring({
        opacity: menuSubItems ? 1 : 0,
        transform: menuSubItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 500,
      });
      const itemAnimation9 = useSpring({
        opacity: menuSubItems ? 1 : 0,
        transform: menuSubItems ? 'translateX(0)' : 'translateX(-100%)',
        delay: 300,
      });
      
      function handleBack(){
        setMenuItems(true)
        function delay(){
            
        setMenuSubItems(false)
        }
        setTimeout(delay,100)
      
        
      }
      function handleBackProduct(){
        setMenuItems(false)
        setMenuSubItems(true)
        setShowMenuSub('')

        function delay(){
            
        setMenuSubItems(true)
        setShowMenuSub('products')
        }
        setTimeout(delay,300)
      }
      function handleClose(){
        setSideBar(false)
        setMenuItems(false)
        setMenuSubItems(false)
        setMenuSlider(false)
      }
      function handleProduct(){
        setMenuItems(false)
        function delay(){
            
        setMenuSubItems(true)
        setShowMenuSub('products')
        }
        setTimeout(delay,1000)
      }
      function handleKnowledgw(){
        setMenuItems(false)
        function delay(){
            
        setMenuSubItems(true)
        setShowMenuSub('knowledgehub')
        }
        setTimeout(delay,1000)
      }
      function handleKasmir(){
        setMenuSubItems()

        function delay(){
            
        setMenuSubItems(true)
        setShowMenuSub('kashmirproducts')
        }
        setTimeout(delay,1000)
      }
      function handleSpain(){
        setMenuSubItems()

        function delay(){
            
        setMenuSubItems(true)
        setShowMenuSub('spainproducts')
        }
        setTimeout(delay,1000)
      }

      function handleWhyChooseUs(){
        setSideBar(false)
        function delay(){
          navigate('/choose-us')

          }
          setTimeout(delay,300)
      }
      function handleGoldenElixir(){
        setMenuItems(false)

        setMenuSlider(true)
        setMenuSubItems()


        function delay(){
            
        setMenuSubItems(true)
        setShowMenuSub('goldenelixir')
        }
        setTimeout(delay,1000)

      }
     function handleGoldenElixerChange(val){
      setGoldenElixir(val)
     }
     function handleBackGolden(){
      setShowMenuSub(false)
      setMenuSubItems(false)
      setMenuSlider(false)


      function delay(){
        setMenuItems(true)

      }
      setTimeout(delay,100)

     }
  return (
    <div className={`sidebar_main ${sideBar?"true":"false"}`}>
        <div className='sidebar_div1'>
            <IoCloseSharp onClick={handleClose}/>

        </div>
        <div className='sidebar_div2'>
            {menuSubItems?(
                <>
                   {showMenuSub == 'knowledgehub' && (
                    <>
                    <animated.div id="sidebar_kh" className="menu-item" onClick={handleBack} style={itemAnimation7}><IoMdArrowRoundBack className='sidebar_arrow'/>KNOWLEDGE HUB</animated.div>
                   <animated.div className="menu-item" onClick={()=>navigate('/insight')} style={itemAnimation8}>INSIGHT </animated.div>
        <animated.div className="menu-item" onClick={()=>navigate('/kashmiri-saffron')}  style={itemAnimation8}>KASHMIRI SAFFRON</animated.div>
        <animated.div className="menu-item" style={itemAnimation9}>SPAIN SAFFRON</animated.div>
                    </>)
                   }
                    {showMenuSub == 'products' && (
                    <>
                    <animated.div id="sidebar_kh" className="menu-item" onClick={handleBack} style={itemAnimation7}><IoMdArrowRoundBack className='sidebar_arrow'/>PRODUCTS</animated.div>
        <animated.div onClick={handleKasmir} className="menu-item" style={itemAnimation8}>KASHMIRI SAFFRON</animated.div>
        <animated.div  onClick={handleSpain}  className="menu-item" style={itemAnimation9}>SPAIN SAFFRON</animated.div>
                    </>)
                   }
                    {showMenuSub == 'kashmirproducts' && (
                    <>
                    <animated.div id="sidebar_kh" className="menu-item" onClick={handleBackProduct} style={itemAnimation7}><IoMdArrowRoundBack className='sidebar_arrow'/>PRODUCTS</animated.div>
        <animated.div  className="menu-item" style={itemAnimation8}>2-GRAMS</animated.div>
        <animated.div className="menu-item" style={itemAnimation9}>5-GRAMS</animated.div>
                    </>)
                   }
                   {showMenuSub == 'spainproducts' && (
                    <>
                    <animated.div id="sidebar_kh" className="menu-item" onClick={handleBackProduct} style={itemAnimation7}><IoMdArrowRoundBack className='sidebar_arrow'/>PRODUCTS</animated.div>
        <animated.div  className="menu-item" style={itemAnimation8}>2-GRAMS</animated.div>
        <animated.div className="menu-item" style={itemAnimation9}>5-GRAMS</animated.div>
                    </>)
                   }
                    {showMenuSub == 'goldenelixir' && (
                    <>
                    <animated.div id="sidebar_kh" className="menu-item" onClick={handleBackGolden} style={itemAnimation7}><IoMdArrowRoundBack className='sidebar_arrow'/>GOLDEN ELIXIR</animated.div>
        <animated.div onClick={()=> handleGoldenElixerChange('culinary')}  className="menu-item" style={itemAnimation8}>CULINARY</animated.div>
        <animated.div onClick={()=> handleGoldenElixerChange('medicine')} className="menu-item" style={itemAnimation9}>MEDICINE</animated.div>
        <animated.div onClick={()=> handleGoldenElixerChange('beauty')}  className="menu-item" style={itemAnimation8}>FACE CARE</animated.div>
        <animated.div onClick={()=> handleGoldenElixerChange('pregnancy')}  className="menu-item" style={itemAnimation8}>PREGNANCY</animated.div>

                    </>)
                   }
    </>
              
             ):(<><animated.div onClick={handleKnowledgw} className="menu-item" style={itemAnimation1}>KNOWLEDGE HUB</animated.div>
                <animated.div  onClick={handleProduct} className="menu-item" style={itemAnimation2}>PRODUCTS</animated.div>
                <animated.div onClick={handleWhyChooseUs} className="menu-item" style={itemAnimation3}>WHY CHOOSE US</animated.div>
                <animated.div  onClick={handleGoldenElixir} className="menu-item" style={itemAnimation4}>GOLDEN EXILIR</animated.div>
                <animated.div className="menu-item" style={itemAnimation5}>CONTACT US</animated.div>
                <animated.div className="menu-item" style={itemAnimation6}>LOGIN</animated.div></>)}
            
        </div>
       
    </div>
  )
}

export default SideBar