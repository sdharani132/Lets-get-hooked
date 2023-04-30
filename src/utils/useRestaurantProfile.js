import { useState, useEffect } from "react";

const useRestaurantProfile = (restID) => {
    const [restProfile, setRestProfile] = useState(null);

    console.log("use restaurant profile hook called");

    useEffect(() => {
        getRestaurantProfile();
    }, [])

    async function getRestaurantProfile() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.41412&lng=78.5790607&restaurantId="+ restID +"&submitAction=ENTER");

        const jsonData = await data.json();
        console.log(jsonData);
        setRestProfile(jsonData);
    }

    return restProfile;
};

export default useRestaurantProfile;