import React from 'react'
import '../styles/Products.css'
import ProductsChild from './ProductsChild'
import product1 from '../images/product1.jpeg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.jpg'


function Products() {
  return (
    <div className='products_main'>
        <ProductsChild title="INDIAN KASHMIR SAFFRON" price="Rs.1756" grams='2 grams' images={product1}/>
        <ProductsChild  title="PREMIUM SPAIN SAFFRON" price="Rs.1756" grams='5 grams' images={product2}/>
        <ProductsChild  title="INDIAN KASHMIR SAFFRON" price="Rs.1756" grams='5 grams'images={product3}/>
        <ProductsChild  title="PREMIUM SPAIN SAFFRON" price="Rs.1756" grams='2 grams'images={product4}/>

    </div>
  )
}

export default Products