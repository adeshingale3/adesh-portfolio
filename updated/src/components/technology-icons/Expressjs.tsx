import React from 'react'
import ExpressJs from '../technologies/ExpressJs'

const Expressjs = () => {
  return (
    <div className='h-8 min-w-20 max-w-22 flex flex-row border-1 border-white border-dashed bg-white/10 rounded-lg items-center p-2 justifuy-between gap-2'>
        <div className='w-4 h-2 scale-140'><ExpressJs/></div>
        <h1 className='text-[12px] text-white'>Express.js</h1>
    </div>
  )
}

export default Expressjs