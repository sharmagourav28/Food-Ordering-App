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
  backgroundColor: "#c8e3e2",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="res-img"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>38 Mins</h4>
    </div>
  );
};

const resObj = {
  info: {
    id: "67500",
    name: "Pishori Restaurant",
    cloudinaryImageId: "ntfzr5mgmt9b9f545vtl",
    locality: "Sapna Sangeeta Road",
    areaName: "Bhawar Kuan",
    costForTwo: "₹450 for two",
    cuisines: ["North Indian", "Mughlai", "Kebabs", "Biryani", "Chinese"],
    avgRating: 4.3,
    parentId: "158125",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 4.9,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "4.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-08-04 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        textBased: {},
        imageBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹109",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "1K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "swiggy://menu?restaurant_id=67500",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK",
  },
};

const BodyComponents = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="rest-container">
        <RestaurantCard resData={resObj} />
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
