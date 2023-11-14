import React from "react";
import { Task } from "../Components";
import { useDispatch, useSelector } from "react-redux";
import {  addCompletedTodo, removeTodo } from "../Features/todo/todoSlice";

const Home = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  
  const dispatch =  useDispatch();
  // const xyz=(e)=>{
  //   console.log('xyz function called' + e)
  //   // dispatch(removeTodo(e)); 
  // dispatch(addCompletedTodo(e));
    
  // }
  return ( 
    <div>
      {/* Home */}
      {todos.map((todo) => (
        <Task
          Tname={todo.text}
          key={todo.id}
          id={todo.id}
          // fun={xyz(todo.id)}
        />
      ))} 
    </div>
  );
};

export default Home;
