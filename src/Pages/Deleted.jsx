import React from 'react'
import { useSelector } from 'react-redux';
import { Task } from '../Components';

const Deleted = () => {
  const deletedTodo=useSelector(state=>state.deletedTodos);
  console.log(deletedTodo)
  return (
    <>
    {/* <h1 className=' w-fit p-3 rounded-r-full text-green-400 text-2xl'>Deleted</h1> */}
    <div> 
        {
        deletedTodo.map((todo) => (
            <Task 
            Tname={todo.text}
            key={todo.id}
            id={todo.id}
            disable='disabled'
            />
          
            ))
            //console.log();
        
        }

 
    </div>
    </>
  )
}

export default Deleted