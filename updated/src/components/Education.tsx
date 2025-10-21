import React from 'react'

const Education = () => {
    const education = [
        {name: "Kolhapur Institute of Technology - 7.6 CGPA", degree: "B.Tech in Computer Science and Engineering", duration: "2021 - 2025", location: "Kolhapur, India"},
        {name: "Sambhajirao Mane Jr. College - 92%", degree: "12th (HSC)", duration: "2020-2021", location: "Kolhapur, India"},
        {name: "Rajapur High School - 86.60%", degree: "10th (SSC)", duration: "2018-2019", location: "Rajapur, India"},


    ]
    return (
        <div className='mt-3 flex flex-col gap-4'>
            {education.map((exp, key) => {
                return (
                    <div key={key} className='w-full rounded-lg p-4 border-1 border-white/10 rounded-md' style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col items-start gap-1'>
                                <h2 className='font-bold text-[var(--foreground)]'>{exp.name}</h2>
                                <h4 className='text-[15px] text-[var(--muted)]'>{exp.degree}</h4>
                            </div>
                            <div className='flex flex-col items-end gap-1'>
                                <h4 className='text-[12px] bg-transparent text-[var(--muted)] p-1 rounded-sm'>{exp.duration}</h4>
                                <h4 className='text-[10px] text-[var(--muted)]'>{exp.location}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Education