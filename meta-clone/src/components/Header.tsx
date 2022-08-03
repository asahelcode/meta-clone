import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TiGroupOutline } from 'react-icons/ti'
import { CgMenuGridO } from 'react-icons/cg'
import { BsMessenger } from 'react-icons/bs'
import { FaBell } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

function Header() {
  return (
    <div className='headerContainer flex justify-between w-full bg-white shadow-md'>
      <div className='headerLeft p-2  flex items-center md:flex md:items-center'>
        <img src="/images/facebook.webp" alt="" className='w-10 h-10 rounded-full mr-2' />
        <div className='bg-gray-100 p-2.5 rounded-full flex items-center'>
          <SearchIcon className='text-sm mr-1 text-gray-500' />
          <input type="text" className='border-none bg-transparent outline-0 text-sm' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='headerCenter flex items-center mx-auto'>
        <div className='mr-20 cursor-pointer hover:bg-gray-100 hover:px-10 hover:py-4 hover:rounded-md'>
          <AiOutlineHome className='scale-175  text-gray-500 ' />
        </div>
        <div className='mr-20 cursor-pointer hover:bg-gray-100 hover:px-10 hover:py-4 hover:rounded-md'>
          <PeopleOutlineIcon className='scale-150 text-gray-500 cursor-pointer' />
        </div>
        <div className='mr-20 cursor-pointer hover:bg-gray-100 hover:px-10 hover:py-4 hover:rounded-md'>
          <TiGroupOutline className='scale-175 border  rounded-full border-gray-500 text-gray-500 cursor-pointer' />
        </div>

      </div>
      <div className='headerRight flex items-center mr-5'>
        <button className=' px-6 py-1.5 mr-3 bg-gray-300 rounded-full'>Find Friends</button>
        <div className="flex  mx-1 items-center justify-center bg-gray-300 w-9 h-9 z-0 rounded-full hover:cursor-pointer">
          <CgMenuGridO className='scale-150 z-10' />
        </div>
        <div className="flex  mx-1 items-center justify-center bg-gray-300 w-9 h-9 z-0 rounded-full hover:cursor-pointer">
          <BsMessenger className='scale-120' />
        </div>
        <div className="flex  mx-1 items-center justify-center bg-gray-300 w-9 h-9 z-0 rounded-full relative hover:cursor-pointer">
          <FaBell className='scale-120' />
          <span className='absolute text-xs text-white rounded-full p-1 w-6 h-5 justify-center flex items-center bg-red-600 top-0 left-6'>20</span>
        </div>
        <div className="mx-5 hover:cursor-pointer
        ">
          <img src="/images/20220720_235525.jpg" className="w-12 h-12 object-contain rounded-full border" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
