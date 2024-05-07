import React from 'react';
import TeamMember from '../src/components/TeamMember';
import teams from '@/app/utils/team';
import { spaceGrotesk } from '../src/utils/fonts';

const Page = () => {
  return (
    <div className={`${spaceGrotesk.className}text-white z-10 bg-[#0B0B0B] h-fit w-screen pt-36 px-12 `}>
      <div className={`${spaceGrotesk.className} text-5xl mt-8 font-normal text-white w-fit h-fit`}>Core Team</div>
     <div className=' w-full flex gap-16 my-16 flex-wrap'>
     
     {teams['executive'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Operations Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['operations'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Skill Development Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['skills'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Tech Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['tech'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Marketing Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['marketing'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Creative Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['creative'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Finance Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['finance'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Vibe Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['vibe'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>IIC Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['iic'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>MuLearn Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['mulearn'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
     <div className={`${spaceGrotesk.className} text-4xl mt-8 font-normal text-white w-fit h-fit`}>Tribe Team</div>
     <div className=' w-full flex gap-16 my-10 flex-wrap'>
     
     {teams['tribe'].map((member, index) => {
          const nameForImage = member.name.split(" ").join("");
          return <TeamMember name={member.name} designation={member.designation} key={index} imageURL={`/team/${nameForImage}.png`} />;
        })}
      
     </div>
    </div>
  );
};

export default Page;
