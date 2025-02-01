import React from "react";
import amazonLogo from "../../../assets/amazon_logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="header-container hidden sm:block">
        <div className="bg-[#1a1f25] flex justify-between items-center px-5 py-3">
          <img src={amazonLogo} alt="" className="logo" width={"100px"} />
          <div className="flex justify-center align-middle w-full px-10">
            <input
              type="text"
              name=""
              id=""
              className="w-full bg-white rounded-l-sm px-3"
            />
            <span className="bg-[#fec76f] px-4 text-2xl py-2 cursor-pointer rounded-r-sm">
              <IoSearchSharp />
            </span>
          </div>
          <nav className="w-full sm:w-xl ">
            <ul className="flex justify-between items-center">
              <li className="text-white text-left cursor-pointer hover:underline">
                <p className="text-[12px]">Hello, Sign in</p>
                <h6 className="font-bold text-[14px]">Account & Lists</h6>
              </li>
              <li className="text-white text-left cursor-pointer hover:underline">
                <p className="text-[12px]">Returns</p>
                <h6 className="font-bold text-[14px]">& Orders</h6>
              </li>
              <li className="font-bold text-white flex cursor-pointer">
                <span className="">
                  <p className="text-sm/3 text-center">0</p>
                  <BiCart className="text-2xl" />
                </span>
                <span className="flex justify-center items-end">
                  <h6 className="text-[14px]">Cart</h6>
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bottom-section bg-[#232f3f] h-[45px] flex justify-start gap-5 px-4 overflow-x-scroll scroll-smooth md:overflow-x-hidden max-w-full overflow-y-hidden">
          <div className="hamburger-menu flex items-center">
            <h6 className="text-[14px] font-bold text-white">All</h6>
          </div>
          <div className="category-list flex items-center">
            <ul className=" text-white gap-5 font-bold flex items-center justify-center whitespace-nowrap">
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px] ">Deals</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Amazon Basics</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Livestreams</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Best Sellers</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Music</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Video</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Books</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">Home</h6>
              </li>
              <li className="cursor-pointer hover:underline">
                <h6 className="font-bold text-[14px]">New Releases</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
