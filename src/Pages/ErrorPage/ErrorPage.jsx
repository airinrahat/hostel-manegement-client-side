/* eslint-disable no-unused-vars */
import React from "react";
import errorImg from "../../assets/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="text-center flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <img src={errorImg} className="img-fluid inline" alt="" />

        <h1 className="py-1 text-3xl	">404 - Page Not Found</h1>
        <p style={{ width: "40%", margin: "auto" }}>
          Unfortunately the page you were looking for could not be found. It may
          be temporarily unavailable, moved or no longer exist. Check the Url
          you entered for any mistakes and try again.
        </p>
        <button>
          <Link to="/" className="ms-2">
            <button className="btn bg-[#ef8829] mt-2">Back to Home</button>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
