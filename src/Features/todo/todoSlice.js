import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Welcome to Redux Toolkit' }],
    completedTodos: [{ id: 0, text: "completed" }],
    deletedTodos: [{ id: 0, text: 'deleted' }]
}



export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )

        },
        addCompletedTodo: (state, action) => {
            const completedTodo = state.todos.filter((todo) =>
                todo.id === action.payload
            )
            state.completedTodos = [...state.completedTodos, ...completedTodo]
            // completedTodo.flat();
        },
        removeCompletedTdo: (state, action) => {
            state.completedTodos = state.completedTodos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        addDeletedTodo: (state, action) => {
            const deletedTodo = state.todos.filter((todo) =>
                todo.id === action.payload
            )
            state.deletedTodos = [...state.deletedTodos, ...deletedTodo]

        },
        addDeletedTodoc:(state, action)=>{
            
            const deletedTodoc = state.completedTodos.filter((todo) =>
                todo.id === action.payload
            )
            state.deletedTodos = [...state.deletedTodos, ...deletedTodoc]
        }

    }
})

export const { addTodo, removeTodo, addCompletedTodo, addDeletedTodo,addDeletedTodoc, removeCompletedTdo } = todoSlice.actions;
export default todoSlice.reducer;