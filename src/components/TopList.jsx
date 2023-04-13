import React from 'react'
import { Pie } from '@nivo/pie'

const TopList = (props) => {
  return (
    <div className='md:flex px-3 mt-10 justify-around space-y-2 md:space-x-2 md:space-y-0 items-center mb-10'>
    <div className='flex bg-white justify-center space-x-5 md:space-x-10 xl:space-x-14 py-5 rounded-md border border-secondary md:px-20 md:py-8 xl:px-32 xl:py-16'>
      <Pie data={props.list} width={100} height={100} innerRadius={0.6} />
      <div className='font-bold space-y-4'>
        <h1 className='text-md md:text-md xl:text-xl'>Total Applied List</h1>
        <h1 className='text-count md:text-md xl:text-xl'>Remaining</h1>
      </div>
    </div>
    <div className='flex bg-white justify-center space-x-5 md:space-x-10 xl:space-x-14 py-5 rounded-md border border-secondary md:px-20 md:py-8 xl:px-32 xl:py-16'>
      <Pie data={props.download} width={100} height={100} innerRadius={0.6} />
      <div className='font-bold space-y-4'>
        <h1 className='text-md md:text-md xl:text-xl'>Total Downloads</h1>
        <h1 className='text-count md:text-md xl:text-xl'>Count</h1>
      </div>
    </div>
  </div>
  )
}

export default TopList