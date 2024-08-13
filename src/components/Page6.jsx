import React from 'react'
import foodback from '../images/foodback.jpg'
import page6bac from '../images/page6bac.jpeg'
import '../styles/Page6.css'
import { motion } from "framer-motion";

function Page6() {

    const cardVariants1 = {
        offscreen: {
            x: 0,
            opacity:0.5,


        },
        onscreen: {
            x: 0,
            rotate: 0,
            opacity:1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2
            }
        }
    };
    const cardVariants2 = {
        offscreen: {
            x: '100px',


        },
        onscreen: {
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };
    const cardVariants3 = {
        offscreen: {
            x: '-100px',
            opacity:0.5,


        },
        onscreen: {
            x: 0,
            rotate: 0,
            opacity:1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };
  return (
    <div className='page6_main'> 
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.4 }}
             className='page6_container1'
             variants={cardVariants1}>
            <img src={foodback} alt="" />

        </motion.div>
        <div  className='page6_container2'>
            <motion.div className='page6_container21'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.9 }}
            variants={cardVariants2}
            >
            Unveiling the Magic of Saffron
            </motion.div>
            <motion.div  className='page6_container22'
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ amount: 0.5 }}
             variants={cardVariants3}
            >
            Savor the rich flavors of saffron-infused dishes, where every bite is a golden delight.
            </motion.div>
            <div  className='page6_container23'>
                <button>EXPLORE MORE</button>
            </div>
            

        </div>

    </div>
  )
}

export default Page6