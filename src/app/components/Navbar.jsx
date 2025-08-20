'use client'
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext'; // Adjust the import path as necessary

export default function Navbar() {
  const { data: session } = useSession();
  const { theme,handleNextTheme } = useTheme();

  return (

    <div className="border-b border-base-300 bg-base-100 p-3 flex justify-between items-center">
<ul
              className="flex flex-end gap-5 justify-end items-center w-full">
    <li>
      <Link href="/profile">
        <button
          className="relative inline-flex items-center justify-center px-6 py-2 font-bold text-white 
                     rounded-full shadow-md cursor-pointer overflow-hidden
                     transition-all duration-200 ease-in-out
                     hover:bg-blue-100 hover:text-indigo-900 active:scale-95"
        >
          <span className="z-10">Profile</span>
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-32 h-32 rounded-full blur-2xl opacity-50 
                             bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400
                             animate-spin-slow"></span>
          </span>
        </button>
      </Link>
    </li>

    <li>
      <Link href="/messages">
        <button
          className="relative inline-flex items-center justify-center px-6 py-2 font-bold text-white 
                     rounded-full shadow-md cursor-pointer overflow-hidden
                     transition-all duration-200 ease-in-out
                     hover:bg-blue-100 hover:text-indigo-900 active:scale-95"
        >
          <span className="z-10">Message</span>
          <span className="absolute inset-0 flex items-center justify-center z-0">
            <span className="w-32 h-32 rounded-full blur-2xl opacity-50 
                             bg-gradient-to-r from-green-400 via-blue-500 to-purple-500
                             animate-spin-slow"></span>
          </span>
        </button>
      </Link>
    </li>

    <li>
      <button
        onClick={handleNextTheme}
        className="relative inline-flex items-center justify-center px-6 py-2 font-bold text-white 
                   rounded-full shadow-md cursor-pointer overflow-hidden
                   transition-all duration-200 ease-in-out
                   hover:bg-blue-100 hover:text-indigo-900 active:scale-95"
      >
        <span className="z-10">{theme.name}</span>
        <span className="absolute inset-0 flex items-center justify-center z-0">
          <span className="w-32 h-32 rounded-full blur-2xl opacity-50 
                           bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400
                           animate-spin-slow"></span>
        </span>
      </button>
    </li>

    <li>
      <Image
        alt="User Profile Picture"
        src={session?.user?.image || '/default-avatar.png'}
        width={40}
        height={40}
        className="rounded-full"
      />
    </li>
  </ul>
</div>
            
  );
}


 