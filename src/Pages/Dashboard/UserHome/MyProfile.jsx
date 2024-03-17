/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";
import {
  FaAddressBook,
  FaCalendarWeek,
  FaCity,
  FaClinicMedical,
  FaCommentDots,
  FaGoogleDrive,
  FaIdCard,
  FaMapMarkerAlt,
  FaRegIdBadge,
  FaUserEdit,
  FaUserFriends,
  FaUserGraduate,
  FaWonSign,
} from "react-icons/fa";
import { SiTask } from "react-icons/si";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="px-4 py-8 h-screen  text-white space-y-8">
      <h2 className="text-2xl font-bold">
        Hi,{" "}
        <span className="text-orange-700">
          {user?.displayName ? user?.displayName : "There"}
        </span>{" "}
        Welcome Back!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-8 rounded-lg">
          <span className="text-5xl">
            <SiTask></SiTask>
          </span>
          <div>
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-lg font-bold">Orders</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-8 rounded-lg">
          <span className="text-5xl">
            <FaUserFriends></FaUserFriends>
          </span>
          <div>
            <h2 className="text-2xl font-bold">06</h2>
            <p className="text-lg font-bold">Users</p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-8 rounded-lg">
          <span className="text-5xl">
            <FaCommentDots></FaCommentDots>
          </span>
          <div>
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-lg font-bold">Reviews</p>
          </div>
        </div>
      </div>

      <div className="lg:flex px-2 lg:flex-col lg:justify-center lg:items-center shadow-xl rounded-2xl">
        <div className="h-24 lg:w-2/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="h-72 lg:w-2/3 flex flex-col justify-center items-center">
          <img
            className="rounded-full lg:-mt-32"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://i.ibb.co/SKhSR0W/avatardefault-92824.png"
            }
            width={60}
            height={20}
            alt="User Image"
          ></img>
          <div className="badge mt-2 badge-accent badge-outline">User</div>
          <h2 className="py-5">
            <span className="font-bold mr-2">User Id:</span>
            <span className="text-md text-purple-400">
              {user?.uid ? user?.uid : "Your Id Not found"}
            </span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 justify-center">
            <div className="space-y-2">
              <p className="font-bold">Name</p>
              <p className="text-xs text-purple-400">
                {user?.displayName ? user?.displayName : "Name Not Found"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Email:</p>
              <p className="text-xs text-purple-400">
                {user?.email ? user?.email : "Email Not Found"}
              </p>
            </div>
            <div className="space-y-2">
              <button className="text-white text-xs mr-2 font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700">
                Update Profile
              </button>
              <button className="text-white text-xs font-bold py-2 px-2 rounded border border-purple-700  hover:bg-purple-700">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="mx-auto max-w-screen-xl">
    //   <div className="p-5">
    //     <div className="flex items-center gap-3 mb-5">
    //       <div className="avatar">
    //         <div className="w-16 rounded-full ">
    //           <img src={user?.photoURL} />
    //         </div>
    //       </div>
    //       <h2>
    //         <b className="text-4xl">{user?.displayName}</b>
    //       </h2>
    //     </div>

    //     <div className="grid grid-cols-2 gap-5 mt-5">
    //       <div className=" bg-white p-3 mb-5 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaGoogleDrive style={{ fontSize: "50px" }}></FaGoogleDrive>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>EMAIL ADDRESS</b>
    //             </h3>
    //             <p className="text-gray-500"> {user?.email}</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" bg-white p-3 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaIdCard style={{ fontSize: "50px" }}></FaIdCard>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>USER ID</b>
    //             </h3>
    //             <p className="text-gray-500">{user?.uid}</p>
    //           </div>
    //         </div>
    //       </div>

    //       {user ? (
    //         <div className=" bg-white p-3 rounded-sm">
    //           <div className="flex items-center gap-3">
    //             <div className="rounded-xl ">
    //               <FaRegIdBadge style={{ fontSize: "50px" }}></FaRegIdBadge>
    //             </div>
    //             <div>
    //               <h3>
    //                 <b>Bronze Badge</b>
    //                 <p className="text-gray-500">
    //                   Bronze Badge offer limit time 3days
    //                 </p>
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className=" bg-white p-3 rounded-sm">
    //           <div className="flex items-center gap-3">
    //             <div className="rounded-xl ">
    //               <FaRegIdBadge style={{ fontSize: "50px" }}></FaRegIdBadge>
    //             </div>
    //             <div>
    //               <h3>
    //                 <b>Gold Badge</b>
    //                 <p className="text-gray-500">
    //                   gold badge offer limit time 3days
    //                 </p>
    //               </h3>
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       <div className=" bg-white p-3 mb-5 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaMapMarkerAlt style={{ fontSize: "50px" }}></FaMapMarkerAlt>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>ADDRESS</b>
    //             </h3>
    //             <p className="text-gray-500">
    //               South Manda, Mugda para, Dhaka-1214
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" bg-white p-3 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaAddressBook style={{ fontSize: "50px" }}></FaAddressBook>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>POST CODE</b>
    //             </h3>
    //             <p className="text-gray-500">1214</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" bg-white p-3 mb-5 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaCity style={{ fontSize: "50px" }}></FaCity>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>CITY</b>
    //             </h3>
    //             <p className="text-gray-500">Dhaka</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" bg-white p-3 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaClinicMedical style={{ fontSize: "50px" }}></FaClinicMedical>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>COUNTRY OF RESIDENCE</b>
    //             </h3>
    //             <p className="text-gray-500">Bangladesh</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" bg-white p-3 mb-5 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaCalendarWeek style={{ fontSize: "50px" }}></FaCalendarWeek>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>JOINED SINCE</b>
    //             </h3>
    //             <p className="text-gray-500">{user?.metadata.creationTime}</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" bg-white p-3 mb-5 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaWonSign style={{ fontSize: "50px" }}></FaWonSign>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>WEB SITE</b>
    //             </h3>
    //             <p className="text-gray-500">http://example.com</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" bg-white p-3 rounded-sm">
    //         <div className="flex items-center gap-3">
    //           <div className="rounded-xl ">
    //             <FaUserGraduate style={{ fontSize: "50px" }}></FaUserGraduate>
    //           </div>
    //           <div>
    //             <h3>
    //               <b>TYPE</b>
    //             </h3>
    //             <p className="text-gray-500">Personal</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MyProfile;
