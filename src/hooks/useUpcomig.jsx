/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useUpcomig = () => {
  const { data: upcoming = [] } = useQuery({
    queryKey: ["upcoming"],
    queryFn: () =>
      fetch("http://localhost:5000/addmeals").then((res) => res.json()),
  });
  return [upcoming];
};

export default useUpcomig;
