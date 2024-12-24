
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const getSavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? true : false;
};

const ThemeProviderComponent = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getSavedTheme);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light'); 
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <div style={{ padding: '20px' }}>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
          label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default ThemeProviderComponent;
