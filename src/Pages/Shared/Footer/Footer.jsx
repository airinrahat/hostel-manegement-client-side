/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagramSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 mx-auto max-w-screen-xl text-base-content">
        <nav>
          <header className="footer-title ">CONTACT INFO</header>
          <div>
            <a className="link link-hover ">
              {" "}
              <div className="flex gap-2">
                <FaLocationArrow className="text-[#ef8829] text-2xl" />{" "}
                <span className="font-bold">LOCATION</span>
              </div>
              <div>
                <p>
                  205 Olazu Familia, Herba
                  <br /> Street Front USA
                </p>
              </div>
            </a>
          </div>
          <div className="my-2">
            <a className="link link-hover ">
              {" "}
              <div className="flex gap-2 ">
                <MdAttachEmail className="text-[#ef8829] text-2xl" />{" "}
                <span className="font-bold"> EMAIL US</span>
              </div>
              <div>
                <p>support@gmail.com</p>
              </div>
            </a>
          </div>
          <div>
            <a className="link link-hover ">
              {" "}
              <div className="flex gap-2">
                <FaPhone className="text-[#ef8829] text-2xl" />{" "}
                <span className="font-bold">CALL US</span>
              </div>
              <div>
                <p>002- 01008431112</p>
              </div>
            </a>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Information</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Our Menu</a>
          <a className="link link-hover">Payment Methods</a>
          <a className="link link-hover">Reviews</a>
          <a className="link link-hover">Migrate to Hostinger</a>
        </nav>
        <nav>
          <header className="footer-title">CUSTOMER SUPPORT</header>
          <a className="link link-hover">Help and Ordering</a>
          <a className="link link-hover">Return & Cancellation</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Delevery Schedule</a>
          <a className="link link-hover">Get a Call</a>

          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#ef8829] join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      {/* <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer> */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid lg:grid-flow-col  grid-cols-3 gap-4 text-4xl">
            <a>
              <FaTwitter className="text-[#1DA1F2] text-4xl"></FaTwitter>
            </a>
            <a>
              <FaYoutube className="text-[#FF0000]"></FaYoutube>
            </a>
            <a>
              <FaFacebook className="text-[#4267B2]"></FaFacebook>
            </a>
            <a>
              <FaGooglePlus className="text-[#1976D2]"></FaGooglePlus>
            </a>
            <a>
              <FaLinkedin className="text-[#0077b5]"></FaLinkedin>
            </a>
            <a>
              <FaInstagramSquare className="text-[#C13584]"></FaInstagramSquare>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2023 - All right reserved by jobworld Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
