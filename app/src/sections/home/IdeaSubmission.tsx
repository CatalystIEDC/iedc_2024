import React from "react";
import Button from "../../components/Button";
import Image from "next/image";
import { SiEbox, SiHackthebox } from "react-icons/si";
import ScrollAnimationWrapper from "../ScrollAnimationWrapper";

const IdeaSubmission = () => {
  return (
    <ScrollAnimationWrapper className="w-screeen">
    <div className="  w-screen text-white flex gap-0   items-center justify-between h-screen px-14 py-32">
      <div className="flex flex-col  gap-12 justify-start items-start">
        <div className="flex flex-col gap-5 w-3/4">
          <h1 className="text-6xl  tracking-tighter">
            Empowering the Future Through Technology
          </h1>
          <p className=" text-xl opacity-55 font-light tracking-tight">
            At Catalyst, we believe in the power of technology and innovation to
            shape the world we live in. Join us in the mission to discover new prodigies and incubate them into entrepeneurship.
          </p>
        </div>
        <div className=" w-full md:w-4/5 py-8  gap-8 flex">
          <div className="flex flex-col w-[60%] border group overflow-hidden p-6 gap-1 relative  rounded-md justify-start items-start gap-23">
            <SiEbox size={30} className="my-6" />
            <h1 className="text-2xl tracking-tight">Technology Hub</h1>
            <h2 className=" font-extralight tracking-tight text-base">
              Stay updated with the latest trends, news, and insights in the
              world of technology.
            </h2>
            <Image
              src={"./elements/Gradient.svg"}
              layout="fill"
              alt="footer background"
              className="absolute -z-10 group-hover:scale-125 top-10 transition-all duration-300 ease-in-out"
            ></Image>
          </div>
          <div className="flex flex-col w-[60%] border p-6 group overflow-hidden relative  gap-1 rounded-md justify-center items-start gap-23">
            <SiHackthebox size={30} className="my-6" />
            <h1 className="text-2xl tracking-tight">Community Engagement</h1>
            <h2 className=" font-extralight tracking-tight text-base">
              Connect with like-minded individuals and collaborate on innovative
              projects.
            </h2>
            <Image
              src={"./elements/Gradient.svg"}
              layout="fill"
              alt="footer background"
              className="absolute -z-10 group-hover:scale-125 top-10  transition-all duration-300 ease-in-out"
            ></Image>
          </div>
        </div>
        <div className="">
          <Button href="/innovate" text="Learn More" />
        </div>
      </div>
      <div className="">
        <Image
          alt="tech"
          src={"/technology.jpg"}
          className="aspect-square rounded-md"
          width={800}
          height={800}
        />
      </div>
    </div>
    </ScrollAnimationWrapper>
  );
};

export default IdeaSubmission;
