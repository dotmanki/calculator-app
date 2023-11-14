import React from 'react'
import Switch from '../Switch/Switch'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center text-primary-text mb-8 w-full'>
      <h3 className='text-3xl'>calc</h3>
      <Switch />
    </nav>
  )
}

export default Navbar
