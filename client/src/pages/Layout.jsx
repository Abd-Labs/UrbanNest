import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Sections/Header'
import Menu from '../components/Sections/Menu'
const Layout = () => {
  return (
    <div className="bg-gray-100 ">
      
    <div><Header/></div>

    <div className="flex">

        <div className=" hidden sm:block top-0 left-0 mb-4 z-40 w-64 min-h-screen  transition-transform -translate-x-full sm:translate-x-0 "> <Menu/></div>
        <div className="w-full"><Outlet/></div>

    </div>
      
    </div>
  )
}

export default Layout