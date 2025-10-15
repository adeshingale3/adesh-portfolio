import React from 'react'

const Experience = () => {
    const experiences = [
        { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
        // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
        // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
        // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },

    ]
    return (
        <div className='mt-3 ml-3  flex flex-col gap-4 items-center justify-center hover:scale-104 duration-300'>
            {experiences.map((exp, key) => {
                return (
                    <div key={key} className='mr-3 border-1 border-white/50 rounded-lg h-auto w-full flex flex-col'>
                        <div className='flex flex-row justify-between m-4'>
                            <div className='flex flex-col items-start gap-2'>
                                <h2 className='font-bold'>{exp.company}</h2>
                                <h4 className='text-[15px] text-gray-500'>{exp.role}</h4>
                            </div>
                            <div className='flex flex-col items-end gap-2'>
                                <h4 className='text-[12px] bg-gray-800 text-white/60 p-1 rounded-sm'>{exp.duration}</h4>
                                <h4 className='text-[10px] text-gray-300'>{exp.location}</h4>
                            </div>
                        </div>
                        <h4 className='mx-4 mb-2 text-[15px] italic'>{exp.description}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience