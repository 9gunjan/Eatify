import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState();

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);  //used custom hook for getting the data from api using the resid
 
  if (!resInfo) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // .itemCards[0]?.card?.info;

  return (
    <div className="menu">
      <h1>{name || "Restaurant name"}</h1>
      <h3>{costForTwoMessage})</h3>
      <h3>
        {avgRatingString}({totalRatingsString})
      </h3>
      <h3>{cuisines.join(",")}</h3>
      <ul>
        {itemCards.map((i) => (
          <li key={i?.card?.info?.id}>
            {i?.card?.info?.name + " - Rs."}
            {i?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
