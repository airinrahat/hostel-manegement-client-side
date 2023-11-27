/* eslint-disable no-unused-vars */
import React from "react";
import LazyLoad from "react-lazy-load";

const FoodCard = () => {
  return (
    <div>
      <div className="py-5 mt-5">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-5xl font-bold uppercase  py-4">Popular Item</h3>
          </div>
          <div className="flex  justify-center items-center">
            <div className=" m-auto food-img">
              <LazyLoad>
                <img src="https://i.ibb.co/ns4xfsr/sin-recpie-img.jpg" alt="" />
              </LazyLoad>
            </div>
            <div className=" w-2/4 ">
              <h2 className="text-2xl font-bold">
                TODAY RECIPES We Invite You To The Restaurant. Delicious Taste
                of Chicken Kebabs with Roasted Red Onions.
              </h2>
              <p className="py-3">
                Standardized Recipes - Customized house recipes that include
                ingredients, precise quantities, detailed steps, portion sizes,
                and recipe yield. Some may include food cost information and
                required tools. Standardized recipes are often for large
                quantities of prepared food. Standardized recipes are important
                to foodservice operations because they provide consistency and
                uniformity in quality, yield, and food cost. Standardized
                recipes include information on quantity, yield, portion size,
                ingredients, portion cost, and menu price.
              </p>
              <button className="btn bg-[#ef8829]">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
