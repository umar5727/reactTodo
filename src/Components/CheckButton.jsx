import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, addCompletedTodo } from '../Features/todo/todoSlice';

const CheckButton = ({myid, className, xyz}) => {
  
  
const dispatch = useDispatch();
  return (
    <label htmlFor={myid} className={`w-16 flex justify-center items-center bg-white rounded-xl cursor-pointer hover:bg-green-200 ${className}`} 
    onClick={ ()=>{
      dispatch(addCompletedTodo(myid))
      dispatch(removeTodo(myid))
    console.log(myid)
    }
  } 
     >  
       <input type="checkbox" name="" id={myid} className=' cursor-pointer' 
       />
    </label >
  )
}

export default CheckButton