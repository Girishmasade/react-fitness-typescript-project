import React from 'react'
import { Link } from 'react-router-dom'
import blob from '../assets/blob.png'
import hero from '../assets/img.png'
import stars from '../assets/stars.png'

const Hero: React.FC = () => {
  return (
    <div className='w-full h-[72vh] bg-gradient-to-br from-slate-900 via-slate-800 to-red-700
'>
      <div className="grid md:grid-cols-2 grid-rows-1 h-full p-6 md:p-12 items-center">
        <div className="flex flex-col gap-4 items-start justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to <span className="text-yellow-300">FitWorld</span></h1>
        <p className="text-lg md:text-xl">
            Transform your body and mind with our expert fitness plans,<br /> tailored workouts, and motivating community.
          </p>
          <Link to="/gym">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-md text-lg hover:bg-yellow-300 transition duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
        <div className="hidden md:flex justify-center relative">
        <img src={blob} alt="" className='w-[900px] h-[900px]'/>
        <img src={hero} alt="" className='absolute top-1/2 left-1/2 w-[500px] h-[500px] transform -translate-x-1/2 -translate-y-1/2 z-10'/>
        <div className="">
            <img src={stars} alt='' className='w-[130px] text-black flex px-2 rounded-md items-center text-center bg-gradient-to-tr from-cyan-600 to-yellow-400 h-[30px] absolute top-[25%] z-10 right-[24%] font-semibold text-lg'></img>
                <h1 className='w-[90px] text-black flex px-2 rounded-md items-center text-center bg-gradient-to-tr from-cyan-600 to-yellow-400 h-[30px] absolute top-[65%] z-10 left-64 font-semibold text-lg'>Go Gym</h1>
            </div>
        </div>
           
      </div> 
    </div>
  )
}

export default Hero
