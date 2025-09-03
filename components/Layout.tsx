'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
  };

  return (
    <div className={`d-flex ${darkMode ? 'dark' : ''}`} data-bs-theme={darkMode ? 'dark' : 'light'}>
      <Sidebar collapsed={sidebarCollapsed} />
      <div className={`flex-fill ${sidebarCollapsed ? '' : 'me-280'} transition-all`}>
        <Header 
          onToggleSidebar={toggleSidebar} 
          onToggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
