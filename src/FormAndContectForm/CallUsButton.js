import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon
// import AOS from 'aos'; // Import AOS for animations (commented out)
// import 'aos/dist/aos.css'; // Import AOS CSS for animations (commented out)
import useTheme from '../theme';

const CallUsButton = ({ open, onClose, currentMode }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();
  console.log(currentMode, "www");

  // Modal background color based on the current mode
  const modalBackgroundColor = currentMode === 'dark' ? '#333' : '#fff';  
  const textColor = currentMode === 'light' ? theme.palette.text.black : theme.palette.text.white; // Text color 
  const buttonColor = currentMode === 'dark' ? 'secondary' : 'primary';  // Button color based on theme

  // Regular expression for basic phone number validation (matches digits and allows optional "+" at the beginning)
  const phoneRegex = /^(\+?\d{1,3})?(\d{10})$/;

  // Initialize AOS for animations when the component mounts (commented out)
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Set the duration of animations
  //     easing: 'ease-in-out', // Smooth easing for transitions
  //     once: true, // Ensures animations happen only once
  //   });
  // }, []);

  const handleSubmit = () => {
    if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid phone number.');
    } else {
      alert(`Calling ${phoneNumber}`);
      onClose(); // Close the modal after submission
      setPhoneNumber('');
      setError('');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ color: textColor }}>
        Contact Us
        <IconButton
          edge="end"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', top: 8, right: 15 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Please enter your phone number, and we will call you shortly.
        </Typography>
        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          variant="outlined"
          margin="normal"
          error={!!error} // Show error state if there is an error
          helperText={error} // Display the error message
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.text.white, // Button text color based on theme
            '&:hover': {
              bgcolor: theme.palette.primary.dark, // Darker shade on hover
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CallUsButton;
