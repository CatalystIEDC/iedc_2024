import Image from "next/image";
import React from "react";
import {Canvas} from '@react-three/fiber';
import LogoContainer from "../../components/LogoContainer";
import {Environment, OrbitControls} from '@react-three/drei';
const HeroSection = () => {
 

 
  return (
    <div className="w-screen h-[85vh]  mt-32   overflow-hidden  flex flex-col items-center  px-8 relative ">
  
      <div className="uppercase mt-10 md:mt-5 font-semibold tracking-tighter text-white text-[12dvw] text-left md:text-[10dvw] lg:text-[5dvw] z-[50] md:leading-[100px] md:text-center">
        Catalyst Mar Baselios IEDC
      </div>
      <div className="text-white/80 md:text-white text-xl md:text-3xl z-[200] font-normal w-full  lg:font-light text-center mx-auto  lg:mt-0 mt-2 tracking-tight   md:w-3/4">
            Where aspiring entrepreneurs become empowered innovators
          </div>
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute z-10   md:scale-100 scale-125  top-0 "
      ></Image>
      <Image
      alt="bg-main"
      src={'/bg-main.png'}
      layout="fill"
        className="z-[5] opacity-20 object-cover"
      />
      
      {/* <div className="w-full rounded-lg z-[20] lg:pt-20 bg-transparent md:bg-white  relative md:overflow-hidden h-[65vh] lg:h-[60dvh] text-center   event-background mb-10">
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
      </div> */}
     <Canvas camera={{position:[0,-55,110],fov : 5}} className="z-[100]" >
      {/* <OrbitControls /> */}
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr']}/>
      {/* <mesh>
        <boxGeometry />
       
      </mesh> */}
      <LogoContainer/>
     </Canvas>
    </div>
  );
};

export default HeroSection;
