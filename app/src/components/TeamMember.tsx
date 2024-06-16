import React from "react";
import Image from "next/image";

type TeamMemberProps = {
  name: string;
  designation: string;
  imageURL: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  designation,
  imageURL,
}) => {
  return (
    <div
      className={`flex h-72 w-64 overflow-hidden flex-col border-white border items-start rounded-md`}
    >
      <div className="size-full overflow-hidden ">
        <Image
          src={imageURL}
          width={300}
          height={300}
          className="object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 ease-in-out"
          alt={name}
        />
      </div>
      <div className="flex flex-col px-4 py-2 relative  justify-start items-start bg-[#010314] over  w-full">
        <div className="text-white  font-normal z-10 text-xl">{name}</div>
        <div className="text-[#ffffff8d] text-sm z-10 text-left font-light">{designation}</div>
        <Image alt='Gradient Svg' src={'./elements/Gradient.svg'} layout="fill" className="absolute object-cover  z-0"></Image>
        {/* <div className='size-56 -left-36 border-white bg-cyan-500 rounded-full absolute  z-0 blur-[150px]'></div>
        <div className='size-56 -right-24 border-white bg-violet-500 rounded-full absolute  z-0 blur-[150px]'></div> */}
      </div>
    </div>
  );
};

export default TeamMember;
