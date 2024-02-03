import React from "react";
import InputFieldSmall from "../components/Fields/InputFieldSmall";
import DropDownButton from "../components/Buttons/DropDownButton";
const CreateProperty = () => {
  return (
    <div>
      <p className="px-8 py-5 text-[26px] text-black  font-normal ">
        Create Property
      </p>
      <div className="p-8 bg-white">
        <form
          method="POST"
          action="https://herotofu.com/start"
          encType="multipart/form-data"
        >
          <InputFieldSmall
            label="Enter Property Name"
            placeholder="Celeste Hotel.."
          />

          <InputFieldSmall
            label="Enter Description"
            placeholder="lorem ipsum.."
            large={true}
          />

         <div className="flex item-center justify-between ">
            
         <DropDownButton width="350px" placeholder="Select an Option" label="Select Property Type" items={[
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Hotel', label: 'Hotel' },
    { value: 'Plaza', label: 'Plaza' },
  ]} />

          <InputFieldSmall label="Enter property Price" placeholder= "300000.." width={96}  />
         </div>

         <InputFieldSmall label="Enter Location" placeholder="Lahore..."/>

         <div className="flex py-4 items-center ">
            <p className="px-2 text-lg text-black">Property Photo </p>
            <p className="px-2 text-green-400">Upload</p>
         </div>
         
          <div className="mb-6">
            <button
              type="submit"
              className="
                        h-10
                        px-5
                        text-indigo-100
                        bg-indigo-700
                        rounded-lg
                        transition-colors
                        duration-150
                        focus:shadow-outline
                        hover:bg-indigo-800
                        "
            >
              Save
            </button>
          </div>
          <div>
            <div className="mt-2 text-gray-700 text-right text-xs">
              by
              <a
                href="https://herotofu.com"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                HeroTofu
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProperty;
