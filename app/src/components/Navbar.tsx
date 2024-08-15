import React from 'react'
import Logo from '@/public/logo/Headerlogo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const links = [
        {
            page : 'Home',
            path : '/'
        },
        {
            page : 'Events',
            path : '/events'
        },
        {
            page : 'Team',
            path : '/team'
        },
        {
            page : 'Innovate',
            path : '/innovate'
        },
        {
            page : 'MuLearn',
            path : '/mulearn'
        },
        {
            page : 'About',
            path : '/about'
        }

    ]
  return (
    <div className='flex fixed z-[100] top-0 w-screen py-4 px-14 justify-between bg-[#010314] items-center  text-white '>
        <Image src={Logo} alt='Catalyst Logo' width={45} height={45} className='object-cover'/>
        <div className=' gap-12 hidden lg:flex '>
         {
            links.map((link,index)=>{
                return (
                    <div key={index} className='w-fit group'>
                <Link  className="text-base font-light text-white" href={link.path}>{link.page}</Link>
                <div className='scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white '></div>
                    </div>
                    // <Link key={index} href={link.path} className={` md:text-base  font-light hover:font-normal transition-all duration-200 ease-in-out text-center `}>{link.page}</Link>
                )
            })
         }

         {
              
         }
        </div>
        <HiOutlineMenuAlt3 size={30} className='lg:hidden'/>
    </div>
  )
}

export default Navbar