/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../Slider/Slider";
import MealsCategory from "../MealsCategory/MealsCategory";
import Testimonial from "../Testimonial/Testimonial";
import MemberShipCard from "../MemberShipCard/MemberShipCard";
import FoodCard from "../FoodCard/FoodCard";
import OurMenu from "../OurMenu/OurMenu";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <MealsCategory></MealsCategory>
      <OurServices></OurServices>
      <MemberShipCard></MemberShipCard>
      <OurMenu></OurMenu>

      <FoodCard></FoodCard>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
