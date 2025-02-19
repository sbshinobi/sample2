import React, { useEffect, useState, useRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import useTheme from "../theme"; // Import the useTheme hook
import img from "../Images/Benefits/benefits-hero.png"; 
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS CSS for animations

function Banner() {
  const theme = useTheme(); // Use the theme hook here to access your theme
  const [isTextVisible, setIsTextVisible] = useState(false); // Track text visibility
  const [isImageVisible, setIsImageVisible] = useState(false); // Track image visibility
  const textRef = useRef(null); // Reference for the text
  const imageRef = useRef(null); // Reference for the image

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      easing: 'ease-in-out', // Smooth easing for transitions
      once: false, // Allow repeated animations every time the element comes into view
      mirror: true, // Allow animation on reverse scroll as well (i.e., when scrolling back up)
      offset: 100, // Set offset to control when the animation is triggered
    });

    // IntersectionObserver for text visibility
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);  // Text becomes visible
        } else {
          setIsTextVisible(false); // Text goes invisible
        }
      });
    }, observerOptions);

    // IntersectionObserver for image visibility
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);  // Image becomes visible
        } else {
          setIsImageVisible(false); // Image goes invisible
        }
      });
    }, observerOptions);

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }
    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      textObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []); // Empty dependency array to run this code only once after the component mounts

  return (
    <Box data-scroll-section sx={{ px: { sm: 7 }, mt: { xs: 10, sm: 20 } }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Column - Content */}
        <Grid
          item
          xs={12}
          md={6}
          ref={textRef} // Attach the text reference here
          data-aos="fade-up" // Fade-in and move up on scroll
          data-aos-delay="200" // Delay animation slightly for this element
          style={{
            transform: isTextVisible ? 'translateY(0)' : 'translateY(-50px)', // Text transition
            opacity: isTextVisible ? 1 : 0, // Fade-in effect for the text
            transition: 'all 0.5s ease-in-out', // Smooth transition for transform and opacity
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
          >
            Advantages of Outsourcing Medical Billing Solutions
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ mt: 3 }}
          >
            From the moment a patient steps through your doors to the successful collection of payments, our dedicated Revenue Cycle Management (RCM) team is committed to identifying and resolving any obstacles hindering your financial growth.
          </Typography>
        </Grid>


        {/* Right Column - Image */}
              <Grid
                        item
                        xs={12}
                        md={6}
                        ref={imageRef} // Attach ref for observing
                        style={{
                          transform: isImageVisible ? 'translateY(0)' : 'translateY(50px)',
                          opacity: isImageVisible ? 1 : 0,
                          transition: 'all 0.5s linear', // Make transition consistent with the text
                        }}
                      >
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
    </Box>
  );
}

export default Banner;
