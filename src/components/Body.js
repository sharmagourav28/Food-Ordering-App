import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestaurant, setListofRestautant] = useState([]);
  const [searchText, setsearchText] = useState("");
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
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListofRestautant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  // if (listofRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listofRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurtant card and update the UI
              // Search text our here
              console.log(searchText);
              const filterres = listofRestaurant.filter((res) => {
                console.log(res.info.name);
                res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              console.log(filterres);
              setListofRestautant(filterres);
            }}
          >
            search
          </button>
        </div>
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
