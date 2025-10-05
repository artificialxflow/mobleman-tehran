'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
  };

  return (
    <div className={`d-flex ${darkMode ? 'dark' : ''}`} data-bs-theme={darkMode ? 'dark' : 'light'}>
      <Sidebar 
        collapsed={sidebarCollapsed} 
        isMobile={isMobile} 
        onNavigate={() => { if (isMobile) setSidebarCollapsed(true); }}
      />
      <div className={`flex-fill transition-all ${sidebarCollapsed || isMobile ? '' : 'me-280'}`}>
        <Header 
          onToggleSidebar={toggleSidebar} 
          onToggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          isMobile={isMobile}
        />
        <main className="p-2 p-md-4">
          {children}
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isMobile && !sidebarCollapsed && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" 
          style={{ zIndex: 999 }}
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
    </div>
  );
}
