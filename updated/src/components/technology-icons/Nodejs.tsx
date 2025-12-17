import React from 'react'
import NodeJs from '../technologies/NodeJs'

const Nodejs = () => {
  return (
    <div className='h-8 min-w-20 max-w-22 flex flex-row border-1 border-white border-dashed bg-white/10 rounded-lg items-center p-2 justifuy-between gap-2'>
        <div className='w-5 h-5'><NodeJs/></div>
        <h1 className='text-[12px] text-white'>Node.js</h1>
    </div>
  )
}

export default Nodejs