/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";
import {
  FaAddressBook,
  FaCalendarWeek,
  FaCity,
  FaClinicMedical,
  FaGoogleDrive,
  FaIdCard,
  FaMapMarkerAlt,
  FaRegIdBadge,
  FaUserEdit,
  FaUserGraduate,
  FaWonSign,
} from "react-icons/fa";

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
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className=" bg-white p-3 mb-5 rounded-sm">
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

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaIdCard style={{ fontSize: "50px" }}></FaIdCard>
              </div>
              <div>
                <h3>
                  <b>USER ID</b>
                </h3>
                <p className="text-gray-500">{user?.uid}</p>
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
                    <p className="text-gray-500">
                      Bronze Badge offer limit time 3days
                    </p>
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
                    <b>Gold Badge</b>
                    <p className="text-gray-500">
                      gold badge offer limit time 3days
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          )}

          <div className=" bg-white p-3 mb-5 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaMapMarkerAlt style={{ fontSize: "50px" }}></FaMapMarkerAlt>
              </div>
              <div>
                <h3>
                  <b>ADDRESS</b>
                </h3>
                <p className="text-gray-500">
                  South Manda, Mugda para, Dhaka-1214
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaAddressBook style={{ fontSize: "50px" }}></FaAddressBook>
              </div>
              <div>
                <h3>
                  <b>POST CODE</b>
                </h3>
                <p className="text-gray-500">1214</p>
              </div>
            </div>
          </div>
          <div className=" bg-white p-3 mb-5 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaCity style={{ fontSize: "50px" }}></FaCity>
              </div>
              <div>
                <h3>
                  <b>CITY</b>
                </h3>
                <p className="text-gray-500">Dhaka</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaClinicMedical style={{ fontSize: "50px" }}></FaClinicMedical>
              </div>
              <div>
                <h3>
                  <b>COUNTRY OF RESIDENCE</b>
                </h3>
                <p className="text-gray-500">Bangladesh</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 mb-5 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaCalendarWeek style={{ fontSize: "50px" }}></FaCalendarWeek>
              </div>
              <div>
                <h3>
                  <b>JOINED SINCE</b>
                </h3>
                <p className="text-gray-500">{user?.metadata.creationTime}</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 mb-5 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaWonSign style={{ fontSize: "50px" }}></FaWonSign>
              </div>
              <div>
                <h3>
                  <b>WEB SITE</b>
                </h3>
                <p className="text-gray-500">http://example.com</p>
              </div>
            </div>
          </div>

          <div className=" bg-white p-3 rounded-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl ">
                <FaUserGraduate style={{ fontSize: "50px" }}></FaUserGraduate>
              </div>
              <div>
                <h3>
                  <b>TYPE</b>
                </h3>
                <p className="text-gray-500">Personal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
