import React, { useState, useEffect } from "react";
import trombiService from "../services/trombiService";
import { useNavigationContext } from "../context/NavigationContext";
import { buildUrl } from "../utils/utils";

const useFetch = (endpoint, args) => {
  const [data , setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setTotal, setOffset } = useNavigationContext();

  useEffect(() => {
    const fetchTrombiUsers = async () => {
      try{
        setLoading(true);
        const baseURL = trombiService.endpoint?.BASE_URL;
        console.log('baseurl', baseURL);
        //const result = await trombiService.endpoint?.[endpoint]();
        // const { status, data } = result
        // if(status === 200)
        // {
        //   setData(data);
        //   setTotal(data[data?.length - 1]?.total);
        //   setOffset(data[data?.length - 1]?.offset)
        //   setLoading(false);
        // }
      }catch(err){
        setErrors(err?.response?.data);
        setLoading(false);
      }
    }
    fetchTrombiUsers();
  },[endpoint]);

  return {
    errors,
    data,
    loading
  }
};

export default useFetch;
