import React from 'react'

const PropertyCard = ({ property }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-white rounded-lg">
        <img
          className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
          src={property.photos[0]} // Assuming the first photo URL is used as the image source
          alt={property.title} // Use property title as alt text
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {property.PropertyType} {/* Display property type as subtitle */}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 overflow-hidden line-clamp-1">
          {property.title} {/* Display property title */}
        </h2>
        <p className="leading-relaxed text-base overflow-hidden line-clamp-2">
          {property.description}
        </p>
      </div>
    </div>
  )
}

export default PropertyCard
