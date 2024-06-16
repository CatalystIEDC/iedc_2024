"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "../home/Styles/Styles.css"
import EventCard from "../../components/EventCard";
import {events} from '@/app/src/utils/events'




export default function EventsSection() {
  return (
    <div className=" w-screen h-screen snap-y snap-mandatory flex flex-col p-7 gap-10   justify-center items-center">
      {/* <div className="">
        {data.map((event) => (
          <Images  key={event.id} text={event.text} url={event.url} />
        ))}
      </div> */}
     <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
     <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    </div>
  );
}
