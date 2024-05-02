'use client'
import Image from "next/image";
import React from "react";
import EventPill from "./EventPill";
import { spaceGrotesk } from "../utils/fonts";
import { useRouter } from "next/navigation";

type EventCardProps = {
  eventName: string;
  imgSrc: string;
  type: string;
};

const EventCard: React.FC<EventCardProps> = ({ eventName, imgSrc, type }) => {

    const router = useRouter();
    const handleClick = () => {
        router.push(`/events/${eventName}`);
      };
  return (
    <div onClick={handleClick} className=" cursor-pointer w-[500px] h-[350px] relative overflow-hidden rounded-md border border-white ">
      <div className="absolute z-10 ">
        {" "}
        <svg
          width="693"
          height="449"
          viewBox="0 0 693 449"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="730"
            height="647"
            transform="matrix(1 0 0 -1 0 483)"
            fill="url(#paint0_linear_664_1065)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_664_1065"
              x1="365"
              y1="0"
              x2="365"
              y2="647"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#121111" />
              <stop offset="1" stopColor="#737373" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Image
        alt={eventName}
        src={imgSrc}
        width={100}
        height={100}
        className="w-full h-full object-cover absolute"
      />
      <div className="flex flex-col items-start absolute bottom-5 left-5 gap-[2px] z-20">
        <span
          className={`${spaceGrotesk.className} text-white tracking-[-2.3px] font-normal text-4xl`}
        >
          {eventName}
        </span>
        <EventPill type={type} />
      </div>
    </div>
  );
};

export default EventCard;
