import { useState, useEffect } from "react";
import { REST_LIST } from "./constants";
const useRestaurantList = () => {
  const [restList, setRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_LIST);
    const json = await data.json();

    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restList;
};

export default useRestaurantList;
