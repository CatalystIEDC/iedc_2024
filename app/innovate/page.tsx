'use client'
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { DM_Sans } from "next/font/google";
import { FlipWords } from "../src/utils/flip-words";


const dm = DM_Sans({ subsets: ["latin"] });
const Page = () => {
  const words = useMemo(() => ["innovative", "entrepreneurial", "visionary", "creative", "pioneering", "groundbreaking"], []);
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
    className={`${dm.className} flex flex-col items-start md:items-center justify-center gap-5 relative font-extralight text-white  min-h-[100vh] overflow-hidden pl-5 md:pl-12 w-full py-40 h-full`}
  >
     <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute -z-10 rotate-180 pointer-events-none top-0 opacity-50 '></Image>
     <motion.div className="z-20" variants={itemVariants}>
      <h1 className="text-white font-light tracking-tight text-4xl md:text-5xl">Something  <FlipWords words={words} /></h1>
      </motion.div>

      <motion.div className="z-20" variants={itemVariants}>
      <h1 className="text-white text-left font-light tracking-tight text-4xl md:text-5xl">Soon.</h1>
      </motion.div>

   
    

     </motion.div>

  )
}

export default Page