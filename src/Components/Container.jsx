import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full flex gap-8 px-9 mt-24 max-h-5/6'>
        {children}
    </div>
  )
}

export default Container