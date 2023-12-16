import React, { useState } from "react";

const DropDownField = ({ label, options, onSelect, width, height }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="">
         <div className="text-gray-700 py-2 ">{label}</div>
      <button
        type="button" 
        onClick={toggleDropdown}
        className={` px-4 border border-gray-300 rounded-md ${
          isDropdownOpen ? "bg-gray-100" : ""
        }`}
        style={{ width, height }}
      >
        {selectedOption ? selectedOption.label : "Select an option"}
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-full">
          <div className="bg-white border border-gray-300 rounded-md shadow-md">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownField;
