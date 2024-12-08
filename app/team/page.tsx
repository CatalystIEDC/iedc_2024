'use client'
import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from '../src/components/TeamMember';
import teams from '@/app/utils/team';
import Image from 'next/image';

const Page = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderTeamSection = (title : string, teamKey:string) => (
    <>
      <motion.div
        className={`text-4xl mt-8 font-normal text-white w-fit h-fit`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariants}
      >
        {title}
      </motion.div>
      <motion.div
        className='w-full flex gap-16 my-10 flex-wrap'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {teams[teamKey].map((member:any, index:any) => {
          const nameForImage = member.name.split(" ").join("");
          return (
            <motion.div key={index} variants={itemVariants}>
              <TeamMember
                name={member.name}
                designation={member.designation}
                imageURL={`/team/${nameForImage}.png`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );

  return (
    <div className={`text-white themed-background relative h-fit w-screen pt-36 px-12`}>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute top-0 rotate-180 pointer-events-none top-0 opacity-50 '></Image>
      <motion.div
        className={`text-5xl mt-8 font-normal text-white w-fit tracking-tighter h-fit`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariants}
      >
        Core Team
      </motion.div>
      <motion.div
        className='w-full flex gap-16 my-16 flex-wrap'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {teams['executive'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return (
            <motion.div key={index} variants={itemVariants}>
              <TeamMember
                name={member.name}
                designation={member.designation}
                imageURL={`/team/${nameForImage}.png`}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {renderTeamSection("Operations Team", "operations")}
      {renderTeamSection("Skill Development Team", "skills")}
      {renderTeamSection("Tech Team", "tech")}
      {renderTeamSection("Marketing Team", "marketing")}
      {renderTeamSection("Creative Team", "creative")}
      {renderTeamSection("Finance Team", "finance")}
      {renderTeamSection("Vibe Team", "vibe")}
      {renderTeamSection("IIC Team", "iic")}
      {renderTeamSection("MuLearn Team", "mulearn")}
      {renderTeamSection("Tribe Team", "tribe")}
     
    </div>
  );
};

export default Page;