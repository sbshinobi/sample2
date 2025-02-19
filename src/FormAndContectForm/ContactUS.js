import React, { useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';

// Validation Schema using Yup
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  message: yup.string().required('Message is required'),
}).required();

function ContactUsModal({ open, handleClose, currentMode }) {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);  // You can replace this with actual form submission logic
    handleClose();      // Close the modal after submission
    reset();            // Reset form fields after submission
  };

  // Modal background color based on the current mode
  const modalBackgroundColor = currentMode === 'dark' ? '#333' : '#fff';  
  const textColor = currentMode === 'dark' ? '#fff' : '#000';  // Text color based on theme
  const buttonColor = currentMode === 'dark' ? 'secondary' : 'secondary';  // Button color based on theme

  // Commented out CSS transition styles
  // const fadeIn = {
  //   animation: 'fadeIn 1s ease-in-out forwards',
  // };

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

  // const delay500 = {
  //   animation: 'fadeUp 1s ease-in-out 0.5s forwards',
  // };

  // Commented out the CSS keyframes for fade and slide-up effects
  // const style = {
  //   '@keyframes fadeIn': {
  //     '0%': { opacity: 0 },
  //     '100%': { opacity: 1 },
  //   },
  //   '@keyframes fadeUp': {
  //     '0%': { opacity: 0, transform: 'translateY(20px)' },
  //     '100%': { opacity: 1, transform: 'translateY(0)' },
  //   },
  // };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: { xs: '90%', sm: 400 },  // Responsive width
          backgroundColor: modalBackgroundColor,
          padding: 3,
          borderRadius: 2,
          boxShadow: 24,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // Commented out injecting CSS keyframes
          // ...style,  
        }}
      >
        {/* Close Icon with dynamic color */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: currentMode === 'dark' ? 'white' : 'black',  // Close icon color based on theme
            // Commented out animation on close icon
            // ...fadeIn,
            zIndex: 9999
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" gutterBottom sx={{ color: textColor }}>
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputLabelProps={{
                      style: { color: textColor },  // Label color
                    }}
                    InputProps={{
                      style: { color: textColor },  // Input text color
                    }}
                    // Commented out animation on input field
                    // sx={fadeUp}  
                  />
                )}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    InputLabelProps={{
                      style: { color: textColor },  // Label color
                    }}
                    InputProps={{
                      style: { color: textColor },  // Input text color
                    }}
                    // Commented out animation with delay
                    // sx={delay200}  
                  />
                )}
              />
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12}>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    InputLabelProps={{
                      style: { color: textColor },  // Label color
                    }}
                    InputProps={{
                      style: { color: textColor },  // Input text color
                    }}
                    // Commented out animation with delay
                    // sx={delay300}  
                  />
                )}
              />
            </Grid>

            {/* Message */}
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    InputLabelProps={{
                      style: { color: textColor },  // Label color
                    }}
                    InputProps={{
                      style: { color: textColor },  // Input text color
                    }}
                    // Commented out animation with delay
                    // sx={delay400}  
                  />
                )}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} textAlign="right">
              <Button
                type="submit"
                variant="contained"
                color={buttonColor}
                // Commented out animation with delay
                // sx={delay500}  
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default ContactUsModal;
