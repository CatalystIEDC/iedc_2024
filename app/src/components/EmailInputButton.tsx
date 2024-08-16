import Image from 'next/image';
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

const EmailInputButton = () => {
  return (
    <div className='flex cursor-pointer rounded-md overflow-hidden relative justify-center bg-[#010314]  items-center p-2  w-fit  '><CiLocationArrow1 className='hover:fill-white' size={25} fill='white' />
    
    </div>
  )
}

export default EmailInputButton