import React from 'react'
import { FiHeart } from "react-icons/fi";
function ProductsChild({title,price,images,grams}) {
  return (
    <div className='productsChild_main'>
       <div className='productsChild_container1'>
       <img src={images} alt="" />
        <h3>{title}</h3>
        <h6>{grams}</h6>
        <p>{price}</p>
       </div>
       <div className='productsChild_container2'>
        <FiHeart/>
       </div>
    </div>
  )
}

export default ProductsChild