/* eslint-disable no-unused-vars */
import React from "react";

const PopularMenu = () => {
  return (
    //         https://i.ibb.co/J2TfvTx/banner3.jpg
    // https://i.ibb.co/R7cvDPK/dessert-bg.jpg
    // https://i.ibb.co/Wccm89v/pizza-bg.jpg
    // https://i.ibb.co/C90vBPF/salad-bg.jpg
    // https://i.ibb.co/mSdpnd5/soup-bg.jpg
    <div className=" mx-auto max-w-screen-xl">
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 mb-2">--- most popular meals ---</p>
        <h3 className="text-3xl uppercase border-y-2 py-4">Popular meals </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-5">
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/R7cvDPK/dessert-bg.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Pizza</h3>
            <p>
              {" "}
              We use only the best ingredients to make one-of-a-kind pizzas for
              our customers.
            </p>
          </div>
          <p className="text-yellow-500 font-bold">$550</p>
        </div>
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/Wccm89v/pizza-bg.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Pesto Pizza</h3>
            <p>
              {" "}
              We use only the best ingredients to make one-of-a-kind pizzas for
              our customers..
            </p>
          </div>
          <p className="text-yellow-500 font-bold">$250</p>
        </div>
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/C90vBPF/salad-bg.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Salad</h3>
            <p>
              Taste some of the best meez meals salads!and the best popular
              salad in my hostel.
            </p>
          </div>
          <p className="text-yellow-500 font-bold">$380</p>
        </div>
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/mSdpnd5/soup-bg.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Soup</h3>
            <p>
              {" "}
              Experience the taste of a perfect pizza at PizzaHouse, one of the
              best restaurants!
            </p>
          </div>
          <p className="text-yellow-500 font-bold">$150</p>
        </div>
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/zS9t2ZW/product-01-free-img-1.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Coffee</h3>
            <p>
              white Chocolate Mocha Coffee.this coffe is best coffe in our
              hostel
            </p>
          </div>
          <p className="text-yellow-500 font-bold">$250</p>
        </div>
        <div className="flex space-x-2 ">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/R7cvDPK/dessert-bg.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Pizza</h3>
            <p>If there’s anything better than the perfect baked potato.</p>
          </div>
          <p className="text-yellow-500 font-bold">$40</p>
        </div>
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/KxQwk6q/GCCR11.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Chorizo Rolls</h3>
            <p>You know how bacon is all the rage these days?</p>
          </div>
          <p className="text-yellow-500 font-bold">$250</p>
        </div>
        <div className="flex space-x-2">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            className="w-[100px]"
            src="https://i.ibb.co/fFFBDzK/Grilled-Five-Spice-Chicken1.jpg"
            alt=""
          />
          <div>
            <h3 className=" text-3xl mb-3">Spice Chicken</h3>
            <p>
              It may not be in my best interest to admit this, but here goes
              nothing:
            </p>
          </div>
          <p className="text-yellow-500 font-bold">$250</p>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
