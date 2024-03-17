import React from "react";
import InfoCard from "../components/Cards/InfoCard";
import AnalysticsWidget from "../components/Sections/AnalyticsWidget";
import RefralSection from "../components/Sections/RefralSection";
import PropertySection from "../components/Sections/PropertySection";
import usePropertyData from '../CustomHooks/usePropertyData'; // Import the custom hook

const DashBoard = () => {

   const { propertiesData, loading } = usePropertyData(); // Use the custom hook

  return (
     <div className="" >
      
         <div><p className=" p-5 text-[26px] text-black  font-normal " style={{textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5)'}}>DashBoard</p></div>


          <div className=" mx-auto w-full ">
             <div>
                <div className="flex flex-wrap ">

                     <InfoCard title="Properties for Sale" number="684"  color='blue' pct="80" />
                     <InfoCard title="Properties for Rent" number="546" color='orange' pct="60"  />
                     <InfoCard title="Total Customers" number="5732"  color='#37b039' pct="45" />
                     <InfoCard title="Total  City" number="684"  color='#f60cfa' pct="75" />

                </div>
             </div>

             <div className="lg:flex  ">
                  <AnalysticsWidget/>
                  <RefralSection/>
             </div>

             <PropertySection data={propertiesData} isloading={loading}/>

          </div>

       

     </div> 
  );
};

export default DashBoard;
