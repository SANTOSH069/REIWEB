import React from 'react';
import Logo from '@/app/public/images/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';

interface Props {
    openNav: () => void;

}

const Navbar = ({openNav}:Props) => {
  return (
    <div className='h-[12vh] shadow-md'>
      <div className='flex items-center justify-between h-[100%] w-[90%] mx-auto'>
     
      <Image src={Logo} alt="logo" width={80} height={80}/>
      <ul className='hidden lg:flex  items-center space-x-16'>
        <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200 '>
            <Link href="/">Home</Link>
        </li>
        <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200 '>
            <Link href="/">About Us</Link>
        </li>
        <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200 '>
            <Link href="/">Events</Link>
        </li>
        <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200 '>
            <Link href="/">Team</Link>
        </li>
        <li className='text-[18px] font-medium uppercase hover:text-red-600 transition-all duration-200 '>
            <Link href="/">Contact Us</Link>
        </li>
      </ul>
      <div className='flex items-center space-x-3'>
        <button className='px-6 py-2 sm:px-8 sm:py-2.5 transition-all duration-300 text-white hover:text-black bg-black hover:bg-white font-semibold'>Sign In
        </button>
        <BiMenu onClick={openNav} className='w-[2rem] h-[2rem] text-red-800 lg:hidden'/>
      </div>
      </div>
    </div>
  )
}

export default Navbar
