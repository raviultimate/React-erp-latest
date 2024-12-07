import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuItems = ({ item, openSideBar, showSubMenu, setShowIndex }) => {
  return (
    <>
      <li
        className={`p-2 text-sm mt-2 flex items-center gap-x-4 cursor-pointer text-font-color hover:bg-woodsmoke hover:text-white rounded-lg ${
          item.submenu && "justify-between"
        }`}
      >
        <span className="text-2xl text-font-color float-left block">
          {item?.icon && item.icon}
        </span>
        <span
          onClick={(event) => {
            item.submenu && setShowIndex();
          }}
          className={`text-base flex-1 duration-500 ${
            !openSideBar && "hidden"
          }`}
        >
          {item.submenu ? (
            item.title
          ) : (
            <Link to={item?.page}>{item?.title}</Link>
          )}
        </span>
        {item?.submenu && (
          <BsChevronDown
            className={`${showSubMenu && "rotate-180"}`}
            onClick={() => setShowIndex()}
          />
        )}
      </li>
      {showSubMenu &&
        openSideBar &&
        item.submenuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="p-2 duration-500 ml-4 text-sm mt-2 flex items-center gap-x-4 cursor-pointer text-font-color hover:bg-woodsmoke hover:text-white rounded-lg"
            >
              <span className="text-xl text-font-color float-left block">
                {item?.icon && item.icon}
              </span>
              <span>
                <Link to={item?.page}>{item?.title}</Link>
              </span>
            </li>
          );
        })}
    </>
  );
};

export default MenuItems;
