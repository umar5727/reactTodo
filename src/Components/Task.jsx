import React from 'react'
import CheckButton from './CheckButton'
// import { UseSelector, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo, addDeletedTodo, removeCompletedTdo, addDeletedTodoc } from '../Features/todo/todoSlice'

const Task = (props) => {
  const dispatch=useDispatch();

// function deleteClickHandler(){
//   dispatch.removeTodo
// }
  return (
    <div className='flex gap-1 h-24 my-3'>
      <CheckButton className='myhover tasksha' myid={props.id} check={props.check} disable={props.disable}/>
      <div className='flex-1 flex justify-between items-center bg-white rounded-xl ps-3 overflow-hidden myhover tasksha' key={props.id}>
        
        {/* task content  */}
        <h4>{props.Tname}</h4>  
        
        {/* delete starts  */}
        <div  className=' cursor-pointer hover:bg-green-200 w-16 h-full flex justify-center border-l-2' 
        onClick={
          ()=>{
            dispatch(addDeletedTodo(props.id));            
            dispatch(removeTodo(props.id));
            // (props.checkeds &&  dispatch(removeCompletedTdo(props.id)))
            if(props.checkeds){
              dispatch(addDeletedTodoc(props.id));
              dispatch(removeCompletedTdo(props.id));

            }
          
          }
        
        }>
          <img src="/trash-solid.svg" alt=""  className='w-4'/>
        </div>
      </div>
    </div>
  )
}

export default Task