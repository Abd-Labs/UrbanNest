import React, { useState } from "react";
import InputField from "../components/Fields/InputField";

import DropDownButton from "../components/Buttons/DropDownButton";
import axios from "axios";
import generateApiUrl from "../components/utils/generateApiUrl";

const CreateProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    price: "",
    location: "",
    photos: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectType = (selectedType) => {
    setFormData({
      ...formData,
      type: selectedType
    });
  };
  
  const handleImageChange = (e) => {
    // Convert FileList to array
    const imagesArray = Array.from(e.target.files);
    setFormData({
      ...formData,
      photos: imagesArray,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = generateApiUrl('/api/properties');

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("PropertyType", formData.type);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("location", formData.location);

    // Append images to the FormData
    formData.photos.forEach((image) => {
      formDataToSend.append("photos", image);
    });

    try {
      const response = await axios.post(url, formDataToSend, {
        withCredentials: true,
      });

      if (response.status === 201) {
        console.log("Property created successfully");
      } else {
        console.error("Error creating property");
      }
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <div>
      <p className="px-8 py-5 text-[26px] text-black  font-normal ">
        Create Property
      </p>
      <div className="p-8 bg-white">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <InputField
            label="Enter Property Name"
            placeholder="Celeste Hotel.."
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />

          <InputField
            label="Enter Description"
            placeholder="lorem ipsum.."
            large={true}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <div className="flex item-center justify-between">
            <DropDownButton
              width="350px"
              placeholder="Select an Option"
              label="Select Property Type"
              items={[
                { value: "Apartment", label: "Apartment" },
                { value: "Hotel", label: "Hotel" },
                { value: "Plaza", label: "Plaza" },
                { value: "House", label: "House" },
              ]}
              name="type"
              value={formData.type}
              onChange={handleSelectType} // Pass the onChange handler
            />

            <InputField
              label="Enter property Price"
              placeholder="300000.."
              width={96}
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <InputField
            label="Enter Location"
            placeholder="Lahore..."
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />

          <div className="flex py-4 items-center">
            <p className="px-2 text-lg text-black">Property Photo </p>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
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
        </form>
      </div>
    </div>
  );
};

export default CreateProperty;
