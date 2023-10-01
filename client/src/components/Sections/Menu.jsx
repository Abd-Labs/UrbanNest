import React from "react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import MenuItemCard from "../Cards/MenuItemCard";
const Menu = () => {
  return (
    <div className="h-full px-3 py-4 mt-1 overflow-y-auto bg-white dark:bg-gray-800  ">
      <ul className="space-y-2 font-medium">
        <li className="hover:bg-blue-500 hover:text-white p-2 rounded-2xl">
          <MenuItemCard
            title="DashBoard"
            icon={
              <svg
                className="flex-shrink-0 w-5 h-5 mr-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
            }
            url="/"
          />
        </li>
        <li className="hover:bg-blue-500  p-2 rounded-2xl">
          <MenuItemCard
            title="Properties"
            icon={
              <TbBuildingSkyscraper className="flex-shrink-0 w-7 h-7 ml-[-4px] text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            }
            url="/Properties"

          />
        </li>

        <li className="hover:bg-blue-500 p-2 rounded-2xl">
          <MenuItemCard
            title="Agent"
            icon={
              <svg
                className="flex-shrink-0 w-5 h-5 mr-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
            }
            url="/"

          />
        </li>

        <li className="hover:bg-blue-500  p-2 rounded-2xl">
          <MenuItemCard
            title="Review"
            icon={
              <AiOutlineStar className="flex-shrink-0 w-6 h-6 ml-[-2px]  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            }
          />
        </li>
        <li className="hover:bg-blue-500  p-2 rounded-2xl">
          <MenuItemCard
            title="Messages"
            icon={
              <BiMessageDetail className="flex-shrink-0 w-6 h-6 mt-1  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            }
            url="/"

          />
        </li>

        <li className="hover:bg-blue-500 p-2 rounded-2xl">
          <MenuItemCard
            title="Products"
            icon={
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
            }
            url="/"

          />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
