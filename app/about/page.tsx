"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import NewsLetter from "../src/components/NewsLetter";

const dm = DM_Sans({ subsets: ["latin"] });
const page = () => {
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
      className={`${dm.className} flex flex-col gap-5 relative font-extralight text-white   min-h-[100vh] overflow-hidden px-12 w-full pt-40 h-full`}
    >
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute -z-10 rotate-180 pointer-events-none top-0 opacity-50 "
      ></Image>
       <Image
              alt="Mulearn Logo"
              src={"/logo/Headerlogo.svg"}
              width={400}
              height={400}
              className="object-cover absolute right-10  -z-10 opacity-[0.05]"
            />
      <motion.div className="z-20" variants={itemVariants}>
        <h1 className="text-white font-normal tracking-tighter text-5xl">
          Catalyst IEDC
        </h1>
      </motion.div>

      <div className="mb-8">
       <motion.p
              className="text-lg md:text-xl mb-12 font-extralight tracking-normal"
              variants={itemVariants}
            >
          Catalyst-Innovation and Entrepreneurship Development Centre (IEDC) of
          Mar Baselios College of Engineering and Technology was inaugurated in
          the year 2013. The Centre aims in <span className="text-underline">sharpening the skills of students,
          broadening their knowledge base</span> and equipping them with technical and
          non-technical qualities that an engineer need. We try to <span className="text-underline">inspire young
          engineers</span> to connect with great people & to explore recent
          technological developments.
          
        </motion.p>
        <motion.p
              className="text-lg md:text-xl mb-12 font-extralight tracking-normal"
              variants={itemVariants}
            >
        Rather than pushing students to startup,
          the centre believes in <span className="text-underline">inculcating the entrepreneurial spirit in
          students.</span> The members have identified the true joy of self-learning
          and they passionately involve in brining life into their ideas, to
          solve the problems that they see around. Catalyst-Mar Baselios IEDC
          aims in helping the students <span className="text-underline">follow their dreams and passion</span>  to help
          them depart MBCET campus not just as engineering graduates, but as
          real engineers who seek and solve problems.</motion.p>
      </div>

      <div className="flex flex-col gap-5 items-start ">
  <motion.div className="z-20" variants={itemVariants}>
           <h1 className="text-white font-normal tracking-tighter text-3xl">
             Vision
           </h1>
         </motion.div>
 
  <motion.p 
    className="text-lg md:text-xl mb-12 font-extralight tracking-normal text-white"
    variants={itemVariants}
  >
    IEDC envisions a community of innovators and entrepreneurs who transform their ideas into sustainable, impactful ventures. By fostering a culture of creativity, collaboration, and technical excellence, the center aspires to contribute to societal growth and technological advancements.
  </motion.p>
</div>

<div className="flex flex-col gap-5 items-start ">
   <motion.div className="z-20" variants={itemVariants}>
            <h1 className="text-white font-normal tracking-tighter text-3xl">
              Our Mission
            </h1>
          </motion.div>
  
  <motion.p 
    className="text-lg md:text-xl mb-12 font-extralight tracking-normal text-white"
    variants={itemVariants}
  >
    Our mission encompasses multiple key dimensions. We aim to inspire creativity by encouraging students to think outside the box and pursue innovative ideas. We foster collaboration by providing a platform for multidisciplinary teamwork to tackle challenges effectively. Our goal is to enable transformation, supporting students in converting conceptual ideas into viable products or services through dedicated mentorship and comprehensive resources. Additionally, we are committed to promoting industry readiness by equipping students with entrepreneurial skills that will help them excel in competitive professional environments.
  </motion.p>
</div>

      <div className="mb-8 flex flex-col items-start gap-3">
      <motion.div className="z-20" variants={itemVariants}>
            <h1 className="text-white font-normal tracking-tighter text-3xl">
            Core Objectives
            </h1>
          </motion.div>
        <ul className="list-disc list-inside space-y-2 text-lg text-white">
          <li>
          <span className="font-medium text-xl">Cultivate Entrepreneurial Mindsets: </span> Instill an entrepreneurial
            spirit among students by organizing workshops, ideation sessions,
            and hackathons.
          </li>
          <li>
          <span className="font-medium text-xl">Provide Resources and Support: </span> Offer access to tools, technologies,
            and funding opportunities necessary for prototyping and development.
          </li>
          <li>
          <span className="font-medium text-xl"> Build Industry Connections: </span> Collaborate with industry leaders,
            startups, and government initiatives to bridge the gap between
            academia and real-world applications.
          </li>
          <li>
          <span className="font-medium text-xl">Mentor Future Leaders: </span> Guide students in developing leadership
            skills and fostering ethical, sustainable business practices.
          </li>
        </ul>
      </div>

      <div className="mb-8 flex flex-col items-start gap-3">
      <motion.div className="z-20" variants={itemVariants}>
            <h1 className="text-white font-normal tracking-tighter text-3xl">
            Programs and Activities
            </h1>
          </motion.div>
        <ul className="list-disc list-inside space-y-2 text-lg text-white">
          <li>
          <span className="font-medium text-xl">Startup Incubation: </span> Support budding entrepreneurs in turning ideas
            into startups through incubation programs.
          </li>
          <li>
          <span className="font-medium text-xl"> Skill Development Workshops: </span>Host training sessions on emerging
            technologies, business development, and product management.
          </li>
          <li>
          <span className="font-medium text-xl">Competitions and Challenges: </span>Organize hackathons, design challenges,
            and pitch contests to inspire innovation.
          </li>
          <li>
          <span className="font-medium text-xl">Mentorship Programs: </span>  Facilitate interactions with industry experts
            and successful entrepreneurs for guidance and insights.
          </li>
          <li>
            <span className="font-medium text-xl">Community Engagement: </span> Collaborate with local and global communities
            to solve pressing issues using innovative engineering solutions.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-5 items-start ">
      <motion.div className="z-20" variants={itemVariants}>
            <h1 className="text-white font-normal tracking-tighter text-3xl">
            Achievements
            </h1>
          </motion.div>
        <motion.p  
    className="text-lg md:text-xl mb-12 font-extralight tracking-normal text-white"
    variants={itemVariants}
  >
    Our mission encompasses multiple key dimensions. We aim to inspire creativity by encouraging students to think outside the box and pursue innovative ideas. We foster collaboration by providing a platform for multidisciplinary teamwork to tackle challenges effectively. Our goal is to enable transformation, supporting students in converting conceptual ideas into viable products or services through dedicated mentorship and comprehensive resources. Additionally, we are committed to promoting industry readiness by equipping students with entrepreneurial skills that will help them excel in competitive professional environments.
  </motion.p>
      </div>
      {/* 
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg text-white">
          Whether you’re a student, a mentor, an investor, or a collaborator, IEDC welcomes you to join its mission of fostering innovation and entrepreneurship. Together, we can shape a future driven by creativity, technology, and sustainable growth.
        </p>
       
      </section> */}
      <NewsLetter />
    </motion.div>
  );
};

export default page;
