import React from 'react'

const Profile = () => {
  return (
    <div className='ml-3 w-full flex flex-row items-center gap-4'>
      <img src='/pfp.jpg' alt='profile' className='w-16 h-16 m-0 rounded-md object-cover border border-white/10' />
      <div className='flex flex-col justify-center'>
        <h1 className='text-[var(--foreground)] text-lg font-bold'>Adesh Ingale</h1>
        <p className='text-[var(--muted)] text-sm'>Fullstack Developer • Frontend-focused</p>
        <a href='https://x.com/adesshhhhh' className='text-[var(--muted)] text-[13px] underline mt-1'>@adesshhhhh</a>
      </div>

    </div>
  )
}

export default Profile