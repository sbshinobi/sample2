import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Locomotive Scroll styles
import LocomotiveScroll from 'locomotive-scroll'; // Import Locomotive Scroll
import { CssBaseline, Container, ThemeProvider } from '@mui/material'; // MUI components
import Home from './HomePage/HomePage'; // Ensure this path is correct
import About from './AboutUs/AboutUS'; // Ensure this path is correct
import Service from './Services/Services'; // Import Service component
import Benefits from './Benefits/Benefits';
import Navbar from './Components/Navbar'; // Import Navbar component
import Footer from './Footer/Footer'; // Import Footer component
import Theme from './theme'; // Import your theme configuration
import OurClints from './HomePage/OurClients';

function App() {
  // Initialize the mode based on localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    // Check if the theme is already stored in localStorage
    const savedMode = localStorage.getItem('theme');
    return savedMode ? savedMode : 'light'; // Use saved mode or default to light
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode); // Save the new theme to localStorage
  };

  useEffect(() => {
    // Dynamically load Locomotive Scroll only when the component is mounted
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 1.2,
    });

    // Clean up when the component unmounts
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <Router>
      {/* Wrap the app with ThemeProvider to apply dynamic themes */}
      <ThemeProvider theme={Theme(mode)}>
        <CssBaseline /> {/* MUI's CSS baseline for consistent styles */}
        
        {/* Pass toggleTheme and currentMode to Navbar */}
        <Navbar toggleTheme={toggleTheme} currentMode={mode} />
        
        <div data-scroll-container>
          <Container maxWidth="lg" sx={{ mt: 10 }}>
            <Routes>
              <Route path="/" element={<Home  currentMode={mode}/>} />
              <Route path="/about" element={<About  currentMode={mode}/>} />
              <Route path="/service" element={<Service />} /> {/* Add this line */}
              <Route path="/Benefits" element={<Benefits />} /> {/* Add this line */}
              {/* <Route path="/clients" element={<OurClints mode={mode} />} /> */}
            </Routes>
          </Container>
        </div>
        
        {/* Footer will be displayed on every page */}
        <Footer currentMode={mode} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
