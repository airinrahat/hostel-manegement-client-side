/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../../../hooks/useAuth";

const ManageUsers = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-3xl">this is manage users</h3>
      <div className="px-3 text-center">
        <h2 className="text-3xl py-5">
          <u>
            Manage All Users : <b>{user?.length}</b>
          </u>
        </h2>

        <div>
          <div className="overflow-x-auto">
            <table className="table" style={{ width: "100%" }}>
              {/* head */}
              <thead className="text-xl font-bold text-black">
                <tr>
                  <th>Sl</th>
                  <th>User</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Make Admin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-xl">
                  <td>1</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user?.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{user?.displayName}</td>
                  <td>{user?.email}</td>
                  <td>
                    <button className="btn btn-outline btn-success">
                      Make Admin
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
