/* eslint-disable no-unused-vars */
import React from "react";
import { FaFileAlt, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-center   ">
      {/* side bar content */}
      <div className=" w-64 min-h-full ml-10 bg-orange-400">
        <ul className="menu mt-7 ">
          <li>
            <NavLink to="/dashboard/myprofile">
              <FaUser /> My Profile
            </NavLink>
          </li>
          <li>
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
          <li>
            <NavLink to="/dashboard/manageUsers">
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
            <NavLink to="/dashboard/mealsAll">
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
            <NavLink to="/dashboard/serve">
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
            <NavLink to="/allmeals">
              <FaUsers></FaUsers> All Meals
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 ml-12  ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
