import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageURL } from "../constants";
import ShimmerUIComponent from "./ShimmerUIComponent";

const RestaurantInfo = () => {
    const {restID} = useParams();
    console.log(restID);
    const [restProfile, setRestProfile] = useState({});

    useEffect(() => {
        getRestaurantProfile();
    }, [])
    async function getRestaurantProfile() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.41412&lng=78.5790607&restaurantId="+ restID +"&submitAction=ENTER");

        const jsonData = await data.json();
        console.log(jsonData);
        setRestProfile(jsonData);
    }

    const restInfo = restProfile?.data?.cards[0]?.card?.card?.info;

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