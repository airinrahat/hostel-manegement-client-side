/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingUp = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            {/* <!-- left side --> */}
            <div className="relative">
              <img
                // src="https://i.ibb.co/fXSFwTP/login2.png"
                src="https://i.ibb.co/sJynHPr/authentication2-1.png"
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
            </div>

            <div className="flex flex-col justify-center p-8 md:p-14">
              {/* <p className="text-red-600 text-center">{error}</p>
                <p className="text-green-600">{success}</p> */}
              <span className="mb-3 text-4xl text-center font-bold">
                Please Register
              </span>
              <span className="font-light text-center text-gray-400 mb-8">
                Hey! Enter your details to get create account
              </span>
              <div className="py-4">
                <span className="mb-2 text-md">Name</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  required
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  name="name"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                  name="email"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Photo URL</span>
                <input
                  type="url"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  required
                  placeholder="Enter Your Photo URL"
                  {...register("photo", { required: true })}
                  name="photo"
                />
              </div>

              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  required
                  placeholder="Enter Your Password"
                  {...register("password", { required: true })}
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              {/* <div className="pws-btn">
                  <label onClick={() => setShow(!show)}>
                    <small className="show-hide">
                      {show ? (
                        <span>Hide Password</span>
                      ) : (
                        <span>Show Password</span>
                      )}
                    </small>
                  </label>
                </div> */}

              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember </span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Sign Up
              </button>
              <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                <img
                  src="https://i.ibb.co/prFFGdk/google-1.png"
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />
                Sign in with Google
              </button>
              <div className="text-center text-gray-400">
                Already have an account?
                <Link className="text-blue-600 font-bold ml-1" to="/login">
                  <u>login</u>
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

export default SingUp;
