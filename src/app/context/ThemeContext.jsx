"use client";
import { createContext, useContext, useState,useEffect } from "react";

const ThemeContext = createContext();

const themes = [
  // Light themes
  { 
    name: "Neon Dark", 
    gradient: "from-black via-black to-black text-green-400 border-2 border-neonGreen", 
    neon: true 
  },
  { name: "Nature Calm", gradient: "from-green-400 via-emerald-500 to-teal-500 text-gray-800 border-2 border-black" },
  { name: "Ocean Breeze", gradient: "from-blue-300 via-sky-400 to-cyan-500 text-gray-800 border-2 border-black" },
  { name: "Peach Blossom", gradient: "from-rose-300 via-pink-400 to-orange-300 text-gray-800 border-2 border-black" },
  { name: "Frost Mint", gradient: "from-teal-500 via-emerald-200 to-green-300 text-gray-800 border-2 border-black" },

  // Dark themes
  { name: "Dark Elegant", gradient: "from-gray-900 via-purple-900 to-indigo-900 text-gray-200 border-2 border-black" },
   {name: "Galaxy Night", 
  gradient: "from-indigo-800 via-purple-800 to-black text-gray-200 border-2 border-black galaxy-stars twinkle" },  // NEW: Full Black with Neon Glow
  
  {
    name: 'Neutral Glow',
    background: 'bg-black text-pink-500',
    text: 'text-pink-500',
    button: 'bg-black border border-pink-500 text-pink-500 hover:text-cyan-400 hover:border-cyan-400',
  },
  {
  name: "Glass",
  gradient: "bg-white/30 backdrop-blur-md border border-white/30 shadow-lg text-black from-gray-600 via-purple-900 to-indigo-900"
}
];



export function ThemeProvider({ children }) {
  const [themeIndex, setThemeIndex] = useState(0);

  const handleNextTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeIndex], handleNextTheme }}
    >
      <div
        className={`min-h-screen bg-gradient-to-br ${themes[themeIndex].gradient} transition-all duration-700`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}