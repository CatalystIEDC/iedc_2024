import Image from "next/image";
import React from "react";
import EmailInput from "../components/EmailInput";

const NewsLetter = () => {
  return (
    <div className="py-20 relative overflow-hidden">
     
      
      
      <div className="newsletter rounded-xl input-border  relative w-[90vw] h-[50vh] md:h-[40vh]  overflow-hidden flex justify-center items-center">
      <Image
          src="/bottomlines.svg"
          width={450}
          height={100}
          className="absolute -left-52  rotate-180"
          alt="bottomlines"
        />
     
        <Image
          src="/bottomlines.svg"
          width={450}
          height={100}
          className="absolute -right-52"
          alt="bottomlines"
        />

<Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute z-10  top-0 "
      ></Image>
      <div className="flex justify-center z-20 gap-10 flex-col items-center  w-full">
        <div className="text-4xl  tracking-tighter text-white text-center leading-tight font-extralight  w-full md:w-[45%]">
          Keep up to date with the latest news and updates from Catalyst IEDC
          {/* <span className="font-normal text-6xl">Catalyst IEDC</span> <br /> */}
        </div>
        <EmailInput />
       
      </div>
    </div>
    </div>
  );
};

export default NewsLetter;
