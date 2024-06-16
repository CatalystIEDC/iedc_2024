import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='w-screen footer-gradient-2  gradient-border-top flex  flex-col  text-white pt-[86px] pb-10   px-20 gap-5 '>
        <div className='flex flex-row  justify-end  gap-7'>
          <div className='flex flex-col justify-center  gap-2'>
            <p className={`text-sm`}>Home</p>
            <p className={`text-sm`}>Events</p>
            <p className={`text-sm`}>Team</p> 
            <p className={`text-sm`}>Mulearn</p>
            <p className={`text-sm`}>About</p>
          </div>
          <br></br>
          <div className='flex flex-col  justify-center gap-2'>
            <p className={`text-sm `}>Instagram</p>
            <p className={`text-sm `}>Facebook</p>
            <p className={`text-sm `}>Linkedin</p> 
          </div>
        </div>
        <div className='flex flex-row justify-between '>
          <p className={`text-xs `}>2024-Catalyst IEDC. All rights reserved</p>
          <p className={`text-xs `}>All rights reserved</p>
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
