import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageURL } from "../constants";
import useRestaurantProfile from "../utils/useRestaurantProfile";
import ShimmerUIComponent from "./ShimmerUIComponent";

const RestaurantInfo = () => {
    const {restID} = useParams();

    console.log("Restaurant info component called");
    const restProfile = useRestaurantProfile(restID);
    const restInfo = restProfile?.data?.cards[0]?.card?.card?.info;
    console.log(restProfile);
    console.log(restInfo);

    if(!restInfo) return <ShimmerUIComponent />

    return (
        <div className="restaurant-info">
            <img src={imageURL + restInfo.cloudinaryImageId} alt="Image couldn't load" />
            <h1> Name: {restInfo?.name} </h1>
            <h2> Cost for two: {restInfo?.costForTwoMessage} </h2>
            <h2> Average rating: {restInfo?.avgRating} </h2>
            <div className="Menu">
                <h2> Menu </h2>
                <ul>
                    { 
                        restProfile?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item) => {
                            return <li key={item?.card?.info?.id}> {item?.card?.info?.name} </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantInfo;