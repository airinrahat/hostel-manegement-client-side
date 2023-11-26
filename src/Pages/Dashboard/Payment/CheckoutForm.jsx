/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CheckoutForm = () => {
  // const checkCard = useLoaderData();

  const [checkout, setCheckout] = useState({});
  const { id } = useParams();

  const url = `http://localhost:5000/pricing/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCheckout(data));
  }, [url]);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-3 text-center">
        <h2 className="text-3xl py-10">
          <u>
            <b>Payment Now </b>
          </u>
        </h2>

        <div className="card grid grid-cols-2 lg:card-side bg-base-100 text-start shadow-xl">
          <figure>
            <img src="https://i.ibb.co/MNpPN6d/payment.jpg" alt="Album" />
          </figure>
          <div className="px-5 mt-5">
            <h3>Sub Total : 250</h3>
            <h3>Sub Total : {checkout?.level}</h3>
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
