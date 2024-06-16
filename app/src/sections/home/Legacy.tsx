import React from "react";
import Image from "next/image";
import { spaceGrotesk } from "../../utils/fonts";

const Legacy = () => {
  return (
    <div className="gradient-border-top w-screen h-screen flex justify-center p-7 overflow-hidden  items-center relative">
      <div className="absolute  left-0">
        <Image
          src="/toplines.svg"
          width={200}
          height={100}
          className=""
          alt="toplines"
        />
      </div>
      <div className="text-center">
        <p className={`text-2xl `}>Building a</p>
        <p className={`text-6xl  font-bold text-white`}>
          Legacy of Innovation and
        </p>
        <p className={`text-6xl  font-bold text-white` }>Entrepreneurship</p>
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
  );
};

export default Legacy;
