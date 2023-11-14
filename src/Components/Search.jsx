import React from 'react'

const Search = () => {
  return (
    <div className='w-3/6 relative'>
      <input type="text" 
      className='w-full focus:border-none focus-visible:border-none outline-none ps-5 pr-14 py-2 rounded-full bg-green-100 shadow-inner addtaskShadow'
      />
      <img src="/magnifying-glass-solid.svg" alt="#" className='w-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'/>
    </div>
  )
}

export default Search