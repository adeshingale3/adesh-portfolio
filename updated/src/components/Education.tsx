import React from 'react'

const Education = () => {
    const education = [
        {name: "Kolhapur Institute of Technology - 7.6 CGPA", degree: "B.Tech in Computer Science and Engineering", duration: "2021 - 2025", location: "Kolhapur, India"},
        {name: "Sambhajirao Mane Jr. College - 92%", degree: "12th (HSC)", duration: "2020-2021", location: "Kolhapur, India"},
        {name: "Rajapur High School - 86.60%", degree: "10th (SSC)", duration: "2018-2019", location: "Rajapur, India"},


    ]
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {education.map((exp, key) => {
                return (
                    <div key={key} className='w-full rounded-lg p-5 border border-[var(--card-border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg' style={{background: 'var(--card-bg)'}}>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col items-start gap-2'>
                                <h2 className='font-semibold text-[var(--foreground)] text-lg'>{exp.name}</h2>
                                <h4 className='text-[15px] text-[var(--muted)] font-medium'>{exp.degree}</h4>
                            </div>
                            <div className='flex flex-col items-end gap-2'>
                                <h4 className='text-[12px] text-[var(--muted-dark)] bg-[var(--background)] px-3 py-1 rounded-md font-medium'>{exp.duration}</h4>
                                <h4 className='text-[11px] text-[var(--muted-dark)]'>{exp.location}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Education