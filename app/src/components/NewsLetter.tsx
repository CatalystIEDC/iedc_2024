import Image from "next/image";
import React from "react";
import EmailInput from "../components/EmailInput";

const NewsLetter = () => {
  return (
    <div className="newsletter rounded-xl input-border  relative w-[90vw] h-[50vh] md:h-[40vh] my-20 overflow-hidden flex justify-center items-center">
      {/* <Image
        alt="star"
        src={"/shapes/star.svg"}
        width={200}
        height={200}
        objectFit="cover"
        className="absolute origin-top-left scale-[.45] md:scale-100 top-0 left-0"
      ></Image>

      
      <Image
        alt="ellipse"
        src={"/shapes/ellipse.svg"}
        width={200}
        height={200}
        objectFit="cover"
        className="absolute origin-bottom-right scale-[.45] md:scale-100 bottom-0 right-0"
      ></Image> */}

<Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute z-10  top-0 "
      ></Image>
      <div className="flex justify-center z-20 gap-10 flex-col items-center  w-full">
        <div className="text-4xl  tracking-tighter text-white text-center leading-tight font-extralight  w-full md:w-[45%]">
          Keep up to date with <br />{" "}
          <span className="font-normal text-6xl">Catalyst IEDC</span> <br />
        </div>
        <EmailInput />
       
      </div>
    </div>
  );
};

export default NewsLetter;
