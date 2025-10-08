import React from 'react'

const Profile = () => {
  return (
    <div className='w-full h-30 flex flex-row items-center'>
      <img src='/profile.png' alt='profile' className='w-14 h-14 m-4 bg-white' />
      <div className='flex flex-col justify-center'>
        <h1 className='text-white text-md font-bold'>Adesh Ingale</h1>
        <p className='text-white text-[10px]'>Full Stack Developer</p>
      </div>

    </div>
  )
}

export default Profile