/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAuth from "../../../hooks/useAuth";
import {
  FaCircleNotch,
  FaFileVideo,
  FaUserEdit,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl my-10 ">
        <span> Hi,Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="grid grid-cols-2 gap-5">
        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full ">
                <img src={user.photoURL} />
              </div>
            </div>
            <div>
              <h3>
                <b>{user.displayName}</b>
              </h3>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaUserEdit style={{ fontSize: "50px" }}></FaUserEdit>
            </div>
            <div>
              <h3>
                <b> My Profile</b>
              </h3>
              <p className="text-gray-500"> Account Setting Profile</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaHamburger style={{ fontSize: "50px" }}></FaHamburger>
            </div>
            <div>
              <h3>
                <b>Add Meals</b>
              </h3>
              <p className="text-gray-500"> Total Meals</p>
            </div>
          </div>
        </div>

        <div className=" bg-white p-3 rounded-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl ">
              <FaCircleNotch style={{ fontSize: "50px" }}></FaCircleNotch>
            </div>
            <div>
              <h3>
                <b>Activity</b>
              </h3>
              <p className="text-gray-500"> Logs & Notification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
