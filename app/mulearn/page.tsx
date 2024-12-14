"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { FiDivideCircle } from "react-icons/fi";

const dm = DM_Sans({ subsets: ["latin"] });
const page = () => {
  const data = [
    {
      title: "Workshops and Training Programs",
      description:
        "Both organizations conduct workshops aimed at enhancing skills related to innovation and entrepreneurship.",
    },
    {
      title: "Idea Incubation",
      description:
        "Catalyst IEDC provides resources for students to incubate their ideas, offering mentorship from experienced faculty and industry professionals.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Events organized by both Catalyst IEDC and Mulearn facilitate networking among students, alumni, and industry experts.",
    },
    {
      title: "Hackathons and Competitions",
      description:
        "Engaging students in hackathons encourages them to think critically and work collaboratively under pressure.",
    },
  ];

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
      className={`${dm.className} flex flex-col gap-5 relative font-extralight text-white   min-h-[100vh] overflow-hidden px-12 w-full py-40  h-full`}
    >
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute -z-10 rotate-180 pointer-events-none top-0 opacity-50 "
      ></Image>

      <Image
        alt="Mulearn Logo"
        src={"/mulearn.svg"}
        width={400}
        height={400}
        className="object-cover absolute right-10  -z-10 opacity-[0.05]"
      />
      <motion.div
        className="z-10 flex flex-col items-start gap-2"
        variants={itemVariants}
      >
        <h1 className="text-white font-normal tracking-tighter text-5xl">
          Catalyst IEDC x μLearn
        </h1>
        <p className="text-2xl font-light  text-white">
          Fostering Innovation and Ideation
        </p>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl mb-12 font-extralight tracking-normal"
        variants={itemVariants}
      >
        Catalyst IEDC (Innovation and Entrepreneurship Development Centre) at
        Mar Baselios College of Engineering and Technology plays a pivotal role
        in nurturing the{" "}
        <span className="text-underline">entrepreneurial spirit</span> among
        students. This initiative aligns closely with the philosophy of Mulearn,
        which emphasizes
        <span className="text-underline">
          {" "}
          collaborative learning and peer-driven education
        </span>
        . Both organizations share a commitment to fostering innovation and
        ideation, albeit through different approaches.
      </motion.p>

      <div className="mb-12 flex flex-col items-start gap-5">
        <motion.div className="z-20" variants={itemVariants}>
          <h1 className="text-white font-normal tracking-tighter text-3xl">
            Shared vision for Innovation
          </h1>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl font-extralight tracking-normal"
          variants={itemVariants}
        >
          Catalyst IEDC is dedicated to inspiring students to{" "}
          <span className="text-underline ">
            become independent thinkers and problem solvers
          </span>
          . By focusing on the ideation process, it encourages students to
          explore their creativity and develop solutions to real-world
          challenges.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-extralight tracking-normal"
          variants={itemVariants}
        >
          Mulearn complements this vision by promoting a culture of{" "}
          <span className="text-underline">mutual learning</span> through{" "}
          <span className="text-underline">micro peer groups</span>, allowing
          students to engage with each other, share ideas, and collaborate on
          projects.
        </motion.p>
      </div>

      <div className="flex flex-col items-start gap-8">
        <motion.div className="z-20" variants={itemVariants}>
          <h1 className="text-white font-normal tracking-tighter text-3xl">
            Key Initiatives
          </h1>
        </motion.div>
        <div className="flex items-center flex-wrap gap-5 lg:justify-between  w-full pr-12">
          {data.map((item, index) => (
            <div key={index} className="cursor-pointer input-border p-6 min-h-52 min-w-80 flex flex-col size-full justify-between   max-w-xs bg-[#171F6126] h-56 relative overflow-hidden rounded-lg gap-4 shadow-lg">
              <h3 className=" text-white text-2xl font-normal mb-2">
                {item.title}
              </h3>
              <p className="text-gray-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-12 flex flex-col items-start gap-5">
        <motion.div className="z-20" variants={itemVariants}>
          <h1 className="text-white font-normal tracking-tighter text-3xl">
            Impact on Students
          </h1>
        </motion.div>
        <motion.p
          className="text-lg md:text-xl font-extralight tracking-normal"
          variants={itemVariants}
        >
          The collaboration between Catalyst IEDC and Mulearn significantly
          impacts students by equipping them with the skills necessary for
          success in today&apos;s dynamic environment. Students emerge not only as
          graduates but as proactive individuals ready to tackle challenges with
          innovative solutions.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-extralight tracking-normal"
          variants={itemVariants}
        >
          The relationship between Catalyst IEDC and Mulearn exemplifies a
          commitment to nurturing the next generation of innovators and
          entrepreneurs. By promoting ideation through collaborative learning
          and providing essential resources for skill development, both
          organizations are instrumental in shaping a vibrant ecosystem that
          empowers students to realize their potential.
        </motion.p>
      </div>
      <div className=" flex flex-col items-start gap-5">
        <motion.div className="z-20" variants={itemVariants}>
          <h1 className="text-white font-normal tracking-tighter text-3xl">
            Achievements
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl font-light tracking-normal"
          variants={itemVariants}
        >
          MuAwards 2023
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-extralight tracking-normal"
          variants={itemVariants}
        >
          Mulearn, the academic platform of GTech - Group of Technology
          Companies, awards Karma Points to learners based on their
          contributions to the Mulearn Discord platform. Learners earn these
          points by actively participating in tasks related to various interest
          groups such as AI, Web Development, UI/UXdesign, Cyber Security, IoT,
          Blockchain,Entrepreneurship, Product Development, and more.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-normal tracking-normal"
          variants={itemVariants}
        >
        <span className="font-semibold">Faculty Coordinator:</span> Mr. Arun J. S., AssistantProfessor, EC
        </motion.p>
        <motion.div
          className="text-lg mt-5 md:text-lg font-extralight flex flex-col items-start gap-3 tracking-normal"
          variants={itemVariants}
        >
          <div className="text-xl font-medium"> 1. Top Campus Award 2023</div>
          <div>Mar Baselios College of Engineering and Technology proudly clinched the title of
Top Campus 2023 in the Mulearn Annual Awards. This prestigious accolade is a
testimony to the exceptional performance, securing an impressive 8 lakh Karma
Points throughout the year by our students. This recognition is a statewide
achievement, positioning the College at the forefront of academic and skilling
excellence.</div>
        </motion.div>
        <Image
        alt="Top Campus"
        src={'/mulearn/mulearn3.png'}
        width={200}
        height={400}
        className="object-cover items-center "
        />
        <motion.div
          className="text-lg mt-5 md:text-lg font-extralight flex flex-col items-start gap-3 tracking-normal"
          variants={itemVariants}
        >
          <div className="text-xl font-medium"> 2. Team Codeify - Top Learning Circle in the State</div>
          <div>In another remarkable achievement, Team Codeify has emerged as the Top
Learning Circle in the State. Mr.Arun J. S., Assistant Professor, EC and Lead
Enabler Mulearn MBCET, along with Student Team Members Aditya S, Amrithesh
S, Ameer Ansary of S6 EC2, and Prajwal P P of S6 CS2, collectively amassed an
impressive 25800 Karma points</div>
        </motion.div>
        <Image
        alt="Top Campus"
        src={'/mulearn/mulearn1.png'}
        width={200}
        height={400}
        className="object-cover items-center "
        />
        <motion.div
          className="text-lg mt-5 md:text-lg font-extralight flex flex-col items-start gap-3 tracking-normal"
          variants={itemVariants}
        >
          <div className="text-xl font-medium"> 3. MBCET Reaches 1 Million on Mulearn Leaderboard</div>
          <div>Mar Baselios College of Engineering and Technology (MBCET) achieved a
milestone on the Mulearn Campus Leaderboard, reaching 1 million karma points
which was the second college in Kerala to do so after SJCET, Kottayam. This
signifies excellence in education and research, due to active participation of
MBCET Students in Mulearn&apos;s programs.</div>
        </motion.div>
        <Image
        alt="Top Campus"
        src={'/mulearn/mulearn2.png'}
        width={200}
        height={400}
        className="object-cover items-center "
        />
      </div>
    </motion.div>
  );
};

export default page;
