'use client'
import { useSession, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-300">
      <div className="flex-1">
        {/* You can add a search bar or other elements here later */}
      </div>

      <div className="flex-none gap-2">

        {/* Profile Dropdown */}
        {session?.user && (
          <div className="dropdown dropdown-end">
  
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-3 right-5">
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/messages">Messages</Link>
              </li>
              <Image
                  alt="User Profile Picture"
                  src={session.user.image || '/default-avatar.png'} // Fallback image
                  width={40}
                  height={40}
                  className='rounded-full'
                />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}