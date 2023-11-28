import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React from "react";

const axiosPublice = axios.create({
  baseURL: "http://localhost:5000/",
});
const useAxiosPublic = () => {
  return axiosPublice;
};

export default useAxiosPublic;
