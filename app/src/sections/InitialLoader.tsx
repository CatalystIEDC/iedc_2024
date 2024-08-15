'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '@/public/logo/Headerlogo.svg'

const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
    // Re-enable scrolling only when both loading and animation are complete
    if (!isLoading) {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
     
        y: isLoading ? 0 : '-100%'
      }}
      transition={{ duration: 1 }}
      onAnimationStart={handleAnimationStart}
      onAnimationComplete={handleAnimationComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
      
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000', // or any color you prefer
        zIndex: 9999
      }}
      className='w-screen'
    >
      <div className='flex flex-col justify-center items-center gap-5'>
        <motion.div
          initial={{  y: 20, scale: 1.2 }}
          animate={{  y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <Image src={Logo} alt='Catalyst Logo' width={100} height={100} className='object-cover'/>
        </motion.div>
        
        <motion.h1
          initial={{  y: 20 }}
          animate={{  y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          style={{
            color: '#fff',
            fontSize: '3rem',
            textAlign: 'center'
          }}
        >
          Catalyst Mar Baselios IEDC
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default InitialLoader;