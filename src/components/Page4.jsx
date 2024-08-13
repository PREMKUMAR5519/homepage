import React from 'react'
import '../styles/Page4.css'
import borderline from '../images/borderline.png'
import { delay, motion, useInView } from 'framer-motion';

function Page4({ title,subTitle,image,paragraph,clsName }) {
     const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true,amount:0.4 });
    const isInViewtext1 = useInView(ref, { once: true,amount:0.7 });
    const isInViewtext16 = useInView(ref, { once: true,amount:0.7 });



    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 1 }
      }
    };
  
    const imageVariants = {
      hidden: { y: '100%' },
      visible: {
        y: 0,
        transition: {
            type: 'inertia',
            velocity: 120,   
            bounceStiffness: 500, 
            bounceDamping: 50,
          }      }
    };

 
    
      const VariantsText1 = {
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
      const VariantsText2 = {
        hidden: { x: '200px', opacity: '0',y:0
         },
        visible: {
          y: 0,
          x: 0,
          opacity: '100%',
          transition: {
              type: 'inertia',
              velocity: 120,   
              duration:1.5,

            }      }
      };
      const VariantsText16 = {
        hidden: { x: '0', opacity: '5%', y: '150px'
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
    <>
    <div className='page3_main'>
        <div className='page3_div1'>
            <motion.div className='page3_div11' 
             ref={ref}
             initial="hidden"
             animate={isInView ? 'visible' : 'hidden'}
             variants={containerVariants}
             style={{overflow:'hidden'}}>

                <motion.img style={{overflowY:'hidden'}}
                alt="Revealed Image"
                variants={imageVariants}
                src={image} />
                 </motion.div>
            <div className='page3_div12'>
                <motion.div
                ref={ref}
                initial="hidden"
                animate={isInViewtext1 ? 'visible' : 'hidden'}
                variants={VariantsText1}
                style={{overflow:'hidden'}}
                
                >{title}</motion.div>
                <motion.h4
                 ref={ref}
                 initial="hidden"
                 animate={isInViewtext1 ? 'visible' : 'hidden'}
                 variants={VariantsText2}
                 style={{overflow:'hidden'}}

                
                >{subTitle}</motion.h4>
                {paragraph?(<motion.p 
                  ref={ref}
                  initial="hidden"
                  animate={isInViewtext16 ? 'visible' : 'hidden'}
                  variants={VariantsText16}
                  style={{overflow:'hidden'}}
                  >Cultivated  in the historic region of La Mancha, Spanish saffron is synonymous with authenticity and excellence. Often referred to as <br /> <motion.span className='differ'>'the best in the world'</motion.span>  this variety is prized for its distinctive floral notes and striking golden hue. Perfect for iconic dishes like paella and risotto, Spanish saffron enhances food with its unique blend of sweetness and earthiness. In cosmetics, its high content of antioxidants helps protect the skin from damage and aging, making it a favorite in high-end skincare products. La Mancha’s saffron stands out not only for its flavor but also for its meticulous hand-harvesting process, making each strand a testament to Spanish craftsmanship.</motion.p>):(
                  <motion.p
                  ref={ref}
                  initial="hidden"
                  animate={isInViewtext16 ? 'visible' : 'hidden'}
                  variants={VariantsText16}>
                    Nestled in the heart of the enchanting Kashmir Valley, Kashmiri saffron is renowned for its deep crimson threads and unparalleled potency. This <span className='differ1'>'Red Gold' </span> is celebrated for its rich flavor, vibrant color, and remarkable medicinal properties. Its high crocin content not only elevates dishes with its unique aroma but also brightens and rejuvenates the skin, making it a sought-after ingredient in luxurious beauty rituals. Whether in biryanis, desserts, or skincare, Kashmiri saffron epitomizes opulence and wellness.

                </motion.p>)}
                

            </div>
           
        </div>
    </div>
    
    </>
  )
}

export default Page4