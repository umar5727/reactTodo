import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
     <h1 className='font-extrabold text-3xl '>
    Page Not Found Try
        
    <Link to='/reactTodo/'  className='underline text-lg font-bold text-blue-900 italic ps-1'>
        Task       
    </Link>
    </h1>   
    </div>
  )
}

export default NotFound