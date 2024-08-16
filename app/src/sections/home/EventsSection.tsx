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
    Catalyst is a hub of activity, where ideas are sparked and brought to life. Our events calendar is packed with opportunities for students to learn, collaborate, and grow.  We believe that <span className="text-underline font-normal">learning shouldn't be confined</span> to the classroom. Our events offer a unique learning experience that goes beyond textbooks.
    </p>
    <p className=" text-2xl font-extralight  tracking-tightmt-12 ">
    Our events are designed to cater to a wide range of interests, from <span className="text-underline font-normal">technical workshops to entrepreneurial bootcamps.</span> We believe in creating a platform for students to <span className="text-underline font-normal">explore their passions and develop their skills.</span>
    </p>
    
   

          {/* <p className=" text-2xl font-extralight  tracking-tight">
          We operate on the principle of <span className='text-underline font-normal'> collaborative learning</span> and <span className='text-underline font-normal'> mutual growth.</span> Our team is a melting pot of diverse talents, from technical experts to creative visionaries. We work together to <span className='text-underline font-normal'>create a supportive environment</span> where ideas are nurtured, challenges are embraced, and solutions are co-created.
          </p>

          <p className=" text-2xl font-extralight  tracking-tight mb-24">
          We are proud of the impact we have made on our campus and the community. Our team has successfully launched multiple startups, participated in numerous hackathons and competitions, and developed innovative solutions to <span className='text-underline font-normal'>real-world problems.</span> We are committed to creating a <span className='text-underline font-normal'>positive and lasting impact</span> on society through our work.
          </p> */}
    
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
