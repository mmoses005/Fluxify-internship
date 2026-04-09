// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Task 2: Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (savedTheme === null && systemPrefersDark);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const cards = [
    { id: 1, title: "Analytics Dashboard", body: "Track your key metrics and performance indicators in real-time. Get insights into user behavior and engagement patterns." },
    { id: 2, title: "User Management", body: "Manage user accounts, roles, and permissions efficiently. Streamline onboarding and offboarding processes." },
    { id: 3, title: "Content Library", body: "Organize and access your digital assets. Quick search and filtering options for better productivity." },
    { id: 4, title: "Reporting Tools", body: "Generate comprehensive reports with customizable metrics. Export data in multiple formats for analysis." },
    { id: 5, title: "Notification Center", body: "Centralized hub for all system alerts and messages. Customize notification preferences per user." },
    { id: 6, title: "Settings & Preferences", body: "Configure system settings, user preferences, and security options. Control access levels and integrations." }
  ];

  return (
    <div className="app-container">
      {/* Sidebar - hidden on mobile, fixed on desktop */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Dashboard</h2>
            <p className="sidebar-subtitle">Navigation Panel</p>
          </div>
          
          <nav className="sidebar-nav">
            <a href="#" className="nav-link">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Overview</span>
            </a>
            <a href="#" className="nav-link">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Analytics</span>
            </a>
            <a href="#" className="nav-link">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Users</span>
            </a>
            <a href="#" className="nav-link">
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </a>
          </nav>
          
          <div className="sidebar-footer">
            <div className="footer-text">
              <span>v1.0.0</span>
              <span>•</span>
              <span>© 2024</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header with Dark Mode Toggle */}
        <header className="main-header">
          <div className="header-container">
            <div className="mobile-menu">
              <button className="mobile-menu-btn">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <h1 className="page-title">Dashboard Overview</h1>
            
            <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle dark mode">
              {darkMode ? (
                <svg className="theme-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="theme-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Cards Grid */}
        <div className="cards-container">
          <div className="cards-grid">
            {cards.map(card => (
              <div key={card.id} className="card">
                <div className="card-header-bar"></div>
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.body}</p>
                  <button className="card-button">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="info-banner">
            <p className="info-text">
              💡 Tip: Resize your browser window to see the responsive behavior. 
              Sidebar is hidden on mobile and appears as a fixed panel on desktop. 
              Card grid adapts from 3 columns → 2 columns → 1 column.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;