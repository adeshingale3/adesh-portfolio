import React from 'react'

const Profile = () => {
  return (
    <div className='ml-3 w-full flex flex-row items-center gap-5 mt-4'>
      <img src='/pfp.jpg' alt='profile' className='w-20 h-20 m-0 rounded-lg object-cover border border-[var(--card-border)] shadow-lg' />
      <div className='flex flex-col justify-center'>
        <h1 className='text-[var(--foreground)] text-xl font-semibold tracking-tight'>Adesh Ingale</h1>
        <p className='text-[var(--muted)] text-sm font-medium mt-1'>Fullstack Developer • Frontend-focused</p>
        <a href='https://x.com/adesshhhhh' className='text-[var(--muted-dark)] text-[13px] hover:text-[var(--accent)] transition-colors mt-1'>@adesshhhhh</a>
      </div>
    </div>
  )
}

export default Profile