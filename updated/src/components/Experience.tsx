import React from 'react'

const Experience = () => {
    const experiences = [
        { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
        // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
        // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
        // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },

    ]
    return (
        <div className='mt-3 flex flex-col gap-4 border-1 border-white/10 rounded-md'>
            {experiences.map((exp, key) => {
                return (
                    <div key={key} className='w-full rounded-lg p-4' style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col items-start gap-1'>
                                <h2 className='font-bold text-[var(--foreground)]'>{exp.company}</h2>
                                <h4 className='text-[15px] text-[var(--muted)]'>{exp.role}</h4>
                            </div>
                            <div className='flex flex-col items-end gap-1'>
                                <h4 className='text-[12px] text-[var(--muted)] p-1 rounded-sm'>{exp.duration}</h4>
                                <h4 className='text-[10px] text-[var(--muted)]'>{exp.location}</h4>
                            </div>
                        </div>
                        <h4 className='mt-2 text-[15px] italic text-[var(--muted)]'>{exp.description}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience