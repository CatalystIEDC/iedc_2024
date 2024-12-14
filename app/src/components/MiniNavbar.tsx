"use client";
import useNavbarStore from "@/app/utils/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const MiniNavbar = () => {
  const { isOpen, toggleNavbar } = useNavbarStore();
  const links = [
    { page: "Home", path: "/" },
    { page: "Events", path: "/events" },
    { page: "Team", path: "/team" },
    { page: "Innovate", path: "/innovate" },
    { page: "MuLearn", path: "/mulearn" },
    { page: "About", path: "/about" },
  ];

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  return (
    <div
      className={`
        fixed 
        top-0 
        right-0 
        h-screen 
        w-full 
        bg-[#010314] 
        text-white 
        z-[600] 
        flex 
        flex-col 
        px-12 
        justify-center 
        gap-8 
        transform 
        transition-all 
        duration-500 
        ease-in-out 
        ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
        lg:hidden
      `}
      style={{
        transitionProperty: "transform, opacity",
        willChange: "transform, opacity",
      }}
    >
      <button
        onClick={toggleNavbar}
        className="
          absolute 
          top-10 
          right-10 
          z-10 
          text-6xl 
          transition-transform 
          duration-300 
          hover:scale-110 
          active:scale-95
        "
      >
        &times;
      </button>

      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          onClick={toggleNavbar}
          className="
            text-5xl 
            z-10 
            text-white 
            font-light 
            tracking-tighter 
            transform 
            transition-all 
            duration-300 
            hover:translate-x-4 
            hover:opacity-80
          "
        >
          {link.page}
        </Link>
      ))}

      <Image
        alt="bg-main"
        src="/bg-main.png"
        layout="fill"
        className="
          z-[5] 
          opacity-20 
          object-cover 
          transition-opacity 
          duration-500
        "
      />
    </div>
  );
};

export default MiniNavbar;