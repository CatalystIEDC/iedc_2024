'use client'
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${dm.className} flex flex-col gap-5 overflow-hidden pl-12 w-full pt-40 mb-24 h-full`}
    >
      <motion.div variants={itemVariants}>
      <h1 className="text-white font-normal tracking-tighter text-5xl">Events</h1>
      </motion.div>
      <motion.div variants={itemVariants} className="flex align-middle items-center gap-8 ">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-[5px] min-w-80  bg-[#67676733] text-white border border-[#676767] focus:outline-none focus:border-white"
        />
        <div className="flex gap-4  items-center flex-wrap justify-center">
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 h-fit text-base tracking-tight border-[1px] py-2 hover:bg-[#171F6133] transition-all duration-200 ease-in-out rounded-full ${
                selectedTag === tag
                  ? "bg-[#171F6133] text-white border-white"
                  : "bg-[#67676733] text-white  border-[#676767]"
              }`}
            
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <EventCard {...event} />
            </motion.div>
          ))
        ) : (
          <motion.p variants={itemVariants} className="col-span-full text-center text-xl">
            No Events as such at present. Maybe in future..
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Page;