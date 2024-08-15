import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const links = [
    {
        page : 'Home',
        path : '/'
    },
    {
        page : 'Events',
        path : '/events'
    },
    {
        page : 'Team',
        path : '/team'
    },
    {
        page : 'Innovate',
        path : '/innovate'
    },
    {
        page : 'MuLearn',
        path : '/mulearn'
    },
    {
        page : 'About',
        path : '/about'
    }

]

const socials = [
  {
      page : 'Instagram',
      path : '/'
  },
  {
      page : 'Facebook',
      path : '/'
  },
  {
      page : 'Linkedin',
      path : '/'
  },
  {
    page : 'Youtube', 
    path : '/'
  },

]

  return (
    <>
      <div className='w-screen footer-gradient-2  gradient-border-top flex  flex-col   text-white justify-center py-12 gap-14   relative  overflow-hidden  px-20  '>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute z-10  bottom-0 '></Image>
      <Image src={'./elements/Gradient.svg'} layout='fill' alt='footer background' className='absolute  bottom-0 -z-10 '></Image>
        <div className='flex  flex-row z-20 justify-between gap-24 '>
          <Image src={'./logo/Headerlogo.svg'} width={150} height={150} alt='logo' className='object-cover'></Image>
         <div className='flex  gap-24 items-start'>
         <div className='flex flex-col text-base font-light justify-start  gap-2'>
          

            {
            links.map((link,index)=>{
                return (
                    <div key={index} className='w-fit  group'>
                         <Link  className="text-base font-light text-white" href={link.path}>{link.page}</Link>
                      <div className='scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white '></div>
                    </div>
                    //  <Link key={index} href={link.path} className={` md:text-base  font-light hover:font-normal transition-all duration-200 ease-in-out text-center `}>{link.page}</Link>
                )
            })
         }
          </div>
       
          <div className='flex flex-col  pr-10 text-base font-light justify-center gap-2'>
            {/* <Link href={'/'} >Instagram</Link>
            <Link href={'/'} >Facebook</Link>
            <Link href={'/'} >Linkedin</Link>  */}

{
            socials.map((link,index)=>{
                return (
                    <div key={index} className='w-fit  group'>
                         <Link  className="text-base font-light text-white" href={link.path}>{link.page}</Link>
                      <div className='scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out origin-left h-[1px] w-full bg-white '></div>
                    </div>
                    //  <Link key={index} href={link.path} className={` md:text-base  font-light hover:font-normal transition-all duration-200 ease-in-out text-center `}>{link.page}</Link>
                )
            })
         }
          </div>
         </div>
        </div>
        <div className='flex flex-row text-sm font-extralight justify-between text-white z-20'>
          <p >2024-Catalyst IEDC </p>
          <p >All rights reserved.</p>
        </div>
      
      </div>
      {/* <div className='  right-0'>
          <Image
            src="/footerlines.svg"
            width={900}
            className='absolute opacity-75 bottom-0 -right-11'
            height={200}
            alt="footerlines "
          />
        </div> */}
      
    
    </>
  )
}

export default Footer
