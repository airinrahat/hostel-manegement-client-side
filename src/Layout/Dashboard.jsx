/* eslint-disable no-unused-vars */
import React from "react";
import { FaFileAlt, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-screen-xl  flex justify-between">
      <div className="  min-h-screen  px-2  mr-6  bg-[#30373E]">
        <ul className="menu mt-7 mx-10 bg-inherit text-xl text-[#999999]">
          <li>
            <NavLink to="/dashboard/myprofile">
              <FaUser /> My Profile
            </NavLink>
          </li>
          <li className="my-3">
            <NavLink to="/dashboard/requesMeals">
              <FaUser />
              Request Meals
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myReviews">
              <FaUser />
              My Reviews
            </NavLink>
          </li>

          {/* admin dashboard */}

          <li>
            <NavLink className="my-3" to="/dashboard/adminProfile">
              <FaUser />
              Admin Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="my-3" to="/dashboard/manageUsers">
              <FaUser />
              Manage User
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addMeals">
              <FaUser />
              Add Meals
            </NavLink>
          </li>
          <li>
            <NavLink className="my-3" to="/dashboard/mealsAll">
              <FaUser />
              All Meals
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/reviewsAll">
              <FaUser />
              All Reviews
            </NavLink>
          </li>
          <li>
            <NavLink className="my-3" to="/dashboard/serve">
              <FaUser />
              Serve
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/comingUpMeals">
              <FaUser />
              Upcomeing meal
            </NavLink>
          </li>

          <div className="divider my-5 p-0 bg-gray-300 h-1 rounded"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="my-3" to="/allmeals">
              <FaUsers></FaUsers> All Meals
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
