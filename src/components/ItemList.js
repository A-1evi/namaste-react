import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="my-4">
      {items.map((item) => (
        <div
          className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between "
          key={item.card.info.id}
        >
          <div className="w-9/12 m-2 p-2 ">
            <span className="text-lg font-bold block">
              {item.card.info.name}
            </span>
            <span className="text-lg">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" relative w-3/12 m-2 p-2  ">
            <div className="absolute -bottom-3 left-11 ">
              <button
                className="px-3 py-1 m-2 bg-black text-white shadow-lg rounded-lg text-lg font-semibold  "
                onClick={() => handleClick(item)}
              >
                ADD
              </button>
            </div>
            {item.card.info.imageId ? (
              <img
                className="w-40 h-[135px] rounded-xl"
                src={CDN_URL + item.card.info.imageId}
                alt=""
              ></img>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export const deleteItemList = (ItemList) => {
  return (props) => {
    return (
      <div>
        <ItemList {...props} />
        {props.items.length === 0 ? (
          ""
        ) : (
          <button className="p-2 m-2 bg-orange-400 text-white">Delete</button>
        )}
      </div>
    );
  };
};

export default ItemList;
