import React from 'react'
import { spaceGrotesk } from '../utils/fonts'

const EventPill = ({type}:{type:string}) => {
  return (
    <div className={`${spaceGrotesk.className} font-light text-xs leading-5 tracking-[-0.6px] text-center text-white bg-[#1A68FF33] border border-[#1A68FF] rounded-full px-3 py-1`}>{type}</div>
  )
}

export default EventPill