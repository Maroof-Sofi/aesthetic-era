import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
  const transition = {type: 'spring', duration : 3}
  const mobile  = window.innerWidth<=768 ? true : false;
  return (
     <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
            <motion.div
            initial={{left: mobile? "178px" : "238px"}}
            whileInView={{left:'8px'}}
            transition={{...transition, type: 'tween'}}
            >
              
            </motion.div>
            <span>The Best Fitness Club in the Town</span>
        </div>
        {/* Hero Section */}
        <div className='hero-text'>
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='6' preFix = '+'/>
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={1600} start={1000} delay='10' preFix = '+'/>

            </span>
            <span>members joined</span>
            </div>
          <div>
            <span>
            <NumberCounter end={50} start={10} delay='6' preFix = '+'/>

            </span>
            <span>fitness Programs</span>
            </div>
        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Started</button> 
          <button className='btn'>Learn More</button> 
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
         transition={transition}
         initial={{right: '-1rem'}}
         whileInView={{right:'4rem'}}
        className='heart-rate'>
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>112 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image'/>
        <motion.img 
        initial={{right: '11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className='hero-image-back'/>
        {/* calories */}
        <motion.div
         transition={transition}
         initial={{right: '37rem'}}
         whileInView={{right:'28rem'}}
         className='calories'>
          <img src={Calories} alt = "" />
         <div>
          <span>Calories Burned</span>
          <span> 220 Kcal</span>
         </div>
        </motion.div>
      </div>
     </div>
    );
};

export default Hero;