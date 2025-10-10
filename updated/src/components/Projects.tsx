import React from 'react'

const Projects = () => {
    const projects = [
        { name: "WavyJS", description: "WavyJS is a npm package for animated UI components", live: "https://wavyjs.vercel.app/", github: "https://github.com/adeshingale3/wavyjs-web", techstack: ["React", "Node.js", "GSAP", "Framer Motion", "TypeScript", "Tailwind CSS"], image: "/project1.png" },
        { name: "Foodie Hands", description: "A web application that connects restaurants(Individuals also) with NGOs to reduce food waste and help those in need.", live: "https://foodie-hands.vercel.app/", github: "https://github.com/adeshingale3/FoodieHands", techstack: ["React", "Node.js", "Firebase", "Tailwind CSS", "Google Map API"], image: "/project1.png" },
        { name: "EcoPlace", description: "EcoPlace is a platform that provides real-time sustainability scores for e-commerce products, empowering consumers and businesses to make eco-friendly decisions.", live: "https://eco-place-cyan.vercel.app/", github: "https://github.com/adeshingale3/EcoPlace", techstack: ["React", "Node.js", "Tailwind CSS", "Google Search API", "Google Gemini API"], image: "/project1.png" },
        { name: "iCare", description: "iCare is an AI-powered eye disease detection platform that helps predict various eye conditions through retinal image analysis and symptom-based diagnosis.", live: "https://github.com/adeshingale3/iCare-EyeDiseasePrediction", github: "https://github.com/adeshingale3/iCare-EyeDiseasePrediction", techstack: ["React", "Node.js", "Tailwind CSS", "Google Search API", "Google Gemini API"], image: "/project1.png" },


    ]
    return (
        <div className='mt-3 ml-3  flex flex-col gap-4 items-center justify-center'>
            {projects.map((prj, key) => {
                return (
                    <div className='mr-3 border-1 border-white/50 rounded-lg h-auto w-full flex flex-col'>
                        <div className='flex flex-row justify-between mx-4 my-3'>
                            <h2 className='font-semibold'>{prj.name}</h2>
                            <div className='flex flex-row gap-2'>
                                <a href={prj.github} className='h-6 w-6 bg-white/90 rounded-sm flex justify-center items-center cursor-pointer'>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                        <path d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" fill="#000000" />
                                    </svg></a>
                                <a href={prj.live} className='h-6 w-6 bg-white/90 rounded-sm flex justify-center items-center cursor-pointer'>
                                    <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                        <path opacity="0.4" d="M14.9203 14.0998C15.7989 14.9785 17.2236 14.9785 18.1022 14.0998L21.8459 10.3561C22.7246 9.47745 22.7246 8.05283 21.8459 7.17415L18.0632 3.39143C17.1845 2.51275 15.7599 2.51275 14.8812 3.39143L11.1376 7.1351C10.2589 8.01378 10.2589 9.4384 11.1376 10.3171L12.4975 11.677L13.5581 10.6163L12.1982 9.25642C11.9053 8.96352 11.9053 8.48865 12.1982 8.19576L15.9419 4.45209C16.2348 4.1592 16.7096 4.1592 17.0025 4.45209L20.7853 8.23481C21.0781 8.5277 21.0781 9.00257 20.7853 9.29547L17.0416 13.0391C16.7487 13.332 16.2738 13.332 15.9809 13.0391L14.6188 11.677L13.5581 12.7377L14.9203 14.0998ZM12.4971 13.7987L11.4365 14.8593L12.7986 16.2215C13.0915 16.5143 13.0915 16.9892 12.7986 17.2821L9.05917 21.0216C8.76627 21.3144 8.2914 21.3144 7.99851 21.0216L4.21576 17.2388C3.92287 16.9459 3.92287 16.471 4.21576 16.1782L7.95521 12.4387C8.2481 12.1458 8.72297 12.1458 9.01587 12.4387L10.3758 13.7987L11.4365 12.738L10.0765 11.378C9.19785 10.4994 7.77323 10.4994 6.89455 11.378L3.1551 15.1175C2.27642 15.9962 2.27642 17.4208 3.1551 18.2995L6.93785 22.0822C7.81652 22.9609 9.24115 22.9609 10.1198 22.0822L13.8593 18.3428C14.7379 17.4641 14.738 16.0395 13.8593 15.1608L12.4971 13.7987Z" fill="#000000" />
                                        <path d="M12.4982 13.7987L13.5592 12.7377L14.6199 11.677L15.863 10.4339C16.1559 10.141 16.1559 9.66613 15.863 9.37323C15.5701 9.08034 15.0952 9.08034 14.8023 9.37323L13.5592 10.6163L12.4985 11.677L11.4375 12.738L10.3769 13.7987L9.14545 15.0301C8.85256 15.323 8.85256 15.7979 9.14545 16.0907C9.43834 16.3836 9.91322 16.3836 10.2061 16.0907L11.4375 14.8593L12.4982 13.7987Z" fill="#000000" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h4 className='italic text-[15px] mx-4 mb-2 text-gray-400'>{prj.description}</h4>
                        <div className=' mx-4 mb-2 w-full h-auto flex flex-row flex-wrap gap-2'>
                            {prj.techstack.map((tech, key) => {
                            return (
                                <div className='min-w-auto h-6 flex flex-row bg-white/20 text-white/60 p-1 rounded-sm text-[12px] px-1 text-semibold'>{tech}</div>
                            )
                        })}
                        </div>
                        

                    </div>
                )
            })}
        </div>
    )
}

export default Projects