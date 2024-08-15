import React from 'react'
import EmailInputButton from '../components/EmailInputButton'

const EmailInput = () => {
  return (
    <div className='bg-white flex w-[75vw] md:w-[35vw] rounded-md p-3 overflow-hidden'>
        <input type="email" placeholder="your@email.com" className='p-2 outline-none text-black text-xl w-full'/>
        <EmailInputButton/>
    </div>
  )
}

export default EmailInput