import React from 'react'

const FilterTags = (props) => {
  return (
    <div className=' flex bg-white py-2 px-5 w-fit gap-4 rounded-full items-center '>
      <h4>{props.name}</h4>
      <div className='w-3'>	
        <img src="/angle-down-solid.svg" alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default FilterTags