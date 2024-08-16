import React from 'react'
import Button from '../../components/Button'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Image from 'next/image'

const TeamSection = () => {
  return (
  <ScrollAnimationWrapper className=" w-full relative">
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute -z-10 pointer-events-none rotate-180 '></Image>
      <Image alt='Team Image' src={'/team.jpeg'} layout='fill' className='object-cover -z-10 opacity-[0.02] '/>
    <div className='  w-screen  px-14 py-32 h-screen z-10'>
      <Button href='/team' text='Meet our Team'/>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default TeamSection