import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper";
import devtakhum from "../../Source/Image/devtakhum.jpg";
import lama from "../../Source/Image/lama.jpg";
import nikli from "../../Source/Image/nikli.jpg";
import sajek from "../../Source/Image/sajek.jpg";
import jalalpur from "../../Source/Image/jalalpur.jpg";
import sreemangal from "../../Source/Image/sreemangal.jpg";
import tanguar from "../../Source/Image/tanguar.jpg";
import "./UpcomingEvent.css";

const UpcomingEvent = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "100px" }}>
      <h1 className="heading">Upcoming Events </h1>
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={"coverflow"}
          spaceBetween={20}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          className="swiper-container"
        >
          <SwiperSlide>
            <img className="w-100" src={devtakhum} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src={lama} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src={jalalpur} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src={tanguar} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src={sreemangal} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src={sajek} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-100" src={nikli} alt="" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <BsArrowLeft
                style={{ color: "#6a59ff" }}
                className="arrow-back-outline icon"
              />
            </div>
            <div className="swiper-button-next slider-arrow">
              <BsArrowRight
                style={{ color: "#6a59ff" }}
                className="arrow-forward-outline icon"
              />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEvent;
