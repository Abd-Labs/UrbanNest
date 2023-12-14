import React from "react";
import PropertyCard from "../Cards/PropertyCard";
import DropDownButton from "../Buttons/DropDownButton";
const PropertySection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white mx-5 rounded-xl my-6 p-3  ">
        <div className="container md:px-5  mx-auto max-w-7x1">
          <div className="  lg:flex  lg:justify-between ">
            <p
              className=" p-5 text-[26px] text-black  font-normal "
              style={{ textShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5)" }}
            >
              Property List
            </p>

           <div className="flex flex-wrap">
           <button className="bg-blue-500 my-4 text-sm mx-1 sm:mx-2  h-9   font-semibold text-white  px-4 border  hover:border-transparent rounded-md ">
              Popular
            </button>
            <button className="bg-gray-100 my-4 text-sm mx-1 sm:mx-2  h-9  text-gray-400 font-semibold   px-4 border  hover:border-transparent rounded-md">
              Recommended
            </button>
            <button className="bg-gray-100 my-4 text-sm mx-1 sm:mx-2  h-9  text-gray-400 font-semibold   px-4 border  hover:border-transparent rounded-md">
              Newest
            </button>

            <DropDownButton />

           </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertySection;
