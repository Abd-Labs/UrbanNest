import React from 'react'
import { useState , useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Menu from './Menu'

const Header = () => {

  const [toggle,setToggle ] = useState(false);

    const updateToggleState = () => {
      if (window.innerWidth >= 640) {
        setToggle(false); // Set 'toggle' to false for screen size >= sm
      }
    };

    // Listen for window resize events to update 'toggle' state
    useEffect(() => {
      window.addEventListener('resize', updateToggleState);
      return () => {
        // Remove the event listener when the component unmounts
        window.removeEventListener('resize', updateToggleState);
      };
    }, []);


  return (
    <div className=' h-[80px] bg-white py-3 px-4 flex items-center '>

      <div className='hidden sm:block py-2 px-2'><p className='font-black text-xl italic text-blue-700'>UrbanNest</p></div>

      {/* Hamburger Button */}

        <div className="pt-1  text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
        onClick={()=>{
          setToggle(!toggle)
        }}
       >
        <AiOutlineMenu
         className="w-[25px] h-[25px]"
         
        />
       </div>

       <div></div>

       {/* Menu for Mobile Screen*/}
       <div  className={`absolute top-[80px] left-0 z-40 w-60 h-screen ${toggle ? 'block' : 'hidden'} sm:hidden`} > <Menu/></div>

       {/* SearchBar */}
       <input type="text" placeholder="Search Property, Customer etc" className="input input-bordered w-full sm:w-[50%] max-w-sm text-black  hidden sm:block bg-gray-200 h-[40px] ml-[15%] " />

       {/* div for bell icon and Avatar */}
       <div className='flex sm:ml-auto ml-auto mx-4 '>
         {/* bell Icon */}
       <button className="inline-block relative  ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
        </button>

        {/* Avatar */}
        <div className="flex -space-x-2 overflow-hidden">
        <img className="inline-block h-10 w-10 rounded-full ring-2 ml-5   ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        </div>

       </div>

       <div className='mx-2 hidden lg:block'>
        <div className='text-md text-black'>Hawkins Maru</div>
        <div className='text-md'>Company Manager</div>
      </div>

    </div>
  )
}

export default Header
