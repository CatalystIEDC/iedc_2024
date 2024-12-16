"use client";
import React from "react";
import Logo from "@/public/logo/Headerlogo.svg";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import useNavbarStore from "@/app/utils/navbar";

const Navbar = () => {
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
    <div className="flex fixed z-[300] top-0 w-screen py-4 px-8 lg:px-14 justify-between bg-[#010314] backdrop-blur-2xl items-center overflow-hidden text-white">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="Catalyst Logo"
          width={45}
          height={45}
          className="object-cover md:scale-100 scale-75"
        />
      </Link>
      <Image
        src={"/elements/Gradient.svg"}
        style={{
          imageRendering: "-moz-crisp-edges",
        }}
        width={3000}
        height={300}
        alt="footer background"
        className="absolute -z-10 pointer-events-none top-0 left-0"
      />
      <div className="gap-12 hidden lg:flex">
        {links.map((link, index) => {
          return (
            <div key={index} className="w-fit group">
              <Link
                className="text-base font-light text-white"
                href={link.path}
              >
                {link.page}
              </Link>
              <div className="scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white"></div>
            </div>
          );
        })}
      </div>
      <HiOutlineMenuAlt3
        onClick={toggleNavbar}
        size={30}
        className="lg:hidden"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#010314] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-center mt-20">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                className="text-base font-light text-white my-4"
                href={link.path}
                onClick={toggleNavbar}
              >
                {link.page}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
