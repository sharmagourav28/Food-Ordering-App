import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import resList from "./../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((res) => res.info.avgRating > 4);
            console.log(resList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
