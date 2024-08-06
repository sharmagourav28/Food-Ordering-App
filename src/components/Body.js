import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
const Body = () => {
  const [listofRestaurant, setListofRestautant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7200228&lng=75.8336039"
    );
    const json = await data.json();
    // console.log(json);
    console.log(
      json?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListofRestautant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
