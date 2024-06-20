import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('classic');
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [sidebarState, setSidebarState] = useState('static')

  const handleMouseOverSidebar = (state) => {
    if (sidebarState === 'collapsed') {
      setIsMouseOver(state)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    }

    if (localStorage.getItem('sidebarState')) {
      setSidebarState(localStorage.getItem('sidebarState'))
    }
  }, [])

  const handleTheme = (selected) => {
    setTheme(selected)
    localStorage.setItem('theme', selected)
  }

  useEffect(() => {
    if (sidebarState === 'collapsed') {
      setIsMouseOver(false)
    } else {
      setIsMouseOver(true)
    }
    localStorage.setItem('sidebarState', sidebarState)
  }, [sidebarState])
  return (
    <ThemeContext.Provider value={
      {
        theme,
        handleTheme,
        handleMouseOverSidebar,
        setSidebarState,
        sidebarState,
        isMouseOver
      }}>
      {children}
    </ThemeContext.Provider>
  );
};


