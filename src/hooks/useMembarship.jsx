import { useEffect, useState } from "react";

const useMembarship = () => {
  const [membership, setMembership] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/membarship")
      .then((res) => res.json())
      .then((data) => {
        setMembership(data);
        setLoading(false);
      });
  });
  return [membership, loading];
};

export default useMembarship;
