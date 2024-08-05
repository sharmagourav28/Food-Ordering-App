import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listofRestaurant, setListofRestautant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestautant(filteredlist);
            console.log(filteredlist);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
