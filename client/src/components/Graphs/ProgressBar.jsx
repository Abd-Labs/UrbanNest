import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className=" pt-1  ">
    <div className="flex mb-2 items-center justify-between">
      <div>
        <span className="text-sm  py-1 px-2 uppercase  text-black">
          {props.label}
        </span>
      </div>
      <div className="text-right">
        <span className="text-md text-black  ">
          {props.progress}
        </span>
      </div>
    </div>
    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
      <div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${props.color} `} style={{width: props.progress }}></div>
    </div>
  </div>
  )
}

export default ProgressBar
