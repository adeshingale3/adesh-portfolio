import React from 'react'

const Education = () => {
    const education = [
        {name: "Kolhapur Institute of Technology - 7.6 CGPA", degree: "B.Tech in Computer Science and Engineering", duration: "2021 - 2025", location: "Kolhapur, India"},
        {name: "Sambhajirao Mane Jr. College - 92%", degree: "12th (HSC)", duration: "2020-2021", location: "Kolhapur, India"},
        {name: "Rajapur High School - 86.60%", degree: "10th (SSC)", duration: "2018-2019", location: "Rajapur, India"},


    ]
  return (
<div className='mt-3 ml-3  flex flex-col gap-4 items-center justify-center'>
            {education.map((exp, key) => {
                return (
                    <div key={key} className='mr-3 border-1 border-white/50 rounded-lg h-auto w-full flex flex-col'>
                        <div className='flex flex-row justify-between m-4'>
                            <div className='flex flex-col items-start gap-2'>
                                <h2 className='font-bold'>{exp.name}</h2>
                                <h4 className='text-[15px] text-gray-500'>{exp.degree}</h4>
                            </div>
                            <div className='flex flex-col items-end gap-2'>
                                <h4 className='text-[12px] bg-gray-800 text-white/60 p-1 rounded-sm'>{exp.duration}</h4>
                                <h4 className='text-[10px] text-gray-300'>{exp.location}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>  )
}

export default Education