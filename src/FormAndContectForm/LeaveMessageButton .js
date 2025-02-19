import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UseTheme from '../theme';

// CSS for the animations (commented out)
const style = {
  // '@keyframes fadeIn': {
  //   '0%': { opacity: 0 },
  //   '100%': { opacity: 1 },
  // },
  // '@keyframes fadeUp': {
  //   '0%': { opacity: 0, transform: 'translateY(20px)' },
  //   '100%': { opacity: 1, transform: 'translateY(0)' },
  // },
};

const LeaveMessageButton = ({ open, onClose, currentMode }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!message.trim()) {
      setError('Please enter a message.');
    } else {
      alert(`Message submitted: ${message}`);
      onClose(); // Close the modal after submission
      setMessage('');
      setError('');
    }
  };

  const theme = UseTheme();

  // Modal background color based on the current mode
  const modalBackgroundColor = currentMode === 'light' ? theme.palette.text.black : theme.palette.text.white ;
  const textColor = currentMode === 'light' ?   theme.palette.text.black : theme.palette.text.white; // Text color based on theme

  // Commented out transition styles
  // const fadeUp = {
  //   animation: 'fadeUp 1s ease-in-out forwards',
  // };

  // const delay200 = {
  //   animation: 'fadeUp 1s ease-in-out 0.2s forwards',
  // };

  // const delay300 = {
  //   animation: 'fadeUp 1s ease-in-out 0.3s forwards',
  // };

  // const delay400 = {
  //   animation: 'fadeUp 1s ease-in-out 0.4s forwards',
  // };

  // const delay600 = {
  //   animation: 'fadeUp 1s ease-in-out 0.6s forwards',
  // };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        // backgroundColor: modalBackgroundColor,  // Commented out modal background color
        color: textColor, // Apply text color dynamically
        // ...style, // Commented out injecting CSS keyframes
      }}
    >
      <DialogTitle sx={{ color: textColor }}>
        Leave a Message
        {/* Cross button for closing the modal */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 15,
            color: currentMode === 'light' ? theme.palette.text.black : theme.palette.text.white,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom sx={{ color: textColor }}>
          Please enter your message, and we will get back to you shortly.
        </Typography>
        <TextField
          label="Your Message"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          error={!!error}
          helperText={error}
          sx={{ color: textColor }} // Apply text color to input field
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.text.white, // Button text color based on theme
            '&:hover': {
              bgcolor: theme.palette.secondary.dark, // Darker shade on hover
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LeaveMessageButton;
