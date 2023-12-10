/* eslint-disable no-unused-vars */
import React from "react";

const UpdateReview = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Update Review</h2>

        <form className="my-10">
          {/* form name and email row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Name
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="text"
                  name="name"
                  placeholder=" name"
                  className="w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Title
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="w-full"
                />
              </label>
            </div>
          </div>
          {/* form title like row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Reviews
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="number"
                  name="review"
                  placeholder="review"
                  className=" input-bordered  w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Like
                </span>
              </label>
              <label className="input-group input input-bordered ">
                <input
                  type="number"
                  name="like"
                  placeholder="like"
                  className=" input-bordered  w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-5">
            <div className="form-control w-full ml-4">
              <label className="">
                <input
                  type="submit"
                  value="Update Review"
                  className="btn btn-block text-white bg-[#30373E]"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
