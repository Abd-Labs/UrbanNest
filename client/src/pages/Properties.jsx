import React from "react";
import SimpleButton from "../components/Buttons/SimpleButton";
import { useNavigate } from "react-router-dom";
import PropertyCard from "../components/Cards/PropertyCard";
import usePropertyData from "../CustomHooks/usePropertyData"; // Import the custom hook

const Properties = () => {
  const navigate = useNavigate();
  const { propertiesData, loading } = usePropertyData(); // Use the custom hook

  const handleClick = () => {
    // Navigate to the "properties/create" route
    navigate("/properties/create");
  };

  return (
    <>
      <div className="p-2 ">
        <div className="flex justify-between items-center">
          <p className="text-black text-xl">All Properties</p>
          <SimpleButton
            label="Add Property"
            onclick={handleClick}
            icon={` <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>`}
          />
        </div>

        {/* Conditionally render skeleton cards if loading is true */}
        {loading && (
          <div className="md:flex flex-wrap ">
            {[1, 2, 3,4,5,6].map((index) => (
              <div
                key={index}
                className="flex w-full md:w-1/3 items-center justify-center"
              >
                <div className="w-full ml-10 my-2 ">
                  <div className="max-w-lg rounded overflow-hidden shadow-lg animate-pulse">
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
        )}

        {/* Render actual property cards if loading is false */}
        {!loading && (
          <div className="flex flex-wrap m-4 bg-white">
            {propertiesData.map((item) => (
              <PropertyCard key={item._id} property={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Properties;
