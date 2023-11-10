import React from 'react'
import FilterTags from './FilterTags'
import ShortBy from './ShortBy'
// import {FilterTags, ShortBy} from './Components'

const TaskHeader = () => {
  return (
    <div className='TaskHeader flex justify-between '>
      <div className="tags flex gap-3">
        <FilterTags name='Tags'/>
        <FilterTags name='Priority'/>
      </div>
      <ShortBy />
    </div>

  )
}

export default TaskHeader