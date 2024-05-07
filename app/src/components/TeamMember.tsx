import React from "react";
import { spaceGrotesk } from "../utils/fonts";
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
      className={`flex flex-col gap-3 items-center ${spaceGrotesk.className}`}
    >
      <div className="h-[11rem] w-[11rem] border border-white  overflow-hidden rounded-xl">
        <Image
          src={imageURL}
          width={500}
          height={500}
          className="object-cover hover:scale-110 transition-all duration-300 ease-in-out"
          alt={name}
        />
      </div>
      <div className="flex flex-col  items-center">
        <span className="text-white font-medium text-3xl">{name}</span>
        <span className="text-[#FFFFFFB5] font-normal">{designation}</span>
      </div>
    </div>
  );
};

export default TeamMember;
