import React from 'react'
import Notes from '../assets/Notes_.jpg'
import PassGen from '../assets/Pass.jpeg'

const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src:Notes,
        },
        {
            id:2,
            src:PassGen,
        },
    ]



  return (
    <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-sreen'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Portfolio</p>
            <p className='py-6'>These are some of the projects I have worked on</p>
            </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {portfolios.map(({id,src})=>(
            
            <div key={id} className='shadow-md shadow-gray-400 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out'>
                <img src={src} alt="" className='rounded-md duration-200 '/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View Project</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
       
        ))}
        </div>

        </div>
    </div>
  )
}

export default Portfolio