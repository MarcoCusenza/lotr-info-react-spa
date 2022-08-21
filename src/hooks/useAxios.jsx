import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (resource, target = "", param = "") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const token = process.env.REACT_APP_API_LOTR;

  useEffect(() => {
    const getData = async () => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        setIsLoading(true);
        const { data } = await axios.get(`https://the-one-api.dev/v2/${resource}/${target}/${param}`, config);
        // console.log("data:", data);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [resource, target, param, token]);

  return { data, isLoading, error };
};

export default useAxios;
