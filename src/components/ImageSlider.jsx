import React, { useRef } from 'react';
import { useSpring, animated, useSpringRef, useScroll } from 'react-spring';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'
import '../styles/ImageSlider.css'

const ImageSlider = () => {
  const ref = useRef();

  const springs = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const { scrollY } = useScroll();

  return (
    <div ref={ref} className='is_main'>
      <animated.div className='is_div1' style={{ ...springs, position: 'absolute', top: '0%', width: '100%', height: '80vh', backgroundImage: `url(${img4})`}}>
        <div className='is_div11'>
            <h1 className='pure'>Pure and Premium Saffron</h1>
            <h2>From our hands to yours, a promise of the finest quality.</h2>
            <button>EXPLORE MORE</button>
        </div>
      </animated.div>

      <animated.div className='is_div2' style={{ ...springs, position: 'absolute', top: '80vh', width: '100%', height: '80vh',  backgroundImage: `url(${img5})` }}>
      <div className='is_div11'>
            <h1>Unlock the Secrets of Saffron</h1>
            <h2>"Harvested with precision, delivered with pride."</h2>
            <button>EXPLORE MORE</button>
        </div>      </animated.div>

      <animated.div  className='is_div3' style={{ ...springs, position: 'absolute', top: '160vh', width: '100%', height: '80vh',  backgroundImage: `url(${img6})` }}>
      <div className='is_div11'>
            <h1 cl>A Legacy of Excellence in Every Thread</h1>
            <h2>Experience the heritage of premium saffron.</h2>
            <button>EXPLORE MORE</button>
        </div>      </animated.div>
    </div>
  );
};

export default ImageSlider;
