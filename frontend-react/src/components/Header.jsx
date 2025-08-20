import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='my-4 flex justify-between items-center mx-4 sm:mx-10 md:mx-40'>
      <Link to='/' className='font-bold' >Stock Prediction Portal</Link>
      <div className='flex gap-2'>
        <Link to='/signIn'>
          <Button className='cursor-pointer text-black bg-green-600 hover:bg-green-500 outline border-green-600 border'>Login</Button>
        </Link>
        <Link to='/register'>
          <Button className='cursor-pointer bg-white text-black hover:bg-green-100 outline border-green-600 border'>Register</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header