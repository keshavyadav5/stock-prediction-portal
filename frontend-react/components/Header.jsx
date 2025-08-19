import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='my-4 flex justify-between items-center  mx-40'>
      <Link to='/' className='font-bold' >Stock Prediction Portal</Link>
      <div className='flex gap-2'>
        <Button className='cursor-pointer bg-green-600 hover:bg-white outline border-green-600 border'>Login</Button>
        <Button className='cursor-pointer outline-1 border border-green-600 hover:bg-green-600'>Register</Button>
      </div>
    </div>
  )
}

export default Header