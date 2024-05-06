import React from "react";
import { spaceGrotesk } from "../src/utils/fonts";
import Image from "next/image";
import EventCard from "../src/components/EventCard";
import {events} from "@/app/src/utils/events"

const page = () => {
  return (
    <div className="bg-[#0B0B0B]  flex flex-col pt-36 h-screen">
      <div className="flex ml-5   flex-row w-full">
        <p className={`${spaceGrotesk.className} text-white  text-4xl`}>
          Events
        </p>
      </div>
      <Image
        width={100}
        height={100}
        src="/EventsBanner.svg"
        alt="Events Banner"
      />
      <div className="flex flex-row p-5 lg:w-1/2  justify-evenly   gap-5">
        <input
          className="w-full flex flex-grow border border-zinc-300 bg-[#0B0B0B]"
          placeholder="Type to search"
        />
        <button className={`${spaceGrotesk.className}bg-[#676767] hover:bg-[#2Escrollbar scrollbar-thumb-blue-600 scrollbar-thumb-roundedCDFF] border border-[#2ECDFF]  text-white font-semibold py-1 px-5 rounded-full`}>
            Current
        </button>
        <button className={`${spaceGrotesk.className}bg-[#676767] hover:bg-[#2ECDFF] border border-[#2ECDFF]  text-white font-semibold py-1 px-5 rounded-full`}>
          Upcoming
        </button>
        <button className={`${spaceGrotesk.className}bg-[#676767] hover:bg-[#2ECDFF] border border-[#2ECDFF]  text-white font-semibold py-1 px-5 rounded-full`}>
          Past
        </button>
      </div>
      <div className="grid  mt-3 md:gap-7 grid-cols-3 gap-3 p-5 overflow-y-auto  overflow-hidden justify-center" >
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/> 
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/> 
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/> 
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/> 
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/> 
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/> 
      </div>
    </div>
  );
};

export default page;
