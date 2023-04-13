import React, { useState} from 'react'
import { FaImages } from 'react-icons/fa'

const initialState = {
  eventName: '',
  Depart: '',
  category: '',
  location: '',
  eventStart: '',
  eventEnd: '',
  lastDateToApply: '',
  participants: '',
  entryFee: '',
  shortTitle: '',
}

const CreateEvents = () => {

  const [data, setData] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    setData(initialState)
  }

  return (
    <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
      <div className='xs:flex md:flex justify-center items-center md:space-x-10'>
        <div>
          <div className='flex-col justify-center items-center mt-10'>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Event Name :</label>
            <div>
              <input name='eventName' onChange={handleChange}  className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Department :</label>
            <div>
              <input name='Depart' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Category :</label>
            <div>
              <input name='category' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Location :</label>
            <div>
              <input name='location' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Event Start Date :</label>
            <div>
              <input name='eventStart' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Event End Date :</label>
            <div>
              <input name='eventEnd' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
          </div>
        </div>
        <div>
        <div className='flex-col justify-center md:mt-10 items-center'>
          <label className='text-left text-md font-semibold ml-5 mb-2'>Last Date To Apply :</label>
          <div>
            <input name='lastDateToApply' onChange={handleChange}  className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
          </div>
          <label className='text-left text-md font-semibold ml-5 mb-2'>Participants :</label>
          <div>
            <input name='participants' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
          </div>
          <label className='text-left text-md font-semibold ml-5 mb-2'>Cover Image :</label>
          <div className='flex justify-center space-x-3 py-2 bg-white border border-secondary rounded-md'>
            <FaImages className='text-4xl text-quaternary' />
            <p className='text-quaternary'>Upload Image</p>
            <input  className='absolute opacity-0' type="file" />
          </div>
          <label className='text-left text-md font-semibold ml-5 mb-2'>Images :</label>
          <div className='flex justify-center space-x-3 py-2 bg-white border border-secondary rounded-md'>
            <FaImages className='text-4xl text-quaternary' />
            <p className='text-quaternary'>Upload Image</p>
            <input  className='absolute opacity-0' type="file" />
          </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Entry Fee : </label>
            <div>
              <input name='entryFee' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Short Title : </label>
            <div>
              <input name='shortTitle' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className='px-16'>
         <button className='bg-quaternary text-white px-10 py-2 rounded-full mt-5'>Submit</button>
      </div>
      </form>

  )
}

export default CreateEvents