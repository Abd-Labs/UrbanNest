import React from "react";
import PropertyCard from "../Cards/PropertyCard";
import DropDownButton from "../Buttons/DropDownButton";
import SimpleButton from "../Buttons/SimpleButton";


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
           
           <SimpleButton label="Popular" />
           <SimpleButton label="Recommended" />
           <SimpleButton label="Newest" />

           <div className="mx-4"><DropDownButton width="150px" placeholder="More Recent" items={[
    { value: 'More Recent', label: 'More Recent' },
    { value: 'Old', label: 'Old' },
  ]} /></div>

           </div>
          </div>

          <div className="flex flex-wrap m-4">
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
