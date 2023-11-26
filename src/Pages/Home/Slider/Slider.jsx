/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { FaArrowRightLong } from "react-icons/fa6";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0 md:text-center text-center"
      >
        <SwiperSlide>
          <div className="banner-con banner-bg-1 flex justify-center items-center text-white ">
            <div className="banner-box lg:w-2/4 w-3/4">
              <h1 className="lg:text-7xl text-5xl color-red font-semibold font-serif uppercase">
                Pesto PIZZA
              </h1>

              <p className="my-4 text-lg uppercase ">
                We use only the best ingredients to make one-of-a-kind pizzas
                for our customers.
              </p>
              <div className="text-center mt-8 ">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input bg-transparent border-slate-500   rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
                />
                <button className="bg-[#ef8829] rounded-r-lg text-white p-3 px-6">
                  Search
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-2 flex justify-center items-center text-white ">
            <div className="banner-box lg:w-2/4 w-3/4">
              <h1 className="lg:text-7xl text-5xl color-red font-semibold font-serif uppercase">
                PERFECT PIZZA
              </h1>

              <p className="my-4 text-lg uppercase ">
                Experience the taste of a perfect pizza at PizzaHouse, one of
                the best restaurants!
              </p>
              <div className="text-center mt-8 ">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input bg-transparent border-slate-500   rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
                />
                <button className="bg-[#ef8829] rounded-r-lg text-white p-3 px-6">
                  Search
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-3 flex justify-center items-center text-white ">
            <div className="banner-box lg:w-2/4 w-3/4">
              <h1 className="lg:text-7xl text-5xl color-red font-semibold font-serif uppercase">
                vegetables
              </h1>

              <p className="my-4 text-lg uppercase ">
                Experience the taste of a perfect pizza at PizzaHouse, one of
                the best restaurants!
              </p>
              <div className="text-center mt-8 ">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input bg-transparent border-slate-500   rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
                />
                <button className="bg-[#ef8829] rounded-r-lg text-white p-3 px-6">
                  Search
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-4 flex justify-center items-center text-white ">
            <div className="banner-box lg:w-2/4 w-3/4">
              <h1 className="lg:text-7xl text-5xl color-red font-semibold font-serif uppercase">
                Best salad
              </h1>

              <p className="my-4 text-lg uppercase ">
                Taste some of the best meez meals salads!and the best pizza or
                mixed vegetables on of the best restaurants!
              </p>
              <div className="text-center mt-8 ">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="input bg-transparent border-slate-500   rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
                />
                <button className="bg-[#ef8829] rounded-r-lg text-white p-3 px-6">
                  Search
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
