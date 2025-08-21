'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect, useRef } from 'react'
import { Search, X,Palette } from 'lucide-react'

export default function Navbar() {
  const { data: session } = useSession()
  const { theme, handleNextTheme } = useTheme()

  const [search, setSearch] = useState('')
  const [history, setHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false) // 👈 control history visibility
  const searchRef = useRef(null)

  // Load history from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('searchHistory')
      if (stored) setHistory(JSON.parse(stored))
    } catch {}
  }, [])

  // Persist history
  useEffect(() => {
    try {
      localStorage.setItem('searchHistory', JSON.stringify(history))
    } catch {}
  }, [history])

  const handleSearch = () => {
    const q = search.trim()
    if (!q) return
    if (!history.includes(q)) setHistory([q, ...history])
    setSearch('')
    setShowHistory(false) // hide after search
  }

  const removeHistoryItem = (item) => {
    setHistory(history.filter((h) => h !== item))
  }

  const clearInput = () => setSearch('')

  // Close history on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowHistory(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-xl shadow-lg p-3  flex justify-end items-center">
      {/* Left side: Logo */}
      {/* Top row: Search (left) + actions (right) */}
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <form
          ref={searchRef}
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}
          className="relative flex-1 max-w-xl"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70 hover:bg-black/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowHistory(true)} // 👈 show history on focus
            placeholder="Search…"
            className="w-full pl-10 pr-60 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30
                       placeholder-white/70 text-white outline-none
                       focus:ring-2 focus:ring-white/40 focus:border-white/40"
          />
          {search && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* 🔽 Search History Dropdown */}
          {showHistory && history.length > 0 && (
            <div className="absolute mt-2 w-full bg-black/50 backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-lg z-50  ">
              <p className="text-sm font-semibold mb-2 ">Recent Searches</p>
              <ul className="flex  gap-2 justify-end items-center w-full h-full ">
                {history.map((item, idx) => (
                  <li
                    key={`${item}-${idx}`}
                    className="flex items-center gap-1 bg-white/20 border border-white/30 
                               px-3 py-1 rounded-full text-sm text-white"
                  >
                    {item}
                    <button
                      onClick={() => removeHistoryItem(item)}
                      className="ml-1 hover:bg-white/20 rounded-full p-0.5"
                      aria-label={`Remove ${item}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>

        {/* Right-side actions */}
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/profile">
              <button
                className="relative inline-flex items-center justify-center px-6 py-2 font-bold text-white 
                           rounded-full shadow-lg cursor-pointer overflow-hidden
                           transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="z-10">Profile</span>
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-32 h-32 rounded-full blur-2xl opacity-40 
                                   bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400
                                   animate-spin"></span>
                </span>
              </button>
            </Link>
          </li>

          <li>
            <Link href="/messages">
              <button
                className="relative inline-flex items-center justify-center px-6 py-2 font-bold text-white 
                           rounded-full shadow-lg cursor-pointer overflow-hidden
                           transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span className="z-10">Message</span>
                <span className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="w-32 h-32 rounded-full blur-2xl opacity-40 
                                   bg-gradient-to-r from-green-400 via-blue-500 to-purple-500
                                   animate-spin"></span>
                </span>
              </button>
            </Link>
          </li>

          <li>
            <button
  onClick={handleNextTheme}
  className="relative inline-flex items-center justify-center gap-2 px-6 py-2 font-bold text-white 
             rounded-full shadow-lg cursor-pointer overflow-hidden
             transition-transform duration-300 hover:scale-105 active:scale-95"
>
  {/* Icon */}
  <Palette className="w-5 h-5 z-10" />

  {/* Theme Name */}
  <span className="z-10">{theme?.name ?? 'Theme'}</span>

  {/* Spinning Gradient Glow */}
  <span className="absolute inset-0 flex items-center justify-center z-0">
    <span className="w-32 h-32 rounded-full blur-2xl opacity-40 
                     bg-gradient-to-r from-pink-600 via-purple-500 to-cyan-400
                     animate-spin"></span>
  </span>
</button>
          </li>

          <li>
            <Image
              alt="User Profile Picture"
              src={session?.user?.image || '/default-avatar.png'}
              width={40}
              height={40}
              className="rounded-full ring-2 ring-white/40"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
