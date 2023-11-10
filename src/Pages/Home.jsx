import React from 'react'
import { Task } from '../Components'
import { useSelector } from 'react-redux'

const Home = () => {
  const todos=useSelector(state => state.todos)
  return (
    <div>Home
      {todos.map((todo) => (
        <Task
         Tname={todo.text}
         key={todo.id}
         id={todo.id}
        />

      ))}

    </div>
  )
}

export default Home