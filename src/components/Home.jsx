import React from 'react'
import HeroImage from '../assets/my photo.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justifu-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold '>Hi,Hello</h2>
                <p className='text-gray-500 py-4 max-w-md'>I am a web developer</p>
                <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
            </div>
            

            <div>
                <img src={HeroImage} alt="HeroImage" className='rounded-2xl mx-auto w-1/2  md:w-md'/>
            </div>
        </div>
    </div>
  )
}

export default Home