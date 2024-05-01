import React from 'react'
import Logo from '@/public/Logo/Header logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import {spaceGrotesk} from '@/app/src/utils/fonts'
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
    <div className='flex sticky z-10 top-0 w-full py-4 px-20 justify-between items-center bg-[#0B0B0B] text-white '>
        <Image src={Logo} alt='Catalyst Logo' width={45} height={45} className='object-cover'/>
        <div className=' gap-12 hidden lg:flex '>
         {
            links.map((link,index)=>{
                return (
                    <Link href={link.path} className={`${spaceGrotesk.className} md:text-base lg:text- font-normal text-center `}>{link.page}</Link>
                )
            })
         }
        </div>
        <HiOutlineMenuAlt3 size={30} className='lg:hidden'/>
    </div>
  )
}

export default Navbar