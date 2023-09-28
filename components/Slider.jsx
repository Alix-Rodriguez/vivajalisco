import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";



export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex relative flex-col justify-center items-center leading-none h-screen bg-no-repeat bg-cover lg:bg-center bg-[right_-10rem_top_0rem] "
            style={{
              backgroundImage: "url('img/1.jpg')",
            }}
          >
            <div className=" absolute h-screen w-full mySwipersli "></div>
            <h1 className="uppercase z-10 text-[6.5rem] lg:text-[12rem] font-[Anton-Regular]">
              welcome
            </h1>
            <h2 className="uppercase z-10 text-[1.8rem] tracking-[0.5rem] lg:text-[2rem] font-[Anton-Regular]  lg:tracking-[1.6rem]">
              to viva jalisco
            </h2>
            <p className="px-[4rem] z-10 lg:px-0 text-[1rem] mt-4 lg:text-[1.3rem]">
              Our Kitchen is the expression of our Mexican <br /> culture
              through good food.
            </p>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="flex flex-col justify-center items-center h-screen bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: "url('img/2.jpg')",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="flex flex-col justify-center items-center h-screen bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: "url('img/3.jpg')",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="flex flex-col justify-center items-center h-screen bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: "url('img/4.jpg')",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
