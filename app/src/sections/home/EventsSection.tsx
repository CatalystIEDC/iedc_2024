"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "../home/Styles/Styles.css"
import EventCard from "../../components/EventCard";
import {events} from '@/app/src/utils/events'


function Images({ text, url }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

  return (
    <section >
      <motion.div className="flex flex-col ">
        <motion.h2 style={{ y }}>{text}</motion.h2>
        <div ref={ref}>
          <Image className="img" width={500} height={500} src={url} alt={text} />
        </div>
      </motion.div>
    </section>
  );
}

export default function EventsSection() {
  return (
    <div className="bg-red-500  w-screen h-screen flex justify-center items-center">
      {/* <div className="">
        {data.map((event) => (
          <Images  key={event.id} text={event.text} url={event.url} />
        ))}
      </div> */}
      <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>
    </div>
  );
}
