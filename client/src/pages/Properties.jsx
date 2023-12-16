import React from "react";
import SimpleButton from "../components/Buttons/SimpleButton";
import { useNavigate } from "react-router-dom";




const Properties = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "properties/create" route
    navigate("/properties/create"); 
  };

  return (
    <div className="p-2 ">
      <div className="flex justify-between items-center">
        <p className=" text-black text-xl">All Properties</p>
        <SimpleButton label="Add Property" onclick={handleClick} icon = {` <svg
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
          </svg>`} />
      </div>
    </div>
  );
};

export default Properties;
