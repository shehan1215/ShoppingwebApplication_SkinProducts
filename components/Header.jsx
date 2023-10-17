import React, { useState } from 'react'
import css from './Header.module.css'
import Logo from '../assets/shen1.JPG'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'

function Header() {
    const [ShowMenu, setShowMenu] = useState(true)
    const toggleMenu = ()=>{
        setShowMenu((ShowMenu)=>!ShowMenu)
    }

  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt=""/>
            <span>ShenX</span>
        </div>
        <div className={css.right}>

            <div className={css.bars} onClick={toggleMenu}>
                <GoThreeBars/>
            </div>
                <ul className={css.menu} style={{display: ShowMenu? 'inherit': 'none'}}>
                    <li><a href="#Home">Collections</a></li>
                    <li><a href="#Product">Brands</a></li>
                    <li><a href="#Testimonials">Review</a></li>
                    <li><a href="#Shop">Sales</a></li>
                    <li>ENG</li>
                </ul>
            <input type="text" className={css.search} placeholder='Search' />
            <a href="#Product"><CgShoppingBag className={css.cart}/></a>
        </div>
    </div>
  )
}

export default Header



