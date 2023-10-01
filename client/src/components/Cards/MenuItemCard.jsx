import React from "react";

const MenuItemCard = (props) => {
  return (
    <div>
      <a
        href={props.url}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
      >
       {
        props.icon
       }
        <span className="ml-3 text-gray-500 text-[18px] ">
          <p>{props.title}</p>
        </span>
      </a>
    </div>
  );
};

export default MenuItemCard;
