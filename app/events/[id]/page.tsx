import React from 'react'

const page = ({params}:any) => {
  return (
    <div className='bg-red-500  w-screen h-screen text-white pt-36'>
        Showing the Event {decodeURIComponent(params.id)}
    </div>
  )
}

export default page