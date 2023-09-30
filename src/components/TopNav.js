import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import {FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'

const TopNav = () => {
    const [sideNav, SetSideNav] = useState(false)

  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center gap-1'>
        <div className='cursor-pointer'>
            <AiOutlineMenu onClick={()=> SetSideNav(!sideNav)} size={25}/>
        </div>
        <h1 className='text-xl sm:text-3xl lg:text-4xl px-2 pb-1'>
            Champa
            <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-orange-700 text-white rounded-full text-bold py-2 px-4'>Free</p>
            <p className='text-bold p-2'>Delivery</p>
        </div>
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input className='bg-transparent p-2 w-full focus:outline-none'
        type='text'
        placeholder='search meals' />
      </div>
      <button className='bg-orange-700 text-white hidden md:flex items-center py-2 px-4 rounded-full border-2 hover:text-orange-700 border-orange-700 hover:bg-white hover:border-2 hover:border-orange-700'>
       <BsFillCartFill size={17} /> Cart
      </button>
      {
        sideNav ? (
            <div onClick={() => SetSideNav(!SetSideNav)} className='bg-black/60 w-full fixed top-0 h-screen z-10 left-0'></div>
        ): ('')
      }
    
    <div className={
        sideNav
    ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
    : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
}
  >
    <AiOutlineClose onClick={() => SetSideNav(!sideNav)} size={25}
    className='absolute right-4 top-6 cursor-pointer'
    />
    <h2 className='text-2xl p-4'>Champa<span className='text-orange-700 font-bold'>Eats</span></h2>
    <nav>
        <ul className='flex flex-col p-4 text-gray-900'>
            <li className='py-4 flex items-center text-lg font-medium'>
                <BsPerson size={25} className='mr-3 text-white bg-black rounded-full' />
                My Account
            </li>
            <li className='py-4 flex items-center text-lg font-medium'>
                <TbTruckReturn size={25} className='mr-3 text-white bg-black rounded-full' />
                Delivery
            </li>
            <li className='py-4 flex items-center text-lg font-medium'>
                <MdOutlineFavorite size={25} className='mr-3 text-white bg-black rounded-full' />
                My Favourite
            </li>
            <li className='py-4 flex items-center text-lg font-medium'>
                <FaGoogleWallet size={25} className='mr-3 text-white bg-black rounded-full' />
                My Wallet
            </li>
            <li className='py-4 flex items-center text-lg font-medium'>
                <MdHelp size={25} className='mr-3 text-white bg-black rounded-full' />
                Help
            </li>
        </ul>
    </nav>
  </div>
  </div>
);
};
export default TopNav
