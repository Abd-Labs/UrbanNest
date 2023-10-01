import React from "react";
import Pie from "../Graphs/CircularBar";

const InfoCard = (props) => {
  return (

      <div className=" w-full  lg:w-3/12 xl:w-3/12 px-3  ">
        <div className="relative flex flex-col  min-w-0 break-words bg-white rounded-2xl mb-6 xl:mb-0 shadow-lg">
            
          <div className="flex flex-row pl-5 py-2">

            <div className="flex w-full   justify-between flex-wrap">

              <div className="relative w-full pr-4 py-2 items-end max-w-full flex-grow flex-1  ">
                
                <p className="text-gray-500 my-2 uppercase  text-xs">
                  {props.title}
                </p>
                <span className="font-medium text-lg mt-4 text-black ">{props.number}</span>

              </div>

              <div className=" "><Pie percentage={props.pct} colour={props.color}/></div>

              
            </div>
          </div>  
        </div>
      </div>
   
  );
};

export default InfoCard;
