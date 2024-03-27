import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import LOGO from "../../public/logo.png";

function Header() {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [showMenu, setShowMenu] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the Store by Selector (Redux)\
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  function handleLogin() {
    setLogin(login === "Login" ? "Logout" : "Login");
  }

  function toggleMenu() {
    setShowMenu(!showMenu); // Toggle the state to show/hide the dropdown menu
    // console.log(showMenu);
  }

  return (
    <div className="flex justify-between bg-yellow-200">
      <Link to={"/"}>
        <div className="logo w-32 m-4">
          <img src={LOGO} alt="" />
        </div>
      </Link>

      <div className="menu ">
        <ul className="hidden p-4 m-4  md:flex">
          <li className="px-6 px-2 mt-1 font-semibold hover:text-yellow-500  font-medium hover:text-orange-700">
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-6 px-2 mt-1 font-semibold hover:text-yellow-500  font-medium hover:text-orange-700">
            <Link to="/">Home </Link>
          </li>
          <li className="px-6 px-2 mt-1 font-semibold hover:text-yellow-500  font-medium hover:text-orange-700">
            <Link to="/offer">Offers</Link>
          </li>
          <li className="px-6 px-2 mt-1 font-semibold hover:text-yellow-500  font-medium  hover:text-orange-700">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="px-6 px-2 mt-1 font-semibold hover:text-yellow-500  font-medium hover:text-orange-700">
            <Link to="/aboutUs">{loggedInUser}</Link>
          </li>
          <li className=" px-6 py-2 font-semibold hover:text-yellow-500  font-semibold hover:text-yellow-500 rounded dark:bg-orange-500 dark:text-gray-800 hover:text-yellow-500 hover:bg-orange-700">
            <button className="button" onClick={handleLogin} id="login">
              {login}
            </button>
          </li>
        </ul>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <img
            width="80"
            height="80"
            src="https://img.icons8.com/bubbles/50/hamburger.png"
            alt="hamburger"
          />
        </button>
        {/* Dropdown menu */}
        {showMenu && (
          <ul className="absolute top-20 right-4 bg-yellow-100 shadow-md p-2 font-semibold ">
            <li className="px-2 my-2 font-semibold hover:text-yellow-500 ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 my-2 font-semibold hover:text-yellow-500 ">
              <Link to="/offer">Offers</Link>
            </li>
            <li className="px-2 my-2 font-semibold hover:text-yellow-500 ">
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            <li className="px-2 my-2 font-semibold hover:text-yellow-500 ">
              <Link to="/aboutUs">{loggedInUser}</Link>
            </li>
            <li className="px-2 my-2 font-semibold hover:text-yellow-500 ">
              <button className="button" onClick={handleLogin} id="login">
                {login}
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
