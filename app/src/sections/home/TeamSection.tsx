import React from 'react'
import Button from '../../components/Button'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'

const TeamSection = () => {
  return (
  <ScrollAnimationWrapper className="bg-green-600 w-full">
    <div className='  w-screen h-screen'>
      <Button href='/team' text='Meet our Team'/>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default TeamSection