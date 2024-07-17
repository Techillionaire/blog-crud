import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-[60px] flex items-center px-[40px] bg-purple-300'>
        <Link to="/" className='font-bold cursor-pointer text-xl'>Lee's Blog.</Link>


    </nav>
  )
}

export default Navbar
