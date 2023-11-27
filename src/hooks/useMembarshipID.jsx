import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useMembarshipID = () => {
  const [membership, setMembership] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/membarship/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMembership(data);
        setLoading(false);
      });
  });
  return [membership, loading];
};

export default useMembarshipID;
