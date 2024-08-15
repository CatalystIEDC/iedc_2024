'use client'
import Image from "next/image";
import React from "react";
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
    <div 
      onClick={handleClick} 
      className="cursor-pointer w-full max-w-sm aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg"
    >
      <Image
        alt={eventName}
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start">
        <h2 className="text-white text-2xl font-bold mb-2">{eventName}</h2>
        <div className="flex space-x-2">
          <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">{type}</span>
          <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full">Upcoming</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;