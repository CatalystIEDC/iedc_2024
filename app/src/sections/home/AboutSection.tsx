import Image from "next/image";
import React from "react";
import Button from "../../components/Button";
import Logo from '@/public/logo/Headerlogo.svg'

const AboutSection = () => {
  return (
    <div className="relative  w-screen h-screen flex gap-32 text-white px-14 py-32">
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute -z-10 pointer-events-none rotate-180 "
      ></Image>
      <Image
        alt="about background"
        src="/college4.png"
        layout="fill"
        className="object-cover absolute z-0 opacity-5"
      />

      <div className="flex flex-col  justify-between items-start  w-3/5 ">
        <h1 className="text-6xl tracking-tighter">Catalyst IEDC</h1>
       <div className="flex flex-col gap-5">
       <p className="text-2xl font-extralight  tracking-tight">
          The{" "}
          <span className="font-normal text-underline">
            Innovation and Entrepreneurship Development Centre
          </span>{" "}
          of Mar Baselios College of Engineering and Technology, Catalyst was
          inaugurated in the year{" "}
          <span className="font-normal text-underline">2013</span> with a
          purpose of inspiring students to become independent engineers by
          exposing then to the world of Entrepreneurship through Innovation. The
          Centre aims in sharpening the skills of students, broadening their
          knowledge base and equipping them with technical and non-technical
          qualities that an engineer need.
        </p>
          <p className="text-2xl font-extralight  tracking-tight">
          Rather than pushing students to startup, the centre believes in {" "}<span className=" font-normal text-underline ">inculcating the  spirit</span>{" "}   in students.  The members have identified the <span className="font-normal text-underline">true joy of self-learnin</span>g and they passionately involve in brining life into their ideas, to solve the problems that they see around.
          </p>
        
       </div>
       <div className=" w-fit z-20">
        <Button href="/about" text="Read More.." />
        </div>
      </div>

      <div className=" h-full  relative flex justify-center items-center">
      <Image src={Logo} alt='Catalyst Logo'  width={300} height={300} className='object-cover'/>
      </div>
    </div>
  );
};

export default AboutSection;
