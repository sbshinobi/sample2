import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ContactButton from '../Components/button'; 
import useTheme from "../theme"; // Import the useTheme hook
import img from "../Images/About us/about-contact.png"; 
import ContactUsModal from "../FormAndContectForm/ContactUS";
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS CSS for animations

function ContactUs({ currentMode }) { 
  const theme = useTheme(); // Use the theme hook here to access your theme
  const [modalOpen, setModalOpen] = useState(false); // Modal state

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      easing: 'ease-in-out', // Smooth easing for transitions
      once: false, // This makes the animation happen every time the element comes into view
    });
  }, []);

  return (
    <Box data-scroll-section sx={{ px: { sm: 7 }, mt: 10 }}>
      {/* Heading with Animation */}
      <Typography 
        variant='h3' 
        sx={{ 
          fontWeight: "bold", 
          color: theme.palette.primary.main, 
          textAlign: "center", 
          mb: 10 
        }}
        data-aos="fade-up" // Animation on scroll
        data-aos-delay="100" // Delay for staggered appearance
      >
        Contact Us Today
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Column - Content */}
        <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            Imagine us as an integral part of your team, working in tandem to streamline operations. Our goal? To save your valuable time, boost your revenue streams, and empower you to dedicate more focus to providing exceptional patient care. We take immense pride in being catalysts for our clients' growth. Don't hesitate to get in touch with us today and discover how our customized strategies and industry expertise can significantly elevate your facility's revenue cycle management.
          </Typography>
          <Box display="flex" gap={2} data-aos="fade-up" data-aos-delay="300">
            <ContactButton
              label="Contact Us"
              message="Feel free to Contact us anytime!"
              onClick={() => setModalOpen(true)} // Open modal on click
            />
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6} data-aos="fade-down" data-aos-delay="400">
          <Box
            component="img"
            src={img}
            alt="Successful Medical Team"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px', // Optional: rounded corners for a softer look
            }}
          />
        </Grid>
      </Grid>

      {/* Contact Us Modal */}
      <ContactUsModal
        open={modalOpen} // Control the modal visibility
        handleClose={() => setModalOpen(false)} // Close modal on click outside or button
        currentMode={currentMode} // Pass the current theme mode (light or dark)
      />
    </Box>
  );
}

export default ContactUs;
