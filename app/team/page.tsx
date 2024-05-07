import React from 'react'
import TeamMember from '../src/components/TeamMember'

const page = () => {
  return (
    <div className='bg-[#0B0B0B] h-screen w-screen pt-36'>
        <TeamMember name='Arun JS' designation='Nodal Officer' imageURL='/team/ArunJS.png'/>
    </div>
  )
}

export default page