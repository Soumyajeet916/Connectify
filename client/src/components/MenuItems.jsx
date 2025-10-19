import React from 'react'
import {NavLink } from 'react-router-dom'
import { menuItemsData } from '../assets/assets.js'
const MenuItems = ({setSidebarOpen}) => {
  return (
    <div className='px-6 text-gray-600 space-y-3 font-medium'>
      {menuItemsData.map(({to,label,Icon})=>(
        <NavLink key={to} to={to} end={to ==='/'} onClick={()=> setSidebarOpen(false)} className={({isActive})=>`px-4 py-3 flex items-center gap-4 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600 font-semibold':'hover:bg-blue-100'}`}>
            <Icon className="w-6 h-6"/>
            {label}
       
        </NavLink>
      ))}
    </div>
  )
}

export default MenuItems
