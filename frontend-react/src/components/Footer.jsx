import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <hr/>
      <p className='text-center text-xs sm:text-sm md:text-xl py-2'>&copy; {date} - Built with ❤️ by Keshav Kumar Yadav</p>
    </div>
  )
}

export default Footer