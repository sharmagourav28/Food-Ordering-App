import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  // calling hook
  useEffect(() => {
    fetchData();
  }, []);
  // fetch data
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    // fetching data
    const datajson = await data.json();
    // convert it into json
    setresInfo(datajson.data);
  };

  return resInfo; // local variable
};

export default useRestaurantMenu;
