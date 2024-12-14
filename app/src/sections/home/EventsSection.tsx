"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import EventCard from "../../components/EventCard";
import { events } from '@/app/src/utils/events'
import Button from "../../components/Button";

export default function EventsSection() {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Scroll handler
  // const handleScroll = (direction:String) => {
  //   if (scrollContainerRef.current) {
  //     const { current } = scrollContainerRef;
  //     const scrollAmount = current?.clientWidth; // Scroll by container width
      
  //     if (direction === 'left') {
  //       current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  //     } else {
  //       current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  //     }

  //     // Update scroll position state
  //     setTimeout(() => {
  //       setIsAtStart(current.scrollLeft <= 0);
  //       setIsAtEnd(
  //         current.scrollLeft + current.clientWidth >= current.scrollWidth - 10
  //       );
  //     }, 300);
  //   }
  // };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="px-8 py-14 md:px-14 md:py-32 gradient-border-top min-h-screen relative w-full text-white">
      <Image 
        src={'./elements/Gradient.svg'} 
        layout='fill' 
        alt='footer background' 
        className='absolute z-0 pointer-events-none top-0'
      />
      
      <motion.div 
        className="flex flex-col gap-5 justify-between items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="w-full flex justify-between items-center"
          variants={itemVariants}
        >
          <h1 className="text-3xl md:text-6xl tracking-tighter">Events</h1>
          <div className='w-fit'>
            <Button href='/events' text='View All Events'/>
          </div>
        </motion.div>

        <motion.p 
          className="text-lg md:text-2xl font-extralight tracking-normal mt-12"
          variants={itemVariants}
        >
          Catalyst is a hub of activity, where ideas are sparked and brought to life. Our events calendar is packed with opportunities for students to learn, collaborate, and grow. We believe that <span className="text-underline font-normal">learning shouldn't be confined</span> to the classroom. Our events offer a unique learning experience that goes beyond textbooks.
        </motion.p>

        <motion.p 
          className="text-lg z-[100] md:text-2xl font-extralight tracking-normal mt-12"
          variants={itemVariants}
        >
          Our events are designed to cater to a wide range of interests, from <span className="text-underline font-normal">technical workshops to entrepreneurial bootcamps.</span> We believe in creating a platform for students to <span className="text-underline font-normal">explore their passions and develop their skills.</span>
        </motion.p>

        {/* Mobile-friendly scrollable events section */}
        <div className="relative  w-full">
          {/* Scroll buttons for mobile */}
          <div className=" md:hidden absolute z-10 top-1/2 transform -translate-y-1/2 w-full pointer-events-none">
            {/* {!isAtStart && (
              <button 
                onClick={() => handleScroll('left')}
                className="absolute left-0 bg-black/50 rounded-full p-2 pointer-events-auto"
              >
               L
              </button>
            )}
            {!isAtEnd && (
              <button 
                onClick={() => handleScroll('right')}
                className="absolute right-0 bg-black/50 rounded-full p-2 pointer-events-auto"
              >
              R
              </button>
            )} */}
          </div>

          {/* Horizontal scrollable container */}
          <motion.div 
            ref={scrollContainerRef}
            className="md:hidden flex overflow-x-scroll scrollbar-hide gap-3 pb-4 snap-x snap-mandatory"
            style={{ 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {events.slice(-4).map((event, index) => (
              <div 
                key={index} 
                className="snap-center flex-shrink-0 w-[60vw] max-w-[350px]"
              >
                <EventCard 
                  shortDescription={event.oneline_description} 
                  eventName={event.name} 
                  imgSrc={`/events/${event.year}${event.img}`} 
              
                />
              </div>
            ))}
          </motion.div>

          {/* Desktop grid layout */}
          <motion.div 
            // className="hidden md:flex gap-10 mt-12 items-center "
             className="hidden md:flex flex-wrap  lg:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.4,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {events.slice(-4).map((event, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { 
                    opacity: 0, 
                    scale: 0.9 
                  },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <EventCard 
                  shortDescription={event.oneline_description} 
                  eventName={event.name} 
                  imgSrc={`/events/${event.year}${event.img}`} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}