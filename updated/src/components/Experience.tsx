// import React from 'react'

// const Experience = () => {
//     const experiences = [
//         { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
//         // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
//         // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },
//         // { company: "Vinyasa Summer of Code", role: "Frontend Developer", duration: "Jun'24 - Jul'24", location: "Remote", description: "Built Frontend for multiple projects during this program." },

//     ]
//     return (
//         <div className='mt-4 flex flex-col gap-4'>
//             {experiences.map((exp, key) => {
//                 return (
//                     <div key={key} className='w-full rounded-lg p-5 border border-[var(--card-border)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg' style={{background: 'var(--card-bg)'}}>
//                         <div className='flex flex-row justify-between'>
//                             <div className='flex flex-col items-start gap-2'>
//                                 <h2 className='font-semibold text-[var(--foreground)] text-lg'>{exp.company}</h2>
//                                 <h4 className='text-[15px] text-[var(--muted)] font-medium'>{exp.role}</h4>
//                             </div>
//                             <div className='flex flex-col items-end gap-2'>
//                                 <h4 className='text-[12px] text-[var(--muted-dark)] bg-[var(--background)] px-3 py-1 rounded-md font-medium'>{exp.duration}</h4>
//                                 <h4 className='text-[11px] text-[var(--muted-dark)]'>{exp.location}</h4>
//                             </div>
//                         </div>
//                         <h4 className='mt-3 text-[14px] text-[var(--muted)] leading-relaxed'>{exp.description}</h4>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Experience



import React from 'react'
import Container from "./Container";
import { WorkExperience } from './work-experience';
import { WORK_EXPERIENCE } from '@/config/Experience';

const Experience = () => {
  return (
    <Container className="mt-8 border-1 border-white/20 rounded-xl p-6">
        <WorkExperience experiences={WORK_EXPERIENCE} />

    </Container>
  )
}

export default Experience