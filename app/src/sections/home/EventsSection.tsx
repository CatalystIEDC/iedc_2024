"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import "../home/Styles/Styles.css"

const data = [
  {
    id: 1,
    text: "Event 1",
    url: "/event1.png",
  },
  {
    id: 2,
    text: "Event 2",
    url: "/event1.png",
  },
  {
    id: 3,
    text: "Event 3",
    url: "/event1.png",
  },
];

function Images({ text, url }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

  return (
    <section >
      <motion.div className="flex flex-col ">
        <motion.h2 style={{ y }}>{text}</motion.h2>
        <div ref={ref}>
          <Image className="img" width={500} height={500} src={url} alt={text} />
        </div>
      </motion.div>
    </section>
  );
}

export default function EventsSection() {
  return (
    <>
      <div className="">
        {data.map((event) => (
          <Images  key={event.id} text={event.text} url={event.url} />
        ))}
      </div>
    </>
  );
}
