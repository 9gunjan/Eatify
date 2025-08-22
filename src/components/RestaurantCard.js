import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    totalRatingsString,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
        alt="res-card-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>
        {costForTwo} ({totalRatingsString})
      </h3>
      <h3>{avgRating}⭐</h3>
      <h3>{sla.slaString} </h3>
    </div>
  );
};

export default RestaurantCard;
