import React, { useEffect } from "react";
import { Task } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import {  addCompletedTodo, removeTodo } from "../Features/todo/todoSlice";

const Home = () => {
  // console.log(todos);
  const todos = useSelector((state) => state.todos);
  
  const dispatch =  useDispatch();
  // const xyz=(e)=>{
    //   console.log('xyz function called' + e)
    //   // dispatch(removeTodo(e)); 
    // dispatch(addCompletedTodo(e));
    
    // }
    useEffect(()=>{
      
  },[])
  return ( 
    <div>
      {/* Home */}
      {
        todos.map((todo) => (
          <Task
            Tname={todo.text}
            key={todo.id}
            id={todo.id}
            // fun={xyz(todo.id)}
          />
        ))
        }
      
      
    </div>
  );
};

export default Home;
