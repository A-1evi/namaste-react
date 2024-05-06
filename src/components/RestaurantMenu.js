import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryList from "./CategoryList";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  
  const [showIndex ,setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImage, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categoryList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const catogeries = categoryList.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const handleCategoryClick = (index) =>{
    setShowIndex(showIndex === index ? null : index);
  }

  return (
    <div className=" w-6/12 text-center my-10 justify-center mx-auto shadow-lg">
      <h1 className="  mx-2 my-2 font-bold text-3xl text-left">{name}</h1>
      <h2 className=" mx-2 text-left text-lg font-semibold"> {avgRating}⭐ </h2>
      <h3 className=" mx-2 text-left text-lg font-semibold">
        {cuisines.join(", ")}
      </h3>
      <h4 className=" mx-2 text-left text-lg font-semibol">
        {costForTwoMessage}
      </h4>

      {catogeries.map((category, index) => (
        <CategoryList
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex}
          onClick = {() => handleCategoryClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
