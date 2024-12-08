'use client'
import useNavbarStore from "@/app/utils/navbar";
import Link from "next/link";
import React from "react";

const MiniNavbar = () => {
  const { isOpen, toggleNavbar } = useNavbarStore();
  const links = [
    {
      page: "Home",
      path: "/",
    },
    {
      page: "Events",
      path: "/events",
    },
    {
      page: "Team",
      path: "/team",
    },
    {
      page: "Innovate",
      path: "/innovate",
    },
    {
      page: "MuLearn",
      path: "/mulearn",
    },
    {
      page: "About",
      path: "/about",
    },
  ];

  return (
    isOpen && (
      <div
        className={`absolute top-0 right-0 h-screen w-full bg-[#010314] text-white z-[500] flex flex-col px-8 justify-center gap-8 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleNavbar}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={toggleNavbar}
            className="text-4xl text-white font-light tracking-tighter"
          >
            {link.page}
          </Link>
        ))}
      </div>
    )
  );
};

export default MiniNavbar;
