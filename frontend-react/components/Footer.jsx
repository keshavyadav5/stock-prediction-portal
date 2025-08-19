import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className=''>
      <hr/>
      <p className='text-light text-center py-2'>&copy; {date} - Built with ❤️ by Keshav Kumar Yadav</p>
    </div>
  )
}

export default Footer