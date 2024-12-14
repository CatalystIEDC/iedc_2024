import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";
import EventBanner from "./src/components/EventBanner";
import InitialLoader from "./src/sections/InitialLoader";
import MiniNavbar from "./src/components/MiniNavbar";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalyst IEDC",
  description: "Official Website of Catalyst IEDC",
};

const currentEvent = {
  name: "Hackathon",
  details:
    "✦✦RELEVENT ‘25 – Your Gateway to Leadership and Innovation! Register now! ✦✦",
    link: 'https://www.instagram.com/p/DDQ_-xmyb_R/'
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm.className} bg-[#010314] overflow-x-hidden`}>
        {/* <InitialLoader /> */}
        <Navbar />
        <MiniNavbar/>
        <EventBanner event={currentEvent} />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
