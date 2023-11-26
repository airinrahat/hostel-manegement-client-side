/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../Slider/Slider";
import MealsCategory from "../MealsCategory/MealsCategory";
import Testimonial from "../Testimonial/Testimonial";
import MemberShipCard from "../MemberShipCard/MemberShipCard";
import FoodCard from "../FoodCard/FoodCard";
import OurMenu from "../OurMenu/OurMenu";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <MealsCategory></MealsCategory>
      <MemberShipCard></MemberShipCard>
      <OurMenu></OurMenu>

      <FoodCard></FoodCard>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
