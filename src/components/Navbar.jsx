import React from 'react'
// import {humburger} from '../../public/assets/icons'
import {headerLogo} from '../../public/assets/images'

function Navbar() {
  return (
    <header className='absolute z-10 padding-x py-8'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
        <img src={headerLogo} width={130} height={29} alt='Logo' />
        </a> 
      </nav>
    </header>
  )
}

export default Navbar
