/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import img from "../../assets/google.svg";
import { useForm } from "react-hook-form";

const SingUp2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleSingup = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    // validate
    // setError("");
    // setSuccess("");
    // if (password.length < 6) {
    //   setError("Please add at least 6 characters in your password.");
    //   return;
    // } else if (!/(?=.*[A-Z])/.test(password)) {
    //   setError("Please add at least one uppercase.");
    //   return;
    // } else if (!/(?=.*[!@#$&*])/.test(password)) {
    //   setError("Please add a special character.");
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User has been created successfully");
        updateUserName(result.user, name);
        updateUserPhoto(result.user, photo);
        navigate(from, { replace: true });
        Swal.fire({
          title: "success",
          text: "user SingUp successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const updateUserName = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const updateUserPhoto = (user, photo) => {
    updateProfile(user, {
      photoURL: photo,
    })
      .then(() => {
        console.log("user photo updated");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been Singup successfully");
        // setSuccess(alert('success'));

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      {/* onSubmit={handleSingup} */}
      <form onSubmit={handleSingup}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col  space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row ">
            {/* <!-- left side --> */}
            {/* <div className="relative">
              <img
                src="https://i.ibb.co/fXSFwTP/login2.png"
                alt="img"
                className="w-[400px] h-full hidden rounded-lg md:block object-cover"
              />

              <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span className="text-black text-xl">
                  We have been uesing Untitle to kick
                  <br />
                  start every new project and can not <br />
                  imagine working without it
                </span>
              </div>
            </div> */}

            <div className="flex flex-col justify-center px-14 py-8">
              <p className="text-red-600 text-center">{error}</p>
              <p className="text-green-600">{success}</p>
              <span className=" text-4xl text-center font-bold">
                Please Register
              </span>
              <span className="font-light text-center text-black mb-4">
                Hey! Enter your details to get create account
              </span>

              <button
                onClick={handleGoogleSignIn}
                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-5  hover:bg-[#ef8829] hover:text-white"
              >
                <img
                  src="/src/assets/google.svg"
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />
                Sign in with Google
              </button>

              <div className="">
                <span className="mb-16 text-md font-bold">Name</span>
                <input
                  type="text"
                  className="w-full   p-2 border border-[#ef8829] rounded-lg placeholder:font-light placeholder:text-gray-500"
                  {...register("name", { required: true })}
                  required
                  placeholder="Enter Your Name"
                  name="name"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md font-bold">Email</span>
                <input
                  className="w-full   p-2 border border-[#ef8829] rounded-lg placeholder:font-light placeholder:text-gray-500"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                  name="email"
                />
              </div>
              <div className="">
                <span className="mb-2 text-md font-bold">Photo URL</span>
                <input
                  type="url"
                  className="w-full   p-2 border border-[#ef8829] rounded-lg placeholder:font-light placeholder:text-gray-500"
                  required
                  placeholder="Enter Your Photo URL"
                  {...register("photo", { required: true })}
                  name="photo"
                />
              </div>

              <div className="py-4">
                <span className="mb-2 text-md font-bold">Password</span>
                <input
                  type={show ? "text" : "password"}
                  required
                  placeholder="Enter Your Password"
                  name="password"
                  className="w-full   p-2 border border-[#ef8829] rounded-lg placeholder:font-light placeholder:text-gray-500"
                  {...register("password", { required: true })}
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

              <div className="flex justify-between w-full py-2">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember </span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button className="w-full bg-[#ef8829] text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Sign Up
              </button>
              {/* <button
                onClick={handleGoogleSignIn}
                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
              >
                <img
                  src="/src/assets/google.svg"
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />
                Sign in with Google
              </button> */}
              <div className="text-center text-gray-400">
                Already have an account?
                <Link className="text-blue-600 font-bold ml-1" to="/login">
                  <u>login</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingUp2;
