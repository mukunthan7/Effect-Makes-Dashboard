import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoNotificationsOutline } from 'react-icons/io5'
import { motion } from "framer-motion"


const NavBar = () => {

  const [Title, setTitle] = useState("")
  const [Notification, setNotification] = useState(false)
  const [Profile, setProfile] = useState(false)

  const location = useLocation()

  const headTitle = () => {
    switch (location.pathname) {
      case "/":
        setTitle("Dashboard")
        break;
      case "/appliedlist":
        setTitle("Applied List")
        break;
      case "/create-events":
        setTitle("Create Events")
        break;
      case "/all-events":
        setTitle("All Events")
        break;
      case "/chat":
        setTitle("Chat")
        break;
      case "/settings":
        setTitle("Settings")
        break;
      case "/withdraw":
        setTitle("Withdraw Money")
        break;
      default:
        setTitle("Dashboard")
        break;
    }
  }

  useEffect(() => {
    headTitle() // eslint-disable-next-line
  }, [location])

  const handleNotification = () => {
    setNotification(!Notification)
    setProfile(false)
  }
  const handleProfile = () => {
    setProfile(!Profile)
    setNotification(false)
  }

  if (Notification) {
    return (
      <div>
        <div className='flex justify-between items-center py-2 px-4 md:px-8 xl:px-16 md:py-4 border border-b-secondary'>
          <div>
            <h1 className='font-bold text-md md:text-2xl'>{Title}</h1>
          </div>
          <div className='flex xl:justify-end items-center space-x-5'>
            <IoNotificationsOutline className='text-4xl cursor-pointer' onClick={handleNotification} />
            <img className='h-10 w-10 rounded-full cursor-pointer' onClick={handleProfile} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
          </div>
        </div>
        <motion.div className='bg-white border border-secondary absolute h-96 w-72 md:w-80 right-2 md:right-9 top-20 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-md z-10'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className='text-center mt-3 mb-1 font-bold text-md md:text-xl'>Notifications</h1>
          <div className='mt-1 bg-profile px-5 py-2 text-white border border-secondary'>
            {/*scroll area */}
            <div className='overflow-y-auto  h-[18rem] px-8 scrollbar'>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
              <div className='flex justify-between items-center space-x-2'>
                <img className='h-10 w-10 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='font-bold'>Mukunthan</h1>
                  <h1>Applied for the event</h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  } else if (Profile) {
    return (
      <div>
        <div className='flex justify-between items-center py-2 px-4 md:px-8 xl:px-16 md:py-4 border border-b-secondary'>
          <div>
            <h1 className='font-bold text-md md:text-2xl'>{Title}</h1>
          </div>
          <div className='flex xl:justify-end items-center space-x-5'>
            <IoNotificationsOutline className='text-4xl cursor-pointer' onClick={handleNotification} />
            <img className='h-10 w-10 rounded-full cursor-pointer' onClick={handleProfile} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
          </div>
        </div>
        <motion.div className='bg-white border border-secondary absolute   h-96 w-72 md:h-96 md:w-80 right-2 md:right-9 top-20 transform -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-md z-10'
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className='text-center mt-3 font-bold text-md md:text-xl'>Profile</h1>
          <div className='flex flex-col justify-center items-center text-center mt-1 space-y-2 bg-profile px-12 py-12 text-white border border-secondary'>
            <img className='h-20 w-20 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
            <h1>mukunthan2@gmail.com</h1>
            <h1>Paavai Engineering College</h1>
            <button className='bg-quaternary px-20 py-2 border border-white rounded-full' >Logout</button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='flex justify-between items-center py-2 px-4 md:px-8 xl:px-16 md:py-4 border border-b-secondary'>
      <div>
        <h1 className='font-bold text-md md:text-2xl'>{Title}</h1>
      </div>
      <div className='flex xl:justify-end items-center space-x-5'>
        <IoNotificationsOutline className='text-4xl cursor-pointer' onClick={handleNotification} />
        <img className='h-10 w-10 rounded-full cursor-pointer' onClick={handleProfile} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJm3HrObHMs1-Xv8yVtAWtOljDkaLaXem6F_TvH5w&usqp=CAU&ec=48600112" alt='logo' />
      </div>
    </div>
  )

}

export default NavBar