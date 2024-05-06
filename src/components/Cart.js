import ItemList from "./ItemList";
import { deleteItemList } from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearItem = () =>{
    dispatch(clearCart())
  }

  const ItemListWithDelete = deleteItemList(ItemList);

  return (
    <div className="  text-center p-5 m-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto p-2">
        <button className="bg-blue-900 text-white p-2 m-2" onClick={handleClearItem} >Clear Cart</button>

        {cartItems.length === 0 && <h1 className="p-2 m-2">Cart is empty. Add some items</h1>}
        <ItemListWithDelete items= {cartItems} />
      </div>
    </div>
  );
};

export default Cart;
