import React from 'react'
import TaskHeader from './TaskHeader'
import { Outlet } from 'react-router-dom'

const MainSection = () => {
  return (
        <>
    <main className='mainSection flex-1 bg-green-100 rounded-xl p-5 min-h-screen'>
        <div className="mainWrapper">
        {/* <TaskHeader /> */}
        <Outlet />
        </div>
    </main>
    </>
  )
}

export default MainSection