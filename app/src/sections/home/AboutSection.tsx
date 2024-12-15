import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Logo from "@/public/logo/Headerlogo.svg";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "backOut",
      },
    },
  };

  return (
    <div className="relative w-screen h-fit  flex lg:flex-row flex-col gap-10  md:gap-32 text-white md:px-14 px-8 py-14 md:py-32">
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute -z-10 pointer-events-none rotate-180 opacity-100 mix-blend-overlay"
      />
      <Image
        alt="about background"
        src="/college4.png"
        layout="fill"
        className="object-cover absolute z-0 opacity-5"
      />

      <motion.div
        className="flex flex-col gap-5 md:justify-between items-start lg:w-3/5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1
          className="text-3xl md:text-6xl tracking-tighter"
          variants={itemVariants}
        >
          Catalyst IEDC
        </motion.h1>

        <div className="flex flex-col gap-5 ">
          <motion.p
            className="text-lg md:text-2xl font-extralight tracking-normal"
            variants={itemVariants}
          >
            The{" "}
            <span className="font-normal text-underline">
              Innovation and Entrepreneurship Development Centre
            </span>{" "}
            of Mar Baselios College of Engineering and Technology, Catalyst was
            inaugurated in the year{" "}
            <span className="font-normal text-underline">2013</span> with a
            purpose of inspiring students to become independent engineers by
            exposing then to the world of Entrepreneurship through Innovation.
            The Centre aims in sharpening the skills of students, broadening
            their knowledge base and equipping them with technical and
            non-technical qualities that an engineer need.
          </motion.p>

          <motion.p
            className="text-lg md:text-2xl font-extralight tracking-normal"
            variants={itemVariants}
          >
            Rather than pushing students to startup, the centre believes in{" "}
            <span className="font-normal text-underline">
              inculcating the spirit
            </span>{" "}
            in students. The members have identified the{" "}
            <span className="font-normal text-underline">
              true joy of self-learning
            </span>{" "}
            and they passionately involve in bringing life into their ideas, to
            solve the problems that they see around.
          </motion.p>
        </div>

        <motion.div className="w-fit z-20" variants={itemVariants}>
          <Button href="/about" text="Read More.." />
        </motion.div>
      </motion.div>

      <motion.div
        className="h-full relative flex justify-center items-center  "
        variants={logoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={Logo}
          alt="Catalyst Logo"
          width={300}
          height={300}
          className="object-cover md:scale-100 md:w-[300px]  w-[100px]"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
