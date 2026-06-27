import React from "react"
import { useState, useEffect } from "react";
import restaurants from "../../utils/mockData";
import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantMenu from "./restaurantMenu";


const RestaurantCard = ({ restaurant }) => {

    const info = restaurant.info;

    return (
        <div className="m-4 p-4 w-64 bg-gray-200 rounded-xl hover:bg-gray-300">
            <img
                className="rounded-lg w-full h-40 object-cover"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    info.cloudinaryImageId
                }
                alt="restaurant"
            />

            <h3 className="font-bold py-2 h-14 overflow-hidden">{info.name}</h3>

            <h4 className="text-sm h-12 overflow-hidden">{info.cuisines.join(", ")}</h4>

            <h4>{info.avgRating} Stars</h4>

            <h4>{info.costForTwo}</h4>

            <h4>{info.areaName}</h4>

        </div>
    );
};

const RestaurantContainer = ({ listOfRestaurants }) => {

    return (
        <div className="flex flex-wrap">

            {
                listOfRestaurants.map((restaurant) => (

                    <RestaurantCard
                        key={restaurant.info.id}
                        restaurant={restaurant}
                    />

                ))
            }

        </div>
    );
};

const ShimmerUI = () => {
    return(
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    )
}


const Main = () => {
      const [listOfRestaurants, setListOfRestaurants] = useState([]);
      const [searchText, setSearchText] = useState("");
      const [filteredRestaurant, setFilteredRestaurant] = useState([])


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.4667705&lng=85.8956381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();


      const restaurantCard = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);

    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

 useEffect(() => {
    fetchData();
}, []);  

const onlineStatus = useOnlineStatus();

if (onlineStatus === false) {
    return <h1>Looks like you are offline, check internet connection</h1>;
}

    return (
        <div className="main">

            <div className="searchbar  ml-2">
                <input type="text" className=" border border-solid border-black" value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 m-2 bg-green-100 rounded-lg"
  onClick={() => {
    const filteredRestaurants = listOfRestaurants.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    setFilteredRestaurant(filteredRestaurants);
  }}
>
  Search
</button>
               
            </div>

            {listOfRestaurants.length === 0 ? 
            <ShimmerUI /> :

            <RestaurantContainer
                listOfRestaurants={filteredRestaurant}
            />}
            

        </div>
    );
};


export default Main;