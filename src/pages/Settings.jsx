import React, { useState } from 'react'
import { FaImage } from 'react-icons/fa'

const initialState = {
  collegeName: '',
  email: '',
  phone: '',
  address: '',
  achievements: '',
  awardes: '',
}


const Settings = () => {
  const [update, setUpdata] = useState(initialState)


  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdata({ ...update, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(update)
    setUpdata(initialState)
  }

  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-10'>
        <img className='rounded-full h-32 w-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt="settings" />
        <div className='bg-white px-4 py-4 rounded-full absolute  mt-16 ml-20 border border-secondary'>
          <FaImage className='text-xl' />
        </div>
      </div>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
      <div className='xs:flex md:flex justify-center items-center md:space-x-10'>
        <div>
          <div className='flex-col justify-center items-center mt-10'>
            <label className='text-left text-md font-semibold ml-5 mb-2'>College Name :</label>
            <div>
              <input name='collegeName' onChange={handleChange}  className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Email Address :</label>
            <div>
              <input name='email' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Phone Number :</label>
            <div>
              <input name='phone' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Address :</label>
            <div>
              <textarea name='address' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
          </div>
        </div>
        <div>
        <div className='flex-col justify-center md:-mt-32 items-center'>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Achievement : </label>
            <div>
              <input name='achievements' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
            <label className='text-left text-md font-semibold ml-5 mb-2'>Awards : </label>
            <div>
              <textarea name='awards' onChange={handleChange} className='border border-secondary rounded-md px-2 mr-9 py-3 md:px-10 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className='px-16'>
         <button className='bg-quaternary text-white px-10 py-2 rounded-full mt-5'>Update</button>
      </div>
      </form>
    </div>
  )
}

export default Settings