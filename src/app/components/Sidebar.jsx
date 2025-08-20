'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Home, User, MessageSquare, Settings, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle'; // 1. Import the ThemeToggle component

export default function Sidebar({ darkMode }) {
  const [selected, setSelected] = useState('Home');
  const router = useRouter();

  const menuItems = [
    { name: 'Home', icon: Home, path: '/dashboard' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Messages', icon: MessageSquare, path: '/messages' },
    { name: 'Settings', icon: Settings, path: '/settings' }
  ];

  const handleNavigation = (item) => {
    setSelected(item.name);
    router.push(item.path);
  };

  return (
    // Simplified className, as DaisyUI handles themes automatically
    <aside className="w-64 h-screen bg-base-200 text-base-content flex flex-col border-r border-base-300">
      <div className="p-4 border-b border-base-300">
        <h1 className='text-primary text-2xl font-bold'>Connectify</h1>
      </div>

      <ul className="menu p-4 w-full flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <a
                onClick={() => handleNavigation(item)}
                className={`${selected === item.name ? 'active' : ''} gap-3`}
              >
                <Icon size={18} />
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      {/* 2. Add ThemeToggle to the footer */}
      <div className="p-4 border-t border-base-300 space-y-2">
        <div className="flex items-center justify-between">
        </div>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center gap-2 text-error hover:text-error-focus"
        >
          <LogOut size={26} />
          Sign Out
        </button>
      </div>
    </aside>
  )
}