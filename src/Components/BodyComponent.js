import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../constants";
import { useState } from "react";

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState(restaurantsList);
    const [searchText, setSearchText] = useState();
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" 
                placeholder="restaurant name" value={searchText} 
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={() => {
                    setRestaurants(filter(searchText))
                }}> Search </button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.uuid}/>
                    })
                }
            </div>
        </>
    )
}

function filter(searchText) {
    return restaurantsList.filter((restaurant) => {
        let name = restaurant.data.name.toLocaleLowerCase();
        return name.includes(searchText.toLocaleLowerCase());
    });
}

export default BodyComponent;