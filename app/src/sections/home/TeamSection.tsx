import React from 'react'
import { motion } from 'framer-motion'
import Button from '../../components/Button'
import ScrollAnimationWrapper from '../ScrollAnimationWrapper'
import Image from 'next/image'

const TeamSection = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="w-full relative text-white">
      <Image 
        src={'./elements/Gradient.svg'} 
        layout='fill' 
        alt='footer background' 
        className='absolute -z-10 pointer-events-none rotate-180'
      />
      <Image 
        alt='Team Image' 
        src={'/team.jpeg'} 
        layout='fill' 
        className='object-cover -z-10 opacity-[0.05]'
      />
      
      <div className='w-screen px-8 py-14 md:px-14 md:py-32 md:h-fit z-10'>
  
          <motion.div 
            className="flex flex-col gap-3 lg:gap-5 md:justify-between items-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h1 
              className="text-3xl md:text-6xl tracking-tighter"
              variants={itemVariants}
            >
              Team
            </motion.h1>

            <motion.p 
              className="text-lg md:text-2xl font-extralight tracking-normal mt-12"
              variants={itemVariants}
            >
              Catalyst is <span className='text-underline font-normal'>more than just a team</span>; it&apos;s a dynamic ecosystem of innovation and entrepreneurship. Our team is a passionate group of young minds, driven by a shared vision of transforming ideas into reality. We believe that <span className='text-underline font-normal'>every engineer has the potential</span> to be an innovator, and our role is to foster that spirit.
            </motion.p>

            <motion.p 
              className="text-lg md:text-2xl md:block hidden font-extralight "
              variants={itemVariants}
            >
              We operate on the principle of <span className='text-underline font-normal'>collaborative learning</span> and <span className='text-underline font-normal'>mutual growth.</span> Our team is a melting pot of diverse talents, from technical experts to creative visionaries. We work together to <span className='text-underline font-normal'>create a supportive environment</span> where ideas are nurtured, challenges are embraced, and solutions are co-created.
            </motion.p>

            <motion.p 
              className="text-lg md:text-2xl font-extralight tracking-normal mb-24"
              variants={itemVariants}
            >
              We are proud of the impact we have made on our campus and the community. Our team has successfully launched multiple startups, participated in numerous hackathons and competitions, and developed innovative solutions to <span className='text-underline font-normal'>real-world problems.</span> We are committed to creating a <span className='text-underline font-normal'>positive and lasting impact</span> on society through our work.
            </motion.p>

            <motion.div 
              className='w-fit'
              variants={itemVariants}
            >
              <Button href='/team' text='Meet our Team'/>
            </motion.div>
          </motion.div>
     
      </div>
    </div>
  )
}

export default TeamSection