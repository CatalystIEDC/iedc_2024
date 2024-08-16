"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import EventCard from "../../components/EventCard";
import {events} from '@/app/src/utils/events'
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";
import Button from "../../components/Button";




export default function EventsSection() {
  return (
    <ScrollAnimationWrapper className=" px-14 py-32 gradient-border-top min-h-screen relative w-full  text-white">
      
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute z-0 pointer-events-none top-0 '></Image>
      <div className="flex flex-col gap-5  justify-between items-start   ">
   <div className="w-full  flex justify-between items-center">
   <h1 className="text-6xl tracking-tighter">Events</h1>
   <div className='w-fit'>
    <Button href='/events' text='View All Events'/>
    </div>
   </div>
    <p className=" text-2xl font-extralight  tracking-tightmt-12 ">
    Catalyst is a hub of activity, where ideas are sparked and brought to life. Our events calendar is packed with opportunities for students to learn, collaborate, and grow.  We believe that <span className="text-underline font-normal">learning shouldn&apos;t be confined</span> to the classroom. Our events offer a unique learning experience that goes beyond textbooks.
    </p>
    <p className=" text-2xl font-extralight  tracking-tightmt-12 ">
    Our events are designed to cater to a wide range of interests, from <span className="text-underline font-normal">technical workshops to entrepreneurial bootcamps.</span> We believe in creating a platform for students to <span className="text-underline font-normal">explore their passions and develop their skills.</span>
    </p>
    
   

      </div>

      <div className="  w-screen   flex   gap-10   mt-12 items-center">
     
     <EventCard shortDescription={events[0].shortDescription} eventName={events[0].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
     <EventCard shortDescription={events[1].shortDescription } eventName={events[1].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    <EventCard shortDescription={events[2].shortDescription} eventName={events[2].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    <EventCard shortDescription={events[3].shortDescription} eventName={events[3].eventName} imgSrc={events[0].imgSrc} type={events[0].type}/>  
    </div>
     </ScrollAnimationWrapper>
  );
}
