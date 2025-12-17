import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky w-full h-20 text-sm flex flex-row items-center px-2 justify-between border-1 border-white/20 rounded-xl'>
      <img src='/pfp.jpg' alt='profile' className='w-16 h-16 m-0 rounded-lg object-cover border border-[var(--card-border)] shadow-lg' />
        <div className='flex flex-row items-center gap-4'> 
            <h1>Components</h1>
            <h1>Blogs</h1>
            {/* <h1>LOGO</h1> */}
        </div>
    </div>
  )
}

export default Navbar