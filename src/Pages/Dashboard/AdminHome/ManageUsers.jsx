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
                  <th>#</th>
                  <th>User</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Make Admin</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
