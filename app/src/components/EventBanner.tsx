import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Marquee from "react-fast-marquee";


const EventBanner = ({event}:{event:{name:string,details:string}}) => {
  return (
    <Link href={'/'} className={ ` w-screen fixed z-20 overflow-hidden py-1 bg-gradient-to-r mt-[88px] from-[#FFFFFF00] from-0% via-[#FFFFFF] via-50% to-[#FFFFFF00] to-100% flex items-center hover:bg-white hover:py-2 transition-all ease-in-out duration-200 backdrop-blur-2xl `}>
      {/* <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='w-full'></Image> */}
      
        <Marquee autoFill={true}  speed={90} pauseOnHover={true}>
        <div  className='text-black font-medium text-base mx-5'>{event.details}</div>
        </Marquee>
    </Link>
  )
}

export default EventBanner