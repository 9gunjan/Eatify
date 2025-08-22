import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //copy of all the restautrats like above plus it will hold the restaurants based on searched restaurant
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    const json = await data.json();
    const restaurantsArray =
      json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(restaurantsArray);
    const restaurantInfoArray = restaurantsArray.map((r) => r.info);
    // console.log(restaurantInfoArray);
    setListOfRestaurants(restaurantInfoArray);
    setFilteredRestaurant(restaurantInfoArray); //copy of all the restautrats plus it will hold the restaurants based on searched restaurant
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like there u have no internet connection!!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
