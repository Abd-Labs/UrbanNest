import React from "react";

const SimpleButton = ({label , icon , onclick }) => {
  return (
    <div>
      <button className="bg-blue-500 my-4 text-sm mx-1 sm:mx-2  h-9   font-semibold text-white  px-4 border  hover:border-transparent rounded-md " onClick={onclick}>
      <div className="flex items-center">
             <span dangerouslySetInnerHTML={{ __html: icon }} />
          <p className="mx-2">{label}</p>
          </div>
      </button>
    </div>
  );
};

export default SimpleButton;
