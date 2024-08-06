import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
const Body = () => {
  const [listofRestaurant, setListofRestautant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestautant(json?.data.cards[2]?.data?.data?.cards);
  };
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
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
