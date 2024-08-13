import React, { useEffect } from 'react'
import '../styles/Purchase.css'
import Navbar from './Navbar'
import { useUserContext } from './UserContext';
import { IoGridOutline } from "react-icons/io5";
import { FaSquareFull } from "react-icons/fa";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import Products from './Products';
import purchase1 from '../images/purchase1.jpg'
import purchase2 from '../images/purchase2.jpg'
import purchase3 from '../images/purchase3.png'
import Footer from './Footer';


function Purchase() {
  const { setShowNav }=useUserContext()
  useEffect(() => {
   setShowNav(true)
  }, []);
  return (
    <div className='purchase_main'>
      <Navbar/>
      <div className='purchase_all'>
        All Products

      </div>
      <div  className='purcase_div'>
        <div>HOME  &gt; </div> <div>ALL PRODUCTS</div>

      </div>
      <div className='purchase_banner'>
        <img src={purchase3} alt="" />
      </div>
      <div className='purchasediv1'>
        <h2>Saffrons</h2>
      </div>
      <div className='purchasediv2'>
        <div className='purchasediv2_1'>
          <button>FILTER</button>

        </div>
        <div className='purchasediv2_2'>
          VIew:        <h1><IoGridOutline  /></h1> <h1><FaSquareFull/></h1> <h1><TfiLayoutGrid4/></h1>

        </div>


      </div>
      <div className='productList'>
        <Products/>
      </div>
      <Footer/>

    </div> 
  )
}

export default Purchase