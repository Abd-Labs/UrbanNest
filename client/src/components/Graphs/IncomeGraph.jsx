import React from "react";
import VerticalBar from "./VerticalBar";
const IncomeGraph = () => {

 
  return (
      <div className="rounded-xl  p-4 "  id="widget">

        <div className="mt-8  flex justify-between  space-x-2">

          <VerticalBar label="Jan" amount="70K" fill="32" />
          <VerticalBar label="Feb" amount="42K" fill="32" />
          <VerticalBar label="Mar" amount="36K" fill="16" />
          <VerticalBar label="Apr" amount="79K" fill="32" />
          <VerticalBar label="May" amount="111K" fill="52" />
          <VerticalBar label="Jun" amount="94K" fill="32" />
          <VerticalBar label="Jul" amount="300K" fill="60" />
          <VerticalBar label="Aug" amount="101K" fill="12" />
          <VerticalBar label="Sept" amount="110K" fill="48" />
          <VerticalBar label="Oct" amount="28K" fill="12" />

         
        </div>
      </div>
  );
};

export default IncomeGraph;
