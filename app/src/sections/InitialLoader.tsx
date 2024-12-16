'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '@/public/logo/Headerlogo.svg'
import { Darker_Grotesque } from 'next/font/google';

const dg = Darker_Grotesque({ subsets: ['latin'] });
const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimize DOM manipulation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = originalOverflow;
    }, 800); // Reduced delay

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);


  useEffect(() => {
    // Prevent scrolling when component mounts
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    // Add event listeners to prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    
    // Prevent default scroll behaviors
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isLoading ? 1 : 0,
        y: isLoading ? 0 : '-100%'
      }}
      transition={{ 
        duration: 0.6, // Faster transition
        ease: 'easeInOut'
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000',
        zIndex: 9999,
        pointerEvents: isLoading ? 'auto' : 'none' // Disable interactions when not loading
      }}
      className='relative w-screen h-screen overflow-hidden'
    >
      <div className='flex flex-col justify-center items-center gap-4'>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeOut',
            delay: 0.1 
          }}
        >
          {/* <Image 
            src={Logo} 
            alt='Catalyst Logo' 
            width={80} 
            height={80} 
            priority
            className='object-contain'
          /> */}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeOut',
            delay: 0.3 
          }}
        className={`text-white text-6xl font-semibold text-center ${dg.className}`}>
        
          Catalyst Mar Baselios IEDC
        </motion.h1>

      </div>


   <div className='absolute inset-0 -z-10 opacity-20'>
        <Image
          alt="bg-main"
          src='/bg-main.png'
          fill
          sizes="100vw"
          priority
          quality={20} // Reduced image quality to decrease file size
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default InitialLoader;