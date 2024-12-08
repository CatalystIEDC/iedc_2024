import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Image from "next/image";
import { SiEbox, SiHackthebox } from "react-icons/si";

const IdeaSubmission = () => {
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

  const cardVariants = {
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
  }

  return (
    <div className="w-screen relative gradient-border-top">
      <Image 
        src={'./elements/Gradient.svg'} 
        layout='fill' 
        alt='footer background' 
        className='absolute rotate-180 opacity-40 -z-10 pointer-events-none top-0'
      />
      
      <div className="text-white grid grid-cols-2 gap-16 h-screen px-14 py-32">
        <motion.div 
          className="flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h1 
            className="text-6xl tracking-tighter mb-8"
            variants={itemVariants}
          >
            Empowering the Future Through Technology
          </motion.h1>

          <motion.p 
            className="text-2xl font-extralight tracking-tight mb-12"
            variants={itemVariants}
          >
            At Catalyst, we believe in the power of technology and innovation to
            shape the world we live in. Join us in the mission to <span className="text-underline font-normal">discover new prodigies</span> and incubate them into <span className="font-normal text-underline">entrepreneurship</span>.
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="flex flex-col border group overflow-hidden p-6 gap-1 relative rounded-md"
              variants={cardVariants}
            >
              <SiEbox size={30} className="my-6" />
              <h1 className="text-2xl tracking-tight">Technology Hub</h1>
              <h2 className="font-extralight tracking-tight text-base">
                Stay updated with the latest trends, news, and insights in the
                world of technology.
              </h2>
              <Image
                src={"./elements/Gradient.svg"}
                layout="fill"
                alt="background"
                className="absolute -z-10 group-hover:scale-125 top-10 transition-all duration-300 ease-in-out"
              />
            </motion.div>

            <motion.div 
              className="flex flex-col border group overflow-hidden p-6 gap-1 relative rounded-md"
              variants={cardVariants}
            >
              <SiHackthebox size={30} className="my-6" />
              <h1 className="text-2xl tracking-tight">Community Engagement</h1>
              <h2 className="font-extralight tracking-tight text-base">
                Connect with like-minded individuals and collaborate on innovative
                projects.
              </h2>
              <Image
                src={"./elements/Gradient.svg"}
                layout="fill"
                alt="background"
                className="absolute -z-10 group-hover:scale-125 top-10 transition-all duration-300 ease-in-out"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
          >
            <Button href="/innovate" text="Learn More" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            alt="tech"
            src={"/technology.jpg"}
            className="aspect-square rounded-md shadow-2xl"
            width={800}
            height={800}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default IdeaSubmission;