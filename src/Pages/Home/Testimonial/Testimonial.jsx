/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@mui/material";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-5xl uppercase font-bold py-4">Testimonials</h3>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-1/2"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center  mx-24 ">
              <FaQuoteLeft className="text-6xl my-2" />
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-5 text-center ">{review.details}</p>
              <h3 className="text-2xl mb-3 text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
