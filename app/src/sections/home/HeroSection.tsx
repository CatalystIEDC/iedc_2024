import React from 'react'
import { spaceGrotesk } from '../../utils/fonts'
import EventBanner from '../../components/EventBanner'

const HeroSection = () => {
    const events = 
        { name: "Hackathon", details: "✦✦Catalyst IEDC is conducting a 3-day long Hackathon from 10th to 12th of September. Register now! ✦✦" }
      
  return (
    <div className={` ${spaceGrotesk.className} bg-[#0B0B0B] w-full h-full` }>
        <EventBanner event={events}/>
        HeroSection
        </div>
  )
}

export default HeroSection