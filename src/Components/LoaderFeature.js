import React from 'react';
import { CircularProgress, Box, useTheme } from '@mui/material';

function Loader() {
  const theme = useTheme();  // Access the current theme

  // Define loader color based on the current theme mode
  const loaderColor = theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main; // Light Blue for light mode, Darker Blue for dark mode

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.7)' : 'rgba(255, 255, 255, 0.7)', // Adjust background for dark mode
        zIndex: 1000, // Ensure it shows on top
      }}
    >
      <CircularProgress size={50} color="inherit" sx={{ color: loaderColor }} />
    </Box>
  );
}

export default Loader;
