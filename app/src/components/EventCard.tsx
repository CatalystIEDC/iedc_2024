'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type EventCardProps = {
  eventName: string;
  imgSrc: string;
  type: string;
  shortDescription: string;
};

const EventCard: React.FC<EventCardProps> = ({ eventName,shortDescription, imgSrc, type }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/events/${eventName}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="cursor-pointer input-border p-5 flex flex-col size-full justify-between   max-w-xs aspect-square bg-[#171F6126] relative overflow-hidden rounded-lg shadow-lg"
    >
    <div className="flex flex-col gap-1">
    <h2 className="text-white text-2xl tracking-tight font-light ">{eventName}</h2>
      <div className="text-white font-extralight">
          {shortDescription}
        </div>
    </div>
      <div className=" w-full ">
      <Image
        alt={eventName}
        src={imgSrc}
        layout="fill"
        className="opacity-5 object-cover"
      />
      </div>
       
        
        <div className="flex  space-x-2">
          <span className="bg-[#1A68FF33] tracking-tight border border-white text-white text-sm flex justify-center items-center px-3 py-1 rounded-full">{type}</span>
        </div>
      </div>
  
  );
};

export default EventCard;