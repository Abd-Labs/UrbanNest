import React from "react";
import PropertyCard from "../Cards/PropertyCard";
import DropDownButton from "../Buttons/DropDownButton";
import SimpleButton from "../Buttons/SimpleButton";

const PropertySection = ({ data, isloading }) => {
  if (isloading) {
    return (
      <div className="md:flex flex-wrap bg-red-500">
        {[1, 2, 3].map((index) => (
          <div
            className="flex w-full  md:w-1/3 items-center justify-center"
          >
            <div className="w-full ml-10 my-2 ">
              <div className=" max-w-sm rounded  overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-300" />
                <div className="px-6 py-4">
                  <div className="h-6 bg-gray-300 mb-2" />
                  <div className="h-4 bg-gray-300 w-2/3" />
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div className="h-4 bg-gray-300 w-1/4 mb-2" />
                  <div className="h-4 bg-gray-300 w-1/2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
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

                <div className="mx-4">
                  <DropDownButton
                    width="150px"
                    placeholder="More Recent"
                    items={[
                      { value: "More Recent", label: "More Recent" },
                      { value: "Old", label: "Old" },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap m-4">
              {data.slice(0, 3).map((item) => (
                <PropertyCard key={item._id} property={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default PropertySection;
