import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {motion} from 'framer-motion'

export default function Hero() {
<a className='home' id='Home'></a>
const transition = {duration:3, type: "spring"}
  return (
    <div className={css.container}>

        {/* Left Sie */}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span>Our Collection</span>
                <span>Seedily say has suitable disposal and boy. Exercise joy man chldren rejoiced.</span>
            </div>
        </div>

        {/* Middle side hero image section */}
        <div className={css.wrapper}>

            <motion.div
            initial={{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
            className={css.blueCircle}
            transition={transition}></motion.div>

            <motion.img
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
            src={HeroImg} alt="" width={600}/>

        </div>

        {/* Right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>Offers</span>
                <span>*conditions apply</span>
            </div>

            <div className={css.customers}>
                <span>FREE</span>
                <span>Services provide.</span>
            </div>
        </div>
    </div>
  )
}
