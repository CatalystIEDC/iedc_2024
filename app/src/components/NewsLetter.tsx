import Image from "next/image";
import React from "react";
import EmailInput from "../components/EmailInput";

const NewsLetter = () => {
  return (
    <div className="py-20  relative overflow-hidden">
     
      
      
      <div className="newsletter rounded-xl input-border  relative w-[90vw] h-[90vh]  md:h-[50vh]  overflow-hidden flex justify-center items-center">
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
        <div className="text-lg md:text-2xl  tracking-normal text-white text-center leading-normal font-extralight  w-full md:w-[65%]">
        Whether you’re a student, a mentor, an investor, or a collaborator, <br /> <span className="font-medium"> Catalyst IEDC</span> welcomes you to join its mission of fostering innovation and entrepreneurship. <br className="mt-10"/> <div className="mt-10">
        Together, let&apos;s shape a future driven by creativity, technology, and sustainable growth.
        </div>
          {/* <span className="font-normal text-6xl">Catalyst IEDC</span> <br /> */}
        </div>
      
        <EmailInput />
       
      </div>
    </div>
    </div>
  );
};

export default NewsLetter;
