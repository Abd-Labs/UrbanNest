import React from 'react'
import IncomeGraph from '../Graphs/IncomeGraph'
import DataCard from '../Cards/DataCard'
const AnalyticsWidget = () => {
  

  return (
    <>
 
      <div className="max-w-xl md:max-w-4xl lg:max-w-[780px] lg:min-w-[780px]  px-2 py-4  sm:px-4 ">

          <div className="flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-2xl border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100 flex items-center">
              <h2 className=' text-[26px] text-black font-normal '  style={{textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5)'}}>Analytics</h2>
            </header>


          <div className="px-5 py-1 ">
            <div className="flex flex-wrap justify-between">
              {/* Unique Visitors */}
                
                <DataCard amount="24.7K" percentage="+49%" title="Unique Visitors" pctColor="green"/>

              {/* Total Pageviews */}
              <DataCard amount="56.9K" percentage="+9%" title="Total PageViews" pctColor="green"/>
              {/* Bounce Rate */}
              <DataCard amount="54%" percentage="-9%" title="Bounce Rate" pctColor="red"/>
              {/* Visit Duration*/}
              <DataCard amount="2m 56s" percentage="+3%" title="Visit Durations" pctColor="green"/>
            </div>
          </div>
          <IncomeGraph/>
        </div>

     
      </div>
      

  </>
  

      
  )
}

export default AnalyticsWidget

