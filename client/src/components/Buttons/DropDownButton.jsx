import React, { useState } from 'react';

const DropDownButton = ({ width, height, label, items, placeholder,onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange && onChange(item.value); // Assuming `onChange` is passed as a prop

  };

  return (
    <div className="w-full" style={{ width }}>
      <div
        className="relative mt-1"
        style={{
          width,
        }}
      >


       <label className="block text-xs font-medium text-gray-700">{label}</label>

        <div
          className="flex items-center justify-center border rounded-md my-4 px-3 py-1 cursor-pointer"
          onClick={handleToggle}
        >
          <div className="flex-grow">{selectedItem ? selectedItem.label : placeholder} </div>
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full border rounded-md shadow-lg bg-white">
            {items.map((item) => (
              <div
                key={item.value}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default DropDownButton