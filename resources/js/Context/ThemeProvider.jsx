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
    if (sidebarState === 'collapsed') {
      setIsMouseOver(false)
    } else {
      setIsMouseOver(true)
    }
  }, [sidebarState])
  return (
    <ThemeContext.Provider value={
      {
        theme,
        setTheme,
        handleMouseOverSidebar,
        setSidebarState,
        sidebarState,
        isMouseOver
      }}>
      {children}
    </ThemeContext.Provider>
  );
};


