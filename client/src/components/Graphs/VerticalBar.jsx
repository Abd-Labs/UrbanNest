import React from 'react'

const VerticalBar = (props) => {
  const barHeight = `${props.fill * 4}px`; // Adjusted for fill * 16px
  return (
    <div className="group relative flex flex-col items-center space-y-2">
    <div className=" hidden absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block">
      {props.amount}
    </div>
    <div className="flex h-64 w-3 items-end rounded-full bg-slate-200 ">
      <div className={`w-3 rounded-full bg-blue-700`} style={{ height: barHeight }} />
    </div>
    <div className="text-xs text-gray-500">{props.label}</div>
  </div>
  )
}

export default VerticalBar