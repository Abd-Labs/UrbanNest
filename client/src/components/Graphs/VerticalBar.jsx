import React from 'react'

const VerticalBar = (props) => {
  const barHeight = `${props.fill * 4}px`; // Adjusted for fill * 16px
  return (
    <div className="group  flex flex-col items-center space-y-2">
    <div className=" hidden rounded-full bg-black px-2 py-1 text-xs text-white ">
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