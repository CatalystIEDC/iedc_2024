import React from 'react'
import Button from '../../components/Button'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'

const TeamSection = () => {
  return (
  <ScrollAnimationWrapper className=" w-full">
    <div className='  w-screen bg-red-500 px-14 py-32 h-screen'>
      <Button href='/team' text='Meet our Team'/>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default TeamSection