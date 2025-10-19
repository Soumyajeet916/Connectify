import React from 'react'
import { assetsArr } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Menu ,CirclePlus,LogOut} from 'lucide-react';
import MenuItems from './MenuItems.jsx'
import {Link} from 'react-router-dom'
import { dummyUserData } from '../assets/assets.js'
import {UserButton,useClerk} from '@clerk/clerk-react'
const Sidebar = ({setSidebarOpen, sidebarOpen}) => {
  const navigate = useNavigate();
  const user=dummyUserData;
  const {signOut}=useClerk();
  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}>
      <div className='flex flex-col flex-1'>
        <div className='p-4'>
          <div className='flex items-center gap-2 mb-4'>
            <img onClick={() => navigate('/')} src={assetsArr.logo} alt="Connectify Logo" className='h-10 w-auto cursor-pointer'/>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Connectify</h2>
          </div>
          <hr className='border-gray-200 mb-4'/>
          <MenuItems setSidebarOpen={setSidebarOpen}/>
          <Link 
            to="/create-post" 
            className="mt-6 flex items-center justify-center gap-2 px-4 py-2.5 
              text-white font-medium text-[1.1em] rounded-lg
              bg-gradient-to-r from-blue-500 to-indigo-600 
              hover:from-blue-600 hover:to-indigo-700
              transform transition-all duration-200 
              hover:scale-[1.02] active:scale-[0.98]
              shadow-md hover:shadow-xl hover:shadow-blue-200
              active:shadow-inner"
          >
            <CirclePlus className="w-5 h-5" strokeWidth={2.5}/>
            <span>Create Post</span>
          </Link>
        </div>
      </div>
      <div className='w-full p-4 border-t border-gray-200 bg-gray-50'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <UserButton/>
            <div>
              <h1 className='text-sm font-medium'>{user.full_name}</h1>
              <p className='text-xs text-gray-500'>@{user.username}</p>
            </div>
          </div>
          <button
            onClick={() => signOut(() => navigate('/login'))}
            className='p-2 text-gray-400 hover:text-red-700 hover:bg-red-100 rounded-lg transition-colors'
          >
            <LogOut className='w-5 h-5' />
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
