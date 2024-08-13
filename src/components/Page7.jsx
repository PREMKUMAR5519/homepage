import React from 'react'
import '../styles/Page7.css'
import hh from '../images/hh.mp4'
import cosmetic from '../images/cosmeticc.jpg'
import food1 from '../images/food1.jpg'
import milk from '../images/Milk.jpg'
import medicine from '../images/medicine.jpg'
import { delay, motion } from "framer-motion";

function Page7() {
    const cardVariants1 = {
        offscreen: {
            x: 0,
            y: '100px',
            opacity:0,


        },
        onscreen: {
            x: 0,
            rotate: 0,
            opacity:1,
            y:0,
            transition: {
                type: "spring",
                duration: 1,
                delay: 0.1
            }
        }
    };
    const cardVariants2 = {
        offscreen: {
            x: 0,
            y: '100px',
            opacity:0,


        },
        onscreen: {
            x: 0,
            rotate: 0,
            opacity:1,
            y:0,
            transition: {
                type: "spring",
                duration: 1,
                delay: 0.4

            }
        }
    };
    return (
        <div className='page7_main'>
            <div className='page7_container1'>
                <div className='Page7_div1'>
                <div className='video_con'>
                <video autoPlay loop muted>
                        <source src={hh} type="video/mp4" />

                    </video>
                </div>

                </div>
                
            </div>
            <div className='page7div3'>
                    <div className='page7div31' style={{overflow:"hidden"}}>
                    <motion.div className='page7div3_1'
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ amount: 0.2, once:true }}
                     variants={cardVariants1}
                    
                    >
                        <img src={food1} alt="" />
                        <div className='page7div3_11'>
                            <div>
                                Culinary Uses
                            </div>
                            <p>Flavoring and Coloring | Baking and Desserts | Beverages</p>
                        </div>
                        
                    </motion.div>
                    <motion.div className='page7div3_1'
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ amount: 0.3,once:true }}
                     variants={cardVariants2}
                   
                      >
                        <img src={cosmetic} alt="" />
                        <div className='page7div3_11'>
                            <div>
                                Cosmetic Uses
                            </div>
                            <p>Face Masks | Creams and Lotions | Toner | Soap</p>
                        </div>
                        
                    </motion.div>
                    </div>
                    <div className='page7div311' style={{overflow:"hidden"}}>
                    <motion.div className='page7div3_1'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.3,once:true }}
                    variants={cardVariants1}>
                        <img src={milk} alt="" />
                        <div className='page7div3_11'>
                            <div>
                            Pregnancy Uses

                            </div>
                            <p>Digestive Aid | Blood Pressure Regulation | Skin Health</p>
                        </div>
                        
                    </motion.div>
                    <motion.div className='page7div3_1'
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ amount: 0.3,once:true }}
                     variants={cardVariants2}
                     >
                        <img src={medicine} alt="" />
                        <div className='page7div3_11'>
                            <div>
                            Medicinal Uses
                            </div>
                            <p>Antioxidant Properties | Anti-inflammatory | Memory Improvement | PMS Relief</p>
                        </div>

                    </motion.div>
                    </div>
                    

                </div>


        </div>
    )
}

export default Page7

