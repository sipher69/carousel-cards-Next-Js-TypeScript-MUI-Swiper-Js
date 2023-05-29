import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from "swiper";
 
import CardComponent from '../components/CardComponet'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import data from '../assets/data/data';
const Carousle = () => {
     
 
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={4}
    simulateTouch ={true}
    grabCursor={true}
 
      breakpoints = {{
        10: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        }
      }}

      navigation={true}
      modules={[Navigation]}
      
    
  >
    {data?.map((item) => (
    <SwiperSlide  key={item.id} >
         <CardComponent key={item.id} image={item.image} title={item.title} category={item.category} flag={item.flag} views={item.views} itemsCart={item.itemsCart} price={item.price} currency={item.currency}/>  
    </SwiperSlide>
    ))}
  
  </Swiper>

  )
}

export default Carousle