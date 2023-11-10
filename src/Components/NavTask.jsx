import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTask = (props) => {
  return (
    <>
    <NavLink to={props.navLink}
    
      className={({isActive})=>`flex gap-2 w-full py-4 rounded-full px-3  ${isActive? "bg-white" : "bg-transparent hover:bg-green-200"}`}
    >
      <img src={props.src} alt="#" className='w-5 aspect-square '/>
      <h3 className='flex-1'>{props.name}</h3>
      <span className='w-5'>{props.counter}</span>
    </NavLink>
    </>
  )
}

export default NavTask