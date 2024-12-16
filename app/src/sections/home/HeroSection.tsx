import Image from "next/image";
import React from "react";
import {Canvas} from '@react-three/fiber';
import LogoContainer from "../../components/LogoContainer";
import {Environment, OrbitControls} from '@react-three/drei';
import { DM_Sans,Darker_Grotesque } from "next/font/google";


const dm = Darker_Grotesque({ subsets: ["latin"] });

const HeroSection = () => {
 

 
  return (
    <div className="w-screen h-[85vh]  mt-32   overflow-hidden  flex flex-col items-center  px-8 relative ">
  
      <div  className={`uppercase mt-10 md:mt-5 font-semibold tracking-tighter text-white text-[12dvw] leading-10 text-center  md:text-[10dvw] lg:text-[5dvw] z-[50] md:leading-[100px] md:text-center ${dm.className}`}>
        Catalyst Mar Baselios IEDC
      </div>
      <div className="text-white/80 md:text-white text-xl md:text-3xl z-[100] font-normal w-full  lg:font-light text-center mx-auto  lg:mt-0 mt-2 tracking-tight   md:w-3/4">
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
