import slider from '../../assets/slider.png'
import security from '../../assets/security.png'
import React, { useEffect,useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css"

import "./carousel.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);


export default function App() {
  let [media,setMedia] = useState(false) 
  useEffect(()=>{
    
  setMedia(window.matchMedia("(max-width: 530px)").matches)
  },[])
  
  return (
    <>
    <div className="about-title">
        <img src={security} alt="" /><span>Specializes In</span>
    </div>
    <Swiper  slidesPerView={1} loop autoplay navigation={true} className="mySwiper">
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider} alt="" /></SwiperSlide>
    </Swiper>
    </>
  )
}