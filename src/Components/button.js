import React from 'react';
import { Button } from '@mui/material';
import useTheme from "../theme";

const ContactButton = ({ label, message, color = 'secondary', onClick }) => {
  const theme = useTheme(); // Get current theme

  return (
    <Button
      variant="text"
      sx={{
        borderRadius: 1,
        fontWeight: 1000, // Maintain the font weight in both modes
        fontSize: 12,
        color: theme.palette.mode === 'dark' ? 'white' : theme.palette.text.white, // White text in dark mode
        boxShadow: 3,
        backgroundColor: theme.palette[color].main, // Use dynamic color based on the 'color' prop
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Smooth transitions for multiple properties
        '&:hover': {
          transform: 'scale(1.1)', // Slight scaling effect on hover
          boxShadow: 6, // Increase shadow depth
          backgroundColor: theme.palette[color].dark, // Darken the background color slightly
        },
        '&:active': {
          transform: 'scale(1)', // Reset scaling on click
          boxShadow: 2, // Reduce shadow on active state
        },
      }}
      onClick={onClick} // Button click triggers the onClick function passed as a prop
    >
      {label} {/* Button text is dynamic */}
    </Button>
  );
};

export default ContactButton;
