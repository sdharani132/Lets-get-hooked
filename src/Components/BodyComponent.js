import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUIComponent from "./ShimmerUIComponent";

const BodyComponent = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        console.log("useEffect called");
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.41412&lng=78.5790607&page_type=DESKTOP_WEB_LISTING");
        const json_data = await data.json();
    
        console.log(json_data);
        setAllRestaurants(json_data?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json_data?.data?.cards[2]?.data?.data?.cards);
    }

    // early return -- when allRestaurants is undefined
    if(!allRestaurants) return null;

    return (allRestaurants.length === 0)? (<ShimmerUIComponent />): (
        <>
            <div className="search-container">
                <input type="text" className="search-input" 
                placeholder="restaurant name" value={searchText} 
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={() => {
                    setFilteredRestaurants(filter(searchText, allRestaurants))
                }}> Search </button>
            </div>
            <div className="restaurant-list">
                {   (filteredRestaurants.length === 0)? (
                        <h2> No restaurants found....</h2>
                    ):
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.uuid}/>
                    })
                }
            </div>
        </>
    )
}

function filter(searchText, allRestaurants) {
    return allRestaurants.filter((restaurant) => {
        let name = restaurant.data.name.toLocaleLowerCase();
        return name.includes(searchText.toLocaleLowerCase());
    });
}

export default BodyComponent;