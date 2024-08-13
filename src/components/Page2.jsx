import React from 'react'
import "../styles/Page2.css"
import indian from '../images/indian.jpg'
import iran from '../images/iran.jpg'
import { motion, useInView } from 'framer-motion';



function Page2() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true,amount:0.7 });
    const isInViewtext1 = useInView(ref, { once: false,amount:0.7 });

  
   
      
        const VariantsText1 = {
          hidden: { x: '-100px', opacity: '0'
           },
          visible: {
            y: 0,
            x:0,
            opacity: '100%',
            transition: {
                type: 'inertia',
                velocity: 120,   
                bounceStiffness: 500, 
                bounceDamping: 50,
              }      }
        };
        const VariantsText2 = {
            hidden: { x: '100px', opacity: '0'
             },
            visible: {
              y: 0,
              x:0,
              opacity: '100%',
              transition: {
                  type: 'inertia',
                  velocity: 120,   
                  bounceStiffness: 500, 
                  bounceDamping: 50,
                }      }
          };
    

    return (
        <div className='Page2_main'>
            <motion.div className='page2_div1'
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={VariantsText1}
              style={{overflow:'hidden'}}>
                <img className='indian_img' src={indian} alt="" />
                <p className='card_title'>INDIAN KASHMIR SAFFRON</p>
                <p className='card_gram'>7.05 GRAM</p>
                <div className='page2_div11'>
                    <p className='og_price'>
                        ₹3625

                    </p>
                    <p className='offer_price'>
                        ₹2538

                    </p>
                </div>
                <div className='card_button'>
                    <p>LOGIN TO BUY</p>
                </div>
                </motion.div >

                <motion.div className='page2_div1'

                 ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={VariantsText2}
              style={{overflow:'hidden'}}>
                <img className='indian_img' src={indian} alt="" />
                <p className='card_title'>
                    PREMIUM SPAIN SAFFRON</p>
                <p className='card_gram'>5 GRAMS</p>
                <div className='page2_div11'>
                   
                    <p className='offer_price'>
                        ₹
                        2875

                    </p>
                </div>
                <div className='card_button'>
                    <p>LOGIN TO BUY</p>
                </div>
                </motion.div >

          

        </div>
    )
}

export default Page2