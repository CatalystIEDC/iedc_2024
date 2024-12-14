'use client'
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EventCard from "../src/components/EventCard";
import { events } from "@/app/src/utils/events";
import ParallaxText from "../src/components/ParallaxText";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"] });

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRange, setSelectedRange] = useState("2023-2024");

  useEffect(() => {
    // Retrieve the range from localStorage on initial render
    const savedRange = localStorage.getItem("selectedRange");
    if (savedRange) {
      setSelectedRange(savedRange);
    } else {
      setSelectedRange("2023-2024"); // Default range
    }
  }, []);

  const handleRangeChange = (range:string) => {
    setSelectedRange(range);
    localStorage.setItem("selectedRange", range); // Save to localStorage
  };

  const filterEvents = (range:string, query:string) => {
    return events.filter((event) => {
      const matchesRange = event.year.includes(range);
      const matchesSearch = event.name.toLowerCase().includes(query.toLowerCase());
      return matchesSearch && matchesRange;
    });
  };

  const filteredEvents = useMemo(() => {
    return filterEvents(selectedRange, searchQuery);
  }, [selectedRange, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`${dm.className} flex flex-col gap-5 relative  min-h-[100vh] overflow-hidden pl-8 md:pl-12 w-full py-40 h-full`}
    >
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute -z-10 rotate-180 pointer-events-none top-0 opacity-50 '></Image>
      <motion.div className="z-20" variants={itemVariants}>
        <h1 className="text-white font-normal tracking-tighter text-5xl">Events</h1>
      </motion.div>
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:align-middle md:items-center gap-8 ">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-[5px] w-72 md:min-w-80  bg-[#67676733] text-white border border-[#676767] focus:outline-none focus:border-white"
        />
        <select
          title="Select Year Range"
          value={selectedRange}
          onChange={(e) => handleRangeChange(e.target.value)}
          className="px-4 py-2 rounded-[5px] w-72 md:w-auto   bg-[#67676733] text-white border border-[#676767] focus:outline-none focus:border-white"
        >
          <option className="bg-[#67676733]  text-black" value="">Select Year Range</option>
          <option className="bg-[#67676733] text-black" value="2019-2020">2019-2020</option>
          <option className="bg-[#67676733] text-black" value="2020-2022">2020-2022</option>
          <option className="bg-[#67676733] text-black" value="2022-2023">2022-2023</option>
          <option className="bg-[#67676733] text-black" value="2023-2024">2023-2024</option>
        </select>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap justify-center  md:gap-8 mt-8"
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div key={index} variants={itemVariants}>
              <EventCard
                shortDescription={event.oneline_description}
                eventName={event.name}
                imgSrc={`/events/${event.year}${event.img}`}
              />
            </motion.div>
          ))
        ) : (
          <motion.p variants={itemVariants} className="col-span-full font-light tracking-tighter text-white  text-4xl">
            No Events as such at present. Maybe in future..
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Page;
