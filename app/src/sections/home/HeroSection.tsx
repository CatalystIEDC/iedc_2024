import Image from "next/image";
import React from "react";

const HeroSection = () => {
 

 
  return (
    <div className="w-screen h-fit -z-10 mt-32   overflow-hidden  flex flex-col items-center pt-20 px-8 relative">
   
      <div className="w-full rounded-3xl lg:pt-20 bg-transparent md:bg-white relative md:overflow-hidden h-[65vh] lg:h-[600px] text-center   event-background mb-10">
        <div className="z-50">
          <h1 className="text-5xl md:text-4xl tracking-tighter  text-center font-medium text-white md:text-black">
            Catalyst Mar Baselios IEDC
          </h1>
          <div className="text-white/80 md:text-[#000000e8] text-xl lg:text-6xl z-[200] font-normal w-full  lg:font-medium text-center mx-auto  lg:mt-0 mt-5 tracking-tight lg:tracking-[-3.15px] lg:leading-[70px] lg:w-3/4">
            Where aspiring entrepreneurs become empowered innovators
          </div>
        </div>

        <Image
          src={"/collegembcet.png"}
          width={5000}
          height={3000}
          alt="College"
          className=" absolute left-1/2 bottom-8 md:bottom-10 scale-[4] md:scale-125 -translate-x-1/2"
        ></Image>
      </div>
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute z-10 md:scale-100 scale-125  top-0 "
      ></Image>
    </div>
  );
};

export default HeroSection;
