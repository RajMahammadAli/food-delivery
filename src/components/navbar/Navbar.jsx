import React, { useEffect, useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineWallet,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { FaShoppingCart, FaUserFriends } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.photoURL);
        setIsLoggedIn(!isLoggedIn);
        const allUserInfo = { ...user };

        setUserInfo(allUserInfo);
      } else {
        setIsLoggedIn(isLoggedIn);
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="max-w-[1640px] flex justify-between items-center p-4">
      {/*Left Side*/}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu onClick={() => setNav(!nav)} size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full p-1">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/*Search Area*/}
      <div className="flex bg-gray-200 w-[200px] sm:w-[300px] lg:w-[400px] rounded-full p-2">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent focus:outline-none w-full"
          type="text"
          placeholder="Search Your Meal"
        />
      </div>
      {/*Login or Register*/}
      <div>
        <ul className="flex">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <p className="px-1">|</p>
          {isLoggedIn ? (
            <>
              <li onClick={handleSignOut} className="cursor-pointer">
                Sign Out
              </li>
              <p className="px-1">|</p>
              <p className="px-1">{userInfo.displayName}</p>
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={userInfo.photoURL}
                alt=""
              />
            </>
          ) : (
            <>
              <li className="cursor-pointer">
                <Link to="/signin">Sign In</Link>
              </li>
              <p className="px-1">|</p>
              <li className="cursor-pointer">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/*Shopping Cart*/}
      <div>
        <button className="flex bg-black text-white rounded-full p-2">
          <FaShoppingCart size={25} className="mr-4" />
          Cart
        </button>
      </div>
      {/*mobile menu*/}
      {/*overlay*/}
      {nav ? (
        <div className="w-full h-screen z-10 fixed top-0 left-0 bg-black/60"></div>
      ) : (
        ""
      )}

      {/*side drawer*/}
      <div
        className={
          nav
            ? "w-[300px] h-screen fixed top-0 left-0 z-10 bg-white duration-300"
            : "w-[300px] h-screen fixed top-0 left-[-100%] z-10 bg-white duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
        />
        <h1 className="text-3xl p-4">
          Best <span className="font-bold">Eats</span>
        </h1>
        <ul className="flex flex-col p-4">
          <li className="text-gray-700 flex text-xl items-center py-2">
            <TbTruckDelivery size={25} className="mr-4" />
            Orders
          </li>
          <li className="text-gray-700 flex text-xl items-center py-2">
            <MdOutlineFavorite size={25} className="mr-4" />
            Favorite
          </li>
          <li className="text-gray-700 flex text-xl items-center py-2">
            <AiFillTag size={25} className="mr-4" />
            Promotions
          </li>
          <li className="text-gray-700 flex text-xl items-center py-2">
            <MdHelp size={25} className="mr-4" />
            Help
          </li>
          <li className="text-gray-700 flex text-xl items-center py-2">
            <AiOutlineWallet size={25} className="mr-4" />
            Wallet
          </li>
          <li className="text-gray-700 flex text-xl items-center py-2">
            <BsFillCartFill size={25} className="mr-4" />
            Best One
          </li>
          <li className="text-gray-700 flex text-xl items-center py-2">
            <FaUserFriends size={25} className="mr-4" />
            Invite Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
