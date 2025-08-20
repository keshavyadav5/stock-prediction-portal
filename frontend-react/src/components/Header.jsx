import { AuthContext } from '@/AuthProvider'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged Out')
    navigate('/signIn')
  }
  return (
    <div className='my-4 flex justify-between items-center mx-4 sm:mx-10 md:mx-40'>
      <Link to='/' className='font-bold' >Stock Prediction Portal</Link>
      {
        !isLoggedIn
          ? (
            <div className='flex gap-2'>
              <Link to='/signIn'>
                <Button className='cursor-pointer text-black bg-green-600 hover:bg-green-500 outline border-green-600 border'>Login</Button>
              </Link>
              <Link to='/register'>
                <Button className='cursor-pointer bg-white text-black hover:bg-green-100 outline border-green-600 border'>Register</Button>
              </Link>
            </div>
          )
          : (
            <Button onClick={handleLogOut} className='cursor-pointer text-black bg-red-600 hover:bg-red-500 outline border-red-600 border'>Logout</Button>
          )
      }
    </div>
  )
}

export default Header