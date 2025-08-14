import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";


//   {
//     id: "594685",
//     name: "Chinese Wok",
//     cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
//     locality: "Gautam Buddha Nagar",
//     areaName: "Sector 110",
//     costForTwo: "₹250 for two",
//     cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
//     avgRating: 3.9,
//     parentId: "61955",
//     avgRatingString: "3.9",
//     totalRatingsString: "1.8K+",
//     sla: {
//       deliveryTime: 49,
//       lastMileTravel: 3.9,
//       serviceability: "SERVICEABLE",
//       slaString: "45-50 mins",
//       lastMileTravelString: "3.9 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//   },
//   {
//     id: "355000",
//     name: "Pizza Hut",
//     cloudinaryImageId:
//       "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/21d82657-b8e5-4829-8d89-045b4576fdef_355000.JPG",
//     locality: "KM Block",
//     areaName: "Hajipur",
//     costForTwo: "₹350 for two",
//     cuisines: ["Pizzas"],
//     avgRating: 4.1,
//     parentId: "721",
//     avgRatingString: "4.1",
//     totalRatingsString: "3.2K+",
//     sla: {
//       deliveryTime: 49,
//       lastMileTravel: 2.3,
//       serviceability: "SERVICEABLE",
//       slaString: "45-50 mins",
//       lastMileTravelString: "2.3 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//   },
// ];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
