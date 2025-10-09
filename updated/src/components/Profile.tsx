import React from 'react'

const Profile = () => {
  return (
    <div className='w-full h-30 flex flex-row items-center'>
      <img src='/pfp.jpg' alt='profile' className='w-14 h-14 m-4 bg-white rounded-md' />
      <div className='flex flex-col justify-center'>
        <h1 className='text-white/80 text-md font-bold'>Adesh Ingale - FullStack Developer</h1>
        <a href='https://x.com/adesshhhhh' className='text-gray-400 text-[13px] underline'>@adesshhhhh</a>
      </div>

    </div>
  )
}

export default Profile