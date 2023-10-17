import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';

//import swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {SliderProducts} from '../../data/products'
import './Slider.css'

function Slider() {
  return (
    <div className="s-container">
        <a className='shop' id='Shop'></a>
        <Swiper 
        breakpoints={{
            640:{
                slidesPerView:3
            },
            0:{
                slidesPerView:1
            }
        }}
        modules={[Pagination, Navigation]} 
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank ={true}
        slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
            {SliderProducts.map((slide, i) =>(
                <SwiperSlide>
                    <div className="left-s">
                        <div className="name">
                            <span>{slide.name}</span>
                            <span>{slide.detail}</span>
                        </div>
                        <span>{slide.price}$</span>
                        <div>Shop now</div>
                    </div>
                    <img src={slide.img} alt="product" className="img-p" />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider