import React, { useEffect } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Use the MUI useTheme hook
import img from "../Images/HomePage/hero-benefits.png"; // Import your image
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles

function WhyUs() {
  const theme = useTheme(); // Use the theme hook here to access your theme

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      easing: 'ease-in-out',  // Easing function for smooth animation
      once: false,  // Ensure animation happens every time the element is visible
      mirror: true,  // Allow animation on reverse scrolling (i.e., when scrolling up)
    });
  }, []);

  return (
    <Paper 
      data-scroll-section 
      sx={{
        px: { sm: 7 },
        mt: 10,
        mb: 10,
        bgcolor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.default, // Set primary.main for light and grey (#B0B0B0) for dark mode
        borderRadius: 3,
        mx: { sm: 7 },
      }}
      data-aos="fade-up"  // Apply fade-up animation to the entire section
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Column - Content */}
        <Grid item xs={12} md={6} data-aos="slide-up" data-aos-delay="200">
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              color: theme.palette.mode === 'light' ? theme.palette.text.white : theme.palette.primary.main, 
              fontWeight: "bold" 
            }}
          >
            Benefits of Choosing Vcare Billing Services
          </Typography>
          
          <Typography 
            variant="body2" 
            paragraph 
            sx={{ 
              mt: 3, 
              color: theme.palette.mode === 'light' ? theme.palette.text.white : theme.palette.text.secondary, 
            }}
          >
            At Vcare Medical Billing, we relieve financial burdens and actively work to enhance your overall RCM operations. It's our commitment to every medical billing client nationwide. Just as you excel in your field, we excel in ours. Your success is our success.
          </Typography>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6} data-aos="fade-in" data-aos-delay="400">
          <Box
            component="img"
            src={img}
            alt="Successful Medical Team"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px', // Optional: rounded corners for a softer look
              mb: 3,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default WhyUs;
