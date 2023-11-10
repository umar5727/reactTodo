import React from 'react'
import CheckButton from './CheckButton'
// import { UseSelector, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/todoSlice'
const Task = (props) => {
  const dispatch=useDispatch();

// function deleteClickHandler(){
//   dispatch.removeTodo
// }
  return (
    <div className='flex gap-1 h-24 my-3'>
      <CheckButton />
      <div className='flex-1 flex justify-between items-center bg-white rounded-xl ps-3 overflow-hidden' key={props.id}>
        <h4>{props.Tname}</h4>  
        <div  className=' cursor-pointer hover:bg-green-200 w-12 h-full flex justify-center' onClick={()=>{dispatch(removeTodo(props.id))}}>
          <img src="/trash-solid.svg" alt=""  className='w-4'/>
        </div>
      </div>
    </div>
  )
}

export default Task