import React from "react";
import { Link } from "react-router-dom";

const MenuItemCard = (props) => {
  return (
    <div>
          <Link
        to={props.url}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
      >

       {
        props.icon
       }
        <span className="ml-3 text-gray-500 text-[18px] ">
          <p>{props.title}</p>
        </span>
      </Link>
    </div>
  );
};

export default MenuItemCard;
