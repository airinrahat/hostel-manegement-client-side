/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="lg:mx-2 ">
        <NavLink to="/allmeals">Meals</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  max-w-screen-xl mx-auto">
      <div className="md:navbar-start py-6">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex-1">
          <NavLink to="/">
            <img src="https://i.ibb.co/hK3NFrH/meal.png" alt="" />
          </NavLink>
        </div>
      </div>

      <div className="md:navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-xl">{links}</ul>
        </div>

        <div className="flex-none md:flex">
          <div className="dropdown  dropdown-bottom  dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost mr-4">
              <span>Upcoming Meals</span>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge py-3 px-2 badge-primary indicator-item">
                  1
                </span>
              </div>
            </label>
            <div tabIndex={0} className="dropdown-content z-[110] mt-5  w-64 ">
              <ul className="menu menu-sm   z-[110]   shadow bg-base-100 border border-[#ef8829] rounded-box w-52">
                <li className="mb-1 ">
                  <h4 className="">
                    {" "}
                    <IoNotificationsSharp className="text-2xl text-[#ef8829]" />{" "}
                    <span className="font-bold text-sm">
                      {" "}
                      Caprese Sandwich with Pesto
                    </span>
                  </h4>
                  <p className="ml-8 text-xs mb-2">3 days ago</p>
                </li>
                <li className=" ">
                  <h4 className="">
                    {" "}
                    <IoNotificationsSharp className="text-2xl text-[#ef8829]" />{" "}
                    <span className="font-bold text-sm">
                      {" "}
                      Caprese Sandwich with Pesto
                    </span>
                  </h4>
                  <p className="ml-8 text-xs mb-2">3 days ago</p>
                </li>
              </ul>
            </div>

            {/* modal modal */}

            {/* <label tabIndex={0} className="btn btn-ghost btn-circle mr-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="indicator  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge py-3 px-2 badge-primary indicator-item">
                  1
                </span>
              </button>
            </label>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog> */}
          </div>
        </div>
        {user ? (
          <div className="dropdown  dropdown-bottom dropdown-end ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mb-3 "
            >
              <div className="w-20   rounded-full">
                <img alt="profile" src={user.photoURL} />
              </div>
            </label>
            <div tabIndex={0} className="dropdown-content z-[100]  w-64 ">
              <ul className="menu menu-sm dropdown-content  z-[100] mb-5  shadow bg-base-100 border border-[#ef8829] rounded-box w-52">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar mb-3 "
                >
                  <div className="w-20  rounded-full">
                    <img
                      alt="profile"
                      className="mx-auto block "
                      src={user.image}
                    />
                  </div>
                </label>

                <p className="font-bold mb-2 ml-1">{user.displayName}</p>

                <li className="font-bold mb-2">
                  <NavLink to="/dashboard/myprofile">Dashboard</NavLink>
                </li>
                <li>
                  <a>
                    {" "}
                    <button
                      onClick={handleLogOut}
                      className="btn  text-white btn-sm bg-[#ef8829]"
                    >
                      logout
                    </button>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/login">
              {" "}
              <button className="btn bg-[#ef8829] ml-2 mb-3">
                Join Us
              </button>{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
