import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { removeTodo, addCompletedTodo } from '../Features/todo/todoSlice';

const CheckButton = ({myid, className, check, disable}, ) => {
 
  
const dispatch = useDispatch();
  return (
    <label htmlFor={myid} className={`w-16 flex justify-center items-center bg-white rounded-xl cursor-pointer hover:bg-green-200 ${className}`} 
    onClick={ ()=>{
      setTimeout(() => {
        dispatch(addCompletedTodo(myid))
        dispatch(removeTodo(myid))
        
      }, 300);
    console.log(myid)
    }
  } 
     >  
       <input type="checkbox" name="" id={myid}  defaultChecked={check} disabled={disable} className='cursor-pointer' 
       />
    </label >
  )
}

export default CheckButton