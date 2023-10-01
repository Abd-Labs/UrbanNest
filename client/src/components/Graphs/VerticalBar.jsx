import React from 'react'

const VerticalBar = (props) => {
  return (
    <div className="group  flex flex-col items-center space-y-2">
    <div className=" hidden rounded-full bg-black px-2 py-1 text-xs text-white group-hover:block">
      {props.amount}
    </div>
    <div className="flex h-64 w-3 items-end rounded-full bg-slate-200 ">
      <div className={`h-${props.fill} w-3 rounded-full bg-blue-700`} />
    </div>
    <div className="text-xs text-gray-500">{props.label}</div>
  </div>
  )
}

export default VerticalBar
