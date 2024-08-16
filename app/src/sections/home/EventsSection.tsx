"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import EventCard from "../../components/EventCard";
import {events} from '@/app/src/utils/events'
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";




export default function EventsSection() {
  return (
    <ScrollAnimationWrapper className=" px-14 py-32 gradient-border-top relative w-full  text-white">
       <h1 className="text-6xl tracking-tighter">Events</h1>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute z-0 pointer-events-none top-0 '></Image>

      <div className="  w-screen   flex  p-7 gap-10   justify-center items-center">
     
     <EventCard shortDescription={events[0].shortDescription} eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
     <EventCard shortDescription={events[1].shortDescription } eventName={events[1].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    <EventCard shortDescription={events[2].shortDescription} eventName={events[2].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    </div>
     </ScrollAnimationWrapper>
  );
}
