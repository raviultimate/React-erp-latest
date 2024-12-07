import { BsArrowLeftSquare, BsSearch, BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";

import { sideMenuItems as menu } from "../utils/store";
import MenuItems from "./MenuItems";
import Header from "./Header/Header";
import Dashboard from "./Pages/Dashboard";

const Body = () => {
  const [openSideBar, setopenSideBar] = useState(true);
  const [showIndex, setShowIndex] = useState(null);

  return (
    <div className="flex">
      <div
        className={`bg-blue-200 relative h-screen p-5 pt-6 duration-500 ${
          !openSideBar ? "w-16" : "w-72"
        }`}
      >
        <BsArrowLeftSquare
          className={`text-xl rounded-lg text-font-color absolute -right-3 duration-500 cursor-pointer ${
            !openSideBar && "rotate-180"
          }`}
          onClick={() => {
            setopenSideBar(!openSideBar);
          }}
        />
        <div
          className={`flex bg-gray-100 items-center mt-12 duration-500 rounded-lg ${
            !openSideBar ? "px-2" : "px-4"
          }`}
        >
          <BsSearch
            className={`text-font-color text-lg block float-left cursor-pointer duration-200 ${
              openSideBar && "mr-2"
            }`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`bg-transparent border-transparent text-base text-font-color w-full py-1 ${
              !openSideBar && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {menu.map((item, index) => {
            return (
              <MenuItems
                key={item.id}
                item={item}
                openSideBar={openSideBar}
                showSubMenu={index == showIndex ? true : false}
                setShowIndex={() => {
                  index === showIndex
                    ? setShowIndex(null)
                    : setShowIndex(index);
                }}
              />
            );
          })}
        </ul>
      </div>
      <div className=" bg-gray-100 w-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
