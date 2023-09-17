import React from 'react'


const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet facere modi temporibus, delectus, numquam aperiam laboriosam, ducimus impedit dolorem architecto vitae. Tenetur dolorum enim asperiores accusantium corrupti assumenda omnis eos.</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quidem exercitationem dolorem odio reiciendis? Delectus quisquam eligendi reprehenderit laborum molestias quidem pariatur, libero quas porro repudiandae omnis, earum quaerat consequuntur. Laboriosam tempore doloremque pariatur quae minus. Deleniti totam est repudiandae quidem? Vero praesentium vel alias tempora facere aperiam temporibus quidem.</p>
        </div>
    </div>
  )
}

export default About