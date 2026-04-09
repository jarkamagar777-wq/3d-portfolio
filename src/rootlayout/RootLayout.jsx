import React from 'react'
import Navbar from '../seections/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RootLayout