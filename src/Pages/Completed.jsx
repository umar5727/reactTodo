import React from 'react'

import { Task } from '../Components';
import { useSelector } from 'react-redux';
const Completed = () => {
  const completedTodo=useSelector(state=>state.completedTodos);
  console.log(completedTodo)

  return (
    <div>
      {/* completed */}
        {
        completedTodo.map((todo) => (
            <Task 
            Tname={todo.text}
            key={todo.id}
            id={todo.id}
          checkeds ={ true}
            />
          
            ))
            //console.log();
        
        }

 
    </div>
  )
}

export default Completed