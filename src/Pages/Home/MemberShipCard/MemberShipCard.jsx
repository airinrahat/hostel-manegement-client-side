/* eslint-disable no-unused-vars */
import React from "react";
// import "./MemberShipCard.css";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const MemberShipCard = () => {
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl font-bold uppercase  py-4">Our Pricing</h3>
      </div>

      <Link to="{`/checkout/${_id}`}">
        <div className="bg-gray-100 py-10 mb-12  flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="p-1 bg-blue-200"></div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Silver Package
                </h2>
                <p className="text-gray-600 mb-6">
                  Perfect for growing businesses
                </p>
                <p className="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    25 Users
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    Advanced Features
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    24/7 Support
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Select Package
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="p-1 bg-green-200"></div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Gold Package
                </h2>
                <p className="text-gray-600 mb-6">
                  Perfect for growing businesses
                </p>
                <p className="text-4xl font-bold text-gray-800 mb-6">$49.99</p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    25 Users
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    Advanced Features
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    24/7 Support
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <button className="w-full bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                  Select Package
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="p-1 bg-purple-200"></div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Platinum Package
                </h2>
                <p className="text-gray-600 mb-6">
                  For large-scale enterprises
                </p>
                <p className="text-4xl font-bold text-gray-800 mb-6">$99.99</p>
                <ul className="text-sm text-gray-600 mb-6">
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    Unlimited Users
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    Premium Features Advanced Features
                  </li>
                  <li className="mb-2 flex items-center gap-2">
                    <FaCheck className="text-[#ef8829]" />
                    4/7 Priority Support
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <button className="w-full bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                  Select Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MemberShipCard;
