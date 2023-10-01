import React from 'react'

const DataCard = (props) => {
  return (
    <div>
        <div className="flex items-center  py-2">
                <div className="mr-5">
                  <div className="flex items-center">
                    <div className="text-xl font-bold text-gray-800 mr-2">
                     {props.amount}
                    </div>
                    <div className={`text-sm font-medium ${props.pctColor==='green' ? 'text-green-500' : 'text-red-500'} ` }>{props.percentage}</div>
                  </div>
                  <div className="text-sm text-gray-500">{props.title} </div>
                </div>
                <div
                  className="hidden md:block w-px h-8 bg-gray-200 mr-5"
                  aria-hidden="true"
                />
              </div>
    </div>
  )
}

export default DataCard
