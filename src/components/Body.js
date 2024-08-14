import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurant, setListofRestautant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

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
    setFilterRestaurant(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks Like you are offline check your internet</h1>;
  }

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
              // Filter the restaurant card and update the UI
              // Search text here
              console.log(searchText);
              const filterRestaurant = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterRestaurant);
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Search
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
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
