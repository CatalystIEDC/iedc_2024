import React from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({ subsets: ["latin"] });

const Legacy = () => {
  return (
    <ScrollAnimationWrapper className="w-full ">

      <div className={`gradient-border-top  text-white w-screen h-screen flex justify-center p-7 overflow-hidden  items-center relative ${dm.className}`}>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute z-0 pointer-events-none top-0 '></Image>
      <div className="absolute  left-0">
        <Image
          src="/toplines.svg"
          width={200}
          height={100}
          className=""
          alt="toplines"
        />
      </div>
     
      <div className="text-center text-6xl z-20 tracking-[-2.15px] flex flex-col items-center justify-center gap-1">
      <div className="text-3xl tracking-tight font-light">Building a </div>
       <p className="w-3/4"> Legacy of Innovation and Entrepeneurship</p>
       <div className="text-white/80 text-3xl  font-light tracking-tighter"></div>
      </div>
     
      <div className="absolute mt-24 right-0">
        <Image
          src="/bottomlines.svg"
          width={650}
          height={100}
          alt="bottomlines"
        />
      </div>
    </div>
    </ScrollAnimationWrapper>
  );
};

export default Legacy;
