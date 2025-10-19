import React from 'react'
import {assetsArr} from '../assets/assets.js'
import { Star } from "lucide-react";
import { SignIn } from '@clerk/clerk-react';
const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
        <img src={assetsArr.bgImage} alt="Background" className='absolute top-0 left-0 -z-10 w-full h-full object-cover' />
      
         <div className='flex-1 flex flex-col items-start justify-betwwen p-6 md:p-10 lg:pl-40'>
          <div className="flex items-center gap-2">
            <img src={assetsArr.logo} alt="Connectify Logo" className='h-12 object-contain'/>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Connectify</h2>
          </div>
          <br />
          <br />
          <div>
            <div className=' flex items-center gap-7 mb-4 max-md:mt-10'>
              <img src={assetsArr.group_users} alt="" className='h-8 md:h-10'/>
            {/*  <div>
                <div className='flex'>
                  {Array(5).fill(0).map((_, i) => (<Star key={i} className='size-2 md:size-5 text-amber-500 fill-amber-200' />))}
                </div>
                <p className='text-gray-400'>used by 5k+ developers</p>
              </div>*/}
            </div>
            <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent'>Making every connection meaningful.</h1>
            <div className='mt-6 text-lg md:text-2xl text-gray-200'>
          <p>Stay connected, effortlessly.</p>
          <p>Your world One connection away.</p>
          </div>
          </div>
          <span className='md:h-10'></span>
         </div>
         <div className='flex-1 flex items-center justify-center p-6 md:p-10 lg:pr-40'>
          <SignIn/>
         </div>
    </div>
  )
}

export default Login 