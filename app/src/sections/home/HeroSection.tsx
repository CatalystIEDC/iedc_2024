import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const icons = [
    {
      name: "Lightbulb",
      path: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z",
    },
    {
      name: "Rocket",
      path: "M12 2.5s-5 3.75-5 9.5 5 9.5 5 9.5 5-3.75 5-9.5-5-9.5-5-9.5zm0 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    },
    {
      name: "Cog",
      path: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
    },
    {
      name: "Graph",
      path: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
    },
    {
      name: "Puzzle",
      path: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z",
    },
  ];

  const generateIcons = () => {
    return icons.map((icon, index) => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      // const randomSize = Math.random() * 30 + 20
      const randomRotation = Math.random() * 360;

      return (
        <svg
          key={index}
          className="absolute z-10 text-gray-200"
          style={{
            left: `${randomX}%`,
            top: `${randomY}%`,
            width: "50px",
            height: "50px",
            // width: `${randomSize}px`,
            // height: `${randomSize}px`,
            transform: `rotate(${randomRotation}deg)`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d={icon.path} />
        </svg>
      );
    });
  };
  return (
    <div className="w-screen h-fit -z-10 mt-32   overflow-hidden  flex flex-col items-center pt-20 px-8 relative">
   
      <div className="w-full rounded-3xl pt-20 bg-white relative overflow-hidden h-[600px] text-center   event-background mb-10">
        <div className="z-50">
          <h1 className=" md:text-4xl tracking-tighter  text-center font-medium text-black">
            Catalyst Mar Baselios IEDC
          </h1>
          <div className="text-[#000000e8] text-6xl z-[200] font-medium text-center mx-auto tracking-[-3.15px] leading-[70px] w-3/4">
            Where aspiring entrepreneurs become empowered innovators
          </div>
        </div>

        <Image
          src={"/collegembcet.png"}
          width={5000}
          height={3000}
          alt="College"
          className=" absolute left-1/2 bottom-8 md:bottom-10 scale-[2] md:scale-125 -translate-x-1/2"
        ></Image>
      </div>
      <Image
        src={"./elements/Gradient.svg"}
        layout="fill"
        alt="footer background"
        className="absolute z-10  top-0 "
      ></Image>
    </div>
  );
};

export default HeroSection;
