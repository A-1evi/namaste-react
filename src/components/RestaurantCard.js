import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="" data-testid="resCard">
      <img
        className="size-full rounded-md  hover:opacity-25 "
        src={CDN_URL + cloudinaryImageId}
      ></img>

      <h3 className="text-lg font-medium">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <h4>
        {avgRating} ⭐ <span>{sla.deliveryTime} min</span>
      </h4>
    </div>
  );
};

export const ResHOF = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute m-1 bg-orange-400 text-white hover:hidden">
          Quick Delivery
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
