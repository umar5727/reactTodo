import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/todo/todoSlice';
import { useForm } from 'react-hook-form';
const AddTodo = () => {
    const [register, handleSubmit] = useForm();
    const [input,setinput]=useState('');
    const dispatch=useDispatch();
    // function deleteHandler(){
    //     console.log('delete')
    // }
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setinput(' ')
    }
  return (
    <div className='p-3 rounded-3xl addtaskShadow'>
        <form onSubmit={submitHandler} className='flex flex-col justify-between'>
            <div className="addInput w-full ">
                <input
                    type="text"
                    className='w-full p-2 rounded-full focus-visible:outline-none focus-visible:shadow-xl text-lg'
                    placeholder='Add Task'
                    value={input}
                    onChange={(e)=>setinput(e.target.value)}
                />
                {/* <button type='button' onClick={deleteHandler} className='bg-green-950 text-white p-5 absolute  right-2 top-1/2 -translate-y-1/2 rounded-full'>
                    Del
                </button> */}
            </div>
            <button type="submit" className='bg-green-950 px-5 py-2 text-white rounded-full shadow-lg mt-3'>
                Add Task
            </button>
        </form>
    </div>
  )
}

export default AddTodo