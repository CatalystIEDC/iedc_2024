'use client'
import React, { useMemo,useEffect, useState } from "react";
import { events } from "@/app/src/utils/events";
import { fetchImages } from "@/app/utils/fetchimages";
import Image from "next/image";

const Page = ({ params }: any) => {
  const [imgSrc, setImgSrc] = useState<string[]>([]);
  const eventName = decodeURIComponent(params.id);
  const filteredEvent = useMemo(() => {
    return events.find((event) => event.name === eventName);
  }, []);

  

  useEffect(() => {
    const fetchImagesAsync = async () => {
      const images = await fetchImages(filteredEvent);
     setImgSrc(images);
    };
    fetchImagesAsync();
  }, [eventName]);
  
  
  return (
    <div className=" pl-8 md:pl-12 w-screen relative  h-screen text-white pt-40">
      <Image src={'/elements/Gradient.svg'} layout='fill' alt='footer background' className=' -z-10 rotate-180 pointer-events-none top-0 opacity-50 '></Image>

      <div className="flex flex-col items-start gap-10 w-full h-[80dvh]  p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-10">
          <div className="text-4xl leading font-medium text-white">{eventName}</div>
          <div className="text-lg bg-blue-950 px-3 py-2 rounded-sm text-white">{filteredEvent?.year}</div>
        </div>
        <div className="w-screen flex flex-wrap items-center gap-5">
          {imgSrc.map((src,index) => (
            <Image
            alt="event image"
            key={index}
            src={src}
            width={300}
            height={300}
            className="object-cover rounded-lg"
            >
            </Image>
          ))}
        </div>
        <div className="space-y-4">
          <div key={filteredEvent?.name} className="rounded-lg shadow-md">
            <div className="text-2xl  text-white font-light leading-9">
              {filteredEvent?.about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
