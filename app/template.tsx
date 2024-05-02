"use client";
import { usePathname } from "next/navigation"
import { useEffect } from "react";
import { animateLogoIn, animatePageIn } from "../app/src/utils/loadings";
import Image from "next/image";
import Logo from '@/public/Logo/Header logo.svg'


export default function Template({ children }:{children:React.ReactNode}) {
  const pathname = usePathname();
    useEffect(() => {
     
      if(pathname ==='/'){
        animateLogoIn();
    }
        animatePageIn();
    },[])

  return (
    <div className="z-[100]  ">
      <div
        id="banner-1"
        className="min-h-screen bg-slate-100 fixed top-0 left-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen bg-slate-100 fixed top-0 left-1/4 w-1/4"
      >

      </div>
      <div
        id="banner-3"
        className="min-h-screen bg-slate-100 fixed top-0 left-2/4 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen bg-slate-100 fixed top-0 left-3/4 w-1/4"
      ></div>
      <div id="logo" className="logo text-white text-7xl font-bold absolute top-1/2 opacity-0 hidden left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image alt="Logo" width={200} height={200} src={Logo}></Image>
      </div>
{children}
    </div>
  );
}