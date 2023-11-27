/* eslint-disable no-unused-vars */
import React from "react";

const OurServices = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <div>
        <h2 className="text-center font-bold text-5xl mb-4">Our Services</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div>
          <img
            src="https://i.ibb.co/xjFQ6RC/heal.jpg"
            className="inline"
            alt=""
          />
          <h2 className="text-2xl font-bold mb-2">Healthy Food</h2>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.Create your
            pages and your site using the display in the front view, so you can
            see real-time changes.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/K7c74rs/paym.jpg"
            className="inline"
            alt=""
          />
          <h2 className="text-2xl font-bold mb-2">
            Online Payment and Ordering{" "}
          </h2>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.Create your
            pages and your site using the display in the front view, so you can
            see real-time changes.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/0tHwyBB/many.jpg"
            className="inline"
            alt=""
          />
          <h2 className="text-2xl font-bold mb-2">Many Items</h2>
          <p>
            Phasellus enim libero, blandit vel sapien vitae, condimentum
            ultricies magna et. Quisque euismod orci ut et lobortis.Create your
            pages and your site using the display in the front view, so you can
            see real-time changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
