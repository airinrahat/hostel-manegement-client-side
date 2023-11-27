/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";
import { FaGoogleDrive, FaRegIdBadge, FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="avatar">
            <div className="w-16 rounded-full ">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h2>
            <b className="text-4xl">{user?.displayName}</b>
            <p>{user?.email}</p>
          </h2>
          <br />
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaUserEdit style={{ fontSize: "50px" }}></FaUserEdit>
              </div>
              <div>
                <h3>
                  <b>USER NAME</b>
                </h3>
                <p className="text-gray-500"> {user?.displayName}</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaGoogleDrive style={{ fontSize: "50px" }}></FaGoogleDrive>
              </div>
              <div>
                <h3>
                  <b>EMAIL ADDRESS</b>
                </h3>
                <p className="text-gray-500"> {user?.email}</p>
              </div>
            </div>
          </div>

          {user ? (
            <div className=" bg-white p-3 rounded-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl ">
                  <FaRegIdBadge style={{ fontSize: "50px" }}></FaRegIdBadge>
                </div>
                <div>
                  <h3>
                    <b>Bronze Badge</b>
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <div className=" bg-white p-3 rounded-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl ">
                  <FaRegIdBadge style={{ fontSize: "50px" }}></FaRegIdBadge>
                </div>
                <div>
                  <h3>
                    <b>Gold Badg</b>
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
