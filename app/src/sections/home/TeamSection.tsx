import React from 'react'
import Button from '../../components/Button'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Image from 'next/image'

const TeamSection = () => {
  return (
  <ScrollAnimationWrapper className=" w-full relative text-white">
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute -z-10 pointer-events-none rotate-180 '></Image>
      <Image alt='Team Image' src={'/team.jpeg'} layout='fill' className='object-cover -z-10 opacity-[0.05] '/>
    <div className='  w-screen  px-14 py-32 h-screen z-10'>


    <div className="flex flex-col gap-5  justify-between items-start   ">
    <h1 className="text-6xl tracking-tighter">Team</h1>
      <p className=" text-2xl font-extralight  tracking-tight mt-12">
      Catalyst is <span className='text-underline font-normal'> more than just a club</span>; it's a dynamic ecosystem of innovation and entrepreneurship. Our team is a passionate group of young minds, driven by a shared vision of transforming ideas into reality. We believe that <span className='text-underline font-normal'>every engineer has the potential</span> to be an innovator, and our role is to foster that spirit.
          </p>

          <p className=" text-2xl font-extralight  tracking-tight">
          We operate on the principle of <span className='text-underline font-normal'> collaborative learning</span> and <span className='text-underline font-normal'> mutual growth.</span> Our team is a melting pot of diverse talents, from technical experts to creative visionaries. We work together to <span className='text-underline font-normal'>create a supportive environment</span> where ideas are nurtured, challenges are embraced, and solutions are co-created.
          </p>

          <p className=" text-2xl font-extralight  tracking-tight mb-24">
          We are proud of the impact we have made on our campus and the community. Our team has successfully launched multiple startups, participated in numerous hackathons and competitions, and developed innovative solutions to <span className='text-underline font-normal'>real-world problems.</span> We are committed to creating a <span className='text-underline font-normal'>positive and lasting impact</span> on society through our work.
          </p>
    <div className='w-fit'>
    <Button href='/team' text='Meet our Team'/>
    </div>
      </div>
    </div>
    </ScrollAnimationWrapper>
  )
}

export default TeamSection