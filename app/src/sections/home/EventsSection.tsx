"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import EventCard from "../../components/EventCard";
import {events} from '@/app/src/utils/events'




export default function EventsSection() {
  return (
    <div className="bg-blue-500 w-screen h-screen snap-y snap-mandatory flex flex-col p-7 gap-10   justify-center items-center">
     
     <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
     <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    <EventCard eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    </div>
  );
}
