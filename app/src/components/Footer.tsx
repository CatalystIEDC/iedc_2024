import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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

  const socials = [
    {
      page: "Instagram",
      path: "https://www.instagram.com/catalystiedc/",
    },
    {
      page: "LinkedIn",
      path: "https://www.linkedin.com/company/catalyst---mar-baselios-iedc",
    },
    {
      page : 'Discord',
      path : 'https://discord.com/invite/PMpm8WmtTx'
    },
    {
      page: "YouTube",
      path : "https://www.youtube.com/@CatalystMarBaseliosIEDC"
    }
  ];

  return (
    <div className="relative">
      <div className="w-[95vw] mb-5 md:mb-10 rounded-lg mx-auto footer-gradient-2 overflow-hidden   gradient-border-top flex flex-col   text-white justify-center pt-12 pb-24 md:pb-40 gap-14   relative    px-5 md:px-20  ">
        <Image
          src={"/elements/Gradient.svg"}
          layout="fill"
          alt="footer background"
          className="absolute z-10 scale-125 md:scale-100  md:bottom-0 "
        ></Image>
        <Image
          src={"/elements/Gradient.svg"}
          layout="fill"
          alt="footer background"
          className="absolute top-0 scale-150 md:scale-100 md:bottom-0 -z-10 "
        ></Image>
        <div className="flex flex-col   md:flex-row z-20 justify-between w-full relative  gap-24 ">
          {/* <Image src={'./logo/Headerlogo.svg'} width={200} height={50} alt='logo' className='object-cover scale-75 bg-red-5'></Image> */}
          <div className="flex md:flex-row flex-col gap-10 md:gap-24 items-start">
            <div className="flex flex-col gap-2 md:gap-5 h-full items-start">
              <div className="text-base md:text-lg">Content</div>
              <div className="flex text-sm md:text-base  font-extralight justify-start md:flex-nowrap flex-wrap  gap-3 md:gap-5">
                {links.map((link, index) => {
                  return (
                    <div key={index} className="w-fit  group">
                      <Link
                      
                        className="text-sm md:text-base font-light text-white"
                        href={link.path}
                      >
                        {link.page}
                      </Link>
                      <div className="scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white "></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-5 items-start">
              <div className="text-base md:text-lg">Socials</div>
              <div className="flex pr-10 text-base font-extralight justify-center md:gap-5 md:flex-nowrap flex-wrap  gap-3">
                {/* <Link href={'/'} >Instagram</Link>
            <Link href={'/'} >Facebook</Link>
            <Link href={'/'} >Linkedin</Link>  */}

                {socials.map((link, index) => {
                  return (
                    <div key={index} className="w-fit  group">
                      <Link
                      target="_blank"
                        className="text-sm md:text-base font-light text-white"
                        href={link.path}
                      >
                        {link.page}
                      </Link>
                      <div className="scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white "></div>
                    </div>
                    //  <Link key={index} href={link.path} className={` md:text-base  font-light hover:font-normal transition-all duration-200 ease-in-out text-center `}>{link.page}</Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row text-sm font-extralight justify-between text-white z-20">
          <p>Catalyst Mar Baselios IEDC </p>
          <p>All rights reserved.</p>
        </div>
        <div className="md:text-[200px] bg-red-500 text-5xl bottom-32  md:bottom-14  whitespace-nowrap left-1/2 -translate-x-1/2 absolute uppercase tracking-tighter  text-white font-bold   text-center -mb-32 catalyst-text">
          Catalyst IEDC
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
