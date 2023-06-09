import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import '../components/Slider.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  SwiperCore.use([Autoplay])
  return (
    
    <>
      <Swiper
autoplay={{ delay: 1000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.87}
        loop={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 150,
          modifier: 2,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game1.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game3.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game4.jpeg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game5.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game6.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game7.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game8.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game9.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gameBox">
          <img src="images/game10.jpg" alt="" />
          </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
