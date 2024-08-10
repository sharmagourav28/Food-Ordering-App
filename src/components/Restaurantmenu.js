import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Restaurantmenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7292844&lng=75.865741&restaurantId=881203&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.info;
  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>{name}</li>
        <li>{cuisines}</li>
        <li>{costForTwoMessage}</li>
      </ul>
    </div>
  );
};
export default Restaurantmenu;
