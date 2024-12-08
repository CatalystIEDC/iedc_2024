'use client'
import React from 'react'

import Link from 'next/link'
const Button = ({text,href}:{text:string,href:string}) => {
  return (
    <Link href={href}  className={` flex justify-center w-fit rounded-lg bg-white items-center px-4 py-[10px] md:tracking-[-1px] text-black text-sm md:text-[16px] mx-auto my-auto font-medium hover:px-10 hover:opacity-65 transition-all duration-300 ease-in-out`}>
        {text}
    </Link>
  )
}

export default Button