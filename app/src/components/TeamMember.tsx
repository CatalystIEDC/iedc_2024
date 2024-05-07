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
      <div className="h-[8rem] w-[8rem] border border-white  overflow-hidden rounded-xl">
        <Image
          src={imageURL}
          width={300}
          height={300}
          className="object-cover hover:scale-110 transition-all duration-300 ease-in-out"
          alt={name}
        />
      </div>
      <div className="flex flex-col    items-center">
        <span className="text-white font-normal text-xl">{name}</span>
        <span className="text-[#FFFFFFB5] w-4/5 text-center font-normal">{designation}</span>
      </div>
    </div>
  );
};

export default TeamMember;
