"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// 1. The component should be named 'Layout' and accept 'children' as a prop.
export default function Layout({ children }) {
  // 2. Remove the old darkMode state. The ThemeToggle handles this globally.
  return (
    <div className="flex h-screen bg-base-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* 3. Render the page content passed as children */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}