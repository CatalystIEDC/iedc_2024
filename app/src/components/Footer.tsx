import React from 'react'
import { spaceGrotesk } from '../utils/fonts'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='w-screen flex flex-col bg-[#0B0B0B] text-white pt-[86px] pb-10   px-20 gap-5 '>
        <div className='flex flex-row  justify-end  gap-7'>
          <div className='flex flex-col justify-center  gap-2'>
            <p className={`text-sm ${spaceGrotesk.className}`}>Home</p>
            <p className={`text-sm ${spaceGrotesk.className}`}>Events</p>
            <p className={`text-sm ${spaceGrotesk.className}`}>Team</p> 
            <p className={`text-sm ${spaceGrotesk.className}`}>Mulearn</p>
            <p className={`text-sm ${spaceGrotesk.className}`}>About</p>
          </div>
          <br></br>
          <div className='flex flex-col  justify-center gap-2'>
            <p className={`text-sm ${spaceGrotesk.className}`}>Instagram</p>
            <p className={`text-sm ${spaceGrotesk.className}`}>Facebook</p>
            <p className={`text-sm ${spaceGrotesk.className}`}>Linkedin</p> 
          </div>
        </div>
        <div className='flex flex-row justify-between '>
          <p className={`text-xs ${spaceGrotesk.className}`}>2024-Catalyst IEDC. All rights reserved</p>
          <p className={`text-xs ${spaceGrotesk.className}`}>All rights reserved</p>
        </div>
        <div className='relative -right-11'>
          <Image
            src="/footerlines.svg"
            width={900}
            className='absolute bottom-0 -right-11'
            height={200}
            alt="footerlines"
          />
        </div>
      </div>
    </>
  )
}

export default Footer
