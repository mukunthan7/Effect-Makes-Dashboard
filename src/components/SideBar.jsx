import { useState } from 'react'
import SideBarLogo from './SideBarLogo'
import { MdDashboard, MdEvent, MdChatBubble, MdSettings } from 'react-icons/md'
import { TfiLayoutListThumbAlt } from 'react-icons/tfi'
import { IoCreate } from 'react-icons/io5'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const SideBar = () => {
    const [hidden, setHidden] = useState(false)
    const toggleHidden = () => {
        setHidden(!hidden)
    }



    return (
        <div className={`flex flex-col justify-between min-h-screen bg-[#1e1e42] border-r border-secondary absolute z-20 ${hidden ? "w-64 md:w-80" : "sidebar" }`}>
            <div className='flex flex-col text-white'>
                <div className='bg-white'>
                    <SideBarLogo hidden={hidden} />
                </div>
                <motion.div onClick={toggleHidden} className={`absolute  mx-2 mt-1 rounded-full bg-quaternary hover:bg-[#222202] border-4 border-white hover:border-4 hover:text-white hover:border-white cursor-pointer ${hidden ? "py-2 px-2 top-[5.7rem] left-56 md:left-72" : "px-2 py-2 top-20  left-16"}`}
                    whileTap={{
                        scale: 0.9
                    }}
                >
                    <BsFillCaretLeftFill className={`text-2xl ${hidden ? "rotate-0" : "rotate-180"}`} />
                </motion.div>
                <div className={`flex flex-col mt-5`}>
                    <div className={`py-2 border-b ${hidden ? "block" : "flex justify-center items-center"}`}>
                        <h1 className={`text-left font-bold ${hidden ? "ml-4" : "ml-0 text-xs md:text-sm xl:text-md"}`}>MAIN MENU</h1>
                    </div>
                </div>
                <div>
                    <Link to={"/"} onClick={hidden === true ? toggleHidden : null} >
                        <motion.div className={`flex items-center lg:justify-start py-2 mx-3 mt-3 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                            <MdDashboard className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                            <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>Dashboard</h1>
                        </motion.div>
                    </Link>
                    <Link to={"/appliedlist"} onClick={hidden === true ? toggleHidden : null} >
                        <motion.div className={`flex items-center lg:justify-start py-2 mx-3 mt-3 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                            <TfiLayoutListThumbAlt className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                            <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>Applied List</h1>
                        </motion.div>
                    </Link>
                    <Link to={"/all-events"} onClick={hidden === true ? toggleHidden : null}>
                        <motion.div className={`flex items-center lg:justify-start py-2 mx-3 mt-3 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                            <MdEvent className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                            <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>All Events</h1>
                        </motion.div>
                    </Link>
                    <Link to={"/create-events"} onClick={hidden === true ? toggleHidden : null}>
                        <motion.div className={`flex items-center lg:justify-start py-2 mx-3 mt-3 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                            <IoCreate className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                            <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>Create Events</h1>
                        </motion.div>
                    </Link>
                    <Link to={"/withdraw"} onClick={hidden === true ? toggleHidden : null}>
                        <motion.div className={`flex items-center lg:justify-start py-2 mx-3 mt-3 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                            <FaRegMoneyBillAlt className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                            <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>Withdraw Money</h1>
                        </motion.div>
                    </Link>
                    <Link to={"/chat"} onClick={hidden === true ? toggleHidden : null}>
                        <motion.div className={`flex items-center lg:justify-start py-2 mx-3 mt-3 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                            <MdChatBubble className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                            <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>Chat</h1>
                        </motion.div>
                    </Link>
                </div>
            </div>
            <div className='text-white mb-10'>
                <Link to={"/settings"} onClick={hidden === true ? toggleHidden : null}>
                    <motion.div className={`flex items-center lg:justify-start  mx-3 mt-16 rounded-full hover:bg-primary border hover:text-quaternary hover:border hover:border-secondary cursor-pointer ${hidden ? "py-3" : "px-5 py-5"}`} whileTap={{ scale: 0.9 }}>
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1 }}
                        >
                            <MdSettings className={`text-2xl ${hidden ? "ml-5" : ""}`} />
                        </motion.span>
                        <h1 className={`ml-5 text-md  ${hidden ? "block" : "hidden"} `}>Settings</h1>
                    </motion.div>
                </Link>
            </div>
        </div>
    )
}

export default SideBar