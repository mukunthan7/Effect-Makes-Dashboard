import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const CheckAuth = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true)
    useEffect(() => {
        setIsAuth(true)
    }, [])
    return isAuth ? children : <Navigate to="/login" replace={true} />
}

export default CheckAuth