import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext);

   const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between p-2 shadow-lg bg-yellow-100 items-center ">
      <div className="logo-container">
        <img className="w-24 " src={LOGO_URL}></img>
      </div>
      <div className="">
        <ul className="flex px-4  mx-4">
          <li  className="px-3">Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3 font-bold text-lg">
            <Link to="/cart">Cart({cartItems.length}) </Link>
          </li>

          <Link className="px-3" to="/login">
            <button
              onClick={() => {
                loginBtn === "login"
                  ? setLoginBtn("logout")
                  : setLoginBtn("login");
              }}
            >
              {loginBtn}
            </button>

          </Link>
          <li className="px-3">
            <Link to="/">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
