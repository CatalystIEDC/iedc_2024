'use client'
import React, { useMemo, useState } from "react";
import Image from "next/image";
import EventCard from "../src/components/EventCard";
import { events } from "@/app/src/utils/events";
import ParallaxText from "../src/components/ParallaxText";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"] });

const Page = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const filterEvents = (tag:string, query:string ) => {
    return events.filter(event => {
      const matchesTag = tag === "All" || event.type === tag;
      const matchesSearch = event.eventName.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesSearch;
    });
  };

  const filteredEvents = useMemo(() => {
    return filterEvents(selectedTag, searchQuery);
  }, [selectedTag, searchQuery]);

  const tags = ["All", "Ongoing", "Upcoming", "Past"];

  return (
    <div className={`${dm.className} flex flex-col overflow-hidden w-full pt-40 mb-24 h-full`}>
      <div className="flex flex-col pl-12 items-start gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-normal tracking-tighter text-5xl">Events</h1>
          <div className="flex justify-center items-center  gap-14">
          <input
              className="w-full text-white font-light min-w-80 flex  border-[#676767]  border-[0.5px]  rounded-[5px] bg-[#FFFFFF08] px-5 py-3 outline-none"
              placeholder="Type to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex gap-4">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-6 h-fit text-base tracking-tight border-[1px] py-2 hover:bg-[#171F6133] transition-all duration-200 ease-in-out rounded-full ${
                    selectedTag === tag
                      ? "bg-[#171F6133] text-white border-white"
                      : "bg-[#67676733] text-white  border-[#676767]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full min-h-[50vh] flex-wrap md:gap-7 gap-3 justify-start overflow-hidden">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              eventName={event.eventName}
              imgSrc={event.imgSrc}
              type={event.type}
              shortDescription={event.shortDescription}
            />
          ))
        ) : (
          <h1 className="text-4xl text-white tracking-tight ">No Events as such at present. Maybe in future..</h1>
          // <ParallaxText
          // children="No events found"
          // baseVelocity={100}
          //   // text="No events found"
          //   // className="text-3xl text-white font-bold tracking-tighter"
          // />
        )}
      </div>
      </div>
    </div>
  );
};

export default Page;