import React from 'react'
import Search from './Search'
import Notification from './Notification'
import Profile from './Profile'


const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-6 h-24 ml-6 flex items-center justify-between px-5 bg-white'>
      <div className='flex items-center gap-5'>
        <div className="logo w-8">
          <img src="/mainLogo.png" alt="Logo" className='w-full'/>
        </div>
        <h1 className='text-3xl font-bold text-green-400'>Task</h1>
      </div>
      <Search />
      <Notification />
      <Profile />
    </header>
  )
}

export default Header