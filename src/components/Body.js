import RestaurantCard, { ResHOF } from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [filterdRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const FastDelivery = ResHOF(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  if (!filterdRestaurant) {
    <Shimmer />;
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7605545&lng=83.3731675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <>
        <h1>you are offline</h1>
      </>
    );
  //conditonal redering
  // if (!filterdRestaurant) {
  //   // `filterdRestaurant` is not yet defined, so you might want to render a loading indicator or return null
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="body">
      <div className="filter flex items-center ">
        <div className="p-3 mx-4">
          <input
            type="text"
            data-testid="searchInput"
            className="py-1 rounded-sm border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className="mx-3 px-3 py-1 bg-blue-300 rounded-md border-solid  hover:bg-blue-500"
            onClick={() => {
              const filteredRes =
                listOfRestaurants &&
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-2  py-1 rounded-md m-2 bg-gray-200 "
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container flex flex-wrap ">
        {filterdRestaurant &&
          filterdRestaurant.map((restaurant) => (
            <Link
              className=" m-5  rounded-md w-48 hover:scale-95 content-between"
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.sla.deliveryTime <= 30 ? (
                <FastDelivery resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
