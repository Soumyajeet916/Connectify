'use client'
import ThemeContext from '../context/ThemeContext';
import { useTheme } from '../context/ThemeContext'; 
export default function Content() {
    const { theme,handleNextTheme } = useTheme();
  return (
    <main className="w-full h-full p-6 bg-red-100">
      <div className="">
        <div className="">
          <h2 className="">Welcome to Connectify</h2>
          <p>
            This is a simple Next.js demo website with a dark/light mode toggle using Lucide icons and DaisyUI themes.
          </p>
        </div>
      </div>
    </main>
  )
}
