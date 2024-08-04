import { yellowgreen } from "color-name";
import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
    logo
    navicons items
body
    search bar inputs
    Restauerant conatainer
        restauaratnt card
        image
        name of restaro
        start rating
        cuisines
        delivery times

Footer
    copyright
    linkes
    address
    contact
*/
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "namsta from react"
// );

const HeaderComponents = () => {
  return (
    <div className="header">
      <div className="logo-conatiner">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg"
          alt="logo-image"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Carts</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "yellowgreen",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="res-img"
      />
      <h3>Meghana Foods</h3>
      <h4>Cakes,Cheez Cakes</h4>
      <h4>4.3 Start Rating</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

const BodyComponents = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="rest-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponents />
      <BodyComponents />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
