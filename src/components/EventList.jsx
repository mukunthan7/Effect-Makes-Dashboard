import React from 'react'

const EventsList = (props) => {
  return (
    <div className='md:flex px-3 mt-10 justify-around space-y-2 md:space-x-2 md:space-y-0 items-center mb-10'>
    <div className='flex bg-white items-center justify-center space-x-5 md:space-x-10 xl:space-x-14 py-5 rounded-md border border-secondary md:px-20 md:py-[0.7rem] xl:px-32 xl:py-10'>
    <div className='border-[15px] px-8 py-6 border-quaternary rounded-full text-center'>
        <h1 className='text-xl md:text-4xl font-bold'>{props.events}</h1>
      </div>
      <div className='font-bold space-y-4 pr-10'>
        <h1 className='text-md md:text-md xl:text-xl'>Total Events</h1>
        <h1 className='text-count md:text-md xl:text-xl'>Count</h1>
      </div>
    </div>
    <div className='flex bg-white justify-center items-center space-x-5 md:space-x-10 xl:space-x-14 py-5 rounded-md border border-secondary md:px-10 md:py-4 xl:px-32 xl:py-10'>
      <div className='border-[15px] px-8 py-6 border-quaternary rounded-full text-center' >
        <h1 className='text-2xl font-bold'>{props.upcoming}</h1>
      </div>
      <div className='font-bold space-y-4'>
        <h1 className='text-md md:text-md xl:text-xl'>Upcoming Events</h1>
        <h1 className='text-count md:text-md xl:text-xl'>Count</h1>
      </div>
    </div>
  </div>
  )
}

export default EventsList