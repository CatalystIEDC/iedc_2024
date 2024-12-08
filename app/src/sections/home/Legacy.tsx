import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"] });

const Legacy = () => {
  // Animation variants
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
    <div className={`gradient-border-top text-white w-screen h-screen flex justify-center p-7 overflow-hidden items-center relative ${dm.className}`}>
      <Image 
        src={'./elements/Gradient.svg'} 
        layout='fill' 
        alt='footer background' 
        className='absolute z-0 pointer-events-none top-0'
      />
      
      <motion.div 
        className="absolute left-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/toplines.svg"
          width={200}
          height={100}
          className=""
          alt="toplines"
        />
      </motion.div>

      <motion.div 
        className="z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="text-center text-3xl md:text-6xl z-20 tracking-[-2.15px] flex flex-col items-center justify-center gap-1">
          <motion.div 
            className="text-xl md:text-3xl tracking-tight font-light"
            variants={itemVariants}
          >
            Building a
          </motion.div>
          
          <motion.p 
            className="md:w-3/4"
            variants={itemVariants}
          >
            Legacy of Innovation and Entrepreneurship
          </motion.p>
          
          <motion.div 
            className="text-white/80 text-3xl font-light tracking-tighter"
            variants={itemVariants}
          >
           
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute mt-96 md:ml-0 ml-24 md:mt-24 md:right-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src="/bottomlines.svg"
          width={650}
          height={100}
          alt="bottomlines"
        />
      </motion.div>
    </div>
  );
};

export default Legacy;