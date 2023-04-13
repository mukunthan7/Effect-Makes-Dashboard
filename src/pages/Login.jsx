import React, { useState }  from 'react'
import Logo from '../assets/logo.svg'
import { FaUser, FaLock } from 'react-icons/fa'
import { Link, useNavigate  } from 'react-router-dom'


const initialState = {
  email: '',
  password: ''
}
// eslint-disable-next-line
const Login = () => {
  const [login, setLogin] = useState(initialState)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login.email === '' || login.password === '') {
      alert('Please fill all the fields')
    }
    else {
      console.log(login)
      setLogin(initialState)
      navigate('/')
    }
  }
  
  return (
    <div className='bg-background min-h-screen bg-no-repeat flex flex-col justify-center items-center xl:flex-row' >
      <div className='xl:absolute xl:top-10 xl:left-40'>
        <img src={Logo} alt='logo' className='w-32 h-32 md:w-48 md:h-48 xl:w-[35rem] xl:h-[35rem]' />
      </div>
      <div className='flex flex-col justify-center items-center bg-primary px-4 py-[4rem] md:px-16 md:py-[4rem] xl:px-16 xl:py-20 rounded-xl border-2 border-secondary xl:absolute xl:right-36'>
        <h1 className='text-3xl font-bold text-black'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label htmlFor='email' className='text-black text-left mb-1 font-bold'>Email :</label>
          <div>
          <FaUser className='absolute mt-4 ml-5 text-xl text-color text-quaternary' />
          <input onChange={handleChange}  type='email' name='email' value={login.email} className='border-2 border-secondary rounded-md  pl-12 px-2 mr-9 py-3 bg-white form-input focus:outline-quaternary w-full mb-5 placeholder:px-5' placeholder='Type your email address' />
          </div>
          <label htmlFor='password' className='text-black text-left mb-1 font-bold'>Password :</label>
          <div>
          <FaLock className='absolute mt-4 ml-5 text-xl text-color text-quaternary' />
          <input onChange={handleChange} type='password' name='password' value={login.password} className='border-2 border-secondary rounded-md pl-12 px-2 mr-9 py-3 bg-white form-input focus:outline-quaternary w-full mb-3 placeholder:px-5' placeholder='Type your password' />
          </div>
          <a href='#' className='text-tertiary text-right mb-5 text-sm'>Forgot Password?</a>
          <button type='submit' className='bg-quaternary text-white p-2 rounded-full mb-5 uppercase font-bold'>Login</button>
          <h1 className='text-center text-sm font-bold mb-5 text-tertiary'>Or Sign Up Using</h1>
          <div className='flex justify-center items-center'>
            <Link to='/signup' className='bg-black text-white p-2 rounded-full px-12 uppercase font-bold'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login