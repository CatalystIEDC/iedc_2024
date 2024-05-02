import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";
import EventBanner from "./src/components/EventBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Catalyst IEDC",
  description: "Official Website of Catalyst IEDC",
};
const currentEvent = {
  name: "Hackathon",
  details:
    "✦✦Catalyst IEDC is conducting a 3-day long Hackathon from 10th to 12th of September. Register now! ✦✦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={` overflow-x-hidden`}>
      <Navbar/>
      <EventBanner event={currentEvent} />
      {children}
      <Footer/>
      </body>
      
    </html>
  );
}
