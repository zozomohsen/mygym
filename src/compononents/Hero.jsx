import React from 'react'
import Header from '../Header/Header'
import './Hero.css';
import Heart from "../../src/assets/heart.png";
import hero_image from "../../src/assets/hero_image.png";
import hero_image_back from "../../src/assets/hero_image_back.png";
import Calories from "../../src/assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
const Hero = () => {
    const transition ={type:'spring', duration : 3}
    const mobile = window.innerWidth<=768 ?
    true: false;
  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
        <Header/>
        {/*the best */}
        <div className="the-best-ad">
            <motion.div
            initial={{left:mobile? "168px":'238px'}}
            whileInView={{left:'8px'}}
            transition={{...transition,type: 'tween'}}
            ></motion.div>
            <span>the best fitness club in the town</span>
        </div>
                {/*hero header*/}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>shape</span>
            <span> your</span>
            </div>
            <div><span>ideal body</span></div>
            <div >
             <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam pariatur veniam adipisci 
             </span>
             </div>   
            </div>  
             {/*figures*/}  
             <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                </span>
                <span>expert coachs</span>
                </div>
                <div><span>
                <NumberCounter end={978} start={800} delay='4' preFix="+"/>
                </span>
                <span>members joined</span>
                </div>
                <div><span>
                <NumberCounter end={50} start={0} delay='4' preFix="+"/>
                </span>
                <span>fitness programs</span>
                </div>
             </div>
                {/*hero buttons*/}  
                <div className="hero-buttons">
                    <button className='btn'>Get started</button>
                    <button className='btn'>learn more</button>

                </div>
        </div>
        <div className="right-h">
            <button className='btn'>join now</button>


            <motion.div 
                        initial={{right:'-1rem'}}
                        whileInView={{right:'4rem'}}
                        transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>heart rate</span>
                <span>116 bpm</span>
            </motion.div>
               {/*hero imges*/}  
               <img src={hero_image} alt="" className='hero-image'/>
               <motion.img
               initial={{right:'11rem'}}
               whileInView={{right:'20rem'}}
               transition={transition}
               
               src={hero_image_back} alt="" className='hero-image-back' />
             {/*calories*/}  
             <motion.div 
                         initial={{right:'37rem'}}
                         whileInView={{right:'28rem'}}
                         transition={transition}
             className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
             </motion.div>
        </div>
    </div>
  )
}

export default Hero
