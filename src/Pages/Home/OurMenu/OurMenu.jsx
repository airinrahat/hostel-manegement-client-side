/* eslint-disable no-unused-vars */
import React from "react";
import "./OurMenu.css";

const OurMenu = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-10">
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl font-bold uppercase  py-4">Popular Menu</h3>
      </div>
      <div className="grid grid-cols-4 gap-2 my-10">
        <div className="card menuCard ">
          <div className="imgbox">
            <img src="https://i.ibb.co/Wccm89v/pizza-bg.jpg" />
          </div>

          <div className="text-center">
            <h2 className="-mt-2 font-bold  text-2xl text-center">Pizza</h2>
          </div>
        </div>
        <div className="card menuCard ">
          <div className="imgbox">
            <img src="https://i.ibb.co/KxQwk6q/GCCR11.jpg" />
          </div>

          <div className="text-center">
            <h2 className="-mt-2 font-bold  text-2xl text-center">
              Chorizo Rolls
            </h2>
          </div>
        </div>
        <div className="card menuCard ">
          <div className="imgbox">
            <img src="https://i.ibb.co/mSdpnd5/soup-bg.jpg" />
          </div>

          <div className="text-center">
            <h2 className="-mt-2 font-bold  text-2xl text-center">Soup</h2>
          </div>
        </div>
        <div className="card menuCard ">
          <div className="imgbox">
            <img src="https://i.ibb.co/C90vBPF/salad-bg.jpg" />
          </div>

          <div className="text-center">
            <h2 className="-mt-2 font-bold  text-2xl text-center">salad</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
