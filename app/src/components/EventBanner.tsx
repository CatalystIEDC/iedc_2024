import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";

const EventBanner = ({event}:{event:{name:string,details:string}}) => {
  return (
    <div className='w-full py-1 bg-gradient-to-r from-[#FFFFFF00] from-0% via-[#FFFFFF] via-50% to-[#FFFFFF00] to-100% flex items-center hover:py-2 transition-all ease-in-out duration-150 '>
        <Marquee autoFill={true}  speed={90}>
        <Link href={'/'} className='text-black font-medium text-base mx-5'>{event.details}</Link>
        </Marquee>
    </div>
  )
}

export default EventBanner