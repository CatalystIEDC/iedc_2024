import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='w-screen footer-gradient-2  gradient-border-top flex  flex-col   text-white justify-center py-12 gap-14   relative  overflow-hidden  px-20  '>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute z-10  bottom-0 '></Image>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute  bottom-0 -z-10 '></Image>
        <div className='flex  flex-row z-20 justify-between gap-24 '>
          <Image src={'./logo/Headerlogo.svg'} width={150} height={150} alt='logo' className='object-cover'></Image>
         <div className='flex  gap-24 items-start'>
         <div className='flex flex-col text-base font-light justify-start  gap-2'>
            <Link href={'/'}>Home</Link>
            <Link href={'/events'}>Events</Link>
            <Link href={'/team'}>Team</Link> 
            <Link href={'/innovate'}>Innovate</Link>
            <Link href={'/mulearn'}>Mulearn</Link>
            <Link href={'/about'}>About</Link>
          </div>
       
          <div className='flex flex-col  pr-10 text-base font-light justify-center gap-2'>
            <Link href={'/'} >Instagram</Link>
            <Link href={'/'} >Facebook</Link>
            <Link href={'/'} >Linkedin</Link> 
          </div>
         </div>
        </div>
        <div className='flex flex-row text-sm font-extralight justify-between text-white z-20'>
          <p >2024-Catalyst IEDC </p>
          <p >All rights reserved.</p>
        </div>
      
      </div>
      {/* <div className='  right-0'>
          <Image
            src="/footerlines.svg"
            width={900}
            className='absolute opacity-75 bottom-0 -right-11'
            height={200}
            alt="footerlines "
          />
        </div> */}
      
    
    </>
  )
}

export default Footer
