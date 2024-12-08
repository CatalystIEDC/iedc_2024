'use client'
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";

 const dm = DM_Sans({ subsets: ["latin"] });
const page = () => {
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
    className={`${dm.className} flex flex-col gap-5 relative font-extralight text-white   min-h-[100vh] overflow-hidden pl-12 w-full py-40 h-full`}
  >
     <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute -z-10 rotate-180 pointer-events-none top-0 opacity-50 '></Image>
            <motion.div className="z-20" variants={itemVariants}>
      <h1 className="text-white font-normal tracking-tighter text-5xl">Catalyst IEDC</h1>
      </motion.div>
     

      <section className="mb-8">
        <p className="text-lg text-white">
          The Innovation and Entrepreneurship Development Centre (IEDC) at Mar Baselios College of Engineering and Technology (MBCET) is a vibrant hub fostering innovation, creativity, and entrepreneurial skills among students. Established in 2013, IEDC operates under the name <strong>Catalyst</strong>, reflecting its role in empowering young minds to address real-world challenges with transformative solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg text-white">
          IEDC envisions a community of innovators and entrepreneurs who transform their ideas into sustainable, impactful ventures. By fostering a culture of creativity, collaboration, and technical excellence, the center aspires to contribute to societal growth and technological advancements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-white">
          <li>Inspire Creativity: Encourage students to think outside the box and pursue innovative ideas.</li>
          <li>Foster Collaboration: Provide a platform for multidisciplinary teamwork to tackle challenges effectively.</li>
          <li>Enable Transformation: Support students in transforming concepts into viable products or services through mentorship and resources.</li>
          <li>Promote Industry Readiness: Equip students with entrepreneurial skills to excel in competitive professional environments.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Core Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-white">
          <li>Cultivate Entrepreneurial Mindsets: Instill an entrepreneurial spirit among students by organizing workshops, ideation sessions, and hackathons.</li>
          <li>Provide Resources and Support: Offer access to tools, technologies, and funding opportunities necessary for prototyping and development.</li>
          <li>Build Industry Connections: Collaborate with industry leaders, startups, and government initiatives to bridge the gap between academia and real-world applications.</li>
          <li>Mentor Future Leaders: Guide students in developing leadership skills and fostering ethical, sustainable business practices.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Programs and Activities</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-white">
          <li>Startup Incubation: Support budding entrepreneurs in turning ideas into startups through incubation programs.</li>
          <li>Skill Development Workshops: Host training sessions on emerging technologies, business development, and product management.</li>
          <li>Competitions and Challenges: Organize hackathons, design challenges, and pitch contests to inspire innovation.</li>
          <li>Mentorship Programs: Facilitate interactions with industry experts and successful entrepreneurs for guidance and insights.</li>
          <li>Community Engagement: Collaborate with local and global communities to solve pressing issues using innovative engineering solutions.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <p className="text-lg text-white">
          Since its inception, IEDC has enabled students to launch successful startups, develop award-winning projects, and participate in prestigious national and international competitions. The center continues to grow as a catalyst for impactful change, nurturing the next generation of innovators.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg text-white">
          Whether you’re a student, a mentor, an investor, or a collaborator, IEDC welcomes you to join its mission of fostering innovation and entrepreneurship. Together, we can shape a future driven by creativity, technology, and sustainable growth.
        </p>
       
      </section>
     
    </motion.div>
  );
};

export default page;
