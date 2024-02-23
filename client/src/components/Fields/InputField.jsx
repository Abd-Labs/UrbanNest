import React from "react";

const InputFieldSmall = ({ label, placeholder, width, large, name, value, onChange }) => {
  const inputStyle = `
    block
    ${width ? `w-${width}` : 'w-full'} 
    
    border-gray-300
    rounded-md
    text-black
    shadow-sm
    focus:border-indigo-300
    focus:ring
    focus:ring-indigo-200
    focus:ring-opacity-50
  `;

  const textareaStyle = `
    block
    ${width ? `w-${width}` : 'w-full'} 
    mt-1
    text-black
    border-gray-300
    rounded-md
    shadow-sm
    focus:border-indigo-300
    focus:ring
    focus:ring-indigo-200
    focus:ring-opacity-50
  `;

  return (
    <div className="">
      <label className="block mb-6 pt-4">
        <span className="text-gray-700 mb-2 ">{label}</span>
        {large ? (
          <textarea
            name={name}
            className={textareaStyle}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={4} // Set the number of rows for multiline
          />
        ) : (
          <input
            name={name}
            type="text"
            className={inputStyle}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </label>
    </div>
  );
};

export default InputFieldSmall;
