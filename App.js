import React from "react";
import ReactDOM from "react-dom/client";

const resList = [
  {
    id: "594685",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Gautam Buddha Nagar",
    areaName: "Sector 110",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 3.9,
    parentId: "61955",
    avgRatingString: "3.9",
    totalRatingsString: "1.8K+",
    sla: {
      deliveryTime: 49,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-12 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹129",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "355000",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/21d82657-b8e5-4829-8d89-045b4576fdef_355000.JPG",
    locality: "KM Block",
    areaName: "Hajipur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.1,
    parentId: "721",
    avgRatingString: "4.1",
    totalRatingsString: "3.2K+",
    sla: {
      deliveryTime: 49,
      lastMileTravel: 2.3,
      serviceability: "SERVICEABLE",
      slaString: "45-50 mins",
      lastMileTravelString: "2.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-12 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://play-lh.googleusercontent.com/GTEZUaB6m-RQmOul8Wkf64tizsxU4wmKhiWGdn9bMxizj5NYdv9hlnvFKjXbUumfaA=w480-h960-rw"
          alt="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    deliveryTime,
    totalRatingsString,
  } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" +
          resData.cloudinaryImageId
        }
        alt="res-card-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>
        {costForTwo} ({totalRatingsString})
      </h3>
      <h3>{avgRating}</h3>
      <h3>{sla.deliveryTime} mins</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {resList.map(restaurant =>  <RestaurantCard key={restaurant.id} resData={restaurant} />)}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
