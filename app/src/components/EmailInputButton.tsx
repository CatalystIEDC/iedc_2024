import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

const EmailInputButton = () => {
  return (
    <div className='flex cursor-pointer rounded-md justify-center items-center p-2  w-fit  bg-[#3351EE]'><CiLocationArrow1 className='hover:fill-white' size={25} fill='white' />
    </div>
  )
}

export default EmailInputButton