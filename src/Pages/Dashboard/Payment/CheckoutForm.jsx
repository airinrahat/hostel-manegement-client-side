/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckoutForm = () => {
  const checkCard = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-3 text-center">
        <h2 className="text-3xl py-10">
          <u>
            <b>Payment Now {checkCard.length} </b>
          </u>
        </h2>

        <div className="card grid grid-cols-2 lg:card-side bg-base-100 text-start shadow-xl">
          <figure>
            <img src="https://i.ibb.co/MNpPN6d/payment.jpg" alt="Album" />
          </figure>
          <div className="px-5 mt-5">
            <h3>Sub Total : 250</h3>
            <h3>Estimated : $150</h3>
            <div className="divider m-0"></div>
            <h2>Total : $280</h2>
            {/* <Elements stripe={stripePromise}>
            <Checkout
              price={totalPrice}
              selectClasses={selectClasses}
            ></Checkout>
          </Elements> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
