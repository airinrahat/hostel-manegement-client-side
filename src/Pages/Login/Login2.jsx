/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../assets/google.svg";

const Login2 = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleSingin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
        Swal.fire({
          title: "success",
          text: "user Login successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSingin}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <p className="text-red-600 text-center">{error}</p>
              <p className="text-green-600">{success}</p>
              <span className="mb-3 text-4xl text-center text-[#ef8829] font-bold">
                Please Login
              </span>
              <span className="font-light text-center text-black mb-8">
                Hey! Enter your details to get login to your account
              </span>
              <button
                onClick={handleGoogleLogin}
                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-[#ef8829] hover:text-white"
              >
                <img src={img} alt="img" className="w-6 h-6 inline mr-2" />
                Sign in with Google
              </button>

              <div className="py-2">
                <span className=" font-bold text-md">Email</span>
                <input
                  className="w-full  mt-2 p-2 border border-[#ef8829] rounded-lg placeholder:font-light placeholder:text-gray-500"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>

              <div className="py-2">
                <span className="mb-2 font-bold text-md">Password</span>
                <input
                  type={show ? "text" : "password"}
                  required
                  placeholder="Enter Your Password"
                  name="password"
                  className="w-full mt-2 p-2 border border-[#ef8829] rounded-lg placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="pws-btn">
                <label onClick={() => setShow(!show)}>
                  <small className="show-hide">
                    {show ? (
                      <span>Hide Password</span>
                    ) : (
                      <span>Show Password</span>
                    )}
                  </small>
                </label>
              </div>

              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember </span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button className="w-full bg-[#ef8829] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Sign in
              </button>

              <div className="text-center text-gray-400">
                Do not have an account?
                <Link className="text-blue-600 font-bold ml-1" to="/singup">
                  <u>Register Now</u>
                </Link>
                {/* <span className="font-bold text-black">Sign up for free</span> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login2;
